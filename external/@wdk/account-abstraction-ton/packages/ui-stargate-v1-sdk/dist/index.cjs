'use strict';

var chunkSUKWACGY_cjs = require('./chunk-SUKWACGY.cjs');
var z = require('zod');
var uiCore = require('@layerzerolabs/ui-core');
var v1 = require('@layerzerolabs/ui-bridge-sdk/v1');
var uiEvm = require('@layerzerolabs/ui-evm');
var ethers = require('ethers');
var pMemoize = require('p-memoize');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var z__default = /*#__PURE__*/_interopDefault(z);
var pMemoize__default = /*#__PURE__*/_interopDefault(pMemoize);

// src/deployments/arbitrum/index.ts
var arbitrum = {
  eid: 110,
  factory: {
    address: "0x55bDb4164D28FBaF0898e0eF14a589ac09Ac9970"
  },
  bridge: {
    address: "0x352d8275AAE3e0c2404d9f68f6cEE084B5bEB3DD"
  },
  router: {
    address: "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614"
  },
  routerEth: {
    address: "0xbf22f0f184bCcbeA268dF387a49fF5238dD23E40"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0x6A5294C72F9D82e6A1d79B73c006E3088F9916C9"
  },
  stargateToken: {
    address: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6"
  },
  stargatePreCrime: {
    address: "0x6A5294C72F9D82e6A1d79B73c006E3088F9916C9"
  },
  lpStakingTime: [
    {
      address: "0x9774558534036Ff2E236331546691b4eB70594b1"
    }
  ],
  lpStaking: [
    {
      address: "0xeA8DfEE1898a7e0a59f7527F076106d7e44c2176"
    }
  ]
};

// src/deployments/avalanche/index.ts
var avalanche = {
  eid: 106,
  factory: {
    address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949"
  },
  bridge: {
    address: "0x9d1B1669c73b033DFe47ae5a0164Ab96df25B944"
  },
  router: {
    address: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0xc53621C396F6cdab951aCF0b7880318c110d25d1"
  },
  stargateToken: {
    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
  },
  stargatePreCrime: {
    address: "0xc53621C396F6cdab951aCF0b7880318c110d25d1"
  },
  lpStakingTime: [],
  lpStaking: [
    {
      address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
    }
  ]
};

// src/deployments/base/index.ts
var base = {
  eid: 184,
  factory: {
    address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"
  },
  bridge: {
    address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398"
  },
  router: {
    address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B"
  },
  routerEth: {
    address: "0x50B6EbC2103BFEc165949CC946d739d5650d7ae4"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"
  },
  stargateToken: {
    address: "0xE3B53AF74a4BF62Ae5511055290838050bf764Df"
  },
  stargatePreCrime: {
    address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"
  },
  lpStakingTime: [
    {
      address: "0x06Eb48763f117c7Be887296CDcdfad2E4092739C"
    }
  ],
  lpStaking: []
};

// src/deployments/bsc/index.ts
var bsc = {
  eid: 102,
  factory: {
    address: "0xe7Ec689f432f29383f217e36e680B5C855051f25"
  },
  bridge: {
    address: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6"
  },
  router: {
    address: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0x43232Ffa28cc59F8E38844257FA2b229dBf3C569"
  },
  stargateToken: {
    address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"
  },
  stargatePreCrime: {
    address: "0x43232Ffa28cc59F8E38844257FA2b229dBf3C569"
  },
  lpStakingTime: [
    {
      address: "0x18E08773daFfF53e84dDF4CEfC10c094f33671F4"
    },
    {
      address: "0x447f2078a1b6b2C1190B7b7aF98ef4B139d41F70"
    }
  ],
  lpStaking: [
    {
      address: "0x3052A0F6ab15b4AE1df39962d5DdEFacA86DaB47"
    }
  ]
};

// src/deployments/ethereum/index.ts
var ethereum = {
  eid: 101,
  factory: {
    address: "0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
  },
  bridge: {
    address: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
  },
  router: {
    address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
  },
  routerEth: {
    address: "0x150f94B44927F078737562f0fcF3C95c01Cc2376"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0xe409af258A87545b754B7f1BE423f0f65f3355D6"
  },
  stargateToken: {
    address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"
  },
  stargatePreCrime: {
    address: "0xe409af258A87545b754B7f1BE423f0f65f3355D6"
  },
  lpStakingTime: [
    {
      address: "0x1c3000b8f475A958b87c73a5cc5780Ab763122FC"
    }
  ],
  lpStaking: [
    {
      address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"
    }
  ]
};

// src/deployments/fantom/index.ts
var fantom = {
  eid: 112,
  factory: {
    address: "0x9d1B1669c73b033DFe47ae5a0164Ab96df25B944"
  },
  bridge: {
    address: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd"
  },
  router: {
    address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0x06f021541521Ae6dcfaeED4EC9A8bF800528E805"
  },
  stargateToken: {
    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
  },
  stargatePreCrime: {
    address: "0x06f021541521Ae6dcfaeED4EC9A8bF800528E805"
  },
  lpStakingTime: [],
  lpStaking: [
    {
      address: "0x224D8Fd7aB6AD4c6eb4611Ce56EF35Dec2277F03"
    }
  ]
};

// src/deployments/kava/index.ts
var kava = {
  eid: 177,
  factory: {
    address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398"
  },
  bridge: {
    address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B"
  },
  router: {
    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949"
  },
  stargateToken: {
    address: "0x83c30eb8bc9ad7C56532895840039E62659896ea"
  },
  stargatePreCrime: {
    address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949"
  },
  lpStakingTime: [
    {
      address: "0x35F78Adf283Fe87732AbC9747d9f6630dF33276C"
    }
  ],
  lpStaking: []
};

// src/deployments/linea/index.ts
var linea = {
  eid: 183,
  factory: {
    address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398"
  },
  bridge: {
    address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B"
  },
  router: {
    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
  },
  routerEth: {
    address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
  },
  stargateToken: {
    address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949"
  },
  stargatePreCrime: {
    address: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
  },
  lpStakingTime: [
    {
      address: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8"
    }
  ],
  lpStaking: []
};

// src/deployments/mantle/index.ts
var mantle = {
  eid: 181,
  factory: {
    address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398"
  },
  bridge: {
    address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B"
  },
  router: {
    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
  },
  widgetSwap: {
    address: "0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
  },
  poolView: {
    address: "0x693604E757AC7e2c4A8263594A18d69c35562341"
  },
  stargateToken: {
    address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
  },
  stargatePreCrime: {
    address: "0x693604E757AC7e2c4A8263594A18d69c35562341"
  },
  lpStakingTime: [
    {
      address: "0x352d8275AAE3e0c2404d9f68f6cEE084B5bEB3DD"
    }
  ],
  lpStaking: []
};

// src/deployments/metis/index.ts
var metis = {
  eid: 151,
  factory: {
    address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398"
  },
  bridge: {
    address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B"
  },
  router: {
    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0x4d97186cD94047E285B7cb78fa63C93E69e7AaD0"
  },
  stargateToken: {
    address: "0xF0Ce6B3268497d637F3e9CbE2c21a1d3C7feC381"
  },
  stargatePreCrime: {
    address: "0x4d97186cD94047E285B7cb78fa63C93E69e7AaD0"
  },
  lpStakingTime: [
    {
      address: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd"
    }
  ],
  lpStaking: []
};

// src/deployments/optimism/index.ts
var optimism = {
  eid: 111,
  factory: {
    address: "0xE3B53AF74a4BF62Ae5511055290838050bf764Df"
  },
  bridge: {
    address: "0x701a95707A0290AC8B90b3719e8EE5b210360883"
  },
  router: {
    address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"
  },
  routerEth: {
    address: "0xB49c4e680174E331CB0A7fF3Ab58afC9738d5F8b"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0x7dBC599313a14bf5e6198348e95e39597F8210F9"
  },
  stargateToken: {
    address: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
  },
  stargatePreCrime: {
    address: "0x7dBC599313a14bf5e6198348e95e39597F8210F9"
  },
  lpStakingTime: [
    {
      address: "0x4DeA9e918c6289a52cd469cAC652727B7b412Cd2"
    }
  ],
  lpStaking: [
    {
      address: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8"
    }
  ]
};

// src/deployments/polygon/index.ts
var polygon = {
  eid: 109,
  factory: {
    address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949"
  },
  bridge: {
    address: "0x9d1B1669c73b033DFe47ae5a0164Ab96df25B944"
  },
  router: {
    address: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd"
  },
  widgetSwap: {
    address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc"
  },
  poolView: {
    address: "0x98325A9d9B05FfBd179362a836201E3856AeDDA2"
  },
  stargateToken: {
    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
  },
  stargatePreCrime: {
    address: "0x98325A9d9B05FfBd179362a836201E3856AeDDA2"
  },
  lpStakingTime: [],
  lpStaking: [
    {
      address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
    }
  ]
};

// src/deployments/scroll/index.ts
var scroll = {
  eid: 214,
  factory: {
    address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398"
  },
  bridge: {
    address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B"
  },
  router: {
    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
  },
  routerEth: {
    address: "0x224D8Fd7aB6AD4c6eb4611Ce56EF35Dec2277F03"
  },
  widgetSwap: {
    address: "0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
  },
  poolView: {
    address: "0x693604E757AC7e2c4A8263594A18d69c35562341"
  },
  stargateToken: {
    address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
  },
  stargatePreCrime: {
    address: "0x693604E757AC7e2c4A8263594A18d69c35562341"
  },
  lpStakingTime: [
    {
      address: "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614"
    }
  ],
  lpStaking: []
};

