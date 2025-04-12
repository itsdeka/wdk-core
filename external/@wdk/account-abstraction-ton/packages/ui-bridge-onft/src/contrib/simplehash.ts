import type {ChainKey} from '@layerzerolabs/ui-core';

// See https://docs.simplehash.com/reference/supported-chains-testnets
export const simplehashChainNameMap = new Map<ChainKey, string>([
  ['arbitrum-goerli', 'arbitrum-goerli'],
  ['arbitrum', 'arbitrum'],
  ['avalanche', 'avalanche'],
  ['base-goerli', 'base-goerli'],
  ['bcs-testnet', 'bsc-testnet'],
  ['bcs', 'bsc'],
  ['ethereum', 'ethereum'],
  ['fuji', 'avalanche-fuji'],
  ['gnosis', 'gnosis'],
  ['goerli', 'ethereum-goerli'],
  ['mumbai', 'polygon-mumbai'],
  ['optimism-goerli', 'optimism-goerli'],
  ['optimism', 'optimism'],
  ['polygon', 'polygon'],
  ['sepolia', 'ethereum-sepolia'],
  ['solana-testnet', 'solana-testnet'],
  ['solana', 'solana'],
]);
