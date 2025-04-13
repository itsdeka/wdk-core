'use strict';

var chunkLVT53LVX_cjs = require('./chunk-LVT53LVX.cjs');
var chunkQZRBCK35_cjs = require('./chunk-QZRBCK35.cjs');
var chunkCUSC3AWA_cjs = require('./chunk-CUSC3AWA.cjs');
var chunkAIJNXPS2_cjs = require('./chunk-AIJNXPS2.cjs');
require('./chunk-FI6Q4OWN.cjs');
var uiCore = require('@layerzerolabs/ui-core');
var uiEvm = require('@layerzerolabs/ui-evm');

function convertFromV1(oldOftBridgeConfig, endpointVersion) {
  const oftBridgeConfig = {
    sharedDecimals: oldOftBridgeConfig.sharedDecimals,
    version: oldOftBridgeConfig.version,
    fee: oldOftBridgeConfig.fee ?? false,
    deployments: {}
  };
  const chainIds = /* @__PURE__ */ new Set();
  oldOftBridgeConfig.tokens.forEach((token) => {
    chainIds.add(token.chainId);
  });
  oldOftBridgeConfig.proxy?.forEach((proxy) => {
    chainIds.add(proxy.chainId);
  });
  oldOftBridgeConfig.native?.forEach((native) => {
    chainIds.add(native.chainId);
  });
  for (const chainId of chainIds) {
    const chainKey = uiCore.endpointIdToChainKey(chainId);
    const stage = uiCore.endpointIdToStage(chainId);
    const eid = uiCore.chainKeyToEndpointId(chainKey, endpointVersion, stage);
    const native = oldOftBridgeConfig.native?.find((native2) => native2.chainId === chainId);
    const token = oldOftBridgeConfig.tokens.find((token2) => token2.chainId === chainId) ?? (native ? uiCore.getNativeCurrency(chainKey) : void 0);
    const proxy = oldOftBridgeConfig.proxy?.find((proxy2) => proxy2.chainId === chainId);
    uiCore.assert(token, `Token for ${chainKey} not found`);
    const deployment = {
      eid,
      token: {
        chainKey,
        address: token.address,
        decimals: token?.decimals,
        name: token?.name,
        symbol: token?.symbol
      },
      oftNative: native ? { address: native.address } : void 0,
      oftProxy: proxy ? { address: proxy.address } : void 0
    };
    oftBridgeConfig.deployments[chainKey] = deployment;
  }
  return oftBridgeConfig;
}
var DEFAULT_FEE_LIMIT = 1e8;
var VIEW_CALL_OPTIONS = {
  _isConstant: true,
  callValue: 0,
  feeLimit: DEFAULT_FEE_LIMIT,
  from: uiEvm.AddressZero,
  owner_address: uiEvm.AddressZero
};
var SEND_CALL_OPTIONS = {
  _isConstant: false,
  callValue: 0,
  feeLimit: DEFAULT_FEE_LIMIT,
  from: uiEvm.AddressZero,
  owner_address: uiEvm.AddressZero
};
var TRON_OFT_ABI = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_arbitrumEid",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_celoEid",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_ethEid",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_tonEid",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_tronEid",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_delegate",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "ComposeNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32"
      },
      {
        internalType: "uint256",
        name: "credits",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountWithdraw",
        type: "uint256"
      }
    ],
    name: "InsufficientCredits",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientFeeBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidDelegate",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidEid",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidEndpointCall",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "feeBps",
        type: "uint16"
      }
    ],
    name: "InvalidFeeBps",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidLocalDecimals",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "msgType",
        type: "uint16"
      }
    ],
    name: "InvalidMsgType",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "options",
        type: "bytes"
      }
    ],
    name: "InvalidOptions",
    type: "error"
  },
  {
    inputs: [],
    name: "LzTokenUnavailable",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32"
      }
    ],
    name: "NoPeer",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "msgValue",
        type: "uint256"
      }
    ],
    name: "NotEnoughNative",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "OnlyEndpoint",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlyLpAdminOrOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "sender",
        type: "bytes32"
      }
    ],
    name: "OnlyPeer",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlyPlanner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minAmountLD",
        type: "uint256"
      }
    ],
    name: "SlippageExceeded",
    type: "error"
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
        indexed: false,
        internalType: "uint32",
        name: "srcEid",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes"
      }
    ],
    name: "CreditsReceived",
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
        internalType: "uint64",
        name: "creditsArbitrum",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "creditsCelo",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "creditsEth",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "creditsTon",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "creditsTron",
        type: "uint64"
      }
    ],
    name: "CreditsSent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32"
          },
          {
            internalType: "uint16",
            name: "msgType",
            type: "uint16"
          },
          {
            internalType: "bytes",
            name: "options",
            type: "bytes"
          }
        ],
        indexed: false,
        internalType: "struct EnforcedOptionParam[]",
        name: "_enforcedOptions",
        type: "tuple[]"
      }
    ],
    name: "EnforcedOptionSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBps",
        type: "uint16"
      }
    ],
    name: "FeeBpsSet",
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
        name: "amount",
        type: "uint256"
      }
    ],
    name: "FeesWithdrawn",
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
      }
    ],
    name: "LocalDeposit",
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
        name: "amount",
        type: "uint256"
      }
    ],
    name: "LocalWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "lpAdmin",
        type: "address"
      }
    ],
    name: "LpAdminSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "guid",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "srcEid",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "toAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountReceivedLD",
        type: "uint256"
      }
    ],
    name: "OFTReceived",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "guid",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dstEid",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSentLD",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountReceivedLD",
        type: "uint256"
      }
    ],
    name: "OFTSent",
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
        internalType: "uint32",
        name: "eid",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "peer",
        type: "bytes32"
      }
    ],
    name: "PeerSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "planner",
        type: "address"
      }
    ],
    name: "PlannerSet",
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
        indexed: false,
        internalType: "uint32",
        name: "srcEid",
        type: "uint32"
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
    name: "RemoteWithdrawReceived",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "RemoteWithdrawn",
    type: "event"
  },
  {
    inputs: [],
    name: "ARBITRUM_EID",
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
    name: "BPS_DENOMINATOR",
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
    name: "CELO_EID",
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
    name: "ETH_EID",
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
    name: "LOCAL_EID",
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
    name: "SEND_CREDITS",
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
    name: "SEND_OFT",
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
    name: "TON_EID",
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
    name: "TRON_EID",
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
    name: "WITHDRAW_REMOTE",
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
      }
    ],
    name: "allowInitializePath",
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
    name: "approvalRequired",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
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
        internalType: "uint16",
        name: "_msgType",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      }
    ],
    name: "combineOptions",
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
        internalType: "uint32",
        name: "eid",
        type: "uint32"
      }
    ],
    name: "credits",
    outputs: [
      {
        internalType: "uint256",
        name: "credits",
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
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "depositLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "endpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpointV2",
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
        name: "eid",
        type: "uint32"
      },
      {
        internalType: "uint16",
        name: "msgType",
        type: "uint16"
      }
    ],
    name: "enforcedOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "enforcedOption",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feeBalance",
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
    name: "feeBps",
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
        name: "",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      }
    ],
    name: "isComposeMsgSender",
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
    name: "lpAdmin",
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
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes"
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes"
      }
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "nextNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "oAppVersion",
    outputs: [
      {
        internalType: "uint64",
        name: "senderVersion",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "receiverVersion",
        type: "uint64"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "oftVersion",
    outputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      },
      {
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    stateMutability: "pure",
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
        name: "eid",
        type: "uint32"
      }
    ],
    name: "peers",
    outputs: [
      {
        internalType: "bytes32",
        name: "peer",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "planner",
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
            name: "dstEid",
            type: "uint32"
          },
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
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes"
          }
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple"
      }
    ],
    name: "quoteOFT",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxAmountLD",
            type: "uint256"
          }
        ],
        internalType: "struct OFTLimit",
        name: "oftLimit",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "int256",
            name: "feeAmountLD",
            type: "int256"
          },
          {
            internalType: "string",
            name: "description",
            type: "string"
          }
        ],
        internalType: "struct OFTFeeDetail[]",
        name: "oftFeeDetails",
        type: "tuple[]"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountSentLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountReceivedLD",
            type: "uint256"
          }
        ],
        internalType: "struct OFTReceipt",
        name: "oftReceipt",
        type: "tuple"
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
            name: "dstEid",
            type: "uint32"
          },
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
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes"
          }
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple"
      },
      {
        internalType: "bool",
        name: "_payInLzToken",
        type: "bool"
      }
    ],
    name: "quoteSend",
    outputs: [
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
        name: "msgFee",
        type: "tuple"
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
        internalType: "uint64",
        name: "_creditsArbitrum",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsCelo",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsEth",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsTon",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsTron",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_payInLzToken",
        type: "bool"
      }
    ],
    name: "quoteSendCredits",
    outputs: [
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
        name: "msgFee",
        type: "tuple"
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
            name: "dstEid",
            type: "uint32"
          },
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
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes"
          }
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple"
      },
      {
        internalType: "bool",
        name: "_payInLzToken",
        type: "bool"
      }
    ],
    name: "quoteWithdrawRemote",
    outputs: [
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
        name: "msgFee",
        type: "tuple"
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
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes"
          }
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple"
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
        name: "_fee",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address"
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
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountSentLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountReceivedLD",
            type: "uint256"
          }
        ],
        internalType: "struct OFTReceipt",
        name: "oftReceipt",
        type: "tuple"
      }
    ],
    stateMutability: "payable",
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
        internalType: "uint64",
        name: "_creditsArbitrum",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsCelo",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsEth",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsTon",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsTron",
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
        name: "_fee",
        type: "tuple"
      }
    ],
    name: "sendCredits",
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
        name: "_delegate",
        type: "address"
      }
    ],
    name: "setDelegate",
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
            name: "eid",
            type: "uint32"
          },
          {
            internalType: "uint16",
            name: "msgType",
            type: "uint16"
          },
          {
            internalType: "bytes",
            name: "options",
            type: "bytes"
          }
        ],
        internalType: "struct EnforcedOptionParam[]",
        name: "_enforcedOptions",
        type: "tuple[]"
      }
    ],
    name: "setEnforcedOptions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_feeBps",
        type: "uint16"
      }
    ],
    name: "setFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAdmin",
        type: "address"
      }
    ],
    name: "setLpAdmin",
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
        internalType: "bytes32",
        name: "_peer",
        type: "bytes32"
      }
    ],
    name: "setPeer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_planner",
        type: "address"
      }
    ],
    name: "setPlanner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "sharedDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "tvl",
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
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawFees",
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
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawLocal",
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
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes"
          }
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple"
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
        name: "_fee",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address"
      }
    ],
    name: "withdrawRemote",
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
  }
];
var TRC20_ABI = [
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
  }
];

