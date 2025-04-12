import type {
  BridgeApi,
  BridgeOptions,
  GetDurationInput,
  GetDurationResult,
  GetOptionsInput,
  GetRouteInput,
  GetRouteResult,
  ResolvedRoute,
  TransferInput,
} from '@layerzerolabs/ui-bridge-sdk/v2';
import {
  AdapterParams,
  castCurrencyAmountUnsafe,
  type ChainKey,
  type Currency,
  CurrencyAmount,
  getNativeCurrency,
  hasAddress,
  isAptosChainKey,
  isEvmChainKey,
  MessageFee,
  removeDust,
  type Transaction,
} from '@layerzerolabs/ui-core';
import {
  AddressOne,
  addressToBytes32,
  AddressZero,
  createTransaction,
  ERC20__api,
  type ProviderFactory,
  serializeAdapterParams,
} from '@layerzerolabs/ui-evm';
import {ITokenBridge__factory} from './typechain/factories/ITokenBridge__factory';
import type {AptosBridgeConfig} from './types/AptosBridgeConfig';
import {getDeployment, getDstAddressForQuote, getMaxAmount, getPath, isValidPair} from './utils';

export class AptosBridgeV2__evm implements BridgeApi {
  erc20: ERC20__api;
  protected readonly sharedDecimals = 6;
  constructor(
    protected config: AptosBridgeConfig,
    protected getProvider: ProviderFactory,
  ) {
    this.erc20 = new ERC20__api(getProvider);
  }

  async getDuration(input: GetDurationInput): Promise<GetDurationResult> {
    return {estimated: 0};
  }

  async getOptions(input: GetOptionsInput): Promise<BridgeOptions> {
    return {
      options: [{mode: 'taxi'}],
    };
  }

  async getRoute(input: GetRouteInput): Promise<GetRouteResult> {
    const path = getPath(input);
    const minDstGas = await this.getMinDstGas(path);
    const [messageFee0, messageFee1, allowance, duration] = await Promise.all([
      this.getMessageFee(path, {
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
        dstNativeAmount: 0n,
      }),
      this.getMessageFee(path, {
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
        dstNativeAmount: input.dstNativeAmount.toBigInt(),
      }),
      this.getAllowance({
        srcToken: input.srcToken,
        srcAddress: input.srcAddress,
      }),
      this.getDuration(input),
    ]);

    const srcAmount = removeDust(input.srcAmount, this.sharedDecimals);
    const srcAmountMax = getMaxAmount(input.srcToken);
    const dstAmount = castCurrencyAmountUnsafe(srcAmount, input.dstToken);
    const dstAmountMin = dstAmount;

    const route: ResolvedRoute = {
      allowance,
      srcAddress: input.srcAddress,
      srcAmount,
      dstAddress: input.dstAddress,
      dstAmount,
      dstAmountMin,
      duration,
      mode: 'taxi',
      dstNativeAmount: input.dstNativeAmount,
      srcToken: input.srcToken,
      dstToken: input.dstToken,
      messageFee: messageFee0,
      error: undefined,
      option: {
        mode: 'taxi',
      },
      srcAmountMax,
      gasCost: undefined!,
    };

    return route;
  }

  async approve(input: TransferInput): Promise<Transaction<unknown>> {
    const bridge = getDeployment(input.srcChainKey, this.config).bridge;
    return this.erc20.forToken(input.srcToken).approve(input.srcAmount, bridge.address);
  }

  async getAllowance(input: {srcToken: Currency; srcAddress: string}): Promise<CurrencyAmount> {
    if (!hasAddress(input.srcToken)) return getMaxAmount(input.srcToken);
    const spender = getDeployment(input.srcToken.chainKey, this.config).bridge.address;
    return this.erc20.forToken(input.srcToken).allowance(input.srcAddress, spender);
  }

  async transfer(input: TransferInput): Promise<Transaction<unknown>> {
    const path = getPath(input);
    const minDstGas = await this.getMinDstGas(path);
    const messageFee = await this.getMessageFee(path, {
      dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
      dstNativeAmount: input.dstNativeAmount.toBigInt(),
      minDstGas,
    });
    const srcAmount = input.srcAmount.toBigInt();
    const dstAddress = addressToBytes32(input.dstAddress);
    const contract = this.getBridgeContract(path.srcChainKey);
    const extraGas = Number(minDstGas);
    const adapterParams = serializeAdapterParams(
      input.dstNativeAmount.equalTo(0)
        ? AdapterParams.forV1(extraGas)
        : AdapterParams.forV2({
            extraGas,
            dstNativeAddress: input.dstAddress,
            dstNativeAmount: input.dstNativeAmount,
          }),
    );
    const value = hasAddress(input.srcToken)
      ? messageFee.nativeFee.toBigInt()
      : messageFee.nativeFee.add(input.srcAmount).toBigInt();

    const populatedTransaction = hasAddress(input.srcToken)
      ? contract.populateTransaction.sendToAptos(
          input.srcToken.address,
          dstAddress,
          srcAmount,
          {
            refundAddress: input.srcAddress,
            zroPaymentAddress: AddressZero,
          },
          adapterParams,
          {value},
        )
      : contract.populateTransaction.sendETHToAptos(
          dstAddress,
          srcAmount,
          {
            refundAddress: input.srcAddress,
            zroPaymentAddress: AddressZero,
          },
          adapterParams,
          {value},
        );

    return createTransaction(populatedTransaction, {
      provider: this.getProvider(path.srcChainKey),
      chainKey: path.srcChainKey,
    });
  }

  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    return (
      isEvmChainKey(srcToken.chainKey) &&
      isAptosChainKey(dstToken.chainKey) &&
      isValidPair(srcToken, dstToken, this.config)
    );
  }

  async getMinDstGas(path: {srcChainKey: string; dstChainKey: string}): Promise<bigint> {
    return 10_000n;
  }

  async getMessageFee(
    path: {srcChainKey: ChainKey; dstChainKey: ChainKey},
    {
      dstNativeAmount,
      minDstGas,
      dstNativeAddress,
    }: {dstNativeAmount: bigint; minDstGas: bigint; dstNativeAddress: string},
  ): Promise<MessageFee> {
    const callParams = {refundAddress: AddressOne, zroPaymentAddress: AddressOne};
    const contract = this.getBridgeContract(path.srcChainKey);
    const dstNative = getNativeCurrency(path.dstChainKey);

    const extraGas = Number(minDstGas);
    const adapterParams = serializeAdapterParams(
      dstNativeAmount > 0
        ? AdapterParams.forV1(extraGas)
        : AdapterParams.forV2({
            extraGas,
            dstNativeAmount: CurrencyAmount.fromBigInt(dstNative, dstNativeAmount),
            dstNativeAddress,
          }),
    );

    const {nativeFee, zroFee} = await contract.quoteForSend(callParams, adapterParams);
    return MessageFee.from(path.srcChainKey, {
      nativeFee: nativeFee.toBigInt(),
      zroFee: zroFee.toBigInt(),
    });
  }

  getBridgeContract(chainKey: ChainKey) {
    const provider = this.getProvider(chainKey);
    const deployment = getDeployment(chainKey, this.config);
    const contract = ITokenBridge__factory.connect(deployment.bridge.address, provider);
    return contract;
  }
}
