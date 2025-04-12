import {
  validateInput,
  type ApproveInput,
  type BridgeApi,
  type BridgeOption,
  type BridgeOptions,
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
  isEvmChainKey,
  getMessageDuration,
  removeDust,
  type ChainKey,
  assert,
} from '@layerzerolabs/ui-core';
import {ERC20__api, addressToBytes32} from '@layerzerolabs/ui-evm';

import {utils, type Signer, constants} from 'ethers';
import {
  createTransaction,
  ONE_ADDRESS,
  type ProviderFactory,
  serializeAdapterParams,
} from '@layerzerolabs/ui-evm';
import {OFTWrapper__factory, OFT__factory, ProxyOFT__factory} from './typechain';
import type {ICommonOFT} from './typechain/OFT';
import type {OftPartnerConfig, OftWrapperConfig} from './types';
import type {OftBridgeConfig} from '@layerzerolabs/ui-bridge-oft';
import {mainnet} from './config/mainnet';

enum PacketType {
  PT_SEND = 0,
  PT_SEND_AND_CALL = 1,
}

type FeeObj = {
  caller: string;
  callerBps: number;
  partnerId: string;
};

export type OftWrapperBridgeFee = {
  oftFee: CurrencyAmount;
  wrapperFee: CurrencyAmount;
  callerFee: CurrencyAmount;
};

export type SendMethod =
  | 'sendOFT'
  | 'sendOFTV2'
  | 'sendOFTFeeV2'
  | 'sendNativeOFT' // used for NativeOFTV2
  | 'sendNativeOFTFeeV2'
  | 'sendProxyOFT'
  | 'sendProxyOFTV2'
  | 'sendProxyOFTFeeV2';

export type EstimateSendFeeMethod = 'estimateSendFee' | 'estimateSendFeeV2';

export class OftWrapperBridge__evm implements BridgeApi<Signer, OftWrapperBridgeFee> {
  protected erc20: ERC20__api;

  constructor(
    protected providerFactory: ProviderFactory,
    protected oft: OftBridgeConfig,
    protected partner: OftPartnerConfig,
    protected wrapperConfig: OftWrapperConfig = mainnet,
  ) {
    this.erc20 = new ERC20__api(providerFactory);
  }

  async getOptions(): Promise<BridgeOptions> {
    const taxiOption: BridgeOption = {
      mode: 'taxi',
    };
    return {options: [taxiOption]};
  }

  // endpoint id is now implementation detail
  // API should use only this method to map to correct value
  protected chainKeyToEndpointId(chainKey: string) {
    return this.getOftDeployment(chainKey).eid;
  }

  protected tryGetOftDeployment(chainKey: ChainKey) {
    const deployment = this.oft.deployments[chainKey];
    // adding this condition so TS understands there can be no deployment
    if (deployment) return deployment;
    return undefined;
  }

  // returns oft deployment for given chain
  protected getOftDeployment(chainKey: ChainKey) {
    const deployment = this.tryGetOftDeployment(chainKey);
    assert(deployment, `No deployment for ${chainKey}`);
    return deployment;
  }

  // returns wrapper deployment for given chain
  protected getWrapperDeployment(chainKey: string) {
    const deployment = this.wrapperConfig.deployments[chainKey];
    assert(deployment, `No oftWrapper for ${chainKey}`);
    return deployment.oftWrapper;
  }

  supportsClaim(token: Currency): boolean {
    return this.supportsRegister(token);
  }

  supportsRegister(token: Currency): boolean {
    if (!isEvmChainKey(token.chainKey)) return false;
    return Boolean(this.tryGetOftDeployment(token.chainKey)?.token.equals(token));
  }

