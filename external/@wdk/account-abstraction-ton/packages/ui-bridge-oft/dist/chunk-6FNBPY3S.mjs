import { tryGetDeployment, getDeployment, addressToBytes32ForChain, createOptions } from './chunk-DHS2PT7H.mjs';
import { __publicField } from './chunk-EJHQDNHP.mjs';
import { validateInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { assert, isEvmChainKey, isToken, getMessageDuration, hasAddress, CurrencyAmount, MaxUint256, isAptosChainKey, getNativeCurrency, castCurrencyAmountUnsafe, parseCurrencyAmount, MessageFee, AdapterParams, removeDust } from '@layerzerolabs/ui-core';
import { ERC20__api, serializeAdapterParams, createTransaction, addressToBytes32, AddressOne, AddressZero } from '@layerzerolabs/ui-evm';
import { utils, Contract, constants, BigNumber } from 'ethers';
import { ChainKey } from '@layerzerolabs/lz-definitions';

var OftBridgeBase = class {
  constructor(providerFactory, config) {
    this.providerFactory = providerFactory;
    this.config = config;
    this.validateConfig(config);
    this.erc20 = new ERC20__api(providerFactory);
  }
  erc20;
  async getOptions(input) {
    const taxiOption = {
      mode: "taxi"
    };
    return { options: [taxiOption] };
  }
  validateInput(input) {
    validateInput(input);
    const srcDeployment = this.getDeployment(input.srcChainKey);
    const dstDeployment = this.getDeployment(input.dstChainKey);
    assert(srcDeployment.token.equals(input.srcToken), "Invalid srcToken");
    assert(dstDeployment.token.equals(input.dstToken), "Invalid dstTOken");
  }
  // endpoint id is now implementation detail
  // API should use only this method to map to correct value
  chainKeyToEndpointId(chainKey) {
    return this.getDeployment(chainKey).eid;
  }
  supportsClaim(token) {
    return this.supportsRegister(token);
  }
  supportsRegister(token) {
    const { chainKey } = token;
    if (!isEvmChainKey(chainKey))
      return false;
    return Boolean(this.tryGetDeployment(token.chainKey)?.token.equals(token));
  }
  supportsTransfer(srcToken, dstToken) {
    if (!isEvmChainKey(srcToken.chainKey))
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
  async getDuration({ srcToken, dstToken }) {
    const { oftProxy, token, oftNative, eid } = this.getDeployment(srcToken.chainKey);
    const address = oftProxy ? oftProxy.address : oftNative ? oftNative.address : isToken(token) ? token.address : null;
    assert(address, "address");
    const ua = { address, eid };
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);
    return getMessageDuration(ua, dstEid);
  }
  async getAllowance({ token, address, dstChainKey }) {
    assert(isToken(token));
    const { oftProxy, oftNative } = this.getDeployment(token.chainKey);
    let oft;
    let approvalRequired = true;
    if (dstChainKey && !isEvmChainKey(dstChainKey) && oftNative) {
      oft = oftNative;
    } else {
      oft = oftProxy;
      approvalRequired = oftProxy?.approvalRequired !== false;
    }
    const skipApproval = !oft || !hasAddress(token) || approvalRequired === false;
    if (skipApproval) {
      return CurrencyAmount.fromRawAmount(token, MaxUint256);
    }
    return this.erc20.forToken(token).allowance(address, oft.address);
  }
  async approve({ amount, dstChainKey }) {
    const { oftProxy, oftNative } = this.getDeployment(amount.token.chainKey);
    let oft;
    if (dstChainKey && !isEvmChainKey(dstChainKey) && oftNative) {
      oft = oftNative;
    } else {
      oft = oftProxy;
    }
    assert(oft, "No oftProxy or oftNative");
    return this.erc20.forToken(amount.token).approve(amount, oft.address);
  }
  async isRegistered(input) {
    return true;
  }
  async getUnclaimed({ token }) {
    return CurrencyAmount.fromRawAmount(token, 0);
  }
  claim(input) {
    throw new Error("Method not supported.");
  }
  register(input) {
    throw new Error("Method not supported.");
  }
  async getLimit({ srcToken }) {
    return CurrencyAmount.fromRawAmount(srcToken, MaxUint256);
  }
  tryGetDeployment(chainKey) {
    return tryGetDeployment(chainKey, this.config);
  }
  getDeployment(chainKey) {
    return getDeployment(chainKey, this.config);
  }
  getDefaultExtraGas(srcChainKey, dstChainKey) {
    return dstChainKey === "arbitrum" ? 3e6 : isAptosChainKey(dstChainKey) ? 1e4 : (
      // other evm
      25e4
    );
  }
};
var _abi = [
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
        name: "_mainEndpointId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_initialSupplyOnMainEndpoint",
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
var OFTV0__factory = class {
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider);
  }
};
__publicField(OFTV0__factory, "abi", _abi);
var _abi2 = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
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
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "DefaultReceiveVersionSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "DefaultSendVersionSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "NewLibraryVersionAdded",
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
        indexed: false,
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "address",
        name: "dstAddress",
        type: "address"
      }
    ],
    name: "PayloadCleared",
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
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "address",
        name: "dstAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
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
    name: "PayloadStored",
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
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      }
    ],
    name: "UaForceResumeReceive",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ua",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "UaReceiveVersionSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ua",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "UaSendVersionSet",
    type: "event"
  },
  {
    inputs: [],
    name: "BLOCK_VERSION",
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
    name: "DEFAULT_VERSION",
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
    name: "defaultReceiveLibraryAddress",
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
    name: "defaultReceiveVersion",
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
    name: "defaultSendLibrary",
    outputs: [
      {
        internalType: "contract ILayerZeroMessagingLibrary",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultSendVersion",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_userApplication",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_payInZRO",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateFees",
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
    inputs: [],
    name: "getChainId",
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
        name: "_userApplication",
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
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "getInboundNonce",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_srcAddress",
        type: "address"
      }
    ],
    name: "getOutboundNonce",
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
        internalType: "address",
        name: "_userApplication",
        type: "address"
      }
    ],
    name: "getReceiveLibraryAddress",
    outputs: [
      {
        internalType: "address",
        name: "receiveLibraryAddress",
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
        name: "_userApplication",
        type: "address"
      }
    ],
    name: "getReceiveVersion",
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
        name: "_userApplication",
        type: "address"
      }
    ],
    name: "getSendLibraryAddress",
    outputs: [
      {
        internalType: "address",
        name: "sendLibraryAddress",
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
        name: "_userApplication",
        type: "address"
      }
    ],
    name: "getSendVersion",
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
    name: "hasStoredPayload",
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
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "inboundNonce",
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
    name: "isReceivingPayload",
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
    name: "isSendingPayload",
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
    name: "latestVersion",
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
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "libraryLookup",
    outputs: [
      {
        internalType: "contract ILayerZeroMessagingLibrary",
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
        name: "_newLayerZeroLibraryAddress",
        type: "address"
      }
    ],
    name: "newVersion",
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
    name: "outboundNonce",
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
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "address",
        name: "_dstAddress",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "receivePayload",
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
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "retryPayload",
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
        name: "_destination",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
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
      }
    ],
    name: "send",
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
        name: "_newDefaultReceiveVersion",
        type: "uint16"
      }
    ],
    name: "setDefaultReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_newDefaultSendVersion",
        type: "uint16"
      }
    ],
    name: "setDefaultSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_newVersion",
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
        name: "_newVersion",
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
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "storedPayload",
    outputs: [
      {
        internalType: "uint64",
        name: "payloadLength",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "dstAddress",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "payloadHash",
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
        name: "",
        type: "address"
      }
    ],
    name: "uaConfigLookup",
    outputs: [
      {
        internalType: "uint16",
        name: "sendVersion",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "receiveVersion",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "receiveLibraryAddress",
        type: "address"
      },
      {
        internalType: "contract ILayerZeroMessagingLibrary",
        name: "sendLibrary",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var Endpoint__factory = class {
  static createInterface() {
    return new utils.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi2, signerOrProvider);
  }
};
__publicField(Endpoint__factory, "abi", _abi2);
var _abi3 = [
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
        name: "_lzEndpoint",
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
        internalType: "address",
        name: "_to",
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
        indexed: false,
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
    name: "DEFAULT_PAYLOAD_SIZE_LIMIT",
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
    inputs: [],
    name: "PT_SEND",
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
    name: "interfaceId",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
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
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "payloadSizeLimitLookup",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256"
      }
    ],
    name: "setPayloadSizeLimit",
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
        name: "_remoteChainId",
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
  }
];
var OFTV1__factory = class {
  static createInterface() {
    return new utils.Interface(_abi3);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi3, signerOrProvider);
  }
};
__publicField(OFTV1__factory, "abi", _abi3);
var _abi4 = [
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
        internalType: "uint8",
        name: "_sharedDecimals",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_lzEndpoint",
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
        name: "_hash",
        type: "bytes32"
      }
    ],
    name: "CallOFTReceivedSuccess",
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
        name: "_address",
        type: "address"
      }
    ],
    name: "NonContractAddress",
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
        internalType: "address",
        name: "_to",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
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
    inputs: [],
    name: "PT_SEND",
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
    name: "PT_SEND_AND_CALL",
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
        internalType: "bytes32",
        name: "_from",
        type: "bytes32"
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
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_gasForCall",
        type: "uint256"
      }
    ],
    name: "callOnOFTReceived",
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
    name: "creditedPackets",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
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
    name: "estimateSendAndCallFee",
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
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
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
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
      }
    ],
    name: "sendAndCall",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
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
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
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
    inputs: [],
    name: "sharedDecimals",
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
  }
];
var OFTV2__factory = class {
  static createInterface() {
    return new utils.Interface(_abi4);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi4, signerOrProvider);
  }
};
__publicField(OFTV2__factory, "abi", _abi4);
var _abi5 = [
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
        internalType: "uint8",
        name: "_sharedDecimals",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_lzEndpoint",
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
        name: "_hash",
        type: "bytes32"
      }
    ],
    name: "CallOFTReceivedSuccess",
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
        name: "_address",
        type: "address"
      }
    ],
    name: "NonContractAddress",
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
        internalType: "address",
        name: "_to",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
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
        name: "feeBp",
        type: "uint16"
      }
    ],
    name: "SetDefaultFeeBp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "dstchainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBp",
        type: "uint16"
      }
    ],
    name: "SetFeeBp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feeOwner",
        type: "address"
      }
    ],
    name: "SetFeeOwner",
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
    inputs: [],
    name: "PT_SEND",
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
    name: "PT_SEND_AND_CALL",
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
        internalType: "bytes32",
        name: "_from",
        type: "bytes32"
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
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_gasForCall",
        type: "uint256"
      }
    ],
    name: "callOnOFTReceived",
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
    name: "chainIdToFeeBps",
    outputs: [
      {
        internalType: "uint16",
        name: "feeBP",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    stateMutability: "view",
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
    name: "creditedPackets",
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
    name: "defaultFeeBp",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
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
    name: "estimateSendAndCallFee",
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
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
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
    inputs: [],
    name: "feeOwner",
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
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "quoteOFTFee",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
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
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
      }
    ],
    name: "sendAndCall",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmount",
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
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
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
        name: "_feeBp",
        type: "uint16"
      }
    ],
    name: "setDefaultFeeBp",
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
        internalType: "bool",
        name: "_enabled",
        type: "bool"
      },
      {
        internalType: "uint16",
        name: "_feeBp",
        type: "uint16"
      }
    ],
    name: "setFeeBp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeOwner",
        type: "address"
      }
    ],
    name: "setFeeOwner",
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
    inputs: [],
    name: "sharedDecimals",
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
  }
];
var OFTV2Fee__factory = class {
  static createInterface() {
    return new utils.Interface(_abi5);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi5, signerOrProvider);
  }
};
__publicField(OFTV2Fee__factory, "abi", _abi5);
var _abi6 = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_ethEid",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_arbitrumEid",
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
    inputs: [],
    name: "ComposeNotSupported",
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
        name: "creditsEth",
        type: "uint64"
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
        name: "_creditsEth",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsArbitrum",
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
        name: "_creditsEth",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsArbitrum",
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
var OFTV3__factory = class {
  static createInterface() {
    return new utils.Interface(_abi6);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi6, signerOrProvider);
  }
};
__publicField(OFTV3__factory, "abi", _abi6);
var _abi7 = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_ethEid",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_arbitrumEid",
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
    inputs: [],
    name: "ComposeNotSupported",
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
        name: "creditsEth",
        type: "uint64"
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
        name: "_creditsEth",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsArbitrum",
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
        name: "_creditsEth",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_creditsArbitrum",
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
var OFTV3_Adapter__factory = class {
  static createInterface() {
    return new utils.Interface(_abi7);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi7, signerOrProvider);
  }
};
__publicField(OFTV3_Adapter__factory, "abi", _abi7);
var _abi8 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address"
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
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
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
        indexed: false,
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
    inputs: [],
    name: "DEFAULT_PAYLOAD_SIZE_LIMIT",
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
    inputs: [],
    name: "PT_SEND",
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
    name: "interfaceId",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
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
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "payloadSizeLimitLookup",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256"
      }
    ],
    name: "setPayloadSizeLimit",
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
        name: "_remoteChainId",
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
  }
];
var ProxyOFTV1__factory = class {
  static createInterface() {
    return new utils.Interface(_abi8);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi8, signerOrProvider);
  }
};
__publicField(ProxyOFTV1__factory, "abi", _abi8);
var _abi9 = [
  {
    inputs: [
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
        internalType: "address",
        name: "_lzEndpoint",
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
        name: "_hash",
        type: "bytes32"
      }
    ],
    name: "CallOFTReceivedSuccess",
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
        name: "_address",
        type: "address"
      }
    ],
    name: "NonContractAddress",
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
        internalType: "address",
        name: "_to",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
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
    inputs: [],
    name: "PT_SEND",
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
    name: "PT_SEND_AND_CALL",
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
        internalType: "bytes32",
        name: "_from",
        type: "bytes32"
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
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_gasForCall",
        type: "uint256"
      }
    ],
    name: "callOnOFTReceived",
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
    name: "creditedPackets",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
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
    name: "estimateSendAndCallFee",
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
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
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
    name: "outboundAmount",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
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
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
      }
    ],
    name: "sendAndCall",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
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
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
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
    inputs: [],
    name: "sharedDecimals",
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
  }
];
var ProxyOFTV2__factory = class {
  static createInterface() {
    return new utils.Interface(_abi9);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi9, signerOrProvider);
  }
};
__publicField(ProxyOFTV2__factory, "abi", _abi9);
var _abi10 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_lzEndpoint",
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
        name: "_hash",
        type: "bytes32"
      }
    ],
    name: "CallOFTReceivedSuccess",
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
        name: "_address",
        type: "address"
      }
    ],
    name: "NonContractAddress",
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
        internalType: "address",
        name: "_to",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
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
        name: "feeBp",
        type: "uint16"
      }
    ],
    name: "SetDefaultFeeBp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "dstchainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBp",
        type: "uint16"
      }
    ],
    name: "SetFeeBp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feeOwner",
        type: "address"
      }
    ],
    name: "SetFeeOwner",
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
    inputs: [],
    name: "PT_SEND",
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
    name: "PT_SEND_AND_CALL",
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
        internalType: "bytes32",
        name: "_from",
        type: "bytes32"
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
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_gasForCall",
        type: "uint256"
      }
    ],
    name: "callOnOFTReceived",
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
    name: "chainIdToFeeBps",
    outputs: [
      {
        internalType: "uint16",
        name: "feeBP",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    stateMutability: "view",
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
    name: "creditedPackets",
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
    name: "defaultFeeBp",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
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
    name: "estimateSendAndCallFee",
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
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
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
    inputs: [],
    name: "feeOwner",
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
    name: "outboundAmount",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "quoteOFTFee",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
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
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
      }
    ],
    name: "sendAndCall",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmount",
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
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
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
        name: "_feeBp",
        type: "uint16"
      }
    ],
    name: "setDefaultFeeBp",
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
        internalType: "bool",
        name: "_enabled",
        type: "bool"
      },
      {
        internalType: "uint16",
        name: "_feeBp",
        type: "uint16"
      }
    ],
    name: "setFeeBp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeOwner",
        type: "address"
      }
    ],
    name: "setFeeOwner",
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
    inputs: [],
    name: "sharedDecimals",
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
  }
];
var ProxyOFTV2Fee__factory = class {
  static createInterface() {
    return new utils.Interface(_abi10);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi10, signerOrProvider);
  }
};
__publicField(ProxyOFTV2Fee__factory, "abi", _abi10);

