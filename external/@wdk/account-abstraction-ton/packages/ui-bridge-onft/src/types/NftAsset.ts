import type {AbstractAsset} from './AbstractAsset';
import type {NftCollection} from './NftCollection';

export class NftAsset implements AbstractAsset {
  private constructor(
    public readonly collection: NftCollection,
    public readonly tokenId: number,
  ) {}

  public static from({
    collection,
    tokenId,
  }: {
    collection: NftCollection;
    tokenId: number;
  }): NftAsset {
    return new NftAsset(collection, tokenId);
  }

  equals(other: unknown): other is NftAsset {
    if (other === this) return true;
    if (!(other instanceof NftAsset)) return false;
    return this.tokenId == other.tokenId && this.collection.equals(other.collection);
  }
}
