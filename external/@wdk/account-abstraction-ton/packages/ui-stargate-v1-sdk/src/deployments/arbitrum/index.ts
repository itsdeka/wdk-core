import type {SerializedDeployment} from '../../types/zod';

export const arbitrum: SerializedDeployment = {
  eid: 110,
  factory: {
    address: '0x55bDb4164D28FBaF0898e0eF14a589ac09Ac9970',
  },
  bridge: {
    address: '0x352d8275AAE3e0c2404d9f68f6cEE084B5bEB3DD',
  },
  router: {
    address: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
  },
  routerEth: {
    address: '0xbf22f0f184bCcbeA268dF387a49fF5238dD23E40',
  },
  widgetSwap: {
    address: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  },
  poolView: {
    address: '0x6A5294C72F9D82e6A1d79B73c006E3088F9916C9',
  },
  stargateToken: {
    address: '0x6694340fc020c5E6B96567843da2df01b2CE1eb6',
  },
  stargatePreCrime: {
    address: '0x6A5294C72F9D82e6A1d79B73c006E3088F9916C9',
  },
  lpStakingTime: [
    {
      address: '0x9774558534036Ff2E236331546691b4eB70594b1',
    },
  ],
  lpStaking: [
    {
      address: '0xeA8DfEE1898a7e0a59f7527F076106d7e44c2176',
    },
  ],
};
