'use strict';

var chunkJF5TKISX_cjs = require('./chunk-JF5TKISX.cjs');
var z = require('zod');
var uiCore = require('@layerzerolabs/ui-core');
var uiEvm = require('@layerzerolabs/ui-evm');
var v1 = require('@layerzerolabs/ui-bridge-sdk/v1');
var ethers = require('ethers');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var z__default = /*#__PURE__*/_interopDefault(z);

var currencySchema = z__default.default.object({
  symbol: z__default.default.string(),
  decimals: z__default.default.number(),
  name: z__default.default.string().optional(),
  address: z__default.default.string().optional()
});
var tokenSchema = currencySchema.extend({
  address: z__default.default.string()
});
var contractSchema = z__default.default.object({
  address: z__default.default.string()
});
var serializedStargateV2ConfigSchema = z__default.default.object({
  assetId: z__default.default.number().int().min(1).max(255),
  sharedDecimals: z__default.default.number(),
  deployments: z__default.default.record(
    z__default.default.object({
      eid: z__default.default.number(),
      token: currencySchema,
      lpToken: tokenSchema.optional(),
      stargatePoolNative: contractSchema.optional(),
      stargatePool: contractSchema.optional(),
      stargateOft: contractSchema.optional(),
      feeLib: contractSchema,
      tokenMessaging: contractSchema
    })
  )
});
var stargateV2ConfigSchema = serializedStargateV2ConfigSchema.transform((data) => {
  const config = {
    assetId: data.assetId,
    sharedDecimals: data.sharedDecimals,
    deployments: {}
  };
  for (const chainKey in data.deployments) {
    const deployment = data.deployments[chainKey];
    config.deployments[chainKey] = {
      eid: deployment.eid,
      lpToken: deployment.lpToken && uiCore.Token.from({
        chainKey,
        symbol: deployment.lpToken.symbol,
        decimals: deployment.lpToken.decimals,
        address: deployment.lpToken.address,
        name: deployment.lpToken.name
      }),
      token: deployment.token.address ? uiCore.Token.from({
        chainKey,
        symbol: deployment.token.symbol,
        decimals: deployment.token.decimals,
        address: deployment.token.address,
        name: deployment.token.name
      }) : uiCore.Coin.from({
        chainKey,
        decimals: deployment.token.decimals,
        symbol: deployment.token.symbol
      }),
      feeLib: {
        address: deployment.feeLib.address
      },
      stargatePool: deployment.stargatePool ? {
        address: deployment.stargatePool.address
      } : void 0,
      stargatePoolNative: deployment.stargatePoolNative ? {
        address: deployment.stargatePoolNative.address
      } : void 0,
      stargateOft: deployment.stargateOft ? {
        address: deployment.stargateOft.address
      } : void 0,
      tokenMessaging: deployment.tokenMessaging
    };
  }
  return config;
});
function createConfig(input) {
  return stargateV2ConfigSchema.parse(input);
}
z__default.default.object({
  api: z__default.default.object({ url: z__default.default.string() }),
  deployments: z__default.default.record(
    z__default.default.object({
      eid: z__default.default.number(),
      tokenMessaging: contractSchema
    })
  )
});
z__default.default.object({
  deployments: z__default.default.record(
    z__default.default.object({
      stargateStaking: contractSchema,
      stargateMultiRewarder: contractSchema
    })
  )
});

// src/config/testnet/eth.ts
var ETH_TESTNET = createConfig({
  assetId: 13,
  deployments: {
    "arbitrum-sepolia": {
      eid: 40231,
      token: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0xB9E16057deabc08Da98009c8fd17E23bF4D8eE7C"
      },
      feeLib: {
        address: "0x14ae7853Cd69dfd519899a30AA8bA30FA4536453"
      },
      tokenMessaging: {
        address: "0xCf26A197b5353ff886919c2a2FB4c45FE233DD3f"
      },
      stargatePoolNative: {
        address: "0x1E8A86EcC9dc41106d3834c6F1033D86939B1e0D"
      }
    },
    "klaytn-baobab": {
      eid: 40150,
      token: {
        name: "ETH",
        symbol: "OFT Token",
        decimals: 18,
        address: "0xE26d6ABA383A7f452D3f66B9A4a51A1dfe79DF2E"
      },
      feeLib: {
        address: "0xcDD249F414D36594121379bC04bad085cC27F271"
      },
      tokenMessaging: {
        address: "0x6C2d1Dc35C69296C0a1661D9f1c757d6Fc3080E8"
      },
      stargateOft: {
        address: "0xf1b69ee3097c6E8CC6487B7667dB818FeDC7b1a9"
      }
    },
    "optimism-sepolia": {
      eid: 40232,
      token: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0x6c16Bb71e68b33CDABe57f46794344e5840ccC95"
      },
      feeLib: {
        address: "0x6C90B6EDdFCD46818061Aa1Fe13CC30c676e276E"
      },
      tokenMessaging: {
        address: "0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042"
      },
      stargatePoolNative: {
        address: "0x3C0Dea5955cb490F78e330A213c960cA63f66314"
      }
    },
    sepolia: {
      eid: 40161,
      token: {
        name: "Sepolia Ether",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0x211c9c0bE2abaf38EcDcf626D15660C9D3AE34c6"
      },
      feeLib: {
        address: "0x273e333dd2C17D7fe9822322fAdBBfcBe47b8132"
      },
      tokenMessaging: {
        address: "0xe5EcECEc372382A96Fe8E88fDC52f327e0895245"
      },
      stargatePoolNative: {
        address: "0xa5A8481790BB57CF3FA0a4f24Dc28121A491447f"
      }
    }
  },
  sharedDecimals: 6
});

// src/config/testnet/usdc.ts
var USDC_TESTNET = createConfig({
  assetId: 1,
  deployments: {
    "arbitrum-sepolia": {
      eid: 40231,
      token: {
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        address: "0x3253a335E7bFfB4790Aa4C25C4250d206E9b9773"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x5151CB0fC25f8904a1A4ba69d7D8E8eF45adE211"
      },
      feeLib: {
        address: "0xBd63EDc97649ad7F9e3D4063D24AA76ecf83767c"
      },
      tokenMessaging: {
        address: "0xCf26A197b5353ff886919c2a2FB4c45FE233DD3f"
      },
      stargatePool: {
        address: "0x0d7aB83370b492f2AB096c80111381674456e8d8"
      }
    },
    "klaytn-baobab": {
      eid: 40150,
      token: {
        name: "Bridged USDC (Stargate)",
        symbol: "USDC.e",
        decimals: 6,
        address: "0xCfd388493f182211165EB01b92cE5626B6D2eC0F"
      },
      feeLib: {
        address: "0x9352001271a0af0d09a4e7F6C431663A2D5AA9d2"
      },
      tokenMessaging: {
        address: "0x6C2d1Dc35C69296C0a1661D9f1c757d6Fc3080E8"
      },
      stargateOft: {
        address: "0xe19525580913971d220dBa3BbD01eE2A0b1adc6F"
      }
    },
    "optimism-sepolia": {
      eid: 40232,
      token: {
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        address: "0x488327236B65C61A6c083e8d811a4E0D3d1D4268"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0xB9E16057deabc08Da98009c8fd17E23bF4D8eE7C"
      },
      feeLib: {
        address: "0x14ae7853Cd69dfd519899a30AA8bA30FA4536453"
      },
      tokenMessaging: {
        address: "0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042"
      },
      stargatePool: {
        address: "0x1E8A86EcC9dc41106d3834c6F1033D86939B1e0D"
      }
    },
    sepolia: {
      eid: 40161,
      token: {
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x0d476322a44F1E6B79dcbB006152c1623f4f19AD"
      },
      feeLib: {
        address: "0xE66B2eFfbc756076fFd1aDaA21Ed5C8FB75eF929"
      },
      tokenMessaging: {
        address: "0xe5EcECEc372382A96Fe8E88fDC52f327e0895245"
      },
      stargatePool: {
        address: "0xa4e97dFd56E0E30A2542d666Ef04ACC102310083"
      }
    }
  },
  sharedDecimals: 6
});

