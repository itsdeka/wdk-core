import {
  validateInput,
  type BridgeApi,
  type BridgeOutput,
  type GetAllowanceInput,
  type GetDurationInput,
  type GetLimitInput,
  type GetUnclaimedInput,
  type TransferInput,
  type GetMessageFeeInput,
  type GetExtraGasInput,
  type GetOutputInput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import {
  type ChainKey,
  type Currency,
  CurrencyAmount,
  type FeeQuote,
  getNativeCurrency,
  isEvmChainKey,
  isToken,
  MaxUint256,
  assert,
  removeDust,
  type Transaction,
} from '@layerzerolabs/ui-core';
import {ERC20__api, ONE_ADDRESS} from '@layerzerolabs/ui-evm';
import {createTransaction, type ProviderFactory} from '@layerzerolabs/ui-evm';
import {type Signer, utils} from 'ethers';
import type {USDVConfig} from './USDVConfig';
import type {IOFT, MessagingFeeStruct, USDVMain} from '../typechain/USDVMain';
import {MessagingApi, MsgType} from './MessagingApi';
import {USDVMain__factory, type USDVSide, USDVSide__factory} from '../typechain';
import type {USDVBridgeFee} from './USDVBridgeFee';
import {USDVBridgeBase} from './USDVBridgeBase';

export class USDVBridgeApi__evm extends USDVBridgeBase implements BridgeApi<Signer, USDVBridgeFee> {
  protected readonly sharedDecimals: number = 6;
  protected erc20: ERC20__api;

  constructor(
    config: USDVConfig,
    protected providerFactory: ProviderFactory,
    protected messaging: MessagingApi = new MessagingApi(config, providerFactory),
  ) {
    super(config);
    this.erc20 = new ERC20__api(providerFactory);
  }
  supportsClaim(currency: Currency): boolean {
    return this.usdvTokens.some((t) => t.equals(currency));
  }
  supportsRegister(currency: Currency): boolean {
    return this.supportsClaim(currency);
  }
  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    if (!isEvmChainKey(srcToken.chainKey)) return false;
    if (!this.usdvTokens.some((token) => token.equals(srcToken))) return false;
    if (!this.usdvTokens.some((token) => token.equals(dstToken))) return false;
    return srcToken.chainKey !== dstToken.chainKey;
  }
  async getDuration(input: GetDurationInput): Promise<number> {
    throw new Error('Method not implemented.');
  }
  async getLimit({srcToken}: GetLimitInput): Promise<CurrencyAmount<Currency>> {
    return CurrencyAmount.fromRawAmount(srcToken, MaxUint256);
  }
  getUnclaimed({token, address}: GetUnclaimedInput): Promise<CurrencyAmount<Currency>> {
    throw new Error('Method not implemented.');
  }
  async getAllowance({token, address}: GetAllowanceInput): Promise<CurrencyAmount> {
    assert(isToken(token));
    return CurrencyAmount.fromRawAmount(token, MaxUint256);
  }
  async isRegistered(): Promise<boolean> {
    return true;
  }
  claim(): Promise<Transaction<Signer>> {
    throw new Error('Method not implemented.');
  }
  register(): Promise<Transaction<Signer>> {
    throw new Error('Method not implemented.');
  }
  approve(): Promise<Transaction<Signer>> {
    throw new Error('Method not implemented.');
  }

  async transfer(input: TransferInput): Promise<Transaction<Signer>> {
    validateInput(input);
    const contract = this.getUSDVContract(input.srcChainKey);

    const sendParamStruct: IOFT.SendParamStruct = {
      amountLD: input.srcAmount.quotient,
      minAmountLD: castCurrencyAmountSafe(input.dstAmountMin, input.srcToken).quotient,
      dstEid: this.chainKeyToEndpointId(input.dstChainKey),
      to: this.messaging.mapDstAddress(input.dstAddress),
    };

    const msgFee: MessagingFeeStruct = {
      lzTokenFee: input.fee.zroFee.quotient,
      nativeFee: input.fee.nativeFee.quotient,
    };

    const composeMsg = utils.arrayify('0x');
    const options = this.messaging.serializeOptions(input.adapterParams);
    const populatedTransaction = contract.populateTransaction.send(
      sendParamStruct,
      options,
      msgFee,
      input.srcAddress,
      composeMsg,
      {
        value: input.fee.nativeFee.quotient,
      },
    );
    const tx = createTransaction(populatedTransaction, {
      provider: this.providerFactory(input.srcChainKey),
    });
    return tx;
  }

  async getMessageFee({srcToken, dstToken, adapterParams}: GetMessageFeeInput): Promise<FeeQuote> {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const native = getNativeCurrency(srcChainKey);
    const sendParamStruct: IOFT.SendParamStruct = {
      to: this.messaging.mapDstAddress(ONE_ADDRESS), // doesn't affect fee
      amountLD: 1, // doesn't affect fee
      minAmountLD: 1, // doesn't affect fee
      dstEid: this.chainKeyToEndpointId(dstChainKey),
    };

    const contract = this.getUSDVContract(srcChainKey);

    const options = this.messaging.serializeOptions(adapterParams);
    const composeMsg = utils.arrayify('0x');

    const [nativeFee, zroFee] = await contract.quoteSendFee(
      sendParamStruct,
      options,
      false,
      composeMsg,
    );

    const fee: FeeQuote = {
      nativeFee: CurrencyAmount.fromRawAmount(native, nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, zroFee.toBigInt()),
    };
    return fee;
  }

  async getExtraGas({srcToken, dstToken}: GetExtraGasInput): Promise<number> {
    return this.messaging.minDstGasLookup({
      srcChainKey: srcToken.chainKey,
      dstChainKey: dstToken.chainKey,
      msgType: MsgType.SEND,
    });
  }

  async getOutput({srcAmount, dstToken}: GetOutputInput): Promise<BridgeOutput<USDVBridgeFee>> {
    const swapAmount = this.removeDust(srcAmount);
    const zero = swapAmount.multiply(0);

    const amount = castCurrencyAmountSafe(swapAmount, dstToken);
    return {
      dstAmount: amount,
      fee: {
        fee: zero,
        reward: zero,
      },
    };
  }

  protected getUSDVContract(chainKey: ChainKey): USDVSide | USDVMain {
    const deployment = this.getDeployment(chainKey);
    const provider = this.providerFactory(chainKey);
    if (deployment.vault?.address) {
      return USDVMain__factory.connect(deployment.usdv.address, provider);
    }
    return USDVSide__factory.connect(deployment.usdv.address, provider);
  }

  protected removeDust(amount: CurrencyAmount) {
    return removeDust(amount, this.sharedDecimals);
  }
}

function castCurrencyAmountSafe(amount: CurrencyAmount, dstToken: Currency): CurrencyAmount {
  // todo: implement error when dust difference
  assert(amount.token.decimals === dstToken.decimals, 'Cannot cast amount to different decimals');
  return CurrencyAmount.fromRawAmount(dstToken, amount.quotient);
}
