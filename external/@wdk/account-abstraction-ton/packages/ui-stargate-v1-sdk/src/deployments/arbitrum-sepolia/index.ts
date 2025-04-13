import type {SerializedDeployment} from '../../types/zod';

export const arbitrumSepolia: SerializedDeployment = {
  eid: 10231,
  factory: {
    address: '0x7eEB77fFD369Da207b34FAcD202698dc733192a5',
  },
  bridge: {
    address: '0x2f4B6e5Ae6728C1832E93DE67141908F8Aa9255B',
  },
  router: {
    address: '0x2a4C2F5ffB0E0F2dcB3f9EBBd442B8F77ECDB9Cc',
  },
  routerEth: {
    address: '0x771A4f8a880b499A40c8fF53c7925798E0f2E594',
  },
  stargateToken: {
    address: '0xBe29C694b4DD547A843B13E62E1409d3bCCd68ca',
  },
  lpStakingTime: [],
  lpStaking: [],
};