// src/config/testnet/usdt.ts
var USDT_TESTNET = createConfig({
  assetId: 2,
  deployments: {
    "arbitrum-sepolia": {
      eid: 40231,
      token: {
        name: "USDT",
        symbol: "USDT",
        decimals: 18,
        address: "0x3C0Dea5955cb490F78e330A213c960cA63f66314"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 18,
        address: "0x73b8263b49CDB160691cCa10a5569aB6360bAB91"
      },
      feeLib: {
        address: "0xf375a930168b5890407B200336c6a76b2F3243c8"
      },
      tokenMessaging: {
        address: "0xCf26A197b5353ff886919c2a2FB4c45FE233DD3f"
      },
      stargatePool: {
        address: "0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042"
      }
    },
    "bsc-testnet": {
      eid: 40102,
      token: {
        name: "USDT",
        symbol: "USDT",
        decimals: 6,
        address: "0xe37Bdc6F09DAB6ce6E4eBC4d2E72792994Ef3765"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0xa0f6D07579D0657031d6A2720CFCa8d46EDF5dA1"
      },
      feeLib: {
        address: "0x95512Dd7a21Be88a7CDBA8B4647FB3fb0Efa2855"
      },
      tokenMessaging: {
        address: "0x1A2dC7f4a90a1266a9C66191CcDB2961a5BdD2ee"
      },
      stargatePool: {
        address: "0x0a0C1221f451Ac54Ef9F21940569E252161a2495"
      }
    },
    "klaytn-baobab": {
      eid: 40150,
      token: {
        name: "Bridged USDT (Stargate)",
        symbol: "USDT",
        decimals: 18,
        address: "0xEAFCc3713E7CeF6565f358ad4497A319A2aE30FC"
      },
      feeLib: {
        address: "0x3C0Dea5955cb490F78e330A213c960cA63f66314"
      },
      tokenMessaging: {
        address: "0x6C2d1Dc35C69296C0a1661D9f1c757d6Fc3080E8"
      },
      stargateOft: {
        address: "0x0fd58375f7849487f14F68812DDb35d59E1bAD79"
      }
    },
    "optimism-sepolia": {
      eid: 40232,
      token: {
        name: "USDT",
        symbol: "USDT",
        decimals: 18,
        address: "0x9352001271a0af0d09a4e7F6C431663A2D5AA9d2"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 18,
        address: "0x5151CB0fC25f8904a1A4ba69d7D8E8eF45adE211"
      },
      feeLib: {
        address: "0xBd63EDc97649ad7F9e3D4063D24AA76ecf83767c"
      },
      tokenMessaging: {
        address: "0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042"
      },
      stargatePool: {
        address: "0x0d7aB83370b492f2AB096c80111381674456e8d8"
      }
    },
    sepolia: {
      eid: 40161,
      token: {
        name: "USDT",
        symbol: "USDT",
        decimals: 18,
        address: "0xB15a3F6E64D2CaffAF7927431AB0D1c21e429644"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 18,
        address: "0xcdA4c6D8A1aA67d061d008ddaA84de2157D61d4a"
      },
      feeLib: {
        address: "0x32F4d65b9DF20480242f40D8A1dfC57145AdEE39"
      },
      tokenMessaging: {
        address: "0xe5EcECEc372382A96Fe8E88fDC52f327e0895245"
      },
      stargatePool: {
        address: "0xc9c7A3Ae8F1059867247a009b32Ad7AAD9a52D1c"
      }
    }
  },
  sharedDecimals: 6
});

// src/config/testnet/tokenMessaging.ts
var TOKEN_MESSAGING_TESTNET = {
  api: {
    url: "https://d2l228le2lsgpd.cloudfront.net"
  },
  deployments: {
    "arbitrum-sepolia": {
      eid: 40231,
      tokenMessaging: {
        address: "0xCf26A197b5353ff886919c2a2FB4c45FE233DD3f"
      }
    },
    "bsc-testnet": {
      eid: 40102,
      tokenMessaging: {
        address: "0x1A2dC7f4a90a1266a9C66191CcDB2961a5BdD2ee"
      }
    },
    "klaytn-baobab": {
      eid: 40150,
      tokenMessaging: {
        address: "0x6C2d1Dc35C69296C0a1661D9f1c757d6Fc3080E8"
      }
    },
    "optimism-sepolia": {
      eid: 40232,
      tokenMessaging: {
        address: "0xC48c0736C8ae67A8C54DFb01D7ECc7190C12a042"
      }
    },
    sepolia: {
      eid: 40161,
      tokenMessaging: {
        address: "0xe5EcECEc372382A96Fe8E88fDC52f327e0895245"
      }
    }
  }
};

// src/config/testnet/stargateStaking.ts
var STARGATE_V2_STAKING_TESTNET = {
  deployments: {
    "arbitrum-sepolia": {
      stargateStaking: {
        address: "0xB15a3F6E64D2CaffAF7927431AB0D1c21e429644"
      },
      stargateMultiRewarder: {
        address: "0xc9c7A3Ae8F1059867247a009b32Ad7AAD9a52D1c"
      }
    },
    "bsc-testnet": {
      stargateStaking: {
        address: "0x3A7f2580675CEEd079b433C3c00EA997A31fB686"
      },
      stargateMultiRewarder: {
        address: "0x55584d5F0E466a5f57d5149647c15c2E99493E74"
      }
    },
    "optimism-sepolia": {
      stargateStaking: {
        address: "0xf375a930168b5890407B200336c6a76b2F3243c8"
      },
      stargateMultiRewarder: {
        address: "0xa4e97dFd56E0E30A2542d666Ef04ACC102310083"
      }
    },
    sepolia: {
      stargateStaking: {
        address: "0xF39a1dC4018a8106b21547C84133Ea122FE2b1DB"
      },
      stargateMultiRewarder: {
        address: "0x94986cd528d7e17870263dB8FF0fF33e8B1363FD"
      }
    }
  }
};

// src/config/sandbox/eth.ts
var ETH_SANDBOX = createConfig({
  assetId: 13,
  deployments: {
    // no sandbox right now
  },
  sharedDecimals: 6
});

// src/config/sandbox/usdc.ts
var USDC_SANDBOX = createConfig({
  assetId: 1,
  deployments: {
    // no sandbox right now
  },
  sharedDecimals: 6
});

// src/config/sandbox/usdt.ts
var USDT_SANDBOX = createConfig({
  assetId: 2,
  deployments: {
    // no sandbox right now
  },
  sharedDecimals: 6
});

// src/config/sandbox/tokenMessaging.ts
var TOKEN_MESSAGING_SANDBOX = {
  api: {
    url: "https://d1oc18n8di3ccj.cloudfront.net"
  },
  deployments: {
    "bsc-sandbox": {
      eid: 50102,
      tokenMessaging: {
        address: "0x65816bf78E206Cbd3a0542E5E1ddb1484D8d87f8"
      }
    },
    "ethereum-sandbox": {
      eid: 50121,
      tokenMessaging: {
        address: "0xb8b938c4BFDaCc95ec4d76600c7Ea57bbBB8DA52"
      }
    },
    "polygon-sandbox": {
      eid: 50109,
      tokenMessaging: {
        address: "0x65816bf78E206Cbd3a0542E5E1ddb1484D8d87f8"
      }
    }
  }
};

// src/config/sandbox/stargateStaking.ts
var STARGATE_V2_STAKING_SANDBOX = {
  deployments: {
    "bsc-sandbox": {
      stargateStaking: {
        address: "0x5868B71c225BE428Ae65e48c7d8Ef9e12AB76766"
      },
      stargateMultiRewarder: {
        address: "0xEe06926a58914FFFb4fcC06989d779b7A8102b89"
      }
    },
    "ethereum-sandbox": {
      stargateStaking: {
        address: "0x43e3f24Dbe80F661269E7708bE1D1E2b7C1eCf3e"
      },
      stargateMultiRewarder: {
        address: "0x016DA422616858B4de4A35fd2e967BFcda627245"
      }
    },
    "polygon-sandbox": {
      stargateStaking: {
        address: "0x5868B71c225BE428Ae65e48c7d8Ef9e12AB76766"
      },
      stargateMultiRewarder: {
        address: "0xEe06926a58914FFFb4fcC06989d779b7A8102b89"
      }
    }
  }
};

