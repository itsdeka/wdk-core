import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const USDC_TESTNET: StargateV2Config = createConfig({
  assetId: 1,
  deployments: {
    'arbitrum-sepolia': {
      eid: 40231,
      token: {
        name: 'USDC',
        symbol: 'USDC',
        decimals: 6,
        address: '0x3253a335E7bFfB4790Aa4C25C4250d206E9b9773',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x5151CB0fC25f8904a1A4ba69d7D8E8eF45adE211',
      },
      feeLib: {
        address: '0xBd63EDc97649ad7F9e3D4063D24AA76ecf83767c',
      },
      tokenMessaging: {
        address: '0xCf26A197b5353ff886919c2a2FB4c45FE233DD3f',
      },
      stargatePool: {
        address: '0x0d7aB83370b492f2AB096c80111381674456e8d8',
      },
    },
    'klaytn-baobab': {
      eid: 40150,
      token: {
        name: 'Bridged USDC (Stargate)',
        symbol: 'USDC.e',
        decimals: 6,
        address: '0xCfd388493f182211165EB01b92cE5626B6D2eC0F',
      },
      feeLib: {
        address: '0x9352001271a0af0d09a4e7F6C431663A2D5AA9d2',
      },
      tokenMessaging: {
        address: '0x6C2d1Dc35C69296C0a1661D9f1c757d6Fc3080E8',
      },
      stargateOft: {
        address: '0xe19525580913971d220dBa3BbD01eE2A0b1adc6F',
      },
    },
    'optimism-sepolia': {
      eid: 40232,
      token: {
        name: 'USDC',
        symbol: 'USDC',
        decimals: 6,
        address: '0x488327236B65C61A6c083e8d811a4E0D3d1D4268',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0xB9E16057deabc08Da98009c8fd17E23bF4D8eE7C',
      },
      feeLib: {
        address: '0x14ae7853Cd69dfd519899a30AA8bA30FA4536453',
      },
      tokenMessaging: {
        address: '0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042',
      },
      stargatePool: {
        address: '0x1E8A86EcC9dc41106d3834c6F1033D86939B1e0D',
      },
    },
    sepolia: {
      eid: 40161,
      token: {
        name: 'USDC',
        symbol: 'USDC',
        decimals: 6,
        address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x0d476322a44F1E6B79dcbB006152c1623f4f19AD',
      },
      feeLib: {
        address: '0xE66B2eFfbc756076fFd1aDaA21Ed5C8FB75eF929',
      },
      tokenMessaging: {
        address: '0xe5EcECEc372382A96Fe8E88fDC52f327e0895245',
      },
      stargatePool: {
        address: '0xa4e97dFd56E0E30A2542d666Ef04ACC102310083',
      },
    },
  },
  sharedDecimals: 6,
});
