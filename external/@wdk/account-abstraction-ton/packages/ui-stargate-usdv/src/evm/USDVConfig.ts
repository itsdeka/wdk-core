import type {Token} from '@layerzerolabs/ui-core';

type ContractDetails = {
  chainKey: string;
  address: string;
};

export type Deployment = {
  usdv: Token;
  eid: number;
  vault?: ContractDetails;
  operators?: ContractDetails[];
  minterProxy?: ContractDetails;
  stbt?: ContractDetails;
  sideChainSwapRecolor: ContractDetails[];
  bridgeRecolor?: ContractDetails;
};

export type USDVConfig = {
  deployments: {
    [chainKey: string]: Deployment;
  };
  // extra list of tokens
  stables: Token[];
};
