import {
  type AdapterParams,
  CurrencyAmount,
  type FeeQuote,
  type Token,
  getNativeCurrency,
  type ChainKey,
} from '@layerzerolabs/ui-core';
import {ONE_ADDRESS, type ProviderFactory} from '@layerzerolabs/ui-evm';
import {utils} from 'ethers';
import {optionsType1, optionsType2} from './utils/options';
import {USDVSide__factory} from '../typechain/factories/USDVSide__factory';
import type {IOFT} from '../typechain/BridgeRecolor';
import {MessagingV1__factory} from '../typechain/factories/MessagingV1__factory';
import type {USDVConfig} from './USDVConfig';
import {addressToBytes32} from './utils/hex';

enum USDVRole {
  OWNER = 0,
  OPERATOR = 1,
  VAULT = 2,
  MESSAGING = 3,
  FOUNDATION = 4,
}

export enum MsgType {
  SEND = 1,
  SEND_AND_CALL = 2,
  SYNC_DELTA = 3,
  REMINT = 4,
}

// this will have to be changed when V2 endpoint is used
export class MessagingApi {
  constructor(
    protected config: USDVConfig,
    protected providerFactory: ProviderFactory,
  ) {}
  async minDstGasLookup(input: {srcChainKey: ChainKey; dstChainKey: ChainKey; msgType: MsgType}) {
    const dstEid = this.mapDstEidId(input.dstChainKey);
    const messagingV1 = await this.getMessagingV1Contract(input.srcChainKey);
    const minDstGasLookup = await messagingV1.minDstGasLookup(dstEid, input.msgType);
    return minDstGasLookup.toNumber();
  }

  async getSendMessageFee(input: {
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
    adapterParams: AdapterParams;
  }): Promise<FeeQuote> {
    const usdv = this.getUSDV(input.srcChainKey);
    const native = getNativeCurrency(input.srcChainKey);

    if (input.srcChainKey === input.srcChainKey) {
      // no fee - special case for same chain operations
      return {
        nativeFee: CurrencyAmount.fromRawAmount(native, 0),
        zroFee: CurrencyAmount.fromRawAmount(native, 0),
      };
    }

    const contract = USDVSide__factory.connect(usdv.address, this.providerFactory(usdv.chainKey));

    // message fee does not depend on:
    // - sender
    // - receiver
    // - amount
    const to = ONE_ADDRESS;
    const amountLD = 1;
    const minAmountLD = 1;

    // dstAddress does not affect message fee
    const sendParamStruct: IOFT.SendParamStruct = {
      to: this.mapDstAddress(to),
      amountLD,
      minAmountLD,
      dstEid: this.mapDstEidId(input.dstChainKey),
    };

    const options = this.serializeOptions(input.adapterParams);
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

  protected async getMessagingV1Contract(chainKey: ChainKey) {
    const usdv = this.getUSDV(chainKey);
    const provider = this.providerFactory(chainKey);
    // doesn't matter if it is side or main - both share USDVBase
    const address = await USDVSide__factory.connect(usdv.address, provider).getRole(
      USDVRole.MESSAGING,
    );
    const messagingV1 = MessagingV1__factory.connect(address, provider);
    return messagingV1;
  }

  protected getUSDV(chainKey: ChainKey): Token {
    const deployment = this.config.deployments[chainKey];
    if (deployment) return deployment.usdv;
    throw new Error(`No USDV for chainKey: ${chainKey}`);
  }

  public serializeOptions(adapterParams: AdapterParams) {
    if (adapterParams.version === 1) {
      return optionsType1(adapterParams.extraGas);
    } else if (adapterParams.version === 2) {
      if (!adapterParams.dstNativeAddress) throw new Error('No dstNativeAddress');
      if (!adapterParams.dstNativeAmount) throw new Error('No dstNativeAmount');
      return optionsType2(
        adapterParams.extraGas,
        adapterParams.dstNativeAmount!.quotient,
        adapterParams.dstNativeAddress!,
      );
    }
    throw new Error(`Invalid options version ${adapterParams.version}`);
  }

  public mapDstEidId(dstChainKey: ChainKey) {
    const deployment = this.config.deployments[dstChainKey];
    if (deployment) return deployment.eid;
    throw new Error(`No deployment for chainKey: ${dstChainKey}`);
  }

  public mapDstAddress(dstAddress: string) {
    return utils.hexlify(addressToBytes32(utils.getAddress(dstAddress)));
  }
}
