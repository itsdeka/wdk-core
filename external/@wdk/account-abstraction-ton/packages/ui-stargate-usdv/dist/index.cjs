'use strict';

var v1 = require('@layerzerolabs/ui-bridge-sdk/v1');
var uiCore = require('@layerzerolabs/ui-core');
var uiEvm = require('@layerzerolabs/ui-evm');
var ethers = require('ethers');
var z = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var z__default = /*#__PURE__*/_interopDefault(z);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var TYPE_1 = 1;
var TYPE_2 = 2;
var MaxUint128 = ethers.ethers.BigNumber.from("0xffffffffffffffffffffffffffffffff");
function optionsType1(_extraGas) {
  const extraGas = ethers.ethers.BigNumber.from(_extraGas);
  uiCore.assert(extraGas.lte(MaxUint128), "extraGas should be less than MaxUint128");
  return ethers.ethers.utils.solidityPack(["uint16", "uint256"], [TYPE_1, extraGas]);
}
function optionsType2(_extraGas, _dstNativeAmt, _dstNativeAddress) {
  const extraGas = ethers.ethers.BigNumber.from(_extraGas);
  uiCore.assert(extraGas.lte(MaxUint128), "extraGas should be less than MaxUint128");
  const dstNativeAmt = ethers.ethers.BigNumber.from(_dstNativeAmt);
  uiCore.assert(dstNativeAmt.lte(MaxUint128), "dstNativeAmt should be less than MaxUint128");
  return ethers.ethers.utils.solidityPack(
    ["uint16", "uint256", "uint256", "bytes"],
    [
      TYPE_2,
      ethers.ethers.BigNumber.from(extraGas),
      ethers.ethers.BigNumber.from(dstNativeAmt),
      _dstNativeAddress
    ]
  );
}
var _abi = [
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
        internalType: "uint256",
        name: "_amountLDSend",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256"
      }
    ],
    name: "AmountSlippage",
    type: "error"
  },
  {
    inputs: [],
    name: "Blacklisted",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidArgument",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "color",
        type: "uint32"
      }
    ],
    name: "InvalidColor",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidUser",
    type: "error"
  },
  {
    inputs: [],
    name: "LDMinusSD",
    type: "error"
  },
  {
    inputs: [],
    name: "NotDeltaZero",
    type: "error"
  },
  {
    inputs: [],
    name: "NotImplemented",
    type: "error"
  },
  {
    inputs: [],
    name: "Overflow",
    type: "error"
  },
  {
    inputs: [],
    name: "Paused",
    type: "error"
  },
  {
    inputs: [],
    name: "Unauthorized",
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
    inputs: [],
    name: "EIP712DomainChanged",
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
        indexed: true,
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
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
        name: "_amountLD",
        type: "uint256"
      }
    ],
    name: "ReceiveOFT",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        indexed: false,
        internalType: "struct Delta[]",
        name: "deltas",
        type: "tuple[]"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "remintFee",
        type: "uint64"
      }
    ],
    name: "Reminting",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_fromAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "SendOFT",
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
        indexed: false,
        internalType: "bool",
        name: "isBlacklisted",
        type: "bool"
      }
    ],
    name: "SetBlacklist",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "colorer",
        type: "address"
      }
    ],
    name: "SetColorer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "defaultColor",
        type: "uint32"
      }
    ],
    name: "SetDefaultColor",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_inspector",
        type: "address"
      }
    ],
    name: "SetInspector",
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
    name: "SetPause",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Role",
        name: "role",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "SetRole",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "guid",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        indexed: false,
        internalType: "struct Delta[]",
        name: "deltas",
        type: "tuple[]"
      }
    ],
    name: "Synced",
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
        name: "_user",
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
        name: "_user",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_isBlacklisted",
        type: "bool"
      }
    ],
    name: "blacklist",
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
        internalType: "uint64",
        name: "_amount",
        type: "uint64"
      },
      {
        internalType: "uint32[]",
        name: "_deficits",
        type: "uint32[]"
      }
    ],
    name: "burn",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_color",
        type: "uint32"
      }
    ],
    name: "colorStateOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "colored",
            type: "uint64"
          },
          {
            internalType: "int64",
            name: "delta",
            type: "int64"
          },
          {
            internalType: "int64",
            name: "lastDelta",
            type: "int64"
          },
          {
            internalType: "uint32",
            name: "lastBlockNumber",
            type: "uint32"
          },
          {
            internalType: "bool",
            name: "known",
            type: "bool"
          }
        ],
        internalType: "struct Colors.ColorState",
        name: "",
        type: "tuple"
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
    name: "colorers",
    outputs: [
      {
        internalType: "address",
        name: "colorer",
        type: "address"
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
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_startColor",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_endColor",
        type: "uint32"
      }
    ],
    name: "getDeltas",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "_colors",
        type: "uint32[]"
      }
    ],
    name: "getDeltas",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum Role",
        name: "_role",
        type: "uint8"
      }
    ],
    name: "getRole",
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
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_foundation",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "maxKnownColor",
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
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_amount",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "_color",
        type: "uint32"
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
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_numDeficits",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_useLZToken",
        type: "bool"
      }
    ],
    name: "quoteRemintFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lzTokenFee",
        type: "uint256"
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
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          }
        ],
        internalType: "struct IOFT.SendParam",
        name: "_param",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_useLZToken",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "quoteSendFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lzTokenFee",
        type: "uint256"
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
        internalType: "uint32",
        name: "_numDeficits",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_useLzToken",
        type: "bool"
      }
    ],
    name: "quoteSyncDeltaFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lzTokenFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_surplusColor",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_surplusAmount",
        type: "uint64"
      },
      {
        internalType: "uint32[]",
        name: "_deficits",
        type: "uint32[]"
      },
      {
        internalType: "uint64",
        name: "_feeCap",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "_msgFee",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      }
    ],
    name: "remint",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          }
        ],
        internalType: "struct IOFT.SendParam",
        name: "_param",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "_msgFee",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "send",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_color",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_amount",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_theta",
        type: "uint64"
      }
    ],
    name: "sendAck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "address",
        name: "_colorer",
        type: "address"
      }
    ],
    name: "setColorer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_defaultColor",
        type: "uint32"
      }
    ],
    name: "setDefaultColor",
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
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum Role",
        name: "_role",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      }
    ],
    name: "setRole",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_theta",
        type: "uint64"
      },
      {
        internalType: "uint32[]",
        name: "_deficits",
        type: "uint32[]"
      },
      {
        internalType: "uint64",
        name: "_feeCap",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "_msgFee",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      }
    ],
    name: "syncDelta",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "_deltas",
        type: "tuple[]"
      }
    ],
    name: "syncDeltaAck",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "user",
        type: "address"
      }
    ],
    name: "userStates",
    outputs: [
      {
        internalType: "uint32",
        name: "color",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "balance",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "blacklisted",
        type: "bool"
      },
      {
        internalType: "uint32",
        name: "defaultColor",
        type: "uint32"
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
var USDVSide__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi, signerOrProvider);
  }
};
__publicField(USDVSide__factory, "abi", _abi);
var _abi2 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_endpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_usdv",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_mainChainEid",
        type: "uint32"
      },
      {
        internalType: "bool",
        name: "_isMainChain",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "InvalidSize",
    type: "error"
  },
  {
    inputs: [],
    name: "NotImplemented",
    type: "error"
  },
  {
    inputs: [],
    name: "NotMainChain",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "NotUSDV",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes"
      }
    ],
    name: "SimulationResult",
    type: "error"
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
        internalType: "uint32",
        name: "dstEid",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "msgType",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "extraGas",
        type: "uint256"
      }
    ],
    name: "SetPerColorExtraGas",
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
    inputs: [
      {
        components: [
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
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address"
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
          }
        ],
        internalType: "struct InboundPacket[]",
        name: "_packets",
        type: "tuple[]"
      }
    ],
    name: "_simulateLzReceive",
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
    name: "isMainChain",
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
        internalType: "uint32",
        name: "_eid",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "_peer",
        type: "bytes32"
      }
    ],
    name: "isPeer",
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
        components: [
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
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address"
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
          }
        ],
        internalType: "struct InboundPacket[]",
        name: "_packets",
        type: "tuple[]"
      }
    ],
    name: "lzReceiveAndRevert",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "mainChainEid",
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
    name: "oapp",
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
    inputs: [
      {
        internalType: "uint32",
        name: "dstEid",
        type: "uint32"
      },
      {
        internalType: "uint8",
        name: "msgType",
        type: "uint8"
      }
    ],
    name: "perColorExtraGasLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "extraGas",
        type: "uint256"
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
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "_deltas",
        type: "tuple[]"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    name: "quoteRemintFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lzTokenFee",
        type: "uint256"
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
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "quoteSendFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lzTokenFee",
        type: "uint256"
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
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "_deltas",
        type: "tuple[]"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    name: "quoteSyncDeltaFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lzTokenFee",
        type: "uint256"
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
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "_deltas",
        type: "tuple[]"
      },
      {
        internalType: "uint32",
        name: "_feeColor",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_feeAmount",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_feeTheta",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      }
    ],
    name: "remint",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
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
        components: [
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "theta",
            type: "uint64"
          }
        ],
        internalType: "struct IMessaging.SendParam",
        name: "_param",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "send",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
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
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "uint8",
        name: "_msgType",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "_extraGas",
        type: "uint256"
      }
    ],
    name: "setPerColorExtraGas",
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
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "_deltas",
        type: "tuple[]"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      }
    ],
    name: "syncDelta",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
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
    name: "usdv",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var MessagingV1__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi2, signerOrProvider);
  }
};
__publicField(MessagingV1__factory, "abi", _abi2);
function hexZeroPadTo32(addr) {
  return ethers.utils.hexZeroPad(addr, 32);
}
function addressToBytes32(address) {
  if (isSolanaAddress(address)) {
    throw new Error("Solana integration is not implemented");
  } else if (address.startsWith("0x") && address.length <= 66) {
    return ethers.utils.arrayify(hexZeroPadTo32(address));
  }
  throw new Error("Invalid address");
}
var solanaAddressRegex = /^([1-9A-HJ-NP-Za-km-z]{32,44})$/;
function isSolanaAddress(address) {
  return solanaAddressRegex.test(address);
}