// src/config/mainnet/pools.json
var pools_default = [
  {
    disabled: false,
    poolId: 1,
    chainKey: "arbitrum",
    token: {
      chainKey: "arbitrum",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin (Arb1)",
      address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"
    },
    stargateVersion: "v1",
    address: "0x892785f33CdeE22A30AEF750F285E18c18040c3e",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "arbitrum",
    token: {
      chainKey: "arbitrum",
      decimals: 6,
      symbol: "USDT",
      name: "Tether USD",
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
    },
    stargateVersion: "v1",
    address: "0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: false,
    poolId: 13,
    chainKey: "arbitrum",
    token: {
      chainKey: "arbitrum",
      decimals: 18,
      symbol: "ETH",
      name: "ETH"
    },
    stargateVersion: "v1",
    address: "0x915A55e36A01285A14f05dE6e81ED9cE89772f8e",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  },
  {
    disabled: false,
    poolId: 7,
    chainKey: "arbitrum",
    token: {
      chainKey: "arbitrum",
      decimals: 18,
      symbol: "FRAX",
      name: "Frax",
      address: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F"
    },
    stargateVersion: "v1",
    address: "0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*FRAX"
  },
  {
    disabled: true,
    poolId: 16,
    chainKey: "arbitrum",
    token: {
      chainKey: "arbitrum",
      decimals: 18,
      symbol: "MAI",
      name: "Mai Stablecoin",
      address: "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d"
    },
    stargateVersion: "v1",
    address: "0xF39B7Be294cB36dE8c510e267B82bb588705d977",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*MAI"
  },
  {
    disabled: false,
    poolId: 15,
    chainKey: "arbitrum",
    token: {
      chainKey: "arbitrum",
      decimals: 18,
      symbol: "LUSD",
      name: "LUSD Stablecoin",
      address: "0x93b346b6BC2548dA6A1E7d98E9a421B42541425b"
    },
    stargateVersion: "v1",
    address: "0x600E576F9d853c95d58029093A16EE49646F3ca5",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*LUSD"
  },
  {
    disabled: false,
    poolId: 20,
    chainKey: "arbitrum",
    token: {
      chainKey: "arbitrum",
      decimals: 18,
      symbol: "WOO",
      name: "Wootrade Network",
      address: "0xcAFcD85D8ca7Ad1e1C6F82F651fA15E33AEfD07b"
    },
    stargateVersion: "v1",
    address: "0x1aE7ca4092C0027bBbB1ce99934528aCf6e7074B",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*WOO"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "avalanche",
    token: {
      chainKey: "avalanche",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
    },
    stargateVersion: "v1",
    address: "0x1205f31718499dBf1fCa446663B532Ef87481fe1",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "avalanche",
    token: {
      chainKey: "avalanche",
      decimals: 6,
      symbol: "USDt",
      name: "TetherToken",
      address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"
    },
    stargateVersion: "v1",
    address: "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDt"
  },
  {
    disabled: false,
    poolId: 7,
    chainKey: "avalanche",
    token: {
      chainKey: "avalanche",
      decimals: 18,
      symbol: "FRAX",
      name: "Frax",
      address: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64"
    },
    stargateVersion: "v1",
    address: "0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*FRAX"
  },
  {
    disabled: true,
    poolId: 16,
    chainKey: "avalanche",
    token: {
      chainKey: "avalanche",
      decimals: 18,
      symbol: "MAI",
      name: "Mai Stablecoin",
      address: "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b"
    },
    stargateVersion: "v1",
    address: "0x8736f92646B2542B3e5F3c63590cA7Fe313e283B",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*MAI"
  },
  {
    disabled: false,
    poolId: 19,
    chainKey: "avalanche",
    token: {
      chainKey: "avalanche",
      decimals: 6,
      symbol: "USDt",
      name: "TetherToken",
      address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"
    },
    stargateVersion: "v1",
    address: "0xEAe5c2F6B25933deB62f754f239111413A0A25ef",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDt"
  },
  {
    disabled: false,
    poolId: 20,
    chainKey: "avalanche",
    token: {
      chainKey: "avalanche",
      decimals: 18,
      symbol: "WOO.e",
      name: "Wootrade Network",
      address: "0xaBC9547B534519fF73921b1FBA6E672b5f58D083"
    },
    stargateVersion: "v1",
    address: "0x45524dc9d05269E1101Ad7Cff1639AE2aA20989d",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*WOO.e"
  },
  {
    disabled: false,
    poolId: 13,
    chainKey: "base",
    token: {
      chainKey: "base",
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    },
    stargateVersion: "v1",
    address: "0x28fc411f9e1c480AD312b3d9C60c22b965015c6B",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "base",
    token: {
      chainKey: "base",
      decimals: 6,
      symbol: "USDbC",
      name: "USD Base Coin",
      address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA"
    },
    stargateVersion: "v1",
    address: "0x4c80E24119CFB836cdF0a6b53dc23F04F7e652CA",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDbC"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "bsc",
    token: {
      chainKey: "bsc",
      decimals: 18,
      symbol: "USDT",
      name: "Tether USD",
      address: "0x55d398326f99059fF775485246999027B3197955"
    },
    stargateVersion: "v1",
    address: "0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: false,
    poolId: 5,
    chainKey: "bsc",
    token: {
      chainKey: "bsc",
      decimals: 18,
      symbol: "BUSD",
      name: "BUSD Token",
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
    },
    stargateVersion: "v1",
    address: "0x98a5737749490856b401DB5Dc27F522fC314A4e1",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*BUSD"
  },
  {
    disabled: false,
    poolId: 11,
    chainKey: "bsc",
    token: {
      chainKey: "bsc",
      decimals: 18,
      symbol: "USDD",
      name: "Decentralized USD",
      address: "0xd17479997F34dd9156Deef8F95A52D81D265be9c"
    },
    stargateVersion: "v1",
    address: "0x4e145a589e4c03cBe3d28520e4BF3089834289Df",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*USDD"
  },
  {
    disabled: true,
    poolId: 16,
    chainKey: "bsc",
    token: {
      chainKey: "bsc",
      decimals: 18,
      symbol: "MAI",
      name: "Mai Stablecoin",
      address: "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d"
    },
    stargateVersion: "v1",
    address: "0x7BfD7f2498C4796f10b6C611D9db393D3052510C",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*MAI"
  },
  {
    disabled: true,
    poolId: 17,
    chainKey: "bsc",
    token: {
      chainKey: "bsc",
      decimals: 18,
      symbol: "Metis",
      name: "Metis Token",
      address: "0xe552Fb52a4F19e44ef5A967632DBc320B0820639"
    },
    stargateVersion: "v1",
    address: "0xD4CEc732b3B135eC52a3c0bc8Ce4b8cFb9dacE46",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*Metis"
  },
  {
    disabled: false,
    poolId: 19,
    chainKey: "bsc",
    token: {
      chainKey: "bsc",
      decimals: 18,
      symbol: "USDT",
      name: "Tether USD",
      address: "0x55d398326f99059fF775485246999027B3197955"
    },
    stargateVersion: "v1",
    address: "0x68C6c27fB0e02285829e69240BE16f32C5f8bEFe",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: false,
    poolId: 20,
    chainKey: "bsc",
    token: {
      chainKey: "bsc",
      decimals: 18,
      symbol: "WOO",
      name: "Wootrade Network",
      address: "0x4691937a7508860F876c9c0a2a617E7d9E945D4B"
    },
    stargateVersion: "v1",
    address: "0x5a0F550bfCaDe1D898034D57A6f72E7Aef32CE79",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*WOO"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    stargateVersion: "v1",
    address: "0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 6,
      symbol: "USDT",
      name: "Tether USD",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    stargateVersion: "v1",
    address: "0x38EA452219524Bb87e18dE1C24D3bB59510BD783",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: false,
    poolId: 11,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "USDD",
      name: "Decentralized USD",
      address: "0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6"
    },
    stargateVersion: "v1",
    address: "0x692953e758c3669290cb1677180c64183cEe374e",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*USDD"
  },
  {
    disabled: false,
    poolId: 13,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "ETH",
      name: "ETH"
    },
    stargateVersion: "v1",
    address: "0x101816545F6bd2b1076434B54383a1E633390A2E",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  },
  {
    disabled: false,
    poolId: 3,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "DAI",
      name: "Dai Stablecoin",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
    },
    stargateVersion: "v1",
    address: "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*DAI"
  },
  {
    disabled: false,
    poolId: 7,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "FRAX",
      name: "Frax",
      address: "0x853d955aCEf822Db058eb8505911ED77F175b99e"
    },
    stargateVersion: "v1",
    address: "0xfA0F307783AC21C39E939ACFF795e27b650F6e68",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*FRAX"
  },
  {
    disabled: false,
    poolId: 14,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "sUSD",
      name: "Synth sUSD",
      address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"
    },
    stargateVersion: "v1",
    address: "0x590d4f8A68583639f215f675F3a259Ed84790580",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*sUSD"
  },
  {
    disabled: false,
    poolId: 15,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "LUSD",
      name: "LUSD Stablecoin",
      address: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"
    },
    stargateVersion: "v1",
    address: "0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*LUSD"
  },
  {
    disabled: true,
    poolId: 16,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "MAI",
      name: "Mai Stablecoin",
      address: "0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6"
    },
    stargateVersion: "v1",
    address: "0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*MAI"
  },
  {
    disabled: false,
    poolId: 17,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "Metis",
      name: "Metis Token",
      address: "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e"
    },
    stargateVersion: "v1",
    address: "0xd8772edBF88bBa2667ed011542343b0eDDaCDa47",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*Metis"
  },
  {
    disabled: false,
    poolId: 19,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 6,
      symbol: "USDT",
      name: "Tether USD",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    stargateVersion: "v1",
    address: "0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: false,
    poolId: 20,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "WOO",
      name: "Wootrade Network",
      address: "0x4691937a7508860F876c9c0a2a617E7d9E945D4B"
    },
    stargateVersion: "v1",
    address: "0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*WOO"
  },
  {
    disabled: false,
    poolId: 22,
    chainKey: "ethereum",
    token: {
      chainKey: "ethereum",
      decimals: 18,
      symbol: "mETH",
      name: "mETH",
      address: "0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa"
    },
    stargateVersion: "v1",
    address: "0xA572d137666DCbAdFA47C3fC41F15e90134C618c",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*mETH"
  },
  {
    disabled: true,
    poolId: 1,
    chainKey: "fantom",
    token: {
      chainKey: "fantom",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"
    },
    stargateVersion: "v1",
    address: "0x12edeA9cd262006cC3C4E77c90d2CD2DD4b1eb97",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: true,
    poolId: 20,
    chainKey: "fantom",
    token: {
      chainKey: "fantom",
      decimals: 18,
      symbol: "WOO",
      name: "Wootrade Network",
      address: "0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a"
    },
    stargateVersion: "v1",
    address: "0x333b6E02eFFD8bE6075F3de0D8075FeD842dd9a3",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*WOO"
  },
  {
    disabled: false,
    poolId: 21,
    chainKey: "fantom",
    token: {
      chainKey: "fantom",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
      address: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf"
    },
    stargateVersion: "v1",
    address: "0xc647CE76ec30033Aa319d472Ae9f4462068f2AD7",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "kava",
    token: {
      chainKey: "kava",
      decimals: 6,
      symbol: "USDt",
      name: "TetherUSDt",
      address: "0x919C1c267BC06a7039e03fcc2eF738525769109c"
    },
    stargateVersion: "v1",
    address: "0xAad094F6A75A14417d39f04E690fC216f080A41a",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDt"
  },
  {
    disabled: false,
    poolId: 13,
    chainKey: "linea",
    token: {
      chainKey: "linea",
      decimals: 18,
      symbol: "ETH",
      name: "Linea Ether"
    },
    stargateVersion: "v1",
    address: "0xAad094F6A75A14417d39f04E690fC216f080A41a",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "mantle",
    token: {
      chainKey: "mantle",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
      address: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9"
    },
    stargateVersion: "v1",
    address: "0xAad094F6A75A14417d39f04E690fC216f080A41a",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "mantle",
    token: {
      chainKey: "mantle",
      decimals: 6,
      symbol: "USDT",
      name: "Tether USD",
      address: "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE"
    },
    stargateVersion: "v1",
    address: "0x2b60473a7C41Deb80EDdaafD5560e963440eb632",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: false,
    poolId: 22,
    chainKey: "mantle",
    token: {
      chainKey: "mantle",
      decimals: 18,
      symbol: "mETH",
      name: "mETH",
      address: "0xcDA86A272531e8640cD7F1a92c01839911B90bb0"
    },
    stargateVersion: "v1",
    address: "0xf52b354FFDB323E0667E87a0136040e3e4D9dF33",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*mETH"
  },
  {
    disabled: false,
    poolId: 17,
    chainKey: "metis",
    token: {
      chainKey: "metis",
      decimals: 18,
      symbol: "Metis",
      name: "Metis Token",
      address: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000"
    },
    stargateVersion: "v1",
    address: "0xAad094F6A75A14417d39f04E690fC216f080A41a",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*Metis"
  },
  {
    disabled: false,
    poolId: 19,
    chainKey: "metis",
    token: {
      chainKey: "metis",
      decimals: 6,
      symbol: "USDT",
      name: "USDT Token",
      address: "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC"
    },
    stargateVersion: "v1",
    address: "0x2b60473a7C41Deb80EDdaafD5560e963440eb632",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: true,
    poolId: 16,
    chainKey: "metis",
    token: {
      chainKey: "metis",
      decimals: 18,
      symbol: "MAI",
      name: "Mai Stablecoin",
      address: "0xdFA46478F9e5EA86d57387849598dbFB2e964b02"
    },
    stargateVersion: "v1",
    address: "0xf52b354FFDB323E0667E87a0136040e3e4D9dF33",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*MAI"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "optimism",
    token: {
      chainKey: "optimism",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
      address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
    },
    stargateVersion: "v1",
    address: "0xDecC0c09c3B5f6e92EF4184125D5648a66E35298",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 13,
    chainKey: "optimism",
    token: {
      chainKey: "optimism",
      decimals: 18,
      symbol: "ETH",
      name: "ETH"
    },
    stargateVersion: "v1",
    address: "0xd22363e3762cA7339569F3d33EADe20127D5F98C",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  },
  {
    disabled: false,
    poolId: 3,
    chainKey: "optimism",
    token: {
      chainKey: "optimism",
      decimals: 18,
      symbol: "DAI",
      name: "Dai Stablecoin",
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
    },
    stargateVersion: "v1",
    address: "0x165137624F1f692e69659f944BF69DE02874ee27",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*DAI"
  },
  {
    disabled: false,
    poolId: 7,
    chainKey: "optimism",
    token: {
      chainKey: "optimism",
      decimals: 18,
      symbol: "FRAX",
      name: "Frax",
      address: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475"
    },
    stargateVersion: "v1",
    address: "0x368605D9C6243A80903b9e326f1Cddde088B8924",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*FRAX"
  },
  {
    disabled: false,
    poolId: 14,
    chainKey: "optimism",
    token: {
      chainKey: "optimism",
      decimals: 18,
      symbol: "sUSD",
      name: "Synth sUSD",
      address: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"
    },
    stargateVersion: "v1",
    address: "0x2F8bC9081c7FCFeC25b9f41a50d97EaA592058ae",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*sUSD"
  },
  {
    disabled: false,
    poolId: 15,
    chainKey: "optimism",
    token: {
      chainKey: "optimism",
      decimals: 18,
      symbol: "LUSD",
      name: "LUSD Stablecoin",
      address: "0xc40F949F8a4e094D1b49a23ea9241D289B7b2819"
    },
    stargateVersion: "v1",
    address: "0x3533F5e279bDBf550272a199a223dA798D9eff78",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*LUSD"
  },
  {
    disabled: true,
    poolId: 16,
    chainKey: "optimism",
    token: {
      chainKey: "optimism",
      decimals: 18,
      symbol: "MAI",
      name: "Mai Stablecoin",
      address: "0xdFA46478F9e5EA86d57387849598dbFB2e964b02"
    },
    stargateVersion: "v1",
    address: "0x5421FA1A48f9FF81e4580557E86C7C0D24C18036",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*MAI"
  },
  {
    disabled: false,
    poolId: 20,
    chainKey: "optimism",
    token: {
      chainKey: "optimism",
      decimals: 18,
      symbol: "WOO",
      name: "Wootrade Network",
      address: "0x871f2F2ff935FD1eD867842FF2a7bfD051A5E527"
    },
    stargateVersion: "v1",
    address: "0xB0a7e3b4aedB6F103BC43f2603c6e73151c8886b",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*WOO"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "polygon",
    token: {
      chainKey: "polygon",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin (PoS)",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    },
    stargateVersion: "v1",
    address: "0x1205f31718499dBf1fCa446663B532Ef87481fe1",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "polygon",
    token: {
      chainKey: "polygon",
      decimals: 6,
      symbol: "USDT",
      name: "(PoS) Tether USD",
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
    },
    stargateVersion: "v1",
    address: "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: false,
    poolId: 3,
    chainKey: "polygon",
    token: {
      chainKey: "polygon",
      decimals: 18,
      symbol: "DAI",
      name: "(PoS) Dai Stablecoin",
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
    },
    stargateVersion: "v1",
    address: "0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*DAI"
  },
  {
    disabled: true,
    poolId: 16,
    chainKey: "polygon",
    token: {
      chainKey: "polygon",
      decimals: 18,
      symbol: "miMATIC",
      name: "miMATIC",
      address: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
    },
    stargateVersion: "v1",
    address: "0x8736f92646B2542B3e5F3c63590cA7Fe313e283B",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*miMATIC"
  },
  {
    disabled: false,
    poolId: 20,
    chainKey: "polygon",
    token: {
      chainKey: "polygon",
      decimals: 18,
      symbol: "WOO",
      name: "Wootrade Network (PoS)",
      address: "0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603"
    },
    stargateVersion: "v1",
    address: "0xEAe5c2F6B25933deB62f754f239111413A0A25ef",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*WOO"
  },
  {
    disabled: true,
    poolId: 1,
    chainKey: "scroll",
    token: {
      chainKey: "scroll",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
      address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4"
    },
    stargateVersion: "v1",
    address: "0xAad094F6A75A14417d39f04E690fC216f080A41a",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: true,
    poolId: 13,
    chainKey: "scroll",
    token: {
      chainKey: "scroll",
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    },
    stargateVersion: "v1",
    address: "0x2b60473a7C41Deb80EDdaafD5560e963440eb632",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  }
];

