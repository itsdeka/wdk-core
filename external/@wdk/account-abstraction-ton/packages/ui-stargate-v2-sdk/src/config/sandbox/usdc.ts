import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const USDC_SANDBOX: StargateV2Config = createConfig({
  assetId: 1,
  deployments: {
    // no sandbox right now
  },
  sharedDecimals: 6,
});