// src/evm/MessagingApi.ts
var MsgType = /* @__PURE__ */ ((MsgType2) => {
  MsgType2[MsgType2["SEND"] = 1] = "SEND";
  MsgType2[MsgType2["SEND_AND_CALL"] = 2] = "SEND_AND_CALL";
  MsgType2[MsgType2["SYNC_DELTA"] = 3] = "SYNC_DELTA";
  MsgType2[MsgType2["REMINT"] = 4] = "REMINT";
  return MsgType2;
})(MsgType || {});
var MessagingApi = class {
  constructor(config, providerFactory) {
    this.config = config;
    this.providerFactory = providerFactory;
  }
  async minDstGasLookup(input) {
    const dstEid = this.mapDstEidId(input.dstChainKey);
    const messagingV1 = await this.getMessagingV1Contract(input.srcChainKey);
    const minDstGasLookup = await messagingV1.minDstGasLookup(dstEid, input.msgType);
    return minDstGasLookup.toNumber();
  }
  async getSendMessageFee(input) {
    const usdv = this.getUSDV(input.srcChainKey);
    const native = uiCore.getNativeCurrency(input.srcChainKey);
    if (input.srcChainKey === input.srcChainKey) {
      return {
        nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, 0),
        zroFee: uiCore.CurrencyAmount.fromRawAmount(native, 0)
      };
    }
    const contract = USDVSide__factory.connect(usdv.address, this.providerFactory(usdv.chainKey));
    const to = uiEvm.ONE_ADDRESS;
    const amountLD = 1;
    const minAmountLD = 1;
    const sendParamStruct = {
      to: this.mapDstAddress(to),
      amountLD,
      minAmountLD,
      dstEid: this.mapDstEidId(input.dstChainKey)
    };
    const options = this.serializeOptions(input.adapterParams);
    const composeMsg = ethers.utils.arrayify("0x");
    const [nativeFee, zroFee] = await contract.quoteSendFee(
      sendParamStruct,
      options,
      false,
      composeMsg
    );
    const fee = {
      nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromRawAmount(native, zroFee.toBigInt())
    };
    return fee;
  }
  async getMessagingV1Contract(chainKey) {
    const usdv = this.getUSDV(chainKey);
    const provider = this.providerFactory(chainKey);
    const address = await USDVSide__factory.connect(usdv.address, provider).getRole(
      3 /* MESSAGING */
    );
    const messagingV1 = MessagingV1__factory.connect(address, provider);
    return messagingV1;
  }
  getUSDV(chainKey) {
    const deployment = this.config.deployments[chainKey];
    if (deployment)
      return deployment.usdv;
    throw new Error(`No USDV for chainKey: ${chainKey}`);
  }
  serializeOptions(adapterParams) {
    if (adapterParams.version === 1) {
      return optionsType1(adapterParams.extraGas);
    } else if (adapterParams.version === 2) {
      if (!adapterParams.dstNativeAddress)
        throw new Error("No dstNativeAddress");
      if (!adapterParams.dstNativeAmount)
        throw new Error("No dstNativeAmount");
      return optionsType2(
        adapterParams.extraGas,
        adapterParams.dstNativeAmount.quotient,
        adapterParams.dstNativeAddress
      );
    }
    throw new Error(`Invalid options version ${adapterParams.version}`);
  }
  mapDstEidId(dstChainKey) {
    const deployment = this.config.deployments[dstChainKey];
    if (deployment)
      return deployment.eid;
    throw new Error(`No deployment for chainKey: ${dstChainKey}`);
  }
  mapDstAddress(dstAddress) {
    return ethers.utils.hexlify(addressToBytes32(ethers.utils.getAddress(dstAddress)));
  }
};
var _abi3 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lp",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_color",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_recolorHelper",
        type: "address"
      },
      {
        internalType: "address",
        name: "_usdv",
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
    inputs: [],
    name: "color",
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
    inputs: [],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_fromTokenAmount",
        type: "uint256"
      }
    ],
    name: "getUSDVOut",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
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
        name: "_fromToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_fromTokenAmount",
        type: "uint256"
      }
    ],
    name: "getUSDVOutVerbose",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lp",
    outputs: [
      {
        internalType: "contract IToUSDVLp",
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
    name: "recolorHelper",
    outputs: [
      {
        internalType: "contract IRecolorHelper",
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
        internalType: "uint32",
        name: "_color",
        type: "uint32"
      }
    ],
    name: "setColor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lp",
        type: "address"
      }
    ],
    name: "setLpAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_toleranceBps",
        type: "uint16"
      }
    ],
    name: "setToleranceBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_userRewardBps",
        type: "uint16"
      }
    ],
    name: "setUserRewardBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_fromToken",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "_fromTokenAmount",
            type: "uint256"
          },
          {
            internalType: "uint64",
            name: "_minUSDVOut",
            type: "uint64"
          }
        ],
        internalType: "struct SwapRecolor.SwapParam",
        name: "_swapParam",
        type: "tuple"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          }
        ],
        internalType: "struct IOFT.SendParam",
        name: "_param",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "_msgFee",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "swapRecolorSend",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_fromToken",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "_fromTokenAmount",
            type: "uint256"
          },
          {
            internalType: "uint64",
            name: "_minUSDVOut",
            type: "uint64"
          }
        ],
        internalType: "struct SwapRecolor.SwapParam",
        name: "_swapParam",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    name: "swapRecolorTransfer",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "toleranceBps",
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
    name: "usdv",
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
    name: "userRewardBps",
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
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawUSDV",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var BridgeRecolor__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi3);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi3, signerOrProvider);
  }
};
__publicField(BridgeRecolor__factory, "abi", _abi3);
var _abi4 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdv",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "HashExists",
    type: "error"
  },
  {
    inputs: [],
    name: "HashNotExists",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidMinter",
    type: "error"
  },
  {
    inputs: [],
    name: "MinterAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "color",
        type: "uint32"
      }
    ],
    name: "MinterNotRegistered",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "hash",
        type: "uint256"
      }
    ],
    name: "AddedMinterCodeHash",
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
        name: "minter",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "color",
        type: "uint32"
      }
    ],
    name: "RegisteredMinter",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "hash",
        type: "uint256"
      }
    ],
    name: "RemovedMinterCodeHash",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "toSTBTLp",
        type: "address"
      }
    ],
    name: "SetToSTBTLp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "color",
        type: "uint32"
      }
    ],
    name: "UnregisteredMinter",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hash",
        type: "uint256"
      }
    ],
    name: "addMinterCodeHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "color",
        type: "uint32"
      }
    ],
    name: "colorToMinter",
    outputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinterCodeHashes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_color",
        type: "uint32"
      }
    ],
    name: "getSupportedFromTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_fromTokenAmount",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "_mintColor",
        type: "uint32"
      }
    ],
    name: "getSwapToUSDVAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
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
        name: "_fromToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_fromTokenAmount",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "_mintColor",
        type: "uint32"
      }
    ],
    name: "getSwapToUSDVAmountOutVerbose",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "reward",
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
    name: "isRegistered",
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
        name: "minter",
        type: "address"
      }
    ],
    name: "minterToColor",
    outputs: [
      {
        internalType: "uint32",
        name: "color",
        type: "uint32"
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
        name: "_minter",
        type: "address"
      }
    ],
    name: "registerMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hash",
        type: "uint256"
      }
    ],
    name: "removeMinterCodeHash",
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
        internalType: "address",
        name: "_toSTBTLp",
        type: "address"
      }
    ],
    name: "setToSTBTLp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "fromToken",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "fromTokenAmount",
            type: "uint256"
          },
          {
            internalType: "uint64",
            name: "minUSDVOut",
            type: "uint64"
          }
        ],
        internalType: "struct IMinter.SwapParam",
        name: "_param",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_usdvReceiver",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_mintColor",
        type: "uint32"
      }
    ],
    name: "swapToUSDV",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "fromToken",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "fromTokenAmount",
            type: "uint256"
          },
          {
            internalType: "uint64",
            name: "minUSDVOut",
            type: "uint64"
          }
        ],
        internalType: "struct IMinter.SwapParam",
        name: "_param",
        type: "tuple"
      },
      {
        internalType: "bytes32",
        name: "_usdvReceiver",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "_msgFee",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_mintColor",
        type: "uint32"
      }
    ],
    name: "swapToUSDVAndSend",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "toSTBTLp",
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
        internalType: "address",
        name: "_minter",
        type: "address"
      }
    ],
    name: "unregisterMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "usdv",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var MinterProxy__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi4);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi4, signerOrProvider);
  }
};
__publicField(MinterProxy__factory, "abi", _abi4);
var _abi5 = [
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
        internalType: "uint256",
        name: "cap",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBps",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "rewardBps",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "AddToken",
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
        internalType: "uint256",
        name: "cap",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBps",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "rewardBps",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    name: "ConfigToken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "source",
        type: "address"
      }
    ],
    name: "DepositUSDV",
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
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "RemoveToken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "lp",
        type: "address"
      }
    ],
    name: "SetLp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "SetOperator",
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
        indexed: false,
        internalType: "bool",
        name: "flag",
        type: "bool"
      }
    ],
    name: "SetWhitelist",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromTokenAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdvOut",
        type: "uint256"
      }
    ],
    name: "SwapToUSDV",
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
        indexed: true,
        internalType: "address",
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
        name: "target",
        type: "address"
      }
    ],
    name: "WithdrawToken",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_cap",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_feeBps",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_rewardBps",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      }
    ],
    name: "addToken",
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
        internalType: "uint256",
        name: "_cap",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_feeBps",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_rewardBps",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool"
      }
    ],
    name: "configToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "depositUSDV",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getAllTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_fromTokenAmount",
        type: "uint256"
      }
    ],
    name: "getUSDVOut",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
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
        name: "_fromToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_fromTokenAmount",
        type: "uint256"
      }
    ],
    name: "getUSDVOutVerbose",
    outputs: [
      {
        internalType: "uint256",
        name: "requestedOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "rewardOut",
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
        name: "_usdv",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "_lp",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "lp",
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
    name: "operator",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "removeToken",
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
        internalType: "address",
        name: "_lp",
        type: "address"
      }
    ],
    name: "setLp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      }
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_p",
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
        name: "_user",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_flag",
        type: "bool"
      }
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_fromTokenAmount",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_minUSDVOut",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      }
    ],
    name: "swapToUSDV",
    outputs: [
      {
        internalType: "uint256",
        name: "usdvOut",
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
        name: "token",
        type: "address"
      }
    ],
    name: "tokenConfigs",
    outputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool"
      },
      {
        internalType: "uint16",
        name: "feeBps",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "rewardBps",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "div",
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
    name: "usdv",
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
        name: "caller",
        type: "address"
      }
    ],
    name: "whitelisted",
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
        name: "_token",
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
var SideChainLP__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi5);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi5, signerOrProvider);
  }
};
__publicField(SideChainLP__factory, "abi", _abi5);
var _abi6 = [
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
        internalType: "uint256",
        name: "_amountLDSend",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256"
      }
    ],
    name: "AmountSlippage",
    type: "error"
  },
  {
    inputs: [],
    name: "Blacklisted",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidArgument",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "color",
        type: "uint32"
      }
    ],
    name: "InvalidColor",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidUser",
    type: "error"
  },
  {
    inputs: [],
    name: "LDMinusSD",
    type: "error"
  },
  {
    inputs: [],
    name: "NotDeltaZero",
    type: "error"
  },
  {
    inputs: [],
    name: "NotImplemented",
    type: "error"
  },
  {
    inputs: [],
    name: "Overflow",
    type: "error"
  },
  {
    inputs: [],
    name: "Paused",
    type: "error"
  },
  {
    inputs: [],
    name: "Unauthorized",
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
    inputs: [],
    name: "EIP712DomainChanged",
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
        indexed: true,
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
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
        name: "_amountLD",
        type: "uint256"
      }
    ],
    name: "ReceiveOFT",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        indexed: false,
        internalType: "struct Delta[]",
        name: "deltas",
        type: "tuple[]"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "remintFee",
        type: "uint64"
      }
    ],
    name: "Reminted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_fromAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "SendOFT",
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
        indexed: false,
        internalType: "bool",
        name: "isBlacklisted",
        type: "bool"
      }
    ],
    name: "SetBlacklist",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "colorer",
        type: "address"
      }
    ],
    name: "SetColorer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "defaultColor",
        type: "uint32"
      }
    ],
    name: "SetDefaultColor",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_inspector",
        type: "address"
      }
    ],
    name: "SetInspector",
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
    name: "SetPause",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Role",
        name: "role",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "SetRole",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "guid",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        indexed: false,
        internalType: "struct Delta[]",
        name: "deltas",
        type: "tuple[]"
      }
    ],
    name: "Synced",
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
        name: "_user",
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
        name: "_user",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_isBlacklisted",
        type: "bool"
      }
    ],
    name: "blacklist",
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
        internalType: "uint64",
        name: "_amount",
        type: "uint64"
      },
      {
        internalType: "uint32[]",
        name: "_deficits",
        type: "uint32[]"
      }
    ],
    name: "burn",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_color",
        type: "uint32"
      }
    ],
    name: "colorStateOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "colored",
            type: "uint64"
          },
          {
            internalType: "int64",
            name: "delta",
            type: "int64"
          },
          {
            internalType: "int64",
            name: "lastDelta",
            type: "int64"
          },
          {
            internalType: "uint32",
            name: "lastBlockNumber",
            type: "uint32"
          },
          {
            internalType: "bool",
            name: "known",
            type: "bool"
          }
        ],
        internalType: "struct Colors.ColorState",
        name: "",
        type: "tuple"
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
    name: "colorers",
    outputs: [
      {
        internalType: "address",
        name: "colorer",
        type: "address"
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
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_startColor",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_endColor",
        type: "uint32"
      }
    ],
    name: "getDeltas",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "_colors",
        type: "uint32[]"
      }
    ],
    name: "getDeltas",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum Role",
        name: "_role",
        type: "uint8"
      }
    ],
    name: "getRole",
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
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_foundation",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "maxKnownColor",
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
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_amount",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "_color",
        type: "uint32"
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
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          }
        ],
        internalType: "struct IOFT.SendParam",
        name: "_param",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_useLZToken",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "quoteSendFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lzTokenFee",
        type: "uint256"
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
        internalType: "uint32",
        name: "_numDeficits",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_useLzToken",
        type: "bool"
      }
    ],
    name: "quoteSyncDeltaFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lzTokenFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_surplusColor",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_surplusAmount",
        type: "uint64"
      },
      {
        internalType: "uint32[]",
        name: "_deficits",
        type: "uint32[]"
      },
      {
        internalType: "uint64",
        name: "_feeCap",
        type: "uint64"
      }
    ],
    name: "remint",
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
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "_deltas",
        type: "tuple[]"
      },
      {
        internalType: "uint32",
        name: "_feeColor",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_feeAmount",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_feeTheta",
        type: "uint64"
      }
    ],
    name: "remintAck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          }
        ],
        internalType: "struct IOFT.SendParam",
        name: "_param",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "_msgFee",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "send",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_color",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_amount",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_theta",
        type: "uint64"
      }
    ],
    name: "sendAck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "address",
        name: "_colorer",
        type: "address"
      }
    ],
    name: "setColorer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_defaultColor",
        type: "uint32"
      }
    ],
    name: "setDefaultColor",
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
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum Role",
        name: "_role",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      }
    ],
    name: "setRole",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_theta",
        type: "uint64"
      },
      {
        internalType: "uint32[]",
        name: "_deficits",
        type: "uint32[]"
      },
      {
        internalType: "uint64",
        name: "_feeCap",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256"
          }
        ],
        internalType: "struct MessagingFee",
        name: "_msgFee",
        type: "tuple"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      }
    ],
    name: "syncDelta",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple"
          }
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "color",
            type: "uint32"
          },
          {
            internalType: "int64",
            name: "amount",
            type: "int64"
          }
        ],
        internalType: "struct Delta[]",
        name: "_deltas",
        type: "tuple[]"
      }
    ],
    name: "syncDeltaAck",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "user",
        type: "address"
      }
    ],
    name: "userStates",
    outputs: [
      {
        internalType: "uint32",
        name: "color",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "balance",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "blacklisted",
        type: "bool"
      },
      {
        internalType: "uint32",
        name: "defaultColor",
        type: "uint32"
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
var USDVMain__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi6);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi6, signerOrProvider);
  }
};
__publicField(USDVMain__factory, "abi", _abi6);

