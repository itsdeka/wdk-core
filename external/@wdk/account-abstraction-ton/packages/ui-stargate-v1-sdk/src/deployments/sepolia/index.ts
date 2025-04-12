import type {SerializedDeployment} from '../../types/zod';

export const sepolia: SerializedDeployment = {
  eid: 10161,
  factory: {
    address: '0xA296710670e16BA7791E919ddB3704c61f366118',
  },
  bridge: {
    address: '0x96ab23d6224cCA013D119Edd5A31813C32BCA077',
  },
  router: {
    address: '0x2836045A50744FB50D3d04a9C8D18aD7B5012102',
  },
  routerEth: {
    address: '0x676Fa8D37B948236aAcE03A0b34fc0Bc37FABA8D',
  },
  stargateToken: {
    address: '0x5e2675BA29c47E58Cb37e94Ce25A720BD17f6b4a',
  },
  lpStakingTime: [],
  lpStaking: [],
};
