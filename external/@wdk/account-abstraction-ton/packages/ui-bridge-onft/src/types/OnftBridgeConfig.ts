import type {ChainKey} from '@layerzerolabs/ui-core';
import type {NftCollection} from './NftCollection';
import type {NftStandard} from './NftStandard';

type OnftProxyContract = {
  chainKey: ChainKey;
  address: string;
};

type OnftContract = {
  chainKey: ChainKey;
  address: string;
};

export type OnftBridgeConfig = {
  standard: NftStandard;
  deployments: {
    [chainKey: string]: {
      eid: number;
      collection: NftCollection;
      onft?: OnftContract;
      onftProxy?: OnftProxyContract;
    };
  };
};
