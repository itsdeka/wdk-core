import {
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
  type GetOptionsInput,
  type GetOutputInput,
  type GetUnclaimedInput,
  type IsRegisteredInput,
  type RegisterInput,
  type TransferInput,
  validateInput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import {
  type Currency,
  type FeeQuote,
  CurrencyAmount,
  type Transaction,
  type ChainKey,
  castCurrencyAmountUnsafe,
  getNativeCurrency,
  parseCurrencyAmount,
  assertToken,
  AdapterParams,
  MessageFee,
  isNativeCurrency,
  MaxUint256,
} from '@layerzerolabs/ui-core';
import {
  ERC20__api,
  ONE_ADDRESS,
  Options,
  type ProviderFactory,
  addressToBytes32,
  createTransaction,
} from '@layerzerolabs/ui-evm';
import type {StargateV2Config} from '../types/StargateV2Config';
import {
  StargateOFT__factory,
  type StargatePoolNative,
  StargatePoolNative__factory,
  StargatePool__factory,
  TokenMessaging__factory,
} from '../typechain';
import type {SendParamStruct, StargateOFT} from '../typechain/StargateOFT';
import type {MessagingFeeStruct, StargatePool} from '../typechain/StargatePool';
import {utils} from 'ethers';
import {OftCmd} from '../types/OftCmd';
import {SendMode} from '../types/SendMode';

export type StargateV2Fee = {
  [key: string]: CurrencyAmount;
};

type StargateV2Deployment = StargateV2Config['deployments'][ChainKey];
type Signer = unknown;
export class StargateV2Bridge implements BridgeApi<Signer, StargateV2Fee> {
  // supported paths
  protected paths: {
    srcToken: Currency;
    dstToken: Currency;
  }[] = [];
  constructor(
    protected config: StargateV2Config,
    protected getProvider: ProviderFactory,
    protected erc20 = new ERC20__api(getProvider),
  ) {
    this.updatePaths();
  }

  async getOptions(input: GetOptionsInput): Promise<BridgeOptions> {
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;

    const nativeDropAmount = await this.getBusNativeDropAmount({srcChainKey, dstChainKey});
    const busOption: BridgeOption = {
      mode: 'bus',
      nativeDrop: {
        maxAmount: nativeDropAmount,
        isFixed: true,
      },
    };

    const taxiOption: BridgeOption = {
      mode: 'taxi',
    };

    return {
      options: [taxiOption, busOption],
    };
  }

  protected updatePaths() {
    this.paths = [];
    for (const srcChainKey in this.config.deployments) {
      for (const dstChainKey in this.config.deployments) {
        if (srcChainKey === dstChainKey) continue;
        this.paths.push({
          srcToken: this.config.deployments[srcChainKey].token,
          dstToken: this.config.deployments[dstChainKey].token,
        });
      }
    }
  }

  protected tryGetDeployment(chainKey: ChainKey): StargateV2Deployment | undefined {
    const deployment = this.config.deployments[chainKey];
    return deployment;
  }

  protected getDeployment(chainKey: ChainKey): StargateV2Deployment {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment) return deployment;
    throw new Error(`Deployment not found for chain ${chainKey}`);
  }

  protected validateInput(input: TransferInput) {
    validateInput(input);
    if (!this.supportsTransfer(input.srcToken, input.dstToken)) {
      throw new Error(
        `Unsupported transfer from ${input.srcToken.symbol} to ${input.dstToken.symbol}`,
      );
    }
  }

  protected chainKeyToEid(chainKey: ChainKey) {
    return this.getDeployment(chainKey).eid;
  }

  // todo: verify if we can just use one contract
  protected getBridgeContract(chainKey: ChainKey): StargateOFT | StargatePool | StargatePoolNative {
    const deployment = this.getDeployment(chainKey);
    const provider = this.getProvider(chainKey);
    if (deployment.stargatePoolNative) {
      return StargatePoolNative__factory.connect(deployment.stargatePoolNative.address, provider);
    }
    if (deployment.stargatePool) {
      return StargatePool__factory.connect(deployment.stargatePool.address, provider);
    }
    if (deployment.stargateOft) {
      return StargateOFT__factory.connect(deployment.stargateOft.address, provider);
    }
    throw new Error('No pool or oft contract found');
  }

  protected getTokenMessagingContract(chainKey: ChainKey) {
    const deployment = this.getDeployment(chainKey);
    const provider = this.getProvider(chainKey);
    return TokenMessaging__factory.connect(deployment.tokenMessaging.address, provider);
  }

  supportsClaim(token: Currency): boolean {
    return this.supportsRegister(token);
  }

  supportsRegister(token: Currency): boolean {
    const deployment = this.tryGetDeployment(token.chainKey);
    if (!deployment) return false;
    return deployment.token.equals(token);
  }

  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    const srcDeployment = this.tryGetDeployment(srcToken.chainKey);
    if (!srcDeployment) return false;
    const dstDeployment = this.tryGetDeployment(dstToken.chainKey);
    if (!dstDeployment) return false;
    if (!srcDeployment.token.equals(srcToken)) return false;
    if (!dstDeployment.token.equals(dstToken)) return false;
    return srcDeployment.eid !== dstDeployment.eid;
  }

  protected toSendMode(mode?: string): SendMode {
    if (mode === undefined) throw new Error('Mode is undefined');
    if (mode === 'taxi') return SendMode.TAXI;
    if (mode === 'bus') return SendMode.BUS;
    throw new Error(`Unsupported mode: ${mode}`);
  }

  async getMessageFee(input: GetMessageFeeInput): Promise<FeeQuote> {
    const sendMode = this.toSendMode(input.mode);
    const oftCmd = new OftCmd(sendMode, []);
    const srcToken = input.srcToken;
    const dstToken = input.dstToken;
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const dstEid = this.chainKeyToEid(dstChainKey);

    const bridge = this.getBridgeContract(srcChainKey);

    // mocking
    const srcAmount = parseCurrencyAmount(srcToken, '1');
    const dstAmountMin = parseCurrencyAmount(dstToken, '0');
    const adapterParams = input.adapterParams;
    const dstAddress = ONE_ADDRESS;

    const sendParam = this.buildSendParam(
      {
        dstAddress,
        srcAmount,
        dstChainKey,
        dstAmountMin,
        adapterParams,
      },
      oftCmd,
    );

    // bus only supports FIXED or NONE dstNativeAmount
    // ensure that the requested amount is the same as the configured amount
    const validateDstNativeAmountAsync = async () => {
      const requestedAmount = input.adapterParams.dstNativeAmount?.toBigInt() ?? BigInt(0);
      // nothing to validate if not in BUS mode
      if (sendMode !== SendMode.BUS) return;
      // nothing to validate if requested amount is 0
      if (requestedAmount === BigInt(0)) return;
      const tokenMessagingContract = this.getTokenMessagingContract(srcChainKey);
      const configuredAmount_ = await tokenMessagingContract.nativeDropAmounts(dstEid);
      const configuredAmount = configuredAmount_.toBigInt();
      if (requestedAmount !== configuredAmount) {
        throw new StargateV2BusDstNativeAmountError(requestedAmount, configuredAmount);
      }
    };

    // perf: optimizing for single multicall request
    const [sendQuote] = await Promise.all([
      bridge.quoteSend(sendParam, false),
      validateDstNativeAmountAsync(),
    ]);

    return MessageFee.from(srcChainKey, {
      nativeFee: sendQuote.nativeFee.toBigInt(),
      zroFee: sendQuote.lzTokenFee.toBigInt(),
    });
  }

  async getOutput(input: GetOutputInput): Promise<BridgeOutput<StargateV2Fee>> {
    const sendMode = SendMode.TAXI;
    const oftCmd = new OftCmd(sendMode, []);

    const srcToken = input.srcAmount.token;
    const dstToken = input.dstToken;
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;

    const srcAmount = input.srcAmount;

    // todo: require dstAddress and dstAmountMin
    const dstAmountMin = input.dstAmountMin ?? parseCurrencyAmount(dstToken, '0');
    const dstAddress = input.dstAddress ?? ONE_ADDRESS;
    const adapterParams = AdapterParams.forV1(0);

    const _sendParam = this.buildSendParam(
      {
        srcAmount,
        dstAmountMin,
        dstAddress,
        dstChainKey,
        adapterParams,
      },
      oftCmd,
    );

    const contract = this.getBridgeContract(srcChainKey);
    const quote = await contract.quoteOFT(_sendParam);
    const amountReceivedLD = CurrencyAmount.fromBigInt(
      srcToken,
      quote.receipt.amountReceivedLD.toBigInt(),
    );
    const amountReceivedRD = castCurrencyAmountUnsafe(amountReceivedLD, dstToken);

    const fee: StargateV2Fee = {};
    for (const feeDetail of quote.oftFeeDetails) {
      const amount = CurrencyAmount.fromBigInt(srcToken, feeDetail.feeAmountLD.toBigInt());
      fee[feeDetail.description] = amount;
    }

    const output: BridgeOutput<StargateV2Fee> = {
      fee,
      dstAmount: amountReceivedRD,
    };
    return output;
  }

  getDuration(input: GetDurationInput): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async getLimit(input: GetLimitInput): Promise<CurrencyAmount<Currency>> {
    const sendMode = SendMode.TAXI;
    const oftCmd = new OftCmd(sendMode, []);

    const srcToken = input.srcToken;
    const dstToken = input.dstToken;
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;

    // mocking
    const srcAmount = CurrencyAmount.fromBigInt(srcToken, MAX_64_BIT_INT);
    const dstAmountMin = CurrencyAmount.fromBigInt(dstToken, BigInt(0));
    const dstAddress = ONE_ADDRESS;
    const adapterParams = AdapterParams.forV1(0);

    const sendParam = this.buildSendParam(
      {
        srcAmount,
        dstAmountMin,
        dstAddress,
        dstChainKey,
        adapterParams,
      },
      oftCmd,
    );

    const contract = this.getBridgeContract(srcChainKey);
    const quote = await contract.quoteOFT(sendParam);

    // todo: check if maxAmountLD is max OUTPUT or max INPUT -- otherwise use receipt to figure out max input
    const maxAmountLD = CurrencyAmount.fromBigInt(srcToken, quote.limit.maxAmountLD.toBigInt());
    return maxAmountLD;
  }

  async getExtraGas(input: GetExtraGasInput): Promise<number> {
    return 0;
  }

  async getAllowance(input: GetAllowanceInput): Promise<CurrencyAmount<Currency>> {
    if (isNativeCurrency(input.token)) {
      return CurrencyAmount.fromBigInt(input.token, MaxUint256);
    }
    const chainKey = input.token.chainKey;
    const bridge = this.getBridgeContract(chainKey);
    return this.erc20.forToken(input.token).allowance(input.address, bridge.address);
  }
  getUnclaimed(input: GetUnclaimedInput): Promise<CurrencyAmount<Currency>> {
    throw new Error('Method not implemented.');
  }
  async isRegistered(input: IsRegisteredInput): Promise<boolean> {
    return true;
  }

  async transfer(input: TransferInput): Promise<Transaction<unknown>> {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const sendMode = this.toSendMode(input.mode);
    const oftCmd = new OftCmd(sendMode, []);
    if (sendMode === SendMode.DRIVE) throw new Error('Drive mode not supported');

    const provider = this.getProvider(input.srcChainKey);
    const from = input.srcAddress;
    const value = isNativeCurrency(input.srcToken)
      ? input.srcAmount.add(input.fee.nativeFee).quotient
      : input.fee.nativeFee.quotient;

    const sendParam = this.buildSendParam(input, oftCmd);
    const fee = this.buildMessagingFee(input);
    const refundAddress = input.srcAddress;

    const bridge = this.getBridgeContract(input.srcChainKey);

    const populatedTransaction = await bridge.populateTransaction.send(
      sendParam,
      fee,
      refundAddress,
      {
        from,
        value,
      },
    );

    return createTransaction(populatedTransaction, {provider, chainKey: srcChainKey});
  }

  protected buildMessagingFee(input: TransferInput): MessagingFeeStruct {
    return {
      lzTokenFee: input.fee.zroFee.quotient,
      nativeFee: input.fee.nativeFee.quotient,
    };
  }

  protected async getBusNativeDropAmount({
    srcChainKey,
    dstChainKey,
  }: {
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
  }): Promise<CurrencyAmount> {
    const dstEid = this.chainKeyToEid(dstChainKey);
    const nativeDrop_ = await this.getTokenMessagingContract(srcChainKey).nativeDropAmounts(dstEid);
    const nativeDrop = CurrencyAmount.fromBigInt(
      getNativeCurrency(srcChainKey),
      nativeDrop_.toBigInt(),
    );
    return nativeDrop;
  }

  // dev: this method does NOT ensure that nativeDrop amount is valid
  protected serializeOptions(oftCmd: OftCmd, adapterParams: AdapterParams) {
    if (isNativeDrop(adapterParams)) {
      if (oftCmd.sendMode === SendMode.TAXI) {
        const options = Options.newOptions().addExecutorNativeDropOption(
          adapterParams.dstNativeAmount.quotient,
          adapterParams.dstNativeAddress,
        );
        return options.toBytes();
      }
      if (oftCmd.sendMode === SendMode.BUS) {
        if (adapterParams.dstNativeAmount.greaterThan(0)) {
          const OPTIONS_TYPE = 1;
          return utils.arrayify(utils.solidityPack(['uint16', 'uint8'], [OPTIONS_TYPE, 1]));
        }
      }
    }
    return utils.arrayify('0x');
  }

  protected buildSendParam(input: BuildSendParamInput, oftCmd: OftCmd): SendParamStruct {
    const srcToken = input.srcAmount.token;
    const dstEid = this.chainKeyToEid(input.dstChainKey);
    const composeMsg = utils.arrayify('0x');

    const extraOptions = this.serializeOptions(oftCmd, input.adapterParams);

    const to = utils.hexlify(addressToBytes32(input.dstAddress));
    const amountLD = input.srcAmount.quotient;
    const minAmountLD = castCurrencyAmountUnsafe(input.dstAmountMin, srcToken).quotient;
    return {
      amountLD: amountLD,
      to: to,
      dstEid: dstEid,
      composeMsg: composeMsg,
      extraOptions: extraOptions,
      minAmountLD: minAmountLD,
      oftCmd: oftCmd.toBytes(),
    };
  }

  claim(input: ClaimInput): Promise<Transaction<unknown>> {
    throw new Error('Method not implemented.');
  }
  register(register: RegisterInput): Promise<Transaction<unknown>> {
    throw new Error('Method not implemented.');
  }
  approve(input: ApproveInput): Promise<Transaction<unknown>> {
    const srcChainKey = input.amount.token.chainKey;
    assertToken(input.amount.token);
    const bridge = this.getBridgeContract(srcChainKey);
    return this.erc20.forToken(input.amount.token).approve(input.amount, bridge.address);
  }
}

const MAX_64_BIT_INT = BigInt('18446744073709551615');

function isNativeDrop(adapterParams: AdapterParams): adapterParams is NativeDropAdapterParams {
  return Boolean(
    adapterParams.version === 2 &&
      adapterParams.dstNativeAmount?.greaterThan(0) &&
      adapterParams.dstNativeAddress,
  );
}

interface BuildSendParamInput {
  srcAmount: CurrencyAmount;
  dstAmountMin: CurrencyAmount;
  dstAddress: string;
  dstChainKey: ChainKey;
  adapterParams: AdapterParams;
}

type NativeDropAdapterParams = AdapterParams & {
  version: 2;
  dstNativeAmount: CurrencyAmount;
  dstNativeAddress: string;
};

export class StargateV2BusDstNativeAmountError extends Error {
  constructor(
    public readonly requestedAmount: bigint,
    public readonly configuredAmount: bigint,
  ) {
    super(
      `Invalid dst native amount: requested ${requestedAmount}, but bus is configured to ${configuredAmount}`,
    );
  }
}
