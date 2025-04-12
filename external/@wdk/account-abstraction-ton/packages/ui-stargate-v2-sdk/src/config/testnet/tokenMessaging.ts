import type {StargateV2TokenMessagingConfig} from '../../types/zod';

export const TOKEN_MESSAGING_TESTNET: StargateV2TokenMessagingConfig = {
  api: {
    url: 'https://d2l228le2lsgpd.cloudfront.net',
  },
  deployments: {
    'arbitrum-sepolia': {
      eid: 40231,
      tokenMessaging: {
        address: '0xCf26A197b5353ff886919c2a2FB4c45FE233DD3f',
      },
    },
    'bsc-testnet': {
      eid: 40102,
      tokenMessaging: {
        address: '0x1A2dC7f4a90a1266a9C66191CcDB2961a5BdD2ee',
      },
    },
    'klaytn-baobab': {
      eid: 40150,
      tokenMessaging: {
        address: '0x6C2d1Dc35C69296C0a1661D9f1c757d6Fc3080E8',
      },
    },
    'optimism-sepolia': {
      eid: 40232,
      tokenMessaging: {
        address: '0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042',
      },
    },
    sepolia: {
      eid: 40161,
      tokenMessaging: {
        address: '0xe5EcECEc372382A96Fe8E88fDC52f327e0895245',
      },
    },
  },
};