// src/config/mainnet/chainPaths.json
var chainPaths_default = [
  {
    srcEid: 110,
    dstEid: 111,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 3510
  },
  {
    srcEid: 110,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1428
  },
  {
    srcEid: 110,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 348
  },
  {
    srcEid: 110,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 5,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 686
  },
  {
    srcEid: 110,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 711
  },
  {
    srcEid: 110,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 993
  },
  {
    srcEid: 110,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 112,
    srcPoolId: 1,
    dstPoolId: 21,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 184,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1024
  },
  {
    srcEid: 110,
    dstEid: 181,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 500
  },
  {
    srcEid: 110,
    dstEid: 111,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 649
  },
  {
    srcEid: 110,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1987
  },
  {
    srcEid: 110,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 5,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 3497
  },
  {
    srcEid: 110,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1227
  },
  {
    srcEid: 110,
    dstEid: 112,
    srcPoolId: 2,
    dstPoolId: 21,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 184,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 177,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 330
  },
  {
    srcEid: 110,
    dstEid: 181,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 400
  },
  {
    srcEid: 110,
    dstEid: 111,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 3225
  },
  {
    srcEid: 110,
    dstEid: 101,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2393
  },
  {
    srcEid: 110,
    dstEid: 184,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1907
  },
  {
    srcEid: 110,
    dstEid: 183,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2473
  },
  {
    srcEid: 110,
    dstEid: 111,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 4868
  },
  {
    srcEid: 110,
    dstEid: 106,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 4632
  },
  {
    srcEid: 110,
    dstEid: 101,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 500
  },
  {
    srcEid: 110,
    dstEid: 102,
    srcPoolId: 16,
    dstPoolId: 16,
    ready: true,
    weight: 100
  },
  {
    srcEid: 110,
    dstEid: 111,
    srcPoolId: 15,
    dstPoolId: 15,
    ready: true,
    weight: 8190
  },
  {
    srcEid: 110,
    dstEid: 101,
    srcPoolId: 15,
    dstPoolId: 15,
    ready: true,
    weight: 1810
  },
  {
    srcEid: 110,
    dstEid: 102,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 110,
    dstEid: 101,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 1e3
  },
  {
    srcEid: 110,
    dstEid: 106,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2500
  },
  {
    srcEid: 110,
    dstEid: 111,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 110,
    dstEid: 109,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2500
  },
  {
    srcEid: 106,
    dstEid: 111,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1494
  },
  {
    srcEid: 106,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 5,
    ready: true,
    weight: 200
  },
  {
    srcEid: 106,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1161
  },
  {
    srcEid: 106,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 200
  },
  {
    srcEid: 106,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 200
  },
  {
    srcEid: 106,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 2497
  },
  {
    srcEid: 106,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 290
  },
  {
    srcEid: 106,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 2787
  },
  {
    srcEid: 106,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 324
  },
  {
    srcEid: 106,
    dstEid: 112,
    srcPoolId: 1,
    dstPoolId: 21,
    ready: true,
    weight: 267
  },
  {
    srcEid: 106,
    dstEid: 184,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 580
  },
  {
    srcEid: 106,
    dstEid: 181,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 580
  },
  {
    srcEid: 106,
    dstEid: 111,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 480
  },
  {
    srcEid: 106,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 5,
    ready: true,
    weight: 250
  },
  {
    srcEid: 106,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 3474
  },
  {
    srcEid: 106,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 250
  },
  {
    srcEid: 106,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 250
  },
  {
    srcEid: 106,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 374
  },
  {
    srcEid: 106,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1463
  },
  {
    srcEid: 106,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 341
  },
  {
    srcEid: 106,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2148
  },
  {
    srcEid: 106,
    dstEid: 112,
    srcPoolId: 2,
    dstPoolId: 21,
    ready: true,
    weight: 250
  },
  {
    srcEid: 106,
    dstEid: 184,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 250
  },
  {
    srcEid: 106,
    dstEid: 177,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 250
  },
  {
    srcEid: 106,
    dstEid: 181,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 374
  },
  {
    srcEid: 106,
    dstEid: 111,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 4820
  },
  {
    srcEid: 106,
    dstEid: 101,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 500
  },
  {
    srcEid: 106,
    dstEid: 110,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 4680
  },
  {
    srcEid: 106,
    dstEid: 109,
    srcPoolId: 16,
    dstPoolId: 16,
    ready: true,
    weight: 100
  },
  {
    srcEid: 106,
    dstEid: 151,
    srcPoolId: 19,
    dstPoolId: 19,
    ready: true,
    weight: 1
  },
  {
    srcEid: 106,
    dstEid: 110,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 106,
    dstEid: 109,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 106,
    dstEid: 102,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 106,
    dstEid: 101,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 106,
    dstEid: 111,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 184,
    dstEid: 111,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 3188
  },
  {
    srcEid: 184,
    dstEid: 110,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 3017
  },
  {
    srcEid: 184,
    dstEid: 101,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 746
  },
  {
    srcEid: 184,
    dstEid: 183,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 3047
  },
  {
    srcEid: 184,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 515
  },
  {
    srcEid: 184,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 416
  },
  {
    srcEid: 184,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 2423
  },
  {
    srcEid: 184,
    dstEid: 111,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 416
  },
  {
    srcEid: 184,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 832
  },
  {
    srcEid: 184,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 416
  },
  {
    srcEid: 184,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 2621
  },
  {
    srcEid: 184,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 839
  },
  {
    srcEid: 184,
    dstEid: 181,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 416
  },
  {
    srcEid: 102,
    dstEid: 111,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 732
  },
  {
    srcEid: 102,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 669
  },
  {
    srcEid: 102,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1474
  },
  {
    srcEid: 102,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 156
  },
  {
    srcEid: 102,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2253
  },
  {
    srcEid: 102,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 492
  },
  {
    srcEid: 102,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1025
  },
  {
    srcEid: 102,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 714
  },
  {
    srcEid: 102,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1832
  },
  {
    srcEid: 102,
    dstEid: 112,
    srcPoolId: 2,
    dstPoolId: 21,
    ready: true,
    weight: 217
  },
  {
    srcEid: 102,
    dstEid: 184,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 292
  },
  {
    srcEid: 102,
    dstEid: 177,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 144
  },
  {
    srcEid: 102,
    dstEid: 181,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 292
  },
  {
    srcEid: 102,
    dstEid: 111,
    srcPoolId: 5,
    dstPoolId: 1,
    ready: true,
    weight: 1510
  },
  {
    srcEid: 102,
    dstEid: 106,
    srcPoolId: 5,
    dstPoolId: 1,
    ready: true,
    weight: 1791
  },
  {
    srcEid: 102,
    dstEid: 106,
    srcPoolId: 5,
    dstPoolId: 2,
    ready: true,
    weight: 605
  },
  {
    srcEid: 102,
    dstEid: 101,
    srcPoolId: 5,
    dstPoolId: 1,
    ready: true,
    weight: 1824
  },
  {
    srcEid: 102,
    dstEid: 101,
    srcPoolId: 5,
    dstPoolId: 2,
    ready: true,
    weight: 425
  },
  {
    srcEid: 102,
    dstEid: 109,
    srcPoolId: 5,
    dstPoolId: 1,
    ready: true,
    weight: 1167
  },
  {
    srcEid: 102,
    dstEid: 109,
    srcPoolId: 5,
    dstPoolId: 2,
    ready: true,
    weight: 618
  },
  {
    srcEid: 102,
    dstEid: 110,
    srcPoolId: 5,
    dstPoolId: 1,
    ready: true,
    weight: 1102
  },
  {
    srcEid: 102,
    dstEid: 110,
    srcPoolId: 5,
    dstPoolId: 2,
    ready: true,
    weight: 955
  },
  {
    srcEid: 102,
    dstEid: 101,
    srcPoolId: 11,
    dstPoolId: 11,
    ready: true,
    weight: 1
  },
  {
    srcEid: 102,
    dstEid: 109,
    srcPoolId: 16,
    dstPoolId: 16,
    ready: true,
    weight: 100
  },
  {
    srcEid: 102,
    dstEid: 101,
    srcPoolId: 17,
    dstPoolId: 17,
    ready: true,
    weight: 1
  },
  {
    srcEid: 102,
    dstEid: 151,
    srcPoolId: 17,
    dstPoolId: 17,
    ready: true,
    weight: 1
  },
  {
    srcEid: 102,
    dstEid: 151,
    srcPoolId: 19,
    dstPoolId: 19,
    ready: true,
    weight: 1
  },
  {
    srcEid: 102,
    dstEid: 110,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 102,
    dstEid: 106,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 102,
    dstEid: 109,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 3e3
  },
  {
    srcEid: 102,
    dstEid: 101,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 1500
  },
  {
    srcEid: 102,
    dstEid: 111,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 1500
  },
  {
    srcEid: 101,
    dstEid: 111,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 2394
  },
  {
    srcEid: 101,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 674
  },
  {
    srcEid: 101,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 108
  },
  {
    srcEid: 101,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 5,
    ready: true,
    weight: 643
  },
  {
    srcEid: 101,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1119
  },
  {
    srcEid: 101,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 932
  },
  {
    srcEid: 101,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 89
  },
  {
    srcEid: 101,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 2953
  },
  {
    srcEid: 101,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 313
  },
  {
    srcEid: 101,
    dstEid: 184,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 775
  },
  {
    srcEid: 101,
    dstEid: 214,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 675
  },
  {
    srcEid: 101,
    dstEid: 181,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 675
  },
  {
    srcEid: 101,
    dstEid: 111,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 127
  },
  {
    srcEid: 101,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 100
  },
  {
    srcEid: 101,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 100
  },
  {
    srcEid: 101,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 5,
    ready: true,
    weight: 325
  },
  {
    srcEid: 101,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 6390
  },
  {
    srcEid: 101,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 100
  },
  {
    srcEid: 101,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 470
  },
  {
    srcEid: 101,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 100
  },
  {
    srcEid: 101,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1917
  },
  {
    srcEid: 101,
    dstEid: 112,
    srcPoolId: 2,
    dstPoolId: 21,
    ready: true,
    weight: 100
  },
  {
    srcEid: 101,
    dstEid: 184,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 704
  },
  {
    srcEid: 101,
    dstEid: 177,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 100
  },
  {
    srcEid: 101,
    dstEid: 181,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 675
  },
  {
    srcEid: 101,
    dstEid: 102,
    srcPoolId: 11,
    dstPoolId: 11,
    ready: true,
    weight: 1
  },
  {
    srcEid: 101,
    dstEid: 111,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2120
  },
  {
    srcEid: 101,
    dstEid: 110,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 4192
  },
  {
    srcEid: 101,
    dstEid: 184,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1203
  },
  {
    srcEid: 101,
    dstEid: 183,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2483
  },
  {
    srcEid: 101,
    dstEid: 214,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2300
  },
  {
    srcEid: 101,
    dstEid: 111,
    srcPoolId: 3,
    dstPoolId: 3,
    ready: true,
    weight: 6972
  },
  {
    srcEid: 101,
    dstEid: 109,
    srcPoolId: 3,
    dstPoolId: 3,
    ready: true,
    weight: 3027
  },
  {
    srcEid: 101,
    dstEid: 111,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 1803
  },
  {
    srcEid: 101,
    dstEid: 106,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 4713
  },
  {
    srcEid: 101,
    dstEid: 110,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 3482
  },
  {
    srcEid: 101,
    dstEid: 111,
    srcPoolId: 14,
    dstPoolId: 14,
    ready: true,
    weight: 1
  },
  {
    srcEid: 101,
    dstEid: 111,
    srcPoolId: 15,
    dstPoolId: 15,
    ready: true,
    weight: 7342
  },
  {
    srcEid: 101,
    dstEid: 110,
    srcPoolId: 15,
    dstPoolId: 15,
    ready: true,
    weight: 2158
  },
  {
    srcEid: 101,
    dstEid: 102,
    srcPoolId: 16,
    dstPoolId: 16,
    ready: true,
    weight: 100
  },
  {
    srcEid: 101,
    dstEid: 151,
    srcPoolId: 17,
    dstPoolId: 17,
    ready: true,
    weight: 1
  },
  {
    srcEid: 101,
    dstEid: 151,
    srcPoolId: 19,
    dstPoolId: 19,
    ready: true,
    weight: 1
  },
  {
    srcEid: 101,
    dstEid: 109,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 1e3
  },
  {
    srcEid: 101,
    dstEid: 111,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 1e3
  },
  {
    srcEid: 101,
    dstEid: 102,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 5e3
  },
  {
    srcEid: 101,
    dstEid: 110,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2500
  },
  {
    srcEid: 101,
    dstEid: 106,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 500
  },
  {
    srcEid: 101,
    dstEid: 181,
    srcPoolId: 22,
    dstPoolId: 22,
    ready: true,
    weight: 1
  },
  {
    srcEid: 112,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 112,
    dstEid: 106,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 1
  },
  {
    srcEid: 112,
    dstEid: 109,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 1
  },
  {
    srcEid: 112,
    dstEid: 111,
    srcPoolId: 21,
    dstPoolId: 1,
    ready: true,
    weight: 1720
  },
  {
    srcEid: 112,
    dstEid: 110,
    srcPoolId: 21,
    dstPoolId: 1,
    ready: true,
    weight: 1690
  },
  {
    srcEid: 112,
    dstEid: 110,
    srcPoolId: 21,
    dstPoolId: 2,
    ready: true,
    weight: 999
  },
  {
    srcEid: 112,
    dstEid: 106,
    srcPoolId: 21,
    dstPoolId: 1,
    ready: true,
    weight: 1347
  },
  {
    srcEid: 112,
    dstEid: 106,
    srcPoolId: 21,
    dstPoolId: 2,
    ready: true,
    weight: 558
  },
  {
    srcEid: 112,
    dstEid: 102,
    srcPoolId: 21,
    dstPoolId: 2,
    ready: true,
    weight: 2300
  },
  {
    srcEid: 112,
    dstEid: 101,
    srcPoolId: 21,
    dstPoolId: 1,
    ready: true,
    weight: 250
  },
  {
    srcEid: 112,
    dstEid: 101,
    srcPoolId: 21,
    dstPoolId: 2,
    ready: true,
    weight: 250
  },
  {
    srcEid: 112,
    dstEid: 109,
    srcPoolId: 21,
    dstPoolId: 1,
    ready: true,
    weight: 1e3
  },
  {
    srcEid: 112,
    dstEid: 109,
    srcPoolId: 21,
    dstPoolId: 2,
    ready: true,
    weight: 606
  },
  {
    srcEid: 177,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1457
  },
  {
    srcEid: 177,
    dstEid: 111,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 847
  },
  {
    srcEid: 177,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 625
  },
  {
    srcEid: 177,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2439
  },
  {
    srcEid: 177,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1736
  },
  {
    srcEid: 177,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2896
  },
  {
    srcEid: 183,
    dstEid: 184,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 4944
  },
  {
    srcEid: 183,
    dstEid: 110,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2304
  },
  {
    srcEid: 183,
    dstEid: 111,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2085
  },
  {
    srcEid: 183,
    dstEid: 101,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 667
  },
  {
    srcEid: 181,
    dstEid: 111,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1500
  },
  {
    srcEid: 181,
    dstEid: 184,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1500
  },
  {
    srcEid: 181,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1500
  },
  {
    srcEid: 181,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1500
  },
  {
    srcEid: 181,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1500
  },
  {
    srcEid: 181,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1500
  },
  {
    srcEid: 181,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 181,
    dstEid: 109,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 181,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 181,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 181,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 181,
    dstEid: 101,
    srcPoolId: 22,
    dstPoolId: 22,
    ready: true,
    weight: 1
  },
  {
    srcEid: 151,
    dstEid: 101,
    srcPoolId: 17,
    dstPoolId: 17,
    ready: true,
    weight: 1
  },
  {
    srcEid: 151,
    dstEid: 101,
    srcPoolId: 19,
    dstPoolId: 19,
    ready: true,
    weight: 2194
  },
  {
    srcEid: 151,
    dstEid: 106,
    srcPoolId: 19,
    dstPoolId: 19,
    ready: true,
    weight: 2088
  },
  {
    srcEid: 151,
    dstEid: 102,
    srcPoolId: 19,
    dstPoolId: 19,
    ready: true,
    weight: 5716
  },
  {
    srcEid: 151,
    dstEid: 109,
    srcPoolId: 16,
    dstPoolId: 16,
    ready: true,
    weight: 100
  },
  {
    srcEid: 111,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 3496
  },
  {
    srcEid: 111,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 648
  },
  {
    srcEid: 111,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 935
  },
  {
    srcEid: 111,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 310
  },
  {
    srcEid: 111,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 5,
    ready: true,
    weight: 310
  },
  {
    srcEid: 111,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 697
  },
  {
    srcEid: 111,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 310
  },
  {
    srcEid: 111,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 310
  },
  {
    srcEid: 111,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 895
  },
  {
    srcEid: 111,
    dstEid: 109,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 310
  },
  {
    srcEid: 111,
    dstEid: 112,
    srcPoolId: 1,
    dstPoolId: 21,
    ready: true,
    weight: 310
  },
  {
    srcEid: 111,
    dstEid: 184,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1159
  },
  {
    srcEid: 111,
    dstEid: 177,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 310
  },
  {
    srcEid: 111,
    dstEid: 181,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 420
  },
  {
    srcEid: 111,
    dstEid: 110,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 4296
  },
  {
    srcEid: 111,
    dstEid: 101,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 950
  },
  {
    srcEid: 111,
    dstEid: 184,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2028
  },
  {
    srcEid: 111,
    dstEid: 183,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 2724
  },
  {
    srcEid: 111,
    dstEid: 109,
    srcPoolId: 3,
    dstPoolId: 3,
    ready: true,
    weight: 8250
  },
  {
    srcEid: 111,
    dstEid: 101,
    srcPoolId: 3,
    dstPoolId: 3,
    ready: true,
    weight: 1750
  },
  {
    srcEid: 111,
    dstEid: 110,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 3215
  },
  {
    srcEid: 111,
    dstEid: 106,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 3724
  },
  {
    srcEid: 111,
    dstEid: 101,
    srcPoolId: 7,
    dstPoolId: 7,
    ready: true,
    weight: 3061
  },
  {
    srcEid: 111,
    dstEid: 101,
    srcPoolId: 14,
    dstPoolId: 14,
    ready: true,
    weight: 1
  },
  {
    srcEid: 111,
    dstEid: 101,
    srcPoolId: 15,
    dstPoolId: 15,
    ready: true,
    weight: 500
  },
  {
    srcEid: 111,
    dstEid: 110,
    srcPoolId: 15,
    dstPoolId: 15,
    ready: true,
    weight: 9500
  },
  {
    srcEid: 111,
    dstEid: 109,
    srcPoolId: 16,
    dstPoolId: 16,
    ready: true,
    weight: 100
  },
  {
    srcEid: 111,
    dstEid: 101,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 111,
    dstEid: 109,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 111,
    dstEid: 102,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 111,
    dstEid: 106,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 111,
    dstEid: 110,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 109,
    dstEid: 111,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 2100
  },
  {
    srcEid: 109,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 2121
  },
  {
    srcEid: 109,
    dstEid: 106,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 335
  },
  {
    srcEid: 109,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 5,
    ready: true,
    weight: 335
  },
  {
    srcEid: 109,
    dstEid: 102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1089
  },
  {
    srcEid: 109,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 335
  },
  {
    srcEid: 109,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 335
  },
  {
    srcEid: 109,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1986
  },
  {
    srcEid: 109,
    dstEid: 110,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 365
  },
  {
    srcEid: 109,
    dstEid: 112,
    srcPoolId: 1,
    dstPoolId: 21,
    ready: true,
    weight: 335
  },
  {
    srcEid: 109,
    dstEid: 184,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 664
  },
  {
    srcEid: 109,
    dstEid: 181,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 420
  },
  {
    srcEid: 109,
    dstEid: 111,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 535
  },
  {
    srcEid: 109,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 453
  },
  {
    srcEid: 109,
    dstEid: 106,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1953
  },
  {
    srcEid: 109,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 5,
    ready: true,
    weight: 200
  },
  {
    srcEid: 109,
    dstEid: 102,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2972
  },
  {
    srcEid: 109,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 200
  },
  {
    srcEid: 109,
    dstEid: 101,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 200
  },
  {
    srcEid: 109,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 386
  },
  {
    srcEid: 109,
    dstEid: 110,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 2321
  },
  {
    srcEid: 109,
    dstEid: 112,
    srcPoolId: 2,
    dstPoolId: 21,
    ready: true,
    weight: 200
  },
  {
    srcEid: 109,
    dstEid: 184,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 211
  },
  {
    srcEid: 109,
    dstEid: 177,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 369
  },
  {
    srcEid: 109,
    dstEid: 181,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 400
  },
  {
    srcEid: 109,
    dstEid: 111,
    srcPoolId: 3,
    dstPoolId: 3,
    ready: true,
    weight: 8750
  },
  {
    srcEid: 109,
    dstEid: 101,
    srcPoolId: 3,
    dstPoolId: 3,
    ready: true,
    weight: 1250
  },
  {
    srcEid: 109,
    dstEid: 111,
    srcPoolId: 16,
    dstPoolId: 16,
    ready: true,
    weight: 100
  },
  {
    srcEid: 109,
    dstEid: 102,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 109,
    dstEid: 101,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 109,
    dstEid: 106,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 109,
    dstEid: 110,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 109,
    dstEid: 111,
    srcPoolId: 20,
    dstPoolId: 20,
    ready: true,
    weight: 2e3
  },
  {
    srcEid: 214,
    dstEid: 101,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1e4
  },
  {
    srcEid: 214,
    dstEid: 101,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1e4
  }
];

