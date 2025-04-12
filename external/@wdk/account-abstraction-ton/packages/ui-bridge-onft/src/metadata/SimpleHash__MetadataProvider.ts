import {assert} from '@layerzerolabs/ui-core';

import type {NftMetadata, NftMetadataProvider} from './NftMetadataProvider';
import {simplehashChainNameMap} from '../contrib/simplehash';
import type {NftCollection} from '../types/NftCollection';
import type {NftAsset} from '../types/NftAsset';

/**
 * Example third-party NFT metadata provider based on SimpleHash API
 *
 * You will need to sign up for their API and pass your API Key to this provider
 * in order to use it. Also remember that it's only available on a subset of chains.
 *
 * The downside of this provider is that their service lags behind the chain
 * so there might be a delay if a new token is minted. On the upside the API is quite fast
 * and can also provide you with thumbnail URLs for NFTs with large images
 */
export class SimpleHash__MetadataProvider implements NftMetadataProvider {
  constructor(
    private readonly apiKey: string,
    protected readonly chainKeyMap = simplehashChainNameMap,
  ) {}

  supports(collection: NftCollection): boolean {
    return this.chainKeyMap.has(collection.chainKey);
  }

  async getMetadata(asset: NftAsset): Promise<NftMetadata> {
    const chainKey = asset.collection.chainKey;
    const simpleHashChainName = this.chainKeyMap.get(chainKey);
    assert(simpleHashChainName, `ChainKey ${chainKey} is not supported`);

    const tokenId = asset.tokenId;
    const collectionAddress = asset.collection.address.toLowerCase();

    const url = `https://api.simplehash.com/api/v0/nfts/${simpleHashChainName}/${collectionAddress}/${tokenId}`;

    const response: SimplehashNft = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'X-API-KEY': this.apiKey,
      },
    }).then((res) => res.json());

    return {
      image: response.image_url ?? undefined,
      name: response.name ?? undefined,
      description: response.description ?? undefined,
    };
  }
}

interface SimplehashNft {
  chain: string;
  contract_address: string;
  token_id: string;
  image_url?: string | null;
  name?: string | null;
  description?: string | null;
  previews?: SimplehashImagePreviews;
}

interface SimplehashImagePreviews {
  image_small_url?: string | null;
  image_medium_url?: string | null;
  image_large_url?: string | null;
  image_opengraph_url?: string | null;
  blurhash?: string | null;
  predominant_color?: string | null;
}
