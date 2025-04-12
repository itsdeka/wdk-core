import type {SerializedDeployment} from '../../types/zod';

export const polygon: SerializedDeployment = {
  eid: 109,
  factory: {
    address: '0x808d7c71ad2ba3FA531b068a2417C63106BC0949',
  },
  bridge: {
    address: '0x9d1B1669c73b033DFe47ae5a0164Ab96df25B944',
  },
  router: {
    address: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  },
  widgetSwap: {
    address: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  },
  poolView: {
    address: '0x98325A9d9B05FfBd179362a836201E3856AeDDA2',
  },
  stargateToken: {
    address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
  },
  stargatePreCrime: {
    address: '0x98325A9d9B05FfBd179362a836201E3856AeDDA2',
  },
  lpStakingTime: [],
  lpStaking: [
    {
      address: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
    },
  ],
};
