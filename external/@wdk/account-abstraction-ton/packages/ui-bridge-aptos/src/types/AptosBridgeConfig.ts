import type {ChainKey, Currency} from '@layerzerolabs/ui-core';
import type {AptosCoinType} from './AptosCoinType';

type Deployment = {
  eid: number;
  bridge: {
    address: string;
  };
};

export type AptosBridgeConfig = {
  deployments: {
    [chainKey in ChainKey]: Deployment;
  };
  // swap groups
  tokens: {
    [coinType in AptosCoinType]: Currency[];
  };
};
