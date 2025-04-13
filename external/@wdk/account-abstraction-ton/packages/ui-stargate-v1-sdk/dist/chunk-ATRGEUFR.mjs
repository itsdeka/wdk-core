import { utils, Contract } from 'ethers';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/typechain/factories/index.ts
var factories_exports = {};
__export(factories_exports, {
  Bridge__factory: () => Bridge__factory,
  ERC20__factory: () => ERC20__factory,
  Factory__factory: () => Factory__factory,
  FeeDistributor__factory: () => FeeDistributor__factory,
  LPStakingTime__factory: () => LPStakingTime__factory,
  LPStaking__factory: () => LPStaking__factory,
  MerkleDropV2__factory: () => MerkleDropV2__factory,
  Pool__factory: () => Pool__factory,
  RouterETH__factory: () => RouterETH__factory,
  Router__factory: () => Router__factory,
  SVotingEscrow__factory: () => SVotingEscrow__factory,
  StargateFeeLibrary__factory: () => StargateFeeLibrary__factory,
  StargateToken__factory: () => StargateToken__factory,
  StargateWidget__factory: () => StargateWidget__factory,
  VotingEscrow__factory: () => VotingEscrow__factory,
  WhitelistAuction__factory: () => WhitelistAuction__factory
});
var _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_layerZeroEndpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_router",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "msgType",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      }
    ],
    name: "SendMsg",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approveTokenSpender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "bridgeLookup",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "forceResumeReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    name: "gasLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "layerZeroEndpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpoint",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint8",
        name: "_functionType",
        type: "uint8"
      },
      {
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_transferAndCallPayload",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct Router.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      }
    ],
    name: "quoteLayerZeroFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "credits",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "idealBalance",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.CreditObj",
        name: "_c",
        type: "tuple"
      },
      {
        internalType: "uint256",
        name: "_amountSD",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct Router.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      }
    ],
    name: "redeemLocal",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "credits",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "idealBalance",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.CreditObj",
        name: "_c",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct Router.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "redeemLocalCallback",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract Router",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "credits",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "idealBalance",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.CreditObj",
        name: "_c",
        type: "tuple"
      }
    ],
    name: "sendCredits",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_bridgeAddress",
        type: "bytes"
      }
    ],
    name: "setBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_config",
        type: "bytes"
      }
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint8",
        name: "_functionType",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "_gasAmount",
        type: "uint256"
      }
    ],
    name: "setGasAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "setReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "setSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enable",
        type: "bool"
      }
    ],
    name: "setUseLayerZeroToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "credits",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "idealBalance",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.CreditObj",
        name: "_c",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqReward",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lpFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lkbRemove",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.SwapObj",
        name: "_s",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct Router.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "swap",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "useLayerZeroToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var Bridge__factory = class {
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider);
  }
};
__publicField(Bridge__factory, "abi", _abi);
var _abi2 = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
];
var ERC20__factory = class {
  static createInterface() {
    return new utils.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi2, signerOrProvider);
  }
};
__publicField(ERC20__factory, "abi", _abi2);
var _abi3 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "allPools",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allPoolsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "_sharedDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "_localDecimals",
        type: "uint8"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      }
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultFeeLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "contract Pool",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_defaultFeeLibrary",
        type: "address"
      }
    ],
    name: "setDefaultFeeLibrary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var Factory__factory = class {
  static createInterface() {
    return new utils.Interface(_abi3);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi3, signerOrProvider);
  }
};
__publicField(Factory__factory, "abi", _abi3);
var _abi4 = [
  {
    inputs: [
      {
        internalType: "contract IVotingEscrow",
        name: "votingEscrow",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    name: "OnlyVeHolderClaimingEnabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastCheckpointTimestamp",
        type: "uint256"
      }
    ],
    name: "TokenCheckpointed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    name: "TokenClaimingEnabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      }
    ],
    name: "TokenWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userTokenTimeCursor",
        type: "uint256"
      }
    ],
    name: "TokensClaimed",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "canTokenBeClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "checkpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "checkpointToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    name: "checkpointTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "checkpointUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "claimToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    name: "claimTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      }
    ],
    name: "depositTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    name: "enableOnlyVeHolderClaiming",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "bool",
        name: "enable",
        type: "bool"
      }
    ],
    name: "enableTokenClaiming",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTimeCursor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "getTokenCachedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "getTokenLastBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "getTokenStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "getTokenTimeCursor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "getTokensDistributedInWeek",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "getTotalSupplyAtTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "getUserBalanceAtTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getUserLastEpochCheckpointed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getUserStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getUserTimeCursor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "getUserTokenTimeCursor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVotingEscrow",
    outputs: [
      {
        internalType: "contract IVotingEscrow",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "onlyVeHolderClaimingEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      }
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var FeeDistributor__factory = class {
  static createInterface() {
    return new utils.Interface(_abi4);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi4, signerOrProvider);
  }
};
__publicField(FeeDistributor__factory, "abi", _abi4);
var _abi5 = [
  {
    inputs: [
      {
        internalType: "contract StargateToken",
        name: "_stargate",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_stargatePerBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_bonusEndBlock",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "EmergencyWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "BONUS_MULTIPLIER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address"
      }
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bonusEndBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      }
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256"
      }
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "lpBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "pendingStargate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "accStargatePerShare",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      }
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stargatePerBlock",
        type: "uint256"
      }
    ],
    name: "setStargatePerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "stargate",
    outputs: [
      {
        internalType: "contract StargateToken",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stargatePerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      }
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var LPStaking__factory = class {
  static createInterface() {
    return new utils.Interface(_abi5);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi5, signerOrProvider);
  }
};
__publicField(LPStaking__factory, "abi", _abi5);
var _abi6 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_eToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_eTokenPerSecond",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_bonusEndTime",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address"
      }
    ],
    name: "Add",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "LPStakingTimeDeposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "LPStakingTimeEmergencyWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "LPStakingTimeOwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256"
      }
    ],
    name: "Set",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eTokenPerSecond",
        type: "uint256"
      }
    ],
    name: "TokensPerSec",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "LPStakingTimeWithdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "BONUS_MULTIPLIER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address"
      }
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bonusEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "eToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eTokenPerSecond",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      }
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256"
      }
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "lpBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "pendingEmissionToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "accEmissionPerShare",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      }
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eTokenPerSecond",
        type: "uint256"
      }
    ],
    name: "setETokenPerSecond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      }
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var LPStakingTime__factory = class {
  static createInterface() {
    return new utils.Interface(_abi6);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi6, signerOrProvider);
  }
};
__publicField(LPStakingTime__factory, "abi", _abi6);
var _abi7 = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleroot",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "FeesClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]"
      }
    ],
    name: "redeemFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32"
      }
    ],
    name: "updateMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var MerkleDropV2__factory = class {
  static createInterface() {
    return new utils.Interface(_abi7);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi7, signerOrProvider);
  }
};
__publicField(MerkleDropV2__factory, "abi", _abi7);
var _abi8 = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_router",
        type: "address"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_sharedDecimals",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_localDecimals",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_feeLibrary",
        type: "address"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256"
      }
    ],
    name: "ChainPathUpdate",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "srcPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "idealBalance",
        type: "uint256"
      }
    ],
    name: "CreditChainPath",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "batched",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapDeltaBP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpDeltaBP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "defaultSwapMode",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "defaultLPMode",
        type: "bool"
      }
    ],
    name: "DeltaParamUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feeLibraryAddr",
        type: "address"
      }
    ],
    name: "FeeLibraryUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "mintFeeBP",
        type: "uint256"
      }
    ],
    name: "FeesUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "InstantRedeemLocal",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintFeeAmountSD",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "RedeemLocal",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountToMintSD",
        type: "uint256"
      }
    ],
    name: "RedeemLocalCallback",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      }
    ],
    name: "RedeemRemote",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "credits",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "idealBalance",
        type: "uint256"
      }
    ],
    name: "SendCredits",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "swapStop",
        type: "bool"
      }
    ],
    name: "StopSwapUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eqReward",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eqFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpFee",
        type: "uint256"
      }
    ],
    name: "Swap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstFee",
        type: "uint256"
      }
    ],
    name: "SwapRemote",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      }
    ],
    name: "WithdrawMintFeeBalance",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      }
    ],
    name: "WithdrawProtocolFeeBalance",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "srcPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256"
      }
    ],
    name: "WithdrawRemote",
    type: "event"
  },
  {
    inputs: [],
    name: "BP_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      }
    ],
    name: "activateChainPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "batched",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_fullMode",
        type: "bool"
      }
    ],
    name: "callDelta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "chainPathIndexLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "chainPaths",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool"
      },
      {
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lkb",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "credits",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "idealBalance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "convertRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_weight",
        type: "uint256"
      }
    ],
    name: "createChainPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "credits",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "idealBalance",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.CreditObj",
        name: "_c",
        type: "tuple"
      }
    ],
    name: "creditChainPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultLPMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultSwapMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "deltaCredit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eqFeePool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feeLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      }
    ],
    name: "getChainPath",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "ready",
            type: "bool"
          },
          {
            internalType: "uint16",
            name: "dstChainId",
            type: "uint16"
          },
          {
            internalType: "uint256",
            name: "dstPoolId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lkb",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "credits",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "idealBalance",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.ChainPath",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getChainPathsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "instantRedeemLocal",
    outputs: [
      {
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "localDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lpDeltaBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "mintFeeBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mintFeeBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "poolId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "protocolFeeBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "redeemLocal",
    outputs: [
      {
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amountToMintSD",
        type: "uint256"
      }
    ],
    name: "redeemLocalCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amountSD",
        type: "uint256"
      }
    ],
    name: "redeemLocalCheckOnRemote",
    outputs: [
      {
        internalType: "uint256",
        name: "swapAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256"
      }
    ],
    name: "redeemRemote",
    outputs: [
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      }
    ],
    name: "sendCredits",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "credits",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "idealBalance",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.CreditObj",
        name: "c",
        type: "tuple"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_batched",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "_swapDeltaBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_lpDeltaBP",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_defaultSwapMode",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "_defaultLPMode",
        type: "bool"
      }
    ],
    name: "setDeltaParam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintFeeBP",
        type: "uint256"
      }
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeLibraryAddr",
        type: "address"
      }
    ],
    name: "setFeeLibrary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_swapStop",
        type: "bool"
      }
    ],
    name: "setSwapStop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_weight",
        type: "uint16"
      }
    ],
    name: "setWeightForChainPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "sharedDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stopSwap",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "newLiquidity",
        type: "bool"
      }
    ],
    name: "swap",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqReward",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lpFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lkbRemove",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.SwapObj",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "swapDeltaBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqReward",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lpFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lkbRemove",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.SwapObj",
        name: "_s",
        type: "tuple"
      }
    ],
    name: "swapRemote",
    outputs: [
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "withdrawMintFeeBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "withdrawProtocolFeeBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var Pool__factory = class {
  static createInterface() {
    return new utils.Interface(_abi8);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi8, signerOrProvider);
  }
};
__publicField(Pool__factory, "abi", _abi8);
var _abi9 = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes"
      }
    ],
    name: "CachedSwapSaved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "srcPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmountSD",
        type: "uint256"
      }
    ],
    name: "RedeemLocalCallback",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "bridgeFunctionType",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      }
    ],
    name: "Revert",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "to",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemAmountSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmountSD",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      }
    ],
    name: "RevertRedeemLocal",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      }
    ],
    name: "activateChainPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "contract Bridge",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "cachedSwapLookup",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_fullMode",
        type: "bool"
      }
    ],
    name: "callDelta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256"
      }
    ],
    name: "clearCachedSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_weight",
        type: "uint256"
      }
    ],
    name: "createChainPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "_sharedDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "_localDecimals",
        type: "uint8"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      }
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "credits",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "idealBalance",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.CreditObj",
        name: "_c",
        type: "tuple"
      }
    ],
    name: "creditChainPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract Factory",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcPoolId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "instantRedeemLocal",
    outputs: [
      {
        internalType: "uint256",
        name: "amountSD",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "mintFeeOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "protocolFeeOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint8",
        name: "_functionType",
        type: "uint8"
      },
      {
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_transferAndCallPayload",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct IStargateRouter.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      }
    ],
    name: "quoteLayerZeroFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct IStargateRouter.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      }
    ],
    name: "redeemLocal",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_mintAmountSD",
        type: "uint256"
      }
    ],
    name: "redeemLocalCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amountSD",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      }
    ],
    name: "redeemLocalCheckOnRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct IStargateRouter.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      }
    ],
    name: "redeemRemote",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256"
      }
    ],
    name: "retryRevert",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "revertLookup",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct IStargateRouter.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      }
    ],
    name: "revertRedeemLocal",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      }
    ],
    name: "sendCredits",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract Bridge",
        name: "_bridge",
        type: "address"
      },
      {
        internalType: "contract Factory",
        name: "_factory",
        type: "address"
      }
    ],
    name: "setBridgeAndFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_batched",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "_swapDeltaBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_lpDeltaBP",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_defaultSwapMode",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "_defaultLPMode",
        type: "bool"
      }
    ],
    name: "setDeltaParam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_feeLibraryAddr",
        type: "address"
      }
    ],
    name: "setFeeLibrary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_mintFeeBP",
        type: "uint256"
      }
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "setMintFeeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "setProtocolFeeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_swapStop",
        type: "bool"
      }
    ],
    name: "setSwapStop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_weight",
        type: "uint16"
      }
    ],
    name: "setWeightForChainPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct IStargateRouter.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "swap",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dstGasForCall",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqReward",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lpFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lkbRemove",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.SwapObj",
        name: "_s",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "swapRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "withdrawMintFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "withdrawProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var Router__factory = class {
  static createInterface() {
    return new utils.Interface(_abi9);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi9, signerOrProvider);
  }
};
__publicField(Router__factory, "abi", _abi9);
var _abi10 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stargateEthVault",
        type: "address"
      },
      {
        internalType: "address",
        name: "_stargateRouter",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_poolId",
        type: "uint16"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "addLiquidityETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "poolId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stargateEthVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stargateRouter",
    outputs: [
      {
        internalType: "contract IStargateRouter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256"
      }
    ],
    name: "swapETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
var RouterETH__factory = class {
  static createInterface() {
    return new utils.Interface(_abi10);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi10, signerOrProvider);
  }
};
__publicField(RouterETH__factory, "abi", _abi10);
var _abi11 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lpFeeBP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFeeBP",
        type: "uint256"
      }
    ],
    name: "FeesUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "BP_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eqFeeBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eqRewardBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract Factory",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountSD",
        type: "uint256"
      }
    ],
    name: "getFees",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "eqReward",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lpFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lkbRemove",
            type: "uint256"
          }
        ],
        internalType: "struct Pool.SwapObj",
        name: "s",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lpFeeBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "protocolFeeBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lpFeeBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_protocolFeeBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_eqFeeBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_eqRewardBP",
        type: "uint256"
      }
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var StargateFeeLibrary__factory = class {
  static createInterface() {
    return new utils.Interface(_abi11);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi11, signerOrProvider);
  }
};
__publicField(StargateFeeLibrary__factory, "abi", _abi11);
var _abi12 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "address",
        name: "_endpoint",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_mainChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "initialSupplyOnMainEndpoint",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isPaused",
        type: "bool"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty",
        type: "uint256"
      }
    ],
    name: "ReceiveFromChain",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "to",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty",
        type: "uint256"
      }
    ],
    name: "SendToChain",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "dstContractLookup",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "endpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpoint",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "txParameters",
        type: "bytes"
      }
    ],
    name: "estimateSendTokensFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "forceResumeReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isMain",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_fromAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_pause",
        type: "bool"
      }
    ],
    name: "pauseSendTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_qty",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "zroPaymentAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "adapterParam",
        type: "bytes"
      }
    ],
    name: "sendTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_config",
        type: "bytes"
      }
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_destinationContractAddress",
        type: "bytes"
      }
    ],
    name: "setDestination",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "setReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "setSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var StargateToken__factory = class {
  static createInterface() {
    return new utils.Interface(_abi12);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi12, signerOrProvider);
  }
};
__publicField(StargateToken__factory, "abi", _abi12);
var _abi13 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stargateRouter",
        type: "address"
      },
      {
        internalType: "address",
        name: "_stargateRouterETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_stargateFactory",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes2",
        name: "partnerId",
        type: "bytes2"
      }
    ],
    name: "PartnerSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes2",
        name: "partnerId",
        type: "bytes2"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tenthBps",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "widgetFee",
        type: "uint256"
      }
    ],
    name: "WidgetSwapped",
    type: "event"
  },
  {
    inputs: [],
    name: "MAX_UINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TENTH_BPS_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes2",
        name: "_partnerId",
        type: "bytes2"
      }
    ],
    name: "partnerSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "stargateFactory",
    outputs: [
      {
        internalType: "contract IStargateFactory",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stargateRouter",
    outputs: [
      {
        internalType: "contract IStargateRouter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stargateRouterETH",
    outputs: [
      {
        internalType: "contract IStargateRouterETH",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      },
      {
        internalType: "bytes2",
        name: "_partnerId",
        type: "bytes2"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tenthBps",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "feeCollector",
            type: "address"
          }
        ],
        internalType: "struct IStargateWidget.FeeObj",
        name: "_feeObj",
        type: "tuple"
      }
    ],
    name: "swapETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_srcPoolId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_dstPoolId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes"
          }
        ],
        internalType: "struct IStargateRouter.lzTxObj",
        name: "_lzTxParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes"
      },
      {
        internalType: "bytes2",
        name: "_partnerId",
        type: "bytes2"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tenthBps",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "feeCollector",
            type: "address"
          }
        ],
        internalType: "struct IStargateWidget.FeeObj",
        name: "_feeObj",
        type: "tuple"
      }
    ],
    name: "swapTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "tokenApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var StargateWidget__factory = class {
  static createInterface() {
    return new utils.Interface(_abi13);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi13, signerOrProvider);
  }
};
__publicField(StargateWidget__factory, "abi", _abi13);
var _abi14 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "min_time",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "locktime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "enum VotingEscrow.DepositType",
        name: "deposit_type",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ts",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256"
      }
    ],
    name: "Supply",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ts",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "MAXTIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MINTIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "add_to_whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256"
      }
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_t",
        type: "uint256"
      }
    ],
    name: "balanceOfAtT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newController",
        type: "address"
      }
    ],
    name: "changeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "checkpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "contracts_whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256"
      }
    ],
    name: "create_lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "deposit_for",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "get_last_user_slope",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "increase_amount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256"
      }
    ],
    name: "increase_amount_and_time",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256"
      }
    ],
    name: "increase_unlock_time",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "locked",
    outputs: [
      {
        internalType: "int128",
        name: "amount",
        type: "int128"
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      }
    ],
    name: "locked__end",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "point_history",
    outputs: [
      {
        internalType: "int128",
        name: "bias",
        type: "int128"
      },
      {
        internalType: "int128",
        name: "slope",
        type: "int128"
      },
      {
        internalType: "uint256",
        name: "ts",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "blk",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "remove_from_whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "slope_changes",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "supply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256"
      }
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "t",
        type: "uint256"
      }
    ],
    name: "totalSupplyAtT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "transfersEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unlocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "user_point_epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "user_point_history",
    outputs: [
      {
        internalType: "int128",
        name: "bias",
        type: "int128"
      },
      {
        internalType: "int128",
        name: "slope",
        type: "int128"
      },
      {
        internalType: "uint256",
        name: "ts",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "blk",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256"
      }
    ],
    name: "user_point_history__ts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256"
      }
    ],
    name: "withdraw_and_create_lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var VotingEscrow__factory = class {
  static createInterface() {
    return new utils.Interface(_abi14);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi14, signerOrProvider);
  }
};
__publicField(VotingEscrow__factory, "abi", _abi14);
var _abi15 = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_stargateTreasury",
        type: "address"
      },
      {
        internalType: "contract IERC20Metadata",
        name: "_stargate",
        type: "address"
      },
      {
        internalType: "contract IERC20Metadata",
        name: "_stableCoin",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_auctionStartTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_astgWhitelistMaxAlloc",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_bondingWhitelistMaxAlloc",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_remainingUSD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_remainingSTG",
        type: "uint256"
      }
    ],
    name: "FinalWithdrawal",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_astgAmount",
        type: "uint256"
      }
    ],
    name: "FirstAuctioned",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_astgAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_stgAmount",
        type: "uint256"
      }
    ],
    name: "Redeemed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_astgAmount",
        type: "uint256"
      }
    ],
    name: "SecondAuctioned",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "FIRST_AUCTION_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SECOND_AUCTION_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "STARGATE_FOR_AUCTION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "USD_AUCTION_CAP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "VEST_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]"
      }
    ],
    name: "addAuctionAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]"
      }
    ],
    name: "addBondAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "astgDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "astgWhitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "astgWhitelistMaxAlloc",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "bondingWhitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bondingWhitelistMaxAlloc",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "capStgAuctionAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countOfMaxAuction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestAmount",
        type: "uint256"
      }
    ],
    name: "enterFirstAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestAmount",
        type: "uint256"
      }
    ],
    name: "enterSecondAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "firstAuctionEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "firstAuctionStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getFirstAuctionCapAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ownerWithdrawn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_redeemer",
        type: "address"
      }
    ],
    name: "redeemable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "redeemedShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "remainingUsdQuota",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "secondAuctionAdditionalAllocCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "secondAuctionAllocCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "secondAuctionEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "secondAuctionInit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stableCoin",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stargateToken",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stargateTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "vestStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "withdrawRemainingStargate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var WhitelistAuction__factory = class {
  static createInterface() {
    return new utils.Interface(_abi15);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi15, signerOrProvider);
  }
};
__publicField(WhitelistAuction__factory, "abi", _abi15);
var _abi16 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "min_time",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "locktime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "enum VotingEscrow.DepositType",
        name: "deposit_type",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ts",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256"
      }
    ],
    name: "Supply",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ts",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "MAXTIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MINTIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "add_to_whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256"
      }
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_t",
        type: "uint256"
      }
    ],
    name: "balanceOfAtT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newController",
        type: "address"
      }
    ],
    name: "changeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "checkpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "contracts_whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256"
      }
    ],
    name: "create_lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "deposit_for",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "get_last_user_slope",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "increase_amount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256"
      }
    ],
    name: "increase_amount_and_time",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256"
      }
    ],
    name: "increase_unlock_time",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "locked",
    outputs: [
      {
        internalType: "int128",
        name: "amount",
        type: "int128"
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      }
    ],
    name: "locked__end",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "point_history",
    outputs: [
      {
        internalType: "int128",
        name: "bias",
        type: "int128"
      },
      {
        internalType: "int128",
        name: "slope",
        type: "int128"
      },
      {
        internalType: "uint256",
        name: "ts",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "blk",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "remove_from_whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "slope_changes",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "supply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256"
      }
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "t",
        type: "uint256"
      }
    ],
    name: "totalSupplyAtT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "transfersEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unlocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "user_point_epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "user_point_history",
    outputs: [
      {
        internalType: "int128",
        name: "bias",
        type: "int128"
      },
      {
        internalType: "int128",
        name: "slope",
        type: "int128"
      },
      {
        internalType: "uint256",
        name: "ts",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "blk",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256"
      }
    ],
    name: "user_point_history__ts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var SVotingEscrow__factory = class {
  static createInterface() {
    return new utils.Interface(_abi16);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi16, signerOrProvider);
  }
};
__publicField(SVotingEscrow__factory, "abi", _abi16);

export { Bridge__factory, ERC20__factory, Factory__factory, FeeDistributor__factory, LPStakingTime__factory, LPStaking__factory, MerkleDropV2__factory, Pool__factory, RouterETH__factory, Router__factory, SVotingEscrow__factory, StargateFeeLibrary__factory, StargateToken__factory, StargateWidget__factory, VotingEscrow__factory, WhitelistAuction__factory, factories_exports };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ATRGEUFR.mjs.map