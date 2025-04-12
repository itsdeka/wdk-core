import {isEvmChainKey} from '@layerzerolabs/ui-core';
import type {ProviderFactory} from '@layerzerolabs/ui-evm';

import {ERC721__factory} from '../typechain';
import type {OnftBalanceProvider} from './OnftBalanceProvider';
import type {OnftBridgeConfig} from '../types/OnftBridgeConfig';
import type {NftCollection} from '../types/NftCollection';
import {NftStandard} from '../types/NftStandard';
import {NftAsset} from '../types/NftAsset';
import {Amount} from '../types/Amount';

/**
 * RPC-based balance provider for ERC721 tokens.
 *
 * Using ERC721Enumerable extension
 */
export class RPC__Enumerable__ERC721BalanceProvider implements OnftBalanceProvider {
  constructor(
    protected readonly config: OnftBridgeConfig,
    protected readonly providerFactory: ProviderFactory,
  ) {}

  supports(collection: NftCollection): boolean {
    if (collection.standard !== NftStandard.ERC721) return false;
    if (!isEvmChainKey(collection.chainKey)) return false;
    const deployment = this.config.deployments[collection.chainKey];
    if (!deployment) return false;
    return deployment.collection.equals(collection);
  }

  async getAssets(collection: NftCollection, address: string): Promise<Amount<NftAsset>[]> {
    const erc721 = ERC721__factory.connect(
      collection.address,
      this.providerFactory(collection.chainKey),
    );
    const ids = await erc721.walletOfOwner(address);
    const assets: Amount<NftAsset>[] = ids.map((tokenId) => {
      const asset = NftAsset.from({collection, tokenId: tokenId.toNumber()});
      const amount = Amount.from(asset, BigInt(1));
      return amount;
    });

    return assets;
  }
}
