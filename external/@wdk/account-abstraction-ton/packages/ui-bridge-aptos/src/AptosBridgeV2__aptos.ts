import type {BaseProvider} from '@ethersproject/providers';
import {
  type Accounts,
  buildAirdropAdapterParams,
  buildDefaultAdapterParams,
  createTransaction,
  type GetAptosClientFunction,
  getMessageFee,
  getMinDstGas,
} from '@layerzerolabs/ui-aptos';
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
  castCurrencyAmountUnsafe,
  type ChainKey,
  type Currency,
  type CurrencyAmount,
  isAptosChainKey,
  isCoin,
  isEvmChainKey,
  MessageFee,
  removeDust,
  type Transaction,
} from '@layerzerolabs/ui-core';
import {addressToBytes32, type ProviderFactory} from '@layerzerolabs/ui-evm';
import {ITokenBridge__factory} from './typechain/factories/ITokenBridge__factory';
import type {AptosBridgeConfig} from './types/AptosBridgeConfig';
import {getDeployment, getDstAddressForQuote, getMaxAmount, getPath, isValidPair} from './utils';
import {getBridgeCoinType, sendCoinPayload, getLimitedAmount, getRemoteCoin, toLD} from './aptos';

enum PacketType {
  RECEIVE = 0,
  SEND = 1,
}

const SEND_PAYLOAD_LENGTH = 74;

export class AptosBridgeV2__aptos implements BridgeApi {
  protected readonly sharedDecimals = 6;
  constructor(
    protected config: AptosBridgeConfig,
    protected accounts: AccountsConfig,
    protected getAptosClient: GetAptosClientFunction,
    protected getProvider: ProviderFactory,
  ) {}

  async getDuration(input: GetDurationInput): Promise<GetDurationResult> {
    return {estimated: 0};
  }

  async getOptions(input: GetOptionsInput): Promise<BridgeOptions> {
    return {options: [{mode: 'taxi'}]};
  }

  async getMinDstGas(path: {srcChainKey: ChainKey; dstChainKey: ChainKey}): Promise<bigint> {
    const client = this.getAptosClient(path.srcChainKey);
    const accounts = this.accounts[path.srcChainKey];
    const dstEid = getDeployment(path.dstChainKey, this.config).eid;
    const uaAddress = getDeployment(path.srcChainKey, this.config).bridge.address;
    return getMinDstGas(client, accounts, uaAddress, dstEid, BigInt(PacketType.SEND));
  }

  async getMessageFee(
    path: {srcChainKey: ChainKey; dstChainKey: ChainKey},
    {
      dstNativeAmount,
      minDstGas,
      dstNativeAddress,
    }: {dstNativeAmount: bigint; minDstGas: bigint; dstNativeAddress: string},
  ): Promise<MessageFee> {
    const client = this.getAptosClient(path.srcChainKey);
    const accounts = this.accounts[path.srcChainKey];
    const uaAddress = getDeployment(path.srcChainKey, this.config).bridge.address;
    const dstEid = getDeployment(path.dstChainKey, this.config).eid;

    const adapterParams =
      dstNativeAmount === 0n
        ? buildDefaultAdapterParams(minDstGas)
        : buildAirdropAdapterParams(minDstGas, dstNativeAmount, dstNativeAddress);
    const payloadSize = SEND_PAYLOAD_LENGTH;

    const nativeFee = await getMessageFee(
      client,
      accounts,
      uaAddress,
      dstEid,
      adapterParams,
      payloadSize,
    );

    return MessageFee.from(path.srcChainKey, {
      nativeFee,
      zroFee: 0n,
    });
  }

