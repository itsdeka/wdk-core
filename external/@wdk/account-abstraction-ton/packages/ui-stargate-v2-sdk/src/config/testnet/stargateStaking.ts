import type {SerializedStargateV2StakingConfig} from '../../types/zod';

export const STARGATE_V2_STAKING_TESTNET: SerializedStargateV2StakingConfig = {
  deployments: {
    'arbitrum-sepolia': {
      stargateStaking: {
        address: '0xB15a3F6E64D2CaffAF7927431AB0D1c21e429644',
      },
      stargateMultiRewarder: {
        address: '0xc9c7A3Ae8F1059867247a009b32Ad7AAD9a52D1c',
      },
    },
    'bsc-testnet': {
      stargateStaking: {
        address: '0x3A7f2580675CEEd079b433C3c00EA997A31fB686',
      },
      stargateMultiRewarder: {
        address: '0x55584d5F0E466a5f57d5149647c15c2E99493E74',
      },
    },
    'optimism-sepolia': {
      stargateStaking: {
        address: '0xf375a930168b5890407B200336c6a76b2F3243c8',
      },
      stargateMultiRewarder: {
        address: '0xa4e97dFd56E0E30A2542d666Ef04ACC102310083',
      },
    },
    sepolia: {
      stargateStaking: {
        address: '0xF39a1dC4018a8106b21547C84133Ea122FE2b1DB',
      },
      stargateMultiRewarder: {
        address: '0x94986cd528d7e17870263dB8FF0fF33e8B1363FD',
      },
    },
  },
};