// ../ui-stargate/dist/index.mjs
var StargateVersion = {
  V1: "v1",
  V2: "v2"
};
var serializedContractSchema = z__default.default.union([
  z__default.default.object({
    address: z__default.default.string()
  }),
  z__default.default.string()
]).transform((input) => {
  if (typeof input === "string") {
    return {
      address: input
    };
  }
  return input;
});
var chainPathSchema = z__default.default.object({
  srcEid: z__default.default.number(),
  dstEid: z__default.default.number(),
  srcPoolId: z__default.default.number(),
  dstPoolId: z__default.default.number(),
  ready: z__default.default.boolean(),
  weight: z__default.default.number()
});
var serializedDeploymentSchema = z__default.default.object({
  eid: z__default.default.number(),
  router: serializedContractSchema.optional(),
  routerEth: serializedContractSchema.optional(),
  bridge: serializedContractSchema.optional(),
  factory: serializedContractSchema.optional(),
  poolView: serializedContractSchema.optional(),
  lpStaking: serializedContractSchema.array().optional(),
  lpStakingTime: serializedContractSchema.array().optional(),
  stargateToken: serializedContractSchema.optional(),
  stargatePreCrime: serializedContractSchema.optional(),
  widgetSwap: serializedContractSchema.optional()
});
var poolSchema = z__default.default.object({
  disabled: z__default.default.boolean().optional(),
  poolId: z__default.default.number(),
  chainKey: z__default.default.string(),
  token: uiCore.currencySchema,
  stargateVersion: z__default.default.literal(StargateVersion.V1),
  address: z__default.default.string(),
  decimals: z__default.default.number(),
  sharedDecimals: z__default.default.number(),
  symbol: z__default.default.string()
});
var serializedStargateConfigSchema = z__default.default.object({
  deployments: z__default.default.record(serializedDeploymentSchema),
  chainPaths: chainPathSchema.array(),
  pools: poolSchema.array()
});
var stargateConfigSchema = serializedStargateConfigSchema.transform((input, ctx) => {
  const config = {
    rules: [],
    deployments: {},
    chainPaths: input.chainPaths,
    pools: []
  };
  for (const chainKey in input.deployments) {
    const {
      // contracts
      stargateToken,
      factory,
      lpStaking,
      lpStakingTime,
      router,
      routerEth,
      eid,
      bridge
    } = input.deployments[chainKey];
    const deployment = {
      eid,
      chainKey,
      router: router && {
        address: router.address,
        chainKey
      },
      routerEth: routerEth && {
        address: routerEth.address,
        chainKey
      },
      bridge: bridge && {
        address: bridge.address,
        chainKey
      },
      factory: factory && {
        address: factory.address,
        chainKey
      },
      lpStaking: lpStaking && lpStaking.map((contract) => ({
        address: contract.address,
        chainKey
      })),
      lpStakingTime: lpStakingTime && lpStakingTime.map((contract) => ({
        address: contract.address,
        chainKey
      })),
      stargateToken: stargateToken && uiCore.Token.from({
        symbol: "STG",
        decimals: 18,
        address: stargateToken.address,
        chainKey
      })
    };
    config.deployments[chainKey] = deployment;
  }
  for (const pool of input.pools) {
    const deployment = config.deployments[pool.chainKey];
    if (!deployment) {
      ctx.addIssue({
        code: z__default.default.ZodIssueCode.custom,
        message: `Deployment not found for pool ${pool.symbol} on chain ${pool.chainKey}`
      });
      continue;
    }
    const lpToken = uiCore.Token.from({
      chainKey: pool.chainKey,
      address: pool.address,
      symbol: pool.symbol,
      decimals: pool.decimals
    });
    config.pools.push({
      eid: deployment.eid,
      chainKey: pool.chainKey,
      stargateVersion: StargateVersion.V1,
      lpToken,
      symbol: pool.symbol,
      token: pool.token,
      poolId: pool.poolId,
      address: pool.address,
      decimals: pool.decimals,
      sharedDecimals: pool.sharedDecimals,
      disabled: pool.disabled
    });
  }
  return config;
});
function createStargateConfig(input) {
  return stargateConfigSchema.parse(input);
}

