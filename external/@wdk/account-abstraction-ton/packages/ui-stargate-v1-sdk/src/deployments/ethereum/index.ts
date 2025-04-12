import type {SerializedDeployment} from '../../types/zod';

export const ethereum: SerializedDeployment = {
  eid: 101,
  factory: {
    address: '0x06D538690AF257Da524f25D0CD52fD85b1c2173E',
  },
  bridge: {
    address: '0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97',
  },
  router: {
    address: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
  },
  routerEth: {
    address: '0x150f94B44927F078737562f0fcF3C95c01Cc2376',
  },
  widgetSwap: {
    address: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  },
  poolView: {
    address: '0xe409af258A87545b754B7f1BE423f0f65f3355D6',
  },
  stargateToken: {
    address: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
  },
  stargatePreCrime: {
    address: '0xe409af258A87545b754B7f1BE423f0f65f3355D6',
  },
  lpStakingTime: [
    {
      address: '0x1c3000b8f475A958b87c73a5cc5780Ab763122FC',
    },
  ],
  lpStaking: [
    {
      address: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
    },
  ],
};