// src/tron/OftBridgeV3__tron.ts
var OftBridgeV3__tron = class extends chunkQZRBCK35_cjs.OftBridgeBase {
  constructor(getTronWeb, config) {
    super(null, config);
    this.getTronWeb = getTronWeb;
    this.config = config;
  }
  validateConfig(config) {
    uiCore.assert(config.version === 3, "Invalid config.version: is not 3");
  }
  supportsRegister(token) {
    const { chainKey } = token;
    if (!uiCore.isTronChainKey(chainKey))
      return false;
    return Boolean(this.tryGetDeployment(token.chainKey)?.token.equals(token));
  }
  supportsTransfer(srcToken, dstToken) {
    if (!uiCore.isTronChainKey(srcToken.chainKey))
      return false;
    const srcDstChains = this.tryGetDeployment(srcToken.chainKey)?.destinationChains;
    if (srcDstChains) {
      if (!srcDstChains.includes(dstToken.chainKey)) {
        return false;
      }
    }
    return Boolean(
      this.tryGetDeployment(srcToken.chainKey)?.token.equals(srcToken) && this.tryGetDeployment(dstToken.chainKey)?.token.equals(dstToken)
    );
  }
  async transfer(input) {
    this.validateInput(input);
    const { srcChainKey, srcAddress } = input;
    const contract = await this.getContract(srcChainKey);
    const value = input.fee.nativeFee.toBigInt();
    const native = uiCore.getNativeCurrency(srcChainKey);
    const sendParams = await this.buildSendParams(input);
    const fee = {
      nativeFee: input.fee.nativeFee.toBigInt(),
      lzTokenFee: input.fee.zroFee.toBigInt()
    };
    const params = {
      _sendParam: {
        dstEid: sendParams.dstEid,
        to: sendParams.to,
        amountLD: sendParams.amountLD.toString(),
        minAmountLD: sendParams.minAmountLD.toString(),
        extraOptions: sendParams.extraOptions,
        composeMsg: "0x",
        oftCmd: "0x"
      }
    };
    const contractCall = contract.send(params, fee, srcAddress).send({
      callValue: value,
      feeLimit: DEFAULT_FEE_LIMIT,
      from: srcAddress,
      owner_address: srcAddress,
      shouldPollResponse: false
    });
    return {
      signAndSubmitTransaction: async () => {
        try {
          const result = await contractCall;
          if (!result) {
            throw new Error("No transaction response received");
          }
          if (typeof result === "object" && "txID" in result) {
            const txHash = "0x" + result.txID;
            return {
              txHash,
              wait: async () => ({ txHash })
            };
          }
          if (typeof result === "string") {
            return {
              txHash: "0x" + result,
              wait: async () => ({ txHash: result })
            };
          }
          throw new Error("Invalid transaction response format");
        } catch (error) {
          throw error;
        }
      },
      estimateGas: async () => BigInt(1e6),
      estimateNative: async () => uiCore.CurrencyAmount.fromRawAmount(native, value),
      unwrap: () => contractCall
    };
  }
  async getMessageFee(input) {
    const dstAddress = input.dstAddress ?? uiEvm.AddressOne;
    const srcAmount = input.srcAmount ?? uiCore.parseCurrencyAmount(input.srcToken, "1");
    const dstAmountMin = input.dstAmountMin ?? uiCore.CurrencyAmount.fromBigInt(input.dstToken, BigInt(0));
    const srcChainKey = input.srcToken.chainKey;
    const useZro = false;
    const contract = await this.getContract(srcChainKey);
    const params = await this.buildSendParams({
      adapterParams: input.adapterParams,
      dstToken: input.dstToken,
      srcAmount,
      dstAmountMin,
      dstAddress
    });
    try {
      const response = await contract.quoteSend(
        {
          _sendParam: {
            dstEid: params.dstEid,
            to: params.to,
            amountLD: params.amountLD.toString(),
            minAmountLD: params.minAmountLD.toString(),
            extraOptions: params.extraOptions,
            composeMsg: "0x",
            oftCmd: "0x"
          }
        },
        useZro
      ).call({
        _isConstant: true,
        callValue: 0,
        feeLimit: 1e6,
        from: uiEvm.AddressZero,
        owner_address: uiEvm.AddressZero
      });
      const fee = uiCore.MessageFee.from(srcChainKey, {
        nativeFee: BigInt(response.nativeFee.toString()),
        zroFee: BigInt(response.lzTokenFee.toString())
      });
      return fee;
    } catch (error) {
      console.error("Error getting message fee:", error);
      const native = uiCore.getNativeCurrency(srcChainKey);
      return {
        nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, BigInt(5e6)),
        // 5 TRX
        zroFee: uiCore.CurrencyAmount.fromRawAmount(native, 0n)
      };
    }
  }
  // We do not need to get the enforced options from the contract, they are already applied.
  async getExtraGas(input) {
    return 0;
  }
  async getOutput(input) {
    const { srcAmount, dstToken } = input;
    const contract = await this.getContract(srcAmount.token.chainKey);
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);
    const toAddress = chunkCUSC3AWA_cjs.addressToBytes32ForChain(uiEvm.AddressZero, dstToken.chainKey);
    const amountLD = srcAmount.toBigInt();
    const minAmountLD = srcAmount.toBigInt() / 2n;
    const extraOptions = "0x";
    const sendParam = {
      _sendParam: {
        dstEid,
        to: toAddress,
        amountLD: amountLD.toString(),
        minAmountLD: minAmountLD.toString(),
        extraOptions,
        composeMsg: "0x",
        oftCmd: "0x"
      }
    };
    try {
      const { oftReceipt } = await contract.quoteOFT(sendParam).call(VIEW_CALL_OPTIONS);
      return {
        dstAmount: uiCore.CurrencyAmount.fromRawAmount(dstToken, oftReceipt.amountReceivedLD),
        fee: {
          bridgeFee: uiCore.CurrencyAmount.fromRawAmount(srcAmount.token, "0")
        }
      };
    } catch (error) {
      console.error("Error in getOutput:", error);
      return {
        dstAmount: uiCore.CurrencyAmount.fromRawAmount(dstToken, amountLD),
        fee: {
          bridgeFee: uiCore.CurrencyAmount.fromRawAmount(srcAmount.token, "0")
        }
      };
    }
  }
  async buildSendParams(input) {
    const { dstToken, srcAmount, adapterParams, dstAddress } = input;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const minAmount = input.dstAmountMin ? uiCore.castCurrencyAmountUnsafe(input.dstAmountMin, srcAmount.token) : uiCore.CurrencyAmount.fromRawAmount(srcAmount.token, srcAmount.toBigInt() / 2n);
    const options = await this.createOptions({ adapterParams, dstChainKey });
    return {
      dstEid: BigInt(dstEid),
      to: chunkCUSC3AWA_cjs.addressToBytes32ForChain(dstAddress, dstChainKey),
      amountLD: srcAmount.toBigInt(),
      minAmountLD: minAmount.toBigInt(),
      extraOptions: options.toHex(),
      composeMsg: "0x",
      // No compose message by default
      oftCmd: "0x"
      // No OFT command by default
    };
  }
  // The extra gas value in AdapterParams can be ignored because the extra gas is already
  // enforced and automatically applied to the tx. We only need to serialize the dst native amount
  // and address, which only exist in our AdapterParams V2.
  async createOptions({
    adapterParams,
    dstChainKey
  }) {
    return chunkCUSC3AWA_cjs.createOptions({ adapterParams, dstChainKey }, this.config);
  }
  async getLimit({ srcToken, dstToken }) {
    const contract = await this.getContract(srcToken.chainKey);
    return uiCore.CurrencyAmount.fromBigInt(
      srcToken,
      await contract.credits(this.getDeployment(dstToken.chainKey).eid).call()
    );
  }
  async getContract(chainKey) {
    const { oftProxy, oft } = this.getDeployment(chainKey);
    const tronWeb = await this.getTronWeb(chainKey);
    const address = chunkAIJNXPS2_cjs.toTronAddress(tronWeb, oftProxy ? oftProxy.address : oft.address);
    const contract = await tronWeb.contract(TRON_OFT_ABI, address);
    return {
      credits: (dstEid) => ({
        call: async () => {
          const creditsResult = await contract.credits(dstEid).call(SEND_CALL_OPTIONS);
          return BigInt(creditsResult.credits._hex);
        }
      }),
      quoteOFT: (params) => ({
        call: async (options) => {
          if (!params._sendParam) {
            throw new Error("Missing required parameters for quoteOFT");
          }
          const sendParamArray = [
            params._sendParam.dstEid,
            params._sendParam.to,
            params._sendParam.amountLD.toString(),
            params._sendParam.minAmountLD.toString(),
            params._sendParam.extraOptions,
            params._sendParam.composeMsg,
            params._sendParam.oftCmd
          ];
          const result = await contract.quoteOFT(sendParamArray).call(SEND_CALL_OPTIONS);
          return {
            oftReceipt: {
              amountReceivedLD: result.oftReceipt.amountReceivedLD.toString(),
              amountSentLD: result.oftReceipt.amountSentLD.toString()
            }
          };
        }
      }),
      quoteSend: (params, payInLzToken) => ({
        call: async (options) => {
          if (!params._sendParam) {
            throw new Error("Missing required parameters for quoteSend");
          }
          const sendParamArray = [
            params._sendParam.dstEid,
            params._sendParam.to,
            params._sendParam.amountLD.toString(),
            params._sendParam.minAmountLD.toString(),
            params._sendParam.extraOptions,
            params._sendParam.composeMsg,
            params._sendParam.oftCmd
          ];
          const result = await contract.quoteSend(sendParamArray, payInLzToken).call(SEND_CALL_OPTIONS);
          return {
            nativeFee: result.msgFee.nativeFee.toString(),
            lzTokenFee: result.msgFee.lzTokenFee.toString()
          };
        }
      }),
      send: (params, fee, refundAddress) => ({
        send: async (options) => {
          if (!params || !fee || !refundAddress) {
            throw new Error("Missing required parameters for send");
          }
          const sendParamArray = [
            params._sendParam.dstEid,
            params._sendParam.to,
            params._sendParam.amountLD,
            params._sendParam.minAmountLD,
            params._sendParam.extraOptions,
            params._sendParam.composeMsg,
            params._sendParam.oftCmd
          ];
          const feeArray = [fee.nativeFee.toString(), fee.lzTokenFee.toString()];
          const transaction = await contract.send(sendParamArray, feeArray, refundAddress).send({
            ...options,
            feeLimit: DEFAULT_FEE_LIMIT
          });
          return transaction;
        }
      })
    };
  }
  async getOptions(input) {
    return {
      options: [
        {
          mode: "taxi"
        }
      ]
    };
  }
  async getAllowance({ token, address }) {
    if (!this.supportsRegister(token)) {
      return uiCore.CurrencyAmount.fromRawAmount(token, 0n);
    }
    const tronWeb = await this.getTronWeb(token.chainKey);
    const deployment = this.getDeployment(token.chainKey);
    const spender = deployment.oftProxy?.address;
    if (!spender) {
      console.error("Missing spender:", { spender });
      return uiCore.CurrencyAmount.fromRawAmount(token, 0n);
    }
    const tokenDeployment = deployment.token;
    if (!("address" in tokenDeployment)) {
      console.error("Token is not a contract (no address)");
      return uiCore.CurrencyAmount.fromRawAmount(token, 0n);
    }
    const tronTokenAddress = chunkAIJNXPS2_cjs.toTronAddress(tronWeb, tokenDeployment.address);
    const tronSpenderAddress = chunkAIJNXPS2_cjs.toTronAddress(tronWeb, spender);
    try {
      const tokenContract = await tronWeb.contract(TRC20_ABI, tronTokenAddress);
      const result = await tokenContract.allowance(address, tronSpenderAddress).call(VIEW_CALL_OPTIONS);
      return uiCore.CurrencyAmount.fromRawAmount(token, BigInt(result.toString()));
    } catch (error) {
      console.error("Error getting allowance:", error);
      return uiCore.CurrencyAmount.fromRawAmount(token, 0n);
    }
  }
  async approve({ amount, address }) {
    if (!this.supportsRegister(amount.token)) {
      throw new Error("Token not supported");
    }
    const tronWeb = await this.getTronWeb(amount.token.chainKey);
    const deployment = this.getDeployment(amount.token.chainKey);
    const spender = deployment.oftProxy?.address;
    if (!spender) {
      throw new Error("Missing spender address");
    }
    const tokenDeployment = deployment.token;
    if (!("address" in tokenDeployment)) {
      throw new Error("Token is not a contract (no address)");
    }
    const tronTokenAddress = chunkAIJNXPS2_cjs.toTronAddress(tronWeb, tokenDeployment.address);
    const tronSpenderAddress = chunkAIJNXPS2_cjs.toTronAddress(tronWeb, spender);
    try {
      const tokenContract = await tronWeb.contract(TRC20_ABI, tronTokenAddress);
      return tokenContract.approve(tronSpenderAddress, amount.toBigInt()).send({
        ...SEND_CALL_OPTIONS,
        from: address,
        owner_address: address
      });
    } catch (error) {
      console.error("Error in approve:", error);
      throw error;
    }
  }
};