// src/config/mainnet.ts
var mainnet = createStargateConfig({
  deployments: {
    arbitrum,
    avalanche,
    base,
    bsc,
    ethereum,
    fantom,
    kava,
    linea,
    mantle,
    metis,
    optimism,
    polygon,
    scroll
  },
  pools: pools_default,
  chainPaths: chainPaths_default
});

// src/deployments/bsc-testnet/index.ts
var bscTestnet = {
  eid: 10102,
  factory: {
    address: "0x9DB9116eD670F68B40a5033CE52c72D1702c2Db6"
  },
  bridge: {
    address: "0x6B5b5A7A5195Da7E20251822022Ae03B12Df5952"
  },
  router: {
    address: "0xB606AaA7E2837D4E6FC1e901Ba74045B29D2EB36"
  },
  stargateToken: {
    address: "0x5C4948d523943090bd3AEbD06227272A6b581691"
  },
  lpStakingTime: [],
  lpStaking: []
};

// src/deployments/fuji/index.ts
var fuji = {
  eid: 10106,
  factory: {
    address: "0x406f20eAc60D0842f457D11BCBdC7bc949A92c60"
  },
  bridge: {
    address: "0x75D573607f5047C728D3a786BE3Ba33765712875"
  },
  router: {
    address: "0x5C4948d523943090bd3AEbD06227272A6b581691"
  },
  stargateToken: {
    address: "0x1a18c388cb54A5B77C73e7bfFfC020d07bc862b0"
  },
  lpStakingTime: [],
  lpStaking: []
};

