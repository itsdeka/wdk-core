import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const ETH_SANDBOX: StargateV2Config = createConfig({
  assetId: 13,
  deployments: {
    // no sandbox right now
  },
  sharedDecimals: 6,
});
