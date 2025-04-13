import type {SerializedDeployment} from '../../types/zod';

export const fantom: SerializedDeployment = {
  eid: 112,
  factory: {
    address: '0x9d1B1669c73b033DFe47ae5a0164Ab96df25B944',
  },
  bridge: {
    address: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  },
  router: {
    address: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
  },
  widgetSwap: {
    address: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  },
  poolView: {
    address: '0x06f021541521Ae6dcfaeED4EC9A8bF800528E805',
  },
  stargateToken: {
    address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
  },
  stargatePreCrime: {
    address: '0x06f021541521Ae6dcfaeED4EC9A8bF800528E805',
  },
  lpStakingTime: [],
  lpStaking: [
    {
      address: '0x224D8Fd7aB6AD4c6eb4611Ce56EF35Dec2277F03',
    },
  ],
};
