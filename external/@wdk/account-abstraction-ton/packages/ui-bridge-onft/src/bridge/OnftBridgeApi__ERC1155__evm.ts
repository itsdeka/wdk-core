import {
  type AdapterParams,
  type ChainKey,
  CurrencyAmount,
  type FeeQuote,
  getNativeCurrency,
  isEvmChainKey,
  type Transaction,
  assert,
} from '@layerzerolabs/ui-core';
import {
  createTransaction,
  ONE_ADDRESS,
  type ProviderFactory,
  serializeAdapterParams,
  ZERO_ADDRESS,
} from '@layerzerolabs/ui-evm';
import type {Signer} from 'ethers';
import {ERC1155__factory, ONFT1155__factory, ProxyONFT1155__factory} from '../typechain/index';
import type {OnftBridgeApi, OnftInflightTransaction, OnftTransferInput} from './OnftBridgeApi';
import type {OnftBridgeConfig} from '../types/OnftBridgeConfig';
import type {OnftBalanceProvider} from '../balance/OnftBalanceProvider';
import {assertSameCollection} from '../utils';
import type {NftAsset} from '../types/NftAsset';
import type {Amount} from '../types/Amount';
import type {NftCollection} from '../types/NftCollection';
import {NftStandard} from '../types/NftStandard';

enum PacketType {
  PT_SEND = 0,
  PT_SEND_AND_CALL = 1,
}

export class OnftBridgeApi__ERC1155__evm implements OnftBridgeApi<Signer> {
  constructor(
    public readonly config: OnftBridgeConfig,
    private readonly providerFactory: ProviderFactory,
    public readonly balanceProvider: OnftBalanceProvider,
  ) {}

  protected getDeployment(chainKey: ChainKey) {
    const deployment = this.config.deployments[chainKey];
    if (deployment) return deployment;
    throw new Error(`No deployment for ${chainKey}`);
  }

  protected chainKeyToEndpointId(chainKey: string) {
    return this.getDeployment(chainKey).eid;
  }

  async getInflight(account: string): Promise<OnftInflightTransaction[]> {
    return [];
  }

  getMessageFee(
    assets: NftAsset[],
    dstChainKey: ChainKey,
    adapterParams: AdapterParams,
  ): Promise<FeeQuote> {
    return this.getBatchMessageFee(assets, dstChainKey, adapterParams);
  }

  protected minDstGasLookup = (srcChainKey: ChainKey, dstChainKey: ChainKey) => {
    const onft = this.getONFTContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    return onft.minDstGasLookup(dstEid, PacketType.PT_SEND_AND_CALL);
  };

  getExtraGas = async (assets: NftAsset[], dstChainKey: ChainKey): Promise<number> => {
    assert(assets.length > 0, 'No tokens');
    const collection = assets[0].collection;
    const extraGas = await this.minDstGasLookup(collection.chainKey, dstChainKey);

    // FIXME
    return extraGas.add(1).toNumber();
  };

  protected tryGetProxy(chainKey: ChainKey) {
    const deployment = this.config.deployments[chainKey];
    return deployment.onftProxy;
  }

  async isApproved(assets: NftAsset[], owner: string): Promise<boolean> {
    assertSameCollection(assets);
    const chainKey = assets[0].collection.chainKey;
    const proxy = this.tryGetProxy(chainKey);
    if (!proxy) return true;
    const erc1155 = this.getERC1155Contract(chainKey);
    return erc1155.isApprovedForAll(owner, proxy.address);
  }

  async approve(assets: NftAsset[]): Promise<Transaction<Signer>> {
    assertSameCollection(assets);

    const chainKey = assets[0].collection.chainKey;
    const proxy = this.tryGetProxy(chainKey);
    assert(proxy);
    const erc1155 = this.getERC1155Contract(chainKey);

    const populatedTransaction = erc1155.populateTransaction.setApprovalForAll(proxy.address, true);

    return createTransaction(populatedTransaction, {
      provider: erc1155.provider,
      chainKey,
    });
  }

  supports(collection: NftCollection): boolean {
    if (collection.standard !== NftStandard.ERC1155) return false;
    if (!isEvmChainKey(collection.chainKey)) return false;
    const deployment = this.config.deployments[collection.chainKey];
    return deployment && deployment.collection.equals(collection);
  }

