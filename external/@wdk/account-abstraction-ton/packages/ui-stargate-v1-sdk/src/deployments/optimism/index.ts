import type {SerializedDeployment} from '../../types/zod';

export const optimism: SerializedDeployment = {
  eid: 111,
  factory: {
    address: '0xE3B53AF74a4BF62Ae5511055290838050bf764Df',
  },
  bridge: {
    address: '0x701a95707A0290AC8B90b3719e8EE5b210360883',
  },
  router: {
    address: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
  },
  routerEth: {
    address: '0xB49c4e680174E331CB0A7fF3Ab58afC9738d5F8b',
  },
  widgetSwap: {
    address: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  },
  poolView: {
    address: '0x7dBC599313a14bf5e6198348e95e39597F8210F9',
  },
  stargateToken: {
    address: '0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97',
  },
  stargatePreCrime: {
    address: '0x7dBC599313a14bf5e6198348e95e39597F8210F9',
  },
  lpStakingTime: [
    {
      address: '0x4DeA9e918c6289a52cd469cAC652727B7b412Cd2',
    },
  ],
  lpStaking: [
    {
      address: '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8',
    },
  ],
};
