import type {
  GetExtraGasInput,
  GetMessageFeeInput,
  TransferInput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import {
  type FeeQuote,
  type Transaction,
  CurrencyAmount,
  assert,
  getNativeCurrency,
} from '@layerzerolabs/ui-core';
import {type Signer, utils} from 'ethers';

import {
  AddressZero,
  AddressOne,
  createTransaction,
  addressToBytes32,
  serializeAdapterParams,
} from '@layerzerolabs/ui-evm';
import type {OftBridgeConfig} from '@layerzerolabs/ui-bridge-oft';
import {OftBridgeV1} from '@layerzerolabs/ui-bridge-oft/evm';
import {Shrap__factory} from '../typechain';

// sharp specific values
enum PacketTypeAvalanche {
  PT_SEND = 0,
  FUNCTION_TYPE_SEND = 1,
}

export class ShrapBridge extends OftBridgeV1 {
  protected override validateConfig(config: OftBridgeConfig) {
    assert(config.version === 'shrap', 'Invalid config.version: is not shrap');
    assert(config.fee === false, 'Invalid config.fee: is not false');
  }

  override transfer(input: TransferInput): Promise<Transaction<Signer>> {
    this.validateInput(input);
    if (this.isAvalanche(input.srcChainKey)) {
      return this.transferAvalanche(input);
    }
    return super.transfer(input);
  }

  override getExtraGas({srcToken, dstToken}: GetExtraGasInput): Promise<number> {
    if (this.isAvalanche(srcToken.chainKey)) {
      return this.getAvalancheExtraGas({srcToken, dstToken});
    }

    return super.getExtraGas({srcToken, dstToken});
  }

  override getMessageFee({
    srcToken,
    dstToken,
    adapterParams,
  }: GetMessageFeeInput): Promise<FeeQuote> {
    if (this.isAvalanche(srcToken.chainKey)) {
      return this.getAvalancheMessageFee({srcToken, dstToken, adapterParams});
    }
    return super.getMessageFee({srcToken, dstToken, adapterParams});
  }

  protected isAvalanche(chainKey: string): boolean {
    return chainKey === 'avalanche';
  }

  getAvalancheContract(chainKey: string) {
    const {oft} = this.getDeployment(chainKey);
    assert(oft, 'Oft contract not found');

    return Shrap__factory.connect(oft.address, this.providerFactory(chainKey));
  }

  async transferAvalanche(input: TransferInput): Promise<Transaction<Signer>> {
    const contract = this.getAvalancheContract(input.srcChainKey);
    const adapterParams = serializeAdapterParams(input.adapterParams);
    const value = input.fee.nativeFee.quotient;
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);

    const populatedTransaction = contract.populateTransaction.sendFrom(
      input.srcAddress,
      dstEid,
      input.dstAddress,
      input.srcAmount.quotient,
      input.dstAddress,
      AddressZero,
      adapterParams,
      0,
      {value, from: input.srcAddress},
    );
    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(input.srcChainKey),
      chainKey: input.srcChainKey,
    });
  }

  async getAvalancheMessageFee({
    srcToken,
    dstToken,
    adapterParams,
  }: GetMessageFeeInput): Promise<FeeQuote> {
    const native = getNativeCurrency(srcToken.chainKey);
    const contract = this.getAvalancheContract(srcToken.chainKey);
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);

    const dstAddress = utils.hexlify(addressToBytes32(AddressOne));
    const amount = 0;
    const useZro = false;
    const lzParams = serializeAdapterParams(adapterParams);

    const response = await contract.estimateSendFee(dstEid, dstAddress, amount, useZro, lzParams);

    const fee: FeeQuote = {
      nativeFee: CurrencyAmount.fromRawAmount(native, response.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, response.zroFee.toBigInt()),
    };
    return fee;
  }

  async getAvalancheExtraGas({srcToken, dstToken}: GetExtraGasInput): Promise<number> {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const contract = this.getAvalancheContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const extraGas = await contract.minDstGasLookup(dstEid, PacketTypeAvalanche.FUNCTION_TYPE_SEND);

    return extraGas.toNumber() | this.getDefaultExtraGas(srcChainKey, dstChainKey);
  }
}
