import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const METIS_MAINNET: StargateV2Config = createConfig({
  assetId: 17,
  deployments: {
    ethereum: {
      eid: 30101,
      token: {
        name: 'Metis Token',
        symbol: 'Metis',
        decimals: 18,
        address: '0x9E32b13ce7f2E80A01932B42553652E053D6ed8e',
      },
      lpToken: {
        name: 'METIS-LP',
        symbol: 'S*METIS',
        decimals: 18,
        address: '0xF14EEe033D8b00101aB147F87cB238a2d3E74940',
      },
      feeLib: {
        address: '0x6Dd69717B1194B81A92105B7e0F94cb40f68A3e3',
      },
      tokenMessaging: {
        address: '0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980',
      },
      stargatePool: {
        address: '0xcDafB1b2dB43f366E48e6F614b8DCCBFeeFEEcD3',
      },
    },
    metis: {
      eid: 30151,
      token: {
        name: 'Metis Token',
        symbol: 'Metis',
        decimals: 18,
        address: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
      },
      lpToken: {
        name: 'METIS-LP',
        symbol: 'S*METIS',
        decimals: 18,
        address: '0x2D4848d502B8B16b8ad86945d3D4e92F2d229dFF',
      },
      feeLib: {
        address: '0xcE8CcA271Ebc0533920C83d39F417ED6A0abB7D0',
      },
      tokenMessaging: {
        address: '0xcbE78230CcA58b9EF4c3c5D1bC0D7E4b3206588a',
      },
      stargatePool: {
        address: '0xD9050e7043102a0391F81462a3916326F86331F0',
      },
    },
  },
  sharedDecimals: 6,
});
