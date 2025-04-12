import {
  validateInput,
  type ApproveInput,
  type BridgeApi,
  type BridgeOutput,
  type GetAllowanceInput,
  type GetDurationInput,
  type GetExtraGasInput,
  type GetLimitInput,
  type GetMessageFeeInput,
  type GetOutputInput,
  type TransferInput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import {
  type Currency,
  CurrencyAmount,
  type ChainKey,
  type FeeQuote,
  isToken,
  MaxUint256,
  type Transaction,
  assert,
} from '@layerzerolabs/ui-core';
import {createTransaction, ERC20__api, type ProviderFactory} from '@layerzerolabs/ui-evm';
import type {Signer} from 'ethers';
import type {USDVConfig} from './USDVConfig';
import {MessagingApi, MsgType} from './MessagingApi';
import {type MinterProxy, MinterProxy__factory} from '../typechain';
import type {IMinter} from '../typechain/MinterProxy';
import type {USDVBridgeFee} from './USDVBridgeFee';
import {USDVBridgeBase} from './USDVBridgeBase';

export class MinterProxyBridgeApi__evm
  extends USDVBridgeBase
  implements BridgeApi<Signer, USDVBridgeFee>
{
  protected minterProxyChainKey: ChainKey;
  protected minterProxy: MinterProxy;
  protected erc20: ERC20__api;
  constructor(
    config: USDVConfig,
    private providerFactory: ProviderFactory,
    protected readonly color: number,
    //
    protected messaging: MessagingApi = new MessagingApi(config, providerFactory),
  ) {
    super(config);

    let minterProxy;
    let minterProxyChainKey;
    for (const chainKey in config.deployments) {
      const deployment = config.deployments[chainKey];
      if (deployment.minterProxy) {
        if (minterProxy) throw new Error('Only one minter proxy is supported');
        minterProxy = MinterProxy__factory.connect(
          deployment.minterProxy.address,
          this.providerFactory(chainKey),
        );
        minterProxyChainKey = chainKey;
      }
    }
    if (!minterProxy || !minterProxyChainKey) throw new Error('No minter proxy found');
    this.minterProxy = minterProxy;
    this.minterProxyChainKey = minterProxyChainKey;

    this.erc20 = new ERC20__api(providerFactory);
  }
  supportsClaim(currency: Currency): boolean {
    return false;
  }
  supportsRegister(currency: Currency): boolean {
    return false;
  }

  async getDuration({srcToken, dstToken}: GetDurationInput): Promise<number> {
    throw new Error('Method not implemented.');
  }
  getUnclaimed(): Promise<CurrencyAmount<Currency>> {
    throw new Error('Method not implemented.');
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

  getExtraGas({srcToken, dstToken}: GetExtraGasInput): Promise<number> {
    return this.messaging.minDstGasLookup({
      srcChainKey: srcToken.chainKey,
      dstChainKey: dstToken.chainKey,
      msgType: MsgType.SEND,
    });
  }

  async getLimit({srcToken}: GetLimitInput): Promise<CurrencyAmount<Currency>> {
    // todo: get limit
    return CurrencyAmount.fromRawAmount(srcToken, MaxUint256);
  }

  async getMessageFee({srcToken, dstToken, adapterParams}: GetMessageFeeInput): Promise<FeeQuote> {
    return this.messaging.getSendMessageFee({
      srcChainKey: srcToken.chainKey,
      dstChainKey: dstToken.chainKey,
      adapterParams,
    });
  }

  async transfer(input: TransferInput): Promise<Transaction<Signer>> {
    validateInput(input);
    const {srcToken, dstToken, srcChainKey, dstChainKey} = input;
    assert(isToken(srcToken), 'token');
    assert(
      this.usdvTokens.some((usdv) => usdv.equals(dstToken)),
      'Not USDV',
    );
    assert(input.srcAmount.token.equals(srcToken));
    assert(input.dstAmountMin.token.equals(dstToken));

    const swapParamStruct: IMinter.SwapParamStruct = {
      fromToken: srcToken.address,
      fromTokenAmount: input.srcAmount.quotient,
      minUSDVOut: input.dstAmountMin.quotient,
    };

    if (srcChainKey === dstChainKey) {
      const populatedTransaction = this.minterProxy.populateTransaction.swapToUSDV(
        swapParamStruct,
        input.dstAddress,
        this.color,
      );
      return createTransaction(populatedTransaction, {
        provider: this.minterProxy.provider,
      });
    } else {
      const populatedTransaction = this.minterProxy.populateTransaction.swapToUSDVAndSend(
        swapParamStruct,
        this.messaging.mapDstAddress(input.dstAddress),
        this.messaging.mapDstEidId(dstToken.chainKey),
        this.messaging.serializeOptions(input.adapterParams),
        {
          lzTokenFee: input.fee.zroFee.quotient,
          nativeFee: input.fee.nativeFee.quotient,
        },
        input.srcAddress,
        this.color,
        {value: input.fee.nativeFee.quotient},
      );
      return createTransaction(populatedTransaction, {
        provider: this.minterProxy.provider,
      });
    }
  }

  async getAllowance({token, address: user}: GetAllowanceInput): Promise<CurrencyAmount<Currency>> {
    if (!isToken(token)) return CurrencyAmount.fromRawAmount(token, MaxUint256);
    return this.erc20.forToken(token).allowance(user, this.minterProxy.address);
  }

  approve({amount}: ApproveInput): Promise<Transaction<Signer>> {
    const srcToken = amount.token;
    assert(isToken(srcToken), 'token');
    return this.erc20.forToken(srcToken).approve(amount, this.minterProxy.address);
  }

  async getOutput({srcAmount, dstToken}: GetOutputInput): Promise<BridgeOutput<USDVBridgeFee>> {
    const srcToken = srcAmount.token;
    assert(isToken(srcToken), 'srcToken');
    assert(isToken(dstToken), 'dstToken');
    const quote = await this.minterProxy.getSwapToUSDVAmountOutVerbose(
      srcToken.address,
      srcAmount.quotient,
      this.color,
    );
    const amount = CurrencyAmount.fromRawAmount(dstToken, quote.usdvOut.toBigInt());
    const reward = CurrencyAmount.fromRawAmount(dstToken, quote.reward.toBigInt());
    const fee = CurrencyAmount.fromRawAmount(dstToken, quote.fee.toBigInt());
    return {
      dstAmount: amount,
      fee: {
        fee,
        reward,
      },
    };
  }

  protected get srcAssets(): Currency[] {
    const srcAssets = this.config.stables.filter(
      (stable) => stable.chainKey === this.minterProxyChainKey,
    );
    return srcAssets;
  }

  protected get dstAssets(): Currency[] {
    return this.usdvTokens;
  }

  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    if (!this.srcAssets.some((i) => i.equals(srcToken))) return false;
    if (!this.dstAssets.some((i) => i.equals(dstToken))) return false;
    return srcToken.chainKey !== dstToken.chainKey;
  }
}
