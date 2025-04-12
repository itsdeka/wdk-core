import {
  validateInput,
  type ApproveInput,
  type BridgeOutput,
  type ClaimInput,
  type GetAllowanceInput,
  type GetDurationInput,
  type GetExtraGasInput,
  type GetLimitInput,
  type GetMessageFeeInput,
  type GetOutputInput,
  type GetUnclaimedInput,
  type IsRegisteredInput,
  type RegisterInput,
  type TransferInput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import {
  type AdapterParams,
  type Currency,
  CurrencyAmount,
  type FeeQuote,
  getNativeCurrency,
  isToken,
  type Transaction,
  Token,
  castCurrencyAmountUnsafe,
  assert,
} from '@layerzerolabs/ui-core';

import {type Signer, constants} from 'ethers';
import {
  createTransaction,
  serializeAdapterParams,
  type ProviderFactory,
  ERC20__api,
} from '@layerzerolabs/ui-evm';

import {OriginalTokenBridge__factory, WrappedTokenBridge__factory} from '../typechain';
import type {LzLib} from '../typechain/WrappedTokenBridge';
import {PacketType} from '../types/PacketType';
import {getExtraGas} from '../utils/getExtraGas';
import {isValidSwap} from '../utils/isValidSwap';
import {type AbstractTokenBridge, BaseTokenBridge, type BridgeFee} from './AbstractTokenBridge';
import type {BridgeContract, WrappedAssetBridgeConfig} from '../types/WrappedAssetBridgeConfig';

export class WrappedTokenBridge extends BaseTokenBridge implements AbstractTokenBridge<Signer> {
  protected readonly erc20: ERC20__api;

  constructor(
    protected providerFactory: ProviderFactory,
    protected bridge: BridgeContract,
    config: WrappedAssetBridgeConfig,
  ) {
    super(config);
    this.erc20 = new ERC20__api(providerFactory);
  }

  supportsClaim(currency: Currency): boolean {
    return false;
  }

  supportsRegister(currency: Currency): boolean {
    if (currency.chainKey !== this.bridge.chainKey) return false;
    if (!this.config.tokens.flat().some((token) => token.equals(currency))) return false;
    return true;
  }

  async getDuration(input: GetDurationInput): Promise<number> {
    throw new Error('Not implemented');
  }

  async getAllowance({token, address}: GetAllowanceInput): Promise<CurrencyAmount<Currency>> {
    if (!isToken(token)) {
      return CurrencyAmount.fromRawAmount(token, constants.MaxUint256.toString());
    }
    const contract = this.getContract();
    return this.erc20.forToken(token).allowance(address, contract.address);
  }

  async approve({amount}: ApproveInput) {
    const contract = this.getContract();
    return this.erc20.forToken(amount.token).approve(amount, contract.address);
  }

  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    const srcDeployment = this.tryGetDeployment(srcToken.chainKey);
    const dstDeployment = this.tryGetDeployment(dstToken.chainKey);
    if (!srcDeployment?.bridgeWrapped) return false;
    if (!dstDeployment?.bridgeOriginal) return false;
    return isValidSwap(srcToken, dstToken, this.config);
  }

  async isRegistered({token, address}: IsRegisteredInput): Promise<boolean> {
    return true;
  }

  async getUnclaimed({token, address}: GetUnclaimedInput): Promise<CurrencyAmount<Currency>> {
    return CurrencyAmount.fromRawAmount(token, 0);
  }

  claim(input: ClaimInput): Promise<Transaction<Signer>> {
    throw new Error('Method not supported.');
  }

  register(input: RegisterInput): Promise<Transaction<Signer>> {
    throw new Error('Method not supported.');
  }

  async getExtraGas({srcToken, dstToken}: GetExtraGasInput): Promise<number> {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const contract = this.getContract();
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);
    const amount = await contract.minDstGasLookup(dstEid, PacketType.PT_UNLOCK);
    // return default extra gas if not configured (0)
    return amount.toNumber() || getExtraGas(srcChainKey, dstChainKey);
  }

  async transfer(input: TransferInput): Promise<Transaction<Signer>> {
    if (isToken(input.srcToken)) {
      return this.transferToken(input);
    }
    return this.transferEth(input);
  }

  private async transferToken(input: TransferInput): Promise<Transaction<Signer>> {
    validateInput(input);
    const srcToken = input.srcToken;
    assert(isToken(srcToken));
    const contract = this.getContract();
    const srcChainKey = srcToken.chainKey;
    const value = input.fee.nativeFee.quotient;

    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const callParams = this.buildCallParams(input);
    const adapterParams = this.buildLayerZeroTxParams(input.adapterParams);
    const unwrapWeth = isToken(input.dstToken) ? false : true;

    const populatedTransaction = contract.populateTransaction.bridge(
      srcToken.address,
      dstEid,
      input.srcAmount.quotient,
      input.dstAddress,
      unwrapWeth,
      callParams,
      adapterParams,
      {value, from: input.srcAddress},
    );

    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey,
    });
  }

  private async transferEth(input: TransferInput): Promise<Transaction<Signer>> {
    throw new Error('Not implemented');
  }

  protected async getBridgeFee(
    inputAmount: CurrencyAmount,
    dstToken: Currency,
  ): Promise<CurrencyAmount> {
    const bps = await this.getWithdrawFeeBps();
    return inputAmount.multiply(bps).divide(10000);
  }

  // extracted so it can be cached
  protected getWithdrawFeeBps = () => {
    const contract = this.getContract();
    return contract.withdrawalFeeBps();
  };

  async getMessageFee({srcToken, dstToken, adapterParams}: GetMessageFeeInput): Promise<FeeQuote> {
    const useZro = false;
    const native = getNativeCurrency(srcToken.chainKey);
    const lzParams = this.buildLayerZeroTxParams(adapterParams);
    const contract = this.getContract();
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);

    const {nativeFee, zroFee} = await contract.estimateBridgeFee(dstEid, useZro, lzParams);

    const fee: FeeQuote = {
      nativeFee: CurrencyAmount.fromRawAmount(native, nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, zroFee.toBigInt()),
    };
    return fee;
  }

  async getOutput({srcAmount, dstToken}: GetOutputInput): Promise<BridgeOutput<BridgeFee>> {
    const fee = await this.getBridgeFee(srcAmount, dstToken);
    const outputAmountLD = srcAmount.subtract(fee);
    const outputAmountRD = castCurrencyAmountUnsafe(outputAmountLD, dstToken);
    return {
      fee: {bridgeFee: fee},
      dstAmount: outputAmountRD,
    };
  }

  protected async getWeth(chainKey: string): Promise<Token> {
    const deployment = this.getDeployment(chainKey);
    assert(deployment.bridgeOriginal, `No bridgeOriginal for ${chainKey}`);
    const contract = OriginalTokenBridge__factory.connect(
      deployment.bridgeOriginal.address,
      this.providerFactory(chainKey),
    );
    const weth = await contract.weth();
    return Token.from({chainKey, address: weth, decimals: 18, symbol: 'WETH'});
  }

  async getLimit({srcToken, dstToken}: GetLimitInput): Promise<CurrencyAmount> {
    const dstChainKey = dstToken.chainKey;
    const dstDeployment = this.getDeployment(dstChainKey);
    assert(dstDeployment.bridgeOriginal, `No bridgeOriginal for ${dstChainKey}`);
    const original = OriginalTokenBridge__factory.connect(
      dstDeployment.bridgeOriginal.address,
      this.providerFactory(dstChainKey),
    );
    const dstTokenAddress = (isToken(dstToken) ? dstToken : await this.getWeth(dstChainKey))
      .address;
    const [ld2sdRate, tvlSD] = await Promise.all([
      original.LDtoSDConversionRate(dstTokenAddress),
      original.totalValueLockedSD(dstTokenAddress),
    ]);

    const tvlLD = tvlSD.mul(ld2sdRate);
    return CurrencyAmount.fromRawAmount(srcToken, tvlLD.toString());
  }

  protected getContract() {
    const provider = this.providerFactory(this.bridge.chainKey);
    const contract = WrappedTokenBridge__factory.connect(this.bridge.address, provider);
    return contract;
  }

  protected buildLayerZeroTxParams(adapterParams: AdapterParams): string {
    return serializeAdapterParams(adapterParams);
  }

  protected buildCallParams(input: TransferInput): LzLib.CallParamsStruct {
    const callParams: LzLib.CallParamsStruct = {
      refundAddress: input.srcAddress,
      zroPaymentAddress: constants.AddressZero,
    };
    return callParams;
  }
}
