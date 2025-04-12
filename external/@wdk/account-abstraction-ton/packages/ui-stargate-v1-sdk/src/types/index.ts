import type {StargateVersion} from '@layerzerolabs/ui-stargate';
import type {ChainKey, Currency, Token} from '@layerzerolabs/ui-core';

export type Contract = {
  address: string;
  chainKey: ChainKey;
};

export type ChainPath = {
  srcEid: number;
  dstEid: number;
  srcPoolId: number;
  dstPoolId: number;
  ready: boolean;
  weight: number;
};

export type StargateV1Pool = {
  eid: number;
  address: string;
  poolId: number;
  lpToken: Token;
  token: Currency;
  stargateVersion: typeof StargateVersion.V1;
  chainKey: ChainKey;
  symbol: string;
  decimals: number;
  sharedDecimals: number;
  disabled?: boolean;
};

export type Deployment = {
  eid: number;
  chainKey: ChainKey;
  router?: Contract;
  routerEth?: Contract;
  bridge?: Contract;
  factory?: Contract;
  poolView?: Contract;
  lpStaking?: Contract[];
  lpStakingTime?: Contract[];
  stargateToken?: Token;
  stargatePreCrime?: Contract;
};

type Rule = {
  srcPoolId?: number;
  dstPoolId?: number;
  srcChainKey?: ChainKey;
  dstChainKey?: ChainKey;
  disabled: boolean;
};

export type StargateV1Config = {
  deployments: {
    [chainKey in ChainKey]: Deployment;
  };
  chainPaths: ChainPath[];
  pools: StargateV1Pool[];
  rules: Rule[];
};