// src/evm/impl/OftBridgeV0.ts
var OftBridgeV0 = class extends OftBridgeBase {
  constructor(providerFactory, config) {
    super(providerFactory, config);
    this.providerFactory = providerFactory;
    this.config = config;
  }
  validateConfig(config) {
    assert(config.version === 0, "Invalid config.version: is not 0");
    assert(config.fee === false, "Invalid config.fee: is not false");
  }
  async transfer(input) {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const provider = this.providerFactory(srcChainKey);
    const contract = this.getContractV0(srcChainKey);
    const adapterParams = serializeAdapterParams(input.adapterParams);
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const value = input.fee.nativeFee.quotient;
    const populatedTransaction = await contract.populateTransaction.sendTokens(
      dstEid,
      input.dstAddress,
      input.srcAmount.quotient,
      constants.AddressZero,
      adapterParams,
      { value }
    );
    return createTransaction(populatedTransaction, { provider, chainKey: srcChainKey });
  }
  async getMessageFee({
    srcToken,
    dstToken,
    adapterParams
  }) {
    const srcChainKey = srcToken.chainKey;
    const srcNative = getNativeCurrency(srcChainKey);
    const contract = this.getContractV0(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstToken.chainKey);
    const dstAddress = contract.address;
    const dstNativeAmount = adapterParams.dstNativeAmount ? adapterParams.dstNativeAmount.quotient : BigNumber.from(0);
    const payload = utils.defaultAbiCoder.encode(
      ["bytes", "uint256"],
      [dstAddress, dstNativeAmount]
    );
    const endpoint = Endpoint__factory.connect(
      await contract.endpoint(),
      this.providerFactory(srcToken.chainKey)
    );
    const fee = await endpoint.estimateFees(
      dstEid,
      dstAddress,
      payload,
      false,
      serializeAdapterParams(adapterParams)
    );
    const nativeFee = CurrencyAmount.fromRawAmount(srcNative, fee.nativeFee.toBigInt());
    return {
      nativeFee,
      zroFee: nativeFee.multiply(0)
    };
  }
  async getExtraGas() {
    return 85e3;
  }
  async getOutput({
    srcAmount,
    dstToken
  }) {
    const zero = srcAmount.multiply(0);
    const outputAmount = castCurrencyAmountUnsafe(srcAmount, dstToken);
    return {
      dstAmount: outputAmount,
      fee: {
        bridgeFee: zero
      }
    };
  }
  getContractV0(chainKey) {
    const { oft } = this.getDeployment(chainKey);
    assert(oft, `No oft for chainKey: ${chainKey}`);
    return OFTV0__factory.connect(oft.address, this.providerFactory(chainKey));
  }
};
var OftBridgeV1 = class extends OftBridgeBase {
  constructor(providerFactory, config) {
    super(providerFactory, config);
    this.providerFactory = providerFactory;
    this.config = config;
  }
  validateConfig(config) {
    assert(config.version === 1, "Invalid config.version: is not 1");
    assert(config.fee === false, "Invalid config.fee: is not false");
  }
  async transfer(input) {
    this.validateInput(input);
    const { srcChainKey, dstChainKey } = input;
    const contract = this.getContractV1(srcChainKey);
    const adapterParams = serializeAdapterParams(input.adapterParams);
    const value = input.fee.nativeFee.quotient;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const populatedTransaction = contract.populateTransaction.sendFrom(
      input.srcAddress,
      dstEid,
      input.dstAddress,
      input.srcAmount.quotient,
      input.dstAddress,
      constants.AddressZero,
      adapterParams,
      { value, from: input.srcAddress }
    );
    return createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey
    });
  }
  async getMessageFee({
    srcToken,
    dstToken,
    adapterParams
  }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const native = getNativeCurrency(srcChainKey);
    const lzParams = serializeAdapterParams(adapterParams);
    const dstAddress = utils.hexlify(addressToBytes32(AddressOne));
    const useZro = false;
    const amount = 0;
    const contract = this.getContractV1(srcChainKey);
    const response = await contract.estimateSendFee(dstEid, dstAddress, amount, useZro, lzParams);
    const fee = {
      nativeFee: CurrencyAmount.fromRawAmount(native, response.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, response.zroFee.toBigInt())
    };
    return fee;
  }
  async getExtraGas({ srcToken, dstToken }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const contract = this.getContractV1(srcChainKey);
    const extraGas = await contract.minDstGasLookup(dstEid, 0 /* PT_SEND */);
    return extraGas.toNumber() || this.getDefaultExtraGas(srcChainKey, dstChainKey);
  }
  async getOutput({
    srcAmount,
    dstToken
  }) {
    const fee = srcAmount.multiply(0);
    const outputAmount = castCurrencyAmountUnsafe(srcAmount.subtract(fee), dstToken);
    return {
      fee: { bridgeFee: fee },
      dstAmount: outputAmount
    };
  }
  getContractV1(chainKey) {
    const { oftProxy, oft } = this.getDeployment(chainKey);
    const provider = this.providerFactory(chainKey);
    if (oftProxy) {
      return ProxyOFTV1__factory.connect(oftProxy.address, provider);
    }
    assert(oft, `No oft for chainKey: ${chainKey}`);
    return OFTV1__factory.connect(oft.address, provider);
  }
};
var OftBridgeV2Base = class extends OftBridgeBase {
  constructor(providerFactory, config) {
    super(providerFactory, config);
    this.providerFactory = providerFactory;
  }
  validateConfig(config) {
    assert(config.sharedDecimals, "Invalid config.sharedDecimals: not provided");
    assert(config.version === 2, "Invalid config.version: is not 2");
  }
  async getAllowance({ token, address }) {
    if (this.isValidNative(token)) {
      return CurrencyAmount.fromRawAmount(token, constants.MaxUint256.toBigInt());
    }
    return super.getAllowance({ token, address });
  }
  supportsTransfer(srcToken, dstToken) {
    if (this.isValidNative(srcToken) && this.isValidToken(dstToken)) {
      return true;
    }
    if (this.isValidToken(srcToken) && this.isValidNative(dstToken)) {
      return true;
    }
    return super.supportsTransfer(srcToken, dstToken);
  }
  supportsRegister(token) {
    return this.isValidNative(token) || super.supportsRegister(token);
  }
  supportsClaim(token) {
    return this.supportsRegister(token);
  }
  isValidNative(native) {
    const { oftNative, token } = this.tryGetDeployment(native.chainKey) ?? {};
    if (!token)
      return false;
    if (!oftNative)
      return false;
    return native.equals(token);
  }
  isValidToken(token) {
    const deployment = this.tryGetDeployment(token.chainKey);
    if (!deployment?.token)
      return false;
    return deployment.token.equals(token);
  }
  removeDust(amount) {
    return removeDust(amount, this.config.sharedDecimals);
  }
};

