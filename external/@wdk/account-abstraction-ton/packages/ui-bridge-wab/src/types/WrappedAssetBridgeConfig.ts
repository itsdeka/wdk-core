import type {ChainKey, Coin, Token} from '@layerzerolabs/ui-core';

export type BridgeContract = {
  address: string;
  chainKey: ChainKey;
};

export type WrappedAssetBridgeConfig = {
  version: number | string;
  deployments: {
    [chainKey: ChainKey]: {
      eid: number;
      bridgeWrapped?: BridgeContract;
      bridgeOriginal?: BridgeContract;
    };
  };
  // swap groups
  tokens: (Token | Coin)[][];
};
