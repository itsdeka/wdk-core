'use strict';

var uiCore = require('@layerzerolabs/ui-core');
var ethers = require('ethers');
var uiEvm = require('@layerzerolabs/ui-evm');
var evm = require('@layerzerolabs/ui-bridge-oft/evm');

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string"
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string"
      },
      {
        internalType: "address",
        name: "_defaultAdmin",
        type: "address"
      },
      {
        internalType: "address",
        name: "_layerZeroEndpoint",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_fieldName",
        type: "string"
      }
    ],
    name: "InvalidField",
    type: "error"
  },
  {
    inputs: [],
    name: "NoMintingToContract",
    type: "error"
  },
  {
    inputs: [],
    name: "NotMinter",
    type: "error"
  },
  {
    inputs: [],
    name: "SupplyExhausted",
    type: "error"
  },
  {
    inputs: [],
    name: "UnsupportedMethod",
    type: "error"
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
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes"
      }
    ],
    name: "MessageFailed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
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
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_toAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
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
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_payloadHash",
        type: "bytes32"
      }
    ],
    name: "RetryMessageSuccess",
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
        indexed: true,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
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
        indexed: false,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_type",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minDstGas",
        type: "uint256"
      }
    ],
    name: "SetMinDstGas",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "precrime",
        type: "address"
      }
    ],
    name: "SetPrecrime",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_path",
        type: "bytes"
      }
    ],
    name: "SetTrustedRemote",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes"
      }
    ],
    name: "SetTrustedRemoteAddress",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_useCustomAdapterParams",
        type: "bool"
      }
    ],
    name: "SetUseCustomAdapterParams",
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
    name: "FUNCTION_TYPE_SEND",
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
    name: "MAX_SUPPLY",
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
    name: "MINTER_ROLE",
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
    name: "NO_EXTRA_GAS",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "circulatingSupply",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateSendFee",
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
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "failedMessages",
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
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      }
    ],
    name: "getConfig",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "getRoleMember",
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
        name: "role",
        type: "bytes32"
      }
    ],
    name: "getRoleMemberCount",
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
        name: "_remoteChainId",
        type: "uint16"
      }
    ],
    name: "getTrustedRemoteAddress",
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
    name: "isTrustedRemote",
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
    name: "lzEndpoint",
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
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "minDstGasLookup",
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
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "mint",
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
    name: "nonblockingLzReceive",
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
    inputs: [],
    name: "precrime",
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
    name: "renounceRole",
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
    name: "retryMessage",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_zroPaymentAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "sendFrom",
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
        internalType: "uint16",
        name: "_packetType",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_minGas",
        type: "uint256"
      }
    ],
    name: "setMinDstGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_precrime",
        type: "address"
      }
    ],
    name: "setPrecrime",
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
        name: "_version",
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
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_path",
        type: "bytes"
      }
    ],
    name: "setTrustedRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes"
      }
    ],
    name: "setTrustedRemoteAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_useCustomAdapterParams",
        type: "bool"
      }
    ],
    name: "setUseCustomAdapterParams",
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
        name: "to",
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
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "trustedRemoteLookup",
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
    name: "useCustomAdapterParams",
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
    name: "withdrawForcedEther",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
var Shrap__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi, signerOrProvider);
  }
};
__publicField(Shrap__factory, "abi", _abi);

// src/evm/ShrapBridge.ts
var ShrapBridge = class extends evm.OftBridgeV1 {
  validateConfig(config) {
    uiCore.assert(config.version === "shrap", "Invalid config.version: is not shrap");
    uiCore.assert(config.fee === false, "Invalid config.fee: is not false");
  }
  transfer(input) {
    this.validateInput(input);
    if (this.isAvalanche(input.srcChainKey)) {
      return this.transferAvalanche(input);
    }
    return super.transfer(input);
  }
  getExtraGas({ srcToken, dstToken }) {
    if (this.isAvalanche(srcToken.chainKey)) {
      return this.getAvalancheExtraGas({ srcToken, dstToken });
    }
    return super.getExtraGas({ srcToken, dstToken });
  }
  getMessageFee({
    srcToken,
    dstToken,
    adapterParams
  }) {
    if (this.isAvalanche(srcToken.chainKey)) {
      return this.getAvalancheMessageFee({ srcToken, dstToken, adapterParams });
    }
    return super.getMessageFee({ srcToken, dstToken, adapterParams });
  }
  isAvalanche(chainKey) {
    return chainKey === "avalanche";
  }
  getAvalancheContract(chainKey) {
    const { oft } = this.getDeployment(chainKey);
    uiCore.assert(oft, "Oft contract not found");
    return Shrap__factory.connect(oft.address, this.providerFactory(chainKey));
  }
  async transferAvalanche(input) {
    const contract = this.getAvalancheContract(input.srcChainKey);
    const adapterParams = uiEvm.serializeAdapterParams(input.adapterParams);
    const value = input.fee.nativeFee.quotient;
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const populatedTransaction = contract.populateTransaction.sendFrom(
      input.srcAddress,
      dstEid,
      input.dstAddress,
      input.srcAmount.quotient,
      input.dstAddress,
      uiEvm.AddressZero,
      adapterParams,
      0,
      { value, from: input.srcAddress }
    );
    return uiEvm.createTransaction(populatedTransaction, {
      provider: this.providerFactory(input.srcChainKey),
      chainKey: input.srcChainKey
    });
  }
  async getAvalancheMessageFee({
    srcToken,
    dstToken,
    adapterParams
  }) {
    const native = uiCore.getNativeCurrency(srcToken.chainKey);
    const contract = this.getAvalancheContract(srcToken.chainKey);
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);
    const dstAddress = ethers.utils.hexlify(uiEvm.addressToBytes32(uiEvm.AddressOne));
    const amount = 0;
    const useZro = false;
    const lzParams = uiEvm.serializeAdapterParams(adapterParams);
    const response = await contract.estimateSendFee(dstEid, dstAddress, amount, useZro, lzParams);
    const fee = {
      nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, response.nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromRawAmount(native, response.zroFee.toBigInt())
    };
    return fee;
  }
  async getAvalancheExtraGas({ srcToken, dstToken }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const contract = this.getAvalancheContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const extraGas = await contract.minDstGasLookup(dstEid, 1 /* FUNCTION_TYPE_SEND */);
    return extraGas.toNumber() | this.getDefaultExtraGas(srcChainKey, dstChainKey);
  }
};

exports.ShrapBridge = ShrapBridge;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map