  async getDuration({srcToken, dstToken}: GetDurationInput): Promise<number> {
    const {oftProxy, token, oftNative, eid} = this.getOftDeployment(srcToken.chainKey);

    const address = oftProxy
      ? oftProxy.address
      : oftNative
        ? oftNative.address
        : isToken(token)
          ? token.address
          : null;

    assert(address, 'address');
    const ua = {address, eid};
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);
    return getMessageDuration(ua, dstEid);
  }

  async getAllowance({token, address}: GetAllowanceInput): Promise<CurrencyAmount<Currency>> {
    const wrapper = this.getWrapperDeployment(token.chainKey);
    if (this.isValidNative(token)) {
      return CurrencyAmount.fromRawAmount(token, constants.MaxUint256.toBigInt());
    }
    return this.erc20.forToken(token).allowance(address, wrapper.address);
  }

  async approve({amount}: ApproveInput) {
    const wrapper = this.getWrapperDeployment(amount.token.chainKey);
    return this.erc20.forToken(amount.token).approve(amount, wrapper.address);
  }

  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    if (!isEvmChainKey(srcToken.chainKey)) return false;
    // native -> token
    if (this.isValidNative(srcToken) && this.isValidToken(dstToken)) {
      return true;
    }
    // token -> native
    if (this.isValidToken(srcToken) && this.isValidNative(dstToken)) {
      return true;
    }
    // token -> token
    if (!this.isValidToken(srcToken)) return false;
    if (!this.isValidToken(dstToken)) return false;
    return true;
  }

  async isRegistered(input: IsRegisteredInput): Promise<boolean> {
    return true;
  }

  async getUnclaimed({token}: GetUnclaimedInput): Promise<CurrencyAmount<Currency>> {
    return CurrencyAmount.fromRawAmount(token, 0);
  }

  async claim(input: ClaimInput): Promise<Transaction<Signer>> {
    throw new Error('Method not supported.');
  }

  async register(input: RegisterInput): Promise<Transaction<Signer>> {
    throw new Error('Method not supported.');
  }

  // v1: (no fee)
  // sendOFT
  // sendoftProxy
  // sendoftNative

  // v2: (without fee)
  // sendOFTV2
  // sendoftProxyV2

  // v2: (with fee)
  // sendOFTFeeV2
  // sendoftProxyFeeV2
  // sendoftNativeFeeV2

  async transfer(input: TransferInput): Promise<Transaction<Signer>> {
    validateInput(input);
    if (this.oft.version === 1) {
      return this.sendOFTV1(input);
    }
    return this.sendOFTV2(input);
  }

  protected async sendOFTV2(input: TransferInput): Promise<Transaction<Signer>> {
    assert(this.oft.version === 2);
    const srcChainKey = input.srcChainKey;
    const wrapperContract = this.getWrapperContract(input.srcToken);
    const oftContract = this.getOFTV2Contract(input.srcToken);

    const amountLD = input.srcAmount;
    const minAmountLD = castCurrencyAmountUnsafe(
      // at this point cast should be safe
      input.dstAmountMin,
      input.srcToken,
    );

    const dstChainId = this.chainKeyToEndpointId(input.dstChainKey);
    const dstAddress = this.encodeDstAddress(input.dstAddress);
    const value = this.isValidNative(input.srcToken)
      ? input.srcAmount.add(input.fee.nativeFee).quotient
      : input.fee.nativeFee.quotient;

    const method = this.getSendMethod(input.srcToken);

    if (
      method !== 'sendOFTV2' &&
      method !== 'sendOFTFeeV2' &&
      method !== 'sendProxyOFTV2' &&
      method !== 'sendProxyOFTFeeV2' &&
      method !== 'sendNativeOFTFeeV2'
    ) {
      throw new Error(`Invalid method ${method} used for OFTV2`);
    }

    const populatedTransaction = wrapperContract.populateTransaction[method](
      oftContract.address,
      dstChainId,
      dstAddress,
      amountLD.quotient,
      minAmountLD.quotient,
      this.buildLayerZeroCallParams(input.adapterParams, input.srcAddress),
      this.feeObj,
      {value, from: input.srcAddress},
    );

    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey,
    });
  }

  protected async sendOFTV1(input: TransferInput): Promise<Transaction<Signer>> {
    assert(this.oft.version === 1);
    const srcChainKey = input.srcChainKey;
    const wrapperContract = this.getWrapperContract(input.srcToken);
    const oftContract = this.getOFTV2Contract(input.srcToken);

    const adapterParams = this.buildLayerZeroTxParams(input.adapterParams);

    const amountLD = input.srcAmount;
    const minAmountLD = castCurrencyAmountUnsafe(
      // at this point cast should be safe
      input.dstAmountMin,
      input.srcToken,
    );

    const value = this.isValidNative(input.srcToken)
      ? input.srcAmount.add(input.fee.nativeFee).quotient
      : input.fee.nativeFee.quotient;
    const dstChainId = this.chainKeyToEndpointId(input.dstChainKey);
    const dstAddress = this.encodeDstAddress(input.dstAddress);
    const zroPaymentAddress = constants.AddressZero;

    const method = this.getSendMethod(input.srcToken);

    if (method === 'sendNativeOFT') {
      throw new Error('NativeOFT is not supported');
    }

    if (!(method === 'sendOFT' || method === 'sendProxyOFT')) {
      throw new Error(`Invalid method ${method} used for OFTV1`);
    }

    const populatedTransaction = wrapperContract.populateTransaction[method](
      oftContract.address,
      dstChainId,
      dstAddress,
      amountLD.quotient,
      minAmountLD.quotient,
      input.srcAddress,
      zroPaymentAddress,
      adapterParams,
      this.feeObj,
      {value, from: input.srcAddress},
    );

    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey,
    });
  }

  // not sure is should be converted or not
  protected encodeDstAddress(address: string) {
    if (this.oft.version === 1) {
      return address;
    }
    return utils.hexlify(addressToBytes32(address));
  }

  async getMessageFee({srcToken, dstToken, adapterParams}: GetMessageFeeInput): Promise<FeeQuote> {
    const wrapperContract = this.getWrapperContract(srcToken);
    const native = getNativeCurrency(srcToken.chainKey);
    const lzParams = this.buildLayerZeroTxParams(adapterParams);
    const dstChainId = this.chainKeyToEndpointId(dstToken.chainKey);
    const dstAddress = this.encodeDstAddress(ONE_ADDRESS);
    const useZro = false;
    const amount = 0;

    const feeObj = this.feeObj;

    const quotedAddress = this.getQuotedAddress(srcToken);
    const estimateMethod = this.oft.version === 1 ? 'estimateSendFee' : 'estimateSendFeeV2';

    const estimateMessageFee = wrapperContract[estimateMethod].bind(wrapperContract);
    const response = await estimateMessageFee(
      quotedAddress,
      dstChainId,
      dstAddress,
      amount,
      useZro,
      lzParams,
      feeObj,
    );

    const fee: FeeQuote = {
      nativeFee: CurrencyAmount.fromRawAmount(native, response.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, response.zroFee.toBigInt()),
    };
    return fee;
  }

  async getExtraGas({srcToken, dstToken}: GetExtraGasInput): Promise<number> {
    assert(srcToken, 'srcToken');
    const dstChainKey = dstToken.chainKey;

    // LzApp has `minDstGasLookup` so this works for OFTv1 and OFTv2
    // https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/lzApp/LzApp.sol#LL22C55-L22C70
    const oftContract = this.getOFTV2Contract(srcToken);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);

    const packetType = PacketType.PT_SEND;
    const extraGas = await oftContract.minDstGasLookup(dstEid, packetType);
    const extraGasNumber = extraGas.toNumber();
    if (extraGasNumber > 0) return extraGasNumber;

    // extra gas should not be 0
    return dstChainKey === 'arbitrum'
      ? 3_000_000
      : dstChainKey === 'aptos' || dstChainKey === 'aptos-testnet'
        ? 10_000
        : // other evm
          250_000;
  }

  async getOutput({
    srcAmount,
    dstToken,
  }: GetOutputInput): Promise<BridgeOutput<OftWrapperBridgeFee>> {
    const dstChainKey = dstToken.chainKey;
    // wrapper fee is deducted from the original input amount
    const {amount: amountAfterWrapperFees, ...fees} = await this.getAmountAndFees(srcAmount);
    const oftFee = await this.getOFTFee(amountAfterWrapperFees, dstChainKey);

    // amount that is transferred needs to be rounded down to shared decimals
    const outputAmountLD = this.removeDust(amountAfterWrapperFees.subtract(oftFee));
    const outputAmountRD = castCurrencyAmountUnsafe(outputAmountLD, dstToken);
    return {
      fee: {
        callerFee: fees.callerFee,
        wrapperFee: fees.wrapperFee,
        oftFee,
      },
      dstAmount: outputAmountRD,
    };
  }

  protected removeDust(amount: CurrencyAmount) {
    if (!this.oft.sharedDecimals) return amount;
    return removeDust(amount, this.oft.sharedDecimals);
  }

  protected getQuotedAddress({chainKey}: Currency) {
    const {oftNative, oftProxy, token} = this.getOftDeployment(chainKey);
    if (oftNative) return oftNative.address;
    if (oftProxy) return oftProxy.address;
    assert(isToken(token));
    return token.address;
  }

  protected async getAmountAndFees(inputAmount: CurrencyAmount) {
    const srcToken = inputAmount.token;
    const wrapperContract = this.getWrapperContract(srcToken);
    const response = await wrapperContract.getAmountAndFees(
      this.getQuotedAddress(srcToken),
      inputAmount.quotient,
      this.partner.callerBps,
    );
    return {
      callerFee: CurrencyAmount.fromRawAmount(srcToken, response.callerFee.toBigInt()),
      wrapperFee: CurrencyAmount.fromRawAmount(srcToken, response.wrapperFee.toBigInt()),
      // amount passed to OFT.sendFrom
      amount: CurrencyAmount.fromRawAmount(srcToken, response.amount.toBigInt()),
    };
  }

  protected async getOFTFee(
    inputAmount: CurrencyAmount,
    dstChainKey: ChainKey,
  ): Promise<CurrencyAmount> {
    const srcToken = inputAmount.token;
    if (!this.oft.fee) {
      return inputAmount.multiply(0);
    }
    assert(this.oft.version === 2);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const contract = this.getOFTV2Contract(srcToken);
    const bridgeFee = await contract.quoteOFTFee(dstEid, inputAmount.quotient);
    return CurrencyAmount.fromRawAmount(inputAmount.token, bridgeFee.toBigInt());
  }

  async getLimit({srcToken, dstToken}: GetLimitInput): Promise<CurrencyAmount<Currency>> {
    return CurrencyAmount.fromRawAmount(srcToken, MaxUint256);
  }

  protected getWrapperContract(srcToken: Currency) {
    const wrapper = this.getWrapperDeployment(srcToken.chainKey);
    const provider = this.providerFactory(srcToken.chainKey);
    return OFTWrapper__factory.connect(wrapper.address, provider);
  }

  protected getOFTV2Contract(srcToken: Currency) {
    const provider = this.providerFactory(srcToken.chainKey);
    const {oftNative, oftProxy, oft} = this.getOftDeployment(srcToken.chainKey);
    if (oftNative) {
      return ProxyOFT__factory.connect(oftNative.address, provider);
    }
    assert(isToken(srcToken));
    if (oftProxy) {
      return ProxyOFT__factory.connect(oftProxy.address, provider);
    }
    if (oft) {
      return OFT__factory.connect(oft.address, provider);
    }
    throw new Error(`No OFT for ${srcToken.chainKey}`);
  }

  protected buildLayerZeroTxParams(adapterParams: AdapterParams): string {
    return serializeAdapterParams(adapterParams);
  }

  protected getSendMethod(srcToken: Currency): SendMethod {
    const {oftProxy, oftNative} = this.getOftDeployment(srcToken.chainKey);
    const fee = this.oft.fee;
    if (this.oft.version === 1) {
      if (oftNative) return 'sendNativeOFT';
      if (oftProxy) return `sendProxyOFT`;
      return 'sendOFT';
    }
    // dealing with V2 only now
    if (oftNative) {
      if (fee) return 'sendNativeOFTFeeV2';
      throw new Error('Method sendNativeOFTV2 is not supported');
    }
    assert(isToken(srcToken));
    if (oftProxy && fee) return 'sendProxyOFTFeeV2';
    if (oftProxy) return 'sendProxyOFTV2';
    if (fee) return 'sendOFTFeeV2';
    return 'sendOFTV2';
  }

  protected buildLayerZeroCallParams(
    adapterParams: AdapterParams,
    refundAddress: string,
    zroPaymentAddress = constants.AddressZero,
  ) {
    const callParams: ICommonOFT.LzCallParamsStruct = {
      adapterParams: this.buildLayerZeroTxParams(adapterParams),
      refundAddress,
      zroPaymentAddress,
    };
    return callParams;
  }

  protected get feeObj(): FeeObj {
    return {
      caller: this.partner.caller,
      callerBps: this.partner.callerBps,
      partnerId: utils.hexZeroPad([this.partner.partnerId], 2),
    };
  }

  protected isValidNative(native: Currency): boolean {
    const {oftNative, token} = this.tryGetOftDeployment(native.chainKey) ?? {};
    if (!token) return false;
    if (!oftNative) return false;
    return token.equals(native);
  }

  protected isValidToken(currency: Currency): boolean {
    return Boolean(this.tryGetOftDeployment(currency.chainKey)?.token.equals(currency));
  }
}
