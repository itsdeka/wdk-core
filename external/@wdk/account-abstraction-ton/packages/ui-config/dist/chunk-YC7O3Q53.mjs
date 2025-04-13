// src/networks.ts
var networks = [
  {
    name: "Solana",
    shortName: "Solana",
    chainKey: "solana",
    chainType: "solana",
    nativeChainId: 1,
    nativeCurrency: {
      name: "SOL",
      symbol: "SOL",
      decimals: 9
    }
  },
  {
    name: "Solana Testnet",
    shortName: "Solana testnet",
    chainKey: "solana-testnet",
    chainType: "solana",
    nativeChainId: 2,
    nativeCurrency: {
      name: "SOL",
      symbol: "SOL",
      decimals: 9
    }
  },
  {
    name: "Solana Sandbox",
    shortName: "Solana sandbox",
    chainKey: "solana-sandbox",
    chainType: "solana",
    nativeChainId: 3,
    nativeCurrency: {
      name: "SOL",
      symbol: "SOL",
      decimals: 9
    }
  },
  {
    name: "Ethereum",
    shortName: "Ethereum",
    chainKey: "ethereum",
    chainType: "evm",
    nativeChainId: 1,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Rinkeby Testnet",
    shortName: "Rinkeby",
    chainKey: "rinkeby",
    chainType: "evm",
    nativeChainId: 4,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Goerli",
    shortName: "goerli",
    chainKey: "goerli",
    chainType: "evm",
    nativeChainId: 5,
    nativeCurrency: {
      name: "GoerliETH",
      symbol: "GoerliETH",
      decimals: 18
    }
  },
  {
    name: "BNB Chain",
    shortName: "BNB",
    chainKey: "bsc",
    chainType: "evm",
    nativeChainId: 56,
    nativeCurrency: {
      symbol: "BNB",
      name: "BNB",
      decimals: 18
    }
  },
  {
    name: "Binance Test Chain",
    shortName: "BNB",
    chainKey: "bsc-testnet",
    chainType: "evm",
    nativeChainId: 97,
    nativeCurrency: {
      symbol: "BNB",
      name: "BNB",
      decimals: 18
    }
  },
  {
    name: "Polygon",
    shortName: "Polygon",
    chainKey: "polygon",
    chainType: "evm",
    nativeChainId: 137,
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    }
  },
  {
    name: "Mumbai",
    shortName: "Matic",
    chainKey: "mumbai",
    chainType: "evm",
    nativeChainId: 80001,
    nativeCurrency: {
      symbol: "MATIC",
      name: "MATIC",
      decimals: 18
    }
  },
  {
    name: "Avalanche",
    shortName: "Avalanche",
    chainKey: "avalanche",
    chainType: "evm",
    nativeChainId: 43114,
    nativeCurrency: {
      name: "Avalanche Token",
      symbol: "AVAX",
      decimals: 18
    }
  },
  {
    name: "Fuji",
    shortName: "Avalanche",
    chainKey: "fuji",
    chainType: "evm",
    nativeChainId: 43113,
    nativeCurrency: {
      name: "Avalanche Token",
      symbol: "AVAX",
      decimals: 18
    }
  },
  {
    name: "Fantom",
    shortName: "Fantom",
    chainKey: "fantom",
    chainType: "evm",
    nativeChainId: 250,
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18
    }
  },
  {
    name: "Fantom Testnet",
    shortName: "Fantom",
    chainKey: "fantom-testnet",
    chainType: "evm",
    nativeChainId: 4002,
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18
    }
  },
  {
    name: "Arbitrum",
    shortName: "Arbitrum",
    chainKey: "arbitrum",
    chainType: "evm",
    nativeChainId: 42161,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Arbitrum Goerli",
    shortName: "Arbitrum",
    chainKey: "arbitrum-goerli",
    chainType: "evm",
    nativeChainId: 421613,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Arbitrum Rinkeby",
    shortName: "Arbitrum",
    chainKey: "arbitrum-rinkeby",
    chainType: "evm",
    nativeChainId: 421611,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Optimism",
    shortName: "Optimism",
    chainKey: "optimism",
    chainType: "evm",
    nativeChainId: 10,
    nativeCurrency: {
      symbol: "ETH",
      name: "ETH",
      decimals: 18
    }
  },
  {
    name: "Optimism Kovan",
    shortName: "Optimism",
    chainKey: "optimism-kovan",
    chainType: "evm",
    nativeChainId: 69,
    nativeCurrency: {
      symbol: "ETH",
      name: "ETH",
      decimals: 18
    }
  },
  {
    name: "Optimism Goerli",
    shortName: "Optimism",
    chainKey: "optimism-goerli",
    chainType: "evm",
    nativeChainId: 420,
    nativeCurrency: {
      symbol: "ETH",
      name: "ETH",
      decimals: 18
    }
  },
  {
    name: "Swimmer",
    shortName: "Swimmer",
    chainKey: "swimmer",
    chainType: "evm",
    nativeChainId: 0,
    nativeCurrency: {
      symbol: "TUS",
      name: "TUS",
      decimals: 18
    }
  },
  {
    name: "DFK",
    shortName: "dfk",
    chainKey: "dfk",
    chainType: "evm",
    nativeChainId: 53935,
    nativeCurrency: {
      symbol: "JEWEL",
      name: "JEWEL",
      decimals: 18
    }
  },
  {
    name: "Harmony",
    shortName: "harmony",
    chainKey: "harmony",
    chainType: "evm",
    nativeChainId: 16666e5,
    nativeCurrency: {
      symbol: "ONE",
      name: "ONE",
      decimals: 18
    }
  },
  {
    name: "Aptos",
    shortName: "Aptos",
    chainKey: "aptos",
    chainType: "aptos",
    nativeChainId: 1,
    nativeCurrency: {
      symbol: "APT",
      name: "AptosCoin",
      decimals: 8,
      address: "0x1::aptos_coin::AptosCoin"
    }
  },
  {
    name: "Aptos Testnet",
    shortName: "Aptos",
    chainKey: "aptos-testnet",
    chainType: "aptos",
    nativeChainId: 2,
    nativeCurrency: {
      symbol: "APT",
      name: "AptosCoin",
      decimals: 8,
      address: "0x1::aptos_coin::AptosCoin"
    }
  },
  {
    name: "Moonbeam",
    shortName: "moonbeam",
    chainKey: "moonbeam",
    chainType: "evm",
    nativeChainId: 1284,
    nativeCurrency: {
      symbol: "GLMR",
      name: "GLMR",
      decimals: 18
    }
  },
  {
    name: "Metis",
    shortName: "Metis",
    chainKey: "metis",
    chainType: "evm",
    nativeChainId: 1088,
    nativeCurrency: {
      symbol: "METIS",
      name: "METIS",
      decimals: 18
    }
  },
  {
    name: "Metis",
    shortName: "Metis",
    chainKey: "metis-goerli",
    chainType: "evm",
    nativeChainId: 599,
    nativeCurrency: {
      symbol: "METIS",
      name: "METIS",
      decimals: 18
    }
  },
  {
    name: "DFK Chain Test",
    shortName: "DFK",
    chainKey: "dfk-testnet",
    chainType: "evm",
    nativeChainId: 335,
    nativeCurrency: {
      decimals: 18,
      symbol: "JEWEL",
      name: "Jewel"
    }
  },
  {
    name: "Harmony Testnet Shard 0",
    shortName: "Harmony",
    chainKey: "harmony-testnet",
    chainType: "evm",
    nativeChainId: 16667e5,
    nativeCurrency: {
      decimals: 18,
      symbol: "ONE",
      name: "ONE"
    }
  },
  {
    name: "Dexalot Subnet Testnet",
    shortName: "DEXALOT",
    chainKey: "dexalot-testnet",
    chainType: "evm",
    nativeChainId: 432201,
    nativeCurrency: {
      decimals: 18,
      symbol: "ALOT",
      name: "Dexalot"
    }
  },
  {
    name: "Kovan",
    shortName: "kov",
    chainKey: "kovan",
    chainType: "evm",
    nativeChainId: 42,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Kovan Ether"
    }
  },
  {
    name: "Gnosis Chiado Testnet",
    shortName: "OGC",
    chainKey: "chiado",
    chainType: "evm",
    nativeChainId: 300,
    nativeCurrency: {
      decimals: 18,
      symbol: "xDAI",
      name: "xDAI"
    }
  },
  {
    name: "Celo Mainnet",
    shortName: "CELO",
    chainKey: "celo",
    chainType: "evm",
    nativeChainId: 42220,
    nativeCurrency: {
      decimals: 18,
      symbol: "CELO",
      name: "CELO"
    }
  },
  {
    name: "Celo Alfajores Testnet",
    shortName: "CELO",
    chainKey: "alfajores",
    chainType: "evm",
    nativeChainId: 44787,
    nativeCurrency: {
      decimals: 18,
      symbol: "CELO",
      name: "CELO"
    }
  },
  {
    name: "Moonbase Alpha",
    shortName: "MOON",
    chainKey: "moonbase",
    chainType: "evm",
    nativeChainId: 1287,
    nativeCurrency: {
      decimals: 18,
      symbol: "DEV",
      name: "Dev"
    }
  },
  {
    name: "Boba Network",
    shortName: "Boba",
    chainKey: "boba",
    chainType: "evm",
    nativeChainId: 288,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Boba Network Rinkeby Testnet",
    shortName: "BobaRinkeby",
    chainKey: "boba-rinkeby",
    chainType: "evm",
    nativeChainId: 28,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Portal Fantasy Chain Test",
    shortName: "PF",
    chainKey: "portal-fantasy-testnet",
    chainType: "evm",
    nativeChainId: 808,
    nativeCurrency: {
      decimals: 18,
      symbol: "PFT",
      name: "Portal Fantasy Token"
    }
  },
  {
    name: "Aurora",
    shortName: "NEAR",
    chainKey: "aurora",
    chainType: "evm",
    nativeChainId: 1313161554,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Aurora Testnet",
    shortName: "NEAR",
    chainKey: "aurora-testnet",
    chainType: "evm",
    nativeChainId: 1313161555,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Astar",
    shortName: "ASTR",
    chainKey: "astar",
    chainType: "evm",
    nativeChainId: 592,
    nativeCurrency: {
      decimals: 18,
      symbol: "ASTR",
      name: "Astar"
    }
  },
  {
    name: "Core Blockchain Mainnet",
    shortName: "Core",
    chainKey: "coredao",
    chainType: "evm",
    nativeChainId: 1116,
    nativeCurrency: {
      decimals: 18,
      symbol: "CORE",
      name: "Core Blockchain Native Token"
    }
  },
  {
    name: "CoreDAO Testnet",
    shortName: "Core",
    chainKey: "coredao-testnet",
    chainType: "evm",
    nativeChainId: 1115,
    nativeCurrency: {
      decimals: 18,
      symbol: "tCORE",
      name: "Core Blockchain Testnet Native Token"
    }
  },
  {
    name: "Dexalot Subnet",
    shortName: "DEXALOT",
    chainKey: "dexalot",
    chainType: "evm",
    nativeChainId: 432204,
    nativeCurrency: {
      decimals: 18,
      symbol: "ALOT",
      name: "Dexalot"
    }
  },
  {
    name: "DOS Chain",
    shortName: "DOS",
    chainKey: "dos",
    chainType: "evm",
    nativeChainId: 7979,
    nativeCurrency: {
      decimals: 18,
      symbol: "DOS",
      name: "DOS"
    }
  },
  {
    name: "DOS Tesnet",
    shortName: "DOS",
    chainKey: "dos-testnet",
    chainType: "evm",
    nativeChainId: 3939,
    nativeCurrency: {
      decimals: 18,
      symbol: "DOS",
      name: "DOS"
    }
  },
  {
    name: "Fuse Mainnet",
    shortName: "FUSE",
    chainKey: "fuse",
    chainType: "evm",
    nativeChainId: 122,
    nativeCurrency: {
      decimals: 18,
      symbol: "FUSE",
      name: "Fuse"
    }
  },
  {
    name: "Gnosis",
    shortName: "GNO",
    chainKey: "gnosis",
    chainType: "evm",
    nativeChainId: 100,
    nativeCurrency: {
      decimals: 18,
      symbol: "xDAI",
      name: "xDAI"
    }
  },
  {
    name: "Goerli",
    shortName: "Goerli",
    chainKey: "goerli",
    chainType: "evm",
    nativeChainId: 5,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Goerli Ether"
    }
  },
  {
    name: "Kaia",
    shortName: "Kaia",
    chainKey: "klaytn",
    chainType: "evm",
    nativeChainId: 8217,
    nativeCurrency: {
      decimals: 18,
      symbol: "KLAY",
      name: "KLAY"
    }
  },
  {
    name: "Kaia Testnet Kairos",
    shortName: "Kaia",
    chainKey: "klaytn-baobab",
    chainType: "evm",
    nativeChainId: 1001,
    nativeCurrency: {
      decimals: 18,
      symbol: "KLAY",
      name: "KLAY"
    }
  },
  {
    name: "Meter Mainnet",
    shortName: "METER",
    chainKey: "meter",
    chainType: "evm",
    nativeChainId: 82,
    nativeCurrency: {
      decimals: 18,
      symbol: "MTR",
      name: "Meter"
    }
  },
  {
    name: "Meter Testnet",
    shortName: "METER Testnet",
    chainKey: "meter-testnet",
    chainType: "evm",
    nativeChainId: 83,
    nativeCurrency: {
      decimals: 18,
      symbol: "MTR",
      name: "Meter"
    }
  },
  {
    name: "Moonriver",
    shortName: "MOON",
    chainKey: "moonriver",
    chainType: "evm",
    nativeChainId: 1285,
    nativeCurrency: {
      decimals: 18,
      symbol: "MOVR",
      name: "Moonriver"
    }
  },
  {
    name: "OKXChain Mainnet",
    shortName: "okxchain",
    chainKey: "okx",
    chainType: "evm",
    nativeChainId: 66,
    nativeCurrency: {
      decimals: 18,
      symbol: "OKT",
      name: "OKXChain Global Utility Token"
    }
  },
  {
    name: "Sepolia",
    shortName: "sep",
    chainKey: "sepolia",
    chainType: "evm",
    nativeChainId: 11155111,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Sepolia Ether"
    }
  },
  {
    name: "zkSync Era",
    shortName: "zkSync",
    chainKey: "zksync",
    chainType: "evm",
    nativeChainId: 324,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "zkSync Era Testnet",
    shortName: "zkSync-goerli",
    chainKey: "zksync-testnet",
    chainType: "evm",
    nativeChainId: 280,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Base Testnet",
    shortName: "Base",
    chainKey: "base-goerli",
    chainType: "evm",
    nativeChainId: 84531,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Shrapnel Subnet",
    shortName: "Shrapnel",
    chainKey: "shrapnel",
    chainType: "evm",
    nativeChainId: 2044,
    nativeCurrency: {
      decimals: 18,
      symbol: "SHRAPG",
      name: "Shrapnel Gas Token"
    }
  },
  {
    name: "Tenet",
    shortName: "tenet",
    chainKey: "tenet",
    chainType: "evm",
    nativeChainId: 1559,
    nativeCurrency: {
      decimals: 18,
      symbol: "TENET",
      name: "TENET"
    }
  },
  {
    name: "Tenet Testnet",
    shortName: "tenet-testnet",
    chainKey: "tenet-testnet",
    chainType: "evm",
    nativeChainId: 155,
    nativeCurrency: {
      decimals: 18,
      symbol: "TENET",
      name: "TENET"
    }
  },
  {
    name: "Polygon zkEVM",
    shortName: "zkEVM",
    chainKey: "zkevm",
    chainType: "evm",
    nativeChainId: 1101,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Polygon zkEVM Testnet",
    shortName: "testnet-zkEVM-mango",
    chainKey: "zkevm-testnet",
    chainType: "evm",
    nativeChainId: 1442,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Canto",
    shortName: "canto",
    chainKey: "canto",
    chainType: "evm",
    nativeChainId: 7700,
    nativeCurrency: {
      decimals: 18,
      symbol: "CANTO",
      name: "Canto"
    }
  },
  {
    name: "Canto Testnet",
    shortName: "tcanto",
    chainKey: "canto-testnet",
    chainType: "evm",
    nativeChainId: 740,
    nativeCurrency: {
      decimals: 18,
      symbol: "CANTO",
      name: "Canto"
    }
  },
  {
    name: "Arbitrum Nova",
    shortName: "arb-nova",
    chainKey: "nova",
    chainType: "evm",
    nativeChainId: 42170,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Kava",
    shortName: "Kava",
    chainKey: "kava",
    chainType: "evm",
    nativeChainId: 2222,
    nativeCurrency: {
      name: "Kava",
      symbol: "KAVA",
      decimals: 18
    }
  },
  {
    name: "Kava Testnet",
    shortName: "Kava testnet",
    chainKey: "kava-testnet",
    chainType: "evm",
    nativeChainId: 2221,
    nativeCurrency: {
      name: "TKava",
      symbol: "TKAVA",
      decimals: 18
    }
  },
  {
    name: "Base",
    shortName: "Base",
    chainKey: "base",
    chainType: "evm",
    nativeChainId: 8453,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Base Testnet",
    shortName: "Base Testnet",
    chainKey: "base-goerli",
    chainType: "evm",
    nativeChainId: 84531,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Linea Testnet",
    shortName: "linea-testnet",
    chainKey: "linea-goerli",
    chainType: "evm",
    nativeChainId: 59140,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Linea Ether"
    }
  },
  {
    name: "Linea",
    shortName: "Linea",
    chainKey: "linea",
    chainType: "evm",
    nativeChainId: 59144,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Linea Ether"
    }
  },
  {
    name: "Mantle",
    shortName: "Mantle",
    chainKey: "mantle",
    chainType: "evm",
    nativeChainId: 5e3,
    nativeCurrency: {
      decimals: 18,
      symbol: "MNT",
      name: "Mantle"
    }
  },
  {
    name: "Mantle Testnet",
    shortName: "Mantle",
    chainKey: "mantle-testnet",
    chainType: "evm",
    nativeChainId: 5001,
    nativeCurrency: {
      decimals: 18,
      symbol: "MNT",
      name: "Mantle"
    }
  },
  {
    name: "Beam",
    shortName: "BEAM",
    chainKey: "beam",
    chainType: "evm",
    nativeChainId: 4337,
    nativeCurrency: {
      name: "Beam",
      symbol: "BEAM",
      decimals: 18
    }
  },
  {
    name: "Beam Testnet",
    shortName: "BEAM",
    chainKey: "beam-testnet",
    chainType: "evm",
    nativeChainId: 13337,
    nativeCurrency: {
      name: "Beam",
      symbol: "BEAM",
      decimals: 18
    }
  },
  {
    name: "OKX Testnet",
    shortName: "tokt",
    chainKey: "okx-testnet",
    chainType: "evm",
    nativeChainId: 65,
    nativeCurrency: {
      decimals: 18,
      symbol: "OKT",
      name: "OKExChain Global Utility Token in testnet"
    }
  },
  {
    name: "Scroll Sepolia Testnet",
    shortName: "scr-alpha",
    chainKey: "scroll-testnet",
    chainType: "evm",
    nativeChainId: 534353,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Zora",
    shortName: "zora",
    chainKey: "zora",
    chainType: "evm",
    nativeChainId: 7777777,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "TelosEVM",
    shortName: "TelosEVM",
    chainKey: "telos",
    chainType: "evm",
    nativeChainId: 40,
    nativeCurrency: {
      decimals: 18,
      symbol: "TLOS",
      name: "Telos"
    }
  },
  {
    name: "Telos EVM Testnet",
    shortName: "TelosEVMTestnet",
    chainKey: "telos-testnet",
    chainType: "evm",
    nativeChainId: 41,
    nativeCurrency: {
      decimals: 18,
      symbol: "TLOS",
      name: "Telos"
    }
  },
  {
    name: "Conflux Testnet",
    shortName: "cfxtest",
    chainKey: "conflux-testnet",
    chainType: "evm",
    nativeChainId: 71,
    nativeCurrency: {
      decimals: 18,
      symbol: "CFX",
      name: "CFX"
    }
  },
  {
    name: "opBNB",
    shortName: "opBNB",
    chainKey: "opbnb",
    chainType: "evm",
    nativeChainId: 204,
    nativeCurrency: {
      decimals: 18,
      symbol: "BNB",
      name: "BNB Chain Native Token"
    }
  },
  {
    name: "Conflux eSpace",
    shortName: "cfx",
    chainKey: "conflux",
    chainType: "evm",
    nativeChainId: 1030,
    nativeCurrency: {
      decimals: 18,
      symbol: "CFX",
      name: "CFX"
    }
  },
  {
    name: "opBNB Testnet",
    shortName: "obnbt",
    chainKey: "opbnb-testnet",
    chainType: "evm",
    nativeChainId: 5611,
    nativeCurrency: {
      decimals: 18,
      symbol: "tBNB",
      name: "BNB Chain Native Token"
    }
  },
  {
    name: "Scroll",
    shortName: "Scroll",
    chainKey: "scroll",
    chainType: "evm",
    nativeChainId: 534352,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Orderly Mainnet",
    shortName: "Orderly",
    chainKey: "orderly",
    chainType: "evm",
    nativeChainId: 291,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Astar EVM Testnet",
    shortName: "astar-testnet",
    chainKey: "astar-testnet",
    chainType: "evm",
    nativeChainId: 81,
    nativeCurrency: {
      decimals: 18,
      symbol: "ASTR",
      name: "Astar"
    }
  },
  {
    name: "Canto Tesnet",
    shortName: "TestnetCanto",
    chainKey: "canto-testnet",
    chainType: "evm",
    nativeChainId: 7701,
    nativeCurrency: {
      decimals: 18,
      symbol: "CANTO",
      name: "Testnet Canto"
    }
  },
  {
    name: "Horizen EON Mainnet",
    shortName: "EON",
    chainKey: "eon",
    chainType: "evm",
    nativeChainId: 7332,
    nativeCurrency: {
      decimals: 18,
      symbol: "ZEN",
      name: "Zencash"
    }
  },
  {
    name: "Horizen Gobi Testnet",
    shortName: "Gobi",
    chainKey: "eon-testnet",
    chainType: "evm",
    nativeChainId: 1663,
    nativeCurrency: {
      decimals: 18,
      symbol: "tZEN",
      name: "Testnet Zen"
    }
  },
  {
    name: "Frame Testnet",
    shortName: "frametest",
    chainKey: "frame-testnet",
    chainType: "evm",
    nativeChainId: 68840142,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Sepolia Ether"
    }
  },
  {
    name: "Gnosis Chiado Testnet",
    shortName: "chi",
    chainKey: "chiado",
    chainType: "evm",
    nativeChainId: 10200,
    nativeCurrency: {
      decimals: 18,
      symbol: "XDAI",
      name: "Chiado xDAI"
    }
  },
  {
    name: "Harmony Devnet Shard 0",
    shortName: "hmy-ps-s0",
    chainKey: "harmony-testnet",
    chainType: "evm",
    nativeChainId: 16669e5,
    nativeCurrency: {
      decimals: 18,
      symbol: "ONE",
      name: "ONE"
    }
  },
  {
    name: "Holesky",
    shortName: "holesky",
    chainKey: "holesky-testnet",
    chainType: "evm",
    nativeChainId: 17e3,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Testnet ETH"
    }
  },
  {
    name: "Kiwi Subnet",
    shortName: "kiwi",
    chainKey: "kiwi-testnet",
    chainType: "evm",
    nativeChainId: 2037,
    nativeCurrency: {
      decimals: 18,
      symbol: "SHRAP",
      name: "Shrapgas"
    }
  },
  {
    name: "Mode",
    shortName: "Mode",
    chainKey: "mode",
    chainType: "evm",
    nativeChainId: 34443,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Blast",
    shortName: "Blast",
    chainKey: "blast",
    chainType: "evm",
    nativeChainId: 81457,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Manta",
    shortName: "manta",
    chainKey: "manta",
    chainType: "evm",
    nativeChainId: 169,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Manta Pacific Testnet",
    shortName: "mantaTestnet",
    chainKey: "manta-testnet",
    chainType: "evm",
    nativeChainId: 3441005,
    nativeCurrency: {
      decimals: 18,
      symbol: "MANTA",
      name: "Manta"
    }
  },
  {
    name: "Cronos Mainnet",
    shortName: "cro",
    chainKey: "oda-testnet",
    chainType: "evm",
    nativeChainId: 25,
    nativeCurrency: {
      decimals: 18,
      symbol: "CRO",
      name: "Cronos"
    }
  },
  {
    name: "Orderly Sepolia Testnet",
    shortName: "orderlyl2",
    chainKey: "orderly-testnet",
    chainType: "evm",
    nativeChainId: 4460,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Sepolia Ether"
    }
  },
  {
    name: "PGN (Public Goods Network)",
    shortName: "PGN",
    chainKey: "pgn",
    chainType: "evm",
    nativeChainId: 424,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Sepolia PGN (Public Goods Network)",
    shortName: "sepPGN",
    chainKey: "pgn-testnet",
    chainType: "evm",
    nativeChainId: 58008,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Sepolia Ether"
    }
  },
  {
    name: "Scroll Sepolia Testnet",
    shortName: "scr-sepolia",
    chainKey: "scroll-testnet",
    chainType: "evm",
    nativeChainId: 534351,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "ShimmerEVM Testnet",
    shortName: "shimmerevm-testnet",
    chainKey: "shimmer-testnet",
    chainType: "evm",
    nativeChainId: 1072,
    nativeCurrency: {
      decimals: 6,
      symbol: "SMR",
      name: "SMR"
    }
  },
  {
    name: "Shrapnel Testnet",
    shortName: "shraptest",
    chainKey: "shrapnel-testnet",
    chainType: "evm",
    nativeChainId: 2038,
    nativeCurrency: {
      decimals: 18,
      symbol: "SHRAPG",
      name: "SHRAPG"
    }
  },
  {
    name: "Fastex Chain testnet",
    shortName: "fastexTestnet",
    chainKey: "spruce-testnet",
    chainType: "evm",
    nativeChainId: 424242,
    nativeCurrency: {
      decimals: 18,
      symbol: "FTN",
      name: "FTN"
    }
  },
  {
    name: "Viction",
    shortName: "tomo",
    chainKey: "tomo",
    chainType: "evm",
    nativeChainId: 88,
    nativeCurrency: {
      decimals: 18,
      symbol: "TOMO",
      name: "TomoChain"
    }
  },
  {
    name: "Viction Testnet",
    shortName: "tomot",
    chainKey: "tomo-testnet",
    chainType: "evm",
    nativeChainId: 89,
    nativeCurrency: {
      decimals: 18,
      symbol: "TOMO",
      name: "TomoChain"
    }
  },
  {
    name: "XPLA Mainnet",
    shortName: "xpla",
    chainKey: "xpla",
    chainType: "evm",
    nativeChainId: 37,
    nativeCurrency: {
      decimals: 18,
      symbol: "XPLA",
      name: "XPLA"
    }
  },
  {
    name: "Acria IntelliChain",
    shortName: "aic",
    chainKey: "xpla-testnet",
    chainType: "evm",
    nativeChainId: 47,
    nativeCurrency: {
      decimals: 18,
      symbol: "ACRIA",
      name: "ACRIA"
    }
  },
  {
    name: "zKatana",
    shortName: "azktn",
    chainKey: "zkatana-testnet",
    chainType: "evm",
    nativeChainId: 1261120,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Sepolia Ether"
    }
  },
  {
    name: "Wanchain Testnet",
    shortName: "twan",
    chainKey: "zora-testnet",
    chainType: "evm",
    nativeChainId: 999,
    nativeCurrency: {
      decimals: 18,
      symbol: "WAN",
      name: "Wancoin"
    }
  },
  {
    name: "Injective",
    shortName: "inj",
    chainKey: "bb1",
    chainType: "evm",
    nativeChainId: 2525,
    nativeCurrency: {
      decimals: 18,
      symbol: "INJ",
      name: "INJ"
    }
  },
  {
    name: "Tron",
    shortName: "Tron",
    chainKey: "tron",
    chainType: "tron",
    nativeChainId: 1e3,
    nativeCurrency: {
      decimals: 6,
      symbol: "TRX",
      name: "Tronix"
    }
  },
  {
    name: "Tron Testnet",
    shortName: "Tron Testnet",
    chainKey: "tron-testnet",
    chainType: "tron",
    nativeChainId: 1001,
    nativeCurrency: {
      decimals: 6,
      symbol: "TRX",
      name: "Tronix"
    }
  },
  {
    name: "Astar zkEVM",
    shortName: "zkatana",
    chainKey: "zkatana",
    chainType: "evm",
    nativeChainId: 3776,
    nativeCurrency: {
      decimals: 18,
      symbol: "ASTR",
      name: "Astar"
    }
  },
  {
    name: "Japan Open Chain Testnet",
    shortName: "joc-testnet",
    chainKey: "joc-testnet",
    chainType: "evm",
    nativeChainId: 10081,
    nativeCurrency: {
      decimals: 18,
      symbol: "JOCT",
      name: "JOCT"
    }
  },
  {
    name: "Polygon zkEVM Sepolia",
    shortName: "zkpolygon-sepolia",
    chainKey: "zkpolygon-sepolia",
    chainType: "evm",
    nativeChainId: 2442,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "ETH"
    }
  },
  {
    name: "Berachain Testnet",
    shortName: "bera-testnet",
    chainKey: "bera-testnet",
    chainType: "evm",
    nativeChainId: 80085,
    nativeCurrency: {
      decimals: 18,
      symbol: "BERA",
      name: "BERA"
    }
  },
  {
    name: "Arbitrum Sepolia Testnet",
    shortName: "Arbitrum Sepolia",
    chainKey: "arbitrum-sepolia",
    chainType: "evm",
    nativeChainId: 421614,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "Optimism Sepolia",
    shortName: "OP Sepolia",
    chainKey: "optimism-sepolia",
    chainType: "evm",
    nativeChainId: 11155420,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  {
    name: "XChain Testnet",
    shortName: "XChain Testnet",
    chainKey: "xchain-testnet",
    chainType: "evm",
    nativeChainId: 671276500,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "Ether"
    }
  },
  // sandbox chains
  {
    name: "Polygon Sandbox",
    shortName: "Polygon Sandbox",
    chainType: "evm",
    nativeChainId: 8891137,
    chainKey: "polygon-sandbox",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    }
  },
  {
    name: "Ethereum Sandbox",
    shortName: "Ethereum Sandbox",
    chainType: "evm",
    nativeChainId: 88911,
    chainKey: "ethereum-sandbox",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Metis Sandbox",
    shortName: "Metis Sandbox",
    chainType: "evm",
    nativeChainId: 88911088,
    chainKey: "metis-sandbox",
    nativeCurrency: {
      name: "METIS",
      symbol: "METIS",
      decimals: 18
    }
  },
  {
    name: "BSC Sandbox",
    shortName: "BSC Sandbox",
    chainType: "evm",
    nativeChainId: 889156,
    chainKey: "bsc-sandbox",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18
    }
  },
  {
    name: "Fraxtal",
    shortName: "Fraxtal",
    chainType: "evm",
    nativeChainId: 252,
    chainKey: "fraxtal",
    nativeCurrency: {
      name: "frxETH",
      symbol: "frxETH",
      decimals: 18
    }
  },
  {
    name: "EBI",
    shortName: "EBI",
    chainType: "evm",
    nativeChainId: 98881,
    chainKey: "ebi",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "Rari Chain",
    shortName: "Rari",
    chainType: "evm",
    nativeChainId: 1380012617,
    chainKey: "rarible",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "IOTA",
    shortName: "IOTA",
    chainType: "evm",
    nativeChainId: 8822,
    chainKey: "iota",
    nativeCurrency: {
      name: "IOTA",
      symbol: "IOTA",
      decimals: 18
    }
  },
  {
    name: "TAIKO",
    shortName: "TAIKO",
    chainType: "evm",
    chainKey: "taiko",
    nativeChainId: 167e3,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "SEI",
    shortName: "SEI",
    chainType: "evm",
    chainKey: "sei",
    nativeChainId: 1329,
    nativeCurrency: {
      name: "SEI",
      symbol: "SEI",
      decimals: 18
    }
  },
  {
    name: "XCHAIN",
    shortName: "XCHAIN",
    chainKey: "xchain",
    chainType: "evm",
    nativeChainId: 94524,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    }
  },
  {
    name: "X Layer",
    shortName: "X Layer",
    chainKey: "xlayer",
    chainType: "evm",
    nativeChainId: 196,
    nativeCurrency: {
      name: "OKB",
      symbol: "OKB",
      decimals: 18
    }
  },
  {
    name: "Flare",
    shortName: "Flare",
    chainKey: "flare",
    chainType: "evm",
    nativeChainId: 14,
    nativeCurrency: {
      decimals: 18,
      name: "flare",
      symbol: "FLR"
    }
  },
  {
    name: "Gravity",
    shortName: "Gravity",
    chainKey: "gravity",
    chainType: "evm",
    nativeChainId: 1625,
    nativeCurrency: {
      decimals: 18,
      name: "G",
      symbol: "G"
    }
  },
  {
    name: "Ink",
    shortName: "ink",
    chainKey: "ink",
    chainType: "evm",
    nativeChainId: 57073,
    nativeCurrency: {
      decimals: 18,
      symbol: "ETH",
      name: "ETH"
    }
  },
  {
    name: "Ton",
    shortName: "ton",
    chainKey: "ton",
    chainType: "ton",
    nativeChainId: 1625,
    nativeCurrency: {
      decimals: 9,
      symbol: "TON",
      name: "Toncoin"
    }
  },
  {
    name: "Ton Testnet",
    shortName: "ton testnet",
    chainKey: "ton-testnet",
    chainType: "ton",
    nativeChainId: 1625,
    nativeCurrency: {
      decimals: 9,
      symbol: "TON",
      name: "Toncoin"
    }
  },
  {
    name: "Bera",
    shortName: "bera",
    chainKey: "bera",
    chainType: "evm",
    nativeChainId: 80094,
    nativeCurrency: {
      decimals: 18,
      symbol: "BERA",
      name: "BERA"
    }
  },
  {
    name: "Celo",
    shortName: "celo",
    chainKey: "celo",
    chainType: "evm",
    nativeChainId: 57073,
    nativeCurrency: {
      decimals: 18,
      symbol: "CELO",
      name: "CELO"
    }
  }
];

export { networks };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-YC7O3Q53.mjs.map