import type {Currency, Token} from '@layerzerolabs/ui-core';

export type StargateV2Config = {
  assetId: number;
  sharedDecimals: number;
  deployments: {
    [chainKey: string]: {
      eid: number;
      token: Currency;
      lpToken?: Token;
      stargatePool?: {
        address: string;
      };
      stargatePoolNative?: {
        address: string;
      };
      stargateOft?: {
        address: string;
      };
      // not used since bus gas optimizations change
      feeLib: {
        address: string;
      };
      tokenMessaging: {
        address: string;
      };
    };
  };
};
