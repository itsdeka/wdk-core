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
import {ERC721__factory, ONFT721__factory, ProxyONFT721__factory} from '../typechain/index';
import type {OnftBridgeApi, OnftInflightTransaction, OnftTransferInput} from './OnftBridgeApi';
import type {OnftBridgeConfig} from '../types/OnftBridgeConfig';
import {RPC__Enumerable__ERC721BalanceProvider} from '../balance/RPC__Enumerable__ERC721BalanceProvider';
import type {OnftBalanceProvider} from '../balance/OnftBalanceProvider';
import type {Amount} from '../types/Amount';
import type {NftAsset} from '../types/NftAsset';
import {assertSameCollection} from '../utils';
import type {NftCollection} from '../types/NftCollection';

enum PacketType {
  PT_SEND = 0,
  PT_SEND_AND_CALL = 1,
}

export class OnftBridgeApi__ERC721__evm implements OnftBridgeApi<Signer> {
  constructor(
    public readonly config: OnftBridgeConfig,
    private readonly providerFactory: ProviderFactory,
    public readonly balanceProvider: OnftBalanceProvider = new RPC__Enumerable__ERC721BalanceProvider(
      config,
      providerFactory,
    ),
  ) {}

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

  protected getDeployment(chainKey: ChainKey) {
    const deployment = this.config.deployments[chainKey];
    if (deployment) return deployment;
    throw new Error(`No deployment for ${chainKey}`);
  }

  protected chainKeyToEndpointId(chainKey: string) {
    return this.getDeployment(chainKey).eid;
  }

  protected minDstGasLookup = (srcChainKey: ChainKey, dstChainKey: ChainKey) => {
    const onft = this.getONFTContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    return onft.minDstGasLookup(dstEid, PacketType.PT_SEND_AND_CALL);
  };

  protected dstChainIdToTransferGas = (srcChainKey: ChainKey, dstChainKey: ChainKey) => {
    const onft = this.getONFTContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    return onft.dstChainIdToTransferGas(dstEid);
  };

  protected tryGetOnftProxy(chainKey: ChainKey) {
    const deployment = this.config.deployments[chainKey];
    if (!deployment) return undefined;
    if ('onftProxy' in deployment) {
      return deployment.onftProxy;
    }
    return undefined;
  }

  getExtraGas = async (assets: NftAsset[], dstChainKey: ChainKey): Promise<number> => {
    assert(assets.length > 0, 'No tokens');
    assertSameCollection(assets);
    const collection = assets[0].collection;
    const [minDstGas, transferGasPerToken] = await Promise.all([
      this.minDstGasLookup(collection.chainKey, dstChainKey),
      this.dstChainIdToTransferGas(collection.chainKey, dstChainKey),
    ]);
    const extraGas = minDstGas.add(transferGasPerToken.mul(assets.length));
    return extraGas.toNumber();
  };

  async isApproved(assets: NftAsset[], _owner: string): Promise<boolean> {
    assertSameCollection(assets);
    const asset = assets.at(0);
    assert(asset);
    const srcChainKey = asset.collection.chainKey;
    const onftProxy = this.tryGetOnftProxy(srcChainKey);
    if (!onftProxy) return true;
    const erc721 = this.getERC721Contract(asset.collection.chainKey);
    const owner = await erc721.ownerOf(asset.tokenId);
    return erc721.isApprovedForAll(owner, onftProxy.address);
  }

  async approve(assets: NftAsset[]): Promise<Transaction<Signer>> {
    assertSameCollection(assets);
    assert(assets.length, `No tokens`);
    const [asset] = assets;
    const srcChainKey = asset.collection.chainKey;
    const proxy = this.tryGetOnftProxy(srcChainKey);
    assert(proxy);
    const provider = this.providerFactory(srcChainKey);
    const erc721 = this.getERC721Contract(srcChainKey);
    const populatedTransaction = erc721.populateTransaction.setApprovalForAll(proxy.address, true);
    return createTransaction(populatedTransaction, {
      provider,
      chainKey: srcChainKey,
    });
  }

