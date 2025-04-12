import type {SerializedDeployment} from '../../types/zod';

export const bsc: SerializedDeployment = {
  eid: 102,
  factory: {
    address: '0xe7Ec689f432f29383f217e36e680B5C855051f25',
  },
  bridge: {
    address: '0x6694340fc020c5E6B96567843da2df01b2CE1eb6',
  },
  router: {
    address: '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8',
  },
  widgetSwap: {
    address: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  },
  poolView: {
    address: '0x43232Ffa28cc59F8E38844257FA2b229dBf3C569',
  },
  stargateToken: {
    address: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
  },
  stargatePreCrime: {
    address: '0x43232Ffa28cc59F8E38844257FA2b229dBf3C569',
  },
  lpStakingTime: [
    {
      address: '0x18E08773daFfF53e84dDF4CEfC10c094f33671F4',
    },
    {
      address: '0x447f2078a1b6b2C1190B7b7aF98ef4B139d41F70',
    },
  ],
  lpStaking: [
    {
      address: '0x3052A0F6ab15b4AE1df39962d5DdEFacA86DaB47',
    },
  ],
};