// src/deployments/sepolia/index.ts
var sepolia = {
  eid: 10161,
  factory: {
    address: "0xA296710670e16BA7791E919ddB3704c61f366118"
  },
  bridge: {
    address: "0x96ab23d6224cCA013D119Edd5A31813C32BCA077"
  },
  router: {
    address: "0x2836045A50744FB50D3d04a9C8D18aD7B5012102"
  },
  routerEth: {
    address: "0x676Fa8D37B948236aAcE03A0b34fc0Bc37FABA8D"
  },
  stargateToken: {
    address: "0x5e2675BA29c47E58Cb37e94Ce25A720BD17f6b4a"
  },
  lpStakingTime: [],
  lpStaking: []
};

// src/config/testnet/pools.json
var pools_default2 = [
  {
    disabled: false,
    poolId: 1,
    chainKey: "sepolia",
    token: {
      chainKey: "sepolia",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
    },
    stargateVersion: "v1",
    address: "0xA3b5d5D34dC3062815685cA93a6Ab8d71FE72969",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 13,
    chainKey: "sepolia",
    token: {
      chainKey: "sepolia",
      decimals: 18,
      symbol: "ETH",
      name: "Sepolia Ether"
    },
    stargateVersion: "v1",
    address: "0x4B646F443f4783dc12cd1cD0f62ef15Cc6ef01B9",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "arbitrum-sepolia",
    token: {
      chainKey: "arbitrum-sepolia",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0x3253a335E7bFfB4790Aa4C25C4250d206E9b9773"
    },
    stargateVersion: "v1",
    address: "0x9F8c0670677c79a85306c130f869C6Ea3e9EEE0c",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 13,
    chainKey: "arbitrum-sepolia",
    token: {
      chainKey: "arbitrum-sepolia",
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    },
    stargateVersion: "v1",
    address: "0x9325438b843074ce7c0789AbD9A2864B56C9c19B",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "optimism-sepolia",
    token: {
      chainKey: "optimism-sepolia",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0x488327236B65C61A6c083e8d811a4E0D3d1D4268"
    },
    stargateVersion: "v1",
    address: "0x9cb68Fe59b4c9a829E3B0810b0018409669b9861",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 13,
    chainKey: "optimism-sepolia",
    token: {
      chainKey: "optimism-sepolia",
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    },
    stargateVersion: "v1",
    address: "0x23E13646B1C7Ae604B326Cf09080F1c21c6d1A03",
    decimals: 18,
    sharedDecimals: 18,
    symbol: "S*SGETH"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "bsc-testnet",
    token: {
      chainKey: "bsc-testnet",
      decimals: 6,
      symbol: "USDT",
      name: "USDT",
      address: "0xe37Bdc6F09DAB6ce6E4eBC4d2E72792994Ef3765"
    },
    stargateVersion: "v1",
    address: "0xEFF2E5Afa32d97B8E164EBEfC180dFAEBF63F08F",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  },
  {
    disabled: false,
    poolId: 1,
    chainKey: "fuji",
    token: {
      chainKey: "fuji",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0x89C1D24fFb34020a9Be5463bD2578fF966E9f303"
    },
    stargateVersion: "v1",
    address: "0xe5B57A342f91A4378a2f84036638D58dF455cd25",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDC"
  },
  {
    disabled: false,
    poolId: 2,
    chainKey: "fuji",
    token: {
      chainKey: "fuji",
      decimals: 6,
      symbol: "USDT",
      name: "USDT",
      address: "0x144843929Df063312A083DB6f0a0FF5697ABED4a"
    },
    stargateVersion: "v1",
    address: "0x1a60945cFB8F7df17EA23D8f77e58989cff57C9B",
    decimals: 6,
    sharedDecimals: 6,
    symbol: "S*USDT"
  }
];

// src/config/testnet/chainPaths.json
var chainPaths_default2 = [
  {
    srcEid: 10161,
    dstEid: 10232,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10161,
    dstEid: 10102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10161,
    dstEid: 10231,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10161,
    dstEid: 10106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10161,
    dstEid: 10106,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10161,
    dstEid: 10232,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10161,
    dstEid: 10231,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10231,
    dstEid: 10161,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10231,
    dstEid: 10106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10231,
    dstEid: 10106,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10231,
    dstEid: 10232,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10231,
    dstEid: 10102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10231,
    dstEid: 10161,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10231,
    dstEid: 10232,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10232,
    dstEid: 10161,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10232,
    dstEid: 10231,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10232,
    dstEid: 10106,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10232,
    dstEid: 10106,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10232,
    dstEid: 10102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10232,
    dstEid: 10161,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10232,
    dstEid: 10231,
    srcPoolId: 13,
    dstPoolId: 13,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10102,
    dstEid: 10231,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10102,
    dstEid: 10232,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10102,
    dstEid: 10161,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10102,
    dstEid: 10106,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10102,
    dstEid: 10106,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10106,
    dstEid: 10102,
    srcPoolId: 1,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10106,
    dstEid: 10161,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10106,
    dstEid: 10231,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10106,
    dstEid: 10232,
    srcPoolId: 1,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10106,
    dstEid: 10102,
    srcPoolId: 2,
    dstPoolId: 2,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10106,
    dstEid: 10161,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10106,
    dstEid: 10231,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 1
  },
  {
    srcEid: 10106,
    dstEid: 10232,
    srcPoolId: 2,
    dstPoolId: 1,
    ready: true,
    weight: 1
  }
];

// src/deployments/arbitrum-sepolia/index.ts
var arbitrumSepolia = {
  eid: 10231,
  factory: {
    address: "0x7eEB77fFD369Da207b34FAcD202698dc733192a5"
  },
  bridge: {
    address: "0x2f4B6e5Ae6728C1832E93DE67141908F8Aa9255B"
  },
  router: {
    address: "0x2a4C2F5ffB0E0F2dcB3f9EBBd442B8F77ECDB9Cc"
  },
  routerEth: {
    address: "0x771A4f8a880b499A40c8fF53c7925798E0f2E594"
  },
  stargateToken: {
    address: "0xBe29C694b4DD547A843B13E62E1409d3bCCd68ca"
  },
  lpStakingTime: [],
  lpStaking: []
};

// src/deployments/optimism-sepolia/index.ts
var optimismSepolia = {
  eid: 10232,
  factory: {
    address: "0xDb6E40E8fACF1a76866ff067D57539c8EE1bfC16"
  },
  bridge: {
    address: "0xB55a9254b467A0a52d6696cD327f4C4a37498c1A"
  },
  router: {
    address: "0xa2dfFdDc372C6aeC3a8e79aAfa3953e8Bc956D63"
  },
  routerEth: {
    address: "0xA251Af9e97aadE0F0E650525Ad531a7a534c335E"
  },
  stargateToken: {
    address: "0x08dD692ECBa27CAb51e1f99De23Df89D2be81111"
  },
  lpStakingTime: [],
  lpStaking: []
};