// src/config/mainnet/eth.ts
var ETH_MAINNET = createConfig({
  assetId: 13,
  deployments: {
    arbitrum: {
      eid: 30110,
      token: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0x993614e1c8c9C5AbE49462Ce5702431978Fd767F"
      },
      feeLib: {
        address: "0xda82A31dF339BfDF0123661134b4DB63Cb1706f5"
      },
      tokenMessaging: {
        address: "0x19cFCE47eD54a88614648DC3f19A5980097007dD"
      },
      stargatePoolNative: {
        address: "0xA45B5130f36CDcA45667738e2a258AB09f4A5f7F"
      }
    },
    base: {
      eid: 30184,
      token: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0x98fB8522d891F43B771e2d27367b41Ba138D0B80"
      },
      feeLib: {
        address: "0x17E450Be3Ba9557F2378E20d64AD417E59Ef9A34"
      },
      tokenMessaging: {
        address: "0x5634c4a5FEd09819E3c46D86A965Dd9447d86e47"
      },
      stargatePoolNative: {
        address: "0xdc181Bd607330aeeBEF6ea62e03e5e1Fb4B6F7C7"
      }
    },
    ethereum: {
      eid: 30101,
      token: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0xfcb42A0e352a08AbD50b8EE68d01f581B6Dfd80A"
      },
      feeLib: {
        address: "0x3E368B6C95c6fEfB7A16dCc0D756389F3c658a06"
      },
      tokenMessaging: {
        address: "0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980"
      },
      stargatePoolNative: {
        address: "0x77b2043768d28E9C9aB44E1aBfC95944bcE57931"
      }
    },
    flare: {
      eid: 30295,
      token: {
        name: "WETH",
        symbol: "WETH",
        decimals: 18,
        address: "0x1502FA4be69d526124D453619276FacCab275d3D"
      },
      feeLib: {
        address: "0xCd4302D950e7e6606b6910Cd232758b5ad423311"
      },
      tokenMessaging: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      },
      stargateOft: {
        address: "0x8e8539e4CcD69123c623a106773F2b0cbbc58746"
      }
    },
    gravity: {
      eid: 30294,
      token: {
        name: "WETH",
        symbol: "WETH",
        decimals: 18,
        address: "0xf6f832466Cd6C21967E0D954109403f36Bc8ceaA"
      },
      feeLib: {
        address: "0x77C71633C34C3784ede189d74223122422492a0f"
      },
      tokenMessaging: {
        address: "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD"
      },
      stargateOft: {
        address: "0x17d65bF79E77B6Ab21d8a0afed3bC8657d8Ee0B2"
      }
    },
    iota: {
      eid: 30284,
      token: {
        name: "WETH",
        symbol: "WETH",
        decimals: 18,
        address: "0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8"
      },
      feeLib: {
        address: "0x0dB9afb4C33be43a0a0e396Fd1383B4ea97aB10a"
      },
      tokenMessaging: {
        address: "0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135"
      },
      stargateOft: {
        address: "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD"
      }
    },
    klaytn: {
      eid: 30150,
      token: {
        name: "WETH",
        symbol: "WETH",
        decimals: 18,
        address: "0x55Acee547DF909CF844e32DD66eE55a6F81dC71b"
      },
      feeLib: {
        address: "0xB83ab1FF56cCD2B9E9914c68C182135C3a7ECFcd"
      },
      tokenMessaging: {
        address: "0x16F3F98D82d965988E6853681fD578F4d719A1c0"
      },
      stargateOft: {
        address: "0xBB4957E44401a31ED81Cab33539d9e8993FA13Ce"
      }
    },
    mantle: {
      eid: 30181,
      token: {
        name: "Ether",
        symbol: "WETH",
        decimals: 18,
        address: "0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111"
      },
      lpToken: {
        name: "WETH-LP",
        symbol: "S*WETH",
        decimals: 18,
        address: "0xc2c3Cc203FB607f2f93e6A15f45556bc83620644"
      },
      feeLib: {
        address: "0x2BC3141AaeA1d84bcd557EeB543253fd9685c0C4"
      },
      tokenMessaging: {
        address: "0x41B491285A4f888F9f636cEc8a363AB9770a0AEF"
      },
      stargatePool: {
        address: "0x4c1d3Fc3fC3c177c3b633427c2F769276c547463"
      }
    },
    metis: {
      eid: 30151,
      token: {
        name: "Ether",
        symbol: "WETH",
        decimals: 18,
        address: "0x420000000000000000000000000000000000000A"
      },
      lpToken: {
        name: "WETH-LP",
        symbol: "S*WETH",
        decimals: 18,
        address: "0x16C58802FD464D2Ac33B8f1DB57D7717f8365d91"
      },
      feeLib: {
        address: "0xe8CDF27AcD73a434D661C84887215F7598e7d0d3"
      },
      tokenMessaging: {
        address: "0xcbE78230CcA58b9EF4c3c5D1bC0D7E4b3206588a"
      },
      stargatePool: {
        address: "0x36ed193dc7160D3858EC250e69D12B03Ca087D08"
      }
    },
    optimism: {
      eid: 30111,
      token: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0x6Ea313859A5D9F6fF2a68f529e6361174bFD2225"
      },
      feeLib: {
        address: "0x80F755e3091b2Ad99c08Da8D13E9C7635C1b8161"
      },
      tokenMessaging: {
        address: "0xF1fCb4CBd57B67d683972A59B6a7b1e2E8Bf27E6"
      },
      stargatePoolNative: {
        address: "0xe8CDF27AcD73a434D661C84887215F7598e7d0d3"
      }
    },
    scroll: {
      eid: 30214,
      token: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0x73424Acc8749b5c76c7AbBB1B17D1F18Ce0Bb092"
      },
      feeLib: {
        address: "0x2A6c43e0DBDCde23d40c82F45682BC6D8A6dB219"
      },
      tokenMessaging: {
        address: "0x4e422B0aCb2Bd7e3aC70B5c0E5eb806e86a94038"
      },
      stargatePoolNative: {
        address: "0xC2b638Cb5042c1B3c5d5C969361fB50569840583"
      }
    },
    sei: {
      eid: 30280,
      token: {
        name: "WETH",
        symbol: "WETH",
        decimals: 18,
        address: "0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8"
      },
      feeLib: {
        address: "0xDe48600aA18Ae707f5D57e0FaafEC7C118ABaeb2"
      },
      tokenMessaging: {
        address: "0x1502FA4be69d526124D453619276FacCab275d3D"
      },
      stargateOft: {
        address: "0x5c386D85b1B82FD9Db681b9176C8a4248bb6345B"
      }
    },
    linea: {
      eid: 30183,
      token: {
        name: "Linea Ether",
        symbol: "ETH",
        decimals: 18
      },
      lpToken: {
        name: "ETH-LP",
        symbol: "S*ETH",
        decimals: 18,
        address: "0x23A46eFDa973Bd4e97Ee84bAc87018537538D078"
      },
      feeLib: {
        address: "0x6E3d884C96d640526F273C61dfcF08915eBd7e2B"
      },
      tokenMessaging: {
        address: "0x5f688F563Dc16590e570f97b542FA87931AF2feD"
      },
      stargatePoolNative: {
        address: "0x81F6138153d473E8c5EcebD3DC8Cd4903506B075"
      }
    }
  },
  sharedDecimals: 6
});

// src/config/mainnet/usdc.ts
var USDC_MAINNET = createConfig({
  assetId: 1,
  deployments: {
    arbitrum: {
      eid: 30110,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x6Ea313859A5D9F6fF2a68f529e6361174bFD2225"
      },
      feeLib: {
        address: "0x80F755e3091b2Ad99c08Da8D13E9C7635C1b8161"
      },
      tokenMessaging: {
        address: "0x19cFCE47eD54a88614648DC3f19A5980097007dD"
      },
      stargatePool: {
        address: "0xe8CDF27AcD73a434D661C84887215F7598e7d0d3"
      }
    },
    aurora: {
      eid: 30211,
      token: {
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        address: "0x368EBb46ACa6b8D0787C96B2b20bD3CC3F2c45F7"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x23A46eFDa973Bd4e97Ee84bAc87018537538D078"
      },
      feeLib: {
        address: "0x6E3d884C96d640526F273C61dfcF08915eBd7e2B"
      },
      tokenMessaging: {
        address: "0x5f688F563Dc16590e570f97b542FA87931AF2feD"
      },
      stargatePool: {
        address: "0x81F6138153d473E8c5EcebD3DC8Cd4903506B075"
      }
    },
    avalanche: {
      eid: 30106,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0xaDA7A31B692e3AbFccD02C3d7f8aDc5944510291"
      },
      feeLib: {
        address: "0xDFc47DCeF7e8f9Ab19a1b8Af3eeCF000C7ea0B80"
      },
      tokenMessaging: {
        address: "0x17E450Be3Ba9557F2378E20d64AD417E59Ef9A34"
      },
      stargatePool: {
        address: "0x5634c4a5FEd09819E3c46D86A965Dd9447d86e47"
      }
    },
    base: {
      eid: 30184,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x53983F31E8E0D0c3Fd0b8d85654989A1336317d7"
      },
      feeLib: {
        address: "0x08ed1d79D509A6f1020685535028ae60C144441E"
      },
      tokenMessaging: {
        address: "0x5634c4a5FEd09819E3c46D86A965Dd9447d86e47"
      },
      stargatePool: {
        address: "0x27a16dc786820B16E5c9028b75B99F6f604b5d26"
      }
    },
    bsc: {
      eid: 30102,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 18,
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 18,
        address: "0xd5a9B8b07e9bA3D492b801c84B69E292476805B3"
      },
      feeLib: {
        address: "0x622244fFF1328586D0754D67cc6Ab77e7ab38B7D"
      },
      tokenMessaging: {
        address: "0x6E3d884C96d640526F273C61dfcF08915eBd7e2B"
      },
      stargatePool: {
        address: "0x962Bd449E630b0d928f308Ce63f1A21F02576057"
      }
    },
    ethereum: {
      eid: 30101,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x5DaAee9EF143faFF495B581e9863570e83F99d31"
      },
      feeLib: {
        address: "0x52B35406CB2FB5e0038EdEcFc129A152a1f74087"
      },
      tokenMessaging: {
        address: "0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980"
      },
      stargatePool: {
        address: "0xc026395860Db2d07ee33e05fE50ed7bD583189C7"
      }
    },
    flare: {
      eid: 30295,
      token: {
        name: "Bridged USDC (Stargate)",
        symbol: "USDC.e",
        decimals: 6,
        address: "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6"
      },
      feeLib: {
        address: "0x711b5aAFd4d0A5b7B863Ca434A2678D086830d8E"
      },
      tokenMessaging: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      },
      stargateOft: {
        address: "0x77C71633C34C3784ede189d74223122422492a0f"
      }
    },
    gravity: {
      eid: 30294,
      token: {
        name: "Bridged USDC (Stargate)",
        symbol: "USDC.e",
        decimals: 6,
        address: "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6"
      },
      feeLib: {
        address: "0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135"
      },
      tokenMessaging: {
        address: "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD"
      },
      stargateOft: {
        address: "0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4"
      }
    },
    iota: {
      eid: 30284,
      token: {
        name: "Bridged USDC (Stargate)",
        symbol: "USDC.e",
        decimals: 6,
        address: "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6"
      },
      feeLib: {
        address: "0xCd4302D950e7e6606b6910Cd232758b5ad423311"
      },
      tokenMessaging: {
        address: "0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135"
      },
      stargateOft: {
        address: "0x8e8539e4CcD69123c623a106773F2b0cbbc58746"
      }
    },
    klaytn: {
      eid: 30150,
      token: {
        name: "Bridged USDC (Stargate)",
        symbol: "USDC.e",
        decimals: 6,
        address: "0xE2053BCf56D2030d2470Fb454574237cF9ee3D4B"
      },
      feeLib: {
        address: "0x8d92105ae654f494CE10B3b3e4C58186E3e0dA00"
      },
      tokenMessaging: {
        address: "0x16F3F98D82d965988E6853681fD578F4d719A1c0"
      },
      stargateOft: {
        address: "0x01A7c805cc47AbDB254CD8AaD29dE5e447F59224"
      }
    },
    mantle: {
      eid: 30181,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x5D131cb99cE5642f3d539417A187a93EEae48177"
      },
      feeLib: {
        address: "0x288968ffF40543F168eAf29A54D5C0affD3C8df7"
      },
      tokenMessaging: {
        address: "0x41B491285A4f888F9f636cEc8a363AB9770a0AEF"
      },
      stargatePool: {
        address: "0xAc290Ad4e0c891FDc295ca4F0a6214cf6dC6acDC"
      }
    },
    optimism: {
      eid: 30111,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x8D66Ff1845b1baCC6E87D867CA4680d05A349cA8"
      },
      feeLib: {
        address: "0x1F605162282570dFa6255D27895587f4117F52FA"
      },
      tokenMessaging: {
        address: "0xF1fCb4CBd57B67d683972A59B6a7b1e2E8Bf27E6"
      },
      stargatePool: {
        address: "0xcE8CcA271Ebc0533920C83d39F417ED6A0abB7D0"
      }
    },
    polygon: {
      eid: 30109,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0xfe2439B656d8b624c78B7bF7bDc440D101ff9929"
      },
      feeLib: {
        address: "0x3Fc69CC4A842838bCDC9499178740226062b14E4"
      },
      tokenMessaging: {
        address: "0x6CE9bf8CDaB780416AD1fd87b318A077D2f50EaC"
      },
      stargatePool: {
        address: "0x9Aa02D4Fae7F58b8E8f34c66E756cC734DAc7fe4"
      }
    },
    rarible: {
      eid: 30235,
      token: {
        name: "Bridged USDC (Stargate)",
        symbol: "USDC.e",
        decimals: 6,
        address: "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6"
      },
      feeLib: {
        address: "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD"
      },
      tokenMessaging: {
        address: "0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4"
      },
      stargateOft: {
        address: "0x875bee36739e7Ce6b60E056451c556a88c59b086"
      }
    },
    scroll: {
      eid: 30214,
      token: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4"
      },
      lpToken: {
        name: "USDC.e-LP",
        symbol: "S*USDC.e",
        decimals: 6,
        address: "0x1eA77149Dfd4C80A753aaa39AaFC22453aefcc99"
      },
      feeLib: {
        address: "0x503C5cFEa3477E0A576C8Cf5354023854b7A06Ff"
      },
      tokenMessaging: {
        address: "0x4e422B0aCb2Bd7e3aC70B5c0E5eb806e86a94038"
      },
      stargatePool: {
        address: "0x3Fc69CC4A842838bCDC9499178740226062b14E4"
      }
    },
    sei: {
      eid: 30280,
      token: {
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        address: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1"
      },
      lpToken: {
        name: "USDC-LP",
        symbol: "S*USDC",
        decimals: 6,
        address: "0x3AE336CD18c50Fc5F23Ad44c6DAd07E83bd2B303"
      },
      feeLib: {
        address: "0xCd4302D950e7e6606b6910Cd232758b5ad423311"
      },
      tokenMessaging: {
        address: "0x1502FA4be69d526124D453619276FacCab275d3D"
      },
      stargatePool: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      }
    },
    taiko: {
      eid: 30290,
      token: {
        name: "Bridged USDC (Stargate)",
        symbol: "USDC.e",
        decimals: 6,
        address: "0x19e26B0638bf63aa9fa4d14c6baF8D52eBE86C5C"
      },
      feeLib: {
        address: "0xCd4302D950e7e6606b6910Cd232758b5ad423311"
      },
      tokenMessaging: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      },
      stargateOft: {
        address: "0x77C71633C34C3784ede189d74223122422492a0f"
      }
    }
    // xchain: {
    //   eid: 30291,
    //   token: {
    //     name: 'Bridged USDC (Stargate)',
    //     symbol: 'USDC.e',
    //     decimals: 6,
    //     address: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6',
    //   },
    //   feeLib: {
    //     address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD',
    //   },
    //   tokenMessaging: {
    //     address: '0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4',
    //   },
    //   stargateOft: {
    //     address: '0x17d65bF79E77B6Ab21d8a0afed3bC8657d8Ee0B2',
    //   },
    // },
  },
  sharedDecimals: 6
});

