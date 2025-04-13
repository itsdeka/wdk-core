'use strict';

var chunkDXBKMGUM_cjs = require('./chunk-DXBKMGUM.cjs');
var ethers = require('ethers');

// src/typechain/factories/index.ts
var factories_exports = {};
chunkDXBKMGUM_cjs.__export(factories_exports, {
  ERC20__factory: () => ERC20__factory,
  Executor__factory: () => Executor__factory
});
var _abi = [
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
    return new ethers.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi, signerOrProvider);
  }
};
chunkDXBKMGUM_cjs.__publicField(ERC20__factory, "abi", _abi);
var _abi2 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
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
        name: "_value",
        type: "uint256"
      }
    ],
    name: "Transfer_NativeFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "Transfer_ToAddressIsZero",
    type: "error"
  },
  {
    inputs: [],
    name: "Worker_NotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "Worker_OnlyMessageLib",
    type: "error"
  },
  {
    inputs: [],
    name: "Worker_RoleRenouncingDisabled",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "baseGas",
            type: "uint64"
          },
          {
            internalType: "uint16",
            name: "multiplierBps",
            type: "uint16"
          },
          {
            internalType: "uint128",
            name: "floorMarginUSD",
            type: "uint128"
          },
          {
            internalType: "uint128",
            name: "nativeCap",
            type: "uint128"
          }
        ],
        indexed: false,
        internalType: "struct IExecutor.DstConfigParam[]",
        name: "params",
        type: "tuple[]"
      }
    ],
    name: "DstConfigSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          }
        ],
        indexed: false,
        internalType: "struct Origin",
        name: "origin",
        type: "tuple"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dstEid",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "oapp",
        type: "address"
      },
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct IExecutor.NativeDropParams[]",
        name: "params",
        type: "tuple[]"
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "success",
        type: "bool[]"
      }
    ],
    name: "NativeDropApplied",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32"
      }
    ],
    name: "RoleAdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "RoleGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "RoleRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "multiplierBps",
        type: "uint16"
      }
    ],
    name: "SetDefaultMultiplierBps",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "priceFeed",
        type: "address"
      }
    ],
    name: "SetPriceFeed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "dstEid",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint8[]",
        name: "optionTypes",
        type: "uint8[]"
      }
    ],
    name: "SetSupportedOptionTypes",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "workerLib",
        type: "address"
      }
    ],
    name: "SetWorkerLib",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "lib",
        type: "address"
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
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "allowlistSize",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_calldataSize",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_options",
        type: "bytes"
      }
    ],
    name: "assignJob",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultMultiplierBps",
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
    inputs: [
      {
        internalType: "uint32",
        name: "dstEid",
        type: "uint32"
      }
    ],
    name: "dstConfig",
    outputs: [
      {
        internalType: "uint64",
        name: "baseGas",
        type: "uint64"
      },
      {
        internalType: "uint16",
        name: "multiplierBps",
        type: "uint16"
      },
      {
        internalType: "uint128",
        name: "floorMarginUSD",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "nativeCap",
        type: "uint128"
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
        internalType: "bytes",
        name: "_packet",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      }
    ],
    name: "execute301",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_calldataSize",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_options",
        type: "bytes"
      }
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      }
    ],
    name: "getRoleAdmin",
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
        internalType: "uint32",
        name: "_eid",
        type: "uint32"
      }
    ],
    name: "getSupportedOptionTypes",
    outputs: [
      {
        internalType: "uint8[]",
        name: "",
        type: "uint8[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      }
    ],
    name: "hasAcl",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "hasRole",
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
        name: "_endpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_receiveUln301",
        type: "address"
      },
      {
        internalType: "address[]",
        name: "_messageLibs",
        type: "address[]"
      },
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address"
      },
      {
        internalType: "address",
        name: "_roleAdmin",
        type: "address"
      },
      {
        internalType: "address[]",
        name: "_admins",
        type: "address[]"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "localEid",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          }
        ],
        internalType: "struct Origin",
        name: "_origin",
        type: "tuple"
      },
      {
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_oapp",
        type: "address"
      },
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        internalType: "struct IExecutor.NativeDropParams[]",
        name: "_nativeDropParams",
        type: "tuple[]"
      },
      {
        internalType: "uint256",
        name: "_nativeDropGasLimit",
        type: "uint256"
      }
    ],
    name: "nativeDrop",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          }
        ],
        internalType: "struct Origin",
        name: "_origin",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        internalType: "struct IExecutor.NativeDropParams[]",
        name: "_nativeDropParams",
        type: "tuple[]"
      },
      {
        internalType: "uint256",
        name: "_nativeDropGasLimit",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_packet",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      }
    ],
    name: "nativeDropAndExecute301",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        internalType: "struct IExecutor.NativeDropParams[]",
        name: "_nativeDropParams",
        type: "tuple[]"
      },
      {
        internalType: "uint256",
        name: "_nativeDropGasLimit",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address"
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "srcEid",
                type: "uint32"
              },
              {
                internalType: "bytes32",
                name: "sender",
                type: "bytes32"
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64"
              }
            ],
            internalType: "struct Origin",
            name: "origin",
            type: "tuple"
          },
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          }
        ],
        internalType: "struct IExecutor.ExecutionParams",
        name: "_executionParams",
        type: "tuple"
      }
    ],
    name: "nativeDropAndExecute302",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiveUln301",
        type: "address"
      }
    ],
    name: "onUpgrade",
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
    name: "priceFeed",
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
    name: "receiveUln301",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_multiplierBps",
        type: "uint16"
      }
    ],
    name: "setDefaultMultiplierBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "baseGas",
            type: "uint64"
          },
          {
            internalType: "uint16",
            name: "multiplierBps",
            type: "uint16"
          },
          {
            internalType: "uint128",
            name: "floorMarginUSD",
            type: "uint128"
          },
          {
            internalType: "uint128",
            name: "nativeCap",
            type: "uint128"
          }
        ],
        internalType: "struct IExecutor.DstConfigParam[]",
        name: "_params",
        type: "tuple[]"
      }
    ],
    name: "setDstConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_paused",
        type: "bool"
      }
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address"
      }
    ],
    name: "setPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32"
      },
      {
        internalType: "uint8[]",
        name: "_optionTypes",
        type: "uint8[]"
      }
    ],
    name: "setSupportedOptionTypes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_workerFeeLib",
        type: "address"
      }
    ],
    name: "setWorkerFeeLib",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
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
        name: "_lib",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "workerFeeLib",
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
        name: "_logic",
        type: "address"
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    stateMutability: "payable",
    type: "constructor"
  }
];
var Executor__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi2, signerOrProvider);
  }
};
chunkDXBKMGUM_cjs.__publicField(Executor__factory, "abi", _abi2);

exports.ERC20__factory = ERC20__factory;
exports.Executor__factory = Executor__factory;
exports.factories_exports = factories_exports;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZWL5EJV7.cjs.map