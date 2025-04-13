import { validateInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { currencySchema, isToken, CurrencyAmount, assert, getNativeCurrency, castCurrencyAmountUnsafe, MaxUint256, Token, serializeCurrency } from '@layerzerolabs/ui-core';
import { constants, utils, Contract } from 'ethers';
import { ERC20__api, createTransaction, serializeAdapterParams } from '@layerzerolabs/ui-evm';
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
        name: "_endpoint",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_weth",
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
        indexed: false,
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
        name: "amount",
        type: "uint256"
      }
    ],
    name: "ReceiveToken",
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
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
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
    name: "SendToken",
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
        name: "remoteChainId",
        type: "uint16"
      }
    ],
    name: "SetRemoteChainId",
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
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawFee",
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
    name: "LDtoSDConversionRate",
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
    name: "PT_MINT",
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
    inputs: [],
    name: "PT_UNLOCK",
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
        name: "token",
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
    inputs: [
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
        name: "callParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes"
      }
    ],
    name: "bridge",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
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
        name: "callParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes"
      }
    ],
    name: "bridgeETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
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
        name: "callParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes"
      }
    ],
    name: "bridgeNative",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "useZro",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateBridgeFee",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "sharedDecimals",
        type: "uint8"
      }
    ],
    name: "registerToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "remoteChainId",
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
        name: "_remoteChainId",
        type: "uint16"
      }
    ],
    name: "setRemoteChainId",
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
        name: "",
        type: "address"
      }
    ],
    name: "totalValueLockedSD",
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
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      }
    ],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
var OriginalTokenBridge__factory = class {
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider);
  }
};
__publicField(OriginalTokenBridge__factory, "abi", _abi);
var _abi2 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_endpoint",
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
        indexed: false,
        internalType: "address",
        name: "localToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "remoteToken",
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
        internalType: "uint16",
        name: "withdrawalFeeBps",
        type: "uint16"
      }
    ],
    name: "SetWithdrawalFeeBps",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "localToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "remoteToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16"
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
    name: "UnwrapToken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "localToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "remoteToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16"
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
    name: "WrapToken",
    type: "event"
  },
  {
    inputs: [],
    name: "PT_MINT",
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
    inputs: [],
    name: "PT_UNLOCK",
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
    inputs: [],
    name: "TOTAL_BPS",
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
        internalType: "address",
        name: "localToken",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "bool",
        name: "unwrapWeth",
        type: "bool"
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
        name: "callParams",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes"
      }
    ],
    name: "bridge",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "useZro",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateBridgeFee",
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
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "localToRemote",
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
        internalType: "address",
        name: "localToken",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "remoteToken",
        type: "address"
      }
    ],
    name: "registerToken",
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
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "remoteToLocal",
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
        internalType: "uint16",
        name: "_withdrawalFeeBps",
        type: "uint16"
      }
    ],
    name: "setWithdrawalFeeBps",
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
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "totalValueLocked",
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
    name: "withdrawalFeeBps",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var WrappedTokenBridge__factory = class {
  static createInterface() {
    return new utils.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi2, signerOrProvider);
  }
};
__publicField(WrappedTokenBridge__factory, "abi", _abi2);

// src/utils/getExtraGas.ts
function getExtraGas(srcChainKey, dstChainKey) {
  const extraGas = dstChainKey === "arbitrum" ? 3e6 : dstChainKey === "aptos" || dstChainKey === "aptos-testnet" ? 1e4 : 25e4;
  return extraGas;
}

// src/utils/isValidSwap.ts
function isValidSwap(srcToken, dstToken, config) {
  for (const swapGroup of config.tokens) {
    if (swapGroup.some((t) => t.equals(srcToken)) && swapGroup.some((t) => t.equals(dstToken))) {
      return true;
    }
  }
  return false;
}
var BaseTokenBridge = class {
  constructor(config) {
    this.config = config;
  }
  async getOptions(input) {
    const taxiOption = {
      mode: "taxi"
    };
    return { options: [taxiOption] };
  }
  chainKeyToEndpointId(chainKey) {
    const deployment = this.getDeployment(chainKey);
    return deployment.eid;
  }
  tryGetDeployment(chainKey) {
    const deployment = this.config.deployments[chainKey];
    if (deployment)
      return deployment;
    return void 0;
  }
  getDeployment(chainKey) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment)
      return deployment;
    throw new Error(`No deployment for ${chainKey}`);
  }
  validateInput(input) {
    validateInput(input);
  }
};

