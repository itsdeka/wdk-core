import type {SerializedDeployment} from '../../types/zod';

export const kava: SerializedDeployment = {
  eid: 177,
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
    address: '0x808d7c71ad2ba3FA531b068a2417C63106BC0949',
  },
  stargateToken: {
    address: '0x83c30eb8bc9ad7C56532895840039E62659896ea',
  },
  stargatePreCrime: {
    address: '0x808d7c71ad2ba3FA531b068a2417C63106BC0949',
  },
  lpStakingTime: [
    {
      address: '0x35F78Adf283Fe87732AbC9747d9f6630dF33276C',
    },
  ],
  lpStaking: [],
};
