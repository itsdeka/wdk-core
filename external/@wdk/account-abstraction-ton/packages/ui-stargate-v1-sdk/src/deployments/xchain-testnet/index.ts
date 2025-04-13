import type {SerializedDeployment} from '../../types/zod';

export const xchainTestnet: SerializedDeployment = {
  eid: 10237,
  factory: {
    address: '0xCEA8c2b17923c5317A10cab4e0e2662eB72DBE2d',
  },
  bridge: {
    address: '0x8487f8eB781d1B6d1eC69498aFecF2fedB22869e',
  },
  router: {
    address: '0x7a33a93cc6de8daC0E0340C34E36493F2363C58C',
  },
  routerEth: {
    address: '0x5D8f00207C315F8ceedBC6c15f49B7a6F06bfb27',
  },
  stargateToken: {
    address: '0xb75aed2B36A8D5b58Edcdf0a3f9Fef74fbd8aAF4',
  },
  lpStakingTime: [],
  lpStaking: [],
};
