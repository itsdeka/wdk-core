import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const ETH_TESTNET: StargateV2Config = createConfig({
  assetId: 13,
  deployments: {
    'arbitrum-sepolia': {
      eid: 40231,
      token: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0xB9E16057deabc08Da98009c8fd17E23bF4D8eE7C',
      },
      feeLib: {
        address: '0x14ae7853Cd69dfd519899a30AA8bA30FA4536453',
      },
      tokenMessaging: {
        address: '0xCf26A197b5353ff886919c2a2FB4c45FE233DD3f',
      },
      stargatePoolNative: {
        address: '0x1E8A86EcC9dc41106d3834c6F1033D86939B1e0D',
      },
    },
    'klaytn-baobab': {
      eid: 40150,
      token: {
        name: 'ETH',
        symbol: 'OFT Token',
        decimals: 18,
        address: '0xE26d6ABA383A7f452D3f66B9A4a51A1dfe79DF2E',
      },
      feeLib: {
        address: '0xcDD249F414D36594121379bC04bad085cC27F271',
      },
      tokenMessaging: {
        address: '0x6C2d1Dc35C69296C0a1661D9f1c757d6Fc3080E8',
      },
      stargateOft: {
        address: '0xf1b69ee3097c6E8CC6487B7667dB818FeDC7b1a9',
      },
    },
    'optimism-sepolia': {
      eid: 40232,
      token: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0x6c16Bb71e68b33CDABe57f46794344e5840ccC95',
      },
      feeLib: {
        address: '0x6C90B6EDdFCD46818061Aa1Fe13CC30c676e276E',
      },
      tokenMessaging: {
        address: '0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042',
      },
      stargatePoolNative: {
        address: '0x3C0Dea5955cb490F78e330A213c960cA63f66314',
      },
    },
    sepolia: {
      eid: 40161,
      token: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0x211c9c0bE2abaf38EcDcf626D15660C9D3AE34c6',
      },
      feeLib: {
        address: '0x273e333dd2C17D7fe9822322fAdBBfcBe47b8132',
      },
      tokenMessaging: {
        address: '0xe5EcECEc372382A96Fe8E88fDC52f327e0895245',
      },
      stargatePoolNative: {
        address: '0xa5A8481790BB57CF3FA0a4f24Dc28121A491447f',
      },
    },
  },
  sharedDecimals: 6,
});
