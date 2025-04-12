import type {SerializedDeployment} from '../../types/zod';

export const metis: SerializedDeployment = {
  eid: 151,
  factory: {
    address: '0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398',
  },
  bridge: {
    address: '0x45f1A95A4D3f3836523F5c83673c797f4d4d263B',
  },
  router: {
    address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
  },
  widgetSwap: {
    address: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  },
  poolView: {
    address: '0x4d97186cD94047E285B7cb78fa63C93E69e7AaD0',
  },
  stargateToken: {
    address: '0xF0Ce6B3268497d637F3e9CbE2c21a1d3C7feC381',
  },
  stargatePreCrime: {
    address: '0x4d97186cD94047E285B7cb78fa63C93E69e7AaD0',
  },
  lpStakingTime: [
    {
      address: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
    },
  ],
  lpStaking: [],
};
