import {arbitrum} from '../deployments/arbitrum';
import {avalanche} from '../deployments/avalanche';
import {base} from '../deployments/base';
import {bsc} from '../deployments/bsc';
import {ethereum} from '../deployments/ethereum';
import {fantom} from '../deployments/fantom';
import {kava} from '../deployments/kava';
import {linea} from '../deployments/linea';
import {mantle} from '../deployments/mantle';
import {metis} from '../deployments/metis';
import {optimism} from '../deployments/optimism';
import {polygon} from '../deployments/polygon';
import {scroll} from '../deployments/scroll';
import pools from './mainnet/pools.json';
import chainPaths from './mainnet/chainPaths.json';
import {createStargateConfig} from '../types/zod';
import type {StargateV1Pool} from '../types';

export const mainnet = createStargateConfig({
  deployments: {
    arbitrum,
    avalanche,
    base,
    bsc,
    ethereum,
    fantom,
    kava,
    linea,
    mantle,
    metis,
    optimism,
    polygon,
    scroll,
  },
  pools: pools as StargateV1Pool[],
  chainPaths,
});
