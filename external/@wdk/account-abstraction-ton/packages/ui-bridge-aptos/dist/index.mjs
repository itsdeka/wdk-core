import { getMinDstGas, buildDefaultAdapterParams, buildAirdropAdapterParams, getMessageFee, createTransaction, fullAddress, isErrorOfApiError } from '@layerzerolabs/ui-aptos';
import { currencySchema, MessageFee, removeDust, castCurrencyAmountUnsafe, isCoin, isAptosChainKey, isEvmChainKey, hasAddress, AdapterParams, getNativeCurrency, CurrencyAmount, MaxUint256 } from '@layerzerolabs/ui-core';
import { addressToBytes32, ERC20__api, serializeAdapterParams, AddressZero, createTransaction as createTransaction$1, AddressOne } from '@layerzerolabs/ui-evm';
import { utils, Contract } from 'ethers';
import { HexString } from 'aptos';
import z from 'zod';

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
        internalType: "address",
        name: "_layerZeroEndpoint",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_aptosChainId",
        type: "uint16"
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
        internalType: "bool",
        name: "enabled",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256"
      }
    ],
    name: "EnableEmergencyWithdraw",
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
        name: "token",
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
        name: "amountLD",
        type: "uint256"
      }
    ],
    name: "Receive",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "RegisterToken",
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
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "to",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      }
    ],
    name: "Send",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "aptosChainId",
        type: "uint16"
      }
    ],
    name: "SetAptosChainId",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bridgeFeeBP",
        type: "uint256"
      }
    ],
    name: "SetBridgeBP",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "SetGlobalPause",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "localChainId",
        type: "uint16"
      }
    ],
    name: "SetLocalChainId",
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
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "SetTokenPause",
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
        name: "useCustomAdapterParams",
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
        indexed: false,
        internalType: "address",
        name: "weth",
        type: "address"
      }
    ],
    name: "SetWETH",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
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
        name: "amountLD",
        type: "uint256"
      }
    ],
    name: "WithdrawFee",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
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
        name: "amountLD",
        type: "uint256"
      }
    ],
    name: "WithdrawTVL",
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
    name: "SHARED_DECIMALS",
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
        name: "_token",
        type: "address"
      }
    ],
    name: "accruedFeeLD",
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
    name: "aptosChainId",
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
    name: "bridgeFeeBP",
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
    name: "emergencyWithdrawEnabled",
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
    name: "emergencyWithdrawTime",
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
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    name: "enableEmergencyWithdraw",
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
    inputs: [],
    name: "globalPaused",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "ld2sdRates",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "pausedTokens",
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
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
          }
        ],
        internalType: "struct LzLib.CallParams",
        name: "_callParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "quoteForSend",
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
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "registerToken",
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
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
          }
        ],
        internalType: "struct LzLib.CallParams",
        name: "_callParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "sendETHToAptos",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
          }
        ],
        internalType: "struct LzLib.CallParams",
        name: "_callParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "sendToAptos",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_aptosChainId",
        type: "uint16"
      }
    ],
    name: "setAptosChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bridgeFeeBP",
        type: "uint256"
      }
    ],
    name: "setBridgeFeeBP",
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
        internalType: "bool",
        name: "_paused",
        type: "bool"
      }
    ],
    name: "setGlobalPause",
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
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_paused",
        type: "bool"
      }
    ],
    name: "setTokenPause",
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
        internalType: "address",
        name: "_weth",
        type: "address"
      }
    ],
    name: "setWETH",
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
    name: "supportedTokens",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "tvlSDs",
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
    name: "weth",
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
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "withdrawEmergency",
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
        name: "_amountLD",
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
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      }
    ],
    name: "withdrawTVL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
