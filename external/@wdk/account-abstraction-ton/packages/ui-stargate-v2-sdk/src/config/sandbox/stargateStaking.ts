import type {SerializedStargateV2StakingConfig} from '../../types/zod';

export const STARGATE_V2_STAKING_SANDBOX: SerializedStargateV2StakingConfig = {
  deployments: {
    'bsc-sandbox': {
      stargateStaking: {
        address: '0x5868B71c225BE428Ae65e48c7d8Ef9e12AB76766',
      },
      stargateMultiRewarder: {
        address: '0xEe06926a58914FFFb4fcC06989d779b7A8102b89',
      },
    },
    'ethereum-sandbox': {
      stargateStaking: {
        address: '0x43e3f24Dbe80F661269E7708bE1D1E2b7C1eCf3e',
      },
      stargateMultiRewarder: {
        address: '0x016DA422616858B4de4A35fd2e967BFcda627245',
      },
    },
    'polygon-sandbox': {
      stargateStaking: {
        address: '0x5868B71c225BE428Ae65e48c7d8Ef9e12AB76766',
      },
      stargateMultiRewarder: {
        address: '0xEe06926a58914FFFb4fcC06989d779b7A8102b89',
      },
    },
  },
};
