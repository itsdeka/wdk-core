import type {Amount} from '../types/Amount';
import type {NftAsset} from '../types/NftAsset';
import type {NftCollection} from '../types/NftCollection';

export interface OnftBalanceProvider {
  supports(collection: NftCollection): boolean;
  getAssets(collection: NftCollection, owner: string): Promise<Amount<NftAsset>[]>;
}
