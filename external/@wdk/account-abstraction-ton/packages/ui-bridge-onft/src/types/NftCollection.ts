import type {NftStandard} from './NftStandard';

export class NftCollection {
  private constructor(
    public readonly address: string,
    public readonly chainKey: string,
    public readonly standard: NftStandard,
    public readonly name: string,
  ) {}

  static from({
    address,
    chainKey,
    name,
    standard,
  }: {
    address: string;
    chainKey: string;
    standard: NftStandard;
    name: string;
  }): NftCollection {
    return new NftCollection(address, chainKey, standard, name);
  }

  equals(other: NftCollection): boolean {
    return this.address === other.address && this.chainKey === other.chainKey;
  }
}