// src/config/mainnet/usdt.ts
var USDT_MAINNET = createConfig({
  assetId: 2,
  deployments: {
    arbitrum: {
      eid: 30110,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0x8D66Ff1845b1baCC6E87D867CA4680d05A349cA8"
      },
      feeLib: {
        address: "0x1F605162282570dFa6255D27895587f4117F52FA"
      },
      tokenMessaging: {
        address: "0x19cFCE47eD54a88614648DC3f19A5980097007dD"
      },
      stargatePool: {
        address: "0xcE8CcA271Ebc0533920C83d39F417ED6A0abB7D0"
      }
    },
    avalanche: {
      eid: 30106,
      token: {
        name: "TetherToken",
        symbol: "USDt",
        decimals: 6,
        address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0x80f1b5d3665a61a91f896C1f0790B4062966610E"
      },
      feeLib: {
        address: "0x22BdF9633F3e679785638Db690b85dC0Dc8B35B8"
      },
      tokenMessaging: {
        address: "0x17E450Be3Ba9557F2378E20d64AD417E59Ef9A34"
      },
      stargatePool: {
        address: "0x12dC9256Acc9895B076f6638D628382881e62CeE"
      }
    },
    bsc: {
      eid: 30102,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 18,
        address: "0x55d398326f99059fF775485246999027B3197955"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 18,
        address: "0xe664Fd3a278b1E49C20F9B0aF77aA57DC770B21B"
      },
      feeLib: {
        address: "0xDd002227d9bC27f10066ED9A17bE89c43bCafC31"
      },
      tokenMessaging: {
        address: "0x6E3d884C96d640526F273C61dfcF08915eBd7e2B"
      },
      stargatePool: {
        address: "0x138EB30f73BC423c6455C53df6D89CB01d9eBc63"
      }
    },
    ebi: {
      eid: 30282,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x5489DDAb89609580835eE6d655CD9B3503E7F97D"
      },
      feeLib: {
        address: "0x1a6437BeF5b8615Ef523d00Ef7c9D58D66c0F246"
      },
      tokenMessaging: {
        address: "0x4EeBa4E168b23601EB7716A5D1Ac243B8D375290"
      },
      stargateOft: {
        address: "0xF8c61c8F4Fdd41dd444f7b582C9F440e1b1ADcc8"
      }
    },
    ethereum: {
      eid: 30101,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0x17BBC9BD51A52aAf4d2CC6652630DaF4fdB358F7"
      },
      feeLib: {
        address: "0xe171AFcd1E0394b3312e68ca823D5BC87F3Db311"
      },
      tokenMessaging: {
        address: "0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980"
      },
      stargatePool: {
        address: "0x933597a323Eb81cAe705C5bC29985172fd5A3973"
      }
    },
    flare: {
      eid: 30295,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x0B38e83B86d491735fEaa0a791F65c2B99535396"
      },
      feeLib: {
        address: "0x8c1014B5936dD88BAA5F4DB0423C3003615E03a0"
      },
      tokenMessaging: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      },
      stargateOft: {
        address: "0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135"
      }
    },
    gravity: {
      eid: 30294,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x816E810f9F787d669FB71932DeabF6c83781Cd48"
      },
      feeLib: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      },
      tokenMessaging: {
        address: "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD"
      },
      stargateOft: {
        address: "0x0B38e83B86d491735fEaa0a791F65c2B99535396"
      }
    },
    iota: {
      eid: 30284,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4"
      },
      feeLib: {
        address: "0x711b5aAFd4d0A5b7B863Ca434A2678D086830d8E"
      },
      tokenMessaging: {
        address: "0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135"
      },
      stargateOft: {
        address: "0x77C71633C34C3784ede189d74223122422492a0f"
      }
    },
    kava: {
      eid: 30177,
      token: {
        name: "TetherUSDt",
        symbol: "USDt",
        decimals: 6,
        address: "0x919C1c267BC06a7039e03fcc2eF738525769109c"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0x9B8b53CDB3a241E838cDE548d7D8B76DA759D90B"
      },
      feeLib: {
        address: "0xA76CD3a43751090c40a35C37B38aA06973Cc6184"
      },
      tokenMessaging: {
        address: "0x6B73D3cBbb278Ce2E8698E983AecCdD94Dc4594B"
      },
      stargatePool: {
        address: "0x41A5b0470D96656Fb3e8f68A218b39AdBca3420b"
      }
    },
    klaytn: {
      eid: 30150,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x9025095263d1E548dc890A7589A4C78038aC40ab"
      },
      feeLib: {
        address: "0x6eFfA1afE190a652a8204D318fec03D3dD9402d2"
      },
      tokenMessaging: {
        address: "0x16F3F98D82d965988E6853681fD578F4d719A1c0"
      },
      stargateOft: {
        address: "0x8619bA1B324e099CB2227060c4BC5bDEe14456c6"
      }
    },
    mantle: {
      eid: 30181,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0xe1152564ED7B59e01915FC95bBF87cF9b6636fe6"
      },
      feeLib: {
        address: "0xa81274AFac523D639DbcA2C32c1470f1600cCEBe"
      },
      tokenMessaging: {
        address: "0x41B491285A4f888F9f636cEc8a363AB9770a0AEF"
      },
      stargatePool: {
        address: "0xB715B85682B731dB9D5063187C450095c91C57FC"
      }
    },
    metis: {
      eid: 30151,
      token: {
        name: "USDT Token",
        symbol: "m.USDT",
        decimals: 6,
        address: "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0x222A9a6dD812CA5a27fFfEC39816A2DF6837D396"
      },
      feeLib: {
        address: "0x19cFCE47eD54a88614648DC3f19A5980097007dD"
      },
      tokenMessaging: {
        address: "0xcbE78230CcA58b9EF4c3c5D1bC0D7E4b3206588a"
      },
      stargatePool: {
        address: "0x4dCBFC0249e8d5032F89D6461218a9D2eFff5125"
      }
    },
    optimism: {
      eid: 30111,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0x9f58A79D81477130C0C6D74b96e1397db9765ab1"
      },
      feeLib: {
        address: "0x3da4f8E456AC648c489c286B99Ca37B666be7C4C"
      },
      tokenMessaging: {
        address: "0xF1fCb4CBd57B67d683972A59B6a7b1e2E8Bf27E6"
      },
      stargatePool: {
        address: "0x19cFCE47eD54a88614648DC3f19A5980097007dD"
      }
    },
    polygon: {
      eid: 30109,
      token: {
        name: "(PoS) Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0x3e3C6dC77Ebf9EA16E6d83bf3ba021aAa7374Ca7"
      },
      feeLib: {
        address: "0x4e422B0aCb2Bd7e3aC70B5c0E5eb806e86a94038"
      },
      tokenMessaging: {
        address: "0x6CE9bf8CDaB780416AD1fd87b318A077D2f50EaC"
      },
      stargatePool: {
        address: "0xd47b03ee6d86Cf251ee7860FB2ACf9f91B9fD4d7"
      }
    },
    rarible: {
      eid: 30235,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x362FAE9A75B27BBc550aAc28a7c1F96C8D483120"
      },
      feeLib: {
        address: "0x8e8539e4CcD69123c623a106773F2b0cbbc58746"
      },
      tokenMessaging: {
        address: "0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4"
      },
      stargateOft: {
        address: "0x17d65bF79E77B6Ab21d8a0afed3bC8657d8Ee0B2"
      }
    },
    sei: {
      eid: 30280,
      token: {
        name: "USDT",
        symbol: "USDT",
        decimals: 6,
        address: "0xB75D0B03c06A926e488e2659DF1A861F860bD3d1"
      },
      lpToken: {
        name: "USDT-LP",
        symbol: "S*USDT",
        decimals: 6,
        address: "0xe1d6BE6B535EbCaa41bF23eEb22d08119ae258ed"
      },
      feeLib: {
        address: "0x711b5aAFd4d0A5b7B863Ca434A2678D086830d8E"
      },
      tokenMessaging: {
        address: "0x1502FA4be69d526124D453619276FacCab275d3D"
      },
      stargatePool: {
        address: "0x0dB9afb4C33be43a0a0e396Fd1383B4ea97aB10a"
      }
    },
    taiko: {
      eid: 30290,
      token: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD"
      },
      feeLib: {
        address: "0x711b5aAFd4d0A5b7B863Ca434A2678D086830d8E"
      },
      tokenMessaging: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      },
      stargateOft: {
        address: "0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135"
      }
    }
  },
  sharedDecimals: 6
});

