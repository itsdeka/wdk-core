import {bscTestnet} from '../deployments/bsc-testnet';
import {fuji} from '../deployments/fuji';
import {sepolia} from '../deployments/sepolia';

import pools from './testnet/pools.json';
import chainPaths from './testnet/chainPaths.json';
import {createStargateConfig} from '../types/zod';
import {arbitrumSepolia} from '../deployments/arbitrum-sepolia';
import {optimismSepolia} from '../deployments/optimism-sepolia';
import type {StargateV1Pool} from '../types';

export const testnet = createStargateConfig({
  deployments: {
    sepolia: sepolia,
    'arbitrum-sepolia': arbitrumSepolia,
    'optimism-sepolia': optimismSepolia,
    'bsc-testnet': bscTestnet,
    fuji: fuji,
  },
  pools: pools as StargateV1Pool[],
  chainPaths,
});