// src/evm/impl/OftBridgeV2.ts
var OftBridgeV2 = class extends OftBridgeV2Base {
  constructor(providerFactory, config) {
    super(providerFactory, config);
    this.providerFactory = providerFactory;
    this.config = config;
  }
  validateConfig(config) {
    super.validateConfig(config);
    assert(config.fee === false, "Invalid config.fee: is not false");
  }
  async transfer(input) {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const dstChainKey = input.dstChainKey;
    const contract = this.getContractV2(srcChainKey);
    const adapterParams = serializeAdapterParams(input.adapterParams);
    const amountLD = input.srcAmount;
    const value = this.isValidNative(input.srcToken) ? input.fee.nativeFee.add(input.srcAmount).quotient : input.fee.nativeFee.quotient;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const dstAddress = utils.hexlify(addressToBytes32(input.dstAddress));
    const callParams = {
      adapterParams,
      refundAddress: input.srcAddress,
      zroPaymentAddress: AddressZero
    };
    const populatedTransaction = contract.populateTransaction.sendFrom(
      input.srcAddress,
      dstEid,
      dstAddress,
      amountLD.quotient,
      callParams,
      {
        value,
        from: input.srcAddress,
        // manual gas limit that should cover most OFT transfers
        gasLimit: 5e5,
        gasPrice: 1e8
      }
    );
    const tx = createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey
    });
    return tx;
  }
  async getMessageFee({
    srcToken,
    dstToken,
    adapterParams
  }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const native = getNativeCurrency(srcChainKey);
    const defaultFee = {
      nativeFee: CurrencyAmount.fromRawAmount(native, BigInt(1e14)),
      // 0.0001 native token
      zroFee: CurrencyAmount.fromRawAmount(native, 0n)
    };
    try {
      const lzParams = serializeAdapterParams(adapterParams);
      const dstEid = this.chainKeyToEndpointId(dstChainKey);
      const dstAddress = utils.hexlify(addressToBytes32(AddressOne));
      const useZro = false;
      const amount = 0;
      const contract = this.getContractV2(srcChainKey);
      const response = await contract.estimateSendFee(dstEid, dstAddress, amount, useZro, lzParams);
      return {
        nativeFee: CurrencyAmount.fromRawAmount(native, response.nativeFee.toBigInt()),
        zroFee: CurrencyAmount.fromRawAmount(native, response.zroFee.toBigInt())
      };
    } catch (error) {
      console.warn(`Failed to get message fee for ${srcChainKey} -> ${dstChainKey}:`, error);
      return defaultFee;
    }
  }
  async getExtraGas({ srcToken, dstToken }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const contract = this.getContractV2(srcChainKey);
    const defaultGas = this.getDefaultExtraGas(srcChainKey, dstChainKey);
    try {
      const extraGas = await contract.minDstGasLookup(dstEid, 0 /* PT_SEND */);
      return extraGas.toNumber() || defaultGas;
    } catch (error) {
      return defaultGas;
    }
  }
  async getOutput({
    srcAmount,
    dstToken
  }) {
    const swapAmount = this.removeDust(srcAmount);
    const zero = swapAmount.multiply(0);
    const outputAmount = castCurrencyAmountUnsafe(swapAmount, dstToken);
    return {
      dstAmount: outputAmount,
      fee: {
        bridgeFee: zero
      }
    };
  }
  getContractV2(chainKey) {
    const provider = this.providerFactory(chainKey);
    const { oftNative, oftProxy, oft } = this.getDeployment(chainKey);
    if (oftNative) {
      return ProxyOFTV2__factory.connect(oftNative.address, provider);
    }
    if (oftProxy) {
      return ProxyOFTV2__factory.connect(oftProxy.address, provider);
    }
    if (oft) {
      return OFTV2__factory.connect(oft.address, provider);
    }
    throw new Error(`No oft for chainKey: ${chainKey}`);
  }
};
var POOL_TOKEN_CHAINS = [
  ChainKey.TRON,
  ChainKey.TRONDEV,
  ChainKey.TRON_TESTNET,
  ChainKey.CELO,
  // ChainKey comes from lz-definitions. The version we use doesn't have ton. @layerzerolabs/lz-solana-sdk-v2 is preventing
  // an easy upgrade of lz-definitions.
  "ton"
];
var OftBridgeV3 = class extends OftBridgeBase {
  constructor(providerFactory, config) {
    super(providerFactory, config);
    this.providerFactory = providerFactory;
    this.config = config;
  }
  validateConfig(config) {
    assert(config.version === 3, "Invalid config.version: is not 3");
  }
  async transfer(input) {
    this.validateInput(input);
    const { srcChainKey, srcAddress, dstChainKey } = input;
    const contract = this.getContract(srcChainKey, dstChainKey);
    const isNativeTransfer = input.fee.nativeFee.token.equals(input.srcAmount.token);
    const value = isNativeTransfer ? input.fee.nativeFee.add(input.srcAmount).toBigInt() : input.fee.nativeFee.toBigInt();
    const sendParams = await this.buildSendParams(input);
    const fee = {
      nativeFee: input.fee.nativeFee.toBigInt(),
      lzTokenFee: input.fee.zroFee.toBigInt()
    };
    try {
      const populatedTransaction = contract.populateTransaction.send(sendParams, fee, srcAddress, {
        value,
        from: srcAddress
        // manual gas limit that should cover most OFT transfers
        // gasLimit: 500000,
        // gasPrice: 100_000_000_000,
      });
      return createTransaction(populatedTransaction, {
        provider: this.providerFactory(srcChainKey),
        chainKey: srcChainKey
      });
    } catch (error) {
      throw error;
    }
  }
  async getMessageFee(input) {
    const dstAddress = input.dstAddress ?? AddressOne;
    const srcAmount = input.srcAmount ?? parseCurrencyAmount(input.srcToken, "1");
    const dstAmountMin = input.dstAmountMin ?? CurrencyAmount.fromBigInt(input.dstToken, BigInt(0));
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const useZro = false;
    const contract = this.getContract(srcChainKey, dstChainKey);
    const sendParams = await this.buildSendParams({
      adapterParams: input.adapterParams,
      dstToken: input.dstToken,
      srcAmount,
      dstAmountMin,
      dstAddress
    });
    try {
      const response = await contract.quoteSend(sendParams, useZro);
      const fee = MessageFee.from(srcChainKey, {
        nativeFee: response.nativeFee.toBigInt(),
        zroFee: response.lzTokenFee.toBigInt()
      });
      return fee;
    } catch (error) {
      const native = getNativeCurrency(srcChainKey);
      return {
        nativeFee: CurrencyAmount.fromRawAmount(native, BigInt(1e14)),
        // 0.0001 native token
        zroFee: CurrencyAmount.fromRawAmount(native, 0n)
      };
    }
  }
  // We do not need to get the enforced options from the contract, they are already applied.
  async getExtraGas(input) {
    return 0;
  }
  async getOutput(input) {
    const { dstToken } = input;
    const srcToken = input.srcAmount.token;
    const dstAmountMin = input.dstAmountMin ?? CurrencyAmount.fromBigInt(dstToken, BigInt(0));
    const adapterParams = input.adapterParams ?? AdapterParams.forV1(0);
    const dstAddress = input.dstAddress ?? AddressZero;
    const { srcAmount } = input;
    const srcChainKey = srcAmount.token.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const contract = this.getContract(srcChainKey, dstChainKey);
    const sendParams = await this.buildSendParams({
      srcAmount,
      dstToken,
      adapterParams,
      dstAmountMin,
      dstAddress
    });
    const { oftReceipt } = await contract.quoteOFT(sendParams);
    const outputAmountLD = CurrencyAmount.fromBigInt(
      srcToken,
      oftReceipt.amountReceivedLD.toBigInt()
    );
    const outputAmountRD = castCurrencyAmountUnsafe(outputAmountLD, dstToken);
    const sentAmountLD = CurrencyAmount.fromBigInt(srcToken, oftReceipt.amountSentLD.toBigInt());
    const bridgeFee = outputAmountLD.subtract(sentAmountLD);
    return {
      fee: { bridgeFee },
      dstAmount: outputAmountRD
    };
  }
  async buildSendParams(input) {
    const { dstToken, srcAmount, adapterParams, dstAddress } = input;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const minAmount = castCurrencyAmountUnsafe(input.dstAmountMin, srcAmount.token);
    const options = await this.createOptions({ adapterParams, dstChainKey });
    return {
      dstEid: BigInt(dstEid),
      to: addressToBytes32ForChain(dstAddress, dstChainKey),
      amountLD: srcAmount.toBigInt(),
      minAmountLD: minAmount.toBigInt(),
      extraOptions: options.toHex(),
      composeMsg: "0x",
      oftCmd: "0x"
    };
  }
  async getLimit({ srcToken, dstToken }) {
    const { chainKey: dstChainKey } = dstToken;
    const { chainKey: srcChainKey } = srcToken;
    if (POOL_TOKEN_CHAINS.includes(dstChainKey) && POOL_TOKEN_CHAINS.includes(srcChainKey)) {
      const contract = this.getContract(srcChainKey, dstChainKey);
      const availCredits = await contract.credits(this.getDeployment(dstToken.chainKey).eid);
      return CurrencyAmount.fromBigInt(srcToken, availCredits.toBigInt());
    }
    return CurrencyAmount.fromRawAmount(srcToken, MaxUint256);
  }
  // The extra gas value in AdapterParams can be ignored because the extra gas is already
  // enforced and automatically applied to the tx. We only need to serialize the dst native amount
  // and address, which only exist in our AdapterParams V2.
  async createOptions({
    adapterParams,
    dstChainKey
  }) {
    return createOptions({ adapterParams, dstChainKey }, this.config);
  }
  getContract(srcChainKey, dstChainKey) {
    const { oftProxy, oft, oftNative } = this.getDeployment(srcChainKey);
    const provider = this.providerFactory(srcChainKey);
    if (!isEvmChainKey(dstChainKey) && oftNative) {
      return OFTV3_Adapter__factory.connect(oftNative.address, provider);
    }
    if (oftProxy) {
      return OFTV3_Adapter__factory.connect(oftProxy.address, provider);
    }
    assert(oft, `No oft for chainKey: ${srcChainKey}`);
    return OFTV3__factory.connect(oft.address, provider);
  }
};
var OftBridgeV2Fee = class extends OftBridgeV2Base {
  constructor(providerFactory, config) {
    super(providerFactory, config);
    this.providerFactory = providerFactory;
  }
  validateConfig(config) {
    super.validateConfig(config);
    assert(config.fee === true, "Invalid config.fee: is not true");
  }
  async transfer(input) {
    this.validateInput(input);
    const srcChainKey = input.srcChainKey;
    const contract = this.getContractV2Fee(srcChainKey);
    const adapterParams = serializeAdapterParams(input.adapterParams);
    const amountLD = input.srcAmount;
    const minAmountLD = castCurrencyAmountUnsafe(
      // at this point cast should be safe
      input.dstAmountMin,
      input.srcToken
    );
    const value = this.isValidNative(input.srcToken) ? input.fee.nativeFee.add(input.srcAmount).quotient : input.fee.nativeFee.quotient;
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const dstAddress = utils.hexlify(addressToBytes32(input.dstAddress));
    const callParams = {
      adapterParams,
      refundAddress: input.srcAddress,
      zroPaymentAddress: constants.AddressZero
    };
    const populatedTransaction = await contract.populateTransaction.sendFrom(
      input.srcAddress,
      dstEid,
      dstAddress,
      amountLD.quotient,
      minAmountLD.quotient,
      callParams,
      { value, from: input.srcAddress }
    );
    const tx = createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey
    });
    return tx;
  }
  async getMessageFee({
    srcToken,
    dstToken,
    adapterParams
  }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const native = getNativeCurrency(srcChainKey);
    const lzParams = serializeAdapterParams(adapterParams);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const dstAddress = AddressOne;
    const useZro = false;
    const amount = 0;
    const contract = this.getContractV2Fee(srcChainKey);
    const response = await contract.estimateSendFee(
      dstEid,
      addressToBytes32(dstAddress),
      amount,
      useZro,
      lzParams
    );
    const fee = {
      nativeFee: CurrencyAmount.fromRawAmount(native, response.nativeFee.toBigInt()),
      zroFee: CurrencyAmount.fromRawAmount(native, response.zroFee.toBigInt())
    };
    return fee;
  }
  async getExtraGas({ srcToken, dstToken }) {
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const contract = this.getContractV2Fee(srcChainKey);
    const extraGas = await contract.minDstGasLookup(dstEid, 0 /* PT_SEND */);
    return extraGas.toNumber() || this.getDefaultExtraGas(srcChainKey, dstChainKey);
  }
  async getOutput({
    srcAmount,
    dstToken
  }) {
    const dstChainKey = dstToken.chainKey;
    const swapAmount = this.removeDust(srcAmount);
    const bridgeFee = await this.getBridgeFee(swapAmount, dstChainKey);
    const outputAmountLD = swapAmount.subtract(bridgeFee);
    const outputAmountRD = castCurrencyAmountUnsafe(outputAmountLD, dstToken);
    return {
      fee: { bridgeFee },
      dstAmount: outputAmountRD
    };
  }
  async getBridgeFee(inputAmount, dstChainKey) {
    const srcChainKey = inputAmount.token.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const swapAmount = this.removeDust(inputAmount);
    const contract = this.getContractV2Fee(srcChainKey);
    const fee = await contract.quoteOFTFee(dstEid, swapAmount.quotient);
    return CurrencyAmount.fromRawAmount(swapAmount.token, fee.toBigInt());
  }
  getContractV2Fee(chainKey) {
    const provider = this.providerFactory(chainKey);
    const { oftNative, oftProxy, oft } = this.getDeployment(chainKey);
    if (oftNative) {
      return ProxyOFTV2Fee__factory.connect(oftNative.address, provider);
    }
    if (oftProxy) {
      return ProxyOFTV2Fee__factory.connect(oftProxy.address, provider);
    }
    if (oft) {
      return OFTV2Fee__factory.connect(oft.address, provider);
    }
    throw new Error(`No oft for chainKey: ${chainKey}`);
  }
};

// src/evm/OftBridgeApiFactory__evm.ts
var OftBridgeApiFactory__evm = class {
  constructor(providerFactory) {
    this.providerFactory = providerFactory;
  }
  create(config) {
    const impl = config.version === 0 && config.fee === false ? new OftBridgeV0(this.providerFactory, config) : config.version === 1 && config.fee === false ? new OftBridgeV1(this.providerFactory, config) : config.version === 2 && config.fee === false ? new OftBridgeV2(this.providerFactory, config) : config.version === 2 && config.fee === true ? new OftBridgeV2Fee(this.providerFactory, config) : config.version === 3 ? new OftBridgeV3(this.providerFactory, config) : void 0;
    if (!impl) {
      throw new Error(
        `Unsupported config: EVM supports: {version: 0, fee: false} | {version: 1, fee: false} | {version: 2, fee: false} | {version: 2, fee: true} got {version: ${config.version}, fee: ${config.fee}}`
      );
    }
    return impl;
  }
};

export { OftBridgeApiFactory__evm, OftBridgeBase, OftBridgeV0, OftBridgeV1, OftBridgeV2, OftBridgeV2Fee, OftBridgeV3 };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-6FNBPY3S.mjs.map