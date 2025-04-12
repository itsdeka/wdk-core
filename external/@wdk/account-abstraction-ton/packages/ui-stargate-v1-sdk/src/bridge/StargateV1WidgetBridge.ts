import {type ProviderFactory, createTransaction} from '@layerzerolabs/ui-evm';

import {StargateV1Bridge} from './StargateV1Bridge';
import type {StargateV1Sdk} from '../StargateV1Sdk';
import {
  CurrencyAmount,
  type Transaction,
  type FeeQuote,
  castCurrencyAmountUnsafe,
  isNativeCurrency,
  isToken,
  MaxUint256,
  type ChainKey,
} from '@layerzerolabs/ui-core';
import type {
  ApproveInput,
  BridgeApi,
  BridgeOutput,
  GetAllowanceInput,
  GetMessageFeeInput,
  GetOutputInput,
  TransferInput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import {assert} from '@layerzerolabs/ui-core';
import {type Signer, utils} from 'ethers';

import {StargateWidget__factory} from '../typechain';
import type {IStargateWidget, IStargateRouter} from '../typechain/StargateWidget';

export type PartnerConfig = {
  partnerId: number;
  tenthBps: number;
  feeCollector: string;
};

type StargateWidgetFee = {
  totalFee: CurrencyAmount;
  eqFee: CurrencyAmount;
  eqReward: CurrencyAmount;
  lpFee: CurrencyAmount;
  protocolFee: CurrencyAmount;
  lkbRemove: CurrencyAmount;
  partnerFee: CurrencyAmount;
};

export class StargateV1WidgetBridge
  extends StargateV1Bridge
  implements BridgeApi<Signer, StargateWidgetFee>
{
  private readonly tenthBpsDenominator = 100000;

  constructor(
    providerFactory: ProviderFactory,
    sdk: StargateV1Sdk,
    protected partnerConfig: PartnerConfig,
  ) {
    super(providerFactory, sdk);
  }

  private async getPartnerFee(inputAmountLD: CurrencyAmount): Promise<CurrencyAmount> {
    return inputAmountLD.multiply(this.partnerConfig.tenthBps).divide(this.tenthBpsDenominator);
  }

  async getAllowance({token, address}: GetAllowanceInput): Promise<CurrencyAmount> {
    if (isNativeCurrency(token)) return CurrencyAmount.fromRawAmount(token, MaxUint256);
    const spender = this.sdk.getWidgetAddress(token.chainKey);
    return this.erc20.forToken(token).allowance(address, spender);
  }

  async approve({amount}: ApproveInput) {
    const srcToken = amount.token;
    assert(isToken(srcToken), 'Not a token');
    const widgetAddress = this.sdk.getWidgetAddress(srcToken.chainKey);
    return this.erc20.forToken(amount.token).approve(amount, widgetAddress);
  }

  async getOutput({
    srcAmount: inputAmountLD,
    dstToken,
  }: GetOutputInput): Promise<BridgeOutput<StargateWidgetFee>> {
    const partnerFee = await this.getPartnerFee(inputAmountLD);
    const swapAmount = inputAmountLD.subtract(partnerFee);
    const output = await super.getOutput({srcAmount: swapAmount, dstToken});

    const fee: StargateWidgetFee = {
      ...output.fee,
      partnerFee,
    };

    return {
      dstAmount: output.dstAmount,
      fee,
    };
  }

  protected async transferEth(input: TransferInput): Promise<Transaction<Signer>> {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const contract = this.getWidgetContract(input.srcChainKey);
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);

    const partnerId = utils.solidityPack(['uint16'], [this.partnerConfig.partnerId]);
    const value = input.fee.nativeFee.add(input.srcAmount).quotient;
    const {srcAddress, dstAddress} = input;

    const amountLD = input.srcAmount.quotient;
    const minAmountLD = castCurrencyAmountUnsafe(input.dstAmountMin, input.dstToken).quotient;

    const populatedTransaction = contract.populateTransaction.swapETH(
      dstEid,
      amountLD,
      minAmountLD,
      dstAddress,
      partnerId,
      this.feeObj,
      {value, from: srcAddress},
    );
    return createTransaction(populatedTransaction, {
      provider: contract.provider,
      chainKey: srcChainKey,
    });
  }

  get feeObj() {
    const feeObj: IStargateWidget.FeeObjStruct = {
      tenthBps: this.partnerConfig.tenthBps,
      feeCollector: this.partnerConfig.feeCollector,
    };
    return feeObj;
  }

  async getMessageFee({srcToken, dstToken, adapterParams}: GetMessageFeeInput): Promise<FeeQuote> {
    const fee = await super.getMessageFee({srcToken, dstToken, adapterParams});

    return {
      ...fee,
      // Transfers that include a partnerId i.e. Widget transfers require slightly more native
      nativeFee: fee.nativeFee.multiply(110).divide(100),
    };
  }

  protected async transferToken(input: TransferInput): Promise<Transaction<Signer>> {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const contract = this.getWidgetContract(input.srcChainKey);
    const {srcPool, dstPool} = this.sdk.getLink(input.srcToken, input.dstToken);

    const lzTxParams: IStargateRouter.LzTxObjStruct = {
      dstGasForCall: 0,
      dstNativeAmount: input.adapterParams.dstNativeAmount
        ? input.adapterParams.dstNativeAmount.quotient
        : 0,
      dstNativeAddr: input.adapterParams.dstNativeAddress ?? input.dstAddress,
    };

    const partnerId = utils.solidityPack(['uint16'], [this.partnerConfig.partnerId]);
    const value = input.fee.nativeFee.quotient;
    const dstEid = dstPool.eid;
    const srcPoolId = srcPool.poolId;
    const dstPoolId = dstPool.poolId;

    const amountLD = input.srcAmount.quotient;
    const minAmountLD =
      // at this point the conversion is safe
      castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken).quotient;

    const populatedTransaction = contract.populateTransaction.swapTokens(
      dstEid,
      srcPoolId,
      dstPoolId,
      amountLD,
      minAmountLD,
      lzTxParams,
      input.dstAddress,
      partnerId,
      this.feeObj,
      {value},
    );

    return createTransaction(populatedTransaction, {
      provider: contract.provider,
      chainKey: srcChainKey,
    });
  }

  getWidgetContract(chainKey: ChainKey) {
    const address = this.sdk.getWidgetAddress(chainKey);
    const provider = this.providerFactory(chainKey);
    return StargateWidget__factory.connect(address, provider);
  }
}