  async getRoute(input: GetRouteInput): Promise<GetRouteResult> {
    const path = getPath(input);
    const srcAmount = removeDust(input.srcAmount, this.sharedDecimals);

    const [bridgeFeeBP, minDstGas, srcAmountMax] = await Promise.all([
      this.getBridgeFeeBP(path.dstChainKey),
      this.getMinDstGas(path),
      this.getLimit({
        srcToken: input.srcToken,
        dstToken: input.dstToken,
      }),
    ]);

    const [messageFee0, messageFee1, duration] = await Promise.all([
      this.getMessageFee(path, {
        dstNativeAmount: 0n,
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
      }),
      this.getMessageFee(path, {
        dstNativeAmount: input.dstNativeAmount.toBigInt(),
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
      }),
      this.getDuration(input),
    ]);

    const gasCost = messageFee1.nativeFee.subtract(messageFee0.nativeFee);

    const srcAmountRD = castCurrencyAmountUnsafe(srcAmount, input.dstToken);
    // fee is collected on remote
    const feeRD = srcAmountRD.multiply(bridgeFeeBP).divide(10000);
    const dstAmount = srcAmountRD.subtract(feeRD);
    const dstAmountMin = dstAmount;
    const allowance = getMaxAmount(input.srcToken);

    const route: ResolvedRoute = {
      srcAmount,
      dstAmount,
      dstAmountMin,
      dstNativeAmount: input.dstNativeAmount,
      messageFee: messageFee0,
      allowance,
      dstAddress: input.dstAddress,
      dstToken: input.dstToken,
      mode: 'taxi',
      srcAddress: input.srcAddress,
      srcToken: input.srcToken,
      duration,
      gasCost,
      option: {
        mode: 'taxi',
      },
      srcAmountMax,
      error: undefined,
    };

    return route;
  }

  async transfer(input: TransferInput): Promise<Transaction<unknown>> {
    const path = getPath(input);
    const client = this.getAptosClient(path.srcChainKey);
    const minDstGas = await this.getMinDstGas(path);
    const messageFee = await this.getMessageFee(path, {
      dstNativeAmount: input.dstNativeAmount.toBigInt(),
      minDstGas,
      dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
    });
    const unwrap = isCoin(input.dstToken);
    const bridgeAddress = getDeployment(path.srcChainKey, this.config).bridge.address;
    const bridgeCoinType = getBridgeCoinType(input.srcToken);
    const dstEid = getDeployment(path.dstChainKey, this.config).eid;
    const zroFee = 0;
    const nativeFee = messageFee.nativeFee.toBigInt();
    const adapterParams = input.dstNativeAmount.equalTo(0)
      ? buildDefaultAdapterParams(minDstGas)
      : buildAirdropAdapterParams(minDstGas, input.dstNativeAmount.toBigInt(), input.dstAddress);
    const msgLibParams = new Uint8Array(0);
    const dstAddress = addressToBytes32(input.dstAddress);
    const srcAmount = input.srcAmount.toBigInt();

    const entryFunctionPayload = sendCoinPayload(
      bridgeAddress,
      bridgeCoinType,
      dstEid,
      dstAddress,
      srcAmount,
      nativeFee,
      zroFee,
      unwrap,
      adapterParams,
      msgLibParams,
    );
    return createTransaction(entryFunctionPayload, {client});
  }

  supportsTransfer(srcToken: Currency, dstToken: Currency): boolean {
    return (
      isAptosChainKey(srcToken.chainKey) &&
      isEvmChainKey(dstToken.chainKey) &&
      isValidPair(srcToken, dstToken, this.config)
    );
  }

  async getBridgeFeeBP(dstChainKey: ChainKey): Promise<number> {
    const bridgeAddress = getDeployment(dstChainKey, this.config).bridge.address;
    const provider = this.getProvider(dstChainKey);
    return getBridgeFeeBP(provider, bridgeAddress);
  }

  async getLimit({
    srcToken,
    dstToken,
  }: {srcToken: Currency; dstToken: Currency}): Promise<CurrencyAmount<Currency>> {
    const coinType = getBridgeCoinType(srcToken);
    const dstEid = getDeployment(dstToken.chainKey, this.config).eid;
    const client = this.getAptosClient(srcToken.chainKey);
    const bridgeAddress = getDeployment(srcToken.chainKey, this.config).bridge.address;

    const [limit, tvl] = await Promise.all([
      getLimitedAmount(client, bridgeAddress, coinType),
      getRemoteCoin(client, bridgeAddress, coinType, dstEid),
    ]);
    const tvlLimit = toLD(srcToken, tvl.tvlSD);
    if (limit.limited) {
      const windowLimit = toLD(srcToken, limit.amount);
      if (windowLimit.lessThan(tvlLimit)) return windowLimit;
    }
    return tvlLimit;
  }
}

type AccountsConfig = Record<ChainKey, Accounts>;

async function getBridgeFeeBP(provider: BaseProvider, bridgeAddress: string) {
  const contract = ITokenBridge__factory.connect(bridgeAddress, provider);
  const bridgeFeeBp = await contract.bridgeFeeBP();
  return bridgeFeeBp.toNumber();
}
