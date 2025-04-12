import type {ChainKey} from '@layerzerolabs/ui-core';

const disabledChains: ChainKey[] = [
  // scroll has not been announced yet
  'scroll',
];

const disabledPoolIds = [
  16, // MAI
];
const disabledPools = [
  {
    // Metis
    chainKey: 'bsc',
    poolId: 17,
  },
  {
    // USDC on Fantom
    chainKey: 'fantom',
    poolId: 1,
  },
  {
    // WOO on Fantom
    chainKey: 'fantom',
    poolId: 20,
  },
];

export function isPoolDisabled(pool: {chainKey: ChainKey; poolId: number}) {
  if (disabledChains.includes(pool.chainKey)) {
    return true;
  }
  if (disabledPoolIds.includes(pool.poolId)) {
    return true;
  }
  if (
    disabledPools.some(
      (disabledPool) =>
        disabledPool.chainKey === pool.chainKey && disabledPool.poolId === pool.poolId,
    )
  ) {
    return true;
  }
  return false;
}
