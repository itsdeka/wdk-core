import {createAptosBridgeConfig} from '../types/zod';

export const mainnet = createAptosBridgeConfig({
  deployments: {
    ethereum: {
      eid: 101,
      bridge: {
        address: '0x50002CdFe7CCb0C41F519c6Eb0653158d11cd907',
      },
    },
    arbitrum: {
      eid: 110,
      bridge: {address: '0x1BAcC2205312534375c8d1801C27D28370656cFf'},
    },
    avalanche: {
      eid: 106,
      bridge: {address: '0xA5972EeE0C9B5bBb89a5B16D1d65f94c9EF25166'},
    },
    bsc: {
      eid: 102,
      bridge: {address: '0x2762409Baa1804D94D8c0bCFF8400B78Bf915D5B'},
    },
    optimism: {
      eid: 111,
      bridge: {address: '0x86Bb63148d17d445Ed5398ef26Aa05Bf76dD5b59'},
    },
    polygon: {
      eid: 109,
      bridge: {address: '0x488863D609F3A673875a914fBeE7508a1DE45eC6'},
    },
    aptos: {
      eid: 108,
      bridge: {
        address: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa',
      },
    },
  },
  tokens: {
    WETH: [
      {
        chainKey: 'ethereum',
        decimals: 18,
        symbol: 'ETH',
        name: 'ETH',
      },
      {
        chainKey: 'optimism',
        decimals: 18,
        symbol: 'ETH',
        name: 'ETH',
      },
      {
        chainKey: 'arbitrum',
        decimals: 18,
        symbol: 'ETH',
        name: 'ETH',
      },
      {
        chainKey: 'ethereum',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      },
      {
        chainKey: 'arbitrum',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
        address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      },
      {
        chainKey: 'optimism',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
        address: '0x4200000000000000000000000000000000000006',
      },
      {
        chainKey: 'aptos',
        decimals: 6,
        symbol: 'WETH',
        name: 'Wrapped Ether',
        address: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH',
      },
    ],
    USDC: [
      {
        chainKey: 'ethereum',
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      },
      {
        chainKey: 'avalanche',
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      },
      {
        chainKey: 'polygon',
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      },
      {
        chainKey: 'arbitrum',
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      },
      {
        chainKey: 'optimism',
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      },
      {
        chainKey: 'bsc',
        decimals: 18,
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      },
      {
        chainKey: 'aptos',
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC',
      },
    ],
    USDT: [
      {
        chainKey: 'ethereum',
        decimals: 6,
        symbol: 'USDT',
        name: 'USD Tether',
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      },
      {
        chainKey: 'bsc',
        decimals: 18,
        symbol: 'USDT',
        name: 'USD Tether',
        address: '0x55d398326f99059fF775485246999027B3197955',
      },
      {
        chainKey: 'avalanche',
        decimals: 6,
        symbol: 'USDT',
        name: 'USD Tether',
        address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
      },
      {
        chainKey: 'polygon',
        decimals: 6,
        symbol: 'USDT',
        name: 'USD Tether',
        address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      },
      {
        chainKey: 'aptos',
        decimals: 6,
        symbol: 'USDT',
        name: 'USD Tether',
        address: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT',
      },
    ],
    USDD: [
      {
        chainKey: 'ethereum',
        decimals: 18,
        symbol: 'USDD',
        name: 'Decentralized USD',
        address: '0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6',
      },
      {
        chainKey: 'bsc',
        decimals: 18,
        symbol: 'USDD',
        name: 'Decentralized USD',
        address: '0xd17479997F34dd9156Deef8F95A52D81D265be9c',
      },
      {
        chainKey: 'aptos',
        decimals: 6,
        symbol: 'USDD',
        name: 'Decentralized USD',
        address: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDD',
      },
    ],
    WBTC: [
      {
        chainKey: 'ethereum',
        decimals: 8,
        symbol: 'WBTC',
        name: 'Wrapped BTC',
        address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      },
      {
        chainKey: 'aptos',
        decimals: 6,
        symbol: 'WBTC',
        name: 'Wrapped BTC',
        address: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WBTC',
      },
    ],
  },
});

const CoinType = {
  APTOS: 'AptosCoin',
  USDC: 'USDC',
  BUSD: 'BUSD',
  WBTC: 'WBTC',
  USDT: 'USDT',
  USDD: 'USDD',
  WETH: 'WETH',
} as const;