  supports(collection: NftCollection): boolean {
    if (!isEvmChainKey(collection.chainKey)) return false;
    for (const deployment of Object.values(this.config.deployments)) {
      if (deployment.collection.equals(collection)) return true;
    }
    return false;
  }

  protected async getSingleMessageFee(
    asset: NftAsset,
    dstChainKey: ChainKey,
    adapterParams: AdapterParams,
  ): Promise<FeeQuote> {
    const srcChainKey = asset.collection.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const onft = this.getONFTContract(srcChainKey);
    const tokenId = asset.tokenId;
    const native = getNativeCurrency(srcChainKey);
    const toAddress = ZERO_ADDRESS;
    const useZro = false;

    const cost = await onft.estimateSendFee(
      dstEid,
      toAddress,
      tokenId,
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
    const onft = this.getONFTContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const native = getNativeCurrency(srcChainKey);
    const tokenIds = assets.map((a) => a.tokenId);

    const cost = await onft.estimateSendBatchFee(
      dstEid,
      ONE_ADDRESS,
      tokenIds,
      false,
      serializeAdapterParams(adapterParams),
    );

    return {
      nativeFee: CurrencyAmount.fromRawAmount(native, cost.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, 0),
    };
  }

  async getAssets(collection: NftCollection, address: string): Promise<Amount<NftAsset>[]> {
    return this.balanceProvider.getAssets(collection, address);
  }

  protected getONFTContract(chainKey: ChainKey) {
    const provider = this.providerFactory(chainKey);
    const deployment = this.getDeployment(chainKey);
    if (deployment.onftProxy) {
      return ProxyONFT721__factory.connect(deployment.onftProxy.address, provider);
    }
    if (deployment.onft) {
      return ONFT721__factory.connect(deployment.onft.address, provider);
    }
    throw new Error(`No ONFT contract for ${chainKey}`);
  }

  protected getERC721Contract(chainKey: ChainKey) {
    const provider = this.providerFactory(chainKey);
    const deployment = this.getDeployment(chainKey);
    return ERC721__factory.connect(deployment.collection.address, provider);
  }

  protected async transferBatch(input: OnftTransferInput): Promise<Transaction<Signer>> {
    const onft = this.getONFTContract(input.srcChainKey);
    const provider = this.providerFactory(input.srcChainKey);
    const tokenIds = input.assets.map((amount) => amount.asset.tokenId);
    const adapterParams = serializeAdapterParams(input.adapterParams);

    const {dstAddress, srcAddress} = input;
    const srcChainKey = input.srcChainKey;
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const value = input.fee.nativeFee.quotient;
    const zroPaymentAddress = ZERO_ADDRESS;

    const populatedTransaction = await onft.populateTransaction.sendBatchFrom(
      srcAddress,
      dstEid,
      dstAddress,
      tokenIds,
      srcAddress,
      zroPaymentAddress,
      adapterParams,
      {value, from: srcAddress},
    );

    return createTransaction(populatedTransaction, {provider, chainKey: srcChainKey});
  }

  async transfer(input: OnftTransferInput): Promise<Transaction<Signer>> {
    assertSameCollection(input.assets.map((amount) => amount.asset));
    if (input.assets.length > 1) {
      return this.transferBatch(input);
    }

    return this.transferSingle(input);
  }

  protected async transferSingle(input: OnftTransferInput): Promise<Transaction<Signer>> {
    const [amount] = input.assets;
    assert(amount);
    const {srcAddress, dstAddress} = input;
    const onft = this.getONFTContract(input.srcChainKey);
    const provider = this.providerFactory(input.srcChainKey);
    const adapterParams = serializeAdapterParams(input.adapterParams);
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const tokenId = amount.asset.tokenId;
    const zroPaymentAddress = ZERO_ADDRESS;
    const value = input.fee.nativeFee.quotient;
    console.log({
      srcAddress,
      dstAddress,
      tokenId,
    });

    const populatedTransaction = await onft.populateTransaction.sendFrom(
      srcAddress,
      dstEid,
      dstAddress,
      tokenId,
      srcAddress,
      zroPaymentAddress,
      adapterParams,
      {value, from: srcAddress},
    );

    return createTransaction(populatedTransaction, {provider, chainKey: input.srcChainKey});
  }
}
