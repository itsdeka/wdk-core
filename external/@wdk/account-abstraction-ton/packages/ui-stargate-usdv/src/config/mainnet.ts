import {createUSDVConfig} from '../evm/zod';

export const usdvMainnetConfig = createUSDVConfig({
  deployments: {
    ethereum: {
      eid: 101,
      vault: {
        address: '0x2A30E3C5c9DaF417663Dd3903144B394a82C999b',
      },
      usdv: {
        address: '0x0E573Ce2736Dd9637A0b21058352e1667925C7a8',
      },
      stbt: {
        address: '0x530824DA86689C9C17CdC2871Ff29B058345b44a',
      },
      minterProxy: {
        address: '0x3c6CE18aFDE845635A32a69D0a7721b0Db84118e',
      },
    },
    avalanche: {
      eid: 106,
      usdv: {
        address: '0x323665443CEf804A3b5206103304BD4872EA4253',
      },
      bridgeRecolor: {
        address: '0x292dD933180412923ee47fA73bBF407B6d776B4C',
      },
    },
    arbitrum: {
      eid: 110,
      usdv: {
        address: '0x323665443CEf804A3b5206103304BD4872EA4253',
      },
      bridgeRecolor: {
        address: '0x5CC0189652Ee881526eD3B8053B21c44e99010B9',
      },
    },
    bsc: {
      eid: 102,
      usdv: {
        address: '0x323665443CEf804A3b5206103304BD4872EA4253',
      },
      bridgeRecolor: {
        address: '0x5B1d0467BED2e8Bd67c16cE8bCB22a195ae76870',
      },
    },
    optimism: {
      eid: 111,
      usdv: {
        address: '0x323665443CEf804A3b5206103304BD4872EA4253',
      },
      bridgeRecolor: {
        address: '0x31691Fd2Cf50c777943b213836C342327f0DAB9b',
      },
    },
  },
  stables: [
    // tokens exported from mainnet stargate
    {
      chainKey: 'bsc',
      address: '0x55d398326f99059fF775485246999027B3197955',
      symbol: 'USDT',
      decimals: 18,
      name: 'Tether USD',
    },
    {
      chainKey: 'bsc',
      address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      symbol: 'BUSD',
      decimals: 18,
      name: 'BUSD Token',
    },
    {
      chainKey: 'avalanche',
      address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      symbol: 'USDC',
      decimals: 6,
      name: 'USD Coin',
    },
    {
      chainKey: 'avalanche',
      address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
      symbol: 'USDt',
      decimals: 6,
      name: 'TetherToken',
    },
    // No polygon
    // {
    //   chainKey: chainKey.MUMBAI,
    //   decimals: 6,
    //   symbol: 'USDC',
    //   name: 'USDC',
    //   address: '0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7',
    // },
    // {
    //   chainKey: chainKey.MUMBAI,
    //   decimals: 6,
    //   symbol: 'USDT',
    //   name: 'USDT',
    //   address: '0x6Fc340be8e378c2fF56476409eF48dA9a3B781a0',
    // },
    {
      chainKey: 'ethereum',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      symbol: 'USDC',
      decimals: 6,
      name: 'USD Coin',
    },
    {
      chainKey: 'ethereum',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      symbol: 'USDT',
      decimals: 6,
      name: 'Tether USD',
    },
    {
      chainKey: 'optimism',
      address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      symbol: 'USDC',
      decimals: 6,
      name: 'USD Coin',
    },
    {
      chainKey: 'arbitrum',
      address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      symbol: 'USDC',
      decimals: 6,
      name: 'USD Coin (Arb1)',
    },
    {
      chainKey: 'arbitrum',
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      symbol: 'USDT',
      decimals: 6,
      name: 'Tether USD',
    },
  ],
});