// src/config/mainnet/meth.ts
var METH_MAINNET = createConfig({
  assetId: 22,
  deployments: {
    ethereum: {
      eid: 30101,
      token: {
        name: "mETH",
        symbol: "mETH",
        decimals: 18,
        address: "0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa"
      },
      lpToken: {
        name: "mETH-LP",
        symbol: "S*mETH",
        decimals: 18,
        address: "0xD646CD9Dff77097b454a5a148BeaE6615e3bC2e2"
      },
      feeLib: {
        address: "0x6D5521F46b2cba9443feFC09cBaC3B15AE0F73eB"
      },
      tokenMessaging: {
        address: "0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980"
      },
      stargatePool: {
        address: "0x268Ca24DAefF1FaC2ed883c598200CcbB79E931D"
      }
    },
    mantle: {
      eid: 30181,
      token: {
        name: "mETH",
        symbol: "mETH",
        decimals: 18,
        address: "0xcDA86A272531e8640cD7F1a92c01839911B90bb0"
      },
      lpToken: {
        name: "mETH-LP",
        symbol: "S*mETH",
        decimals: 18,
        address: "0xfe1e5Ff7FFE3672C085a4b1Dd6b95273c9164022"
      },
      feeLib: {
        address: "0x6eC3EfD27d8b1070Fe96910EF416D54e845045c9"
      },
      tokenMessaging: {
        address: "0x41B491285A4f888F9f636cEc8a363AB9770a0AEF"
      },
      stargatePool: {
        address: "0xF7628d84a2BbD9bb9c8E686AC95BB5d55169F3F1"
      }
    }
  },
  sharedDecimals: 6
});

// src/config/mainnet/metis.ts
var METIS_MAINNET = createConfig({
  assetId: 17,
  deployments: {
    ethereum: {
      eid: 30101,
      token: {
        name: "Metis Token",
        symbol: "Metis",
        decimals: 18,
        address: "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e"
      },
      lpToken: {
        name: "METIS-LP",
        symbol: "S*METIS",
        decimals: 18,
        address: "0xF14EEe033D8b00101aB147F87cB238a2d3E74940"
      },
      feeLib: {
        address: "0x6Dd69717B1194B81A92105B7e0F94cb40f68A3e3"
      },
      tokenMessaging: {
        address: "0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980"
      },
      stargatePool: {
        address: "0xcDafB1b2dB43f366E48e6F614b8DCCBFeeFEEcD3"
      }
    },
    metis: {
      eid: 30151,
      token: {
        name: "Metis Token",
        symbol: "Metis",
        decimals: 18,
        address: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000"
      },
      lpToken: {
        name: "METIS-LP",
        symbol: "S*METIS",
        decimals: 18,
        address: "0x2D4848d502B8B16b8ad86945d3D4e92F2d229dFF"
      },
      feeLib: {
        address: "0xcE8CcA271Ebc0533920C83d39F417ED6A0abB7D0"
      },
      tokenMessaging: {
        address: "0xcbE78230CcA58b9EF4c3c5D1bC0D7E4b3206588a"
      },
      stargatePool: {
        address: "0xD9050e7043102a0391F81462a3916326F86331F0"
      }
    }
  },
  sharedDecimals: 6
});

// src/config/mainnet/tokenMessaging.ts
var TOKEN_MESSAGING_MAINNET = {
  api: {
    url: "https://d3k4i7b673n27r.cloudfront.net"
  },
  deployments: {
    arbitrum: {
      eid: 30110,
      tokenMessaging: {
        address: "0x19cFCE47eD54a88614648DC3f19A5980097007dD"
      }
    },
    aurora: {
      eid: 30211,
      tokenMessaging: {
        address: "0x5f688F563Dc16590e570f97b542FA87931AF2feD"
      }
    },
    avalanche: {
      eid: 30106,
      tokenMessaging: {
        address: "0x17E450Be3Ba9557F2378E20d64AD417E59Ef9A34"
      }
    },
    base: {
      eid: 30184,
      tokenMessaging: {
        address: "0x5634c4a5FEd09819E3c46D86A965Dd9447d86e47"
      }
    },
    bsc: {
      eid: 30102,
      tokenMessaging: {
        address: "0x6E3d884C96d640526F273C61dfcF08915eBd7e2B"
      }
    },
    ebi: {
      eid: 30282,
      tokenMessaging: {
        address: "0x4EeBa4E168b23601EB7716A5D1Ac243B8D375290"
      }
    },
    ethereum: {
      eid: 30101,
      tokenMessaging: {
        address: "0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980"
      }
    },
    flare: {
      eid: 30295,
      tokenMessaging: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      }
    },
    gravity: {
      eid: 30294,
      tokenMessaging: {
        address: "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD"
      }
    },
    iota: {
      eid: 30284,
      tokenMessaging: {
        address: "0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135"
      }
    },
    kava: {
      eid: 30177,
      tokenMessaging: {
        address: "0x6B73D3cBbb278Ce2E8698E983AecCdD94Dc4594B"
      }
    },
    klaytn: {
      eid: 30150,
      tokenMessaging: {
        address: "0x16F3F98D82d965988E6853681fD578F4d719A1c0"
      }
    },
    mantle: {
      eid: 30181,
      tokenMessaging: {
        address: "0x41B491285A4f888F9f636cEc8a363AB9770a0AEF"
      }
    },
    metis: {
      eid: 30151,
      tokenMessaging: {
        address: "0xcbE78230CcA58b9EF4c3c5D1bC0D7E4b3206588a"
      }
    },
    optimism: {
      eid: 30111,
      tokenMessaging: {
        address: "0xF1fCb4CBd57B67d683972A59B6a7b1e2E8Bf27E6"
      }
    },
    polygon: {
      eid: 30109,
      tokenMessaging: {
        address: "0x6CE9bf8CDaB780416AD1fd87b318A077D2f50EaC"
      }
    },
    rarible: {
      eid: 30235,
      tokenMessaging: {
        address: "0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4"
      }
    },
    scroll: {
      eid: 30214,
      tokenMessaging: {
        address: "0x4e422B0aCb2Bd7e3aC70B5c0E5eb806e86a94038"
      }
    },
    sei: {
      eid: 30280,
      tokenMessaging: {
        address: "0x1502FA4be69d526124D453619276FacCab275d3D"
      }
    },
    taiko: {
      eid: 30290,
      tokenMessaging: {
        address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E"
      }
    },
    xchain: {
      eid: 30291,
      tokenMessaging: {
        address: "0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4"
      }
    },
    linea: {
      eid: 30183,
      tokenMessaging: {
        address: "0x5f688F563Dc16590e570f97b542FA87931AF2feD"
      }
    }
  }
};

