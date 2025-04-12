import type {StargateV2TokenMessagingConfig} from '../../types/zod';

export const TOKEN_MESSAGING_SANDBOX: StargateV2TokenMessagingConfig = {
  api: {
    url: 'https://d1oc18n8di3ccj.cloudfront.net',
  },
  deployments: {
    'bsc-sandbox': {
      eid: 50102,
      tokenMessaging: {
        address: '0x65816bf78E206Cbd3a0542E5E1ddb1484D8d87f8',
      },
    },
    'ethereum-sandbox': {
      eid: 50121,
      tokenMessaging: {
        address: '0xb8b938c4BFDaCc95ec4d76600c7Ea57bbBB8DA52',
      },
    },
    'polygon-sandbox': {
      eid: 50109,
      tokenMessaging: {
        address: '0x65816bf78E206Cbd3a0542E5E1ddb1484D8d87f8',
      },
    },
  },
};
