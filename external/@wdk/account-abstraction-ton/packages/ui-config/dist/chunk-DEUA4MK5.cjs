'use strict';

// config/deploymentsV1.json
var deploymentsV1_default = [
  {
    eid: 274,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "xlayer",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10269,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "xlayer-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 10330,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "ble-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 10262,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "unreal-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10291,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "bartio",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 173,
    endpoint: {
      address: "0x2D61DCDD36F10b22176E0433B86F74567d529aAa"
    },
    chainKey: "tenet",
    stage: "mainnet",
    relayerV2: {
      address: "0xAaB5A48CFC03Efa9cC34A2C1aAcCCB84b4b770e4"
    },
    ultraLightNodeV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    version: 1,
    nonceContract: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    }
  },
  {
    eid: 10173,
    endpoint: {
      address: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab"
    },
    chainKey: "tenet-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    version: 1,
    nonceContract: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    }
  },
  {
    eid: 333,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "rootstock",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10350,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "rootstock-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10234,
    endpoint: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    chainKey: "venn-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    ultraLightNodeV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    version: 1,
    nonceContract: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    }
  },
  {
    ultraLightNode: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    eid: 116,
    relayer: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "harmony",
    stage: "mainnet",
    relayerV2: {
      address: "0x7Cbd185f21bEf4D87310d0171aD5f740BC240e26"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    eid: 10133,
    relayer: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "harmony-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x70D8D48abf1f247969aCEB6B7Fd6b1d2b1937914"
    },
    ultraLightNodeV2: {
      address: "0x012f6eaE2A0Bf5916f48b5F37C62Bcfb7C1ffdA1"
    },
    version: 1,
    nonceContract: {
      address: "0x43E505ba192aaC7BABdC1A796c87844171011684"
    }
  },
  {
    eid: 10361,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "stabledevnet-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 273,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "skale",
    stage: "mainnet",
    relayerV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    ultraLightNodeV2: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10273,
    endpoint: {
      address: "0x988D898a9Acf43f61FDBC72AAD6eB3f0542e19e1"
    },
    chainKey: "skale-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x109ee7A86b861D79756a117CD9E488Dc2FC93C77"
    },
    ultraLightNodeV2: {
      address: "0x14FED032e2dc5cD0a30B6Ba354B646eE1Cc20166"
    },
    version: 1,
    nonceContract: {
      address: "0x2A405322ca96340746c4B4D591FB942448bd8D62"
    }
  },
  {
    ultraLightNode: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    eid: 109,
    relayer: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    endpoint: {
      address: "0x3c2269811836af69497E5F486A85D7316753cf62"
    },
    chainKey: "polygon",
    stage: "mainnet",
    relayerV2: {
      address: "0x75dC8e5F50C8221a82CA6aF64aF811caA983B65f"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0x712516e61C8B383dF4A63CFe83d7701Bce54B03e"
    },
    eid: 20109,
    endpoint: {
      address: "0x8464135c8F25Da09e49BC8782676a84730C318bC"
    },
    chainKey: "polygon-sandbox",
    stage: "sandbox",
    relayerV2: {
      address: "0xF6168876932289D073567f347121A267095f3DD6"
    },
    ultraLightNodeV2: {
      address: "0x59F2f1fCfE2474fD5F0b9BA1E73ca90b143Eb8d0"
    },
    version: 1,
    nonceContract: {
      address: "0xbCF26943C0197d2eE0E5D05c716Be60cc2761508"
    }
  },
  {
    ultraLightNode: {
      address: "0x447214f17a31a76A6b32cD2243Ac4C551e7FB1E7"
    },
    eid: 10109,
    relayer: {
      address: "0xb27c5c80eEFe92591BF784DAC95b7aC3db968e07"
    },
    endpoint: {
      address: "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8"
    },
    chainKey: "mumbai",
    stage: "testnet",
    relayerV2: {
      address: "0x038b6098dA32957f2EbBF6dc743F0DC6810ac8C7"
    },
    ultraLightNodeV2: {
      address: "0x9272eE792c995b90a6d619974876BfFB0d7402fF"
    },
    version: 1,
    nonceContract: {
      address: "0xB3b1f3dB03f7f3A0E49e0F4EEd0fb175B8A2cE15"
    }
  },
  {
    eid: 10335,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "worldcoin-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 279,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "bob",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10279,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "bob-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 311,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "lyra",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10308,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "lyra-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 10328,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "kevnet-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 336,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "flow",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10351,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "flow-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 314,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "bitlayer",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10320,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "bitlayer-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 330,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "islander",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 230,
    endpoint: {
      address: "0xC1b15d3B262bEeC0e3565C11C9e0F6134BdaCB36"
    },
    chainKey: "shimmer",
    stage: "mainnet",
    relayerV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    ultraLightNodeV2: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    },
    version: 1,
    nonceContract: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    }
  },
  {
    eid: 10230,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "shimmer-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    version: 1,
    nonceContract: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    }
  },
  {
    eid: 10208,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "oda-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 10222,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "frame-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 159,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "canto",
    stage: "mainnet",
    relayerV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    ultraLightNodeV2: {
      address: "0xC1b15d3B262bEeC0e3565C11C9e0F6134BdaCB36"
    },
    version: 1,
    nonceContract: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    }
  },
  {
    eid: 10159,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "canto-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    ultraLightNodeV2: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    version: 1,
    nonceContract: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    }
  },
  {
    eid: 339,
    endpoint: {
      address: "0x6b383D6a7e5a151b189147F4c9f39bF57B29548f"
    },
    chainKey: "ink",
    stage: "mainnet",
    relayerV2: {
      address: "0x0b78dBE82d8089d2845F82791b2b37A14ECeF1BE"
    },
    ultraLightNodeV2: {
      address: "0x81a57678343cA220a9029523477715E00e4024bE"
    },
    version: 1,
    nonceContract: {
      address: "0x7Cbd185f21bEf4D87310d0171aD5f740BC240e26"
    }
  },
  {
    eid: 10358,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "ink-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 285,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "joc",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10242,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "joc-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 153,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "coredao",
    stage: "mainnet",
    relayerV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    ultraLightNodeV2: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    version: 1,
    nonceContract: {
      address: "0x2D61DCDD36F10b22176E0433B86F74567d529aAa"
    }
  },
  {
    eid: 10153,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "coredao-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    ultraLightNodeV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    version: 1,
    nonceContract: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    }
  },
  {
    eid: 10337,
    endpoint: {
      address: "0x19f95C8ef1C9F4Aa5166e00F4f99103de44e707f"
    },
    chainKey: "otherworld-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xf9e1815F151024bDE4B7C10BAC10e8Ba9F6b53E1"
    },
    ultraLightNodeV2: {
      address: "0x31E6A5Dc3823Ba46FCAe4d24c576c164eDF739F0"
    },
    version: 1,
    nonceContract: {
      address: "0x35b24D49241FFe21e93b7745411Fc72F06B7e7ce"
    }
  },
  {
    ultraLightNode: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    eid: 112,
    relayer: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "fantom",
    stage: "mainnet",
    relayerV2: {
      address: "0x52EEA5c490fB89c7A0084B32FEAB854eefF07c82"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0x3373EB0b696c12D11d39dd1Be413E6b4Cc2CC23a"
    },
    eid: 10112,
    relayer: {
      address: "0xa6b8Efe1a407DE1441767e4569A5848D78d583F8"
    },
    endpoint: {
      address: "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf"
    },
    chainKey: "fantom-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xDC28c9d36E8Be3A165f123DFc78ED96a5DDEfA6c"
    },
    ultraLightNodeV2: {
      address: "0x54109D468858d8f460587b7B4C1B950c9aB48CBd"
    },
    version: 1,
    nonceContract: {
      address: "0x841834fd73a653AD9Ca75CB0D7A2F3CE7f5c7997"
    }
  },
  {
    eid: 10206,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "spruce-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10295,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "camp-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 278,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "sanko",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10278,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "sanko-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10346,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "bl3-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 10232,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "optimism-sepolia",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 10323,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "ozean-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 10219,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "idex-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 199,
    endpoint: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    chainKey: "telos",
    stage: "mainnet",
    relayerV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    ultraLightNodeV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    version: 1,
    nonceContract: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    }
  },
  {
    eid: 10199,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "telos-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 263,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "masa",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10263,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "masa-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 342,
    endpoint: {
      address: "0xC1b15d3B262bEeC0e3565C11C9e0F6134BdaCB36"
    },
    chainKey: "glue",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    },
    version: 1,
    nonceContract: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    }
  },
  {
    eid: 10296,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "glue-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 313,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "reya",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10319,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "reya-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 214,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "scroll",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10214,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "scroll-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 318,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "plume",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10304,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "plume-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10281,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "botanix-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10267,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "amoy-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 337,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "bl4",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 312,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "ape",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10266,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "zkastar-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 125,
    endpoint: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    chainKey: "celo",
    stage: "mainnet",
    relayerV2: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    ultraLightNodeV2: {
      address: "0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6"
    },
    version: 1,
    nonceContract: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    }
  },
  {
    ultraLightNode: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    eid: 10125,
    relayer: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "alfajores",
    stage: "testnet",
    relayerV2: {
      address: "0xC7Fb9817231f316DD9dfC103d190cef5f3A906D1"
    },
    ultraLightNodeV2: {
      address: "0xc764f011ba8C1663433A92d56A76607AaF03b120"
    },
    version: 1,
    nonceContract: {
      address: "0x35b24D49241FFe21e93b7745411Fc72F06B7e7ce"
    }
  },
  {
    ultraLightNode: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    eid: 101,
    relayer: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    endpoint: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    chainKey: "ethereum",
    stage: "mainnet",
    relayerV2: {
      address: "0x902F09715B6303d4173037652FA7377e5b98089E"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0x712516e61C8B383dF4A63CFe83d7701Bce54B03e"
    },
    eid: 20121,
    endpoint: {
      address: "0x8464135c8F25Da09e49BC8782676a84730C318bC"
    },
    chainKey: "ethereum-sandbox",
    stage: "sandbox",
    relayerV2: {
      address: "0xF6168876932289D073567f347121A267095f3DD6"
    },
    ultraLightNodeV2: {
      address: "0x59F2f1fCfE2474fD5F0b9BA1E73ca90b143Eb8d0"
    },
    version: 1,
    nonceContract: {
      address: "0xbCF26943C0197d2eE0E5D05c716Be60cc2761508"
    }
  },
  {
    ultraLightNode: {
      address: "0x8C608766ACd95d44Cb984DFBaDffFE74B2ef0108"
    },
    eid: 10121,
    relayer: {
      address: "0xfCDcA3003EfA94DcD4C2A2cf2A7c6bB379766cEC"
    },
    endpoint: {
      address: "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23"
    },
    chainKey: "goerli",
    stage: "testnet",
    relayerV2: {
      address: "0xC9b7EDc65488bDBb428526B03935090aef40Ff03"
    },
    ultraLightNodeV2: {
      address: "0x6f3a314C1279148E53f51AF154817C3EF2C827B1"
    },
    version: 1,
    nonceContract: {
      address: "0xe931419cE7f9Ad7Bf9ec8e2657eF6C805A92089c"
    }
  },
  {
    eid: 154,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "goerli",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10331,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "bl2-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 280,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "sei",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10258,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "sei-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 316,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "hedera",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10285,
    endpoint: {
      address: "0xc8B1C4Eb9226b631E95bC61EC5405fC5cBCCf73D"
    },
    chainKey: "hedera-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x99eB7367695C470947B74dd9BE1dBf637CD725DA"
    },
    ultraLightNodeV2: {
      address: "0x097C377077B3Fbac21897c81e411510B9Ab66cb1"
    },
    version: 1,
    nonceContract: {
      address: "0x09C3Ff7DF4f480F329Cbee2Df6F66c9a2e7F5A63"
    }
  },
  {
    eid: 266,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "merlin",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10264,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "merlin-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 363,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "bahamut",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10347,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "bahamut-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 365,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "xdc",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 319,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "worldchain",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 331,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "mp1",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10345,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "mp1-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10252,
    endpoint: {
      address: "0x2ca20802fd1fd9649ba8aa7e50f0c82b479f35fe"
    },
    chainKey: "tangible-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    ultraLightNodeV2: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 362,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "bera",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10256,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "bera-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 420,
    endpoint: {
      address: "0x3f274752b420D1e28CB5516a2b30a1fabBdab0cF"
    },
    chainKey: "tron",
    stage: "mainnet",
    relayerV2: {
      address: "0xA1b1056860cD8c8Dc57f7f73587Ccb6eDbdd660E"
    },
    ultraLightNodeV2: {
      address: "0xc2868Ab0Af30fb32e9ecB4F82E7d27cDFC6FE46c"
    },
    version: 1,
    nonceContract: {
      address: "0xb00962f7f4e655Ded746f6eb9D0B20a09A884dd9"
    }
  },
  {
    ultraLightNode: {
      address: "0x3b55bB408d63dD159B9E5099751bF322D46AAe72"
    },
    eid: 20420,
    endpoint: {
      address: "0xcC985A708f159F089aA7Af55ACDa0529e35c25Dc"
    },
    chainKey: "tron-sandbox",
    stage: "sandbox",
    relayerV2: {
      address: "0x5d5D80ABF34a42935961038F0d06B8FADCEba6E1"
    },
    ultraLightNodeV2: {
      address: "0x35393d55b1c43c35634EEa3a8f3282C4bf719524"
    },
    version: 1,
    nonceContract: {
      address: "0x60D91Fb90Db1a9Bffb28E4CF5bd36163e38A7E19"
    }
  },
  {
    eid: 10420,
    endpoint: {
      address: "0x4808A91d87F231737BF8f0cD049Dc3ac6d9D9f23"
    },
    chainKey: "tron-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x8589a25101c6983C6262B254df6ce75E7c916D12"
    },
    ultraLightNodeV2: {
      address: "0x4a132Df50e7dB69693fF5dD426A9a278a7C1ec6c"
    },
    version: 1,
    nonceContract: {
      address: "0xad6A35347DE92CaF6cBDb079A01437ecCb529944"
    }
  },
  {
    eid: 198,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "beam",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10178,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "beam-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    ultraLightNodeV2: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    version: 1,
    nonceContract: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    }
  },
  {
    eid: 197,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "loot",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10197,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "loot-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 165,
    endpoint: {
      address: "0x9b896c0e23220469C7AE69cb4BbAE391eAa4C8da"
    },
    chainKey: "zksync",
    stage: "mainnet",
    relayerV2: {
      address: "0x9923573104957bF457a3C4DF0e21c8b389Dd43df"
    },
    ultraLightNodeV2: {
      address: "0x042b8289c97896529Ec2FE49ba1A8B9C956A86cC"
    },
    version: 1,
    nonceContract: {
      address: "0xD07671b9C43f6c93020062D3fcb18263c7d6e686"
    }
  },
  {
    eid: 10165,
    endpoint: {
      address: "0x093D2CF57f764f09C3c2Ac58a42A2601B8C79281"
    },
    chainKey: "zksync-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xD5eE0055c37dDfaF7e2e0CA3dECb60f365848Bd5"
    },
    ultraLightNodeV2: {
      address: "0xF636882f80cb5039D80F08cDEee1b166D700091b"
    },
    version: 1,
    nonceContract: {
      address: "0x21bc626E5e97FBF404Fda7e7D808E41A2fA56B60"
    }
  },
  {
    eid: 10277,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "olive-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10245,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "base-sepolia",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 10224,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "polygoncdk-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 175,
    endpoint: {
      address: "0x4EE2F9B7cf3A68966c370F3eb2C16613d3235245"
    },
    chainKey: "nova",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x2D61DCDD36F10b22176E0433B86F74567d529aAa"
    },
    version: 1,
    nonceContract: {
      address: "0xC1b15d3B262bEeC0e3565C11C9e0F6134BdaCB36"
    }
  },
  {
    eid: 10249,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "zora-sepolia",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 309,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "lightlink",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10309,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "lightlink-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 211,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "aurora",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10201,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "aurora-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 255,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "fraxtal",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10255,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "fraxtal-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 329,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "hemi",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10338,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "hemi-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    ultraLightNode: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    eid: 102,
    relayer: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    endpoint: {
      address: "0x3c2269811836af69497E5F486A85D7316753cf62"
    },
    chainKey: "bsc",
    stage: "mainnet",
    relayerV2: {
      address: "0xA27A2cA24DD28Ce14Fb5f5844b59851F03DCf182"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0x712516e61C8B383dF4A63CFe83d7701Bce54B03e"
    },
    eid: 20102,
    endpoint: {
      address: "0x8464135c8F25Da09e49BC8782676a84730C318bC"
    },
    chainKey: "bsc-sandbox",
    stage: "sandbox",
    relayerV2: {
      address: "0xF6168876932289D073567f347121A267095f3DD6"
    },
    ultraLightNodeV2: {
      address: "0x59F2f1fCfE2474fD5F0b9BA1E73ca90b143Eb8d0"
    },
    version: 1,
    nonceContract: {
      address: "0xbCF26943C0197d2eE0E5D05c716Be60cc2761508"
    }
  },
  {
    ultraLightNode: {
      address: "0x0322f521A328475f954F16933a386748f9942ec7"
    },
    eid: 10102,
    relayer: {
      address: "0x74BE2A87a1F089bA3B0d04c7217eE8855d938835"
    },
    endpoint: {
      address: "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1"
    },
    chainKey: "bsc-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xc0eb57BF242f8DD78a1AAA0684b15FAda79B6F85"
    },
    ultraLightNodeV2: {
      address: "0x40380d87B70F07C67Ed724a6ea14432Fe24b72A8"
    },
    version: 1,
    nonceContract: {
      address: "0x318b10788404E23dE2e02d52fA1329BDf6efD1FE"
    }
  },
  {
    eid: 267,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "degen",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 360,
    endpoint: {
      address: "0x042b8289c97896529Ec2FE49ba1A8B9C956A86cC"
    },
    chainKey: "cronoszkevm",
    stage: "mainnet",
    relayerV2: {
      address: "0xA9bE94A90FE454A6bb7f499EA9483173AB5f20C9"
    },
    ultraLightNodeV2: {
      address: "0xFe5DFA6B4d6bE848B57dd378b0798aF60F1E6D35"
    },
    version: 1,
    nonceContract: {
      address: "0xCaEd2710446378AddF3EFDAE0244a77897284354"
    }
  },
  {
    eid: 10360,
    endpoint: {
      address: "0xC6d12200b743A8F7e6b7228B8E920A71d94FA7Fb"
    },
    chainKey: "cronoszkevm-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xcf1Bd69072Be053eb87528A6a5ac20AeC5404755"
    },
    ultraLightNodeV2: {
      address: "0x6dF2A06dF3D40381031456912f5333FbA3cFd471"
    },
    version: 1,
    nonceContract: {
      address: "0xfBa3c4698e99307496CE94D7FAe2ed69169c85f7"
    }
  },
  {
    eid: 182,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "hubble",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10182,
    endpoint: {
      address: "0x8b14D287B4150Ff22Ac73DF8BE720e933f659abc"
    },
    chainKey: "hubble-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    },
    ultraLightNodeV2: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    version: 1,
    nonceContract: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    }
  },
  {
    eid: 176,
    endpoint: {
      address: "0xa3a8e19253Ab400acDac1cB0eA36B88664D8DedF"
    },
    chainKey: "meter",
    stage: "mainnet",
    relayerV2: {
      address: "0x442B4beF4d1dF08EBBFf119538318e21b3C61eB9"
    },
    ultraLightNodeV2: {
      address: "0x0bE3818b1C495Bbd44b6579f6D0A4bea1bCbFf8a"
    },
    version: 1,
    nonceContract: {
      address: "0x33EEc1f46E09a2DAD9068058d6E1E3EC9b94c2CA"
    }
  },
  {
    eid: 10156,
    endpoint: {
      address: "0x3De2f3D1Ac59F18159ebCB422322Cb209BA96aAD"
    },
    chainKey: "meter-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xf35848b061f7b0A4F69BCA8804947e1EE29Ff734"
    },
    ultraLightNodeV2: {
      address: "0x609a373b7A0664C9d6B7FA6F19D5a7fD4344623B"
    },
    version: 1,
    nonceContract: {
      address: "0x0Bbdb40e958a85BdffE725dCB8a8E81D926a9ACF"
    }
  },
  {
    eid: 155,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "okx",
    stage: "mainnet",
    relayerV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    ultraLightNodeV2: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    version: 1,
    nonceContract: {
      address: "0x2D61DCDD36F10b22176E0433B86F74567d529aAa"
    }
  },
  {
    eid: 10155,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "okx-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 284,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "iota",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10307,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "iota-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 10218,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "injective-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 177,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "kava",
    stage: "mainnet",
    relayerV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10172,
    endpoint: {
      address: "0x8b14D287B4150Ff22Ac73DF8BE720e933f659abc"
    },
    chainKey: "kava-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    version: 1,
    nonceContract: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    }
  },
  {
    eid: 10161,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "sepolia",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 161,
    endpoint: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    chainKey: "sepolia",
    stage: "mainnet",
    relayerV2: {
      address: "0x306B9a8953B9462F8b826e6768a93C8EA7454965"
    },
    ultraLightNodeV2: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    version: 1,
    nonceContract: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    }
  },
  {
    eid: 320,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "unichain",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10333,
    endpoint: {
      address: "0x012f6eaE2A0Bf5916f48b5F37C62Bcfb7C1ffdA1"
    },
    chainKey: "unichain-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xF6268056Ce73E997450F42aa79DE88103CfEfd09"
    },
    ultraLightNodeV2: {
      address: "0x70D8D48abf1f247969aCEB6B7Fd6b1d2b1937914"
    },
    version: 1,
    nonceContract: {
      address: "0xEE2fB60deF5788c2B640166d774b0B20759F1e3b"
    }
  },
  {
    eid: 10332,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "hyperliquid-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10344,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "citrea-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    ultraLightNode: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    eid: 126,
    relayer: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "moonbeam",
    stage: "mainnet",
    relayerV2: {
      address: "0xccCDD23E11F3f47C37fC0a7C3BE505901912C6Cc"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    },
    eid: 10126,
    relayer: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    endpoint: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    chainKey: "moonbase",
    stage: "testnet",
    relayerV2: {
      address: "0xf320e721a969808e7339272E968De1659D9D98CE"
    },
    ultraLightNodeV2: {
      address: "0x7c3ebCB6c4Ae99964980006C61d7eb032eDcb06B"
    },
    version: 1,
    nonceContract: {
      address: "0x34bdfEa3b552d6BD9413Be2F60A00819B3B804fE"
    }
  },
  {
    eid: 10272,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "mantasep-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 213,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "orderly",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10200,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "orderly-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 195,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "zora",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10195,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "zora-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10238,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "rc1-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 151,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "metis",
    stage: "mainnet",
    relayerV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10151,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "metis-goerli",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 216,
    endpoint: {
      address: "0xC1b15d3B262bEeC0e3565C11C9e0F6134BdaCB36"
    },
    chainKey: "xpla",
    stage: "mainnet",
    relayerV2: {
      address: "0x4514FC667a944752ee8A29F544c1B20b1A315f25"
    },
    ultraLightNodeV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    version: 1,
    nonceContract: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    }
  },
  {
    eid: 10216,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "xpla-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10298,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "vanguard-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 10271,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "ll1-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10340,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "odyssey-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 10247,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "zkpolygon-sepolia",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 10246,
    endpoint: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    },
    chainKey: "mantle-sepolia",
    stage: "testnet",
    relayerV2: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    ultraLightNodeV2: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    version: 1,
    nonceContract: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    }
  },
  {
    eid: 302,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "peaq",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10299,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "peaq-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 234,
    endpoint: {
      address: "0xC1b15d3B262bEeC0e3565C11C9e0F6134BdaCB36"
    },
    chainKey: "bb1",
    stage: "mainnet",
    relayerV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    ultraLightNodeV2: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    },
    version: 1,
    nonceContract: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    }
  },
  {
    eid: 202,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "opbnb",
    stage: "mainnet",
    relayerV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10202,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "opbnb-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 196,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "tomo",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10196,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "tomo-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    version: 1,
    nonceContract: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    }
  },
  {
    eid: 10339,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "gameswift-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 149,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "dos",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    version: 1,
    nonceContract: {
      address: "0x2D61DCDD36F10b22176E0433B86F74567d529aAa"
    }
  },
  {
    eid: 10162,
    endpoint: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    chainKey: "dos-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    ultraLightNodeV2: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    version: 1,
    nonceContract: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    }
  },
  {
    eid: 237,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "real",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 327,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "superposition",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10336,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "superposition-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 217,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "manta",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10221,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "manta-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 294,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "gravity",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 361,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "goat",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10356,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "goat-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10171,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "cathay-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    ultraLightNodeV2: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    version: 1,
    nonceContract: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    }
  },
  {
    eid: 167,
    endpoint: {
      address: "0x7004396C99D5690da76A7C59057C5f3A53e01704"
    },
    chainKey: "moonriver",
    stage: "mainnet",
    relayerV2: {
      address: "0xe9AE261D3aFf7d3fCCF38Fa2d612DD3897e07B2d"
    },
    ultraLightNodeV2: {
      address: "0xe9ba4c1e76d874a43942718dafc96009ec9d9917"
    },
    version: 1,
    nonceContract: {
      address: "0xC1EC25A9e8a8DE5Aa346f635B33e5B74c4c081aF"
    }
  },
  {
    eid: 145,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "gnosis",
    stage: "mainnet",
    relayerV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10145,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "chiado",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 315,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "dm2verse",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10321,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "dm2verse-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10297,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "opencampus-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10270,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "form-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 236,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "xai",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10251,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "xai-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 322,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "morph",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10322,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "morph-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 183,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "linea",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10157,
    endpoint: {
      address: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab"
    },
    chainKey: "linea-goerli",
    stage: "testnet",
    relayerV2: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    },
    ultraLightNodeV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 10236,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "gunzilla-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 148,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "shrapnel",
    stage: "mainnet",
    relayerV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10164,
    endpoint: {
      address: "0x559DB365a8E7bfb0c59C3f1D53CDD80e0556e7d1"
    },
    chainKey: "shrapnel-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x386A3922470581155c42282801231762E7343802"
    },
    ultraLightNodeV2: {
      address: "0xBa8dF7424dAE9C2CDB4BC1aD2b63ABD97194fDb6"
    },
    version: 1,
    nonceContract: {
      address: "0xf9e1815F151024bDE4B7C10BAC10e8Ba9F6b53E1"
    }
  },
  {
    ultraLightNode: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    eid: 110,
    relayer: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    endpoint: {
      address: "0x3c2269811836af69497E5F486A85D7316753cf62"
    },
    chainKey: "arbitrum",
    stage: "mainnet",
    relayerV2: {
      address: "0x177d36dBE2271A4DdB2Ad8304d82628eb921d790"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0x712516e61C8B383dF4A63CFe83d7701Bce54B03e"
    },
    eid: 20231,
    endpoint: {
      address: "0x8464135c8F25Da09e49BC8782676a84730C318bC"
    },
    chainKey: "arbitrum-sandbox",
    stage: "sandbox",
    relayerV2: {
      address: "0xF6168876932289D073567f347121A267095f3DD6"
    },
    ultraLightNodeV2: {
      address: "0x59F2f1fCfE2474fD5F0b9BA1E73ca90b143Eb8d0"
    },
    version: 1,
    nonceContract: {
      address: "0xbCF26943C0197d2eE0E5D05c716Be60cc2761508"
    }
  },
  {
    ultraLightNode: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    eid: 10143,
    relayer: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    endpoint: {
      address: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab"
    },
    chainKey: "arbitrum-goerli",
    stage: "testnet",
    relayerV2: {
      address: "0x79c2127C2cF1c41cdd0E24e6Ba70b6F3308B7B79"
    },
    ultraLightNodeV2: {
      address: "0xCb78eEfd5fD0fA8DDB0C5e3FbC3bDcCba545Ae67"
    },
    version: 1,
    nonceContract: {
      address: "0x332B8Ad2C9FcdE633b50810d930E737521eF3063"
    }
  },
  {
    eid: 10248,
    endpoint: {
      address: "0x99b6359ce8E0eBdC27eBeDb76FE28F29303E78fF"
    },
    chainKey: "zksync-sepolia",
    stage: "testnet",
    relayerV2: {
      address: "0x9EC2DB700a3c3D35888acCa134F3f860B4a0b41a"
    },
    ultraLightNodeV2: {
      address: "0xC6d12200b743A8F7e6b7228B8E920A71d94FA7Fb"
    },
    version: 1,
    nonceContract: {
      address: "0xeF1505D46Ab6c6282D91885fF652daed5D5eCE7d"
    }
  },
  {
    eid: 138,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "fuse",
    stage: "mainnet",
    relayerV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    ultraLightNode: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    eid: 10138,
    relayer: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "fusespark",
    stage: "testnet",
    relayerV2: {
      address: "0x49Dc09FD01F1d1Abf431CC78e8cE41093F2e7897"
    },
    ultraLightNodeV2: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    version: 1,
    nonceContract: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    }
  },
  {
    eid: 150,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "klaytn",
    stage: "mainnet",
    relayerV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10150,
    endpoint: {
      address: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab"
    },
    chainKey: "klaytn-baobab",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 340,
    endpoint: {
      address: "0xa34F3b68c503e04b1554Bf1C98616De99F1e459D"
    },
    chainKey: "soneium",
    stage: "mainnet",
    relayerV2: {
      address: "0xca29f3A6f966Cb2fc0dE625F8f325c0C46dbE958"
    },
    ultraLightNodeV2: {
      address: "0x9375af50d3aa53eab296ee80667ccd0d72a12a5b"
    },
    version: 1,
    nonceContract: {
      address: "0xcB1ed1e3Cbe261808A02a669bb4398c917DAFB93"
    }
  },
  {
    eid: 10217,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "holesky-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 212,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "conflux",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10211,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "conflux-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 215,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "eon",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10215,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "eon-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10352,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "nibiru-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 323,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "codex",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10311,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "codex-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10334,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "minato-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 359,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "cronosevm",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10359,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "cronosevm-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 292,
    endpoint: {
      address: "0x2D61DCDD36F10b22176E0433B86F74567d529aAa"
    },
    chainKey: "etherlink",
    stage: "mainnet",
    relayerV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    ultraLightNodeV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    version: 1,
    nonceContract: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    }
  },
  {
    eid: 10239,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "etherlink-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    ultraLightNode: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    eid: 115,
    relayer: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "dfk",
    stage: "mainnet",
    relayerV2: {
      address: "0x473132bb594caEF281c68718F4541f73FE14Dc89"
    },
    ultraLightNodeV2: {
      address: "0x658fd63Dca9378e3B7DEb49463D0b25336433F91"
    },
    version: 1,
    nonceContract: {
      address: "0xcB1ed1e3Cbe261808A02a669bb4398c917DAFB93"
    }
  },
  {
    ultraLightNode: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    eid: 10115,
    relayer: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "dfk-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb20992dD0B986f7967E3F66A2482d857D20AE28d"
    },
    ultraLightNodeV2: {
      address: "0xBAfC2d28F386FC632D089a521976C9C078fff96b"
    },
    version: 1,
    nonceContract: {
      address: "0x51EC7F866E322f3f167413A27819a4d6e6A7B824"
    }
  },
  {
    eid: 332,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "sonic",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10349,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "sonic-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10177,
    endpoint: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    chainKey: "blockgen-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    ultraLightNodeV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    version: 1,
    nonceContract: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    }
  },
  {
    eid: 184,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "base",
    stage: "mainnet",
    relayerV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10160,
    endpoint: {
      address: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab"
    },
    chainKey: "base-goerli",
    stage: "testnet",
    relayerV2: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    ultraLightNodeV2: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 324,
    endpoint: {
      address: "0x042b8289c97896529Ec2FE49ba1A8B9C956A86cC"
    },
    chainKey: "abstract",
    stage: "mainnet",
    relayerV2: {
      address: "0xA9bE94A90FE454A6bb7f499EA9483173AB5f20C9"
    },
    ultraLightNodeV2: {
      address: "0xFe5DFA6B4d6bE848B57dd378b0798aF60F1E6D35"
    },
    version: 1,
    nonceContract: {
      address: "0xCaEd2710446378AddF3EFDAE0244a77897284354"
    }
  },
  {
    eid: 10313,
    endpoint: {
      address: "0x68c1B65211c0d2d39Ed04b2b4F0B6f743A168320"
    },
    chainKey: "abstract-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x0e2c52BC2e119b1919e68f4F1874D4d30F6eF9fB"
    },
    ultraLightNodeV2: {
      address: "0x9EC2DB700a3c3D35888acCa134F3f860B4a0b41a"
    },
    version: 1,
    nonceContract: {
      address: "0xF3e37ca248Ff739b8d0BebCcEAe1eeB199223dba"
    }
  },
  {
    eid: 257,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "zkatana",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10220,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "zkatana-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    ultraLightNode: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    eid: 111,
    relayer: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    endpoint: {
      address: "0x3c2269811836af69497E5F486A85D7316753cf62"
    },
    chainKey: "optimism",
    stage: "mainnet",
    relayerV2: {
      address: "0x81E792e5a9003CC1C8BF5569A00f34b65d75b017"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0x712516e61C8B383dF4A63CFe83d7701Bce54B03e"
    },
    eid: 20132,
    endpoint: {
      address: "0x8464135c8F25Da09e49BC8782676a84730C318bC"
    },
    chainKey: "optimism-sandbox",
    stage: "sandbox",
    relayerV2: {
      address: "0xF6168876932289D073567f347121A267095f3DD6"
    },
    ultraLightNodeV2: {
      address: "0x59F2f1fCfE2474fD5F0b9BA1E73ca90b143Eb8d0"
    },
    version: 1,
    nonceContract: {
      address: "0xbCF26943C0197d2eE0E5D05c716Be60cc2761508"
    }
  },
  {
    ultraLightNode: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    eid: 10132,
    relayer: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "optimism-goerli",
    stage: "testnet",
    relayerV2: {
      address: "0x7F417F2192B89Cf93b8c4Ee01d558883A0AD7B47"
    },
    ultraLightNodeV2: {
      address: "0x7343d5c9811FcCb45F64073f0bB7482b37028dc8"
    },
    version: 1,
    nonceContract: {
      address: "0x955412C07d9bC1027eb4d481621ee063bFd9f4C6"
    }
  },
  {
    eid: 118,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "dexalot",
    stage: "mainnet",
    relayerV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    ultraLightNode: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    eid: 10118,
    relayer: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    },
    endpoint: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    chainKey: "dexalot-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x8Ed1fd2B66078d9863327B7e0cc959B5602CFD36"
    },
    ultraLightNodeV2: {
      address: "0x317A1603eda8092C3F70144b4203691Fbbf7A4C2"
    },
    version: 1,
    nonceContract: {
      address: "0x580161DaA6e16251Cbc8457A2cf5eE02c373f45A"
    }
  },
  {
    eid: 10191,
    endpoint: {
      address: "0xfeBE4c839EFA9f506C092a32fD0BB546B76A1d38"
    },
    chainKey: "aavegotchi-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x9Fc33fBBDEA0e188baA1770aF6Ca2bC38bDA65d6"
    },
    ultraLightNodeV2: {
      address: "0xCEd04bDbe89441458398c7f9d228Ca9C62b8A8BA"
    },
    version: 1,
    nonceContract: {
      address: "0x6f7443320Ec82B24a9DbBc347eB2ecF1498E6b8F"
    }
  },
  {
    eid: 10354,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "memecoreformicarium-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 10329,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "plume2-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 364,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "story",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10315,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "story-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 282,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "ebi",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10284,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "ebi-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 290,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "taiko",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10274,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "taiko-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10209,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "kiwi-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    version: 1,
    nonceContract: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    }
  },
  {
    eid: 238,
    endpoint: {
      address: "0x41DEf8bE011678c9663D850d3C89CbA9450d5496"
    },
    chainKey: "tiltyard",
    stage: "mainnet",
    relayerV2: {
      address: "0xC768298144100c0F0a700Be755886c90FA7B0849"
    },
    ultraLightNodeV2: {
      address: "0x4bB746ED0DF6A8be563Ff66dFc502f084779F9c9"
    },
    version: 1,
    nonceContract: {
      address: "0xbB2753C1B940363d278c81D6402fA89E79Ab4ebc"
    }
  },
  {
    eid: 334,
    endpoint: {
      address: "0x042b8289c97896529Ec2FE49ba1A8B9C956A86cC"
    },
    chainKey: "sophon",
    stage: "mainnet",
    relayerV2: {
      address: "0xA9bE94A90FE454A6bb7f499EA9483173AB5f20C9"
    },
    ultraLightNodeV2: {
      address: "0xFe5DFA6B4d6bE848B57dd378b0798aF60F1E6D35"
    },
    version: 1,
    nonceContract: {
      address: "0xCaEd2710446378AddF3EFDAE0244a77897284354"
    }
  },
  {
    eid: 10341,
    endpoint: {
      address: "0xC6d12200b743A8F7e6b7228B8E920A71d94FA7Fb"
    },
    chainKey: "sophon-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xcf1Bd69072Be053eb87528A6a5ac20AeC5404755"
    },
    ultraLightNodeV2: {
      address: "0x6dF2A06dF3D40381031456912f5333FbA3cFd471"
    },
    version: 1,
    nonceContract: {
      address: "0xfBa3c4698e99307496CE94D7FAe2ed69169c85f7"
    }
  },
  {
    eid: 10348,
    endpoint: {
      address: "0xC6d12200b743A8F7e6b7228B8E920A71d94FA7Fb"
    },
    chainKey: "treasure-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xcf1Bd69072Be053eb87528A6a5ac20AeC5404755"
    },
    ultraLightNodeV2: {
      address: "0x6dF2A06dF3D40381031456912f5333FbA3cFd471"
    },
    version: 1,
    nonceContract: {
      address: "0xfBa3c4698e99307496CE94D7FAe2ed69169c85f7"
    }
  },
  {
    eid: 10292,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "metissep-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 338,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "bl5",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10241,
    endpoint: {
      address: "0x8eB4FBFD3342538d4d2dbb7225eC2000ae1a1C50"
    },
    chainKey: "kiwi2-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x07103c37D3dF31746444491Bc3E1d81dE6c7FF61"
    },
    ultraLightNodeV2: {
      address: "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23"
    },
    version: 1,
    nonceContract: {
      address: "0xbE275d432BBFFbD2111DB16884320C4DEed1C8BD"
    }
  },
  {
    eid: 10207,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "pgjjtk-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 301,
    endpoint: {
      address: "0x042b8289c97896529Ec2FE49ba1A8B9C956A86cC"
    },
    chainKey: "zklink",
    stage: "mainnet",
    relayerV2: {
      address: "0xA9bE94A90FE454A6bb7f499EA9483173AB5f20C9"
    },
    ultraLightNodeV2: {
      address: "0xFe5DFA6B4d6bE848B57dd378b0798aF60F1E6D35"
    },
    version: 1,
    nonceContract: {
      address: "0xCaEd2710446378AddF3EFDAE0244a77897284354"
    }
  },
  {
    eid: 10283,
    endpoint: {
      address: "0xC6d12200b743A8F7e6b7228B8E920A71d94FA7Fb"
    },
    chainKey: "zklink-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xcf1Bd69072Be053eb87528A6a5ac20AeC5404755"
    },
    ultraLightNodeV2: {
      address: "0x6dF2A06dF3D40381031456912f5333FbA3cFd471"
    },
    version: 1,
    nonceContract: {
      address: "0xfBa3c4698e99307496CE94D7FAe2ed69169c85f7"
    }
  },
  {
    eid: 108,
    endpoint: {
      address: "0x54ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e90"
    },
    chainKey: "aptos",
    stage: "mainnet",
    version: 1,
    relayerV2: {
      address: "0x1d8727df513fa2a8785d0834e40b34223daff1affc079574082baadb74b66ee4"
    }
  },
  {
    eid: 10108,
    endpoint: {
      address: "0x1759cc0d3161f1eb79f65847d4feb9d1f74fb79014698a23b16b28b9cd4c37e3"
    },
    chainKey: "aptos-testnet",
    stage: "testnet",
    version: 1,
    relayerV2: {
      address: "0xc192864c4215741051321d44f89c3b7a54840a0b1b7ef5bec6149a07f9df4641"
    }
  },
  {
    eid: 10231,
    endpoint: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    chainKey: "arbitrum-sepolia",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x88866E5A296FffA511EF8011CB1BBd4d01Cd094F"
    },
    version: 1,
    nonceContract: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    }
  },
  {
    eid: 321,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "lisk",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10327,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "lisk-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 293,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "bouncebit",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10289,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "bouncebit-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10286,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "lineasep-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10357,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "bl6-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 10355,
    endpoint: {
      address: "0x4e08B1F1AC79898569CfB999FB92B5495FB18A2B"
    },
    chainKey: "apexfusionnexus-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    ultraLightNodeV2: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    },
    version: 1,
    nonceContract: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    }
  },
  {
    eid: 335,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "swell",
    stage: "mainnet",
    relayerV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    ultraLightNodeV2: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    },
    version: 1,
    nonceContract: {
      address: "0xC1b15d3B262bEeC0e3565C11C9e0F6134BdaCB36"
    }
  },
  {
    eid: 10353,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "swell-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 328,
    endpoint: {
      address: "0x2D61DCDD36F10b22176E0433B86F74567d529aAa"
    },
    chainKey: "edu",
    stage: "mainnet",
    relayerV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    ultraLightNodeV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    version: 1,
    nonceContract: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    }
  },
  {
    eid: 295,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "flare",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10294,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "flare-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 10300,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "lif3-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10301,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "fi-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 265,
    endpoint: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    chainKey: "homeverse",
    stage: "mainnet",
    relayerV2: {
      address: "0x8bC1e36F015b9902B54b1387A4d733cebc2f5A4e"
    },
    ultraLightNodeV2: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    version: 1,
    nonceContract: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    }
  },
  {
    eid: 10265,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "homeverse-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10342,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "moksha-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 235,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "rarible",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10235,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "rarible-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10259,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "exocore-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 341,
    endpoint: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    chainKey: "space",
    stage: "mainnet",
    relayerV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    ultraLightNodeV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    version: 1,
    nonceContract: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    }
  },
  {
    eid: 10288,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "besu1-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 210,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "astar",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10210,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "astar-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 260,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "mode",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10260,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "mode-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 243,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "blast",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66a71dcef29a0ffbdbe3c6a460a3b5bc225cd675"
    }
  },
  {
    eid: 10243,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "blast-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 303,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "zircuit",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10275,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "zircuit-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 291,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "xchain",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10282,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "xchain-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 317,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "bevm",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10324,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "bevm-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 152,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "intain",
    stage: "mainnet",
    relayerV2: {
      address: "0x5B19bd330A84c049b62D5B0FC2bA120217a18C1C"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10152,
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "intain-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    ultraLightNode: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    eid: 114,
    relayer: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "swimmer",
    stage: "mainnet",
    relayerV2: {
      address: "0x174F2bA26f8ADeAfA82663bcf908288d5DbCa649"
    },
    ultraLightNodeV2: {
      address: "0xbB2753C1B940363d278c81D6402fA89E79Ab4ebc"
    },
    version: 1,
    nonceContract: {
      address: "0x76111DE813F83AAAdBD62773Bf41247634e2319a"
    }
  },
  {
    ultraLightNode: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    },
    eid: 10130,
    relayer: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    endpoint: {
      address: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"
    },
    chainKey: "swimmer-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x7F417F2192B89Cf93b8c4Ee01d558883A0AD7B47"
    },
    ultraLightNodeV2: {
      address: "0x7343d5c9811FcCb45F64073f0bB7482b37028dc8"
    },
    version: 1,
    nonceContract: {
      address: "0x955412C07d9bC1027eb4d481621ee063bFd9f4C6"
    }
  },
  {
    eid: 10318,
    endpoint: {
      address: "0x6271e24A43cCB1509FBDC22284Ab6176237562EE"
    },
    chainKey: "root-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0xc8B1C4Eb9226b631E95bC61EC5405fC5cBCCf73D"
    },
    ultraLightNodeV2: {
      address: "0x47ab7f3810bBfEe745C1097E0bf16D0ebf2677D9"
    },
    version: 1,
    nonceContract: {
      address: "0xEcB1a167A93D04DbB13AF56244cdd5c0B3B1853c"
    }
  },
  {
    ultraLightNode: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    },
    eid: 106,
    relayer: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    endpoint: {
      address: "0x3c2269811836af69497E5F486A85D7316753cf62"
    },
    chainKey: "avalanche",
    stage: "mainnet",
    relayerV2: {
      address: "0xCD2E3622d483C7Dc855F72e5eafAdCD577ac78B4"
    },
    ultraLightNodeV2: {
      address: "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
    },
    version: 1,
    nonceContract: {
      address: "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
    }
  },
  {
    ultraLightNode: {
      address: "0x0848B8AD17D4003dDe1f1B7eF1FdBA4B629Da97e"
    },
    eid: 10106,
    relayer: {
      address: "0xd035e64324bc470ee872062D508DA9c2772f14b5"
    },
    endpoint: {
      address: "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706"
    },
    chainKey: "fuji",
    stage: "testnet",
    relayerV2: {
      address: "0xA30444B26C171B27c6B3698544490Affa2e12119"
    },
    ultraLightNodeV2: {
      address: "0xfDDAFFa49e71dA3ef0419a303a6888F94bB5Ba18"
    },
    version: 1,
    nonceContract: {
      address: "0xB401d261F971E550FAeE4Bb0D28f92a30E812105"
    }
  },
  {
    eid: 158,
    endpoint: {
      address: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4"
    },
    chainKey: "zkevm",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    },
    version: 1,
    nonceContract: {
      address: "0x2D61DCDD36F10b22176E0433B86F74567d529aAa"
    }
  },
  {
    eid: 10158,
    endpoint: {
      address: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab"
    },
    chainKey: "zkevm-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    },
    ultraLightNodeV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  },
  {
    eid: 218,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "pgn",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10223,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "pgn-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10204,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "monad-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 283,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "cyber",
    stage: "mainnet",
    relayerV2: {
      address: "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10280,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "cyber-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 10306,
    endpoint: {
      address: "0x83c73Da98cf733B03315aFa8758834b36a195b87"
    },
    chainKey: "curtis-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x35AdD9321507A87471a11EBd4aE4f592d531e620"
    },
    ultraLightNodeV2: {
      address: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8"
    },
    version: 1,
    nonceContract: {
      address: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3"
    }
  },
  {
    eid: 181,
    endpoint: {
      address: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7"
    },
    chainKey: "mantle",
    stage: "mainnet",
    relayerV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    ultraLightNodeV2: {
      address: "0x38dE71124f7a447a01D67945a51eDcE9FF491251"
    },
    version: 1,
    nonceContract: {
      address: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
    }
  },
  {
    eid: 10181,
    endpoint: {
      address: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
    },
    chainKey: "mantle-testnet",
    stage: "testnet",
    relayerV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    ultraLightNodeV2: {
      address: "0x533fB43e6808D9634CC0DD0c6c1195e8921D4FCC"
    },
    version: 1,
    nonceContract: {
      address: "0x89acA20831317c6dff2A348a1e4f3D37a48bC498"
    }
  }
];

