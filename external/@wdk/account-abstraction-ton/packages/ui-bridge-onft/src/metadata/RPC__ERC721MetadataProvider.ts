import {isEvmChainKey} from '@layerzerolabs/ui-core';
import type {ProviderFactory} from '@layerzerolabs/ui-evm';

import {ERC721__factory} from '../typechain';
import type {NftMetadata, NftMetadataProvider} from './NftMetadataProvider';
import type {NftCollection} from '../types/NftCollection';
import {NftStandard} from '../types/NftStandard';
import type {NftAsset} from '../types/NftAsset';

/**
 * RPC-based metadata provider for ERC721 tokens - it calls the RPC endpoint,
 * gets the tokenURI and returns the metadata it contains.
 *
 * The downside of this provider is the chain call which can be expensive or slow,
 * on the upside the metadata is always the fresh version if the OnftContract is dynamic
 */
export class RPC__ERC721MetadataProvider implements NftMetadataProvider {
  constructor(protected readonly providerFactory: ProviderFactory) {}

  supports(collection: NftCollection): boolean {
    return collection.standard === NftStandard.ERC721 && isEvmChainKey(collection.chainKey);
  }

  protected getContract(collection: NftCollection) {
    return ERC721__factory.connect(collection.address, this.providerFactory(collection.chainKey));
  }

  async getMetadata(asset: NftAsset): Promise<NftMetadata> {
    const erc721 = this.getContract(asset.collection);

    const tokenUri = await erc721.tokenURI(asset.tokenId);
    const metadata = await fetch(tokenUri).then((res) => res.json());

    return metadata;
  }
}