var ITokenBridge__factory = class {
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider);
  }
};
__publicField(ITokenBridge__factory, "abi", _abi);
function getPath(input) {
  return { srcChainKey: input.srcToken.chainKey, dstChainKey: input.dstToken.chainKey };
}
function tryGetDeployment(chainKey, config) {
  return config.deployments[chainKey];
}
function getDeployment(chainKey, config) {
  const deployment = tryGetDeployment(chainKey, config);
  if (deployment)
    return deployment;
  throw new Error(`Deployment not found for chainKey ${chainKey}`);
}
function getDstAddressForQuote(chainKey) {
  if (isEvmChainKey(chainKey)) {
    return AddressOne;
  }
  if (isAptosChainKey(chainKey)) {
    return fullAddress("0").toString();
  }
  throw new Error(`Unsupported chainKey: ${chainKey}`);
}
function getMaxAmount(token) {
  return CurrencyAmount.fromRawAmount(token, MaxUint256);
}
function isValidPair(srcToken, dstToken, config) {
  if (srcToken.chainKey === dstToken.chainKey)
    return false;
  for (const tokens of Object.values(config.tokens)) {
    if (tokens.some((token) => token.equals(srcToken)) && tokens.some((token) => token.equals(dstToken))) {
      return true;
    }
  }
  return false;
}
function toLD(token, amountSD, SD = 6) {
  const amount = CurrencyAmount.fromRawAmount(token, amountSD);
  if (token.decimals === SD)
    return amount;
  return amount.multiply(10 ** token.decimals).divide(10 ** SD);
}
async function getLimitedAmount(client, bridgeAddress, coin) {
  const resource = await client.getAccountResource(
    bridgeAddress,
    `${bridgeAddress}::limiter::Limiter<${coin}>`
  );
  const { enabled } = resource.data;
  if (!enabled) {
    return {
      limited: false,
      amount: BigInt(0)
    };
  }
  const data = resource.data;
  const limiter = {
    t0Sec: BigInt(data.t0_sec),
    windowSec: BigInt(data.window_sec),
    sumSD: BigInt(data.sum_sd),
    capSD: BigInt(data.cap_sd)
  };
  const now = await getCurrentTimestamp(client);
  let count = (now - limiter.t0Sec) / limiter.windowSec;
  while (count > 0) {
    limiter.sumSD /= BigInt(2);
    count -= BigInt(1);
  }
  const limitedAmtSD = limiter.capSD - limiter.sumSD;
  const ld2sdRate = await getLd2SdRate(client, bridgeAddress, coin);
  return {
    limited: true,
    amount: convertAmountToLD(limitedAmtSD, ld2sdRate)
  };
}
function getBridgeCoinType(token) {
  if (hasAddress(token))
    return token.address;
  throw new Error(`Unsupported token: ${token.symbol}`, { cause: token });
}
async function getCoinStore(client, bridgeAddress, coin) {
  return client.getAccountResource(
    bridgeAddress,
    `${bridgeAddress}::coin_bridge::CoinStore<${coin}>`
  );
}
async function getLd2SdRate(client, bridgeAddress, coin) {
  const resource = await getCoinStore(client, bridgeAddress, coin);
  const { ld2sd_rate } = resource.data;
  return BigInt(ld2sd_rate);
}
async function getCurrentTimestamp(client) {
  const resource = await client.getAccountResource(
    "0x1",
    "0x1::timestamp::CurrentTimeMicroseconds"
  );
  const { microseconds } = resource.data;
  return BigInt(microseconds) / BigInt(1e6);
}
async function getUnclaimed(client, bridgeAddress, coin, owner) {
  const resource = await getCoinStore(client, bridgeAddress, coin);
  const { claimable_amt_ld } = resource.data;
  const claimableAmtLDHandle = claimable_amt_ld.handle;
  try {
    const response = await client.getTableItem(claimableAmtLDHandle, {
      key_type: "address",
      value_type: "u64",
      key: owner
    });
    return BigInt(response);
  } catch (e) {
    if (isErrorOfApiError(e, 404)) {
      return BigInt(0);
    }
    throw e;
  }
}
function claimCoinPayload(bridgeAddress, coin, owner) {
  return {
    function: `${bridgeAddress}::coin_bridge::claim`,
    type_arguments: [coin],
    arguments: [owner]
  };
}
async function getRemoteCoin(client, bridgeAddress, coin, remoteChainId) {
  const resource = await getCoinStore(client, bridgeAddress, coin);
  const { remote_coins } = resource.data;
  const remoteCoinHandle = remote_coins.handle;
  const remoteCoin = await client.getTableItem(remoteCoinHandle, {
    key_type: "u64",
    value_type: `${bridgeAddress}::coin_bridge::RemoteCoin`,
    key: remoteChainId.toString()
  });
  const address = Uint8Array.from(
    Buffer.from(HexString.ensure(remoteCoin.remote_address).noPrefix(), "hex")
  );
  const tvlSD = BigInt(remoteCoin.tvl_sd);
  const { unwrappable } = remoteCoin;
  return {
    address,
    tvlSD,
    unwrappable
  };
}
function convertAmountToLD(amountSD, ld2sdRate) {
  return BigInt(amountSD) * BigInt(ld2sdRate);
}
function sendCoinPayload(bridgeAddress, coin, dstChainId, dstReceiver, amountLD, nativeFee, zroFee, unwrap, adapterParams, msgLibParams) {
  return {
    function: `${bridgeAddress}::coin_bridge::send_coin_from`,
    type_arguments: [coin],
    arguments: [
      dstChainId.toString(),
      dstReceiver,
      amountLD.toString(),
      nativeFee.toString(),
      zroFee.toString(),
      unwrap,
      adapterParams,
      msgLibParams
    ]
  };
}