// src/config/testnet.ts
var testnet = createStargateConfig({
  deployments: {
    sepolia,
    "arbitrum-sepolia": arbitrumSepolia,
    "optimism-sepolia": optimismSepolia,
    "bsc-testnet": bscTestnet,
    fuji
  },
  pools: pools_default2,
  chainPaths: chainPaths_default2
});
var StargateV1Bridge = class {
  constructor(providerFactory, sdk) {
    this.providerFactory = providerFactory;
    this.sdk = sdk;
    this.erc20 = new uiEvm.ERC20__api(providerFactory);
  }
  feeLibraryCache = /* @__PURE__ */ new Map();
  erc20;
  async getOptions(input) {
    const taxiOption = {
      mode: "taxi"
    };
    return { options: [taxiOption] };
  }
  async getAllowance({ token, address }) {
    if (uiCore.isNativeCurrency(token))
      return uiCore.CurrencyAmount.fromBigInt(token, uiCore.MaxUint256);
    const srcChainKey = token.chainKey;
    const router = this.sdk.getRouterAddress(srcChainKey);
    return this.erc20.forToken(token).allowance(address, router);
  }
  async approve({ amount }) {
    const srcToken = amount.token;
    const srcChainKey = srcToken.chainKey;
    const routerAddress = this.sdk.getRouterAddress(srcChainKey);
    return this.erc20.forToken(amount.token).approve(amount, routerAddress);
  }
  supportsTransfer(srcToken, dstToken) {
    const link = this.sdk.tryGetLink(srcToken, dstToken);
    if (!link)
      return false;
    if (link.srcPool.disabled)
      return false;
    if (link.dstPool.disabled)
      return false;
    if (link.chainPath.weight === 0)
      return false;
    if (!uiCore.isEvmChainKey(link.srcPool.chainKey))
      return false;
    return link.chainPath.ready;
  }
  supportsClaim(token) {
    return false;
  }
  supportsRegister(token) {
    return !!this.sdk.getPools().some((p) => p.token.equals(token));
  }
  async isRegistered(input) {
    return true;
  }
  async getUnclaimed({ token: currency }) {
    return uiCore.CurrencyAmount.fromBigInt(currency, BigInt(0));
  }
  claim(input) {
    throw new Error("Method not supported.");
  }
  register(input) {
    throw new Error("Method not supported.");
  }
  validateInput(input) {
    v1.validateInput(input);
    const { srcPool, dstPool } = this.sdk.getLink(input.srcToken, input.dstToken);
    if (srcPool.poolId === 13 || dstPool.poolId === 13) {
      uiCore.assert(srcPool.poolId === 13, "srcPool is not ETH");
      uiCore.assert(dstPool.poolId === 13, "dstPool is not ETH");
    }
    uiCore.assert(
      srcPool.chainKey === input.srcChainKey,
      `srcPool (${srcPool.chainKey}) and srcChainKey (${input.srcChainKey}) do not match`
    );
    uiCore.assert(
      dstPool.chainKey === input.dstChainKey,
      `dstPool (${dstPool.chainKey}) and dstChainId (${input.dstChainKey}) do not match`
    );
  }
  transfer(input) {
    this.validateInput(input);
    const { srcPool } = this.sdk.getLink(input.srcToken, input.dstToken);
    if (srcPool.poolId === 13)
      return this.transferEth(input);
    return this.transferToken(input);
  }
  async transferEth(input) {
    const srcChainKey = input.srcChainKey;
    const { srcPool, dstPool } = this.sdk.getLink(input.srcToken, input.dstToken);
    uiCore.assert(srcPool.poolId === 13, "eth");
    uiCore.assert(dstPool.poolId === 13, "eth");
    const provider = this.providerFactory(input.srcChainKey);
    const routerEthAddress = this.sdk.getRouterEthAddress(srcPool.chainKey);
    const router = chunkSUKWACGY_cjs.RouterETH__factory.connect(routerEthAddress, provider);
    const amountLD = input.srcAmount.quotient;
    const minAmountLD = input.dstAmountMin.quotient;
    const dstEid = dstPool.eid;
    const { srcAddress, dstAddress } = input;
    const value = input.srcAmount.add(input.fee.nativeFee).quotient;
    const populatedTransaction = router.populateTransaction.swapETH(
      dstEid,
      srcAddress,
      dstAddress,
      amountLD,
      minAmountLD,
      { value, from: srcAddress }
    );
    return uiEvm.createTransaction(populatedTransaction, { provider, chainKey: srcChainKey });
  }
  async transferToken(input) {
    v1.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const { srcPool, dstPool } = this.sdk.getLink(input.srcToken, input.dstToken);
    const provider = this.providerFactory(input.srcChainKey);
    const router = this.getRouterContract(srcPool.chainKey);
    const amountLD = input.srcAmount.quotient;
    const minAmountLD = (
      // at this point the conversion is safe
      uiCore.castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken).quotient
    );
    const { adapterParams } = input;
    const dstEid = dstPool.eid;
    const srcPoolId = srcPool.poolId;
    const dstPoolId = dstPool.poolId;
    const { srcAddress, dstAddress } = input;
    const lzTxParams = this.lzTxParams(adapterParams);
    const payload = "0x";
    const value = input.fee.nativeFee.quotient;
    const populatedTransaction = router.populateTransaction.swap(
      dstEid,
      srcPoolId,
      dstPoolId,
      srcAddress,
      amountLD,
      minAmountLD,
      lzTxParams,
      dstAddress,
      payload,
      { value, from: srcAddress }
    );
    return uiEvm.createTransaction(populatedTransaction, {
      provider,
      chainKey: srcChainKey
    });
  }
  async getMessageFee({ srcToken, dstToken, adapterParams }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const router = this.getRouterContract(srcChainKey);
    const payload = "0x";
    const lzTxParams = this.lzTxParams(adapterParams);
    const native = uiCore.getNativeCurrency(srcChainKey);
    const [nativeFee, lzFee] = await router.quoteLayerZeroFee(
      dstEid,
      1 /* TYPE_SWAP_REMOTE */,
      uiEvm.ONE_ADDRESS,
      payload,
      lzTxParams
    );
    return {
      nativeFee: uiCore.CurrencyAmount.fromBigInt(native, nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromBigInt(native, lzFee.toBigInt())
    };
  }
  lzTxParams(adapterParams) {
    const lzTxParams = {
      dstGasForCall: adapterParams.extraGas,
      dstNativeAddr: adapterParams.dstNativeAddress ?? uiEvm.ONE_ADDRESS,
      dstNativeAmount: adapterParams.dstNativeAmount ? adapterParams.dstNativeAmount.quotient : ethers.constants.Zero
    };
    return lzTxParams;
  }
  getFeeLibraryAddress = pMemoize__default.default(
    async (lpToken) => {
      const provider = this.providerFactory(lpToken.chainKey);
      const pool = chunkSUKWACGY_cjs.Pool__factory.connect(lpToken.address, provider);
      return pool.feeLibrary();
    },
    { cacheKey: ([lpToken]) => lpToken.id }
  );
  async getFeeLibrary(lpToken) {
    const feeLibraryAddress = await this.getFeeLibraryAddress(lpToken);
    const provider = this.providerFactory(lpToken.chainKey);
    const feeLibrary = chunkSUKWACGY_cjs.StargateFeeLibrary__factory.connect(feeLibraryAddress, provider);
    return feeLibrary;
  }
  async getOutput({
    srcAmount: inputAmountLD,
    dstToken
  }) {
    const srcToken = inputAmountLD.token;
    const { srcPool, dstPool } = this.sdk.getLink(srcToken, dstToken);
    const feeLibrary = await this.getFeeLibrary(srcPool.lpToken);
    const amountSD = amountLDtoSD(inputAmountLD, srcPool.lpToken);
    const srcPoolId = srcPool.poolId;
    const dstPoolId = dstPool.poolId;
    const dstEid = dstPool.eid;
    const srcAddress = uiEvm.ONE_ADDRESS;
    const fees = await feeLibrary.getFees(
      srcPoolId,
      dstPoolId,
      dstEid,
      srcAddress,
      amountSD.quotient
    );
    const feeSD = {
      eqFee: uiCore.CurrencyAmount.fromBigInt(srcPool.lpToken, fees.eqFee.toBigInt()),
      eqReward: uiCore.CurrencyAmount.fromBigInt(srcPool.lpToken, fees.eqReward.toBigInt()),
      lpFee: uiCore.CurrencyAmount.fromBigInt(srcPool.lpToken, fees.lpFee.toBigInt()),
      protocolFee: uiCore.CurrencyAmount.fromBigInt(srcPool.lpToken, fees.protocolFee.toBigInt()),
      lkbRemove: uiCore.CurrencyAmount.fromBigInt(srcPool.lpToken, fees.lkbRemove.toBigInt())
    };
    const feeLD = {
      eqFee: amountSDtoLD(feeSD.eqFee, srcPool.token),
      eqReward: amountSDtoLD(feeSD.eqReward, srcPool.token),
      lpFee: amountSDtoLD(feeSD.lpFee, srcPool.token),
      protocolFee: amountSDtoLD(feeSD.protocolFee, srcPool.token),
      lkbRemove: amountSDtoLD(feeSD.lkbRemove, srcPool.token)
    };
    const totalFeeSD = feeSD.eqFee.add(feeSD.protocolFee).add(feeSD.lpFee).subtract(feeSD.eqReward);
    const totalFeeLD = amountSDtoLD(totalFeeSD, srcToken);
    const inputAmountSD = amountLDtoSD(inputAmountLD, srcPool.lpToken);
    const outputAmountSD = inputAmountSD.subtract(totalFeeSD);
    const outputAmountRD = amountSDtoLD(outputAmountSD, dstPool.token);
    const output = {
      dstAmount: outputAmountRD,
      fee: {
        totalFee: totalFeeLD,
        ...feeLD
      }
    };
    return output;
  }
  async getLimit({ srcToken, dstToken }) {
    const { srcPool, dstPool } = this.sdk.getLink(srcToken, dstToken);
    const provider = this.providerFactory(srcPool.chainKey);
    const pool = chunkSUKWACGY_cjs.Pool__factory.connect(srcPool.lpToken.address, provider);
    const dstEid = dstPool.eid;
    const dstPoolId = dstPool.poolId;
    const chainPath = await pool.getChainPath(dstEid, dstPoolId);
    const balanceLP = uiCore.CurrencyAmount.fromBigInt(srcPool.lpToken, chainPath.balance.toBigInt());
    const balanceLD = amountSDtoLD(balanceLP, srcToken);
    return balanceLD;
  }
  async getExtraGas(input) {
    return 0;
  }
  async getDuration(input) {
    throw new Error("Not implemented");
  }
  chainKeyToEndpointId(chainKey) {
    return this.sdk.getDeployment(chainKey).eid;
  }
  getRouterContract(chainKey) {
    const routerAddress = this.sdk.getRouterAddress(chainKey);
    const provider = this.providerFactory(chainKey);
    const router = chunkSUKWACGY_cjs.Router__factory.connect(routerAddress, provider);
    return router;
  }
};
function amountLDtoSD(amountLD, lpToken) {
  const sharedDecimals = lpToken.decimals;
  return uiCore.CurrencyAmount.fromBigInt(
    lpToken,
    amountLD.multiply(BigInt(10) ** BigInt(sharedDecimals)).divide(amountLD.decimalScale).quotient
  );
}
function amountSDtoLD(amountSD, baseToken, localDecimals = baseToken.decimals) {
  return uiCore.CurrencyAmount.fromBigInt(
    baseToken,
    amountSD.multiply(BigInt(10) ** BigInt(localDecimals)).divide(amountSD.decimalScale).quotient
  );
}
var StargateV1WidgetBridge = class extends StargateV1Bridge {
  constructor(providerFactory, sdk, partnerConfig) {
    super(providerFactory, sdk);
    this.partnerConfig = partnerConfig;
  }
  tenthBpsDenominator = 1e5;
  async getPartnerFee(inputAmountLD) {
    return inputAmountLD.multiply(this.partnerConfig.tenthBps).divide(this.tenthBpsDenominator);
  }
  async getAllowance({ token, address }) {
    if (uiCore.isNativeCurrency(token))
      return uiCore.CurrencyAmount.fromRawAmount(token, uiCore.MaxUint256);
    const spender = this.sdk.getWidgetAddress(token.chainKey);
    return this.erc20.forToken(token).allowance(address, spender);
  }
  async approve({ amount }) {
    const srcToken = amount.token;
    uiCore.assert(uiCore.isToken(srcToken), "Not a token");
    const widgetAddress = this.sdk.getWidgetAddress(srcToken.chainKey);
    return this.erc20.forToken(amount.token).approve(amount, widgetAddress);
  }
  async getOutput({
    srcAmount: inputAmountLD,
    dstToken
  }) {
    const partnerFee = await this.getPartnerFee(inputAmountLD);
    const swapAmount = inputAmountLD.subtract(partnerFee);
    const output = await super.getOutput({ srcAmount: swapAmount, dstToken });
    const fee = {
      ...output.fee,
      partnerFee
    };
    return {
      dstAmount: output.dstAmount,
      fee
    };
  }
  async transferEth(input) {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const contract = this.getWidgetContract(input.srcChainKey);
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const partnerId = ethers.utils.solidityPack(["uint16"], [this.partnerConfig.partnerId]);
    const value = input.fee.nativeFee.add(input.srcAmount).quotient;
    const { srcAddress, dstAddress } = input;
    const amountLD = input.srcAmount.quotient;
    const minAmountLD = uiCore.castCurrencyAmountUnsafe(input.dstAmountMin, input.dstToken).quotient;
    const populatedTransaction = contract.populateTransaction.swapETH(
      dstEid,
      amountLD,
      minAmountLD,
      dstAddress,
      partnerId,
      this.feeObj,
      { value, from: srcAddress }
    );
    return uiEvm.createTransaction(populatedTransaction, {
      provider: contract.provider,
      chainKey: srcChainKey
    });
  }
  get feeObj() {
    const feeObj = {
      tenthBps: this.partnerConfig.tenthBps,
      feeCollector: this.partnerConfig.feeCollector
    };
    return feeObj;
  }
  async getMessageFee({ srcToken, dstToken, adapterParams }) {
    const fee = await super.getMessageFee({ srcToken, dstToken, adapterParams });
    return {
      ...fee,
      // Transfers that include a partnerId i.e. Widget transfers require slightly more native
      nativeFee: fee.nativeFee.multiply(110).divide(100)
    };
  }
  async transferToken(input) {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const contract = this.getWidgetContract(input.srcChainKey);
    const { srcPool, dstPool } = this.sdk.getLink(input.srcToken, input.dstToken);
    const lzTxParams = {
      dstGasForCall: 0,
      dstNativeAmount: input.adapterParams.dstNativeAmount ? input.adapterParams.dstNativeAmount.quotient : 0,
      dstNativeAddr: input.adapterParams.dstNativeAddress ?? input.dstAddress
    };
    const partnerId = ethers.utils.solidityPack(["uint16"], [this.partnerConfig.partnerId]);
    const value = input.fee.nativeFee.quotient;
    const dstEid = dstPool.eid;
    const srcPoolId = srcPool.poolId;
    const dstPoolId = dstPool.poolId;
    const amountLD = input.srcAmount.quotient;
    const minAmountLD = (
      // at this point the conversion is safe
      uiCore.castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken).quotient
    );
    const populatedTransaction = contract.populateTransaction.swapTokens(
      dstEid,
      srcPoolId,
      dstPoolId,
      amountLD,
      minAmountLD,
      lzTxParams,
      input.dstAddress,
      partnerId,
      this.feeObj,
      { value }
    );
    return uiEvm.createTransaction(populatedTransaction, {
      provider: contract.provider,
      chainKey: srcChainKey
    });
  }
  getWidgetContract(chainKey) {
    const address = this.sdk.getWidgetAddress(chainKey);
    const provider = this.providerFactory(chainKey);
    return chunkSUKWACGY_cjs.StargateWidget__factory.connect(address, provider);
  }
};

