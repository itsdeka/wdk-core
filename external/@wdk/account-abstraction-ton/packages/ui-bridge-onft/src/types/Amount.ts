import type {AbstractAsset} from './AbstractAsset';

export class Amount<TAsset extends AbstractAsset> {
  private constructor(
    public readonly asset: TAsset,
    public readonly value: bigint,
  ) {}

  public static from<TAsset extends AbstractAsset>(asset: TAsset, value: bigint): Amount<TAsset> {
    return new Amount(asset, value);
  }

  public equals(other: Amount<AbstractAsset>): other is Amount<TAsset> {
    if (this.value !== other.value) return false;
    return this.asset.equals(other.asset);
  }

  toBigInt(): bigint {
    return this.value;
  }

  toNumber(): number {
    return Number(this.value);
  }
}