// src/AptosBridgeV2__aptos.ts
var SEND_PAYLOAD_LENGTH = 74;
var AptosBridgeV2__aptos = class {
  constructor(config, accounts, getAptosClient, getProvider) {
    this.config = config;
    this.accounts = accounts;
    this.getAptosClient = getAptosClient;
    this.getProvider = getProvider;
  }
  sharedDecimals = 6;
  async getDuration(input) {
    return { estimated: 0 };
  }
  async getOptions(input) {
    return { options: [{ mode: "taxi" }] };
  }
  async getMinDstGas(path) {
    const client = this.getAptosClient(path.srcChainKey);
    const accounts = this.accounts[path.srcChainKey];
    const dstEid = getDeployment(path.dstChainKey, this.config).eid;
    const uaAddress = getDeployment(path.srcChainKey, this.config).bridge.address;
    return getMinDstGas(client, accounts, uaAddress, dstEid, BigInt(1 /* SEND */));
  }
  async getMessageFee(path, {
    dstNativeAmount,
    minDstGas,
    dstNativeAddress
  }) {
    const client = this.getAptosClient(path.srcChainKey);
    const accounts = this.accounts[path.srcChainKey];
    const uaAddress = getDeployment(path.srcChainKey, this.config).bridge.address;
    const dstEid = getDeployment(path.dstChainKey, this.config).eid;
    const adapterParams = dstNativeAmount === 0n ? buildDefaultAdapterParams(minDstGas) : buildAirdropAdapterParams(minDstGas, dstNativeAmount, dstNativeAddress);
    const payloadSize = SEND_PAYLOAD_LENGTH;
    const nativeFee = await getMessageFee(
      client,
      accounts,
      uaAddress,
      dstEid,
      adapterParams,
      payloadSize
    );
    return MessageFee.from(path.srcChainKey, {
      nativeFee,
      zroFee: 0n
    });
  }
  async getRoute(input) {
    const path = getPath(input);
    const srcAmount = removeDust(input.srcAmount, this.sharedDecimals);
    const [bridgeFeeBP, minDstGas, srcAmountMax] = await Promise.all([
      this.getBridgeFeeBP(path.dstChainKey),
      this.getMinDstGas(path),
      this.getLimit({
        srcToken: input.srcToken,
        dstToken: input.dstToken
      })
    ]);
    const [messageFee0, messageFee1, duration] = await Promise.all([
      this.getMessageFee(path, {
        dstNativeAmount: 0n,
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey)
      }),
      this.getMessageFee(path, {
        dstNativeAmount: input.dstNativeAmount.toBigInt(),
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey)
      }),
      this.getDuration(input)
    ]);
    const gasCost = messageFee1.nativeFee.subtract(messageFee0.nativeFee);
    const srcAmountRD = castCurrencyAmountUnsafe(srcAmount, input.dstToken);
    const feeRD = srcAmountRD.multiply(bridgeFeeBP).divide(1e4);
    const dstAmount = srcAmountRD.subtract(feeRD);
    const dstAmountMin = dstAmount;
    const allowance = getMaxAmount(input.srcToken);
    const route = {
      srcAmount,
      dstAmount,
      dstAmountMin,
      dstNativeAmount: input.dstNativeAmount,
      messageFee: messageFee0,
      allowance,
      dstAddress: input.dstAddress,
      dstToken: input.dstToken,
      mode: "taxi",
      srcAddress: input.srcAddress,
      srcToken: input.srcToken,
      duration,
      gasCost,
      option: {
        mode: "taxi"
      },
      srcAmountMax,
      error: void 0
    };
    return route;
  }
  async transfer(input) {
    const path = getPath(input);
    const client = this.getAptosClient(path.srcChainKey);
    const minDstGas = await this.getMinDstGas(path);
    const messageFee = await this.getMessageFee(path, {
      dstNativeAmount: input.dstNativeAmount.toBigInt(),
      minDstGas,
      dstNativeAddress: getDstAddressForQuote(path.dstChainKey)
    });
    const unwrap = isCoin(input.dstToken);
    const bridgeAddress = getDeployment(path.srcChainKey, this.config).bridge.address;
    const bridgeCoinType = getBridgeCoinType(input.srcToken);
    const dstEid = getDeployment(path.dstChainKey, this.config).eid;
    const zroFee = 0;
    const nativeFee = messageFee.nativeFee.toBigInt();
    const adapterParams = input.dstNativeAmount.equalTo(0) ? buildDefaultAdapterParams(minDstGas) : buildAirdropAdapterParams(minDstGas, input.dstNativeAmount.toBigInt(), input.dstAddress);
    const msgLibParams = new Uint8Array(0);
    const dstAddress = addressToBytes32(input.dstAddress);
    const srcAmount = input.srcAmount.toBigInt();
    const entryFunctionPayload = sendCoinPayload(
      bridgeAddress,
      bridgeCoinType,
      dstEid,
      dstAddress,
      srcAmount,
      nativeFee,
      zroFee,
      unwrap,
      adapterParams,
      msgLibParams
    );
    return createTransaction(entryFunctionPayload, { client });
  }
  supportsTransfer(srcToken, dstToken) {
    return isAptosChainKey(srcToken.chainKey) && isEvmChainKey(dstToken.chainKey) && isValidPair(srcToken, dstToken, this.config);
  }
  async getBridgeFeeBP(dstChainKey) {
    const bridgeAddress = getDeployment(dstChainKey, this.config).bridge.address;
    const provider = this.getProvider(dstChainKey);
    return getBridgeFeeBP(provider, bridgeAddress);
  }
  async getLimit({
    srcToken,
    dstToken
  }) {
    const coinType = getBridgeCoinType(srcToken);
    const dstEid = getDeployment(dstToken.chainKey, this.config).eid;
    const client = this.getAptosClient(srcToken.chainKey);
    const bridgeAddress = getDeployment(srcToken.chainKey, this.config).bridge.address;
    const [limit, tvl] = await Promise.all([
      getLimitedAmount(client, bridgeAddress, coinType),
      getRemoteCoin(client, bridgeAddress, coinType, dstEid)
    ]);
    const tvlLimit = toLD(srcToken, tvl.tvlSD);
    if (limit.limited) {
      const windowLimit = toLD(srcToken, limit.amount);
      if (windowLimit.lessThan(tvlLimit))
        return windowLimit;
    }
    return tvlLimit;
  }
};
async function getBridgeFeeBP(provider, bridgeAddress) {
  const contract = ITokenBridge__factory.connect(bridgeAddress, provider);
  const bridgeFeeBp = await contract.bridgeFeeBP();
  return bridgeFeeBp.toNumber();
}
var AptosBridgeV2__evm = class {
  constructor(config, getProvider) {
    this.config = config;
    this.getProvider = getProvider;
    this.erc20 = new ERC20__api(getProvider);
  }
  erc20;
  sharedDecimals = 6;
  async getDuration(input) {
    return { estimated: 0 };
  }
  async getOptions(input) {
    return {
      options: [{ mode: "taxi" }]
    };
  }
  async getRoute(input) {
    const path = getPath(input);
    const minDstGas = await this.getMinDstGas(path);
    const [messageFee0, messageFee1, allowance, duration] = await Promise.all([
      this.getMessageFee(path, {
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
        dstNativeAmount: 0n
      }),
      this.getMessageFee(path, {
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
        dstNativeAmount: input.dstNativeAmount.toBigInt()
      }),
      this.getAllowance({
        srcToken: input.srcToken,
        srcAddress: input.srcAddress
      }),
      this.getDuration(input)
    ]);
    const srcAmount = removeDust(input.srcAmount, this.sharedDecimals);
    const srcAmountMax = getMaxAmount(input.srcToken);
    const dstAmount = castCurrencyAmountUnsafe(srcAmount, input.dstToken);
    const dstAmountMin = dstAmount;
    const route = {
      allowance,
      srcAddress: input.srcAddress,
      srcAmount,
      dstAddress: input.dstAddress,
      dstAmount,
      dstAmountMin,
      duration,
      mode: "taxi",
      dstNativeAmount: input.dstNativeAmount,
      srcToken: input.srcToken,
      dstToken: input.dstToken,
      messageFee: messageFee0,
      error: void 0,
      option: {
        mode: "taxi"
      },
      srcAmountMax,
      gasCost: void 0
    };
    return route;
  }
  async approve(input) {
    const bridge = getDeployment(input.srcChainKey, this.config).bridge;
    return this.erc20.forToken(input.srcToken).approve(input.srcAmount, bridge.address);
  }
  async getAllowance(input) {
    if (!hasAddress(input.srcToken))
      return getMaxAmount(input.srcToken);
    const spender = getDeployment(input.srcToken.chainKey, this.config).bridge.address;
    return this.erc20.forToken(input.srcToken).allowance(input.srcAddress, spender);
  }
  async transfer(input) {
    const path = getPath(input);
    const minDstGas = await this.getMinDstGas(path);
    const messageFee = await this.getMessageFee(path, {
      dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
      dstNativeAmount: input.dstNativeAmount.toBigInt(),
      minDstGas
    });
    const srcAmount = input.srcAmount.toBigInt();
    const dstAddress = addressToBytes32(input.dstAddress);
    const contract = this.getBridgeContract(path.srcChainKey);
    const extraGas = Number(minDstGas);
    const adapterParams = serializeAdapterParams(
      input.dstNativeAmount.equalTo(0) ? AdapterParams.forV1(extraGas) : AdapterParams.forV2({
        extraGas,
        dstNativeAddress: input.dstAddress,
        dstNativeAmount: input.dstNativeAmount
      })
    );
    const value = hasAddress(input.srcToken) ? messageFee.nativeFee.toBigInt() : messageFee.nativeFee.add(input.srcAmount).toBigInt();
    const populatedTransaction = hasAddress(input.srcToken) ? contract.populateTransaction.sendToAptos(
      input.srcToken.address,
      dstAddress,
      srcAmount,
      {
        refundAddress: input.srcAddress,
        zroPaymentAddress: AddressZero
      },
      adapterParams,
      { value }
    ) : contract.populateTransaction.sendETHToAptos(
      dstAddress,
      srcAmount,
      {
        refundAddress: input.srcAddress,
        zroPaymentAddress: AddressZero
      },
      adapterParams,
      { value }
    );
    return createTransaction$1(populatedTransaction, {
      provider: this.getProvider(path.srcChainKey),
      chainKey: path.srcChainKey
    });
  }
  supportsTransfer(srcToken, dstToken) {
    return isEvmChainKey(srcToken.chainKey) && isAptosChainKey(dstToken.chainKey) && isValidPair(srcToken, dstToken, this.config);
  }
  async getMinDstGas(path) {
    return 10000n;
  }
  async getMessageFee(path, {
    dstNativeAmount,
    minDstGas,
    dstNativeAddress
  }) {
    const callParams = { refundAddress: AddressOne, zroPaymentAddress: AddressOne };
    const contract = this.getBridgeContract(path.srcChainKey);
    const dstNative = getNativeCurrency(path.dstChainKey);
    const extraGas = Number(minDstGas);
    const adapterParams = serializeAdapterParams(
      dstNativeAmount > 0 ? AdapterParams.forV1(extraGas) : AdapterParams.forV2({
        extraGas,
        dstNativeAmount: CurrencyAmount.fromBigInt(dstNative, dstNativeAmount),
        dstNativeAddress
      })
    );
    const { nativeFee, zroFee } = await contract.quoteForSend(callParams, adapterParams);
    return MessageFee.from(path.srcChainKey, {
      nativeFee: nativeFee.toBigInt(),
      zroFee: zroFee.toBigInt()
    });
  }
  getBridgeContract(chainKey) {
    const provider = this.getProvider(chainKey);
    const deployment = getDeployment(chainKey, this.config);
    const contract = ITokenBridge__factory.connect(deployment.bridge.address, provider);
    return contract;
  }
};
var serializedDeploymentSchema = z.object({
  eid: z.number(),
  bridge: z.object({
    address: z.string()
  })
});
var serializedAptosBridgeConfigSchema = z.object({
  deployments: z.record(serializedDeploymentSchema),
  tokens: z.record(
    z.enum([
      "USDC" /* USDC */,
      "BUSD" /* BUSD */,
      "WBTC" /* WBTC */,
      "USDT" /* USDT */,
      "USDD" /* USDD */,
      "WETH" /* WETH */
    ]),
    z.array(currencySchema)
  )
});
function createAptosBridgeConfig(input) {
  const config = serializedAptosBridgeConfigSchema.parse(input);
  return config;
}

