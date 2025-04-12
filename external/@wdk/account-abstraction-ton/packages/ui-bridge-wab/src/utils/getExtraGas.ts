import type {ChainKey} from '@layerzerolabs/ui-core';

export function getExtraGas(srcChainKey: ChainKey, dstChainKey: ChainKey) {
  const extraGas =
    dstChainKey === 'arbitrum'
      ? 3_000_000
      : dstChainKey === 'aptos' || dstChainKey === 'aptos-testnet'
        ? 10_000
        : 250_000;

  return extraGas;
}
