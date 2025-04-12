import {getNetwork} from '@layerzerolabs/ui-core';
import type {Wallet} from './Wallet';

export async function assertWallet(
  wallet: Wallet<unknown>,
  expected: {chainKey: string; address: string},
) {
  const [nativeChainId, address] = await Promise.all([
    wallet.getNativeChainId(),
    wallet.getAddress(),
  ]);
  const expectedNetwork = getNetwork(expected.chainKey);

  if (nativeChainId !== expectedNetwork.nativeChainId) {
    throw new Error('Invalid wallet chain');
  }
  if (address.toLowerCase() !== expected.address.toLowerCase()) {
    throw new Error('Invalid wallet address');
  }
}