// src/config/mainnet.ts
var mainnet = createAptosBridgeConfig({
  deployments: {
    ethereum: {
      eid: 101,
      bridge: {
        address: "0x50002CdFe7CCb0C41F519c6Eb0653158d11cd907"
      }
    },
    arbitrum: {
      eid: 110,
      bridge: { address: "0x1BAcC2205312534375c8d1801C27D28370656cFf" }
    },
    avalanche: {
      eid: 106,
      bridge: { address: "0xA5972EeE0C9B5bBb89a5B16D1d65f94c9EF25166" }
    },
    bsc: {
      eid: 102,
      bridge: { address: "0x2762409Baa1804D94D8c0bCFF8400B78Bf915D5B" }
    },
    optimism: {
      eid: 111,
      bridge: { address: "0x86Bb63148d17d445Ed5398ef26Aa05Bf76dD5b59" }
    },
    polygon: {
      eid: 109,
      bridge: { address: "0x488863D609F3A673875a914fBeE7508a1DE45eC6" }
    },
    aptos: {
      eid: 108,
      bridge: {
        address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa"
      }
    }
  },
  tokens: {
    WETH: [
      {
        chainKey: "ethereum",
        decimals: 18,
        symbol: "ETH",
        name: "ETH"
      },
      {
        chainKey: "optimism",
        decimals: 18,
        symbol: "ETH",
        name: "ETH"
      },
      {
        chainKey: "arbitrum",
        decimals: 18,
        symbol: "ETH",
        name: "ETH"
      },
      {
        chainKey: "ethereum",
        decimals: 18,
        symbol: "WETH",
        name: "Wrapped Ether",
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      },
      {
        chainKey: "arbitrum",
        decimals: 18,
        symbol: "WETH",
        name: "Wrapped Ether",
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
      },
      {
        chainKey: "optimism",
        decimals: 18,
        symbol: "WETH",
        name: "Wrapped Ether",
        address: "0x4200000000000000000000000000000000000006"
      },
      {
        chainKey: "aptos",
        decimals: 6,
        symbol: "WETH",
        name: "Wrapped Ether",
        address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH"
      }
    ],
    USDC: [
      {
        chainKey: "ethereum",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      },
      {
        chainKey: "avalanche",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
      },
      {
        chainKey: "polygon",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
      },
      {
        chainKey: "arbitrum",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"
      },
      {
        chainKey: "optimism",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
      },
      {
        chainKey: "bsc",
        decimals: 18,
        symbol: "USDC",
        name: "USD Coin",
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
      },
      {
        chainKey: "aptos",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC"
      }
    ],
    USDT: [
      {
        chainKey: "ethereum",
        decimals: 6,
        symbol: "USDT",
        name: "USD Tether",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      },
      {
        chainKey: "bsc",
        decimals: 18,
        symbol: "USDT",
        name: "USD Tether",
        address: "0x55d398326f99059fF775485246999027B3197955"
      },
      {
        chainKey: "avalanche",
        decimals: 6,
        symbol: "USDT",
        name: "USD Tether",
        address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"
      },
      {
        chainKey: "polygon",
        decimals: 6,
        symbol: "USDT",
        name: "USD Tether",
        address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
      },
      {
        chainKey: "aptos",
        decimals: 6,
        symbol: "USDT",
        name: "USD Tether",
        address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT"
      }
    ],
    USDD: [
      {
        chainKey: "ethereum",
        decimals: 18,
        symbol: "USDD",
        name: "Decentralized USD",
        address: "0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6"
      },
      {
        chainKey: "bsc",
        decimals: 18,
        symbol: "USDD",
        name: "Decentralized USD",
        address: "0xd17479997F34dd9156Deef8F95A52D81D265be9c"
      },
      {
        chainKey: "aptos",
        decimals: 6,
        symbol: "USDD",
        name: "Decentralized USD",
        address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDD"
      }
    ],
    WBTC: [
      {
        chainKey: "ethereum",
        decimals: 8,
        symbol: "WBTC",
        name: "Wrapped BTC",
        address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
      },
      {
        chainKey: "aptos",
        decimals: 6,
        symbol: "WBTC",
        name: "Wrapped BTC",
        address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WBTC"
      }
    ]
  }
});
var AptosClaimV2__aptos = class {
  constructor(config, accounts, getClient) {
    this.config = config;
    this.accounts = accounts;
    this.getClient = getClient;
  }
  supports(token) {
    if (!isAptosChainKey(token.chainKey))
      return false;
    for (const other of Object.values(this.config.tokens).flat()) {
      if (token.equals(other))
        return true;
    }
    return false;
  }
  async getUnclaimed(input) {
    const client = this.getClient(input.token.chainKey);
    const bridgeAddress = getDeployment(input.token.chainKey, this.config).bridge.address;
    const tokenAddress = getBridgeCoinType(input.token);
    const unclaimed = await getUnclaimed(client, bridgeAddress, tokenAddress, input.owner);
    return CurrencyAmount.fromBigInt(input.token, unclaimed);
  }
  async claim(input) {
    const client = this.getClient(input.token.chainKey);
    const bridgeAddress = getDeployment(input.token.chainKey, this.config).bridge.address;
    const tokenAddress = getBridgeCoinType(input.token);
    const ownerAddress = fullAddress(input.owner).hex();
    const entryFunctionPayload = claimCoinPayload(bridgeAddress, tokenAddress, ownerAddress);
    return createTransaction(entryFunctionPayload, { client });
  }
};

export { AptosBridgeV2__aptos, AptosBridgeV2__evm, AptosClaimV2__aptos, mainnet };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map