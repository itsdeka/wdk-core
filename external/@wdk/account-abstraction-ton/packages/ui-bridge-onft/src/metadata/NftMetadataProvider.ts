import type {NftAsset} from '../types/NftAsset';
import type {NftCollection} from '../types/NftCollection';

export type NftMetadata = {
  image?: string;
  name?: string;
  description?: string;
};

export interface NftMetadataProvider {
  supports(collection: NftCollection): boolean;
  getMetadata(asset: NftAsset): Promise<NftMetadata>;
}
