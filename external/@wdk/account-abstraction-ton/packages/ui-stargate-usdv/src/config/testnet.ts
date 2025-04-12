import {createUSDVConfig} from '../evm/zod';

export const usdvTestnetConfig = createUSDVConfig({
  deployments: {
    goerli: {
      eid: 10101,
      vault: {
        address: '0x1239bD980fAa9CF687458A630514301c36e27E36',
      },
      usdv: {
        address: '0x0516ABcF93c00aAf9120Cf5d18535506d54BCcbA',
      },
      minterProxy: {
        address: '0xEfBCdE3Db0C63B06e349E9069d4761BDE45120D1',
      },
      stbt: {
        address: '0x33683A382495De6763FCD7505d0E07d7d2A879ca',
      },
    },
    'bsc-testnet': {
      eid: 10102,
      usdv: {
        address: '0xf10be20E035c00e9f9448d1Edb7770E3e1187965',
      },
      bridgeRecolor: {
        address: '0xdD440557cE9ad70C14495755F3E97dDE7096C796',
      },
    },
    fuji: {
      eid: 10106,
      usdv: {
        address: '0xf10be20E035c00e9f9448d1Edb7770E3e1187965',
      },
      bridgeRecolor: {
        address: '0x34Cf53353BA3d24ADBc17083ccC1CB6B5bFaa2D7',
      },
    },
    'arbitrum-goerli': {
      eid: 10143,
      usdv: {
        address: '0xf10be20E035c00e9f9448d1Edb7770E3e1187965',
      },
      bridgeRecolor: {
        address: '0xf630640Cfdb98Bb10C1a0b77Fa5Ec09c5800697C',
      },
    },
    'optimism-goerli': {
      eid: 10132,
      usdv: {
        address: '0xf10be20E035c00e9f9448d1Edb7770E3e1187965',
      },
      bridgeRecolor: {
        address: '0x59d5B1697B7883F4F4acC0c5F41AD4E15636d09E',
      },
    },
    mumbai: {
      eid: 10109,
      usdv: {
        address: '0xf10be20E035c00e9f9448d1Edb7770E3e1187965',
      },
    },
  },
  stables: [
    // tokens exported from testnet stargate
    {
      chainKey: 'bsc-testnet',
      decimals: 18,
      symbol: 'USDT',
      name: 'USDT',
      address: '0xF49E250aEB5abDf660d643583AdFd0be41464EfD',
    },
    {
      chainKey: 'bsc-testnet',
      decimals: 18,
      symbol: 'BUSD',
      name: 'BUSD',
      address: '0x1010Bb1b9Dff29e6233E7947e045e0ba58f6E92e',
    },
    {
      chainKey: 'fuji',
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      address: '0x4A0D1092E9df255cf95D72834Ea9255132782318',
    },
    {
      chainKey: 'fuji',
      decimals: 6,
      symbol: 'USDT',
      name: 'USDT',
      address: '0x134Dc38AE8C853D1aa2103d5047591acDAA16682',
    },
    {
      chainKey: 'mumbai',
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      address: '0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7',
    },
    {
      chainKey: 'mumbai',
      decimals: 6,
      symbol: 'USDT',
      name: 'USDT',
      address: '0x6Fc340be8e378c2fF56476409eF48dA9a3B781a0',
    },
    {
      chainKey: 'goerli',
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      address: '0xDf0360Ad8C5ccf25095Aa97ee5F2785c8d848620',
    },
    {
      chainKey: 'goerli',
      decimals: 6,
      symbol: 'USDT',
      name: 'USDT',
      address: '0x5BCc22abEC37337630C0E0dd41D64fd86CaeE951',
    },
    {
      chainKey: 'optimism-goerli',
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      address: '0x0CEDBAF2D0bFF895C861c5422544090EEdC653Bf',
    },
    {
      chainKey: 'arbitrum-goerli',
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      address: '0x6aAd876244E7A1Ad44Ec4824Ce813729E5B6C291',
    },
    {
      chainKey: 'arbitrum-goerli',
      decimals: 6,
      symbol: 'USDT',
      name: 'USDT',
      address: '0x533046F316590C19d99c74eE661c6d541b64471C',
    },
  ],
});
