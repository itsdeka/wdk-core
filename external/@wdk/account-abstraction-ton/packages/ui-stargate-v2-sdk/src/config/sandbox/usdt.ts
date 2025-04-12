import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const USDT_SANDBOX: StargateV2Config = createConfig({
  assetId: 2,
  deployments: {
    // no sandbox right now
  },
  sharedDecimals: 6,
});