  protected async getSingleMessageFee(
    asset: NftAsset,
    dstChainKey: ChainKey,
    adapterParams: AdapterParams,
  ): Promise<FeeQuote> {
    const srcChainKey = asset.collection.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const onft = this.getONFTContract(srcChainKey);
    const native = getNativeCurrency(srcChainKey);

    const tokenId = asset.tokenId;
    // not affecting the fee
    const dstAddress = ONE_ADDRESS;
    const tokenAmount = 1;
    const useZro = false;

    const cost = await onft.estimateSendFee(
      dstEid,
      dstAddress,
      tokenId,
      tokenAmount,
      useZro,
      serializeAdapterParams(adapterParams),
    );

    return {
      nativeFee: CurrencyAmount.fromRawAmount(native, cost.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, 0),
    };
  }

  protected async getBatchMessageFee(
    assets: NftAsset[],
    dstChainKey: ChainKey,
    adapterParams: AdapterParams,
  ): Promise<FeeQuote> {
    assert(assets.length, 'No tokens');
    assertSameCollection(assets);

    const [asset] = assets;
    const srcChainKey = asset.collection.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const onft = this.getONFTContract(srcChainKey);
    const native = getNativeCurrency(srcChainKey);
    const tokenIds = assets.map((asset) => asset.tokenId);
    // todo: check if we need actual amount
    const tokenAmounts = assets.map((asset) => 1);
    // does not affect the fee
    const dstAddress = ONE_ADDRESS;
    const useZro = false;

    const cost = await onft.estimateSendBatchFee(
      dstEid,
      dstAddress,
      tokenIds,
      tokenAmounts,
      useZro,
      serializeAdapterParams(adapterParams),
    );

    return {
      nativeFee: CurrencyAmount.fromRawAmount(native, cost.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, 0),
    };
  }

  async getAssets(collection: NftCollection, address: string): Promise<Amount<NftAsset>[]> {
    const isSupported = this.balanceProvider.supports(collection);
    assert(isSupported);

    return this.balanceProvider.getAssets(collection, address);
  }

  protected getONFTContract(chainKey: ChainKey) {
    const provider = this.providerFactory(chainKey);
    const deployment = this.getDeployment(chainKey);
    if (deployment.onftProxy) {
      return ProxyONFT1155__factory.connect(deployment.onftProxy.address, provider);
    }
    return ONFT1155__factory.connect(deployment.collection.address, provider);
  }

  protected getERC1155Contract(chainKey: ChainKey) {
    const provider = this.providerFactory(chainKey);
    const deployment = this.getDeployment(chainKey);
    return ERC1155__factory.connect(deployment.collection.address, provider);
  }

  protected async transferBatch(input: OnftTransferInput): Promise<Transaction<Signer>> {
    const srcChainKey = input.srcChainKey;
    const onft = this.getONFTContract(srcChainKey);

    const {srcAddress, dstAddress} = input;
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const tokenIds = input.assets.map((amount) => amount.asset.tokenId);
    const tokenAmounts = input.assets.map((amount) => Number(amount.toBigInt()));
    const adapterParams = serializeAdapterParams(input.adapterParams);
    const value = input.fee.nativeFee.quotient;

    const populatedTransaction = await onft.populateTransaction.sendBatchFrom(
      srcAddress,
      dstEid,
      dstAddress,
      tokenIds,
      tokenAmounts,
      srcAddress,
      ZERO_ADDRESS,
      adapterParams,
      {value, from: srcAddress},
    );

    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey,
    });
  }

  async transfer(input: OnftTransferInput): Promise<Transaction<Signer>> {
    assertSameCollection(input.assets.map((amount) => amount.asset));
    if (input.assets.length > 1) {
      return this.transferBatch(input);
    }

    return this.transferSingle(input);
  }

  protected async transferSingle(input: OnftTransferInput): Promise<Transaction<Signer>> {
    const srcChainKey = input.srcChainKey;
    const onft = this.getONFTContract(srcChainKey);
    const [amount] = input.assets;
    assert(amount);

    const {srcAddress, dstAddress} = input;
    const adapterParams = serializeAdapterParams(input.adapterParams);
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const tokenId = amount.asset.tokenId;
    const tokenAmount = Number(amount.toBigInt());
    const value = input.fee.nativeFee.quotient;

    const populatedTransaction = await onft.populateTransaction.sendFrom(
      srcAddress,
      dstEid,
      dstAddress,
      tokenId,
      tokenAmount,
      srcAddress,
      ZERO_ADDRESS,
      adapterParams,
      {value, from: srcAddress},
    );

    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey,
    });
  }
}