// config/deploymentsV2.json
var deploymentsV2_default = [
  {
    eid: 30274,
    chainKey: "xlayer",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0xAC9dc8415B2348d8135eC725e8E9B1F1DfAF8e53"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40269,
    chainKey: "xlayer-testnet",
    stage: "testnet",
    executor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    },
    lzExecutor: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    sendUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    receiveUln301: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    version: 2,
    receiveUln302: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    }
  },
  {
    eid: 40330,
    chainKey: "ble-testnet",
    stage: "testnet",
    executor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    deadDVN: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    sendUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    lzExecutor: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    sendUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    receiveUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    version: 2,
    receiveUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    }
  },
  {
    eid: 40262,
    chainKey: "unreal-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40291,
    chainKey: "bartio",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30173,
    chainKey: "tenet",
    stage: "mainnet",
    executor: {
      address: "0xB12514e226E50844E4655696c92c0c36B8A53141"
    },
    deadDVN: {
      address: "0x0e557f8F5BfeEDC6905594987Dccc2E10aF33E5C"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x1785c94d31E3E3Ab1079e7ca8a9fbDf33EEf9dd5"
    },
    lzExecutor: {
      address: "0x1A40Cd69966222b2FAec9B1b58e215d49d093A08"
    },
    sendUln301: {
      address: "0x187d4dca18652677428D6A9B1978945a0b978631"
    },
    receiveUln301: {
      address: "0x75dC8e5F50C8221a82CA6aF64aF811caA983B65f"
    },
    version: 2,
    receiveUln302: {
      address: "0x16909F77E57CDaaB7BE0fbDF12b6A77d99541605"
    }
  },
  {
    eid: 40173,
    chainKey: "tenet-testnet",
    stage: "testnet",
    executor: {
      address: "0xdfF535e7F030E4aA69CcC7E4a8404648e872E220"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x2CAD3483690a95d10eeADFb7A79C212050BF5a23"
    },
    lzExecutor: {
      address: "0x56AdB34A18897dAcd737921cbA6AA0518840C0dd"
    },
    sendUln301: {
      address: "0x74e5399dc64Eb3Cf403fcC19DB0aF16Cd61Ba0D8"
    },
    receiveUln301: {
      address: "0x0a3FcF92598bB8d9810951F0826FffA17bDc2308"
    },
    version: 2,
    receiveUln302: {
      address: "0xBaf97EC0E26b7879850c8682AdB723670C6133AF"
    }
  },
  {
    eid: 30333,
    chainKey: "rootstock",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40350,
    chainKey: "rootstock-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40234,
    chainKey: "venn-testnet",
    stage: "testnet",
    executor: {
      address: "0xBE819ed0a8EE608F15de761F03042CB364fd39a7"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xf48994FEEb2F6798eCEEB4C3Abe4808E1D8851fB"
    },
    lzExecutor: {
      address: "0x7983dCA4B0E322b0B80AFBb01F1F904A0532FcB6"
    },
    sendUln301: {
      address: "0x94211aB97A59EeD7d28e024F7BbD770C40d8c46c"
    },
    receiveUln301: {
      address: "0xB99de8c90Db2Fb425c5AEfa2A95284decCB4F0Cd"
    },
    version: 2,
    receiveUln302: {
      address: "0x37d03C8D27d7928546B5b773566Ec9c2847054d2"
    }
  },
  {
    eid: 30116,
    chainKey: "harmony",
    stage: "mainnet",
    executor: {
      address: "0xd27B2Fe1d0a60E06A0ec7e64501d2f15e6c65Bd9"
    },
    deadDVN: {
      address: "0x801BfD947905C337d552F8E30cb4E80435771674"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x795F8325aF292Ff6E58249361d1954893BE15Aff"
    },
    lzExecutor: {
      address: "0xdf3ad32a558578AC0AD1c19AAD41DA1ba5b37d69"
    },
    sendUln301: {
      address: "0x91AA2547728307E0e3B35254D526aceF202d131A"
    },
    receiveUln301: {
      address: "0x50002CdFe7CCb0C41F519c6Eb0653158d11cd907"
    },
    version: 2,
    receiveUln302: {
      address: "0x177d36dBE2271A4DdB2Ad8304d82628eb921d790"
    }
  },
  {
    eid: 40133,
    chainKey: "harmony-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40361,
    chainKey: "stabledevnet-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30273,
    chainKey: "skale",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0xC8B0B3A95bc6AC3eDA97208556DC7A7820da5bf0"
    },
    endpointV2: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    sendUln302: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x2BF2f59d2E318Bb03C8956E7BC4c3E6c28Bd0fC2"
    },
    receiveUln301: {
      address: "0x6b383D6a7e5a151b189147F4c9f39bF57B29548f"
    },
    version: 2,
    receiveUln302: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    }
  },
  {
    eid: 40273,
    chainKey: "skale-testnet",
    stage: "testnet",
    executor: {
      address: "0x86d08462EaA1559345d7F41f937B2C804209DB8A"
    },
    endpointV2: {
      address: "0x82b7dc04A4ABCF2b4aE570F317dcab49f5a10f24"
    },
    sendUln302: {
      address: "0x4632b54146C45Cf31EE1d5A1191260Af7e9DB801"
    },
    lzExecutor: {
      address: "0x7F417F2192B89Cf93b8c4Ee01d558883A0AD7B47"
    },
    sendUln301: {
      address: "0x8f337D230a5088E2a448515Eab263735181A9039"
    },
    receiveUln301: {
      address: "0x613c830Ee98448389139afDae4baD61eAe82D3C0"
    },
    version: 2,
    receiveUln302: {
      address: "0x9D0A659cAC5F122e22bAaDD8769a3abc05C6bdAE"
    }
  },
  {
    eid: 30109,
    chainKey: "polygon",
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    readLib1002: {
      address: "0xc214d690031d3f873365f94d381d6d50c35aa7fa"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0xCd3F213AD101472e1713C72B1697E727C803885b"
    },
    deadDVN: {
      address: "0x43CFcc293CdF99F7D021F21FfD443f174AB0e843"
    },
    sendUln302: {
      address: "0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3"
    },
    lzExecutor: {
      address: "0xe25741bda30bb79a66ADf656E7f2D3f0C4fb3191"
    },
    sendUln301: {
      address: "0x5727E81A40015961145330D91cC27b5E189fF3e1"
    },
    receiveUln301: {
      address: "0x3823094993190Fbb3bFABfEC8365b8C18517566F"
    },
    receiveUln302: {
      address: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95"
    }
  },
  {
    eid: 50109,
    chainKey: "polygon-sandbox",
    stage: "sandbox",
    executor: {
      address: "0x36B22905A1211A55E0d62eF46720172e2b0f24BD"
    },
    endpointV2: {
      address: "0x0b48aF34f4c854F5ae1A3D587da471FeA45bAD52"
    },
    readLib1002: {
      address: "0x0D4ff719551E23185Aeb16FFbF2ABEbB90635942"
    },
    sendUln302: {
      address: "0xe6b98F104c1BEf218F3893ADab4160Dc73Eb8367"
    },
    lzExecutor: {
      address: "0x050499eBdbBBc1216011dE07A48b5182c983Ae74"
    },
    sendUln301: {
      address: "0x73eccD6288e117cAcA738BDAD4FEC51312166C1A"
    },
    receiveUln301: {
      address: "0x381445710b5e73d34aF196c53A3D5cDa58EDBf7A"
    },
    version: 2,
    receiveUln302: {
      address: "0x5C7c905B505f0Cf40Ab6600d05e677F717916F6B"
    }
  },
  {
    eid: 40109,
    chainKey: "mumbai",
    stage: "testnet",
    executor: {
      address: "0x264473487c23cC846118840472D35AeBf54e4475"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x5d9F8BCf9e07BabF517f2988986FF3bB7b233bc1"
    },
    lzExecutor: {
      address: "0x3055C0934c58cA3e7CB25DBdbd418e2E7B5BCA1b"
    },
    sendUln301: {
      address: "0x927587Ea40D0539Dd4beCD0e18E8EF47791D31Ab"
    },
    receiveUln301: {
      address: "0xaa5c6aF22CFC46DB8ba2c1A1c5ea6131b10ff575"
    },
    version: 2,
    receiveUln302: {
      address: "0xfa4Fbda8E809150eE1676ce675AC746Beb9aF379"
    }
  },
  {
    eid: 40335,
    chainKey: "worldcoin-testnet",
    stage: "testnet",
    executor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    deadDVN: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    endpointV2: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    },
    sendUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    },
    lzExecutor: {
      address: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd"
    },
    sendUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    receiveUln301: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    version: 2,
    receiveUln302: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    }
  },
  {
    eid: 30279,
    chainKey: "bob",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0x11bA0F5c3832044A416B2E177EA773eceBCCEE1f"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40279,
    chainKey: "bob-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30311,
    chainKey: "lyra",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40308,
    chainKey: "lyra-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40328,
    chainKey: "kevnet-testnet",
    stage: "testnet",
    executor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    deadDVN: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    endpointV2: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    },
    sendUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    },
    lzExecutor: {
      address: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd"
    },
    sendUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    receiveUln301: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    version: 2,
    receiveUln302: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    }
  },
  {
    eid: 30336,
    chainKey: "flow",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40351,
    chainKey: "flow-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30314,
    chainKey: "bitlayer",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40320,
    chainKey: "bitlayer-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30330,
    chainKey: "islander",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 30230,
    chainKey: "shimmer",
    stage: "mainnet",
    executor: {
      address: "0x868a44F9d9F09331da425539a174a2128b85D672"
    },
    deadDVN: {
      address: "0x7D71242e93eD57455C017b92f980B01066E87D22"
    },
    endpointV2: {
      address: "0x148f693af10ddfaE81cDdb36F4c93B31A90076e1"
    },
    sendUln302: {
      address: "0xD4a903930f2c9085586cda0b11D9681EECb20D2f"
    },
    lzExecutor: {
      address: "0xFD5f54062D0caFda9144A7721d9971710B3D0C5e"
    },
    sendUln301: {
      address: "0x6c73c7A416d96d9C6Fa57671aa1ed7eD0FDF5127"
    },
    receiveUln301: {
      address: "0x1E4CAc6c2c955cAED779ef24d5B8C5EE90b1f914"
    },
    version: 2,
    receiveUln302: {
      address: "0xb21f945e8917c6Cd69FcFE66ac6703B90f7fe004"
    }
  },
  {
    eid: 40203,
    chainKey: "shimmer-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40208,
    chainKey: "oda-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40222,
    chainKey: "frame-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30159,
    chainKey: "canto",
    stage: "mainnet",
    executor: {
      address: "0x8E721E1930B4559AcAfDf06eE591af2FFCB93b8D"
    },
    deadDVN: {
      address: "0x8B84482bd8BdD718DEa9b791eA76997EBb4F2D0E"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x61Ab01Ce58D1dFf3562bb25870020d555e39D849"
    },
    lzExecutor: {
      address: "0xef32f931ac53808e695B7eF3D1b6C5016024a68f"
    },
    sendUln301: {
      address: "0x243EC2F09e12B3843548C528303A15c0cA5B1237"
    },
    receiveUln301: {
      address: "0x9aD0958902A56729f139805C7378Ff13E88eCcA7"
    },
    version: 2,
    receiveUln302: {
      address: "0x6BD792911F4B3714E88FbDf32B351632e7d22c70"
    }
  },
  {
    eid: 40159,
    chainKey: "canto-testnet",
    stage: "testnet",
    executor: {
      address: "0xcA01DAa8e559Cb6a810ce7906eC2AeA39BDeccE4"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x5Bb7F2FFF085f0066430Be92541Db302B9F1e6Af"
    },
    lzExecutor: {
      address: "0x35Bf885a8E60048b46260f30B4F9b1DF7709F5d7"
    },
    sendUln301: {
      address: "0x6a9428e0f920a9a5E5B3440Fdf3494fd221d78F7"
    },
    receiveUln301: {
      address: "0x74582424B8b92BE2eC17c192F6976b2effEFAb7c"
    },
    version: 2,
    receiveUln302: {
      address: "0x5c68f65B7156cdDC79C1C6f32b3073eB8BBe6e58"
    }
  },
  {
    eid: 30339,
    chainKey: "ink",
    stage: "mainnet",
    executor: {
      address: "0xFEbCF17b11376C724AB5a5229803C6e838b6eAe5"
    },
    deadDVN: {
      address: "0x5ba261D2b595966A81548B4FbE3851a6dA9Cf92c"
    },
    endpointV2: {
      address: "0xca29f3A6f966Cb2fc0dE625F8f325c0C46dbE958"
    },
    sendUln302: {
      address: "0x76111DE813F83AAAdBD62773Bf41247634e2319a"
    },
    lzExecutor: {
      address: "0xAE3C661292bb4D0AEEe0588b4404778DF1799EE6"
    },
    sendUln301: {
      address: "0x82760fD1c83345C6f3314278A1ea58Ad102be742"
    },
    receiveUln301: {
      address: "0xbB2753C1B940363d278c81D6402fA89E79Ab4ebc"
    },
    version: 2,
    receiveUln302: {
      address: "0x473132bb594caEF281c68718F4541f73FE14Dc89"
    }
  },
  {
    eid: 40358,
    chainKey: "ink-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30285,
    chainKey: "joc",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0xcC2d3d4B88b87775Bec386d92F6951Ee7f8d52D9"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40242,
    chainKey: "joc-testnet",
    stage: "testnet",
    executor: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    lzExecutor: {
      address: "0x8A3D588D9f6AC041476b094f97FF94ec30169d3D"
    },
    sendUln301: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    receiveUln301: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    version: 2,
    receiveUln302: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    }
  },
  {
    eid: 30153,
    chainKey: "coredao",
    stage: "mainnet",
    executor: {
      address: "0x1785c94d31E3E3Ab1079e7ca8a9fbDf33EEf9dd5"
    },
    deadDVN: {
      address: "0xB872d80dD876FB59085872fB99b1aDE3dbef5390"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x0BcAC336466ef7F1e0b5c184aAB2867C108331aF"
    },
    lzExecutor: {
      address: "0x53490de975969B34E537E541E19F26b15e368895"
    },
    sendUln301: {
      address: "0xdCD9fd7EabCD0fC90300984Fc1Ccb67b5BF3DA36"
    },
    receiveUln301: {
      address: "0x07Dd1bf9F684D81f59B6a6760438d383ad755355"
    },
    version: 2,
    receiveUln302: {
      address: "0x8F76bAcC52b5730c1f1A2413B8936D4df12aF4f6"
    }
  },
  {
    eid: 40153,
    chainKey: "coredao-testnet",
    stage: "testnet",
    executor: {
      address: "0x3Bdb89Df44e50748fAed8cf851eB25bf95f37d19"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xc8361Fac616435eB86B9F6e2faaff38F38B0d68C"
    },
    lzExecutor: {
      address: "0xcAdCAc879D0CB4258455160c702670e8299300f3"
    },
    sendUln301: {
      address: "0x73B2dCB13A27e893c249d8240e9179f2C5FEcf7E"
    },
    receiveUln301: {
      address: "0xaBfa1F7c3586eaFF6958DC85BAEbBab7D3908fD2"
    },
    version: 2,
    receiveUln302: {
      address: "0xD1bbdB62826eDdE4934Ff3A4920eB053ac9D5569"
    }
  },
  {
    eid: 40337,
    chainKey: "otherworld-testnet",
    stage: "testnet",
    executor: {
      address: "0xfa91bFC0BF66fA4AA4340e6fb920485d4f2c153D"
    },
    deadDVN: {
      address: "0xF6268056Ce73E997450F42aa79DE88103CfEfd09"
    },
    endpointV2: {
      address: "0xBa8dF7424dAE9C2CDB4BC1aD2b63ABD97194fDb6"
    },
    sendUln302: {
      address: "0x012f6eaE2A0Bf5916f48b5F37C62Bcfb7C1ffdA1"
    },
    lzExecutor: {
      address: "0x7110205FA59d9CfEE406293D0BaE0d6240985Cd3"
    },
    sendUln301: {
      address: "0xe37Eaab52A54E705297987e919EAac4FC657ab97"
    },
    receiveUln301: {
      address: "0x72e34F44Eb09058bdDaf1aeEebDEC062f1844b00"
    },
    version: 2,
    receiveUln302: {
      address: "0x4aEFf6244dce72a2C71A3c2a75d35b2C396d7C5d"
    }
  },
  {
    eid: 30112,
    chainKey: "fantom",
    stage: "mainnet",
    executor: {
      address: "0x2957eBc0D2931270d4a539696514b047756b3056"
    },
    deadDVN: {
      address: "0xdD8D6cc54Fdb9Ec81Cb8EFb8988ee17aBB8Eecd1"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC17BaBeF02a937093363220b0FB57De04A535D5E"
    },
    lzExecutor: {
      address: "0x83e72DA23b533b2083eD007223a491ba7EC3CcBe"
    },
    sendUln301: {
      address: "0xeDD674b123662D1922d7060c10548ae58D4838af"
    },
    receiveUln301: {
      address: "0xA374A435f3068FDf51dBd03b931D03AA6F878DA0"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1Dd69A2D08dF4eA6a30a91cC061ac70F98aAbe3"
    }
  },
  {
    eid: 40112,
    chainKey: "fantom-testnet",
    stage: "testnet",
    executor: {
      address: "0x0453b4730BB550363F726aD8eeC9441e763F2835"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x3f41017De79aA979b8f33E2e9518203888458273"
    },
    lzExecutor: {
      address: "0x31fb3a5fD0B29B77C946e2331d2F301EF7D9d0dB"
    },
    sendUln301: {
      address: "0x88bC8e61C33F8E3CCaBe7F3aD75e397c9E3732D0"
    },
    receiveUln301: {
      address: "0xE8ad92998674b08eaee83a720D47F442c51F86F3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe4a446690Dfaf438EEA2b06394E1fdd0A9435178"
    }
  },
  {
    eid: 40206,
    chainKey: "spruce-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40295,
    chainKey: "camp-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 30278,
    chainKey: "sanko",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0x10aC9B7EB034fAb1F3bc446E81479D7dC089Be83"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40278,
    chainKey: "sanko-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 40346,
    chainKey: "bl3-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40232,
    chainKey: "optimism-sepolia",
    stage: "testnet",
    executor: {
      address: "0xDc0D68899405673b932F0DB7f8A49191491A5bcB"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xB31D2cb502E25B30C651842C7C3293c51Fe6d16f"
    },
    lzExecutor: {
      address: "0x89e0599C9EA2F36d255e9B500486DC406457E3De"
    },
    sendUln301: {
      address: "0xFe9335A931e2262009a73842001a6F91ef7B6778"
    },
    receiveUln301: {
      address: "0x420667429538adBF982aDa16C268ba561f097F74"
    },
    version: 2,
    receiveUln302: {
      address: "0x9284fd59B95b9143AF0b9795CAC16eb3C723C9Ca"
    }
  },
  {
    eid: 30168,
    chainKey: "solana",
    stage: "mainnet",
    pricefeed: {
      address: "8ahPGPjEbpgGaZx2NV1iG5Shj7TDwvsjkEDcGWjt94TP"
    },
    executor: {
      pda: "AwrbHeCyniXaQhiJZkLhgWdUCteeWSGaSN1sTfLiY7xK",
      address: "6doghB248px58JSSwG4qejQ46kFMW4AMj7vzJnWZHNZn"
    },
    endpointV2: {
      address: "76y77prsiCMvXMjuoZ5VRrhG5qYBrUMYTE5WgHqgjEn6"
    },
    sendUln302: {
      address: "7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH"
    },
    blocked_messagelib: {
      address: "2XrYqmhBMPJgDsb4SVbjV1PnJBprurd5bzRCkHwiFCJB"
    },
    version: 2,
    receiveUln302: {
      address: "7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH"
    },
    dvn: {
      address: "HtEYV4xB4wvsj5fgTkcfuChYpvGYzgzwvNhgDZQNh7wW"
    }
  },
  {
    eid: 50168,
    chainKey: "solana-sandbox",
    stage: "sandbox",
    version: 2
  },
  {
    eid: 40168,
    chainKey: "solana-testnet",
    stage: "testnet",
    pricefeed: {
      address: "8ahPGPjEbpgGaZx2NV1iG5Shj7TDwvsjkEDcGWjt94TP"
    },
    executor: {
      pda: "AwrbHeCyniXaQhiJZkLhgWdUCteeWSGaSN1sTfLiY7xK",
      address: "6doghB248px58JSSwG4qejQ46kFMW4AMj7vzJnWZHNZn"
    },
    endpointV2: {
      address: "76y77prsiCMvXMjuoZ5VRrhG5qYBrUMYTE5WgHqgjEn6"
    },
    sendUln302: {
      address: "7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH"
    },
    blocked_messagelib: {
      address: "2XrYqmhBMPJgDsb4SVbjV1PnJBprurd5bzRCkHwiFCJB"
    },
    version: 2,
    receiveUln302: {
      address: "7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH"
    },
    dvn: {
      address: "HtEYV4xB4wvsj5fgTkcfuChYpvGYzgzwvNhgDZQNh7wW"
    }
  },
  {
    eid: 40323,
    chainKey: "ozean-testnet",
    stage: "testnet",
    executor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    deadDVN: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    endpointV2: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    },
    sendUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    },
    lzExecutor: {
      address: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd"
    },
    sendUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    receiveUln301: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    version: 2,
    receiveUln302: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    }
  },
  {
    eid: 40219,
    chainKey: "idex-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30199,
    chainKey: "telos",
    stage: "mainnet",
    executor: {
      address: "0x1785c94d31E3E3Ab1079e7ca8a9fbDf33EEf9dd5"
    },
    deadDVN: {
      address: "0x1DE78bEd411ad03e7f9B4c591D9C80499287Cb04"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x0BcAC336466ef7F1e0b5c184aAB2867C108331aF"
    },
    lzExecutor: {
      address: "0x53490de975969B34E537E541E19F26b15e368895"
    },
    sendUln301: {
      address: "0xdCD9fd7EabCD0fC90300984Fc1Ccb67b5BF3DA36"
    },
    receiveUln301: {
      address: "0x07Dd1bf9F684D81f59B6a6760438d383ad755355"
    },
    version: 2,
    receiveUln302: {
      address: "0x8F76bAcC52b5730c1f1A2413B8936D4df12aF4f6"
    }
  },
  {
    eid: 40199,
    chainKey: "telos-testnet",
    stage: "testnet",
    executor: {
      address: "0x9Ed8C430B96ae6FDdDb542DDa4eF6f53E919eBdD"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x4628040135EF85759594290F0877aB93B660ac8b"
    },
    lzExecutor: {
      address: "0x5709988a03d1CC02197F222D2C72CcC6018bCE0B"
    },
    sendUln301: {
      address: "0x1B39173A8198fB51dC1E1733bbbe21784505cD8c"
    },
    receiveUln301: {
      address: "0x3793DC3e532A3061e01bC0426DBDe195ACD5F591"
    },
    version: 2,
    receiveUln302: {
      address: "0x9Fc55169a8B47EDCE891942565De00DBd50B3C2E"
    }
  },
  {
    eid: 30263,
    chainKey: "masa",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x178F93794328C04988bcD52a1B820eC105b17f2f"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40263,
    chainKey: "masa-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    endpointV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    sendUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    receiveUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    version: 2,
    receiveUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    }
  },
  {
    eid: 30342,
    chainKey: "glue",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    },
    receiveUln301: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    },
    version: 2,
    receiveUln302: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    }
  },
  {
    eid: 40296,
    chainKey: "glue-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 30313,
    chainKey: "reya",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40319,
    chainKey: "reya-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30214,
    chainKey: "scroll",
    stage: "mainnet",
    executor: {
      address: "0x581b26F362AD383f7B51eF8A165Efa13DDe398a4"
    },
    deadDVN: {
      address: "0xDB238D5196328b5623612C235062427F2F6792c0"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x9BbEb2B2184B9313Cf5ed4a4DDFEa2ef62a2a03B"
    },
    lzExecutor: {
      address: "0x4Fc3f4A38Acd6E4cC0ccBc04B3Dd1CCAeFd7F3Cd"
    },
    sendUln301: {
      address: "0xdf3ad32a558578AC0AD1c19AAD41DA1ba5b37d69"
    },
    receiveUln301: {
      address: "0xE4b45f3744eF05668b22Fcf05Fb19fF4A75d3219"
    },
    version: 2,
    receiveUln302: {
      address: "0x8363302080e711E0CAb978C081b9e69308d49808"
    }
  },
  {
    eid: 40170,
    chainKey: "scroll-testnet",
    stage: "testnet",
    executor: {
      address: "0xD0D47C34937DdbeBBe698267a6BbB1dacE51198D"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x21f1C2B131557c3AebA918D590815c47Dc4F20aa"
    },
    lzExecutor: {
      address: "0x9cB9e6AC360e585BC5d0bFe38f3Fd344d44FDc83"
    },
    sendUln301: {
      address: "0x674a6B84dDd9AdCE8E9EAc120BDb6185e1eEdBa8"
    },
    receiveUln301: {
      address: "0x13EA72039D7f02848CDDd67a2F948dd334cDE70e"
    },
    version: 2,
    receiveUln302: {
      address: "0xf2dB23f9eA1311E9ED44E742dbc4268de4dB0a88"
    }
  },
  {
    eid: 30318,
    chainKey: "plume",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40304,
    chainKey: "plume-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40281,
    chainKey: "botanix-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 40267,
    chainKey: "amoy-testnet",
    stage: "testnet",
    executor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    },
    lzExecutor: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    sendUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    receiveUln301: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    version: 2,
    receiveUln302: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    }
  },
  {
    eid: 30337,
    chainKey: "bl4",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 30312,
    chainKey: "ape",
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    readLib1002: {
      address: "0x1641D737e97916f1400CB6BA032eceE765484D9C"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40266,
    chainKey: "zkastar-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    receiveUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    version: 2,
    receiveUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    }
  },
  {
    eid: 30125,
    chainKey: "celo",
    stage: "mainnet",
    executor: {
      address: "0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28"
    },
    deadDVN: {
      address: "0xc67f8f84d00A4908581B235F1Abe0FE3aFC8126F"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e"
    },
    lzExecutor: {
      address: "0x552661d1C85F256E008eE2315103c80fd1E298DF"
    },
    sendUln301: {
      address: "0xc80233AD8251E668BecbC3B0415707fC7075501e"
    },
    receiveUln301: {
      address: "0x556d7664d5b4Db11f381c714B6b47A8Bf0b494FD"
    },
    version: 2,
    receiveUln302: {
      address: "0xaDDed4478B423d991C21E525Cd3638FBce1AaD17"
    }
  },
  {
    eid: 40125,
    chainKey: "alfajores",
    stage: "testnet",
    executor: {
      address: "0x5468b60ed00F9b389B5Ba660189862Db058D7dC8"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x00432463F40E100F6A99fA2E60B09F0182D828DE"
    },
    lzExecutor: {
      address: "0x2665a6f509B2D1D30879fECC180Fc70B111cC8EA"
    },
    sendUln301: {
      address: "0xfb667d3db2c3798ECDBE50098A20A6F7AC67f710"
    },
    receiveUln301: {
      address: "0x0aEae1f789B226E74c6b00347a8a3E679066dE48"
    },
    version: 2,
    receiveUln302: {
      address: "0xdb5A808eF72Aa3224D9fA6c15B717E8029B89a4f"
    }
  },
  {
    eid: 30101,
    chainKey: "ethereum",
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    readLib1002: {
      address: "0x74F55Bc2a79A27A0bF1D1A35dB5d0Fc36b9FDB9D"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x173272739Bd7Aa6e4e214714048a9fE699453059"
    },
    deadDVN: {
      address: "0x747C741496a507E4B404b50463e691A8d692f6Ac"
    },
    sendUln302: {
      address: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1"
    },
    lzExecutor: {
      address: "0xbF2E102Fb382d6EC52823C8F81A45e9Caa951320"
    },
    sendUln301: {
      address: "0xD231084BfB234C107D3eE2b22F97F3346fDAF705"
    },
    receiveUln301: {
      address: "0x245B6e8FFE9ea5Fc301e32d16F66bD4C2123eEfC"
    },
    receiveUln302: {
      address: "0xc02Ab410f0734EFa3F14628780e6e695156024C2"
    }
  },
  {
    eid: 50121,
    chainKey: "ethereum-sandbox",
    stage: "sandbox",
    executor: {
      address: "0x36B22905A1211A55E0d62eF46720172e2b0f24BD"
    },
    endpointV2: {
      address: "0x0b48aF34f4c854F5ae1A3D587da471FeA45bAD52"
    },
    readLib1002: {
      address: "0x0D4ff719551E23185Aeb16FFbF2ABEbB90635942"
    },
    sendUln302: {
      address: "0xe6b98F104c1BEf218F3893ADab4160Dc73Eb8367"
    },
    lzExecutor: {
      address: "0x050499eBdbBBc1216011dE07A48b5182c983Ae74"
    },
    sendUln301: {
      address: "0x73eccD6288e117cAcA738BDAD4FEC51312166C1A"
    },
    receiveUln301: {
      address: "0x381445710b5e73d34aF196c53A3D5cDa58EDBf7A"
    },
    version: 2,
    receiveUln302: {
      address: "0x5C7c905B505f0Cf40Ab6600d05e677F717916F6B"
    }
  },
  {
    eid: 40121,
    chainKey: "goerli",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30154,
    chainKey: "goerli",
    stage: "mainnet",
    version: 2
  },
  {
    eid: 40331,
    chainKey: "bl2-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30280,
    chainKey: "sei",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0xf772581dcf3300914D6222C4e6FcF0ed5EF93142"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40258,
    chainKey: "sei-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30316,
    chainKey: "hedera",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    endpointV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    sendUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    receiveUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    version: 2,
    receiveUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    }
  },
  {
    eid: 40285,
    chainKey: "hedera-testnet",
    stage: "testnet",
    executor: {
      address: "0xe514D331c54d7339108045bF4794F8d71cad110e"
    },
    endpointV2: {
      address: "0xbD672D1562Dd32C23B563C989d8140122483631d"
    },
    sendUln302: {
      address: "0x1707575f7cecdc0ad53fde9ba9bda3ed5d4440f4"
    },
    lzExecutor: {
      address: "0x4C88bA56a20A77E72F809F08fFD87e8bb6a87dF7"
    },
    sendUln301: {
      address: "0xa8133fB932b185f8a4E88E22238C8d3602E2A853"
    },
    receiveUln301: {
      address: "0xe7292d7797776bCcDF44C78f296Ff26Ddb70F70a"
    },
    version: 2,
    receiveUln302: {
      address: "0xc0c34919A04d69415EF2637A3Db5D637a7126cd0"
    }
  },
  {
    eid: 30266,
    chainKey: "merlin",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0x5EE3Cb252978C2A51671e6AAD109491e62f04d8f"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40264,
    chainKey: "merlin-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30363,
    chainKey: "bahamut",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40347,
    chainKey: "bahamut-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30365,
    chainKey: "xdc",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 30319,
    chainKey: "worldchain",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 30331,
    chainKey: "mp1",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40345,
    chainKey: "mp1-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40252,
    chainKey: "tangible-testnet",
    stage: "testnet",
    executor: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    lzExecutor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    sendUln301: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    },
    receiveUln301: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    },
    version: 2,
    receiveUln302: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    }
  },
  {
    eid: 30362,
    chainKey: "bera",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40256,
    chainKey: "bera-testnet",
    stage: "testnet",
    executor: {
      address: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    lzExecutor: {
      address: "0x8dF53a660a00C3D977d7E778fB7385ECf4482D16"
    },
    sendUln301: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    receiveUln301: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    version: 2,
    receiveUln302: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    }
  },
  {
    eid: 30420,
    chainKey: "tron",
    stage: "mainnet",
    executor: {
      address: "0x67DE40af19C0C0a6D0278d96911889fAF4EBc1Bc"
    },
    deadDVN: {
      address: "0x73A38738170aCa1B2ebCb55538ED9c7fB10ccd3B"
    },
    endpointV2: {
      address: "0x0Af59750D5dB5460E5d89E268C474d5F7407c061"
    },
    sendUln302: {
      address: "0xE369D146219380B24Bb5D9B9E08a5b9936F9E719"
    },
    lzExecutor: {
      address: "0xb3AC834070aB6923093A54761bf65c451F00a276"
    },
    sendUln301: {
      address: "0xa347fFf5Db6b65939BB65A3436654cB5fbd57646"
    },
    receiveUln301: {
      address: "0xF077BeAF66862e6b014003E98A2f85c3429879a1"
    },
    version: 2,
    receiveUln302: {
      address: "0x612215D4dB0475a76dCAa36C7f9afD748c42ed2D"
    }
  },
  {
    eid: 50420,
    chainKey: "tron-sandbox",
    stage: "sandbox",
    executor: {
      address: "0x371DdA9b21cc74548290EdeeEdA97eD36C2bb199"
    },
    endpointV2: {
      address: "0xEB03f3C0613A8d23330Ee8217EdF426E054380f6"
    },
    readLib1002: {
      address: "0xa3cd19110fB8C2754d95A900A83199aEA9011Dac"
    },
    sendUln302: {
      address: "0x45b86a285936C903Ed566C5692B12bA5329a445c"
    },
    lzExecutor: {
      address: "0x02792FCb9aF06351E9B3Ef23E15fa577314897eA"
    },
    sendUln301: {
      address: "0xb348ac071532050FF9d6cAc33A5De2726918e5c9"
    },
    receiveUln301: {
      address: "0x543b61723e08c11d541F585e25f8B15856B6af14"
    },
    version: 2,
    receiveUln302: {
      address: "0x0137B7d71c2f5Ab5bf1003d43742A3485705F833"
    }
  },
  {
    eid: 40420,
    chainKey: "tron-testnet",
    stage: "testnet",
    executor: {
      address: "0xd9F0144AC7cED407a12dE2649b560b0a68a59A3D"
    },
    endpointV2: {
      address: "0x1b356f3030CE0c1eF9D3e1E250Bf0BB11D81b2d1"
    },
    sendUln302: {
      address: "0xaef63752785Ad2104cea1aa42b69b46f2530312F"
    },
    lzExecutor: {
      address: "0x90d9bDa196FA8E40322827813920Ac79638D0Eed"
    },
    sendUln301: {
      address: "0xFAd5e75352Bc694bE1f5f8a6313fc280d37E7905"
    },
    receiveUln301: {
      address: "0x52D4be0e5088731839A06Da8659b5D2B979E21F6"
    },
    version: 2,
    receiveUln302: {
      address: "0x843810EB9f002E940870a95B366cc59E623bF5f1"
    }
  },
  {
    eid: 30198,
    chainKey: "beam",
    stage: "mainnet",
    executor: {
      address: "0x9Bdf3aE7E2e3D211811E5e782a808Ca0a75BF1Fc"
    },
    deadDVN: {
      address: "0x690b1857EaA8c55850547d7C22148C0B99a71dCd"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x763BfcE1Ed335885D0EeC1F182fE6E6B85BAbC92"
    },
    lzExecutor: {
      address: "0xe01F3c1CD14F39303D175c31c16f58707B28976b"
    },
    sendUln301: {
      address: "0xB041cd355945627BDb7281f613B6E29623ab0110"
    },
    receiveUln301: {
      address: "0x0b5E5452d0c9DA1Bb5fB0664F48313e9667d7820"
    },
    version: 2,
    receiveUln302: {
      address: "0xe767e048221197A2b590CeB5C63C3AAD8ebf87eA"
    }
  },
  {
    eid: 40178,
    chainKey: "beam-testnet",
    stage: "testnet",
    executor: {
      address: "0xA60A7a9D9723d6Adda826f5bDae29c6038B68DD3"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x6f3a314C1279148E53f51AF154817C3EF2C827B1"
    },
    lzExecutor: {
      address: "0x4d2a0Ffc93146a086b586C2C88135d9687508cd5"
    },
    sendUln301: {
      address: "0x0e7C822d4dE804f648FD204139cf6d3fD943eBe4"
    },
    receiveUln301: {
      address: "0x36Ebea3941907C438Ca8Ca2B1065dEef21CCdaeD"
    },
    version: 2,
    receiveUln302: {
      address: "0x0F7De6155DDC16A96c0d110A488bc966Aad3991b"
    }
  },
  {
    eid: 30197,
    chainKey: "loot",
    stage: "mainnet",
    executor: {
      address: "0x000CC1A759bC3A15e664Ed5379E321Be5de1c9B6"
    },
    deadDVN: {
      address: "0x34406a8ef674f133B57F32083656787722aEE4dE"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xCFf08a35A5f27F306e2DA99ff198dB90f13DEF77"
    },
    lzExecutor: {
      address: "0x2d24207F9C1F77B2E08F2C3aD430da18e355CF66"
    },
    sendUln301: {
      address: "0x6167caAb5c3DA63311186db4D4E2596B20f557ec"
    },
    receiveUln301: {
      address: "0xD1654C656455E40E2905E96b6B91088AC2B362a2"
    },
    version: 2,
    receiveUln302: {
      address: "0xBB967E3A329F4c47F654B82a2F7d11E69E5A7143"
    }
  },
  {
    eid: 40197,
    chainKey: "loot-testnet",
    stage: "testnet",
    executor: {
      address: "0x6460EE1b9D5bDE8375ca928767Cc63FBFA111A98"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x6271e24A43cCB1509FBDC22284Ab6176237562EE"
    },
    lzExecutor: {
      address: "0x99eB7367695C470947B74dd9BE1dBf637CD725DA"
    },
    sendUln301: {
      address: "0xfE48472f5a946882aE9b8a070C29836b58faaaba"
    },
    receiveUln301: {
      address: "0xf4A5f28023C58F747feaB4Dd63A0b642AB583078"
    },
    version: 2,
    receiveUln302: {
      address: "0x40d0DC337feCDC4C09774e7F92Cb963674CF7Ef2"
    }
  },
  {
    eid: 30165,
    chainKey: "zksync",
    endpointV2: {
      address: "0xd07C30aF3Ff30D96BDc9c6044958230Eb797DDBF"
    },
    readLib1002: {
      address: "0x2C6FEDD430Be3c916292c3700144D4891c0FFedD"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x664e390e672A811c12091db8426cBb7d68D5D8A6"
    },
    deadDVN: {
      address: "0x3F80157B0d0025C85f905b75b1Ee2386F6daf168"
    },
    sendUln302: {
      address: "0x07fD0e370B49919cA8dA0CE842B8177263c0E12c"
    },
    lzExecutor: {
      address: "0x2Ce5f0d1Bfcb5b86ff94C2C580Ab65459e004D43"
    },
    sendUln301: {
      address: "0x553313dB58dEeFa3D55B1457D27EAB3Fe5EC87E8"
    },
    receiveUln301: {
      address: "0xdF7D44c9EfA2DB43152D9F5eD8b755b4BEbd323B"
    },
    receiveUln302: {
      address: "0x04830f6deCF08Dec9eD6C3fCAD215245B78A59e1"
    }
  },
  {
    eid: 40165,
    chainKey: "zksync-testnet",
    stage: "testnet",
    version: 2,
    endpointV2: {
      address: "0x82Bb8E5Ffd47Be07f0568C9aB0900DDA9D913aFD"
    }
  },
  {
    eid: 40277,
    chainKey: "olive-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 40245,
    chainKey: "base-sepolia",
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    readLib1002: {
      address: "0x29270F0CFC54432181C853Cd25E2Fb60A68E03f2"
    },
    version: 2,
    stage: "testnet",
    executor: {
      address: "0x8A3D588D9f6AC041476b094f97FF94ec30169d3D"
    },
    deadDVN: {
      address: "0x78551ADC2553EF1858a558F5300F7018Aad2FA7e"
    },
    sendUln302: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    lzExecutor: {
      address: "0xD8C74c92a59c2b5b6390eD54f13193C59249e561"
    },
    sendUln301: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    },
    receiveUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln302: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    }
  },
  {
    eid: 40224,
    chainKey: "polygoncdk-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30175,
    chainKey: "nova",
    stage: "mainnet",
    executor: {
      address: "0x8Ee02736F8a0c28164a20c25f3d199a74DF7F24B"
    },
    deadDVN: {
      address: "0x1BE6093E02A7AbF324053eE3f501CF2c049dA471"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xef32f931ac53808e695B7eF3D1b6C5016024a68f"
    },
    lzExecutor: {
      address: "0x02E5fc018fa140eC2eE934f3Bf22a05DF62ba908"
    },
    sendUln301: {
      address: "0x2b3eBE6662Ad402317EE7Ef4e6B25c79a0f91015"
    },
    receiveUln301: {
      address: "0x00e7306e591c04E72867644dF141e250aCAF175B"
    },
    version: 2,
    receiveUln302: {
      address: "0xB81F326b95e79eaC4aba800Ae545efb4C602973D"
    }
  },
  {
    eid: 40249,
    chainKey: "zora-sepolia",
    stage: "testnet",
    executor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    lzExecutor: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    sendUln301: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    },
    receiveUln301: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    version: 2,
    receiveUln302: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    }
  },
  {
    eid: 30309,
    chainKey: "lightlink",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40309,
    chainKey: "lightlink-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30211,
    chainKey: "aurora",
    stage: "mainnet",
    executor: {
      address: "0xA2b402FFE8dd7460a8b425644B6B9f50667f0A61"
    },
    deadDVN: {
      address: "0x412CEc9FC5044bCba04ED6875729540cE35C6C6f"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x1aCe9DD1BC743aD036eF2D92Af42Ca70A1159df5"
    },
    lzExecutor: {
      address: "0x0b5E5452d0c9DA1Bb5fB0664F48313e9667d7820"
    },
    sendUln301: {
      address: "0x148f693af10ddfaE81cDdb36F4c93B31A90076e1"
    },
    receiveUln301: {
      address: "0xF9d24d3AbF64A99C6FcdF19b27eF74B723A6110a"
    },
    version: 2,
    receiveUln302: {
      address: "0x000CC1A759bC3A15e664Ed5379E321Be5de1c9B6"
    }
  },
  {
    eid: 40201,
    chainKey: "aurora-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dD6727B9636761ff50E375D0A7039BD5447ceDB"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x19D1198b0f43Ec076a897bF98dEb0FD1D6CE8B9f"
    },
    lzExecutor: {
      address: "0xe514D331c54d7339108045bF4794F8d71cad110e"
    },
    sendUln301: {
      address: "0x790deF6091dD5e5e8c3F8550B37a04790e0ba492"
    },
    receiveUln301: {
      address: "0x55a75EB9A470329f1bA6278bDe58CE95E6CEF501"
    },
    version: 2,
    receiveUln302: {
      address: "0x0E91e0239971B6CF7519e458a742e2eA4Ffb7458"
    }
  },
  {
    eid: 30255,
    chainKey: "fraxtal",
    stage: "mainnet",
    executor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    deadDVN: {
      address: "0x6A6991E0bF27E3CcCDe6B73dE94b7DA6e240FF6E"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6"
    },
    lzExecutor: {
      address: "0x306B9a8953B9462F8b826e6768a93C8EA7454965"
    },
    sendUln301: {
      address: "0x282b3386571f7f794450d5789911a9804FA346b4"
    },
    receiveUln301: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    version: 2,
    receiveUln302: {
      address: "0x8bC1e36F015b9902B54b1387A4d733cebc2f5A4e"
    }
  },
  {
    eid: 40255,
    chainKey: "fraxtal-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30329,
    chainKey: "hemi",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40338,
    chainKey: "hemi-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30102,
    chainKey: "bsc",
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    readLib1002: {
      address: "0x37375049CDc522Bd6bAeEbf527A42D54688d784c"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x3ebD570ed38B1b3b4BC886999fcF507e9D584859"
    },
    deadDVN: {
      address: "0xe9b5E4f9395a60799F4F608Ba3ABebDfC0ee6D9C"
    },
    sendUln302: {
      address: "0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE"
    },
    lzExecutor: {
      address: "0x821A99C061C00f6C9da0302AAec348945Ba40284"
    },
    sendUln301: {
      address: "0xfCCE712C9be5A78FE5f842008e0ed7af59455278"
    },
    receiveUln301: {
      address: "0xff3da3a1cd39Bbaeb8D7cB2deB83EfC065CBb38F"
    },
    receiveUln302: {
      address: "0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1"
    }
  },
  {
    eid: 50102,
    chainKey: "bsc-sandbox",
    stage: "sandbox",
    executor: {
      address: "0x36B22905A1211A55E0d62eF46720172e2b0f24BD"
    },
    endpointV2: {
      address: "0x0b48aF34f4c854F5ae1A3D587da471FeA45bAD52"
    },
    readLib1002: {
      address: "0x0D4ff719551E23185Aeb16FFbF2ABEbB90635942"
    },
    sendUln302: {
      address: "0xe6b98F104c1BEf218F3893ADab4160Dc73Eb8367"
    },
    lzExecutor: {
      address: "0x050499eBdbBBc1216011dE07A48b5182c983Ae74"
    },
    sendUln301: {
      address: "0x73eccD6288e117cAcA738BDAD4FEC51312166C1A"
    },
    receiveUln301: {
      address: "0x381445710b5e73d34aF196c53A3D5cDa58EDBf7A"
    },
    version: 2,
    receiveUln302: {
      address: "0x5C7c905B505f0Cf40Ab6600d05e677F717916F6B"
    }
  },
  {
    eid: 40102,
    chainKey: "bsc-testnet",
    stage: "testnet",
    executor: {
      address: "0x31894b190a8bAbd9A067Ce59fde0BfCFD2B18470"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x55f16c442907e86D764AFdc2a07C2de3BdAc8BB7"
    },
    lzExecutor: {
      address: "0x2b8e58866f7312b97Bd66d76BC7d911721563B71"
    },
    sendUln301: {
      address: "0x65e2DdD01cf0f1e27090052fF64f061d236206fd"
    },
    receiveUln301: {
      address: "0xA4b12509e4267e3139249223c294bB16b6F1578b"
    },
    version: 2,
    receiveUln302: {
      address: "0x188d4bbCeD671A7aA2b5055937F79510A32e9683"
    }
  },
  {
    eid: 30267,
    chainKey: "degen",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0xf80cB5F7467B67cBEC77DcE6a13C89f210b554c0"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 30360,
    chainKey: "cronoszkevm",
    stage: "mainnet",
    executor: {
      address: "0x553313dB58dEeFa3D55B1457D27EAB3Fe5EC87E8"
    },
    deadDVN: {
      address: "0x04830f6deCF08Dec9eD6C3fCAD215245B78A59e1"
    },
    endpointV2: {
      address: "0x5c6cfF4b7C49805F8295Ff73C204ac83f3bC4AE7"
    },
    sendUln302: {
      address: "0x01047601DB5E63b1574aae317BAd9C684E3C9056"
    },
    lzExecutor: {
      address: "0xcaeB82549Ff641C4aF73505a137B5BeD06FEaf64"
    },
    sendUln301: {
      address: "0xd07C30aF3Ff30D96BDc9c6044958230Eb797DDBF"
    },
    receiveUln301: {
      address: "0xF5c814D4c78B64a1E52ce08F473112Fc27099905"
    },
    version: 2,
    receiveUln302: {
      address: "0x9AB633555E460C01f8c7b8ab24C88dD4986dD5A1"
    }
  },
  {
    eid: 40360,
    chainKey: "cronoszkevm-testnet",
    stage: "testnet",
    executor: {
      address: "0xe2Ef622A13e71D9Dd2BBd12cd4b27e1516FA8a09"
    },
    deadDVN: {
      address: "0x9c0B5520e3eC0ccE919cEaA1fb5AaA7cdAb437D4"
    },
    endpointV2: {
      address: "0x9EC2DB700a3c3D35888acCa134F3f860B4a0b41a"
    },
    sendUln302: {
      address: "0x0e2c52BC2e119b1919e68f4F1874D4d30F6eF9fB"
    },
    lzExecutor: {
      address: "0x2DCC8cFb612fDbC0Fb657eA1B51A6F77b8b86448"
    },
    sendUln301: {
      address: "0xF636882f80cb5039D80F08cDEee1b166D700091b"
    },
    receiveUln301: {
      address: "0x2443297aEd720EACED2feD76d1C6044471382EA2"
    },
    version: 2,
    receiveUln302: {
      address: "0x5f04B588B9408d8d5F4ac250e8c71986683C35A5"
    }
  },
  {
    eid: 30182,
    chainKey: "hubble",
    stage: "mainnet",
    executor: {
      address: "0xe9AE261D3aFf7d3fCCF38Fa2d612DD3897e07B2d"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xBB967E3A329F4c47F654B82a2F7d11E69E5A7143"
    },
    lzExecutor: {
      address: "0xAa76e7DB9D087933Ce06c06f7D0107bA48a96bdb"
    },
    sendUln301: {
      address: "0xD1654C656455E40E2905E96b6B91088AC2B362a2"
    },
    receiveUln301: {
      address: "0xC1EC25A9e8a8DE5Aa346f635B33e5B74c4c081aF"
    },
    version: 2,
    receiveUln302: {
      address: "0x6f1686189f32e78f1D83e7c6Ed433FCeBc3A5B51"
    }
  },
  {
    eid: 40182,
    chainKey: "hubble-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30176,
    chainKey: "meter",
    stage: "mainnet",
    executor: {
      address: "0x27b7Bf5f95c2DD6Bc07Ce4ed8598b20Fb73fF5c1"
    },
    deadDVN: {
      address: "0x6008B58840B2353996797D65f8539d42e01Bb297"
    },
    endpointV2: {
      address: "0xef02BacD67C0AB45510927749009F6B9ffCE0631"
    },
    sendUln302: {
      address: "0xD721315eB3d2e7e8cFDfC7d82C02a1DCe144f8E4"
    },
    lzExecutor: {
      address: "0x8856eE4f4e352487a099BA83A148F0E82bc54229"
    },
    sendUln301: {
      address: "0xE6B2Ed26793d2eBEaC22eA538F627eCCEEc2a70D"
    },
    receiveUln301: {
      address: "0xB0eE0045bb345c38C0209ca14F0F771E83Bf9b5C"
    },
    version: 2,
    receiveUln302: {
      address: "0xffA387da7E7c2d444A78cd9ebcfA89AfBF980d71"
    }
  },
  {
    eid: 40156,
    chainKey: "meter-testnet",
    stage: "testnet",
    executor: {
      address: "0x68921A9530579203EE812ebddd0eE31ED43E7040"
    },
    endpointV2: {
      address: "0x3E03163f253ec436d4562e5eFd038cf98827B7eC"
    },
    sendUln302: {
      address: "0x6B946AF0b8F3B4D33a36f90C5227D0054722FF32"
    },
    lzExecutor: {
      address: "0xe43c4D4d9C7760f44491773A7A08A66aF15545AD"
    },
    sendUln301: {
      address: "0x8098DAf8D392d3606edEf496D307e2B5411A429B"
    },
    receiveUln301: {
      address: "0x2ac4F9E4C9d1BB0B3346613Dcb90044A46B9BfE9"
    },
    version: 2,
    receiveUln302: {
      address: "0xeA2B12219472e0d2a7795c7f61B0602bF5c36E25"
    }
  },
  {
    eid: 30155,
    chainKey: "okx",
    stage: "mainnet",
    executor: {
      address: "0x1658766898B42547297A429a51FDea03BC4a863F"
    },
    deadDVN: {
      address: "0x641A8990001199692fd8042dc37445F07355d6CE"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x7807888fAC5c6f23F6EeFef0E6987DF5449C1BEb"
    },
    lzExecutor: {
      address: "0x89D3F96Cf0E2aE22Cc88f8caCA1ee7bB622b5E68"
    },
    sendUln301: {
      address: "0xA27A2cA24DD28Ce14Fb5f5844b59851F03DCf182"
    },
    receiveUln301: {
      address: "0xACbD57daAafb7D9798992A7b0382fc67d3E316f3"
    },
    version: 2,
    receiveUln302: {
      address: "0x51Ae634318E7191C7ffc5778E2D9f860e1e60361"
    }
  },
  {
    eid: 40155,
    chainKey: "okx-testnet",
    stage: "testnet",
    executor: {
      address: "0x826b93439CB1d53467566d04A9Ddc03F73614e59"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x4eb38E1743669C6753C44A58B2F11E0c592183eD"
    },
    lzExecutor: {
      address: "0x1a2fd0712Ded46794022DdB16a282e798D22a7FB"
    },
    sendUln301: {
      address: "0x9eC6D9cCF05B94D4A45b0968248CA5CdF35DDBfD"
    },
    receiveUln301: {
      address: "0xF66187d9C1E80A7CC22B226F439d51446a044972"
    },
    version: 2,
    receiveUln302: {
      address: "0xaaed103E18acf972b9b68743E3d4bDeBb9Ce5E5b"
    }
  },
  {
    eid: 30284,
    chainKey: "iota",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0xE6f1C3c1674d3Bae71ef33300441e7469a0021fF"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40307,
    chainKey: "iota-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40218,
    chainKey: "injective-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30177,
    chainKey: "kava",
    stage: "mainnet",
    executor: {
      address: "0x41ED8065dd9bC6c0caF21c39766eDCBA0F21851c"
    },
    deadDVN: {
      address: "0x1B3b79f03EE74d4C88f2Bdd84112b58a01EA0167"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x83Fb937054918cB7AccB15bd6cD9234dF9ebb357"
    },
    lzExecutor: {
      address: "0x0a1dF45fCB28616bd2f45512f8Aa6ca958829eF1"
    },
    sendUln301: {
      address: "0x02E5fc018fa140eC2eE934f3Bf22a05DF62ba908"
    },
    receiveUln301: {
      address: "0x55734F78a14cCb85BB3886a8917e90df44EB8F4F"
    },
    version: 2,
    receiveUln302: {
      address: "0xb7e97ad5661134185Fe608b2A31fe8cEf2147Ba9"
    }
  },
  {
    eid: 40172,
    chainKey: "kava-testnet",
    stage: "testnet",
    executor: {
      address: "0x13EA72039D7f02848CDDd67a2F948dd334cDE70e"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x4B68C45f6A276485870D56f1699DCf451FEC076F"
    },
    lzExecutor: {
      address: "0xAF1e8A7Ea4f30E3CBa6Bc2d87eCa1086C16ff8d3"
    },
    sendUln301: {
      address: "0x82470370d95d5cb20700a306DE3f8eF19cbCC725"
    },
    receiveUln301: {
      address: "0x21f1C2B131557c3AebA918D590815c47Dc4F20aa"
    },
    version: 2,
    receiveUln302: {
      address: "0x3De74963B7223343ffD168e230fC4e374282d37b"
    }
  },
  {
    eid: 40161,
    chainKey: "sepolia",
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    readLib1002: {
      address: "0x908E86e9cb3F16CC94AE7569Bf64Ce2CE04bbcBE"
    },
    version: 2,
    stage: "testnet",
    executor: {
      address: "0x718B92b5CB0a5552039B593faF724D182A881eDA"
    },
    deadDVN: {
      address: "0x8b450b0acF56E1B0e25C581bB04FBAbeeb0644b8"
    },
    sendUln302: {
      address: "0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE"
    },
    lzExecutor: {
      address: "0x34a561197e4eAe356D41B0B02C59F12a5C576C5A"
    },
    sendUln301: {
      address: "0x6862b19f6e42a810946B9C782E6ebE26Ad266C84"
    },
    receiveUln301: {
      address: "0x5937A5fe272fbA38699A1b75B3439389EEFDb399"
    },
    receiveUln302: {
      address: "0xdAf00F5eE2158dD58E0d3857851c432E34A3A851"
    }
  },
  {
    eid: 30161,
    chainKey: "sepolia",
    stage: "mainnet",
    version: 2,
    deadDVN: {
      address: "0xF53857dbc0D2c59D5666006EC200cbA2936B8c35"
    }
  },
  {
    eid: 30320,
    chainKey: "unichain",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40333,
    chainKey: "unichain-testnet",
    stage: "testnet",
    executor: {
      address: "0x8548b148800BB00C6E4039Aa9C20ebb36a36A600"
    },
    deadDVN: {
      address: "0x9fabEEcA47e03d4a37F43b5E476030ab1BB200Ad"
    },
    endpointV2: {
      address: "0xb8815f3f882614048CbE201a67eF9c6F10fe5035"
    },
    sendUln302: {
      address: "0x72e34F44Eb09058bdDaf1aeEebDEC062f1844b00"
    },
    lzExecutor: {
      address: "0x0e6DdC254A6Cd8395D7795D03d4023453AdBBf62"
    },
    sendUln301: {
      address: "0xDDfe281aB129eaB0e319C20CD0908cD69100d368"
    },
    receiveUln301: {
      address: "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23"
    },
    version: 2,
    receiveUln302: {
      address: "0xbEA34F26b6FBA63054e4eD86806adce594A62561"
    }
  },
  {
    eid: 40332,
    chainKey: "hyperliquid-testnet",
    stage: "testnet",
    executor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    deadDVN: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    sendUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    lzExecutor: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    sendUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    receiveUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    version: 2,
    receiveUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    }
  },
  {
    eid: 40344,
    chainKey: "citrea-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30126,
    chainKey: "moonbeam",
    stage: "mainnet",
    executor: {
      address: "0xEC0906949f88f72bF9206E84764163e24a56a499"
    },
    deadDVN: {
      address: "0x28eEE23B2b6C5582112037FD43A4d8C359F54D4D"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xeac136456d078bB76f59DCcb2d5E008b31AfE1cF"
    },
    lzExecutor: {
      address: "0x05B52859Adb077a7b7D6277a512aEfEFbaDDc9C8"
    },
    sendUln301: {
      address: "0xa62ACEff16b515e5B37e3D3bccE5a6fF8178aA84"
    },
    receiveUln301: {
      address: "0xeb2C36446b9A08634BaA970AEBf8888762d24beF"
    },
    version: 2,
    receiveUln302: {
      address: "0x2F4C6eeA955e95e6d65E08620D980C0e0e92211F"
    }
  },
  {
    eid: 40126,
    chainKey: "moonbase",
    stage: "testnet",
    executor: {
      address: "0xd10fe0817Ebb477Bc05Df7d503dE9d022B6B0831"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x4CC50568EdC84101097E06bCf736918f637e6aB7"
    },
    lzExecutor: {
      address: "0xf2aC82dBc8b6c08BF8f47db164DA2B12f1299763"
    },
    sendUln301: {
      address: "0x7155A274c055a9D74C83f8cA13660781643062D4"
    },
    receiveUln301: {
      address: "0xC192220C8bb485b46132EA9b17Eb5B2A552E2324"
    },
    version: 2,
    receiveUln302: {
      address: "0x5468b60ed00F9b389B5Ba660189862Db058D7dC8"
    }
  },
  {
    eid: 40272,
    chainKey: "mantasep-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30213,
    chainKey: "orderly",
    stage: "mainnet",
    executor: {
      address: "0x1aCe9DD1BC743aD036eF2D92Af42Ca70A1159df5"
    },
    deadDVN: {
      address: "0x690b1857EaA8c55850547d7C22148C0B99a71dCd"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x5B23E2bAe5C5f00e804EA2C4C9abe601604378fa"
    },
    lzExecutor: {
      address: "0xe9AE261D3aFf7d3fCCF38Fa2d612DD3897e07B2d"
    },
    sendUln301: {
      address: "0xF622DFb40bf7340DBCf1e5147D6CFD95d7c5cF1F"
    },
    receiveUln301: {
      address: "0x6167caAb5c3DA63311186db4D4E2596B20f557ec"
    },
    version: 2,
    receiveUln302: {
      address: "0xCFf08a35A5f27F306e2DA99ff198dB90f13DEF77"
    }
  },
  {
    eid: 40200,
    chainKey: "orderly-testnet",
    stage: "testnet",
    executor: {
      address: "0x1e567E344B2d990D2ECDFa4e14A1c9a1Beb83e96"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x8e3Dc55b7A1f7Fe4ce328A1c90dC1B935a30Cc42"
    },
    lzExecutor: {
      address: "0x98325A9d9B05FfBd179362a836201E3856AeDDA2"
    },
    sendUln301: {
      address: "0xD528e5146a084DA4dc29B5De74434C5BC0d17FA7"
    },
    receiveUln301: {
      address: "0xcdF2186AC463Ae7c97803cF6bBA5276084AB0a72"
    },
    version: 2,
    receiveUln302: {
      address: "0x3013C32e5F45E69ceA9baD4d96786704C2aE148c"
    }
  },
  {
    eid: 30195,
    chainKey: "zora",
    stage: "mainnet",
    executor: {
      address: "0x4f8B7a7a346Da5c467085377796e91220d904c15"
    },
    deadDVN: {
      address: "0x08aB92e05bA1dEC2C5bb876caa0Af60cAede1D17"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xeDf930Cd8095548f97b21ec4E2dE5455a7382f04"
    },
    lzExecutor: {
      address: "0x1aCe9DD1BC743aD036eF2D92Af42Ca70A1159df5"
    },
    sendUln301: {
      address: "0x7004396C99D5690da76A7C59057C5f3A53e01704"
    },
    receiveUln301: {
      address: "0x5EB6b3Db915d29fc624b8a0e42AC029e36a1D86B"
    },
    version: 2,
    receiveUln302: {
      address: "0x57D9775eE8feC31F1B612a06266f599dA167d211"
    }
  },
  {
    eid: 40195,
    chainKey: "zora-testnet",
    stage: "testnet",
    executor: {
      address: "0x5C987191efF6ed62dFb369fA26f9d78e3F87f9A9"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x87FE14Af115F3b14F7d91Be426C0213a24AE9498"
    },
    lzExecutor: {
      address: "0xBc0C24E6f24eC2F1fd7E859B8322A1277F80aaD5"
    },
    sendUln301: {
      address: "0xfC78F0f43B3b485A3C2853b32856A686d260E1aC"
    },
    receiveUln301: {
      address: "0x98434eb1F04ab5dFbEAcbA6C978b78E72C6Df744"
    },
    version: 2,
    receiveUln302: {
      address: "0xE321800e1D8277d2bf36A0979cd281c2B6760313"
    }
  },
  {
    eid: 40238,
    chainKey: "rc1-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30151,
    chainKey: "metis",
    stage: "mainnet",
    executor: {
      address: "0xE6AB3B3E632f3C65c3cb4c250DcC42f5E915A1cf"
    },
    deadDVN: {
      address: "0x4CC028221B4567c7439dC618D2d7f7a22315C1e4"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x63e39ccB510926d05a0ae7817c8f1CC61C5BdD6c"
    },
    lzExecutor: {
      address: "0xc1b85974F7c2F0Ccb01d763F4a34BFB41a33D612"
    },
    sendUln301: {
      address: "0x6BD792911F4B3714E88FbDf32B351632e7d22c70"
    },
    receiveUln301: {
      address: "0xDcc1A1a26807c687300A63A72eF111F6fe994068"
    },
    version: 2,
    receiveUln302: {
      address: "0x5539Eb17a84E1D59d37C222Eb2CC4C81b502D1Ac"
    }
  },
  {
    eid: 40151,
    chainKey: "metis-goerli",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30216,
    chainKey: "xpla",
    stage: "mainnet",
    executor: {
      address: "0x148f693af10ddfaE81cDdb36F4c93B31A90076e1"
    },
    deadDVN: {
      address: "0xADfAC55b334dE39B3eFBe88Bb1c992765e88Bb60"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xF622DFb40bf7340DBCf1e5147D6CFD95d7c5cF1F"
    },
    lzExecutor: {
      address: "0x8DD9197E51dC6082853aD71D35912C53339777A7"
    },
    sendUln301: {
      address: "0x4f8B7a7a346Da5c467085377796e91220d904c15"
    },
    receiveUln301: {
      address: "0xe9bA4C1e76D874a43942718Dafc96009ec9D9917"
    },
    version: 2,
    receiveUln302: {
      address: "0x6167caAb5c3DA63311186db4D4E2596B20f557ec"
    }
  },
  {
    eid: 40216,
    chainKey: "xpla-testnet",
    stage: "testnet",
    executor: {
      address: "0x43d28BEbaDF8B99C1aCF8c4961E4Fb895321EF23"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x1a2fd0712Ded46794022DdB16a282e798D22a7FB"
    },
    lzExecutor: {
      address: "0x5Dc8940645aCeAb31f7b3486A5855d0628Bad6d2"
    },
    sendUln301: {
      address: "0x68D92080C987FfFfDC7c3e937AB4f70fd9d34EA9"
    },
    receiveUln301: {
      address: "0x9130D98D47984BF9dc796829618C36CBdA43EBb9"
    },
    version: 2,
    receiveUln302: {
      address: "0x13f78F780BB0ED02bC6df9FFA42fc2D8bB3F9aF5"
    }
  },
  {
    eid: 40298,
    chainKey: "vanguard-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40271,
    chainKey: "ll1-testnet",
    stage: "testnet",
    executor: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    lzExecutor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    sendUln301: {
      address: "0x8A4D033038baC87Fe55e362cA360Eb61a2eD478E"
    },
    receiveUln301: {
      address: "0x7941943c745690Cc2e7E8f4a75f08893d990328C"
    },
    version: 2,
    receiveUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    }
  },
  {
    eid: 40340,
    chainKey: "odyssey-testnet",
    endpointV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    readLib1002: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    },
    version: 2,
    stage: "testnet",
    executor: {
      address: "0x8dF53a660a00C3D977d7E778fB7385ECf4482D16"
    },
    deadDVN: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln302: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    lzExecutor: {
      address: "0xec28645346D781674B4272706D8a938dB2BAA2C6"
    },
    sendUln301: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    receiveUln301: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    receiveUln302: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    }
  },
  {
    eid: 40247,
    chainKey: "zkpolygon-sepolia",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    receiveUln301: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    },
    version: 2,
    receiveUln302: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    }
  },
  {
    eid: 40246,
    chainKey: "mantle-sepolia",
    stage: "testnet",
    executor: {
      address: "0x8BEEe743829af63F5b37e52D5ef8477eF12511dE"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd"
    },
    lzExecutor: {
      address: "0x340b5E5E90a6D177E7614222081e0f9CDd54f25C"
    },
    sendUln301: {
      address: "0x939Afd54A8547078dBEa02b683A7F1FDC929f853"
    },
    receiveUln301: {
      address: "0x72b65B2E699E3B5d664EF776C068236B6b8004d6"
    },
    version: 2,
    receiveUln302: {
      address: "0x8A3D588D9f6AC041476b094f97FF94ec30169d3D"
    }
  },
  {
    eid: 30302,
    chainKey: "peaq",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40299,
    chainKey: "peaq-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30234,
    chainKey: "bb1",
    stage: "mainnet",
    executor: {
      address: "0xB041cd355945627BDb7281f613B6E29623ab0110"
    },
    deadDVN: {
      address: "0x3aA71d4C322eD650a78BC3A8BAB292e47a214A2c"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x000CC1A759bC3A15e664Ed5379E321Be5de1c9B6"
    },
    lzExecutor: {
      address: "0x15feEA944A7F4eE4835c59ABC488C1935f2301b4"
    },
    sendUln301: {
      address: "0xF9d24d3AbF64A99C6FcdF19b27eF74B723A6110a"
    },
    receiveUln301: {
      address: "0x8DD9197E51dC6082853aD71D35912C53339777A7"
    },
    version: 2,
    receiveUln302: {
      address: "0xe9AE261D3aFf7d3fCCF38Fa2d612DD3897e07B2d"
    }
  },
  {
    eid: 30202,
    chainKey: "opbnb",
    stage: "mainnet",
    executor: {
      address: "0xACbD57daAafb7D9798992A7b0382fc67d3E316f3"
    },
    deadDVN: {
      address: "0xd0a9ec7544106258c5836121fA032AE65c83f99B"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x44289609cc6781fa2C665796b6c5AAbf9FFceDC5"
    },
    lzExecutor: {
      address: "0x2F64656569c098fdfb0bD0ab2f3616005E295810"
    },
    sendUln301: {
      address: "0xA2532E716E5c7755F567a74D75804D84d409DcDA"
    },
    receiveUln301: {
      address: "0x7807888fAC5c6f23F6EeFef0E6987DF5449C1BEb"
    },
    version: 2,
    receiveUln302: {
      address: "0x9c9e25F9fC4e8134313C2a9f5c719f5c9F4fbD95"
    }
  },
  {
    eid: 40202,
    chainKey: "opbnb-testnet",
    stage: "testnet",
    executor: {
      address: "0x0F0843fF71918B8Cb8e480BD8C581373BE3c1f9b"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xf514191C4a2D3b9A629fB658702015a5bCd570BC"
    },
    lzExecutor: {
      address: "0x6f3a314C1279148E53f51AF154817C3EF2C827B1"
    },
    sendUln301: {
      address: "0xD52CFbea8d2C96231D5547547Ba36De3d343713e"
    },
    receiveUln301: {
      address: "0x5Dc8940645aCeAb31f7b3486A5855d0628Bad6d2"
    },
    version: 2,
    receiveUln302: {
      address: "0x4b21Ad992A05Fb14e08df2cAF8d71A5c28b1f5E9"
    }
  },
  {
    eid: 30196,
    chainKey: "tomo",
    stage: "mainnet",
    executor: {
      address: "0x2d24207F9C1F77B2E08F2C3aD430da18e355CF66"
    },
    deadDVN: {
      address: "0x658Ff096EE44e16564beA9E1161eCBC503aE6E75"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x6f1686189f32e78f1D83e7c6Ed433FCeBc3A5B51"
    },
    lzExecutor: {
      address: "0xA09dB5142654e3eB5Cf547D66833FAe7097B21C3"
    },
    sendUln301: {
      address: "0xC1EC25A9e8a8DE5Aa346f635B33e5B74c4c081aF"
    },
    receiveUln301: {
      address: "0xB6BaCA78e430EF1D6D87a23B043bFDd4B5df8B6c"
    },
    version: 2,
    receiveUln302: {
      address: "0x7004396C99D5690da76A7C59057C5f3A53e01704"
    }
  },
  {
    eid: 40196,
    chainKey: "tomo-testnet",
    stage: "testnet",
    executor: {
      address: "0xe4C9F9Fa374273736199bdeB712592cE1a3B4B26"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xbB7e6FE3fA954BF0e5Ea77d38736C56E8D09514B"
    },
    lzExecutor: {
      address: "0x94211aB97A59EeD7d28e024F7BbD770C40d8c46c"
    },
    sendUln301: {
      address: "0x88E02546b30A275Cb09630aC545809D76E326021"
    },
    receiveUln301: {
      address: "0x48e4aae2c9f9eF9CcEb0327af35c53Fa716Df9D1"
    },
    version: 2,
    receiveUln302: {
      address: "0x8468689ca62D8806614EEdb9F26a13e1Fddbd6BD"
    }
  },
  {
    eid: 40339,
    chainKey: "gameswift-testnet",
    endpointV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    readLib1002: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    },
    version: 2,
    stage: "testnet",
    executor: {
      address: "0x8dF53a660a00C3D977d7E778fB7385ECf4482D16"
    },
    deadDVN: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln302: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    lzExecutor: {
      address: "0xec28645346D781674B4272706D8a938dB2BAA2C6"
    },
    sendUln301: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    receiveUln301: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    receiveUln302: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    }
  },
  {
    eid: 30149,
    chainKey: "dos",
    stage: "mainnet",
    executor: {
      address: "0x5B23E2bAe5C5f00e804EA2C4C9abe601604378fa"
    },
    deadDVN: {
      address: "0x4474B891BF3D93e61676912F0739e04B86232dd5"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x72C91c46d7033dfF1707091Ef32D4951a73bD099"
    },
    lzExecutor: {
      address: "0xBB967E3A329F4c47F654B82a2F7d11E69E5A7143"
    },
    sendUln301: {
      address: "0x79089C4eD119900839AdD13a1a8F0298ABFC4aa2"
    },
    receiveUln301: {
      address: "0x94fE59AfAff2d0a8Ea6e8158FeB7C65410867a9b"
    },
    version: 2,
    receiveUln302: {
      address: "0xEF7781FC1C4F7B2Fd3Cf03f4d65b6835b27C1A0d"
    }
  },
  {
    eid: 40286,
    chainKey: "dos-testnet",
    stage: "testnet",
    executor: {
      address: "0x06f021541521Ae6dcfaeED4EC9A8bF800528E805"
    },
    endpointV2: {
      address: "0x08416c0eAa8ba93F907eC8D6a9cAb24821C53E64"
    },
    sendUln302: {
      address: "0xa805000DcA12b38690558785878642BA19Bc4981"
    },
    lzExecutor: {
      address: "0x3Bfd3c601951E1939b4B11c3aF68A48436DF65ee"
    },
    sendUln301: {
      address: "0x8fC0E34d14d80148BB24EF48fA05621B181D098e"
    },
    receiveUln301: {
      address: "0x9d925b84c726f2Bc4Af308fBB23679BCB344fE72"
    },
    version: 2,
    receiveUln302: {
      address: "0x00D0cd55beAfb96f0A5c37452f56D06DA3765ce8"
    }
  },
  {
    eid: 30237,
    chainKey: "real",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0xdA13808dBE60775e9B8B07a7cc9b98DFBd0f769f"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 30327,
    chainKey: "superposition",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40336,
    chainKey: "superposition-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30217,
    chainKey: "manta",
    stage: "mainnet",
    executor: {
      address: "0x8DD9197E51dC6082853aD71D35912C53339777A7"
    },
    deadDVN: {
      address: "0xf9420F9D2552640e242Ad89CD5D3b625F92705C9"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xD1654C656455E40E2905E96b6B91088AC2B362a2"
    },
    lzExecutor: {
      address: "0xe767e048221197A2b590CeB5C63C3AAD8ebf87eA"
    },
    sendUln301: {
      address: "0x1aCe9DD1BC743aD036eF2D92Af42Ca70A1159df5"
    },
    receiveUln301: {
      address: "0x000CC1A759bC3A15e664Ed5379E321Be5de1c9B6"
    },
    version: 2,
    receiveUln302: {
      address: "0xC1EC25A9e8a8DE5Aa346f635B33e5B74c4c081aF"
    }
  },
  {
    eid: 40221,
    chainKey: "manta-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30294,
    chainKey: "gravity",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 30361,
    chainKey: "goat",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40356,
    chainKey: "goat-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40171,
    chainKey: "cathay-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30167,
    chainKey: "moonriver",
    stage: "mainnet",
    executor: {
      address: "0x1E1E9A04735B9ca509eF8a46255f5104C10C6e99"
    },
    deadDVN: {
      address: "0x24D7ff228a81e827Efc29ec45E7b30a99B96C653"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x1BAcC2205312534375c8d1801C27D28370656cFf"
    },
    lzExecutor: {
      address: "0xb7e97ad5661134185Fe608b2A31fe8cEf2147Ba9"
    },
    sendUln301: {
      address: "0xB81F326b95e79eaC4aba800Ae545efb4C602973D"
    },
    receiveUln301: {
      address: "0x982e44efBE44f187C3d0edB8f875221aE7E6db1b"
    },
    version: 2,
    receiveUln302: {
      address: "0xe8BAa65CeD8E46DA43520375Af6fAbC31D7bCb8B"
    }
  },
  {
    eid: 30145,
    chainKey: "gnosis",
    stage: "mainnet",
    executor: {
      address: "0x38340337f9ADF5D76029Ab3A667d34E5a032F7BA"
    },
    deadDVN: {
      address: "0x8a893567f27893e6E0c7b6bba8769d9ab3E911Ff"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x3C156b1f625D2B4E004D43E91aC2c3a719C29c7B"
    },
    lzExecutor: {
      address: "0x2F0788fFbf8fCa58B2ea10c05F0CA9931ffC8978"
    },
    sendUln301: {
      address: "0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e"
    },
    receiveUln301: {
      address: "0xaDDed4478B423d991C21E525Cd3638FBce1AaD17"
    },
    version: 2,
    receiveUln302: {
      address: "0x9714Ccf1dedeF14BaB5013625DB92746C1358cb4"
    }
  },
  {
    eid: 40145,
    chainKey: "chiado",
    stage: "testnet",
    executor: {
      address: "0xe3826C822a53a736cC4d8f6FD884a6E3A461d29F"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xddF3266fEAa899ACcf805F4379E5137144cb0A7D"
    },
    lzExecutor: {
      address: "0x410612e1721396A3D03bE613b2FE7c31fa6fefb7"
    },
    sendUln301: {
      address: "0x97237B7Daff151Eb9793Aa749b487B8bA157E465"
    },
    receiveUln301: {
      address: "0x9c79B1B82Ab36FbDf927afbD653Ebb6b9cd11121"
    },
    version: 2,
    receiveUln302: {
      address: "0xC22825d9982365d31E63CC3b5589B17067e795b1"
    }
  },
  {
    eid: 30315,
    chainKey: "dm2verse",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40321,
    chainKey: "dm2verse-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 40297,
    chainKey: "opencampus-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40270,
    chainKey: "form-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 30236,
    chainKey: "xai",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0xEFf272433131a0077592f58a16B702EE49B04312"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40251,
    chainKey: "xai-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30322,
    chainKey: "morph",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40322,
    chainKey: "morph-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30183,
    chainKey: "linea",
    stage: "mainnet",
    executor: {
      address: "0x0408804C5dcD9796F22558464E6fE5bDdF16A7c7"
    },
    deadDVN: {
      address: "0x1b368a0d7c57080a01054862114B5a42e54CBb98"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x32042142DD551b4EbE17B6FEd53131dd4b4eEa06"
    },
    lzExecutor: {
      address: "0x59dAE6516D2fA7F21195adC0Cda14d819D21031C"
    },
    sendUln301: {
      address: "0x119C04C4E60158fa69eCf4cdDF629D09719a7572"
    },
    receiveUln301: {
      address: "0x443CAa8CD23D8CC1e04B3Ce897822AEa6ad3EbDA"
    },
    version: 2,
    receiveUln302: {
      address: "0xE22ED54177CE1148C557de74E4873619e6c6b205"
    }
  },
  {
    eid: 40157,
    chainKey: "linea-goerli",
    stage: "testnet",
    executor: {
      address: "0xadFd7EBfdb23E9a1D22726D7D669A4EFF627E1F0"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x56aC647e1863a473D295a1F02E3186Fb954Be4C4"
    },
    lzExecutor: {
      address: "0x77Fc8a6302Ae07A2621c0af8d940B2860326D0Eb"
    },
    sendUln301: {
      address: "0x48414489cE555118896dBc936Ba429E1b26aa976"
    },
    receiveUln301: {
      address: "0x6e05E05457B596fB09Ffd9BdE092f78171cA16A1"
    },
    version: 2,
    receiveUln302: {
      address: "0x2F2d67C251b53074578Af69f437f341670BAc9C7"
    }
  },
  {
    eid: 40236,
    chainKey: "gunzilla-testnet",
    stage: "testnet",
    executor: {
      address: "0x955412C07d9bC1027eb4d481621ee063bFd9f4C6"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x82b7dc04A4ABCF2b4aE570F317dcab49f5a10f24"
    },
    lzExecutor: {
      address: "0x4C5302179f37DFBadC61CA7C3DE5FF489667C173"
    },
    sendUln301: {
      address: "0x9D0A659cAC5F122e22bAaDD8769a3abc05C6bdAE"
    },
    receiveUln301: {
      address: "0x62273145f80EB808EeF539Ed3ea21f4440CEBB18"
    },
    version: 2,
    receiveUln302: {
      address: "0x306202702AF38152D3604cD82af71C3db0eE08CF"
    }
  },
  {
    eid: 30148,
    chainKey: "shrapnel",
    stage: "mainnet",
    version: 2
  },
  {
    eid: 40164,
    chainKey: "shrapnel-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30110,
    chainKey: "arbitrum",
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    readLib1002: {
      address: "0xbcd4CADCac3F767C57c4F402932C4705DF62BEFf"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x31CAe3B7fB82d847621859fb1585353c5720660D"
    },
    deadDVN: {
      address: "0x758C419533ad64Ce9D3413BC8d3A97B026098EC1"
    },
    sendUln302: {
      address: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A"
    },
    lzExecutor: {
      address: "0x6862dEd20594DA16B7cbB282894FaE23043A32BC"
    },
    sendUln301: {
      address: "0x5cDc927876031B4Ef910735225c425A7Fc8efed9"
    },
    receiveUln301: {
      address: "0xe4DD168822767C4342e54e6241f0b91DE0d3c241"
    },
    receiveUln302: {
      address: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6"
    }
  },
  {
    eid: 50231,
    chainKey: "arbitrum-sandbox",
    stage: "sandbox",
    executor: {
      address: "0x36B22905A1211A55E0d62eF46720172e2b0f24BD"
    },
    endpointV2: {
      address: "0x0b48aF34f4c854F5ae1A3D587da471FeA45bAD52"
    },
    readLib1002: {
      address: "0x0D4ff719551E23185Aeb16FFbF2ABEbB90635942"
    },
    sendUln302: {
      address: "0xe6b98F104c1BEf218F3893ADab4160Dc73Eb8367"
    },
    lzExecutor: {
      address: "0x050499eBdbBBc1216011dE07A48b5182c983Ae74"
    },
    sendUln301: {
      address: "0x73eccD6288e117cAcA738BDAD4FEC51312166C1A"
    },
    receiveUln301: {
      address: "0x381445710b5e73d34aF196c53A3D5cDa58EDBf7A"
    },
    version: 2,
    receiveUln302: {
      address: "0x5C7c905B505f0Cf40Ab6600d05e677F717916F6B"
    }
  },
  {
    eid: 40143,
    chainKey: "arbitrum-goerli",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40305,
    chainKey: "zksync-sepolia",
    stage: "testnet",
    executor: {
      address: "0x6E9bcFCbEdb7d1298E66cdE81ed9f39b1e12f935"
    },
    deadDVN: {
      address: "0x7750C0cBAE78Ddf514B9aEFeB2887143D3DBD203"
    },
    endpointV2: {
      address: "0xe2Ef622A13e71D9Dd2BBd12cd4b27e1516FA8a09"
    },
    sendUln302: {
      address: "0xaF862837316E00d2708Bd648c5FE87EdC7093799"
    },
    lzExecutor: {
      address: "0x07246FE876b4d283CA0Ca06A4144d6e160aCC739"
    },
    sendUln301: {
      address: "0xEB018c5EA156EF9425e644396e90d9447Ed8eD72"
    },
    receiveUln301: {
      address: "0x9b7F328813DA3942C26D92090991D1C4c61acE20"
    },
    version: 2,
    receiveUln302: {
      address: "0x5c123dB6f87CC0d7e320C5CC9EaAfD336B5f6eF3"
    }
  },
  {
    eid: 30138,
    chainKey: "fuse",
    stage: "mainnet",
    executor: {
      address: "0xc905E74BEb8229E258c3C6E5bC0D6Cc54C534688"
    },
    deadDVN: {
      address: "0xFB01E486d8B2556a70Fe66E4A86d76DEAb4Ba974"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x2762409Baa1804D94D8c0bCFF8400B78Bf915D5B"
    },
    lzExecutor: {
      address: "0x07245eEa05826F5984c7c3C8F478b04892e4df89"
    },
    sendUln301: {
      address: "0xCD2E3622d483C7Dc855F72e5eafAdCD577ac78B4"
    },
    receiveUln301: {
      address: "0x6b340A6413068C423cfd63D91764B34457C97Aa4"
    },
    version: 2,
    receiveUln302: {
      address: "0xB12514e226E50844E4655696c92c0c36B8A53141"
    }
  },
  {
    eid: 40138,
    chainKey: "fusespark",
    stage: "testnet",
    executor: {
      address: "0x86d08462EaA1559345d7F41f937B2C804209DB8A"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x098Fed01ABd66C63e706Ed9b368726DE54FefBEb"
    },
    lzExecutor: {
      address: "0x7F417F2192B89Cf93b8c4Ee01d558883A0AD7B47"
    },
    sendUln301: {
      address: "0x134FC1970434b837FF11E1dF29d1Da00338B4FFf"
    },
    receiveUln301: {
      address: "0x76519C66ecA66185d129E1142417aEf22ee47693"
    },
    version: 2,
    receiveUln302: {
      address: "0x253E37074D299b70d11F72eF547cc2EF59fD7f9C"
    }
  },
  {
    eid: 30150,
    chainKey: "klaytn",
    stage: "mainnet",
    executor: {
      address: "0xe149187a987F129FD3d397ED04a60b0b89D1669f"
    },
    deadDVN: {
      address: "0xdc58A279Bd69B208a4AdfdA0Aa066f76e33E2901"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x9714Ccf1dedeF14BaB5013625DB92746C1358cb4"
    },
    lzExecutor: {
      address: "0x75b073994560A5c03Cd970414d9170be0C6e5c36"
    },
    sendUln301: {
      address: "0xaDDed4478B423d991C21E525Cd3638FBce1AaD17"
    },
    receiveUln301: {
      address: "0x9d76EFE29157803a03b68329486f53D9b131580a"
    },
    version: 2,
    receiveUln302: {
      address: "0x937AbA873827BF883CeD83CA557697427eAA46Ee"
    }
  },
  {
    eid: 40150,
    chainKey: "klaytn-baobab",
    stage: "testnet",
    executor: {
      address: "0xddF3266fEAa899ACcf805F4379E5137144cb0A7D"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x6bd925aA58325fba65Ea7d4412DDB2E5D2D9427d"
    },
    lzExecutor: {
      address: "0xAe0549FeF1B77d2D187C867Ad9a5432A9e8381C9"
    },
    sendUln301: {
      address: "0x8C89F0429FeB2faD83C76d32C3c17787168D9421"
    },
    receiveUln301: {
      address: "0xe32d6C652b85A5183C2117749E0bc8A41e6b7282"
    },
    version: 2,
    receiveUln302: {
      address: "0xFc4eA96c3de3Ba60516976390fA4E945a0b8817B"
    }
  },
  {
    eid: 30340,
    chainKey: "soneium",
    stage: "mainnet",
    executor: {
      address: "0xAE3C661292bb4D0AEEe0588b4404778DF1799EE6"
    },
    deadDVN: {
      address: "0xf90b61aa892ba0433F54D2C1BF594d89d22ed7F6"
    },
    endpointV2: {
      address: "0x4bcb6a963a9563c33569d7a512d35754221f3a19"
    },
    sendUln302: {
      address: "0x50351C9dA75CCC6d8Ea2464B26591Bb4bd616dD5"
    },
    lzExecutor: {
      address: "0x7D8A496469dcEDa40832CF4d7663ccFbcC4784E3"
    },
    sendUln301: {
      address: "0x4bB746ED0DF6A8be563Ff66dFc502f084779F9c9"
    },
    receiveUln301: {
      address: "0x46523e5Fd61840D065FB8A0f5Dffaf235F4475f6"
    },
    version: 2,
    receiveUln302: {
      address: "0x364B548d8e6DB7CA84AaAFA54595919eCcF961eA"
    }
  },
  {
    eid: 40217,
    chainKey: "holesky-testnet",
    stage: "testnet",
    executor: {
      address: "0xBc0C24E6f24eC2F1fd7E859B8322A1277F80aaD5"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x21F33EcF7F65D61f77e554B4B4380829908cD076"
    },
    lzExecutor: {
      address: "0x9D3C36226c8a32D9F7AAC9CecB3d904529486d12"
    },
    sendUln301: {
      address: "0xDD066F8c7592bf7235F314028E5e01a66F9835F0"
    },
    receiveUln301: {
      address: "0x8d00218390E52B30d755882E09B2418eD08dCa7d"
    },
    version: 2,
    receiveUln302: {
      address: "0xbAe52D605770aD2f0D17533ce56D146c7C964A0d"
    }
  },
  {
    eid: 30212,
    chainKey: "conflux",
    stage: "mainnet",
    executor: {
      address: "0x07Dd1bf9F684D81f59B6a6760438d383ad755355"
    },
    deadDVN: {
      address: "0x3E7647e24553d486eD1B1Db94B86C7677eA9aB65"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xb360A579Dc6f77d6a3E8710A9d983811129C428d"
    },
    lzExecutor: {
      address: "0x3E9a1d9aC31B703Ac86874395a2410e123902AE9"
    },
    sendUln301: {
      address: "0x08D4c56cb7766b947c5b76e83bF23bE0Df6e1Abb"
    },
    receiveUln301: {
      address: "0x0BcAC336466ef7F1e0b5c184aAB2867C108331aF"
    },
    version: 2,
    receiveUln302: {
      address: "0x16Cc4EF7c128d7FEa96Cf46FFD9dD20f76170347"
    }
  },
  {
    eid: 40211,
    chainKey: "conflux-testnet",
    stage: "testnet",
    executor: {
      address: "0xE699078689c771383C8e262DCFeE520c9171ED53"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x9325bE62062a8844839C0fF9cbb0bA97b2d9EAF9"
    },
    lzExecutor: {
      address: "0x4235F07eFE67afC9EcaD2B79B5df7479E7489425"
    },
    sendUln301: {
      address: "0x95eF4b9f53bb078372CA50624968126aF38246Bf"
    },
    receiveUln301: {
      address: "0x9FC61783e62f699Ea372773f27E486f423480302"
    },
    version: 2,
    receiveUln302: {
      address: "0x99710d5cd4650A0E6b34438d0bD860F5A426EFd6"
    }
  },
  {
    eid: 30215,
    chainKey: "eon",
    stage: "mainnet",
    executor: {
      address: "0xA09dB5142654e3eB5Cf547D66833FAe7097B21C3"
    },
    deadDVN: {
      address: "0xf9420F9D2552640e242Ad89CD5D3b625F92705C9"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x5EB6b3Db915d29fc624b8a0e42AC029e36a1D86B"
    },
    lzExecutor: {
      address: "0xF9d24d3AbF64A99C6FcdF19b27eF74B723A6110a"
    },
    sendUln301: {
      address: "0xF53857dbc0D2c59D5666006EC200cbA2936B8c35"
    },
    receiveUln301: {
      address: "0x4f8B7a7a346Da5c467085377796e91220d904c15"
    },
    version: 2,
    receiveUln302: {
      address: "0xF622DFb40bf7340DBCf1e5147D6CFD95d7c5cF1F"
    }
  },
  {
    eid: 40215,
    chainKey: "eon-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40352,
    chainKey: "nibiru-testnet",
    stage: "testnet",
    executor: {
      address: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd"
    },
    deadDVN: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    endpointV2: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    sendUln302: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    },
    lzExecutor: {
      address: "0x8dF53a660a00C3D977d7E778fB7385ECf4482D16"
    },
    sendUln301: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    receiveUln301: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    version: 2,
    receiveUln302: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    }
  },
  {
    eid: 30323,
    chainKey: "codex",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40311,
    chainKey: "codex-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40334,
    chainKey: "minato-testnet",
    stage: "testnet",
    executor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    deadDVN: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6Ac7bdc07A0583A362F1497252872AE6c0A5F5B8"
    },
    sendUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    lzExecutor: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    sendUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    receiveUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    version: 2,
    receiveUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    }
  },
  {
    eid: 30359,
    chainKey: "cronosevm",
    stage: "mainnet",
    executor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    deadDVN: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    endpointV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    sendUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    },
    lzExecutor: {
      address: "0x2BF2f59d2E318Bb03C8956E7BC4c3E6c28Bd0fC2"
    },
    sendUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    receiveUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    version: 2,
    receiveUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    }
  },
  {
    eid: 40359,
    chainKey: "cronosevm-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30343,
    controller: {
      address: "0x89f80af060b398ddd2716788696917796ca20fd107123b9e3b3a94fc8cfbecc9"
    },
    chainKey: "ton",
    stage: "mainnet",
    ulnManager: {
      address: "0x8022544a4b9e578792c7aaca767b60e97674d419669bbeda5f7ae4192cffae0c"
    },
    executor: {
      address: "0x40dc8e58207a0a0c5d94b2f66ee2af3a3f71708008dc399bfb3e67902965615b"
    },
    version: 2,
    allStorages: {
      address: "0x77908466078af0fc15f4f622212cc2ff57f80f734b51e1a031b0417e252998e0"
    },
    dvn: {
      address: "0x8392b1bc2f364d79ebc755e494cafc18cd9fa6e6d1f90bc1d21685ac0b6765f0"
    }
  },
  {
    eid: 50343,
    controller: {
      address: "0x3f0dde096a3245161fc088c2546df0cbf3ca8e74b86c87f4ddaa5f960c49c89e"
    },
    chainKey: "ton-sandbox",
    stage: "sandbox",
    ulnManager: {
      address: "0xa48102515925eab1aa8840538c78ded3c2d0bbba7084dcd51acb6c17e09355f2"
    },
    executor: {
      address: "0x246125681d46d4050f026da54b4552cd1ba2597730e5e1c2ea5661a9d11f63ff"
    },
    smlManager: {
      address: "0xe84a32e257bdba0720e60640dcdeb332159cc3b3bd151e1e68ccebeee6bcf563"
    },
    version: 2,
    allStorages: {
      address: "0x77908466078af0fc15f4f622212cc2ff57f80f734b51e1a031b0417e252998e0"
    },
    dvn: {
      address: "0xf824a62065af225f74bef24b481ad159ef95486bd3a0885f1d702f7b6203ab07"
    }
  },
  {
    eid: 40343,
    controller: {
      address: "0x86f796de262e0a9884404c1eeda3404b07dc6ae0e83500c6151ffdc6207ff278"
    },
    chainKey: "ton-testnet",
    stage: "testnet",
    ulnManager: {
      address: "0x869a28c66fb395a4e76d5bd8742dded0c72eeed15421bcc546ba48395e7dca50"
    },
    executor: {
      address: "0xac03bbd1a0b93c7d69fe8579a3ccef8449743e5ec37dd53867c6c9e1127965a4"
    },
    version: 2,
    allStorages: {
      address: "0x77908466078af0fc15f4f622212cc2ff57f80f734b51e1a031b0417e252998e0"
    },
    dvn: {
      address: "0x1f710336566f4167210d258aea6e987469404be7c628b06d7ec0e16c720dc22d"
    }
  },
  {
    eid: 30292,
    chainKey: "etherlink",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0x6F95f0e1903BDb57b0761c8EfE9BC3bfB7E416BB"
    },
    endpointV2: {
      address: "0xAaB5A48CFC03Efa9cC34A2C1aAcCCB84b4b770e4"
    },
    sendUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    receiveUln301: {
      address: "0x282b3386571f7f794450d5789911a9804FA346b4"
    },
    version: 2,
    receiveUln302: {
      address: "0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6"
    }
  },
  {
    eid: 40239,
    chainKey: "etherlink-testnet",
    stage: "testnet",
    executor: {
      address: "0x417cb9E12cfe7301c8b6ef8f63ffac55263e147C"
    },
    endpointV2: {
      address: "0xec28645346D781674B4272706D8a938dB2BAA2C6"
    },
    sendUln302: {
      address: "0xE62d066e71fcA410eD48ad2f2A5A860443C04035"
    },
    lzExecutor: {
      address: "0xFEe867ed545F26621Dc701e6164e02Ead9c6B081"
    },
    sendUln301: {
      address: "0x638B6D10D981273e19E32F812C9b916E82c86927"
    },
    receiveUln301: {
      address: "0x340b5E5E90a6D177E7614222081e0f9CDd54f25C"
    },
    version: 2,
    receiveUln302: {
      address: "0x2072a32Df77bAE5713853d666f26bA5e47E54717"
    }
  },
  {
    eid: 30115,
    chainKey: "dfk",
    stage: "mainnet",
    executor: {
      address: "0x1a7CE89220b945e82f80380B14aA6FDC5E5e3B2A"
    },
    deadDVN: {
      address: "0x4caC2E674d1c3C4548a00fbeCBBa713C902579cf"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xc80233AD8251E668BecbC3B0415707fC7075501e"
    },
    lzExecutor: {
      address: "0xE1CC9f508c53277534C62B511Eb1F42607993c1b"
    },
    sendUln301: {
      address: "0x75b073994560A5c03Cd970414d9170be0C6e5c36"
    },
    receiveUln301: {
      address: "0xcC2d3d4B88b87775Bec386d92F6951Ee7f8d52D9"
    },
    version: 2,
    receiveUln302: {
      address: "0x556d7664d5b4Db11f381c714B6b47A8Bf0b494FD"
    }
  },
  {
    eid: 40115,
    chainKey: "dfk-testnet",
    stage: "testnet",
    executor: {
      address: "0x1b3649C2C06F1fb0d3e57FB001c8B592f5E3CAc6"
    },
    endpointV2: {
      address: "0x94FF3a4d9E9792dc59193ff753B5038A14c59570"
    },
    sendUln302: {
      address: "0xd45316d099dC4f3B15f2462888D62D919bc07a61"
    },
    lzExecutor: {
      address: "0x2b4875BF114052e808CBD8498635F528c7d50C93"
    },
    sendUln301: {
      address: "0x00E118BE6932185202ecBf9c9ceE66240B29B47F"
    },
    receiveUln301: {
      address: "0x3D50Cb5860377aC29895fb3B034222B3e599689B"
    },
    version: 2,
    receiveUln302: {
      address: "0x5709988a03d1CC02197F222D2C72CcC6018bCE0B"
    }
  },
  {
    eid: 30332,
    chainKey: "sonic",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40349,
    chainKey: "sonic-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40177,
    chainKey: "blockgen-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30184,
    chainKey: "base",
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    readLib1002: {
      address: "0x1273141a3f7923AA2d9edDfA402440cE075ed8Ff"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4"
    },
    deadDVN: {
      address: "0x6498b0632f3834D7647367334838111c8C889703"
    },
    sendUln302: {
      address: "0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2"
    },
    lzExecutor: {
      address: "0x125BD5c6C5066dcb4BB448b6eA8b9234Ed60e160"
    },
    sendUln301: {
      address: "0x9DB3714048B5499Ec65F807787897D3b3Aa70072"
    },
    receiveUln301: {
      address: "0x58D53a2d6a08B72a15137F3381d21b90638bd753"
    },
    receiveUln302: {
      address: "0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf"
    }
  },
  {
    eid: 40160,
    chainKey: "base-goerli",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30324,
    chainKey: "abstract",
    endpointV2: {
      address: "0x5c6cfF4b7C49805F8295Ff73C204ac83f3bC4AE7"
    },
    readLib1002: {
      address: "0x2B79f3C2EE059E465a24bf5A2F4FE989546053B1"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x643E1471f37c4680Df30cF0C540Cd379a0fF58A5"
    },
    deadDVN: {
      address: "0x06e56abD0cb3C88880644bA3C534A498cA18E5C8"
    },
    sendUln302: {
      address: "0x166CAb679EBDB0853055522D3B523621b94029a1"
    },
    lzExecutor: {
      address: "0x068EC1f0bd53cf86923BbB0986046be6af3f5922"
    },
    sendUln301: {
      address: "0x07fD0e370B49919cA8dA0CE842B8177263c0E12c"
    },
    receiveUln301: {
      address: "0x04830f6deCF08Dec9eD6C3fCAD215245B78A59e1"
    },
    receiveUln302: {
      address: "0x9d799c1935c51CA399e6465Ed9841DEbCcEc413E"
    }
  },
  {
    eid: 40313,
    chainKey: "abstract-testnet",
    stage: "testnet",
    executor: {
      address: "0x5c123dB6f87CC0d7e320C5CC9EaAfD336B5f6eF3"
    },
    deadDVN: {
      address: "0x2DCC8cFb612fDbC0Fb657eA1B51A6F77b8b86448"
    },
    endpointV2: {
      address: "0x16c693A3924B947298F7227792953Cd6BBb21Ac8"
    },
    sendUln302: {
      address: "0xF636882f80cb5039D80F08cDEee1b166D700091b"
    },
    lzExecutor: {
      address: "0x319E7722F23aADc482e12DB036c7eD6c9377e61B"
    },
    sendUln301: {
      address: "0xD5eE0055c37dDfaF7e2e0CA3dECb60f365848Bd5"
    },
    receiveUln301: {
      address: "0x0Cc6F5414996678Aa4763c3Bc66058B47813fa85"
    },
    version: 2,
    receiveUln302: {
      address: "0x2443297aEd720EACED2feD76d1C6044471382EA2"
    }
  },
  {
    eid: 30257,
    chainKey: "zkatana",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x01cA5322ce196568a62780C480bb0CC0B595Efec"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    receiveUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    version: 2,
    receiveUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    }
  },
  {
    eid: 40220,
    chainKey: "zkatana-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30111,
    chainKey: "optimism",
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    readLib1002: {
      address: "0x01B29c03fAD8F455184573D6624a8136cF6106Fb"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e"
    },
    deadDVN: {
      address: "0xEbc3065003e67CaaC747836dA272d9E5271A37e1"
    },
    sendUln302: {
      address: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95"
    },
    lzExecutor: {
      address: "0xb02763373589c440Ed6ff32f47cf4b81CA285D01"
    },
    sendUln301: {
      address: "0x3823094993190Fbb3bFABfEC8365b8C18517566F"
    },
    receiveUln301: {
      address: "0x6C9AE31DFB56699d6bD553146f653DCEC3b174Fe"
    },
    receiveUln302: {
      address: "0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063"
    }
  },
  {
    eid: 50132,
    chainKey: "optimism-sandbox",
    stage: "sandbox",
    executor: {
      address: "0x36B22905A1211A55E0d62eF46720172e2b0f24BD"
    },
    endpointV2: {
      address: "0x0b48aF34f4c854F5ae1A3D587da471FeA45bAD52"
    },
    readLib1002: {
      address: "0x0D4ff719551E23185Aeb16FFbF2ABEbB90635942"
    },
    sendUln302: {
      address: "0xe6b98F104c1BEf218F3893ADab4160Dc73Eb8367"
    },
    lzExecutor: {
      address: "0x050499eBdbBBc1216011dE07A48b5182c983Ae74"
    },
    sendUln301: {
      address: "0x73eccD6288e117cAcA738BDAD4FEC51312166C1A"
    },
    receiveUln301: {
      address: "0x381445710b5e73d34aF196c53A3D5cDa58EDBf7A"
    },
    version: 2,
    receiveUln302: {
      address: "0x5C7c905B505f0Cf40Ab6600d05e677F717916F6B"
    }
  },
  {
    eid: 40132,
    chainKey: "optimism-goerli",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30118,
    chainKey: "dexalot",
    stage: "mainnet",
    executor: {
      address: "0xcbD35a9b849342AD34a71e072D9947D4AFb4E164"
    },
    deadDVN: {
      address: "0x92918f4AD410517B635a8961A64e77bDF8798dDC"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x439C059878fA7A747ead101e2e20A65AcA01C7A8"
    },
    lzExecutor: {
      address: "0x060335db0F285F144388E22e851916D654AB26A0"
    },
    sendUln301: {
      address: "0xb5c73a0b0788743D2818757c8D0A5AB7D37858E9"
    },
    receiveUln301: {
      address: "0xBFbBcB2Cc399086a3EEd28aC5947339c4Cf23eBA"
    },
    version: 2,
    receiveUln302: {
      address: "0xe01F3c1CD14F39303D175c31c16f58707B28976b"
    }
  },
  {
    eid: 40118,
    chainKey: "dexalot-testnet",
    stage: "testnet",
    executor: {
      address: "0x13EA72039D7f02848CDDd67a2F948dd334cDE70e"
    },
    endpointV2: {
      address: "0x72884B17f92a863fD056Ec3695Bd3484D601f39a"
    },
    sendUln302: {
      address: "0x4B68C45f6A276485870D56f1699DCf451FEC076F"
    },
    lzExecutor: {
      address: "0xAF1e8A7Ea4f30E3CBa6Bc2d87eCa1086C16ff8d3"
    },
    sendUln301: {
      address: "0x82470370d95d5cb20700a306DE3f8eF19cbCC725"
    },
    receiveUln301: {
      address: "0x21f1C2B131557c3AebA918D590815c47Dc4F20aa"
    },
    version: 2,
    receiveUln302: {
      address: "0x3De74963B7223343ffD168e230fC4e374282d37b"
    }
  },
  {
    eid: 40179,
    chainKey: "aavegotchi-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40354,
    chainKey: "memecoreformicarium-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x145C041566B21Bec558B2A37F1a5Ff261aB55998"
    },
    sendUln302: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    lzExecutor: {
      address: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd"
    },
    sendUln301: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    },
    receiveUln301: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    },
    version: 2,
    receiveUln302: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    }
  },
  {
    eid: 40329,
    chainKey: "plume2-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30364,
    chainKey: "story",
    endpointV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    deadDVN: {
      address: "0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887"
    },
    sendUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    },
    lzExecutor: {
      address: "0x306B9a8953B9462F8b826e6768a93C8EA7454965"
    },
    sendUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    receiveUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    receiveUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    },
    status: "PRIVATE"
  },
  {
    eid: 40315,
    chainKey: "story-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30282,
    chainKey: "ebi",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0x9F3f929F87b29F07A7026CFbC40e0e6B476D2185"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40284,
    chainKey: "ebi-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 30290,
    chainKey: "taiko",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0xc30Ff4F3182A75C0bE27493fA357886c06c384b6"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    receiveUln301: {
      address: "0x282b3386571f7f794450d5789911a9804FA346b4"
    },
    version: 2,
    receiveUln302: {
      address: "0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6"
    }
  },
  {
    eid: 40274,
    chainKey: "taiko-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 40209,
    chainKey: "kiwi-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30238,
    chainKey: "tiltyard",
    stage: "mainnet",
    executor: {
      address: "0xEF7781FC1C4F7B2Fd3Cf03f4d65b6835b27C1A0d"
    },
    deadDVN: {
      address: "0xa50d9C4aD49933f7bC0574D8c54427EC42C2B073"
    },
    endpointV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    sendUln302: {
      address: "0x62d142E186344C0a2445c822e356E87faF7b8288"
    },
    lzExecutor: {
      address: "0xb328c2C62E83D3a179646b5c7284A99182735241"
    },
    sendUln301: {
      address: "0x8aE19609FAf6343F4f6127eBA5504fa57276BC9a"
    },
    receiveUln301: {
      address: "0x841c5462d65Bf3Bc921b7bF2d728B7fE9d6831e7"
    },
    version: 2,
    receiveUln302: {
      address: "0xd83B25f4Ff6C596380c36C7eD10c225d6B17Dfd7"
    }
  },
  {
    eid: 30334,
    chainKey: "sophon",
    stage: "mainnet",
    executor: {
      address: "0x553313dB58dEeFa3D55B1457D27EAB3Fe5EC87E8"
    },
    deadDVN: {
      address: "0x04830f6deCF08Dec9eD6C3fCAD215245B78A59e1"
    },
    endpointV2: {
      address: "0x5c6cfF4b7C49805F8295Ff73C204ac83f3bC4AE7"
    },
    sendUln302: {
      address: "0x01047601DB5E63b1574aae317BAd9C684E3C9056"
    },
    lzExecutor: {
      address: "0xcaeB82549Ff641C4aF73505a137B5BeD06FEaf64"
    },
    sendUln301: {
      address: "0xd07C30aF3Ff30D96BDc9c6044958230Eb797DDBF"
    },
    receiveUln301: {
      address: "0xF5c814D4c78B64a1E52ce08F473112Fc27099905"
    },
    version: 2,
    receiveUln302: {
      address: "0x9AB633555E460C01f8c7b8ab24C88dD4986dD5A1"
    }
  },
  {
    eid: 40341,
    chainKey: "sophon-testnet",
    endpointV2: {
      address: "0x9EC2DB700a3c3D35888acCa134F3f860B4a0b41a"
    },
    readLib1002: {
      address: "0xf1A4f4FA1643ACf9f867b635A6d66a1990A3C217"
    },
    version: 2,
    stage: "testnet",
    executor: {
      address: "0xaF862837316E00d2708Bd648c5FE87EdC7093799"
    },
    deadDVN: {
      address: "0xE18A1F5942b31F075B00B5F5E944F384B15abF83"
    },
    sendUln302: {
      address: "0xC9968d69bfaFCFC1a768B2e97D4020386A5e15b2"
    },
    lzExecutor: {
      address: "0x557ab96f00b9774E5C53550F738933E0E0E6Ff6b"
    },
    sendUln301: {
      address: "0x6869b4348Fae6A911FDb5BaE5e0D153b2aA261f6"
    },
    receiveUln301: {
      address: "0x9c0B5520e3eC0ccE919cEaA1fb5AaA7cdAb437D4"
    },
    receiveUln302: {
      address: "0x21bc626E5e97FBF404Fda7e7D808E41A2fA56B60"
    }
  },
  {
    eid: 40348,
    chainKey: "treasure-testnet",
    stage: "testnet",
    executor: {
      address: "0xe2Ef622A13e71D9Dd2BBd12cd4b27e1516FA8a09"
    },
    deadDVN: {
      address: "0x9c0B5520e3eC0ccE919cEaA1fb5AaA7cdAb437D4"
    },
    endpointV2: {
      address: "0x9EC2DB700a3c3D35888acCa134F3f860B4a0b41a"
    },
    sendUln302: {
      address: "0x0e2c52BC2e119b1919e68f4F1874D4d30F6eF9fB"
    },
    lzExecutor: {
      address: "0x2DCC8cFb612fDbC0Fb657eA1B51A6F77b8b86448"
    },
    sendUln301: {
      address: "0xF636882f80cb5039D80F08cDEee1b166D700091b"
    },
    receiveUln301: {
      address: "0x2443297aEd720EACED2feD76d1C6044471382EA2"
    },
    version: 2,
    receiveUln302: {
      address: "0x5f04B588B9408d8d5F4ac250e8c71986683C35A5"
    }
  },
  {
    eid: 40292,
    chainKey: "metissep-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    receiveUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    version: 2,
    receiveUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    }
  },
  {
    eid: 30338,
    chainKey: "bl5",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40241,
    chainKey: "kiwi2-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40207,
    chainKey: "pgjjtk-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 30301,
    chainKey: "zklink",
    stage: "mainnet",
    executor: {
      address: "0x06e56abD0cb3C88880644bA3C534A498cA18E5C8"
    },
    deadDVN: {
      address: "0x4c1aC7b3C1223887dB9178d2437200B594EFFCf4"
    },
    endpointV2: {
      address: "0x5c6cfF4b7C49805F8295Ff73C204ac83f3bC4AE7"
    },
    sendUln302: {
      address: "0x01047601DB5E63b1574aae317BAd9C684E3C9056"
    },
    lzExecutor: {
      address: "0xdF7D44c9EfA2DB43152D9F5eD8b755b4BEbd323B"
    },
    sendUln301: {
      address: "0xd07C30aF3Ff30D96BDc9c6044958230Eb797DDBF"
    },
    receiveUln301: {
      address: "0xF5c814D4c78B64a1E52ce08F473112Fc27099905"
    },
    version: 2,
    receiveUln302: {
      address: "0x9AB633555E460C01f8c7b8ab24C88dD4986dD5A1"
    }
  },
  {
    eid: 40283,
    chainKey: "zklink-testnet",
    stage: "testnet",
    executor: {
      address: "0x0Cc6F5414996678Aa4763c3Bc66058B47813fa85"
    },
    endpointV2: {
      address: "0xF3e37ca248Ff739b8d0BebCcEAe1eeB199223dba"
    },
    sendUln302: {
      address: "0xf1A4f4FA1643ACf9f867b635A6d66a1990A3C217"
    },
    lzExecutor: {
      address: "0xE18A1F5942b31F075B00B5F5E944F384B15abF83"
    },
    sendUln301: {
      address: "0x21bc626E5e97FBF404Fda7e7D808E41A2fA56B60"
    },
    receiveUln301: {
      address: "0xF636882f80cb5039D80F08cDEee1b166D700091b"
    },
    version: 2,
    receiveUln302: {
      address: "0x0e2c52BC2e119b1919e68f4F1874D4d30F6eF9fB"
    }
  },
  {
    eid: 30108,
    chainKey: "aptos",
    stage: "mainnet",
    executor: {
      address: "0x15a5bbf1eb7998a22c9f23810d424abe40bd59ddd8e6ab7e59529853ebed41c4"
    },
    endpointV2: {
      address: "0xe60045e20fc2c99e869c1c34a65b9291c020cd12a0d37a00a53ac1348af4f43c"
    },
    sendUln302: {
      address: "0xc33752e0220faf79e45385dd73fb28d681dcd9f1569a1480725507c1f3c3aba9"
    },
    version: 2,
    receiveUln302: {
      address: "0xc33752e0220faf79e45385dd73fb28d681dcd9f1569a1480725507c1f3c3aba9"
    }
  },
  {
    eid: 40108,
    chainKey: "aptos-testnet",
    stage: "testnet",
    executor: {
      address: "0x93353700091200ef9fdc536ce6a86182cc7e62da25f94356be9421c6310b9585"
    },
    endpointV2: {
      address: "0x7f03103b83c51c8b09be1751a797a65ac6e755f72947ecdecffc203d32d816c6"
    },
    sendUln302: {
      address: "0xcc1c03aed42e2841211865758b5efe93c0dde2cb7a2a5dc6cf25a4e33ad23690"
    },
    version: 2,
    receiveUln302: {
      address: "0xcc1c03aed42e2841211865758b5efe93c0dde2cb7a2a5dc6cf25a4e33ad23690"
    }
  },
  {
    eid: 40231,
    chainKey: "arbitrum-sepolia",
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    readLib1002: {
      address: "0x54320b901FDe49Ba98de821Ccf374BA4358a8bf6"
    },
    version: 2,
    stage: "testnet",
    executor: {
      address: "0x5Df3a1cEbBD9c8BA7F8dF51Fd632A9aef8308897"
    },
    deadDVN: {
      address: "0xA85BE08A6Ce2771C730661766AACf2c8Bb24C611"
    },
    sendUln302: {
      address: "0x4f7cd4DA19ABB31b0eC98b9066B9e857B1bf9C0E"
    },
    lzExecutor: {
      address: "0x569AA8BdAc7aa67837749bdBdb74Ad9ee4B073Bf"
    },
    sendUln301: {
      address: "0x92709d5BAc33547482e4BB7dd736f9a82b029c40"
    },
    receiveUln301: {
      address: "0xa673a180fB2BF0E315b4f832b7d5b9ACB7162273"
    },
    receiveUln302: {
      address: "0x75Db67CDab2824970131D5aa9CECfC9F69c69636"
    }
  },
  {
    eid: 30321,
    chainKey: "lisk",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40327,
    chainKey: "lisk-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30293,
    chainKey: "bouncebit",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x1F7E674143031e74bc48a0c570c174A07aA9C5d0"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40289,
    chainKey: "bouncebit-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40287,
    chainKey: "lineasep-testnet",
    stage: "testnet",
    executor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    },
    lzExecutor: {
      address: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd"
    },
    sendUln301: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    receiveUln301: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    version: 2,
    receiveUln302: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    }
  },
  {
    eid: 40357,
    chainKey: "bl6-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40355,
    chainKey: "apexfusionnexus-testnet",
    stage: "testnet",
    executor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0xb23b28012ee92E8dE39DEb57Af31722223034747"
    },
    sendUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    },
    lzExecutor: {
      address: "0x4dFa426aEAA55E6044d2b47682842460a04aF45c"
    },
    sendUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    receiveUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    version: 2,
    receiveUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    }
  },
  {
    eid: 30335,
    chainKey: "swell",
    stage: "mainnet",
    executor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    },
    lzExecutor: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    sendUln301: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6"
    }
  },
  {
    eid: 40353,
    chainKey: "swell-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30328,
    chainKey: "edu",
    stage: "mainnet",
    executor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    deadDVN: {
      address: "0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887"
    },
    endpointV2: {
      address: "0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9"
    },
    sendUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    },
    lzExecutor: {
      address: "0x306B9a8953B9462F8b826e6768a93C8EA7454965"
    },
    sendUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    receiveUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    version: 2,
    receiveUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    }
  },
  {
    eid: 30295,
    chainKey: "flare",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x28B6140ead70cb2Fb669705b3598ffB4BEaA060b"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40294,
    chainKey: "flare-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    receiveUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    version: 2,
    receiveUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    }
  },
  {
    eid: 40300,
    chainKey: "lif3-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 40301,
    chainKey: "fi-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30265,
    chainKey: "homeverse",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0x25dCD7AdC3Ab4c00b8bcf78F33d95A19211Eab48"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x980205D352F198748B626f6f7C38A8a5663Ec981"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xFe7C30860D01e28371D40434806F4A8fcDD3A098"
    }
  },
  {
    eid: 40265,
    chainKey: "homeverse-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 40342,
    chainKey: "moksha-testnet",
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    readLib1002: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    version: 2,
    stage: "testnet",
    executor: {
      address: "0x8dF53a660a00C3D977d7E778fB7385ECf4482D16"
    },
    deadDVN: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln302: {
      address: "0x53fd4C4fBBd53F6bC58CaE6704b92dB1f360A648"
    },
    lzExecutor: {
      address: "0xec28645346D781674B4272706D8a938dB2BAA2C6"
    },
    sendUln301: {
      address: "0x88B27057A9e00c5F05DDa29241027afF63f9e6e0"
    },
    receiveUln301: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    receiveUln302: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    }
  },
  {
    eid: 30235,
    chainKey: "rarible",
    stage: "mainnet",
    executor: {
      address: "0x1E4CAc6c2c955cAED779ef24d5B8C5EE90b1f914"
    },
    deadDVN: {
      address: "0xFE9e60eE82C8E800bd48c4fc2aE1B7716528cc56"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xA09dB5142654e3eB5Cf547D66833FAe7097B21C3"
    },
    lzExecutor: {
      address: "0x4740469750ce90fDB73F5fD0a062FFF0b1E4Be5D"
    },
    sendUln301: {
      address: "0xD4a903930f2c9085586cda0b11D9681EECb20D2f"
    },
    receiveUln301: {
      address: "0xb21f945e8917c6Cd69FcFE66ac6703B90f7fe004"
    },
    version: 2,
    receiveUln302: {
      address: "0x148f693af10ddfaE81cDdb36F4c93B31A90076e1"
    }
  },
  {
    eid: 40235,
    chainKey: "rarible-testnet",
    stage: "testnet",
    executor: {
      address: "0x19DC7b94ACAFbAD3EFa1Bc782d1367a8b173Ba73"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x7C424244B51d03cEEc115647ccE151baF112a42e"
    },
    lzExecutor: {
      address: "0x1AbC0136629E83A8769B3598c1417D5A5922e4E1"
    },
    sendUln301: {
      address: "0xC08DFdD85E8530420694dA94E34f52C7462cCe7d"
    },
    receiveUln301: {
      address: "0x7983dCA4B0E322b0B80AFBb01F1F904A0532FcB6"
    },
    version: 2,
    receiveUln302: {
      address: "0xbf06c8886E6904a95dD42440Bd237C4ac64940C8"
    }
  },
  {
    eid: 40259,
    chainKey: "exocore-testnet",
    stage: "testnet",
    executor: {
      address: "0x55c175DD5b039331dB251424538169D8495C18d1"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30341,
    chainKey: "space",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x282b3386571f7f794450d5789911a9804FA346b4"
    },
    endpointV2: {
      address: "0xAaB5A48CFC03Efa9cC34A2C1aAcCCB84b4b770e4"
    },
    sendUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    receiveUln301: {
      address: "0x4b80F7d25c451D204b1C93D9bdf2aB3B04f3EA4a"
    },
    version: 2,
    receiveUln302: {
      address: "0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6"
    }
  },
  {
    eid: 40288,
    chainKey: "besu1-testnet",
    stage: "testnet",
    executor: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    endpointV2: {
      address: "0x3aCAAf60502791D199a5a5F0B173D78229eBFe32"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    sendUln301: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    receiveUln301: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 30210,
    chainKey: "astar",
    stage: "mainnet",
    executor: {
      address: "0x3C5575898f59c097681d1Fc239c2c6Ad36B7b41c"
    },
    deadDVN: {
      address: "0x6626D0739b2B04b70b372394274EB77CAd0824b2"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x30C3074669d866933db74DF1Fbe4b3703e6ec139"
    },
    lzExecutor: {
      address: "0x1b8ec4C50b0905334f6F73D1C1a64bA6e15BDaB8"
    },
    sendUln301: {
      address: "0xbC7848582De127E61f3521e5B8b3E119e5D1eA48"
    },
    receiveUln301: {
      address: "0x8D183A062e99cad6f3723E6d836F9EA13886B173"
    },
    version: 2,
    receiveUln302: {
      address: "0xF08f13c080fcc530B1C21DE827C27B7b66874DDc"
    }
  },
  {
    eid: 40210,
    chainKey: "astar-testnet",
    stage: "testnet",
    executor: {
      address: "0x9130D98D47984BF9dc796829618C36CBdA43EBb9"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x3617dA335F75164809B540bA31bdf79DE6cB1Ee3"
    },
    lzExecutor: {
      address: "0x4b21Ad992A05Fb14e08df2cAF8d71A5c28b1f5E9"
    },
    sendUln301: {
      address: "0x5D1573FBC5a08533CFbDEa991887B96f2CE0C5d0"
    },
    receiveUln301: {
      address: "0x1a2fd0712Ded46794022DdB16a282e798D22a7FB"
    },
    version: 2,
    receiveUln302: {
      address: "0xdBdC042321A87DFf222C6BF26be68Ad7b3d7543f"
    }
  },
  {
    eid: 30260,
    chainKey: "mode",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    receiveUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    version: 2,
    receiveUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    }
  },
  {
    eid: 40260,
    chainKey: "mode-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x00C5C0B8e0f75aB862CbAaeCfff499dB555FBDD2"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xF0196DEa83b47244222B315AbbbcF6b9fD2F705c"
    },
    receiveUln301: {
      address: "0xa78A78a13074eD93aD447a26Ec57121f29E8feC2"
    },
    version: 2,
    receiveUln302: {
      address: "0x1d186C560281B8F1AF831957ED5047fD3AB902F9"
    }
  },
  {
    eid: 30243,
    chainKey: "blast",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x73Dd395E80A2dD6D88dB11E69f15d534D182F019"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xc1B621b18187F74c8F6D52a6F709Dd2780C09821"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x7cacBe439EaD55fa1c22790330b12835c6884a91"
    },
    receiveUln301: {
      address: "0x282b3386571f7f794450d5789911a9804FA346b4"
    },
    version: 2,
    receiveUln302: {
      address: "0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6"
    }
  },
  {
    eid: 40243,
    chainKey: "blast-testnet",
    stage: "testnet",
    executor: {
      address: "0xE62d066e71fcA410eD48ad2f2A5A860443C04035"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    lzExecutor: {
      address: "0x9454f0EABc7C4Ea9ebF89190B8bF9051A0468E03"
    },
    sendUln301: {
      address: "0x8A3D588D9f6AC041476b094f97FF94ec30169d3D"
    },
    receiveUln301: {
      address: "0x8dF53a660a00C3D977d7E778fB7385ECf4482D16"
    },
    version: 2,
    receiveUln302: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    }
  },
  {
    eid: 30303,
    chainKey: "zircuit",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x9C061c9A4782294eeF65ef28Cb88233A987F4bdD"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40275,
    chainKey: "zircuit-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 30291,
    chainKey: "xchain",
    stage: "mainnet",
    executor: {
      address: "0xcCE466a522984415bC91338c232d98869193D46e"
    },
    deadDVN: {
      address: "0x69fBED8561F829eFBB3c9785f1983641B27887e7"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0xa20DB4Ffe74A31D17fc24BD32a7DD7555441058e"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40282,
    chainKey: "xchain-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 30317,
    chainKey: "bevm",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887"
    },
    endpointV2: {
      address: "0xcb566e3B6934Fa77258d68ea18E931fa75e1aaAa"
    },
    sendUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    receiveUln301: {
      address: "0xfd76d9CB0Bac839725aB79127E7411fe71b1e3CA"
    },
    version: 2,
    receiveUln302: {
      address: "0x2367325334447C5E1E0f1b3a6fB947b262F58312"
    }
  },
  {
    eid: 40324,
    chainKey: "bevm-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30152,
    chainKey: "intain",
    stage: "mainnet",
    version: 2
  },
  {
    eid: 30114,
    chainKey: "swimmer",
    stage: "mainnet",
    version: 2
  },
  {
    eid: 40318,
    chainKey: "root-testnet",
    stage: "testnet",
    executor: {
      address: "0xe7292d7797776bCcDF44C78f296Ff26Ddb70F70a"
    },
    deadDVN: {
      address: "0x790deF6091dD5e5e8c3F8550B37a04790e0ba492"
    },
    endpointV2: {
      address: "0xbc2a00d907a6Aa5226Fb9444953E4464a5f4844a"
    },
    sendUln302: {
      address: "0x6460EE1b9D5bDE8375ca928767Cc63FBFA111A98"
    },
    lzExecutor: {
      address: "0x988D898a9Acf43f61FDBC72AAD6eB3f0542e19e1"
    },
    sendUln301: {
      address: "0x19D1198b0f43Ec076a897bF98dEb0FD1D6CE8B9f"
    },
    receiveUln301: {
      address: "0x0E91e0239971B6CF7519e458a742e2eA4Ffb7458"
    },
    version: 2,
    receiveUln302: {
      address: "0x72eeA17eBbd1aCE0527354b2f7b25c6efC27936d"
    }
  },
  {
    eid: 30106,
    chainKey: "avalanche",
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    readLib1002: {
      address: "0x8839D3f169f473193423b402BDC4B5c51daAABDc"
    },
    version: 2,
    stage: "mainnet",
    executor: {
      address: "0x90E595783E43eb89fF07f63d27B8430e6B44bD9c"
    },
    deadDVN: {
      address: "0x90cCA24D1338Bd284C25776D9c12f96764Bde5e1"
    },
    sendUln302: {
      address: "0x197D1333DEA5Fe0D6600E9b396c7f1B1cFCc558a"
    },
    lzExecutor: {
      address: "0x45d7C6808De24F70480d5947cE2081BA8C9C57F5"
    },
    sendUln301: {
      address: "0x31CAe3B7fB82d847621859fb1585353c5720660D"
    },
    receiveUln301: {
      address: "0xF85eD5489E6aDd01Fec9e8D53cF8FAcFc70590BD"
    },
    receiveUln302: {
      address: "0xbf3521d309642FA9B1c91A08609505BA09752c61"
    }
  },
  {
    eid: 40106,
    chainKey: "fuji",
    stage: "testnet",
    executor: {
      address: "0xa7BFA9D51032F82D649A501B6a1f922FC2f7d4e3"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x69BF5f48d2072DfeBc670A1D19dff91D0F4E8170"
    },
    lzExecutor: {
      address: "0x1356D9201036A216836925803512649d6BB2395e"
    },
    sendUln301: {
      address: "0x184e24e31657Cf853602589fe5304b144a826c85"
    },
    receiveUln301: {
      address: "0x91df17bF1Ced54c6169e1E24722C0a88a447cBAf"
    },
    version: 2,
    receiveUln302: {
      address: "0x819F0FAF2cb1Fba15b9cB24c9A2BDaDb0f895daf"
    }
  },
  {
    eid: 30158,
    chainKey: "zkevm",
    stage: "mainnet",
    executor: {
      address: "0xbE4fB271cfB7bcbB47EA9573321c7bfe309fc220"
    },
    deadDVN: {
      address: "0xbD8F7f0B165213Aaabb5a9eA0D572d5FD9829664"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0x28B6140ead70cb2Fb669705b3598ffB4BEaA060b"
    },
    lzExecutor: {
      address: "0x7eb3f67C1d501872295bC847a1346cB839D3b00f"
    },
    sendUln301: {
      address: "0x8161B3B224Cd6ce37cC20BE61607C3E19eC2A8A6"
    },
    receiveUln301: {
      address: "0x23ec43e2b8f9aE21D895eEa5a1a9c444fe301044"
    },
    version: 2,
    receiveUln302: {
      address: "0x581b26F362AD383f7B51eF8A165Efa13DDe398a4"
    }
  },
  {
    eid: 40158,
    chainKey: "zkevm-testnet",
    stage: "testnet",
    executor: {
      address: "0x5B6c6177EF06A95cf54f6c8b547DCbb0eEc1708E"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x1C4Fc6f1E44EAaef53aC701b7cc4c280F536fA75"
    },
    lzExecutor: {
      address: "0xcd013a7AaF0729059F250B9804cCA02B479C656e"
    },
    sendUln301: {
      address: "0xa805000DcA12b38690558785878642BA19Bc4981"
    },
    receiveUln301: {
      address: "0x00D0cd55beAfb96f0A5c37452f56D06DA3765ce8"
    },
    version: 2,
    receiveUln302: {
      address: "0x08416c0eAa8ba93F907eC8D6a9cAb24821C53E64"
    }
  },
  {
    eid: 30218,
    chainKey: "pgn",
    stage: "mainnet",
    version: 2
  },
  {
    eid: 40223,
    chainKey: "pgn-testnet",
    stage: "testnet",
    version: 2
  },
  {
    eid: 40204,
    chainKey: "monad-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dB9Ca3305B48F196D18082e91cB64663b13d014"
    },
    deadDVN: {
      address: "0xF49d162484290EAeAd7bb8C2c7E3a6f8f52e32d6"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0xe1a12515F9AB2764b887bF60B923Ca494EBbB2d6"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30283,
    chainKey: "cyber",
    stage: "mainnet",
    executor: {
      address: "0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f"
    },
    deadDVN: {
      address: "0x9c8D8A224545c15024cB50C7c02cf3EA9AA1bF36"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  },
  {
    eid: 40280,
    chainKey: "cyber-testnet",
    stage: "testnet",
    executor: {
      address: "0x12523de19dc41c91F7d2093E0CFbB76b17012C8d"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x45841dd1ca50265Da7614fC43A361e526c0e6160"
    },
    lzExecutor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    sendUln301: {
      address: "0x9eCf72299027e8AeFee5DC5351D6d92294F46d2b"
    },
    receiveUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    version: 2,
    receiveUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    }
  },
  {
    eid: 40306,
    chainKey: "curtis-testnet",
    stage: "testnet",
    executor: {
      address: "0x701f3927871EfcEa1235dB722f9E608aE120d243"
    },
    deadDVN: {
      address: "0xC1868e054425D378095A003EcbA3823a5D0135C9"
    },
    endpointV2: {
      address: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff"
    },
    sendUln302: {
      address: "0xd682ECF100f6F4284138AA925348633B0611Ae21"
    },
    lzExecutor: {
      address: "0x4Cf1B3Fa61465c2c907f82fC488B43223BA0CF93"
    },
    sendUln301: {
      address: "0xB0487596a0B62D1A71D0C33294bd6eB635Fc6B09"
    },
    receiveUln301: {
      address: "0x073f5b4FdF17BBC16b0980d49f6C56123477bb51"
    },
    version: 2,
    receiveUln302: {
      address: "0xcF1B0F4106B0324F96fEfcC31bA9498caa80701C"
    }
  },
  {
    eid: 30181,
    chainKey: "mantle",
    stage: "mainnet",
    executor: {
      address: "0x4Fc3f4A38Acd6E4cC0ccBc04B3Dd1CCAeFd7F3Cd"
    },
    deadDVN: {
      address: "0x2e2AF282E98bfADed5dd6EC51c7240D818DDBBD9"
    },
    endpointV2: {
      address: "0x1a44076050125825900e736c501f859c50fE728c"
    },
    sendUln302: {
      address: "0xde19274c009A22921E3966a1Ec868cEba40A5DaC"
    },
    lzExecutor: {
      address: "0x4E341b9Cf90514A5b7dfec2c9A1f20AA4514C260"
    },
    sendUln301: {
      address: "0xa6c26315a9229c516d7e002F098FeA7574c6C2D3"
    },
    receiveUln301: {
      address: "0xB0a3001dFA294F1Bea14eF8F5B6a2ae91DF69A21"
    },
    version: 2,
    receiveUln302: {
      address: "0x8da6512De9379fBF4F09BF520Caf7a85435ed93e"
    }
  },
  {
    eid: 40181,
    chainKey: "mantle-testnet",
    stage: "testnet",
    executor: {
      address: "0x9dD6727B9636761ff50E375D0A7039BD5447ceDB"
    },
    endpointV2: {
      address: "0x6EDCE65403992e310A62460808c4b910D972f10f"
    },
    sendUln302: {
      address: "0x19D1198b0f43Ec076a897bF98dEb0FD1D6CE8B9f"
    },
    lzExecutor: {
      address: "0xe514D331c54d7339108045bF4794F8d71cad110e"
    },
    sendUln301: {
      address: "0x790deF6091dD5e5e8c3F8550B37a04790e0ba492"
    },
    receiveUln301: {
      address: "0x55a75EB9A470329f1bA6278bDe58CE95E6CEF501"
    },
    version: 2,
    receiveUln302: {
      address: "0x0E91e0239971B6CF7519e458a742e2eA4Ffb7458"
    }
  },
  {
    eid: 30362,
    chainKey: "bera",
    stage: "mainnet",
    executor: {
      address: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b"
    },
    deadDVN: {
      address: "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842"
    },
    endpointV2: {
      address: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
    },
    sendUln302: {
      address: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7"
    },
    lzExecutor: {
      address: "0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d"
    },
    sendUln301: {
      address: "0x37aaaf95887624a363effB7762D489E3C05c2a02"
    },
    receiveUln301: {
      address: "0x15e51701F245F6D5bd0FEE87bCAf55B0841451B3"
    },
    version: 2,
    receiveUln302: {
      address: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043"
    }
  }
];

// src/deployments.ts
var deploymentsV1 = deploymentsV1_default;
var deploymentsV2 = deploymentsV2_default;
var deployments = [...deploymentsV1, ...deploymentsV2];

exports.deployments = deployments;
exports.deploymentsV1 = deploymentsV1;
exports.deploymentsV2 = deploymentsV2;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-DEUA4MK5.cjs.map