// src/evm/USDVBridgeBase.ts
var USDVBridgeBase = class {
  // usdv tokens
  constructor(config) {
    this.config = config;
    this.usdvTokens = Object.values(this.config.deployments).map((d) => d.usdv);
  }
  usdvTokens;
  async getOptions(input) {
    return { options: [{ mode: "taxi" }] };
  }
  getDeployment(chainKey) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment)
      return deployment;
    throw new Error(`No deployment for chainKey: ${chainKey}`);
  }
  tryGetDeployment(chainKey) {
    return this.config.deployments[chainKey];
  }
  chainKeyToEndpointId(chainKey) {
    const deployment = this.getDeployment(chainKey);
    return deployment.eid;
  }
};

// src/evm/BridgeRecolorBridgeApi__evm.ts
var BridgeRecolorBridgeApi__evm = class extends USDVBridgeBase {
  constructor(config, providerFactory, color, messaging = new MessagingApi(config, providerFactory)) {
    super(config);
    this.providerFactory = providerFactory;
    this.color = color;
    this.messaging = messaging;
    this.erc20 = new uiEvm.ERC20__api(providerFactory);
  }
  erc20;
  async transfer(input) {
    v1.validateInput(input);
    const { srcToken, dstToken } = input;
    const srcChainKey = srcToken.chainKey;
    uiCore.assert(this.isStable(srcToken));
    uiCore.assert(this.isUSDV(dstToken));
    const contract = this.getBridgeContract(srcChainKey);
    const swapParamStruct = {
      _fromToken: srcToken.address,
      _fromTokenAmount: input.srcAmount.quotient,
      _minUSDVOut: input.dstAmountMin.quotient
    };
    const sendParamsStruct = {
      // amountLD gets converted to USDV in the contract
      amountLD: input.srcAmount.quotient,
      minAmountLD: input.dstAmountMin.quotient,
      dstEid: this.messaging.mapDstEidId(input.dstChainKey),
      to: this.messaging.mapDstAddress(input.dstAddress)
    };
    const extraOptions = this.messaging.serializeOptions(input.adapterParams);
    const msgFee = {
      lzTokenFee: input.fee.zroFee.quotient,
      nativeFee: input.fee.nativeFee.quotient
    };
    const composeMsg = ethers.utils.arrayify("0x");
    const populatedTransaction = contract.populateTransaction.swapRecolorSend(
      swapParamStruct,
      this.color,
      // color doesn't matter it is hardcoded
      sendParamsStruct,
      extraOptions,
      msgFee,
      input.srcAddress,
      composeMsg,
      {
        value: input.fee.nativeFee.quotient
      }
    );
    return uiEvm.createTransaction(populatedTransaction, {
      provider: contract.provider
    });
  }
  async getMessageFee({ srcToken, dstToken, adapterParams }) {
    const usdv = this.getUSDVContract(srcToken.chainKey);
    const sendParamStruct = {
      amountLD: 1,
      // doesn't affect fee
      minAmountLD: 1,
      // doesn't affect fee
      to: this.messaging.mapDstAddress(uiEvm.ONE_ADDRESS),
      // doesn't affect fee
      dstEid: this.chainKeyToEndpointId(dstToken.chainKey)
    };
    const extraOptions = this.messaging.serializeOptions(adapterParams);
    const composeMsg = ethers.utils.arrayify("0x");
    const nativeCurrency = uiCore.getNativeCurrency(srcToken.chainKey);
    const feeBN = await usdv.quoteSendFee(sendParamStruct, extraOptions, false, composeMsg);
    const fee = {
      nativeFee: uiCore.CurrencyAmount.fromRawAmount(nativeCurrency, feeBN.nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromRawAmount(nativeCurrency, feeBN.lzTokenFee.toBigInt())
    };
    return fee;
  }
  async getExtraGas({ srcToken, dstToken }) {
    return this.messaging.minDstGasLookup({
      srcChainKey: srcToken.chainKey,
      dstChainKey: dstToken.chainKey,
      msgType: 1 /* SEND */
    });
  }
  /////////
  supportsClaim(currency) {
    return false;
  }
  supportsRegister(currency) {
    return false;
  }
  supportsTransfer(srcToken, dstToken) {
    const srcChainKey = srcToken.chainKey;
    const deployment = this.tryGetDeployment(srcChainKey);
    const srcBridgeRecolor = deployment?.bridgeRecolor;
    if (!srcBridgeRecolor)
      return false;
    if (srcToken.chainKey === dstToken.chainKey)
      return false;
    if (!this.isStable(srcToken))
      return false;
    if (!this.isUSDV(dstToken))
      return false;
    return true;
  }
  async getOutput({ srcAmount, dstToken }) {
    const srcToken = srcAmount.token;
    uiCore.assert(uiCore.isToken(srcToken), "Not a token");
    const srcChainKey = srcToken.chainKey;
    const bridge = this.getBridgeContract(srcChainKey);
    const quote = await bridge.getUSDVOutVerbose(srcToken.address, srcAmount.quotient);
    const output = uiCore.CurrencyAmount.fromRawAmount(dstToken, quote.usdvOut.toBigInt());
    const reward = uiCore.CurrencyAmount.fromRawAmount(dstToken, quote.reward.toBigInt());
    const fee = uiCore.CurrencyAmount.fromRawAmount(dstToken, quote.fee.toBigInt());
    return {
      dstAmount: output,
      fee: {
        reward,
        fee
      }
    };
  }
  async getDuration() {
    throw new Error("Method not implemented.");
  }
  isUSDV(currency) {
    return this.usdvTokens.some((usdv) => usdv.equals(currency));
  }
  isStable(currency) {
    return this.config.stables.some((stable) => stable.equals(currency));
  }
  async getLimit({ srcToken, dstToken }) {
    uiCore.assert(this.isStable(srcToken));
    uiCore.assert(this.isUSDV(dstToken));
    const srcChainKey = srcToken.chainKey;
    const srcUSDV = this.usdvTokens.find((t) => t.chainKey === srcChainKey);
    uiCore.assert(srcUSDV, "srcUSDV");
    const bridge = this.getBridgeContract(srcChainKey);
    const lpAddress = await bridge.lp();
    const lpContract = SideChainLP__factory.connect(lpAddress, this.providerFactory(srcChainKey));
    const [srcTokenConfig, bridgeRecolorUserRewardBps, bridgeRecolorUsdvBalance, lpUsdvBalance] = await Promise.all([
      lpContract.tokenConfigs(srcToken.address),
      bridge.userRewardBps(),
      this.erc20.forToken(srcUSDV).balanceOf(bridge.address),
      this.erc20.forToken(srcUSDV).balanceOf(lpAddress)
    ]);
    const maxSwapAmountA = bridgeRecolorUsdvBalance.divide(
      new uiCore.Fraction(
        bridgeRecolorUserRewardBps - srcTokenConfig.rewardBps + srcTokenConfig.feeBps,
        1e4
      )
    );
    const maxSwapAmountB = lpUsdvBalance.divide(
      new uiCore.Fraction(1e4 + srcTokenConfig.rewardBps - srcTokenConfig.feeBps, 1e4)
    );
    return uiCore.castCurrencyAmountUnsafe(min(maxSwapAmountA, maxSwapAmountB), srcToken);
  }
  getUnclaimed() {
    throw new Error("Method not implemented.");
  }
  getAllowance({ token, address }) {
    const bridge = this.getBridgeContract(token.chainKey);
    return this.erc20.forToken(token).allowance(address, bridge.address);
  }
  isRegistered() {
    throw new Error("Method not implemented.");
  }
  claim() {
    throw new Error("Method not implemented.");
  }
  register() {
    throw new Error("Method not implemented.");
  }
  approve({ amount }) {
    const bridge = this.getBridgeContract(amount.token.chainKey);
    return this.erc20.forToken(amount.token).approve(amount, bridge.address);
  }
  getBridgeContract(chainKey) {
    const deployment = this.getDeployment(chainKey);
    if (!deployment.bridgeRecolor)
      throw new Error(`No deployment for chainKey: ${chainKey}`);
    return BridgeRecolor__factory.connect(
      deployment.bridgeRecolor.address,
      this.providerFactory(chainKey)
    );
  }
  getUSDVContract(chainKey) {
    const deployment = this.getDeployment(chainKey);
    return USDVSide__factory.connect(deployment.usdv.address, this.providerFactory(chainKey));
  }
};
function min(a, b) {
  if (a.quotient < b.quotient)
    return a;
  return b;
}
var USDVBridgeApi__evm = class extends USDVBridgeBase {
  constructor(config, providerFactory, messaging = new MessagingApi(config, providerFactory)) {
    super(config);
    this.providerFactory = providerFactory;
    this.messaging = messaging;
    this.erc20 = new uiEvm.ERC20__api(providerFactory);
  }
  sharedDecimals = 6;
  erc20;
  supportsClaim(currency) {
    return this.usdvTokens.some((t) => t.equals(currency));
  }
  supportsRegister(currency) {
    return this.supportsClaim(currency);
  }
  supportsTransfer(srcToken, dstToken) {
    if (!uiCore.isEvmChainKey(srcToken.chainKey))
      return false;
    if (!this.usdvTokens.some((token) => token.equals(srcToken)))
      return false;
    if (!this.usdvTokens.some((token) => token.equals(dstToken)))
      return false;
    return srcToken.chainKey !== dstToken.chainKey;
  }
  async getDuration(input) {
    throw new Error("Method not implemented.");
  }
  async getLimit({ srcToken }) {
    return uiCore.CurrencyAmount.fromRawAmount(srcToken, uiCore.MaxUint256);
  }
  getUnclaimed({ token, address }) {
    throw new Error("Method not implemented.");
  }
  async getAllowance({ token, address }) {
    uiCore.assert(uiCore.isToken(token));
    return uiCore.CurrencyAmount.fromRawAmount(token, uiCore.MaxUint256);
  }
  async isRegistered() {
    return true;
  }
  claim() {
    throw new Error("Method not implemented.");
  }
  register() {
    throw new Error("Method not implemented.");
  }
  approve() {
    throw new Error("Method not implemented.");
  }
  async transfer(input) {
    v1.validateInput(input);
    const contract = this.getUSDVContract(input.srcChainKey);
    const sendParamStruct = {
      amountLD: input.srcAmount.quotient,
      minAmountLD: castCurrencyAmountSafe(input.dstAmountMin, input.srcToken).quotient,
      dstEid: this.chainKeyToEndpointId(input.dstChainKey),
      to: this.messaging.mapDstAddress(input.dstAddress)
    };
    const msgFee = {
      lzTokenFee: input.fee.zroFee.quotient,
      nativeFee: input.fee.nativeFee.quotient
    };
    const composeMsg = ethers.utils.arrayify("0x");
    const options = this.messaging.serializeOptions(input.adapterParams);
    const populatedTransaction = contract.populateTransaction.send(
      sendParamStruct,
      options,
      msgFee,
      input.srcAddress,
      composeMsg,
      {
        value: input.fee.nativeFee.quotient
      }
    );
    const tx = uiEvm.createTransaction(populatedTransaction, {
      provider: this.providerFactory(input.srcChainKey)
    });
    return tx;
  }
  async getMessageFee({ srcToken, dstToken, adapterParams }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const native = uiCore.getNativeCurrency(srcChainKey);
    const sendParamStruct = {
      to: this.messaging.mapDstAddress(uiEvm.ONE_ADDRESS),
      // doesn't affect fee
      amountLD: 1,
      // doesn't affect fee
      minAmountLD: 1,
      // doesn't affect fee
      dstEid: this.chainKeyToEndpointId(dstChainKey)
    };
    const contract = this.getUSDVContract(srcChainKey);
    const options = this.messaging.serializeOptions(adapterParams);
    const composeMsg = ethers.utils.arrayify("0x");
    const [nativeFee, zroFee] = await contract.quoteSendFee(
      sendParamStruct,
      options,
      false,
      composeMsg
    );
    const fee = {
      nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromRawAmount(native, zroFee.toBigInt())
    };
    return fee;
  }
  async getExtraGas({ srcToken, dstToken }) {
    return this.messaging.minDstGasLookup({
      srcChainKey: srcToken.chainKey,
      dstChainKey: dstToken.chainKey,
      msgType: 1 /* SEND */
    });
  }
  async getOutput({ srcAmount, dstToken }) {
    const swapAmount = this.removeDust(srcAmount);
    const zero = swapAmount.multiply(0);
    const amount = castCurrencyAmountSafe(swapAmount, dstToken);
    return {
      dstAmount: amount,
      fee: {
        fee: zero,
        reward: zero
      }
    };
  }
  getUSDVContract(chainKey) {
    const deployment = this.getDeployment(chainKey);
    const provider = this.providerFactory(chainKey);
    if (deployment.vault?.address) {
      return USDVMain__factory.connect(deployment.usdv.address, provider);
    }
    return USDVSide__factory.connect(deployment.usdv.address, provider);
  }
  removeDust(amount) {
    return uiCore.removeDust(amount, this.sharedDecimals);
  }
};
function castCurrencyAmountSafe(amount, dstToken) {
  uiCore.assert(amount.token.decimals === dstToken.decimals, "Cannot cast amount to different decimals");
  return uiCore.CurrencyAmount.fromRawAmount(dstToken, amount.quotient);
}
var MinterProxyBridgeApi__evm = class extends USDVBridgeBase {
  constructor(config, providerFactory, color, messaging = new MessagingApi(config, providerFactory)) {
    super(config);
    this.providerFactory = providerFactory;
    this.color = color;
    this.messaging = messaging;
    let minterProxy;
    let minterProxyChainKey;
    for (const chainKey in config.deployments) {
      const deployment = config.deployments[chainKey];
      if (deployment.minterProxy) {
        if (minterProxy)
          throw new Error("Only one minter proxy is supported");
        minterProxy = MinterProxy__factory.connect(
          deployment.minterProxy.address,
          this.providerFactory(chainKey)
        );
        minterProxyChainKey = chainKey;
      }
    }
    if (!minterProxy || !minterProxyChainKey)
      throw new Error("No minter proxy found");
    this.minterProxy = minterProxy;
    this.minterProxyChainKey = minterProxyChainKey;
    this.erc20 = new uiEvm.ERC20__api(providerFactory);
  }
  minterProxyChainKey;
  minterProxy;
  erc20;
  supportsClaim(currency) {
    return false;
  }
  supportsRegister(currency) {
    return false;
  }
  async getDuration({ srcToken, dstToken }) {
    throw new Error("Method not implemented.");
  }
  getUnclaimed() {
    throw new Error("Method not implemented.");
  }
  isRegistered() {
    throw new Error("Method not implemented.");
  }
  claim() {
    throw new Error("Method not implemented.");
  }
  register() {
    throw new Error("Method not implemented.");
  }
  getExtraGas({ srcToken, dstToken }) {
    return this.messaging.minDstGasLookup({
      srcChainKey: srcToken.chainKey,
      dstChainKey: dstToken.chainKey,
      msgType: 1 /* SEND */
    });
  }
  async getLimit({ srcToken }) {
    return uiCore.CurrencyAmount.fromRawAmount(srcToken, uiCore.MaxUint256);
  }
  async getMessageFee({ srcToken, dstToken, adapterParams }) {
    return this.messaging.getSendMessageFee({
      srcChainKey: srcToken.chainKey,
      dstChainKey: dstToken.chainKey,
      adapterParams
    });
  }
  async transfer(input) {
    v1.validateInput(input);
    const { srcToken, dstToken, srcChainKey, dstChainKey } = input;
    uiCore.assert(uiCore.isToken(srcToken), "token");
    uiCore.assert(
      this.usdvTokens.some((usdv) => usdv.equals(dstToken)),
      "Not USDV"
    );
    uiCore.assert(input.srcAmount.token.equals(srcToken));
    uiCore.assert(input.dstAmountMin.token.equals(dstToken));
    const swapParamStruct = {
      fromToken: srcToken.address,
      fromTokenAmount: input.srcAmount.quotient,
      minUSDVOut: input.dstAmountMin.quotient
    };
    if (srcChainKey === dstChainKey) {
      const populatedTransaction = this.minterProxy.populateTransaction.swapToUSDV(
        swapParamStruct,
        input.dstAddress,
        this.color
      );
      return uiEvm.createTransaction(populatedTransaction, {
        provider: this.minterProxy.provider
      });
    } else {
      const populatedTransaction = this.minterProxy.populateTransaction.swapToUSDVAndSend(
        swapParamStruct,
        this.messaging.mapDstAddress(input.dstAddress),
        this.messaging.mapDstEidId(dstToken.chainKey),
        this.messaging.serializeOptions(input.adapterParams),
        {
          lzTokenFee: input.fee.zroFee.quotient,
          nativeFee: input.fee.nativeFee.quotient
        },
        input.srcAddress,
        this.color,
        { value: input.fee.nativeFee.quotient }
      );
      return uiEvm.createTransaction(populatedTransaction, {
        provider: this.minterProxy.provider
      });
    }
  }
  async getAllowance({ token, address: user }) {
    if (!uiCore.isToken(token))
      return uiCore.CurrencyAmount.fromRawAmount(token, uiCore.MaxUint256);
    return this.erc20.forToken(token).allowance(user, this.minterProxy.address);
  }
  approve({ amount }) {
    const srcToken = amount.token;
    uiCore.assert(uiCore.isToken(srcToken), "token");
    return this.erc20.forToken(srcToken).approve(amount, this.minterProxy.address);
  }
  async getOutput({ srcAmount, dstToken }) {
    const srcToken = srcAmount.token;
    uiCore.assert(uiCore.isToken(srcToken), "srcToken");
    uiCore.assert(uiCore.isToken(dstToken), "dstToken");
    const quote = await this.minterProxy.getSwapToUSDVAmountOutVerbose(
      srcToken.address,
      srcAmount.quotient,
      this.color
    );
    const amount = uiCore.CurrencyAmount.fromRawAmount(dstToken, quote.usdvOut.toBigInt());
    const reward = uiCore.CurrencyAmount.fromRawAmount(dstToken, quote.reward.toBigInt());
    const fee = uiCore.CurrencyAmount.fromRawAmount(dstToken, quote.fee.toBigInt());
    return {
      dstAmount: amount,
      fee: {
        fee,
        reward
      }
    };
  }
  get srcAssets() {
    const srcAssets = this.config.stables.filter(
      (stable) => stable.chainKey === this.minterProxyChainKey
    );
    return srcAssets;
  }
  get dstAssets() {
    return this.usdvTokens;
  }
  supportsTransfer(srcToken, dstToken) {
    if (!this.srcAssets.some((i) => i.equals(srcToken)))
      return false;
    if (!this.dstAssets.some((i) => i.equals(dstToken)))
      return false;
    return srcToken.chainKey !== dstToken.chainKey;
  }
};
var contractSchema = z__default.default.object({
  address: z__default.default.string()
});
var serializedUSDVConfigSchema = z__default.default.object({
  deployments: z__default.default.record(
    z__default.default.object({
      eid: z__default.default.number(),
      usdv: contractSchema,
      vault: contractSchema.optional(),
      minterProxy: contractSchema.optional(),
      stbt: contractSchema.optional(),
      sideChainSwapRecolor: contractSchema.array().optional().default([]),
      bridgeRecolor: contractSchema.optional()
    })
  ),
  stables: uiCore.tokenSchema.array().default([])
}).transform((input) => {
  const config = {
    deployments: {},
    stables: input.stables
  };
  for (const chainKey in input.deployments) {
    const addChainKey = (a) => a && { address: a.address, chainKey };
    const deployment = input.deployments[chainKey];
    config.deployments[chainKey] = {
      eid: deployment.eid,
      usdv: uiCore.Token.from({
        address: deployment.usdv.address,
        chainKey,
        decimals: 6,
        symbol: "USDV"
      }),
      vault: addChainKey(deployment.vault),
      minterProxy: addChainKey(deployment.minterProxy),
      stbt: addChainKey(deployment.stbt),
      bridgeRecolor: addChainKey(deployment.bridgeRecolor),
      sideChainSwapRecolor: deployment.sideChainSwapRecolor.map(addChainKey).filter(nonNullable)
    };
  }
  return config;
});
function nonNullable(x) {
  return !!x;
}
function createUSDVConfig(input) {
  const parsed = serializedUSDVConfigSchema.parse(input);
  return parsed;
}

// src/config/testnet.ts
var usdvTestnetConfig = createUSDVConfig({
  deployments: {
    goerli: {
      eid: 10101,
      vault: {
        address: "0x1239bD980fAa9CF687458A630514301c36e27E36"
      },
      usdv: {
        address: "0x0516ABcF93c00aAf9120Cf5d18535506d54BCcbA"
      },
      minterProxy: {
        address: "0xEfBCdE3Db0C63B06e349E9069d4761BDE45120D1"
      },
      stbt: {
        address: "0x33683A382495De6763FCD7505d0E07d7d2A879ca"
      }
    },
    "bsc-testnet": {
      eid: 10102,
      usdv: {
        address: "0xf10be20E035c00e9f9448d1Edb7770E3e1187965"
      },
      bridgeRecolor: {
        address: "0xdD440557cE9ad70C14495755F3E97dDE7096C796"
      }
    },
    fuji: {
      eid: 10106,
      usdv: {
        address: "0xf10be20E035c00e9f9448d1Edb7770E3e1187965"
      },
      bridgeRecolor: {
        address: "0x34Cf53353BA3d24ADBc17083ccC1CB6B5bFaa2D7"
      }
    },
    "arbitrum-goerli": {
      eid: 10143,
      usdv: {
        address: "0xf10be20E035c00e9f9448d1Edb7770E3e1187965"
      },
      bridgeRecolor: {
        address: "0xf630640Cfdb98Bb10C1a0b77Fa5Ec09c5800697C"
      }
    },
    "optimism-goerli": {
      eid: 10132,
      usdv: {
        address: "0xf10be20E035c00e9f9448d1Edb7770E3e1187965"
      },
      bridgeRecolor: {
        address: "0x59d5B1697B7883F4F4acC0c5F41AD4E15636d09E"
      }
    },
    mumbai: {
      eid: 10109,
      usdv: {
        address: "0xf10be20E035c00e9f9448d1Edb7770E3e1187965"
      }
    }
  },
  stables: [
    // tokens exported from testnet stargate
    {
      chainKey: "bsc-testnet",
      decimals: 18,
      symbol: "USDT",
      name: "USDT",
      address: "0xF49E250aEB5abDf660d643583AdFd0be41464EfD"
    },
    {
      chainKey: "bsc-testnet",
      decimals: 18,
      symbol: "BUSD",
      name: "BUSD",
      address: "0x1010Bb1b9Dff29e6233E7947e045e0ba58f6E92e"
    },
    {
      chainKey: "fuji",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0x4A0D1092E9df255cf95D72834Ea9255132782318"
    },
    {
      chainKey: "fuji",
      decimals: 6,
      symbol: "USDT",
      name: "USDT",
      address: "0x134Dc38AE8C853D1aa2103d5047591acDAA16682"
    },
    {
      chainKey: "mumbai",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7"
    },
    {
      chainKey: "mumbai",
      decimals: 6,
      symbol: "USDT",
      name: "USDT",
      address: "0x6Fc340be8e378c2fF56476409eF48dA9a3B781a0"
    },
    {
      chainKey: "goerli",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0xDf0360Ad8C5ccf25095Aa97ee5F2785c8d848620"
    },
    {
      chainKey: "goerli",
      decimals: 6,
      symbol: "USDT",
      name: "USDT",
      address: "0x5BCc22abEC37337630C0E0dd41D64fd86CaeE951"
    },
    {
      chainKey: "optimism-goerli",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0x0CEDBAF2D0bFF895C861c5422544090EEdC653Bf"
    },
    {
      chainKey: "arbitrum-goerli",
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      address: "0x6aAd876244E7A1Ad44Ec4824Ce813729E5B6C291"
    },
    {
      chainKey: "arbitrum-goerli",
      decimals: 6,
      symbol: "USDT",
      name: "USDT",
      address: "0x533046F316590C19d99c74eE661c6d541b64471C"
    }
  ]
});

// src/config/mainnet.ts
var usdvMainnetConfig = createUSDVConfig({
  deployments: {
    ethereum: {
      eid: 101,
      vault: {
        address: "0x2A30E3C5c9DaF417663Dd3903144B394a82C999b"
      },
      usdv: {
        address: "0x0E573Ce2736Dd9637A0b21058352e1667925C7a8"
      },
      stbt: {
        address: "0x530824DA86689C9C17CdC2871Ff29B058345b44a"
      },
      minterProxy: {
        address: "0x3c6CE18aFDE845635A32a69D0a7721b0Db84118e"
      }
    },
    avalanche: {
      eid: 106,
      usdv: {
        address: "0x323665443CEf804A3b5206103304BD4872EA4253"
      },
      bridgeRecolor: {
        address: "0x292dD933180412923ee47fA73bBF407B6d776B4C"
      }
    },
    arbitrum: {
      eid: 110,
      usdv: {
        address: "0x323665443CEf804A3b5206103304BD4872EA4253"
      },
      bridgeRecolor: {
        address: "0x5CC0189652Ee881526eD3B8053B21c44e99010B9"
      }
    },
    bsc: {
      eid: 102,
      usdv: {
        address: "0x323665443CEf804A3b5206103304BD4872EA4253"
      },
      bridgeRecolor: {
        address: "0x5B1d0467BED2e8Bd67c16cE8bCB22a195ae76870"
      }
    },
    optimism: {
      eid: 111,
      usdv: {
        address: "0x323665443CEf804A3b5206103304BD4872EA4253"
      },
      bridgeRecolor: {
        address: "0x31691Fd2Cf50c777943b213836C342327f0DAB9b"
      }
    }
  },
  stables: [
    // tokens exported from mainnet stargate
    {
      chainKey: "bsc",
      address: "0x55d398326f99059fF775485246999027B3197955",
      symbol: "USDT",
      decimals: 18,
      name: "Tether USD"
    },
    {
      chainKey: "bsc",
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      symbol: "BUSD",
      decimals: 18,
      name: "BUSD Token"
    },
    {
      chainKey: "avalanche",
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      symbol: "USDC",
      decimals: 6,
      name: "USD Coin"
    },
    {
      chainKey: "avalanche",
      address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
      symbol: "USDt",
      decimals: 6,
      name: "TetherToken"
    },
    // No polygon
    // {
    //   chainKey: chainKey.MUMBAI,
    //   decimals: 6,
    //   symbol: 'USDC',
    //   name: 'USDC',
    //   address: '0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7',
    // },
    // {
    //   chainKey: chainKey.MUMBAI,
    //   decimals: 6,
    //   symbol: 'USDT',
    //   name: 'USDT',
    //   address: '0x6Fc340be8e378c2fF56476409eF48dA9a3B781a0',
    // },
    {
      chainKey: "ethereum",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      symbol: "USDC",
      decimals: 6,
      name: "USD Coin"
    },
    {
      chainKey: "ethereum",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      symbol: "USDT",
      decimals: 6,
      name: "Tether USD"
    },
    {
      chainKey: "optimism",
      address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      symbol: "USDC",
      decimals: 6,
      name: "USD Coin"
    },
    {
      chainKey: "arbitrum",
      address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      symbol: "USDC",
      decimals: 6,
      name: "USD Coin (Arb1)"
    },
    {
      chainKey: "arbitrum",
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      symbol: "USDT",
      decimals: 6,
      name: "Tether USD"
    }
  ]
});

exports.BridgeRecolorBridgeApi__evm = BridgeRecolorBridgeApi__evm;
exports.MessagingApi = MessagingApi;
exports.MinterProxyBridgeApi__evm = MinterProxyBridgeApi__evm;
exports.MsgType = MsgType;
exports.USDVBridgeApi__evm = USDVBridgeApi__evm;
exports.createUSDVConfig = createUSDVConfig;
exports.serializedUSDVConfigSchema = serializedUSDVConfigSchema;
exports.usdvMainnetConfig = usdvMainnetConfig;
exports.usdvTestnetConfig = usdvTestnetConfig;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map