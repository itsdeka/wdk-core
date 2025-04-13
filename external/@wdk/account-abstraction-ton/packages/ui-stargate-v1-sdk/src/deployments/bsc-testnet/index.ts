import type {SerializedDeployment} from '../../types/zod';

export const bscTestnet: SerializedDeployment = {
  eid: 10102,
  factory: {
    address: '0x9DB9116eD670F68B40a5033CE52c72D1702c2Db6',
  },
  bridge: {
    address: '0x6B5b5A7A5195Da7E20251822022Ae03B12Df5952',
  },
  router: {
    address: '0xB606AaA7E2837D4E6FC1e901Ba74045B29D2EB36',
  },
  stargateToken: {
    address: '0x5C4948d523943090bd3AEbD06227272A6b581691',
  },
  lpStakingTime: [],
  lpStaking: [],
};
