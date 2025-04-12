import type {SerializedDeployment} from '../../types/zod';

export const optimismSepolia: SerializedDeployment = {
  eid: 10232,
  factory: {
    address: '0xDb6E40E8fACF1a76866ff067D57539c8EE1bfC16',
  },
  bridge: {
    address: '0xB55a9254b467A0a52d6696cD327f4C4a37498c1A',
  },
  router: {
    address: '0xa2dfFdDc372C6aeC3a8e79aAfa3953e8Bc956D63',
  },
  routerEth: {
    address: '0xA251Af9e97aadE0F0E650525Ad531a7a534c335E',
  },
  stargateToken: {
    address: '0x08dD692ECBa27CAb51e1f99De23Df89D2be81111',
  },
  lpStakingTime: [],
  lpStaking: [],
};
