import {assert} from '@layerzerolabs/ui-core';
import type {NftAsset} from './types/NftAsset';

export function isSameCollection(assets: NftAsset[]): boolean {
  const [first, ...rest] = assets;
  for (const other of rest) {
    if (!first.collection.equals(other.collection)) return false;
  }
  return true;
}

export function assertSameCollection(assets: NftAsset[]): void {
  assert(isSameCollection(assets), `All assets must be from the same collection`);
}