// src/tron/OftBridgeApiFactory__tron.ts
var OftBridgeApiFactory__tron = class {
  constructor(getTronWeb) {
    this.getTronWeb = getTronWeb;
  }
  create(config) {
    const impl = config.version === 3 ? new OftBridgeV3__tron(this.getTronWeb, config) : void 0;
    if (!impl) {
      throw new Error(
        `Unsupported config: Tron only supports {version: 3}, got {version: ${config.version}, fee: ${config.fee}}`
      );
    }
    return impl;
  }
};

Object.defineProperty(exports, 'createOftBridgeConfig', {
  enumerable: true,
  get: function () { return chunkLVT53LVX_cjs.createOftBridgeConfig; }
});
Object.defineProperty(exports, 'oftBridgeConfigSchema', {
  enumerable: true,
  get: function () { return chunkLVT53LVX_cjs.oftBridgeConfigSchema; }
});
Object.defineProperty(exports, 'serializeOftBridgeConfig', {
  enumerable: true,
  get: function () { return chunkLVT53LVX_cjs.serializeOftBridgeConfig; }
});
Object.defineProperty(exports, 'OftBridgeApiFactory__evm', {
  enumerable: true,
  get: function () { return chunkQZRBCK35_cjs.OftBridgeApiFactory__evm; }
});
Object.defineProperty(exports, 'OftBridgeV0', {
  enumerable: true,
  get: function () { return chunkQZRBCK35_cjs.OftBridgeV0; }
});
Object.defineProperty(exports, 'OftBridgeV1', {
  enumerable: true,
  get: function () { return chunkQZRBCK35_cjs.OftBridgeV1; }
});
Object.defineProperty(exports, 'OftBridgeV2', {
  enumerable: true,
  get: function () { return chunkQZRBCK35_cjs.OftBridgeV2; }
});
Object.defineProperty(exports, 'OftBridgeV2Fee', {
  enumerable: true,
  get: function () { return chunkQZRBCK35_cjs.OftBridgeV2Fee; }
});
Object.defineProperty(exports, 'OftBridgeV3', {
  enumerable: true,
  get: function () { return chunkQZRBCK35_cjs.OftBridgeV3; }
});
Object.defineProperty(exports, 'OftBridge__evm', {
  enumerable: true,
  get: function () { return chunkQZRBCK35_cjs.OftBridgeBase; }
});
Object.defineProperty(exports, 'addressToBytes32ForChain', {
  enumerable: true,
  get: function () { return chunkCUSC3AWA_cjs.addressToBytes32ForChain; }
});
Object.defineProperty(exports, 'createOptions', {
  enumerable: true,
  get: function () { return chunkCUSC3AWA_cjs.createOptions; }
});
Object.defineProperty(exports, 'getDeployment', {
  enumerable: true,
  get: function () { return chunkCUSC3AWA_cjs.getDeployment; }
});
Object.defineProperty(exports, 'tryGetDeployment', {
  enumerable: true,
  get: function () { return chunkCUSC3AWA_cjs.tryGetDeployment; }
});
Object.defineProperty(exports, 'fromTronAddress', {
  enumerable: true,
  get: function () { return chunkAIJNXPS2_cjs.fromTronAddress; }
});
Object.defineProperty(exports, 'toTronAddress', {
  enumerable: true,
  get: function () { return chunkAIJNXPS2_cjs.toTronAddress; }
});
exports.OftBridgeApiFactory__tron = OftBridgeApiFactory__tron;
exports.OftBridgeV3__tron = OftBridgeV3__tron;
exports.convertFromV1 = convertFromV1;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map