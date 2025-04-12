import {isEvmChainKey} from '@layerzerolabs/ui-core';
import type {ProviderFactory} from '@layerzerolabs/ui-evm';

import {ERC1155__factory} from '../typechain';
import type {OnftBalanceProvider} from './OnftBalanceProvider';
import type {NftCollection} from '../types/NftCollection';
import {NftStandard} from '../types/NftStandard';
import {NftAsset} from '../types/NftAsset';
import {Amount} from '../types/Amount';

/**
 * RPC-based balance provider for ERC1155 tokens.
 *
 * Since ERC1155 does not have a standardized enumerability,
 * the downside of this provider is that the token IDs need to be provided to it statically.
 * On the upside, the balances returned will be fresh as opposed to any third-party indexing service.
 */
export class RPC__StaticId__ERC1155BalanceProvider implements OnftBalanceProvider {
  constructor(
    protected readonly ids: (bigint | string | number)[],
    protected readonly providerFactory: ProviderFactory,
  ) {}

  supports(collection: NftCollection): boolean {
    return collection.standard === NftStandard.ERC1155 && isEvmChainKey(collection.chainKey);
  }

  protected getContract(collection: NftCollection) {
    return ERC1155__factory.connect(collection.address, this.providerFactory(collection.chainKey));
  }

  async getAssets(collection: NftCollection, owner: string): Promise<Amount<NftAsset>[]> {
    const erc1155 = this.getContract(collection);

    const amounts = await Promise.all(
      this.ids.map((tokenId) =>
        erc1155
          .balanceOf(owner, tokenId)
          .then(
            (balance): Amount<NftAsset> =>
              Amount.from(
                NftAsset.from({collection, tokenId: Number(tokenId)}),
                balance.toBigInt(),
              ),
          ),
      ),
    );

    return amounts.filter((i) => i.toBigInt() != BigInt(0));
  }
}