// src/config/mainnet/stargateStaking.ts
var STARGATE_V2_STAKING_MAINNET = {
  deployments: {
    arbitrum: {
      stargateStaking: {
        address: "0x3da4f8E456AC648c489c286B99Ca37B666be7C4C"
      },
      stargateMultiRewarder: {
        address: "0x957b12606690C7692eF92bb5c34a0E63baED99C7"
      }
    },
    aurora: {
      stargateStaking: {
        address: "0x25BBf59ef9246Dc65bFac8385D55C5e524A7B9eA"
      },
      stargateMultiRewarder: {
        address: "0xE89Ca5C58E2978c031f7796Ca8580bC88Ea0B3dD"
      }
    },
    avalanche: {
      stargateStaking: {
        address: "0x8db623d439C8c4DFA1Ca94E4CD3eB8B3Aaff8331"
      },
      stargateMultiRewarder: {
        address: "0x6CE9bf8CDaB780416AD1fd87b318A077D2f50EaC"
      }
    },
    base: {
      stargateStaking: {
        address: "0xDFc47DCeF7e8f9Ab19a1b8Af3eeCF000C7ea0B80"
      },
      stargateMultiRewarder: {
        address: "0x9Aa02D4Fae7F58b8E8f34c66E756cC734DAc7fe4"
      }
    },
    bsc: {
      stargateStaking: {
        address: "0x26727C78B0209d9E787b2f9ac8f0238B122a3098"
      },
      stargateMultiRewarder: {
        address: "0x68D7877b16002AD34836ba55416bcA9B92B55589"
      }
    },
    ethereum: {
      stargateStaking: {
        address: "0xFF551fEDdbeDC0AeE764139cCD9Cb644Bb04A6BD"
      },
      stargateMultiRewarder: {
        address: "0x5871A7f88b0f3F5143Bf599Fd45F8C0Dc237E881"
      }
    },
    kava: {
      stargateStaking: {
        address: "0x10e28bA4D7fc9cf39F34E20bbC5C58694b2f1A92"
      },
      stargateMultiRewarder: {
        address: "0x62207a4d054376052Bfcede2c00d113E97D4D247"
      }
    },
    mantle: {
      stargateStaking: {
        address: "0x02DC1042E623A8677B002981164ccc05d25d486a"
      },
      stargateMultiRewarder: {
        address: "0x0184857631ddb3e9E230Bca303F0Ab1e516FC0c8"
      }
    },
    metis: {
      stargateStaking: {
        address: "0xF1fCb4CBd57B67d683972A59B6a7b1e2E8Bf27E6"
      },
      stargateMultiRewarder: {
        address: "0x1F605162282570dFa6255D27895587f4117F52FA"
      }
    },
    optimism: {
      stargateStaking: {
        address: "0xFBb5A71025BEf1A8166C9BCb904a120AA17d6443"
      },
      stargateMultiRewarder: {
        address: "0x146c8e409C113ED87C6183f4d25c50251DFfbb3a"
      }
    },
    polygon: {
      stargateStaking: {
        address: "0x4694900bDbA99Edf07A2E46C4093f88F9106a90D"
      },
      stargateMultiRewarder: {
        address: "0xd240a859Efc77b7455AD1B1402357784a2D72a1B"
      }
    },
    scroll: {
      stargateStaking: {
        address: "0xd240a859Efc77b7455AD1B1402357784a2D72a1B"
      },
      stargateMultiRewarder: {
        address: "0x4dCBFC0249e8d5032F89D6461218a9D2eFff5125"
      }
    },
    sei: {
      stargateStaking: {
        address: "0x8c1014B5936dD88BAA5F4DB0423C3003615E03a0"
      },
      stargateMultiRewarder: {
        address: "0xd69A3D88438f042a5a0b995b970F78FC8120ED67"
      }
    },
    linea: {
      stargateStaking: {
        address: "0x25BBf59ef9246Dc65bFac8385D55C5e524A7B9eA"
      },
      stargateMultiRewarder: {
        address: "0xE89Ca5C58E2978c031f7796Ca8580bC88Ea0B3dD"
      }
    }
  }
};

// ../../node_modules/redaxios/dist/redaxios.module.js
var redaxios_module_default = function e(t) {
  function n(e2, t2, r2) {
    var a, o = {};
    if (Array.isArray(e2))
      return e2.concat(t2);
    for (a in e2)
      o[r2 ? a.toLowerCase() : a] = e2[a];
    for (a in t2) {
      var i = r2 ? a.toLowerCase() : a, u = t2[a];
      o[i] = i in o && "object" == typeof u ? n(o[i], u, "headers" == i) : u;
    }
    return o;
  }
  function r(e2, r2, a, o, i) {
    var u = "string" != typeof e2 ? (r2 = e2).url : e2, c = { config: r2 }, s = n(t, r2), f = {};
    o = o || s.data, (s.transformRequest || []).map(function(e3) {
      o = e3(o, s.headers) || o;
    }), s.auth && (f.authorization = s.auth), o && "object" == typeof o && "function" != typeof o.append && "function" != typeof o.text && (o = JSON.stringify(o), f["content-type"] = "application/json");
    try {
      f[s.xsrfHeaderName] = decodeURIComponent(document.cookie.match(RegExp("(^|; )" + s.xsrfCookieName + "=([^;]*)"))[2]);
    } catch (e3) {
    }
    return s.baseURL && (u = u.replace(/^(?!.*\/\/)\/?/, s.baseURL + "/")), s.params && (u += (~u.indexOf("?") ? "&" : "?") + (s.paramsSerializer ? s.paramsSerializer(s.params) : new URLSearchParams(s.params))), (s.fetch || fetch)(u, { method: (a || s.method || "get").toUpperCase(), body: o, headers: n(s.headers, f, true), credentials: s.withCredentials ? "include" : i }).then(function(e3) {
      for (var t2 in e3)
        "function" != typeof e3[t2] && (c[t2] = e3[t2]);
      return "stream" == s.responseType ? (c.data = e3.body, c) : e3[s.responseType || "text"]().then(function(e4) {
        c.data = e4, c.data = JSON.parse(e4);
      }).catch(Object).then(function() {
        return (s.validateStatus ? s.validateStatus(e3.status) : e3.ok) ? c : Promise.reject(c);
      });
    });
  }
  return t = t || {}, r.request = r, r.get = function(e2, t2) {
    return r(e2, t2, "get");
  }, r.delete = function(e2, t2) {
    return r(e2, t2, "delete");
  }, r.head = function(e2, t2) {
    return r(e2, t2, "head");
  }, r.options = function(e2, t2) {
    return r(e2, t2, "options");
  }, r.post = function(e2, t2, n2) {
    return r(e2, n2, "post", t2);
  }, r.put = function(e2, t2, n2) {
    return r(e2, n2, "put", t2);
  }, r.patch = function(e2, t2, n2) {
    return r(e2, n2, "patch", t2);
  }, r.all = Promise.all.bind(Promise), r.spread = function(e2) {
    return e2.apply.bind(e2, e2);
  }, r.CancelToken = "function" == typeof AbortController ? AbortController : Object, r.defaults = t, r.create = e, r;
}();

// src/bridge/StargateV2Bus.ts
var bigIntSchema = z.z.string().transform((value) => {
  try {
    return BigInt(value);
  } catch (error) {
    return value;
  }
}).pipe(z.z.bigint());
var passengerSchema = z.z.object({
  sender: z.z.string(),
  receiver: z.z.string(),
  ticketId: bigIntSchema,
  assetId: z.z.number(),
  asset: z.z.string(),
  amountSD: bigIntSchema,
  rideStatus: z.z.string(),
  txHash: z.z.string(),
  blockNumber: z.z.number(),
  timestamp: z.z.number(),
  nativeDrop: z.z.boolean(),
  passengerBytes: z.z.string()
});
var path = z.z.object({
  srcEid: z.z.number(),
  dstEid: z.z.number(),
  srcChainKey: z.z.string(),
  dstChainKey: z.z.string()
});
var busSchema = path.extend({
  bus: z.z.object({
    busId: z.z.string(),
    guid: z.z.string(),
    timestamp: z.z.number(),
    txHash: z.z.string()
  })
});
var queueSchema = path.extend({
  queue: z.z.object({
    currentBusParams: z.z.object({
      capacity: z.z.number()
    }),
    passengers: passengerSchema.array()
  })
});
var busQueueSchema = z.z.discriminatedUnion("inQueue", [
  queueSchema.extend({
    bus: z.z.undefined().optional(),
    inQueue: z.z.literal(true)
  }),
  busSchema.extend({
    queue: z.z.undefined().optional(),
    inQueue: z.z.literal(false)
  })
]);
var busDriveSettingsSchema = z.z.object({
  // expressed in ms
  maxWaitTime: z.z.number().transform((ms) => ({ seconds: ms / 1e3 })),
  passengersToDrive: z.z.number()
});
var StargateV2Bus = class {
  constructor(config, providerFactory) {
    this.config = config;
    this.providerFactory = providerFactory;
    this.http = redaxios_module_default.create({ baseURL: config.api.url });
  }
  http;
  supportsPath(path2) {
    return !!this.tryGetDeployment(path2.srcChainKey) && !!this.tryGetDeployment(path2.dstChainKey);
  }
  async quoteDriveBus(input) {
    if (input.queue.passengers.length === 0) {
      throw new StargateV2NoPassengersError(input);
    }
    const messaging = this.getTokenMessagingContract(input.srcChainKey);
    const capacity = input.queue.currentBusParams.capacity;
    const passengers = input.queue.passengers.slice(0, capacity);
    const passengerBytes = this.getPassengerBytes(passengers);
    const fee = await messaging.quoteDriveBus(input.dstEid, passengerBytes);
    return uiCore.MessageFee.from(input.srcChainKey, {
      nativeFee: fee.nativeFee.toBigInt(),
      zroFee: fee.nativeFee.toBigInt()
    });
  }
  async getQueueByPath(path2) {
    const srcEid = this.chainKeyToEid(path2.srcChainKey);
    const dstEid = this.chainKeyToEid(path2.dstChainKey);
    const response = await this.http.get(`v1/buses/queue/${srcEid}/${dstEid}`);
    const queue = queueSchema.parse(this.fixQueue(response.data, path2));
    return this.fixChainKey(queue);
  }
  async getBusDriveSettings(path2) {
    const srcEid = this.chainKeyToEid(path2.srcChainKey);
    const dstEid = this.chainKeyToEid(path2.dstChainKey);
    const response = await this.http.get(`v1/buses/bus-drive-settings/${srcEid}/${dstEid}`);
    const busDriveSettings = busDriveSettingsSchema.parse(response.data);
    return busDriveSettings;
  }
  async getBusByTxHash(input) {
    const response = await this.http.get(`v1/buses/bus-queue/${input.txHash}`);
    const [bus] = busQueueSchema.array().length(1).parse(response.data);
    return this.fixChainKey(bus);
  }
  chainKeyToEid(chainKey) {
    return this.getDeployment(chainKey).eid;
  }
  // todo: remove when API is fixed
  fixQueue(queue, path2) {
    return {
      ...queue,
      srcChainKey: path2.srcChainKey,
      dstChainKey: path2.dstChainKey,
      srcEid: this.chainKeyToEid(path2.srcChainKey),
      dstEid: this.chainKeyToEid(path2.dstChainKey)
    };
  }
  // todo: remove when API is fixed
  fixChainKey(data) {
    return {
      ...data,
      srcChainKey: this.eidToChainKey(data.srcEid),
      dstChainKey: this.eidToChainKey(data.dstEid)
    };
  }
  // todo: this method should not be required
  // it exists only because sandbox bus API returns invalid chainKey
  eidToChainKey(eid) {
    for (const [key, deployment] of Object.entries(this.config.deployments)) {
      if (deployment.eid === eid)
        return key;
    }
    throw new Error(`No chain key found for eid ${eid}`);
  }
  getTokenMessagingContract(chainKey) {
    const address = this.getDeployment(chainKey).tokenMessaging.address;
    const provider = this.providerFactory(chainKey);
    return chunkJF5TKISX_cjs.TokenMessaging__factory.connect(address, provider);
  }
  tryGetDeployment(chainKey) {
    return this.config.deployments[chainKey];
  }
  getDeployment(chainKey) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment)
      return deployment;
    throw new Error(`No deployment found for ${chainKey}`);
  }
  getPassengerBytes(passengers) {
    const header = "0x";
    const passengerBytes = passengers.map((data) => data.passengerBytes).map((p) => p.replace("0x", "")).join("");
    return header + passengerBytes;
  }
  async driveBus(input) {
    const chainKey = input.chainKey;
    const messaging = this.getTokenMessagingContract(chainKey);
    const bus = await this.getBusByTxHash({ txHash: input.txHash });
    if (!bus.inQueue)
      throw new StargateV2BusDrivenError(bus);
    const passengersBytes = this.getPassengerBytes(bus.queue.passengers);
    const value = input.fee.nativeFee.toBigInt();
    const populatedTransaction = messaging.populateTransaction.driveBus(
      bus.dstEid,
      passengersBytes,
      { value }
    );
    return uiEvm.createTransaction(populatedTransaction, { provider: messaging.provider, chainKey });
  }
};
var StargateV2NoPassengersError = class extends Error {
  constructor(data) {
    super("No passengers in queue");
    this.data = data;
  }
};
var StargateV2BusDrivenError = class extends Error {
  constructor(data) {
    super("Bus already driven");
    this.data = data;
  }
};