// src/api/OriginalTokenBridge.ts
var OriginalTokenBridge = class extends BaseTokenBridge {
  constructor(providerFactory, bridge, config) {
    super(config);
    this.providerFactory = providerFactory;
    this.bridge = bridge;
    this.erc20 = new ERC20__api(providerFactory);
  }
  erc20;
  supportsClaim(currency) {
    return false;
  }
  supportsRegister(currency) {
    if (currency.chainKey !== this.bridge.chainKey)
      return false;
    if (!this.config.tokens.flat().some((token) => token.equals(currency)))
      return false;
    return true;
  }
  async getDuration(input) {
    throw new Error("Not implemented");
  }
  async getAllowance({ token, address }) {
    if (!isToken(token)) {
      return CurrencyAmount.fromRawAmount(token, constants.MaxUint256.toString());
    }
    const contract = this.getContract();
    return this.erc20.forToken(token).allowance(address, contract.address);
  }
  async approve({ amount }) {
    const contract = this.getContract();
    return this.erc20.forToken(amount.token).approve(amount, contract.address);
  }
  supportsTransfer(srcToken, dstToken) {
    const srcDeployment = this.tryGetDeployment(srcToken.chainKey);
    const dstDeployment = this.tryGetDeployment(dstToken.chainKey);
    if (!srcDeployment?.bridgeOriginal)
      return false;
    if (!dstDeployment?.bridgeWrapped)
      return false;
    return isValidSwap(srcToken, dstToken, this.config);
  }
  async isRegistered({ token, address }) {
    return true;
  }
  async getUnclaimed({ token, address }) {
    return CurrencyAmount.fromRawAmount(token, 0);
  }
  claim(input) {
    throw new Error("Method not supported.");
  }
  register(input) {
    throw new Error("Method not supported.");
  }
  async getExtraGas({ srcToken, dstToken }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const contract = this.getContract();
    const amount = await contract.minDstGasLookup(dstEid, 0 /* PT_MINT */);
    return amount.toNumber() || getExtraGas(srcChainKey, dstChainKey);
  }
  async transfer(input) {
    if (isToken(input.srcToken)) {
      return this.transferToken(input);
    }
    return this.transferEth(input);
  }
  async transferToken(input) {
    validateInput(input);
    const srcToken = input.srcToken;
    const srcChainKey = srcToken.chainKey;
    assert(isToken(srcToken));
    const contract = this.getContract();
    const value = input.fee.nativeFee.quotient;
    const callParams = this.buildCallParams(input);
    const adapterParams = this.buildLayerZeroTxParams(input.adapterParams);
    const populatedTransaction = contract.populateTransaction.bridge(
      srcToken.address,
      input.srcAmount.quotient,
      input.dstAddress,
      callParams,
      adapterParams,
      { value, from: input.srcAddress }
    );
    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey
    });
  }
  async transferEth(input) {
    validateInput(input);
    assert(!isToken(input.srcToken));
    const srcChainKey = input.srcChainKey;
    const contract = this.getContract();
    const value = input.fee.nativeFee.add(input.srcAmount).quotient;
    const callParams = this.buildCallParams(input);
    const adapterParams = this.buildLayerZeroTxParams(input.adapterParams);
    const bridgeMethod = this.config.version === 2 ? "bridgeNative" : "bridgeETH";
    const populatedTransaction = contract.populateTransaction[bridgeMethod](
      input.srcAmount.quotient,
      input.dstAddress,
      callParams,
      adapterParams,
      { value, from: input.srcAddress }
    );
    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey
    });
  }
  async getMessageFee({ srcToken, dstToken, adapterParams }) {
    const srcChainKey = srcToken.chainKey;
    const native = getNativeCurrency(srcChainKey);
    const lzParams = this.buildLayerZeroTxParams(adapterParams);
    const useZro = false;
    const contract = this.getContract();
    const response = await contract.estimateBridgeFee(useZro, lzParams);
    const fee = {
      nativeFee: CurrencyAmount.fromRawAmount(native, response.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, response.zroFee.toBigInt())
    };
    return fee;
  }
  async getOutput({ srcAmount, dstToken }) {
    const bridgeFee = srcAmount.multiply(0);
    const outputAmountLD = srcAmount.subtract(bridgeFee);
    const outputAmountRD = castCurrencyAmountUnsafe(outputAmountLD, dstToken);
    return {
      fee: { bridgeFee },
      dstAmount: outputAmountRD
    };
  }
  async getLimit({ srcToken }) {
    return CurrencyAmount.fromRawAmount(srcToken, MaxUint256);
  }
  getContract() {
    const provider = this.providerFactory(this.bridge.chainKey);
    const contract = OriginalTokenBridge__factory.connect(this.bridge.address, provider);
    return contract;
  }
  buildLayerZeroTxParams(adapterParams) {
    return serializeAdapterParams(adapterParams);
  }
  buildCallParams(input) {
    const callParams = {
      refundAddress: input.srcAddress,
      zroPaymentAddress: constants.AddressZero
    };
    return callParams;
  }
};
var WrappedTokenBridge = class extends BaseTokenBridge {
  constructor(providerFactory, bridge, config) {
    super(config);
    this.providerFactory = providerFactory;
    this.bridge = bridge;
    this.erc20 = new ERC20__api(providerFactory);
  }
  erc20;
  supportsClaim(currency) {
    return false;
  }
  supportsRegister(currency) {
    if (currency.chainKey !== this.bridge.chainKey)
      return false;
    if (!this.config.tokens.flat().some((token) => token.equals(currency)))
      return false;
    return true;
  }
  async getDuration(input) {
    throw new Error("Not implemented");
  }
  async getAllowance({ token, address }) {
    if (!isToken(token)) {
      return CurrencyAmount.fromRawAmount(token, constants.MaxUint256.toString());
    }
    const contract = this.getContract();
    return this.erc20.forToken(token).allowance(address, contract.address);
  }
  async approve({ amount }) {
    const contract = this.getContract();
    return this.erc20.forToken(amount.token).approve(amount, contract.address);
  }
  supportsTransfer(srcToken, dstToken) {
    const srcDeployment = this.tryGetDeployment(srcToken.chainKey);
    const dstDeployment = this.tryGetDeployment(dstToken.chainKey);
    if (!srcDeployment?.bridgeWrapped)
      return false;
    if (!dstDeployment?.bridgeOriginal)
      return false;
    return isValidSwap(srcToken, dstToken, this.config);
  }
  async isRegistered({ token, address }) {
    return true;
  }
  async getUnclaimed({ token, address }) {
    return CurrencyAmount.fromRawAmount(token, 0);
  }
  claim(input) {
    throw new Error("Method not supported.");
  }
  register(input) {
    throw new Error("Method not supported.");
  }
  async getExtraGas({ srcToken, dstToken }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const contract = this.getContract();
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);
    const amount = await contract.minDstGasLookup(dstEid, 1 /* PT_UNLOCK */);
    return amount.toNumber() || getExtraGas(srcChainKey, dstChainKey);
  }
  async transfer(input) {
    if (isToken(input.srcToken)) {
      return this.transferToken(input);
    }
    return this.transferEth(input);
  }
  async transferToken(input) {
    validateInput(input);
    const srcToken = input.srcToken;
    assert(isToken(srcToken));
    const contract = this.getContract();
    const srcChainKey = srcToken.chainKey;
    const value = input.fee.nativeFee.quotient;
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const callParams = this.buildCallParams(input);
    const adapterParams = this.buildLayerZeroTxParams(input.adapterParams);
    const unwrapWeth = isToken(input.dstToken) ? false : true;
    const populatedTransaction = contract.populateTransaction.bridge(
      srcToken.address,
      dstEid,
      input.srcAmount.quotient,
      input.dstAddress,
      unwrapWeth,
      callParams,
      adapterParams,
      { value, from: input.srcAddress }
    );
    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey
    });
  }
  async transferEth(input) {
    throw new Error("Not implemented");
  }
  async getBridgeFee(inputAmount, dstToken) {
    const bps = await this.getWithdrawFeeBps();
    return inputAmount.multiply(bps).divide(1e4);
  }
  // extracted so it can be cached
  getWithdrawFeeBps = () => {
    const contract = this.getContract();
    return contract.withdrawalFeeBps();
  };
  async getMessageFee({ srcToken, dstToken, adapterParams }) {
    const useZro = false;
    const native = getNativeCurrency(srcToken.chainKey);
    const lzParams = this.buildLayerZeroTxParams(adapterParams);
    const contract = this.getContract();
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);
    const { nativeFee, zroFee } = await contract.estimateBridgeFee(dstEid, useZro, lzParams);
    const fee = {
      nativeFee: CurrencyAmount.fromRawAmount(native, nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, zroFee.toBigInt())
    };
    return fee;
  }
  async getOutput({ srcAmount, dstToken }) {
    const fee = await this.getBridgeFee(srcAmount, dstToken);
    const outputAmountLD = srcAmount.subtract(fee);
    const outputAmountRD = castCurrencyAmountUnsafe(outputAmountLD, dstToken);
    return {
      fee: { bridgeFee: fee },
      dstAmount: outputAmountRD
    };
  }
  async getWeth(chainKey) {
    const deployment = this.getDeployment(chainKey);
    assert(deployment.bridgeOriginal, `No bridgeOriginal for ${chainKey}`);
    const contract = OriginalTokenBridge__factory.connect(
      deployment.bridgeOriginal.address,
      this.providerFactory(chainKey)
    );
    const weth = await contract.weth();
    return Token.from({ chainKey, address: weth, decimals: 18, symbol: "WETH" });
  }
  async getLimit({ srcToken, dstToken }) {
    const dstChainKey = dstToken.chainKey;
    const dstDeployment = this.getDeployment(dstChainKey);
    assert(dstDeployment.bridgeOriginal, `No bridgeOriginal for ${dstChainKey}`);
    const original = OriginalTokenBridge__factory.connect(
      dstDeployment.bridgeOriginal.address,
      this.providerFactory(dstChainKey)
    );
    const dstTokenAddress = (isToken(dstToken) ? dstToken : await this.getWeth(dstChainKey)).address;
    const [ld2sdRate, tvlSD] = await Promise.all([
      original.LDtoSDConversionRate(dstTokenAddress),
      original.totalValueLockedSD(dstTokenAddress)
    ]);
    const tvlLD = tvlSD.mul(ld2sdRate);
    return CurrencyAmount.fromRawAmount(srcToken, tvlLD.toString());
  }
  getContract() {
    const provider = this.providerFactory(this.bridge.chainKey);
    const contract = WrappedTokenBridge__factory.connect(this.bridge.address, provider);
    return contract;
  }
  buildLayerZeroTxParams(adapterParams) {
    return serializeAdapterParams(adapterParams);
  }
  buildCallParams(input) {
    const callParams = {
      refundAddress: input.srcAddress,
      zroPaymentAddress: constants.AddressZero
    };
    return callParams;
  }
};
var bridgeSchema = z.object({
  address: z.string()
});
var wrappedAssetBridgeConfigSchema = z.object({
  version: z.number().or(z.string()),
  tokens: z.array(z.array(currencySchema)),
  deployments: z.record(
    z.object({
      eid: z.number(),
      bridgeOriginal: bridgeSchema.optional(),
      bridgeWrapped: bridgeSchema.optional()
    })
  )
}).transform((input) => {
  const config = {
    version: input.version,
    deployments: {},
    tokens: input.tokens
  };
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    let bridgeOriginal, bridgeWrapped;
    if (deployment.bridgeOriginal) {
      bridgeOriginal = {
        address: deployment.bridgeOriginal.address,
        chainKey
      };
    }
    if (deployment.bridgeWrapped) {
      bridgeWrapped = {
        address: deployment.bridgeWrapped.address,
        chainKey
      };
    }
    config.deployments[chainKey] = {
      eid: deployment.eid,
      bridgeOriginal,
      bridgeWrapped
    };
  }
  return config;
});
function serializeWrappedAssetBridgeConfig(input) {
  const serialized = {
    deployments: {},
    tokens: input.tokens.map((tokenGroup) => tokenGroup.map((token) => serializeCurrency(token))),
    version: input.version
  };
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    const eid = deployment.eid;
    if (deployment.bridgeOriginal) {
      serialized.deployments[chainKey] = {
        eid,
        bridgeOriginal: {
          address: deployment.bridgeOriginal.address
        }
      };
    }
    if (deployment.bridgeWrapped) {
      serialized.deployments[chainKey] = {
        eid,
        bridgeWrapped: {
          address: deployment.bridgeWrapped.address
        }
      };
    }
  }
  return serialized;
}

// src/utils/createWrappedAssetBridge.ts
function createWrappedAssetBridge(config, providerFactory) {
  const bridges = [];
  for (const deployment of Object.values(config.deployments)) {
    if (deployment.bridgeOriginal) {
      const bridge = new OriginalTokenBridge(providerFactory, deployment.bridgeOriginal, config);
      bridges.push(bridge);
    }
    if (deployment.bridgeWrapped) {
      const bridge = new WrappedTokenBridge(providerFactory, deployment.bridgeWrapped, config);
      bridges.push(bridge);
    }
  }
  return bridges;
}

// src/utils/createWrappedTokenBridgeConfig.ts
function createWrappedAssetBridgeConfig(input) {
  return wrappedAssetBridgeConfigSchema.parse(input);
}

export { OriginalTokenBridge, WrappedTokenBridge, createWrappedAssetBridge, createWrappedAssetBridgeConfig, serializeWrappedAssetBridgeConfig, wrappedAssetBridgeConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map