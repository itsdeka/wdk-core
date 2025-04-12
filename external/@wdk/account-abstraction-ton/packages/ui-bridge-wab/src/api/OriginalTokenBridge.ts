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
  MaxUint256,
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

import {OriginalTokenBridge__factory} from '../typechain';
import type {LzLib} from '../typechain/WrappedTokenBridge';
import {PacketType} from '../types/PacketType';
import {getExtraGas} from '../utils/getExtraGas';
import {isValidSwap} from '../utils/isValidSwap';
import type {AbstractTokenBridge, BridgeFee} from './AbstractTokenBridge';
import {BaseTokenBridge} from './AbstractTokenBridge';
import type {BridgeContract, WrappedAssetBridgeConfig} from '../types/WrappedAssetBridgeConfig';

export class OriginalTokenBridge extends BaseTokenBridge implements AbstractTokenBridge<Signer> {
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

  async getAllowance({token, address}: GetAllowanceInput): Promise<CurrencyAmount> {
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
    if (!srcDeployment?.bridgeOriginal) return false;
    if (!dstDeployment?.bridgeWrapped) return false;
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
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const contract = this.getContract();
    const amount = await contract.minDstGasLookup(dstEid, PacketType.PT_MINT);
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
    const srcChainKey = srcToken.chainKey;
    assert(isToken(srcToken));
    const contract = this.getContract();
    const value = input.fee.nativeFee.quotient;

    const callParams = this.buildCallParams(input);
    const adapterParams = this.buildLayerZeroTxParams(input.adapterParams);

    const populatedTransaction = contract.populateTransaction.bridge(
      srcToken.address,
      input.srcAmount.quotient,
      input.dstAddress,
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
    validateInput(input);
    assert(!isToken(input.srcToken));
    const srcChainKey = input.srcChainKey;
    const contract = this.getContract();
    const value = input.fee.nativeFee.add(input.srcAmount).quotient;

    const callParams = this.buildCallParams(input);
    const adapterParams = this.buildLayerZeroTxParams(input.adapterParams);

    // each version uses different method but both have same signature
    const bridgeMethod = this.config.version === 2 ? 'bridgeNative' : 'bridgeETH';

    const populatedTransaction = contract.populateTransaction[bridgeMethod](
      input.srcAmount.quotient,
      input.dstAddress,
      callParams,
      adapterParams,
      {value, from: input.srcAddress},
    );

    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey,
    });
  }

  async getMessageFee({srcToken, dstToken, adapterParams}: GetMessageFeeInput): Promise<FeeQuote> {
    const srcChainKey = srcToken.chainKey;
    const native = getNativeCurrency(srcChainKey);

    const lzParams = this.buildLayerZeroTxParams(adapterParams);
    const useZro = false;

    const contract = this.getContract();

    // dstChainId is hardcoded in contract
    const response = await contract.estimateBridgeFee(useZro, lzParams);

    const fee: FeeQuote = {
      nativeFee: CurrencyAmount.fromRawAmount(native, response.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, response.zroFee.toBigInt()),
    };
    return fee;
  }

  async getOutput({srcAmount, dstToken}: GetOutputInput): Promise<BridgeOutput<BridgeFee>> {
    // this way fee is 0
    const bridgeFee = srcAmount.multiply(0);
    const outputAmountLD = srcAmount.subtract(bridgeFee);
    const outputAmountRD = castCurrencyAmountUnsafe(outputAmountLD, dstToken);

    return {
      fee: {bridgeFee: bridgeFee},
      dstAmount: outputAmountRD,
    };
  }

  async getLimit({srcToken}: GetLimitInput): Promise<CurrencyAmount<Currency>> {
    return CurrencyAmount.fromRawAmount(srcToken, MaxUint256);
  }

  protected getContract() {
    const provider = this.providerFactory(this.bridge.chainKey);
    const contract = OriginalTokenBridge__factory.connect(this.bridge.address, provider);
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