// src/types/SendMode.ts
var SendMode = /* @__PURE__ */ ((SendMode2) => {
  SendMode2[SendMode2["TAXI"] = 0] = "TAXI";
  SendMode2[SendMode2["BUS"] = 1] = "BUS";
  SendMode2[SendMode2["DRIVE"] = 2] = "DRIVE";
  return SendMode2;
})(SendMode || {});

// src/types/OftCmd.ts
var OftCmd = class {
  constructor(sendMode, passengers) {
    this.sendMode = sendMode;
    this.passengers = passengers;
  }
  toBytes() {
    if (this.sendMode === 0 /* TAXI */) {
      return "0x";
    } else if (this.sendMode === 2 /* DRIVE */) {
      const passengerBytes = this.passengers.map(
        (p) => ethers.utils.solidityPack(["bytes32", "uint64"], [p.address, p.amount]).replace("0x", "")
      ).join("");
      return "0x" + passengerBytes;
    } else {
      return ethers.utils.solidityPack(["uint8"], [this.sendMode]);
    }
  }
};

// src/bridge/StargateV2Bridge.ts
var StargateV2Bridge = class {
  constructor(config, getProvider, erc20 = new uiEvm.ERC20__api(getProvider)) {
    this.config = config;
    this.getProvider = getProvider;
    this.erc20 = erc20;
    this.updatePaths();
  }
  // supported paths
  paths = [];
  async getOptions(input) {
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const nativeDropAmount = await this.getBusNativeDropAmount({ srcChainKey, dstChainKey });
    const busOption = {
      mode: "bus",
      nativeDrop: {
        maxAmount: nativeDropAmount,
        isFixed: true
      }
    };
    const taxiOption = {
      mode: "taxi"
    };
    return {
      options: [taxiOption, busOption]
    };
  }
  updatePaths() {
    this.paths = [];
    for (const srcChainKey in this.config.deployments) {
      for (const dstChainKey in this.config.deployments) {
        if (srcChainKey === dstChainKey)
          continue;
        this.paths.push({
          srcToken: this.config.deployments[srcChainKey].token,
          dstToken: this.config.deployments[dstChainKey].token
        });
      }
    }
  }
  tryGetDeployment(chainKey) {
    const deployment = this.config.deployments[chainKey];
    return deployment;
  }
  getDeployment(chainKey) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment)
      return deployment;
    throw new Error(`Deployment not found for chain ${chainKey}`);
  }
  validateInput(input) {
    v1.validateInput(input);
    if (!this.supportsTransfer(input.srcToken, input.dstToken)) {
      throw new Error(
        `Unsupported transfer from ${input.srcToken.symbol} to ${input.dstToken.symbol}`
      );
    }
  }
  chainKeyToEid(chainKey) {
    return this.getDeployment(chainKey).eid;
  }
  // todo: verify if we can just use one contract
  getBridgeContract(chainKey) {
    const deployment = this.getDeployment(chainKey);
    const provider = this.getProvider(chainKey);
    if (deployment.stargatePoolNative) {
      return chunkJF5TKISX_cjs.StargatePoolNative__factory.connect(deployment.stargatePoolNative.address, provider);
    }
    if (deployment.stargatePool) {
      return chunkJF5TKISX_cjs.StargatePool__factory.connect(deployment.stargatePool.address, provider);
    }
    if (deployment.stargateOft) {
      return chunkJF5TKISX_cjs.StargateOFT__factory.connect(deployment.stargateOft.address, provider);
    }
    throw new Error("No pool or oft contract found");
  }
  getTokenMessagingContract(chainKey) {
    const deployment = this.getDeployment(chainKey);
    const provider = this.getProvider(chainKey);
    return chunkJF5TKISX_cjs.TokenMessaging__factory.connect(deployment.tokenMessaging.address, provider);
  }
  supportsClaim(token) {
    return this.supportsRegister(token);
  }
  supportsRegister(token) {
    const deployment = this.tryGetDeployment(token.chainKey);
    if (!deployment)
      return false;
    return deployment.token.equals(token);
  }
  supportsTransfer(srcToken, dstToken) {
    const srcDeployment = this.tryGetDeployment(srcToken.chainKey);
    if (!srcDeployment)
      return false;
    const dstDeployment = this.tryGetDeployment(dstToken.chainKey);
    if (!dstDeployment)
      return false;
    if (!srcDeployment.token.equals(srcToken))
      return false;
    if (!dstDeployment.token.equals(dstToken))
      return false;
    return srcDeployment.eid !== dstDeployment.eid;
  }
  toSendMode(mode) {
    if (mode === void 0)
      throw new Error("Mode is undefined");
    if (mode === "taxi")
      return 0 /* TAXI */;
    if (mode === "bus")
      return 1 /* BUS */;
    throw new Error(`Unsupported mode: ${mode}`);
  }
  async getMessageFee(input) {
    const sendMode = this.toSendMode(input.mode);
    const oftCmd = new OftCmd(sendMode, []);
    const srcToken = input.srcToken;
    const dstToken = input.dstToken;
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const dstEid = this.chainKeyToEid(dstChainKey);
    const bridge = this.getBridgeContract(srcChainKey);
    const srcAmount = uiCore.parseCurrencyAmount(srcToken, "1");
    const dstAmountMin = uiCore.parseCurrencyAmount(dstToken, "0");
    const adapterParams = input.adapterParams;
    const dstAddress = uiEvm.ONE_ADDRESS;
    const sendParam = this.buildSendParam(
      {
        dstAddress,
        srcAmount,
        dstChainKey,
        dstAmountMin,
        adapterParams
      },
      oftCmd
    );
    const validateDstNativeAmountAsync = async () => {
      const requestedAmount = input.adapterParams.dstNativeAmount?.toBigInt() ?? BigInt(0);
      if (sendMode !== 1 /* BUS */)
        return;
      if (requestedAmount === BigInt(0))
        return;
      const tokenMessagingContract = this.getTokenMessagingContract(srcChainKey);
      const configuredAmount_ = await tokenMessagingContract.nativeDropAmounts(dstEid);
      const configuredAmount = configuredAmount_.toBigInt();
      if (requestedAmount !== configuredAmount) {
        throw new StargateV2BusDstNativeAmountError(requestedAmount, configuredAmount);
      }
    };
    const [sendQuote] = await Promise.all([
      bridge.quoteSend(sendParam, false),
      validateDstNativeAmountAsync()
    ]);
    return uiCore.MessageFee.from(srcChainKey, {
      nativeFee: sendQuote.nativeFee.toBigInt(),
      zroFee: sendQuote.lzTokenFee.toBigInt()
    });
  }
  async getOutput(input) {
    const sendMode = 0 /* TAXI */;
    const oftCmd = new OftCmd(sendMode, []);
    const srcToken = input.srcAmount.token;
    const dstToken = input.dstToken;
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const srcAmount = input.srcAmount;
    const dstAmountMin = input.dstAmountMin ?? uiCore.parseCurrencyAmount(dstToken, "0");
    const dstAddress = input.dstAddress ?? uiEvm.ONE_ADDRESS;
    const adapterParams = uiCore.AdapterParams.forV1(0);
    const _sendParam = this.buildSendParam(
      {
        srcAmount,
        dstAmountMin,
        dstAddress,
        dstChainKey,
        adapterParams
      },
      oftCmd
    );
    const contract = this.getBridgeContract(srcChainKey);
    const quote = await contract.quoteOFT(_sendParam);
    const amountReceivedLD = uiCore.CurrencyAmount.fromBigInt(
      srcToken,
      quote.receipt.amountReceivedLD.toBigInt()
    );
    const amountReceivedRD = uiCore.castCurrencyAmountUnsafe(amountReceivedLD, dstToken);
    const fee = {};
    for (const feeDetail of quote.oftFeeDetails) {
      const amount = uiCore.CurrencyAmount.fromBigInt(srcToken, feeDetail.feeAmountLD.toBigInt());
      fee[feeDetail.description] = amount;
    }
    const output = {
      fee,
      dstAmount: amountReceivedRD
    };
    return output;
  }
  getDuration(input) {
    throw new Error("Method not implemented.");
  }
  async getLimit(input) {
    const sendMode = 0 /* TAXI */;
    const oftCmd = new OftCmd(sendMode, []);
    const srcToken = input.srcToken;
    const dstToken = input.dstToken;
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const srcAmount = uiCore.CurrencyAmount.fromBigInt(srcToken, MAX_64_BIT_INT);
    const dstAmountMin = uiCore.CurrencyAmount.fromBigInt(dstToken, BigInt(0));
    const dstAddress = uiEvm.ONE_ADDRESS;
    const adapterParams = uiCore.AdapterParams.forV1(0);
    const sendParam = this.buildSendParam(
      {
        srcAmount,
        dstAmountMin,
        dstAddress,
        dstChainKey,
        adapterParams
      },
      oftCmd
    );
    const contract = this.getBridgeContract(srcChainKey);
    const quote = await contract.quoteOFT(sendParam);
    const maxAmountLD = uiCore.CurrencyAmount.fromBigInt(srcToken, quote.limit.maxAmountLD.toBigInt());
    return maxAmountLD;
  }
  async getExtraGas(input) {
    return 0;
  }
  async getAllowance(input) {
    if (uiCore.isNativeCurrency(input.token)) {
      return uiCore.CurrencyAmount.fromBigInt(input.token, uiCore.MaxUint256);
    }
    const chainKey = input.token.chainKey;
    const bridge = this.getBridgeContract(chainKey);
    return this.erc20.forToken(input.token).allowance(input.address, bridge.address);
  }
  getUnclaimed(input) {
    throw new Error("Method not implemented.");
  }
  async isRegistered(input) {
    return true;
  }
  async transfer(input) {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const sendMode = this.toSendMode(input.mode);
    const oftCmd = new OftCmd(sendMode, []);
    if (sendMode === 2 /* DRIVE */)
      throw new Error("Drive mode not supported");
    const provider = this.getProvider(input.srcChainKey);
    const from = input.srcAddress;
    const value = uiCore.isNativeCurrency(input.srcToken) ? input.srcAmount.add(input.fee.nativeFee).quotient : input.fee.nativeFee.quotient;
    const sendParam = this.buildSendParam(input, oftCmd);
    const fee = this.buildMessagingFee(input);
    const refundAddress = input.srcAddress;
    const bridge = this.getBridgeContract(input.srcChainKey);
    const populatedTransaction = await bridge.populateTransaction.send(
      sendParam,
      fee,
      refundAddress,
      {
        from,
        value
      }
    );
    return uiEvm.createTransaction(populatedTransaction, { provider, chainKey: srcChainKey });
  }
  buildMessagingFee(input) {
    return {
      lzTokenFee: input.fee.zroFee.quotient,
      nativeFee: input.fee.nativeFee.quotient
    };
  }
  async getBusNativeDropAmount({
    srcChainKey,
    dstChainKey
  }) {
    const dstEid = this.chainKeyToEid(dstChainKey);
    const nativeDrop_ = await this.getTokenMessagingContract(srcChainKey).nativeDropAmounts(dstEid);
    const nativeDrop = uiCore.CurrencyAmount.fromBigInt(
      uiCore.getNativeCurrency(srcChainKey),
      nativeDrop_.toBigInt()
    );
    return nativeDrop;
  }
  // dev: this method does NOT ensure that nativeDrop amount is valid
  serializeOptions(oftCmd, adapterParams) {
    if (isNativeDrop(adapterParams)) {
      if (oftCmd.sendMode === 0 /* TAXI */) {
        const options = uiEvm.Options.newOptions().addExecutorNativeDropOption(
          adapterParams.dstNativeAmount.quotient,
          adapterParams.dstNativeAddress
        );
        return options.toBytes();
      }
      if (oftCmd.sendMode === 1 /* BUS */) {
        if (adapterParams.dstNativeAmount.greaterThan(0)) {
          const OPTIONS_TYPE = 1;
          return ethers.utils.arrayify(ethers.utils.solidityPack(["uint16", "uint8"], [OPTIONS_TYPE, 1]));
        }
      }
    }
    return ethers.utils.arrayify("0x");
  }
  buildSendParam(input, oftCmd) {
    const srcToken = input.srcAmount.token;
    const dstEid = this.chainKeyToEid(input.dstChainKey);
    const composeMsg = ethers.utils.arrayify("0x");
    const extraOptions = this.serializeOptions(oftCmd, input.adapterParams);
    const to = ethers.utils.hexlify(uiEvm.addressToBytes32(input.dstAddress));
    const amountLD = input.srcAmount.quotient;
    const minAmountLD = uiCore.castCurrencyAmountUnsafe(input.dstAmountMin, srcToken).quotient;
    return {
      amountLD,
      to,
      dstEid,
      composeMsg,
      extraOptions,
      minAmountLD,
      oftCmd: oftCmd.toBytes()
    };
  }
  claim(input) {
    throw new Error("Method not implemented.");
  }
  register(register) {
    throw new Error("Method not implemented.");
  }
  approve(input) {
    const srcChainKey = input.amount.token.chainKey;
    uiCore.assertToken(input.amount.token);
    const bridge = this.getBridgeContract(srcChainKey);
    return this.erc20.forToken(input.amount.token).approve(input.amount, bridge.address);
  }
};
var MAX_64_BIT_INT = BigInt("18446744073709551615");
function isNativeDrop(adapterParams) {
  return Boolean(
    adapterParams.version === 2 && adapterParams.dstNativeAmount?.greaterThan(0) && adapterParams.dstNativeAddress
  );
}
var StargateV2BusDstNativeAmountError = class extends Error {
  constructor(requestedAmount, configuredAmount) {
    super(
      `Invalid dst native amount: requested ${requestedAmount}, but bus is configured to ${configuredAmount}`
    );
    this.requestedAmount = requestedAmount;
    this.configuredAmount = configuredAmount;
  }
};

