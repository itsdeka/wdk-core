import {isEvmChainKey} from '@layerzerolabs/ui-core';
import type {ProviderFactory} from '@layerzerolabs/ui-evm';

import {ERC1155__factory} from '../typechain';
import type {NftMetadata, NftMetadataProvider} from './NftMetadataProvider';
import type {NftCollection} from '../types/NftCollection';
import {NftStandard} from '../types/NftStandard';
import type {NftAsset} from '../types/NftAsset';

/**
 * RPC-based metadata provider for ERC1155 tokens - it calls the RPC endpoint,
 * gets the uri and returns the metadata it contains.
 *
 * The downside of this provider is the chain call which can be expensive or slow,
 * on the upside the metadata is always the fresh version if the OnftContract is dynamic
 */
export class RPC__ERC1155MetadataProvider implements NftMetadataProvider {
  constructor(protected readonly providerFactory: ProviderFactory) {}

  supports(collection: NftCollection): boolean {
    return collection.standard === NftStandard.ERC1155 && isEvmChainKey(collection.chainKey);
  }

  protected getContract(collection: NftCollection) {
    return ERC1155__factory.connect(collection.address, this.providerFactory(collection.chainKey));
  }

  async getMetadata(asset: NftAsset): Promise<NftMetadata> {
    const erc1155 = this.getContract(asset.collection);

    const tokenUri = await erc1155.uri(asset.tokenId);
    const metadata = await fetch(tokenUri).then((res) => res.json());

    return metadata;
  }
}
