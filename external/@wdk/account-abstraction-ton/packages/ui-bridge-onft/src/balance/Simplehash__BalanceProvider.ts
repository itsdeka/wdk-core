import {assert} from '@layerzerolabs/ui-core';

import type {OnftBalanceProvider} from './OnftBalanceProvider';
import {simplehashChainNameMap} from '../contrib/simplehash';
import type {NftCollection} from '../types/NftCollection';
import {NftAsset} from '../types/NftAsset';
import {Amount} from '../types/Amount';

/**
 * Example third-party OnftContract balance provider based on SimpleHash API
 *
 * You will need to sign up for their API and pass your API Key to this provider
 * in order to use it. Also remember that it's only available on a subset of chains.
 *
 * The downside of this provider is that their service lags behind the chain
 * so there might be a delay if a new token is minted. On the upside the API is quite fast
 */
export class Simplehash__BalanceProvider implements OnftBalanceProvider {
  constructor(
    private readonly apiKey: string,
    protected readonly chainNameMap = simplehashChainNameMap,
  ) {}

  supports(collection: NftCollection): boolean {
    return this.chainNameMap.has(collection.chainKey);
  }

  async getAssets(collection: NftCollection, owner: string): Promise<Amount<NftAsset>[]> {
    const chainName = this.chainNameMap.get(collection.chainKey);
    const assets: Amount<NftAsset>[] = [];

    try {
      assert(chainName, `Unsupported chain ID: ${collection.chainKey}`);

      let url: string | null | undefined =
        `https://api.simplehash.com/api/v0/nfts/owners?chains=${chainName}&contract_addresses=${collection.address}&wallet_addresses=${owner}&limit=50`;

      do {
        const response: SimplehashResponse = await fetch(url, {
          headers: {
            Accept: 'application/json',
            'X-API-KEY': this.apiKey,
          },
        }).then((res) => res.json());

        url = response.next;

        if (response.nfts == null) break;

        for (const simplehashNft of response.nfts) {
          assets.push(
            Amount.from(
              NftAsset.from({collection, tokenId: Number(simplehashNft.token_id)}),
              BigInt(simplehashNft.token_count),
            ),
          );
        }
      } while (url);

      return assets;
    } catch (error: unknown) {
      console.error('Error getting assets from SimpleHash', error);

      return assets;
    }
  }
}

interface SimplehashResponse {
  next_cursor?: string | null;
  next?: string | null;
  previous?: string | null;
  nfts: SimplehashNft[];
}

interface SimplehashNft {
  token_id: string;
  token_count: number;
}