// src/types/MsgType.ts
var MsgType = /* @__PURE__ */ ((MsgType2) => {
  MsgType2[MsgType2["SEND_TOKEN"] = 0] = "SEND_TOKEN";
  MsgType2[MsgType2["SEND_CREDIT"] = 1] = "SEND_CREDIT";
  return MsgType2;
})(MsgType || {});

// src/types/StargateV2AssetId.ts
var StargateV2AssetId = {
  1: "USDC",
  2: "USDT",
  13: "ETH",
  17: "METIS",
  22: "mETH"
};
var _abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
var OFTToken__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi, signerOrProvider);
  }
};
chunkJF5TKISX_cjs.__publicField(OFTToken__factory, "abi", _abi);

exports.ETH_MAINNET = ETH_MAINNET;
exports.ETH_SANDBOX = ETH_SANDBOX;
exports.ETH_TESTNET = ETH_TESTNET;
exports.METH_MAINNET = METH_MAINNET;
exports.METIS_MAINNET = METIS_MAINNET;
exports.MsgType = MsgType;
exports.OFTToken__factory = OFTToken__factory;
exports.OftCmd = OftCmd;
exports.STARGATE_V2_STAKING_MAINNET = STARGATE_V2_STAKING_MAINNET;
exports.STARGATE_V2_STAKING_SANDBOX = STARGATE_V2_STAKING_SANDBOX;
exports.STARGATE_V2_STAKING_TESTNET = STARGATE_V2_STAKING_TESTNET;
exports.SendMode = SendMode;
exports.StargateV2AssetId = StargateV2AssetId;
exports.StargateV2Bridge = StargateV2Bridge;
exports.StargateV2Bus = StargateV2Bus;
exports.StargateV2BusDrivenError = StargateV2BusDrivenError;
exports.StargateV2BusDstNativeAmountError = StargateV2BusDstNativeAmountError;
exports.StargateV2NoPassengersError = StargateV2NoPassengersError;
exports.TOKEN_MESSAGING_MAINNET = TOKEN_MESSAGING_MAINNET;
exports.TOKEN_MESSAGING_SANDBOX = TOKEN_MESSAGING_SANDBOX;
exports.TOKEN_MESSAGING_TESTNET = TOKEN_MESSAGING_TESTNET;
exports.USDC_MAINNET = USDC_MAINNET;
exports.USDC_SANDBOX = USDC_SANDBOX;
exports.USDC_TESTNET = USDC_TESTNET;
exports.USDT_MAINNET = USDT_MAINNET;
exports.USDT_SANDBOX = USDT_SANDBOX;
exports.USDT_TESTNET = USDT_TESTNET;
exports.createConfig = createConfig;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map