import {
  type BridgeApi,
  validateInput,
  type TransferInput,
  type GetAllowanceInput,
  type ApproveInput,
  type IsRegisteredInput,
  type GetUnclaimedInput,
  type ClaimInput,
  type RegisterInput,
  type GetMessageFeeInput,
  type GetOutputInput,
  type GetLimitInput,
  type GetExtraGasInput,
  type GetDurationInput,
  type GetOptionsInput,
  type BridgeOptions,
  type BridgeOption,
  type BridgeOutput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import {
  type AdapterParams,
  castCurrencyAmountUnsafe,
  type Currency,
  CurrencyAmount,
  type FeeQuote,
  getNativeCurrency,
  isEvmChainKey,
  isNativeCurrency,
  MaxUint256,
  type Token,
  type Transaction,
  assert,
} from '@layerzerolabs/ui-core';
import {
  ONE_ADDRESS,
  type ProviderFactory,
  createTransaction,
  ERC20__api,
} from '@layerzerolabs/ui-evm';
import {constants, type Signer} from 'ethers';
import {
  Pool__factory,
  type Router,
  RouterETH__factory,
  Router__factory,
  type StargateFeeLibrary,
  StargateFeeLibrary__factory,
} from '../typechain';

import type {StargateV1Sdk} from '../StargateV1Sdk';
import pMemoize from 'p-memoize';
import type {IStargateRouter} from '../typechain/Router';

export type StargateV1Fee = {
  totalFee: CurrencyAmount;
  eqFee: CurrencyAmount;
  eqReward: CurrencyAmount;
  lpFee: CurrencyAmount;
  protocolFee: CurrencyAmount;
  lkbRemove: CurrencyAmount;
};

enum FunctionType {
  TYPE_SWAP_REMOTE = 1,
  TYPE_WITHDRAW_REMOTE = 4,
  TYPE_REDEEM_LOCAL_CALL_BACK = 3,
}

export const StargateV1BridgeMode = {
  TAXI: 'taxi',
} as const;

export class StargateV1Bridge implements BridgeApi<Signer, StargateV1Fee> {
  protected feeLibraryCache: Map<string, StargateFeeLibrary> = new Map();
  protected readonly erc20: ERC20__api;
  constructor(
    protected readonly providerFactory: ProviderFactory,
    public readonly sdk: StargateV1Sdk,
  ) {
    this.erc20 = new ERC20__api(providerFactory);
  }

  async getOptions(input: GetOptionsInput): Promise<BridgeOptions> {
    const taxiOption: BridgeOption = {
      mode: 'taxi',
    };
    return {options: [taxiOption]};
  }

  async getAllowance({token, address}: GetAllowanceInput): Promise<CurrencyAmount> {
    if (isNativeCurrency(token)) return CurrencyAmount.fromBigInt(token, MaxUint256);
    const srcChainKey = token.chainKey;
    const router = this.sdk.getRouterAddress(srcChainKey);
    return this.erc20.forToken(token).allowance(address, router);
  }

  async approve({amount}: ApproveInput) {
    const srcToken = amount.token;
    const srcChainKey = srcToken.chainKey;
    const routerAddress = this.sdk.getRouterAddress(srcChainKey);
    return this.erc20.forToken(amount.token).approve(amount, routerAddress);
  }

  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    const link = this.sdk.tryGetLink(srcToken, dstToken);
    if (!link) return false;
    if (link.srcPool.disabled) return false;
    if (link.dstPool.disabled) return false;
    if (link.chainPath.weight === 0) return false;
    if (!isEvmChainKey(link.srcPool.chainKey)) return false;
    return link.chainPath.ready;
  }

  supportsClaim(token: Currency): boolean {
    return false;
  }

  supportsRegister(token: Currency): boolean {
    return !!this.sdk.getPools().some((p) => p.token.equals(token));
  }

  async isRegistered(input: IsRegisteredInput): Promise<boolean> {
    return true;
  }

  async getUnclaimed({token: currency}: GetUnclaimedInput): Promise<CurrencyAmount<Currency>> {
    return CurrencyAmount.fromBigInt(currency, BigInt(0));
  }

  claim(input: ClaimInput): Promise<Transaction<Signer>> {
    throw new Error('Method not supported.');
  }

  register(input: RegisterInput): Promise<Transaction<Signer>> {
    throw new Error('Method not supported.');
  }

  protected validateInput(input: TransferInput): void {
    validateInput(input);
    const {srcPool, dstPool} = this.sdk.getLink(input.srcToken, input.dstToken);

    if (srcPool.poolId === 13 || dstPool.poolId === 13) {
      assert(srcPool.poolId === 13, 'srcPool is not ETH');
      assert(dstPool.poolId === 13, 'dstPool is not ETH');
    }

    assert(
      srcPool.chainKey === input.srcChainKey,
      `srcPool (${srcPool.chainKey}) and srcChainKey (${input.srcChainKey}) do not match`,
    );
    assert(
      dstPool.chainKey === input.dstChainKey,
      `dstPool (${dstPool.chainKey}) and dstChainId (${input.dstChainKey}) do not match`,
    );
  }

  transfer(input: TransferInput): Promise<Transaction<Signer>> {
    this.validateInput(input);
    const {srcPool} = this.sdk.getLink(input.srcToken, input.dstToken);
    if (srcPool.poolId === 13) return this.transferEth(input);
    return this.transferToken(input);
  }

  protected async transferEth(input: TransferInput): Promise<Transaction<Signer>> {
    const srcChainKey = input.srcChainKey;
    const {srcPool, dstPool} = this.sdk.getLink(input.srcToken, input.dstToken);
    assert(srcPool.poolId === 13, 'eth');
    assert(dstPool.poolId === 13, 'eth');
    const provider = this.providerFactory(input.srcChainKey);
    const routerEthAddress = this.sdk.getRouterEthAddress(srcPool.chainKey);
    const router = RouterETH__factory.connect(routerEthAddress, provider);
    const amountLD = input.srcAmount.quotient;
    const minAmountLD = input.dstAmountMin.quotient;
    const dstEid = dstPool.eid;
    const {srcAddress, dstAddress} = input;

    const value = input.srcAmount.add(input.fee.nativeFee).quotient;

    const populatedTransaction = router.populateTransaction.swapETH(
      dstEid,
      srcAddress,
      dstAddress,
      amountLD,
      minAmountLD,
      {value, from: srcAddress},
    );

    return createTransaction(populatedTransaction, {provider, chainKey: srcChainKey});
  }

  protected async transferToken(input: TransferInput): Promise<Transaction<Signer>> {
    validateInput(input);
    const srcChainKey = input.srcChainKey;
    const {srcPool, dstPool} = this.sdk.getLink(input.srcToken, input.dstToken);

    const provider = this.providerFactory(input.srcChainKey);
    const router = this.getRouterContract(srcPool.chainKey);
    const amountLD = input.srcAmount.quotient;

    const minAmountLD =
      // at this point the conversion is safe
      castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken).quotient;
    const {adapterParams} = input;

    const dstEid = dstPool.eid;
    const srcPoolId = srcPool.poolId;
    const dstPoolId = dstPool.poolId;
    const {srcAddress, dstAddress} = input;
    const lzTxParams = this.lzTxParams(adapterParams);
    const payload = '0x';
    const value = input.fee.nativeFee.quotient;

    const populatedTransaction = router.populateTransaction.swap(
      dstEid,
      srcPoolId,
      dstPoolId,
      srcAddress,
      amountLD,
      minAmountLD,
      lzTxParams,
      dstAddress,
      payload,
      {value, from: srcAddress},
    );

    return createTransaction(populatedTransaction, {
      provider,
      chainKey: srcChainKey,
    });
  }

  async getMessageFee({srcToken, dstToken, adapterParams}: GetMessageFeeInput): Promise<FeeQuote> {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const router = this.getRouterContract(srcChainKey);

    const payload = '0x';
    const lzTxParams: IStargateRouter.LzTxObjStruct = this.lzTxParams(adapterParams);

    const native = getNativeCurrency(srcChainKey);
    const [nativeFee, lzFee] = await router.quoteLayerZeroFee(
      dstEid,
      FunctionType.TYPE_SWAP_REMOTE,
      ONE_ADDRESS,
      payload,
      lzTxParams,
    );
    return {
      nativeFee: CurrencyAmount.fromBigInt(native, nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromBigInt(native, lzFee.toBigInt()),
    };
  }

  protected lzTxParams(adapterParams: AdapterParams): IStargateRouter.LzTxObjStruct {
    const lzTxParams: IStargateRouter.LzTxObjStruct = {
      dstGasForCall: adapterParams.extraGas,
      dstNativeAddr: adapterParams.dstNativeAddress ?? ONE_ADDRESS,
      dstNativeAmount: adapterParams.dstNativeAmount
        ? adapterParams.dstNativeAmount.quotient
        : constants.Zero,
    };
    return lzTxParams;
  }

  protected getFeeLibraryAddress = pMemoize(
    async (lpToken: Token): Promise<string> => {
      const provider = this.providerFactory(lpToken.chainKey);
      const pool = Pool__factory.connect(lpToken.address, provider);
      return pool.feeLibrary();
    },
    {cacheKey: ([lpToken]) => lpToken.id},
  );

  protected async getFeeLibrary(lpToken: Token): Promise<StargateFeeLibrary> {
    const feeLibraryAddress = await this.getFeeLibraryAddress(lpToken);
    const provider = this.providerFactory(lpToken.chainKey);
    const feeLibrary = StargateFeeLibrary__factory.connect(feeLibraryAddress, provider);
    return feeLibrary;
  }

  async getOutput({
    srcAmount: inputAmountLD,
    dstToken,
  }: GetOutputInput): Promise<BridgeOutput<StargateV1Fee>> {
    const srcToken = inputAmountLD.token;
    const {srcPool, dstPool} = this.sdk.getLink(srcToken, dstToken);
    const feeLibrary = await this.getFeeLibrary(srcPool.lpToken);

    const amountSD = amountLDtoSD(inputAmountLD, srcPool.lpToken);
    const srcPoolId = srcPool.poolId;
    const dstPoolId = dstPool.poolId;
    const dstEid = dstPool.eid;

    const srcAddress = ONE_ADDRESS;

    const fees = await feeLibrary.getFees(
      srcPoolId,
      dstPoolId,
      dstEid,
      srcAddress,
      amountSD.quotient,
    );

    const feeSD = {
      eqFee: CurrencyAmount.fromBigInt(srcPool.lpToken, fees.eqFee.toBigInt()),
      eqReward: CurrencyAmount.fromBigInt(srcPool.lpToken, fees.eqReward.toBigInt()),
      lpFee: CurrencyAmount.fromBigInt(srcPool.lpToken, fees.lpFee.toBigInt()),
      protocolFee: CurrencyAmount.fromBigInt(srcPool.lpToken, fees.protocolFee.toBigInt()),
      lkbRemove: CurrencyAmount.fromBigInt(srcPool.lpToken, fees.lkbRemove.toBigInt()),
    };

    const feeLD = {
      eqFee: amountSDtoLD(feeSD.eqFee, srcPool.token),
      eqReward: amountSDtoLD(feeSD.eqReward, srcPool.token),
      lpFee: amountSDtoLD(feeSD.lpFee, srcPool.token),
      protocolFee: amountSDtoLD(feeSD.protocolFee, srcPool.token),
      lkbRemove: amountSDtoLD(feeSD.lkbRemove, srcPool.token),
    };

    const totalFeeSD = feeSD.eqFee
      //
      .add(feeSD.protocolFee)
      .add(feeSD.lpFee)
      .subtract(feeSD.eqReward);

    const totalFeeLD = amountSDtoLD(totalFeeSD, srcToken);
    const inputAmountSD = amountLDtoSD(inputAmountLD, srcPool.lpToken);
    const outputAmountSD = inputAmountSD.subtract(totalFeeSD);
    const outputAmountRD = amountSDtoLD(outputAmountSD, dstPool.token);

    const output = {
      dstAmount: outputAmountRD,
      fee: {
        totalFee: totalFeeLD,
        ...feeLD,
      },
    };
    return output;
  }

  async getLimit({srcToken, dstToken}: GetLimitInput): Promise<CurrencyAmount<Currency>> {
    const {srcPool, dstPool} = this.sdk.getLink(srcToken, dstToken);

    const provider = this.providerFactory(srcPool.chainKey);
    const pool = Pool__factory.connect(srcPool.lpToken.address, provider);
    const dstEid = dstPool.eid;
    const dstPoolId = dstPool.poolId;

    const chainPath = await pool.getChainPath(dstEid, dstPoolId);
    const balanceLP = CurrencyAmount.fromBigInt(srcPool.lpToken, chainPath.balance.toBigInt());
    const balanceLD = amountSDtoLD(balanceLP, srcToken);
    return balanceLD;
  }

  async getExtraGas(input: GetExtraGasInput): Promise<number> {
    return 0;
  }

  async getDuration(input: GetDurationInput): Promise<number> {
    // todo: use UA configuration
    throw new Error('Not implemented');
  }

  protected chainKeyToEndpointId(chainKey: string): number {
    return this.sdk.getDeployment(chainKey).eid;
  }

  protected getRouterContract(chainKey: string): Router {
    const routerAddress = this.sdk.getRouterAddress(chainKey);
    const provider = this.providerFactory(chainKey);
    const router = Router__factory.connect(routerAddress, provider);
    return router;
  }
}

function amountLDtoSD(amountLD: CurrencyAmount, lpToken: Currency): CurrencyAmount {
  // see Pool.sol:
  //
  // sharedDecimals = _sharedDecimals;
  // decimals = uint8(_sharedDecimals);
  const sharedDecimals = lpToken.decimals;

  return CurrencyAmount.fromBigInt(
    lpToken,
    amountLD.multiply(BigInt(10) ** BigInt(sharedDecimals)).divide(amountLD.decimalScale).quotient,
  );
}

function amountSDtoLD(
  amountSD: CurrencyAmount,
  baseToken: Currency,
  localDecimals = baseToken.decimals,
): CurrencyAmount {
  return CurrencyAmount.fromBigInt(
    baseToken,
    amountSD.multiply(BigInt(10) ** BigInt(localDecimals)).divide(amountSD.decimalScale).quotient,
  );
}
