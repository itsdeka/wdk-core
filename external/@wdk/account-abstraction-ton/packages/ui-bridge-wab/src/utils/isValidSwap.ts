import type {Currency} from '@layerzerolabs/ui-core';
import type {WrappedAssetBridgeConfig} from '../types/WrappedAssetBridgeConfig';

// returns true if tokens are both in the same swap group
export function isValidSwap(
  srcToken: Currency,
  dstToken: Currency,
  config: WrappedAssetBridgeConfig,
) {
  for (const swapGroup of config.tokens) {
    if (swapGroup.some((t) => t.equals(srcToken)) && swapGroup.some((t) => t.equals(dstToken))) {
      return true;
    }
  }
  return false;
}