// src/StargateV1Sdk.ts
var StargateV1Sdk = class {
  constructor(config) {
    this.config = config;
    this.update(config);
  }
  poolLinks = [];
  endpointIdToChainKeyMap = /* @__PURE__ */ new Map();
  log = console;
  update(config) {
    this.updateEndpointIdToChainKeyMap(config);
    this.updateChainPaths(config);
  }
  tryGetDeployment(chainKey) {
    return this.config.deployments[chainKey];
  }
  getDeployment(chainKey) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment)
      return deployment;
    throw new Error(`No deployment for chainKey: ${chainKey}`);
  }
  updateEndpointIdToChainKeyMap(config) {
    this.endpointIdToChainKeyMap.clear();
    for (const chainKey in config.deployments) {
      const deployment = config.deployments[chainKey];
      this.endpointIdToChainKeyMap.set(deployment.eid, chainKey);
    }
  }
  chainKeyToEndpointId(chainKey) {
    return this.getDeployment(chainKey).eid;
  }
  endpointIdToChainKey(endpointId) {
    const chainKey = this.endpointIdToChainKeyMap.get(endpointId);
    if (chainKey)
      return chainKey;
    throw new Error(`No chainKey for endpointId: ${endpointId}`);
  }
  // this method cannot throw
  // if pool or chain is not defined - it will be skipped
  updateChainPaths(config) {
    const chainPathLinks = [];
    for (const chainPath of config.chainPaths) {
      try {
        const srcChainKey = this.endpointIdToChainKey(chainPath.srcEid);
        const dstChainKey = this.endpointIdToChainKey(chainPath.dstEid);
        const srcPool = this.getPool({ poolId: chainPath.srcPoolId, chainKey: srcChainKey });
        const dstPool = this.getPool({ poolId: chainPath.dstPoolId, chainKey: dstChainKey });
        const disabled = srcPool.disabled || dstPool.disabled || false;
        const path = {
          disabled,
          srcPool,
          dstPool,
          chainPath
        };
        chainPathLinks.push(path);
      } catch (e) {
        this.log.error(`Could not add chain path ${JSON.stringify(chainPath)}`, e);
      }
    }
    this.poolLinks = chainPathLinks;
  }
  tryGetPool(poolLike) {
    if ("address" in poolLike) {
      const { chainKey, address } = poolLike;
      for (const pool of this.config.pools) {
        if (pool.chainKey === chainKey && pool.address === address) {
          return pool;
        }
      }
    }
    if ("poolId" in poolLike) {
      const { chainKey, poolId } = poolLike;
      for (const pool of this.config.pools) {
        if (pool.chainKey === chainKey && pool.poolId === poolId) {
          return pool;
        }
      }
    }
    return void 0;
  }
  getPool(poolLike) {
    const pool = this.tryGetPool(poolLike);
    if (pool)
      return pool;
    throw new Error(`No pool for ${JSON.stringify(poolLike)}`);
  }
  getActiveLinks = () => {
    return this.poolLinks.filter(
      (path) => path.chainPath.ready && !path.srcPool.disabled && !path.dstPool.disabled
    );
  };
  getLinks = () => {
    return this.poolLinks;
  };
  getPools = () => {
    return this.config.pools;
  };
  getLink = (srcToken, dstToken) => {
    const link = this.tryGetLink(srcToken, dstToken);
    if (link)
      return link;
    throw new Error("No link found");
  };
  tryGetLink = (srcToken, dstToken) => {
    if (!srcToken || !dstToken)
      return void 0;
    for (const link of this.poolLinks) {
      if (link.srcPool.token.equals(srcToken) && link.dstPool.token.equals(dstToken)) {
        return link;
      }
    }
    return void 0;
  };
  tryGetPath = (srcToken, dstToken) => {
    return this.tryGetLink(srcToken, dstToken)?.chainPath;
  };
  getPath = (srcToken, dstToken) => {
    const path = this.tryGetPath(srcToken, dstToken);
    if (path)
      return path;
    throw new Error("No path found");
  };
  // other
  tryGetRouterAddress(chainKey) {
    return this.tryGetDeployment(chainKey)?.router?.address;
  }
  getRouterAddress = (chainKey) => {
    const address = this.tryGetRouterAddress(chainKey);
    if (address)
      return address;
    throw new Error(`No router address for chainKey: ${chainKey}`);
  };
  tryGetRouterEthAddress(chainKey) {
    return this.tryGetDeployment(chainKey)?.routerEth?.address;
  }
  getRouterEthAddress = (chainKey) => {
    const address = this.tryGetRouterEthAddress(chainKey);
    if (address)
      return address;
    throw new Error("No router ETH address");
  };
  isPathDisabled(srcPool, dstPool) {
    if (this.getPool(srcPool).disabled)
      return true;
    if (this.getPool(dstPool).disabled)
      return true;
    for (const rule of this.config.rules) {
      if (rule.srcChainKey && srcPool.chainKey !== rule.srcChainKey)
        continue;
      if (rule.dstChainKey && dstPool.chainKey !== rule.dstChainKey)
        continue;
      if (rule.srcChainKey && srcPool.poolId !== rule.srcPoolId)
        continue;
      if (rule.dstPoolId && dstPool.poolId !== rule.dstPoolId)
        continue;
      return true;
    }
    return false;
  }
  getWidgetAddress = (chainKey) => {
    const address = this.tryGetWidgetAddress(chainKey);
    if (address)
      return address;
    throw new Error(`No widget address for chainKey: ${chainKey}`);
  };
  tryGetWidgetAddress = (chainKey) => {
    throw new Error("tryGetWidgetAddress not implemented");
  };
  get pools() {
    return this.getPools();
  }
};

// src/pools/getChainPaths.ts
async function getChainPaths(pool, providerFactory) {
  const contract = chunkSUKWACGY_cjs.Pool__factory.connect(pool.address, providerFactory(pool.chainKey));
  const [chainPathsLength, srcPoolId] = await Promise.all([
    contract.getChainPathsLength(),
    contract.poolId()
  ]);
  const indexes = range(0, chainPathsLength.toNumber());
  const promises = indexes.map((index) => getChainPathByIndex(index));
  const paths = await Promise.all(promises);
  return paths;
  async function getChainPathByIndex(index) {
    const path = await contract.chainPaths(index);
    return {
      srcEid: pool.eid,
      dstEid: path.dstChainId,
      srcPoolId: srcPoolId.toNumber(),
      dstPoolId: path.dstPoolId.toNumber(),
      ready: path.ready,
      weight: path.weight.toNumber()
    };
  }
  function range(start, end) {
    return Array.from({ length: end - start }, (_, i) => start + i);
  }
}

exports.StargateV1Bridge = StargateV1Bridge;
exports.StargateV1Sdk = StargateV1Sdk;
exports.StargateV1WidgetBridge = StargateV1WidgetBridge;
exports.getChainPaths = getChainPaths;
exports.mainnet = mainnet;
exports.testnet = testnet;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map