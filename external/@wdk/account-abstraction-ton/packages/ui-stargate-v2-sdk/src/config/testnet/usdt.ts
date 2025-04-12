import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const USDT_TESTNET: StargateV2Config = createConfig({
  assetId: 2,
  deployments: {
    'arbitrum-sepolia': {
      eid: 40231,
      token: {
        name: 'USDT',
        symbol: 'USDT',
        decimals: 18,
        address: '0x3C0Dea5955cb490F78e330A213c960cA63f66314',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 18,
        address: '0x73b8263b49CDB160691cCa10a5569aB6360bAB91',
      },
      feeLib: {
        address: '0xf375a930168b5890407B200336c6a76b2F3243c8',
      },
      tokenMessaging: {
        address: '0xCf26A197b5353ff886919c2a2FB4c45FE233DD3f',
      },
      stargatePool: {
        address: '0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042',
      },
    },
    'bsc-testnet': {
      eid: 40102,
      token: {
        name: 'USDT',
        symbol: 'USDT',
        decimals: 6,
        address: '0xe37Bdc6F09DAB6ce6E4eBC4d2E72792994Ef3765',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0xa0f6D07579D0657031d6A2720CFCa8d46EDF5dA1',
      },
      feeLib: {
        address: '0x95512Dd7a21Be88a7CDBA8B4647FB3fb0Efa2855',
      },
      tokenMessaging: {
        address: '0x1A2dC7f4a90a1266a9C66191CcDB2961a5BdD2ee',
      },
      stargatePool: {
        address: '0x0a0C1221f451Ac54Ef9F21940569E252161a2495',
      },
    },
    'klaytn-baobab': {
      eid: 40150,
      token: {
        name: 'Bridged USDT (Stargate)',
        symbol: 'USDT',
        decimals: 18,
        address: '0xEAFCc3713E7CeF6565f358ad4497A319A2aE30FC',
      },
      feeLib: {
        address: '0x3C0Dea5955cb490F78e330A213c960cA63f66314',
      },
      tokenMessaging: {
        address: '0x6C2d1Dc35C69296C0a1661D9f1c757d6Fc3080E8',
      },
      stargateOft: {
        address: '0x0fd58375f7849487f14F68812DDb35d59E1bAD79',
      },
    },
    'optimism-sepolia': {
      eid: 40232,
      token: {
        name: 'USDT',
        symbol: 'USDT',
        decimals: 18,
        address: '0x9352001271a0af0d09a4e7F6C431663A2D5AA9d2',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 18,
        address: '0x5151CB0fC25f8904a1A4ba69d7D8E8eF45adE211',
      },
      feeLib: {
        address: '0xBd63EDc97649ad7F9e3D4063D24AA76ecf83767c',
      },
      tokenMessaging: {
        address: '0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042',
      },
      stargatePool: {
        address: '0x0d7aB83370b492f2AB096c80111381674456e8d8',
      },
    },
    sepolia: {
      eid: 40161,
      token: {
        name: 'USDT',
        symbol: 'USDT',
        decimals: 18,
        address: '0xB15a3F6E64D2CaffAF7927431AB0D1c21e429644',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 18,
        address: '0xcdA4c6D8A1aA67d061d008ddaA84de2157D61d4a',
      },
      feeLib: {
        address: '0x32F4d65b9DF20480242f40D8A1dfC57145AdEE39',
      },
      tokenMessaging: {
        address: '0xe5EcECEc372382A96Fe8E88fDC52f327e0895245',
      },
      stargatePool: {
        address: '0xc9c7A3Ae8F1059867247a009b32Ad7AAD9a52D1c',
      },
    },
  },
  sharedDecimals: 6,
});
