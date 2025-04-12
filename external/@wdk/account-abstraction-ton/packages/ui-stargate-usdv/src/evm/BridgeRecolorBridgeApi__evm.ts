import {
  validateInput,
  type BridgeApi,
  type TransferInput,
  type BridgeOutput,
  type GetExtraGasInput,
  type GetOutputInput,
  type GetLimitInput,
  type GetAllowanceInput,
  type ApproveInput,
  type GetMessageFeeInput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import {
  type Currency,
  type FeeQuote,
  CurrencyAmount,
  type Transaction,
  isToken,
  getNativeCurrency,
  type Token,
  Fraction,
  castCurrencyAmountUnsafe,
  type ChainKey,
  assert,
} from '@layerzerolabs/ui-core';
import {
  ERC20__api,
  ONE_ADDRESS,
  type ProviderFactory,
  createTransaction,
} from '@layerzerolabs/ui-evm';
import {type Signer, utils} from 'ethers';
import {MessagingApi, MsgType} from './MessagingApi';
import type {IOFT, MessagingFeeStruct, SwapRecolor} from '../typechain/BridgeRecolor';
import {USDVSide__factory} from '../typechain/factories/USDVSide__factory';
import type {USDVSide} from '../typechain/USDVSide';
import type {USDVMain} from '../typechain/USDVMain';
import {BridgeRecolor__factory} from '../typechain/factories/BridgeRecolor__factory';
import {SideChainLP__factory} from '../typechain';
import type {USDVBridgeFee} from './USDVBridgeFee';
import {USDVBridgeBase} from './USDVBridgeBase';
import type {USDVConfig} from './USDVConfig';

export class BridgeRecolorBridgeApi__evm
  extends USDVBridgeBase
  implements BridgeApi<Signer, USDVBridgeFee>
{
  protected erc20: ERC20__api;
  constructor(
    config: USDVConfig,
    protected providerFactory: ProviderFactory,
    protected readonly color: number,
    //
    protected messaging = new MessagingApi(config, providerFactory),
  ) {
    super(config);
    this.erc20 = new ERC20__api(providerFactory);
  }

  async transfer(input: TransferInput): Promise<Transaction<Signer>> {
    validateInput(input);
    const {srcToken, dstToken} = input;
    const srcChainKey = srcToken.chainKey;
    assert(this.isStable(srcToken));
    assert(this.isUSDV(dstToken));
    const contract = this.getBridgeContract(srcChainKey);

    const swapParamStruct: SwapRecolor.SwapParamStruct = {
      _fromToken: srcToken.address,
      _fromTokenAmount: input.srcAmount.quotient,
      _minUSDVOut: input.dstAmountMin.quotient,
    };

    const sendParamsStruct: IOFT.SendParamStruct = {
      // amountLD gets converted to USDV in the contract
      amountLD: input.srcAmount.quotient,
      minAmountLD: input.dstAmountMin.quotient,
      dstEid: this.messaging.mapDstEidId(input.dstChainKey),
      to: this.messaging.mapDstAddress(input.dstAddress),
    };

    const extraOptions = this.messaging.serializeOptions(input.adapterParams);
    const msgFee: MessagingFeeStruct = {
      lzTokenFee: input.fee.zroFee.quotient,
      nativeFee: input.fee.nativeFee.quotient,
    };
    const composeMsg = utils.arrayify('0x');

    const populatedTransaction = contract.populateTransaction.swapRecolorSend(
      swapParamStruct,
      this.color, // color doesn't matter it is hardcoded
      sendParamsStruct,
      extraOptions,
      msgFee,
      input.srcAddress,
      composeMsg,
      {
        value: input.fee.nativeFee.quotient,
      },
    );

    return createTransaction(populatedTransaction, {
      provider: contract.provider,
    });
  }

  async getMessageFee({srcToken, dstToken, adapterParams}: GetMessageFeeInput): Promise<FeeQuote> {
    const usdv = this.getUSDVContract(srcToken.chainKey);
    const sendParamStruct: IOFT.SendParamStruct = {
      amountLD: 1, // doesn't affect fee
      minAmountLD: 1, // doesn't affect fee
      to: this.messaging.mapDstAddress(ONE_ADDRESS), // doesn't affect fee
      dstEid: this.chainKeyToEndpointId(dstToken.chainKey),
    };
    const extraOptions = this.messaging.serializeOptions(adapterParams);
    const composeMsg = utils.arrayify('0x');
    const nativeCurrency = getNativeCurrency(srcToken.chainKey);
    const feeBN = await usdv.quoteSendFee(sendParamStruct, extraOptions, false, composeMsg);
    const fee: FeeQuote = {
      nativeFee: CurrencyAmount.fromRawAmount(nativeCurrency, feeBN.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(nativeCurrency, feeBN.lzTokenFee.toBigInt()),
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

  /////////
  supportsClaim(currency: Currency): boolean {
    return false;
  }
  supportsRegister(currency: Currency): boolean {
    return false;
  }

  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    const srcChainKey = srcToken.chainKey;
    const deployment = this.tryGetDeployment(srcChainKey);
    const srcBridgeRecolor = deployment?.bridgeRecolor;
    if (!srcBridgeRecolor) return false;
    if (srcToken.chainKey === dstToken.chainKey) return false;
    if (!this.isStable(srcToken)) return false;
    if (!this.isUSDV(dstToken)) return false;
    return true;
  }

  async getOutput({srcAmount, dstToken}: GetOutputInput): Promise<BridgeOutput<USDVBridgeFee>> {
    const srcToken = srcAmount.token;
    assert(isToken(srcToken), 'Not a token');
    const srcChainKey = srcToken.chainKey;
    const bridge = this.getBridgeContract(srcChainKey);
    const quote = await bridge.getUSDVOutVerbose(srcToken.address, srcAmount.quotient);
    const output = CurrencyAmount.fromRawAmount(dstToken, quote.usdvOut.toBigInt());
    const reward = CurrencyAmount.fromRawAmount(dstToken, quote.reward.toBigInt());
    const fee = CurrencyAmount.fromRawAmount(dstToken, quote.fee.toBigInt());
    return {
      dstAmount: output,
      fee: {
        reward,
        fee,
      },
    };
  }

  async getDuration(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  protected isUSDV(currency: Currency): currency is Token {
    return this.usdvTokens.some((usdv) => usdv.equals(currency));
  }

  protected isStable(currency: Currency): currency is Token {
    return this.config.stables.some((stable) => stable.equals(currency));
  }

  async getLimit({srcToken, dstToken}: GetLimitInput): Promise<CurrencyAmount<Currency>> {
    assert(this.isStable(srcToken));
    assert(this.isUSDV(dstToken));
    const srcChainKey = srcToken.chainKey;
    const srcUSDV = this.usdvTokens.find((t) => t.chainKey === srcChainKey);
    assert(srcUSDV, 'srcUSDV');
    const bridge = this.getBridgeContract(srcChainKey);
    const lpAddress = await bridge.lp();
    const lpContract = SideChainLP__factory.connect(lpAddress, this.providerFactory(srcChainKey));

    const [srcTokenConfig, bridgeRecolorUserRewardBps, bridgeRecolorUsdvBalance, lpUsdvBalance] =
      await Promise.all([
        lpContract.tokenConfigs(srcToken.address),
        bridge.userRewardBps(),
        this.erc20.forToken(srcUSDV).balanceOf(bridge.address),
        this.erc20.forToken(srcUSDV).balanceOf(lpAddress),
      ]);

    const maxSwapAmountA = bridgeRecolorUsdvBalance.divide(
      new Fraction(
        bridgeRecolorUserRewardBps - srcTokenConfig.rewardBps + srcTokenConfig.feeBps,
        10000,
      ),
    );

    const maxSwapAmountB = lpUsdvBalance.divide(
      new Fraction(10000 + srcTokenConfig.rewardBps - srcTokenConfig.feeBps, 10000),
    );

    // it is just limit - we should be safe
    return castCurrencyAmountUnsafe(min(maxSwapAmountA, maxSwapAmountB), srcToken);
  }

  getUnclaimed(): Promise<CurrencyAmount<Currency>> {
    throw new Error('Method not implemented.');
  }
  getAllowance({token, address}: GetAllowanceInput): Promise<CurrencyAmount<Currency>> {
    const bridge = this.getBridgeContract(token.chainKey);
    return this.erc20.forToken(token).allowance(address, bridge.address);
  }
  isRegistered(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  claim(): Promise<Transaction<Signer>> {
    throw new Error('Method not implemented.');
  }
  register(): Promise<Transaction<Signer>> {
    throw new Error('Method not implemented.');
  }
  approve({amount}: ApproveInput): Promise<Transaction<Signer>> {
    const bridge = this.getBridgeContract(amount.token.chainKey);
    return this.erc20.forToken(amount.token).approve(amount, bridge.address);
  }

  protected getBridgeContract(chainKey: ChainKey) {
    const deployment = this.getDeployment(chainKey);
    if (!deployment.bridgeRecolor) throw new Error(`No deployment for chainKey: ${chainKey}`);
    return BridgeRecolor__factory.connect(
      deployment.bridgeRecolor.address,
      this.providerFactory(chainKey),
    );
  }
  protected getUSDVContract(chainKey: ChainKey): USDVSide | USDVMain {
    const deployment = this.getDeployment(chainKey);
    // doesn't matter if side or main
    return USDVSide__factory.connect(deployment.usdv.address, this.providerFactory(chainKey));
  }
}

function min(a: CurrencyAmount, b: CurrencyAmount) {
  if (a.quotient < b.quotient) return a;
  return b;
}
