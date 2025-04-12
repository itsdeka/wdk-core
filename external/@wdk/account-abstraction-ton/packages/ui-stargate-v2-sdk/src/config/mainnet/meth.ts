import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const METH_MAINNET: StargateV2Config = createConfig({
  assetId: 22,
  deployments: {
    ethereum: {
      eid: 30101,
      token: {
        name: 'mETH',
        symbol: 'mETH',
        decimals: 18,
        address: '0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa',
      },
      lpToken: {
        name: 'mETH-LP',
        symbol: 'S*mETH',
        decimals: 18,
        address: '0xD646CD9Dff77097b454a5a148BeaE6615e3bC2e2',
      },
      feeLib: {
        address: '0x6D5521F46b2cba9443feFC09cBaC3B15AE0F73eB',
      },
      tokenMessaging: {
        address: '0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980',
      },
      stargatePool: {
        address: '0x268Ca24DAefF1FaC2ed883c598200CcbB79E931D',
      },
    },
    mantle: {
      eid: 30181,
      token: {
        name: 'mETH',
        symbol: 'mETH',
        decimals: 18,
        address: '0xcDA86A272531e8640cD7F1a92c01839911B90bb0',
      },
      lpToken: {
        name: 'mETH-LP',
        symbol: 'S*mETH',
        decimals: 18,
        address: '0xfe1e5Ff7FFE3672C085a4b1Dd6b95273c9164022',
      },
      feeLib: {
        address: '0x6eC3EfD27d8b1070Fe96910EF416D54e845045c9',
      },
      tokenMessaging: {
        address: '0x41B491285A4f888F9f636cEc8a363AB9770a0AEF',
      },
      stargatePool: {
        address: '0xF7628d84a2BbD9bb9c8E686AC95BB5d55169F3F1',
      },
    },
  },
  sharedDecimals: 6,
});
