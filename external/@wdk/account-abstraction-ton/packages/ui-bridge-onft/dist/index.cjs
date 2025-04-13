'use strict';

var uiCore = require('@layerzerolabs/ui-core');
var ethers = require('ethers');
var uiEvm = require('@layerzerolabs/ui-evm');
var z = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var z__default = /*#__PURE__*/_interopDefault(z);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
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
        name: "operator",
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
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
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
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
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
        name: "id",
        type: "uint256"
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
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
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
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
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "mintBatch",
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
    name: "renounceOwnership",
    outputs: [],
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
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
        name: "id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
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
        name: "id",
        type: "uint256"
      }
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var ERC1155__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi, signerOrProvider);
  }
};
__publicField(ERC1155__factory, "abi", _abi);
var _abi2 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI",
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
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "CreatePenguin",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    inputs: [],
    name: "MAX_BY_MINT",
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
    name: "MAX_ELEMENTS",
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
    name: "PRICE",
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
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
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
    name: "baseTokenURI",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "creatorAddress",
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
    name: "devAddress",
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
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
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
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
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
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
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
        name: "val",
        type: "bool"
      }
    ],
    name: "pause",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256"
      }
    ],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
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
    name: "reveal_timestamp",
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
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI",
        type: "string"
      }
    ],
    name: "setBaseURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenByIndex",
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
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
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
    name: "totalMint",
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
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
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
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "walletOfOwner",
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
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
var ERC721__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi2, signerOrProvider);
  }
};
__publicField(ERC721__factory, "abi", _abi2);
var _abi3 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
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
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "ReceiveBatchFromChain",
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
        name: "_tokenId",
        type: "uint256"
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "SendBatchToChain",
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
        name: "_tokenId",
        type: "uint256"
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
        name: "operator",
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
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
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
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "URI",
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
    name: "FUNCTION_TYPE_SEND_BATCH",
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
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
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
    name: "estimateSendBatchFee",
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
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
        name: "account",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
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
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
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
        name: "id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
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
    name: "sendBatchFrom",
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
        name: "_tokenId",
        type: "uint256"
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
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
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
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "uri",
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
var ONFT1155__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi3);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi3, signerOrProvider);
  }
};
__publicField(ONFT1155__factory, "abi", _abi3);
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
        internalType: "uint256",
        name: "_minGasToTransfer",
        type: "uint256"
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
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hashedPayload",
        type: "bytes32"
      }
    ],
    name: "CreditCleared",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hashedPayload",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "CreditStored",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
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
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "clearCredits",
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
    name: "dstChainIdToBatchLimit",
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
      }
    ],
    name: "dstChainIdToTransferGas",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
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
    name: "estimateSendBatchFee",
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
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
    name: "minGasToTransferAndStore",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
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
    name: "sendBatchFrom",
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
        name: "_tokenId",
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
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
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
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_dstChainIdToBatchLimit",
        type: "uint256"
      }
    ],
    name: "setDstChainIdToBatchLimit",
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
        name: "_dstChainIdToTransferGas",
        type: "uint256"
      }
    ],
    name: "setDstChainIdToTransferGas",
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
        internalType: "uint256",
        name: "_minGasToTransferAndStore",
        type: "uint256"
      }
    ],
    name: "setMinGasToTransferAndStore",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "storedCredits",
    outputs: [
      {
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "toAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "creditsRemain",
        type: "bool"
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
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
  }
];
var ONFT721__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi4);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi4, signerOrProvider);
  }
};
__publicField(ONFT721__factory, "abi", _abi4);
var _abi5 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_proxyToken",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "ReceiveBatchFromChain",
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
        name: "_tokenId",
        type: "uint256"
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "SendBatchToChain",
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
        name: "_tokenId",
        type: "uint256"
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
    name: "FUNCTION_TYPE_SEND_BATCH",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
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
    name: "estimateSendBatchFee",
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
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
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
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
    name: "sendBatchFrom",
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
        name: "_tokenId",
        type: "uint256"
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
        internalType: "contract IERC1155",
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
var ProxyONFT1155__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi5);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi5, signerOrProvider);
  }
};
__publicField(ProxyONFT1155__factory, "abi", _abi5);
var _abi6 = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minGasToTransfer",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_proxyToken",
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
        internalType: "bytes32",
        name: "_hashedPayload",
        type: "bytes32"
      }
    ],
    name: "CreditCleared",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hashedPayload",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "CreditStored",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
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
    inputs: [
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "clearCredits",
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
    name: "dstChainIdToBatchLimit",
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
      }
    ],
    name: "dstChainIdToTransferGas",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
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
    name: "estimateSendBatchFee",
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
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
    inputs: [],
    name: "minGasToTransferAndStore",
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
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
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
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes"
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]"
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
    name: "sendBatchFrom",
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
        name: "_tokenId",
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
        internalType: "uint256",
        name: "_dstChainIdToBatchLimit",
        type: "uint256"
      }
    ],
    name: "setDstChainIdToBatchLimit",
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
        name: "_dstChainIdToTransferGas",
        type: "uint256"
      }
    ],
    name: "setDstChainIdToTransferGas",
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
        internalType: "uint256",
        name: "_minGasToTransferAndStore",
        type: "uint256"
      }
    ],
    name: "setMinGasToTransferAndStore",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "storedCredits",
    outputs: [
      {
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "toAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "creditsRemain",
        type: "bool"
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
        internalType: "contract IERC721",
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
  }
];
var ProxyONFT721__factory = class {
  static createInterface() {
    return new ethers.utils.Interface(_abi6);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi6, signerOrProvider);
  }
};
__publicField(ProxyONFT721__factory, "abi", _abi6);

// src/types/NftStandard.ts
var NftStandard = {
  ERC1155: "ERC1155",
  ERC721: "ERC721"
};

// src/types/NftAsset.ts
var NftAsset = class {
  constructor(collection, tokenId) {
    this.collection = collection;
    this.tokenId = tokenId;
  }
  static from({
    collection,
    tokenId
  }) {
    return new NftAsset(collection, tokenId);
  }
  equals(other) {
    if (other === this)
      return true;
    if (!(other instanceof NftAsset))
      return false;
    return this.tokenId == other.tokenId && this.collection.equals(other.collection);
  }
};

// src/types/Amount.ts
var Amount = class {
  constructor(asset, value) {
    this.asset = asset;
    this.value = value;
  }
  static from(asset, value) {
    return new Amount(asset, value);
  }
  equals(other) {
    if (this.value !== other.value)
      return false;
    return this.asset.equals(other.asset);
  }
  toBigInt() {
    return this.value;
  }
  toNumber() {
    return Number(this.value);
  }
};

// src/balance/RPC__Enumerable__ERC721BalanceProvider.ts
var RPC__Enumerable__ERC721BalanceProvider = class {
  constructor(config, providerFactory) {
    this.config = config;
    this.providerFactory = providerFactory;
  }
  supports(collection) {
    if (collection.standard !== NftStandard.ERC721)
      return false;
    if (!uiCore.isEvmChainKey(collection.chainKey))
      return false;
    const deployment = this.config.deployments[collection.chainKey];
    if (!deployment)
      return false;
    return deployment.collection.equals(collection);
  }
  async getAssets(collection, address) {
    const erc721 = ERC721__factory.connect(
      collection.address,
      this.providerFactory(collection.chainKey)
    );
    const ids = await erc721.walletOfOwner(address);
    const assets = ids.map((tokenId) => {
      const asset = NftAsset.from({ collection, tokenId: tokenId.toNumber() });
      const amount = Amount.from(asset, BigInt(1));
      return amount;
    });
    return assets;
  }
};
var RPC__StaticId__ERC1155BalanceProvider = class {
  constructor(ids, providerFactory) {
    this.ids = ids;
    this.providerFactory = providerFactory;
  }
  supports(collection) {
    return collection.standard === NftStandard.ERC1155 && uiCore.isEvmChainKey(collection.chainKey);
  }
  getContract(collection) {
    return ERC1155__factory.connect(collection.address, this.providerFactory(collection.chainKey));
  }
  async getAssets(collection, owner) {
    const erc1155 = this.getContract(collection);
    const amounts = await Promise.all(
      this.ids.map(
        (tokenId) => erc1155.balanceOf(owner, tokenId).then(
          (balance) => Amount.from(
            NftAsset.from({ collection, tokenId: Number(tokenId) }),
            balance.toBigInt()
          )
        )
      )
    );
    return amounts.filter((i) => i.toBigInt() != BigInt(0));
  }
};

// src/contrib/simplehash.ts
var simplehashChainNameMap = /* @__PURE__ */ new Map([
  ["arbitrum-goerli", "arbitrum-goerli"],
  ["arbitrum", "arbitrum"],
  ["avalanche", "avalanche"],
  ["base-goerli", "base-goerli"],
  ["bcs-testnet", "bsc-testnet"],
  ["bcs", "bsc"],
  ["ethereum", "ethereum"],
  ["fuji", "avalanche-fuji"],
  ["gnosis", "gnosis"],
  ["goerli", "ethereum-goerli"],
  ["mumbai", "polygon-mumbai"],
  ["optimism-goerli", "optimism-goerli"],
  ["optimism", "optimism"],
  ["polygon", "polygon"],
  ["sepolia", "ethereum-sepolia"],
  ["solana-testnet", "solana-testnet"],
  ["solana", "solana"]
]);

// src/balance/Simplehash__BalanceProvider.ts
var Simplehash__BalanceProvider = class {
  constructor(apiKey, chainNameMap = simplehashChainNameMap) {
    this.apiKey = apiKey;
    this.chainNameMap = chainNameMap;
  }
  supports(collection) {
    return this.chainNameMap.has(collection.chainKey);
  }
  async getAssets(collection, owner) {
    const chainName = this.chainNameMap.get(collection.chainKey);
    const assets = [];
    try {
      uiCore.assert(chainName, `Unsupported chain ID: ${collection.chainKey}`);
      let url = `https://api.simplehash.com/api/v0/nfts/owners?chains=${chainName}&contract_addresses=${collection.address}&wallet_addresses=${owner}&limit=50`;
      do {
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": this.apiKey
          }
        }).then((res) => res.json());
        url = response.next;
        if (response.nfts == null)
          break;
        for (const simplehashNft of response.nfts) {
          assets.push(
            Amount.from(
              NftAsset.from({ collection, tokenId: Number(simplehashNft.token_id) }),
              BigInt(simplehashNft.token_count)
            )
          );
        }
      } while (url);
      return assets;
    } catch (error) {
      console.error("Error getting assets from SimpleHash", error);
      return assets;
    }
  }
};
var RPC__ERC1155MetadataProvider = class {
  constructor(providerFactory) {
    this.providerFactory = providerFactory;
  }
  supports(collection) {
    return collection.standard === NftStandard.ERC1155 && uiCore.isEvmChainKey(collection.chainKey);
  }
  getContract(collection) {
    return ERC1155__factory.connect(collection.address, this.providerFactory(collection.chainKey));
  }
  async getMetadata(asset) {
    const erc1155 = this.getContract(asset.collection);
    const tokenUri = await erc1155.uri(asset.tokenId);
    const metadata = await fetch(tokenUri).then((res) => res.json());
    return metadata;
  }
};
var RPC__ERC721MetadataProvider = class {
  constructor(providerFactory) {
    this.providerFactory = providerFactory;
  }
  supports(collection) {
    return collection.standard === NftStandard.ERC721 && uiCore.isEvmChainKey(collection.chainKey);
  }
  getContract(collection) {
    return ERC721__factory.connect(collection.address, this.providerFactory(collection.chainKey));
  }
  async getMetadata(asset) {
    const erc721 = this.getContract(asset.collection);
    const tokenUri = await erc721.tokenURI(asset.tokenId);
    const metadata = await fetch(tokenUri).then((res) => res.json());
    return metadata;
  }
};
var SimpleHash__MetadataProvider = class {
  constructor(apiKey, chainKeyMap = simplehashChainNameMap) {
    this.apiKey = apiKey;
    this.chainKeyMap = chainKeyMap;
  }
  supports(collection) {
    return this.chainKeyMap.has(collection.chainKey);
  }
  async getMetadata(asset) {
    const chainKey = asset.collection.chainKey;
    const simpleHashChainName = this.chainKeyMap.get(chainKey);
    uiCore.assert(simpleHashChainName, `ChainKey ${chainKey} is not supported`);
    const tokenId = asset.tokenId;
    const collectionAddress = asset.collection.address.toLowerCase();
    const url = `https://api.simplehash.com/api/v0/nfts/${simpleHashChainName}/${collectionAddress}/${tokenId}`;
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "X-API-KEY": this.apiKey
      }
    }).then((res) => res.json());
    return {
      image: response.image_url ?? void 0,
      name: response.name ?? void 0,
      description: response.description ?? void 0
    };
  }
};
function isSameCollection(assets) {
  const [first, ...rest] = assets;
  for (const other of rest) {
    if (!first.collection.equals(other.collection))
      return false;
  }
  return true;
}
function assertSameCollection(assets) {
  uiCore.assert(isSameCollection(assets), `All assets must be from the same collection`);
}

// src/bridge/OnftBridgeApi__ERC1155__evm.ts
var OnftBridgeApi__ERC1155__evm = class {
  constructor(config, providerFactory, balanceProvider) {
    this.config = config;
    this.providerFactory = providerFactory;
    this.balanceProvider = balanceProvider;
  }
  getDeployment(chainKey) {
    const deployment = this.config.deployments[chainKey];
    if (deployment)
      return deployment;
    throw new Error(`No deployment for ${chainKey}`);
  }
  chainKeyToEndpointId(chainKey) {
    return this.getDeployment(chainKey).eid;
  }
  async getInflight(account) {
    return [];
  }
  getMessageFee(assets, dstChainKey, adapterParams) {
    return this.getBatchMessageFee(assets, dstChainKey, adapterParams);
  }
  minDstGasLookup = (srcChainKey, dstChainKey) => {
    const onft = this.getONFTContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    return onft.minDstGasLookup(dstEid, 1 /* PT_SEND_AND_CALL */);
  };
  getExtraGas = async (assets, dstChainKey) => {
    uiCore.assert(assets.length > 0, "No tokens");
    const collection = assets[0].collection;
    const extraGas = await this.minDstGasLookup(collection.chainKey, dstChainKey);
    return extraGas.add(1).toNumber();
  };
  tryGetProxy(chainKey) {
    const deployment = this.config.deployments[chainKey];
    return deployment.onftProxy;
  }
  async isApproved(assets, owner) {
    assertSameCollection(assets);
    const chainKey = assets[0].collection.chainKey;
    const proxy = this.tryGetProxy(chainKey);
    if (!proxy)
      return true;
    const erc1155 = this.getERC1155Contract(chainKey);
    return erc1155.isApprovedForAll(owner, proxy.address);
  }
  async approve(assets) {
    assertSameCollection(assets);
    const chainKey = assets[0].collection.chainKey;
    const proxy = this.tryGetProxy(chainKey);
    uiCore.assert(proxy);
    const erc1155 = this.getERC1155Contract(chainKey);
    const populatedTransaction = erc1155.populateTransaction.setApprovalForAll(proxy.address, true);
    return uiEvm.createTransaction(populatedTransaction, {
      provider: erc1155.provider,
      chainKey
    });
  }
  supports(collection) {
    if (collection.standard !== NftStandard.ERC1155)
      return false;
    if (!uiCore.isEvmChainKey(collection.chainKey))
      return false;
    const deployment = this.config.deployments[collection.chainKey];
    return deployment && deployment.collection.equals(collection);
  }
  async getSingleMessageFee(asset, dstChainKey, adapterParams) {
    const srcChainKey = asset.collection.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const onft = this.getONFTContract(srcChainKey);
    const native = uiCore.getNativeCurrency(srcChainKey);
    const tokenId = asset.tokenId;
    const dstAddress = uiEvm.ONE_ADDRESS;
    const tokenAmount = 1;
    const useZro = false;
    const cost = await onft.estimateSendFee(
      dstEid,
      dstAddress,
      tokenId,
      tokenAmount,
      useZro,
      uiEvm.serializeAdapterParams(adapterParams)
    );
    return {
      nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, cost.nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromRawAmount(native, 0)
    };
  }
  async getBatchMessageFee(assets, dstChainKey, adapterParams) {
    uiCore.assert(assets.length, "No tokens");
    assertSameCollection(assets);
    const [asset] = assets;
    const srcChainKey = asset.collection.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const onft = this.getONFTContract(srcChainKey);
    const native = uiCore.getNativeCurrency(srcChainKey);
    const tokenIds = assets.map((asset2) => asset2.tokenId);
    const tokenAmounts = assets.map((asset2) => 1);
    const dstAddress = uiEvm.ONE_ADDRESS;
    const useZro = false;
    const cost = await onft.estimateSendBatchFee(
      dstEid,
      dstAddress,
      tokenIds,
      tokenAmounts,
      useZro,
      uiEvm.serializeAdapterParams(adapterParams)
    );
    return {
      nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, cost.nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromRawAmount(native, 0)
    };
  }
  async getAssets(collection, address) {
    const isSupported = this.balanceProvider.supports(collection);
    uiCore.assert(isSupported);
    return this.balanceProvider.getAssets(collection, address);
  }
  getONFTContract(chainKey) {
    const provider = this.providerFactory(chainKey);
    const deployment = this.getDeployment(chainKey);
    if (deployment.onftProxy) {
      return ProxyONFT1155__factory.connect(deployment.onftProxy.address, provider);
    }
    return ONFT1155__factory.connect(deployment.collection.address, provider);
  }
  getERC1155Contract(chainKey) {
    const provider = this.providerFactory(chainKey);
    const deployment = this.getDeployment(chainKey);
    return ERC1155__factory.connect(deployment.collection.address, provider);
  }
  async transferBatch(input) {
    const srcChainKey = input.srcChainKey;
    const onft = this.getONFTContract(srcChainKey);
    const { srcAddress, dstAddress } = input;
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const tokenIds = input.assets.map((amount) => amount.asset.tokenId);
    const tokenAmounts = input.assets.map((amount) => Number(amount.toBigInt()));
    const adapterParams = uiEvm.serializeAdapterParams(input.adapterParams);
    const value = input.fee.nativeFee.quotient;
    const populatedTransaction = await onft.populateTransaction.sendBatchFrom(
      srcAddress,
      dstEid,
      dstAddress,
      tokenIds,
      tokenAmounts,
      srcAddress,
      uiEvm.ZERO_ADDRESS,
      adapterParams,
      { value, from: srcAddress }
    );
    return uiEvm.createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey
    });
  }
  async transfer(input) {
    assertSameCollection(input.assets.map((amount) => amount.asset));
    if (input.assets.length > 1) {
      return this.transferBatch(input);
    }
    return this.transferSingle(input);
  }
  async transferSingle(input) {
    const srcChainKey = input.srcChainKey;
    const onft = this.getONFTContract(srcChainKey);
    const [amount] = input.assets;
    uiCore.assert(amount);
    const { srcAddress, dstAddress } = input;
    const adapterParams = uiEvm.serializeAdapterParams(input.adapterParams);
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const tokenId = amount.asset.tokenId;
    const tokenAmount = Number(amount.toBigInt());
    const value = input.fee.nativeFee.quotient;
    const populatedTransaction = await onft.populateTransaction.sendFrom(
      srcAddress,
      dstEid,
      dstAddress,
      tokenId,
      tokenAmount,
      srcAddress,
      uiEvm.ZERO_ADDRESS,
      adapterParams,
      { value, from: srcAddress }
    );
    return uiEvm.createTransaction(populatedTransaction, {
      provider: this.providerFactory(srcChainKey),
      chainKey: srcChainKey
    });
  }
};
var OnftBridgeApi__ERC721__evm = class {
  constructor(config, providerFactory, balanceProvider = new RPC__Enumerable__ERC721BalanceProvider(
    config,
    providerFactory
  )) {
    this.config = config;
    this.providerFactory = providerFactory;
    this.balanceProvider = balanceProvider;
  }
  async getInflight(account) {
    return [];
  }
  getMessageFee(assets, dstChainKey, adapterParams) {
    return this.getBatchMessageFee(assets, dstChainKey, adapterParams);
  }
  getDeployment(chainKey) {
    const deployment = this.config.deployments[chainKey];
    if (deployment)
      return deployment;
    throw new Error(`No deployment for ${chainKey}`);
  }
  chainKeyToEndpointId(chainKey) {
    return this.getDeployment(chainKey).eid;
  }
  minDstGasLookup = (srcChainKey, dstChainKey) => {
    const onft = this.getONFTContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    return onft.minDstGasLookup(dstEid, 1 /* PT_SEND_AND_CALL */);
  };
  dstChainIdToTransferGas = (srcChainKey, dstChainKey) => {
    const onft = this.getONFTContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    return onft.dstChainIdToTransferGas(dstEid);
  };
  tryGetOnftProxy(chainKey) {
    const deployment = this.config.deployments[chainKey];
    if (!deployment)
      return void 0;
    if ("onftProxy" in deployment) {
      return deployment.onftProxy;
    }
    return void 0;
  }
  getExtraGas = async (assets, dstChainKey) => {
    uiCore.assert(assets.length > 0, "No tokens");
    assertSameCollection(assets);
    const collection = assets[0].collection;
    const [minDstGas, transferGasPerToken] = await Promise.all([
      this.minDstGasLookup(collection.chainKey, dstChainKey),
      this.dstChainIdToTransferGas(collection.chainKey, dstChainKey)
    ]);
    const extraGas = minDstGas.add(transferGasPerToken.mul(assets.length));
    return extraGas.toNumber();
  };
  async isApproved(assets, _owner) {
    assertSameCollection(assets);
    const asset = assets.at(0);
    uiCore.assert(asset);
    const srcChainKey = asset.collection.chainKey;
    const onftProxy = this.tryGetOnftProxy(srcChainKey);
    if (!onftProxy)
      return true;
    const erc721 = this.getERC721Contract(asset.collection.chainKey);
    const owner = await erc721.ownerOf(asset.tokenId);
    return erc721.isApprovedForAll(owner, onftProxy.address);
  }
  async approve(assets) {
    assertSameCollection(assets);
    uiCore.assert(assets.length, `No tokens`);
    const [asset] = assets;
    const srcChainKey = asset.collection.chainKey;
    const proxy = this.tryGetOnftProxy(srcChainKey);
    uiCore.assert(proxy);
    const provider = this.providerFactory(srcChainKey);
    const erc721 = this.getERC721Contract(srcChainKey);
    const populatedTransaction = erc721.populateTransaction.setApprovalForAll(proxy.address, true);
    return uiEvm.createTransaction(populatedTransaction, {
      provider,
      chainKey: srcChainKey
    });
  }
  supports(collection) {
    if (!uiCore.isEvmChainKey(collection.chainKey))
      return false;
    for (const deployment of Object.values(this.config.deployments)) {
      if (deployment.collection.equals(collection))
        return true;
    }
    return false;
  }
  async getSingleMessageFee(asset, dstChainKey, adapterParams) {
    const srcChainKey = asset.collection.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const onft = this.getONFTContract(srcChainKey);
    const tokenId = asset.tokenId;
    const native = uiCore.getNativeCurrency(srcChainKey);
    const toAddress = uiEvm.ZERO_ADDRESS;
    const useZro = false;
    const cost = await onft.estimateSendFee(
      dstEid,
      toAddress,
      tokenId,
      useZro,
      uiEvm.serializeAdapterParams(adapterParams)
    );
    return {
      nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, cost.nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromRawAmount(native, 0)
    };
  }
  async getBatchMessageFee(assets, dstChainKey, adapterParams) {
    uiCore.assert(assets.length, "No tokens");
    assertSameCollection(assets);
    const [asset] = assets;
    const srcChainKey = asset.collection.chainKey;
    const onft = this.getONFTContract(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const native = uiCore.getNativeCurrency(srcChainKey);
    const tokenIds = assets.map((a) => a.tokenId);
    const cost = await onft.estimateSendBatchFee(
      dstEid,
      uiEvm.ONE_ADDRESS,
      tokenIds,
      false,
      uiEvm.serializeAdapterParams(adapterParams)
    );
    return {
      nativeFee: uiCore.CurrencyAmount.fromRawAmount(native, cost.nativeFee.toBigInt()),
      zroFee: uiCore.CurrencyAmount.fromRawAmount(native, 0)
    };
  }
  async getAssets(collection, address) {
    return this.balanceProvider.getAssets(collection, address);
  }
  getONFTContract(chainKey) {
    const provider = this.providerFactory(chainKey);
    const deployment = this.getDeployment(chainKey);
    if (deployment.onftProxy) {
      return ProxyONFT721__factory.connect(deployment.onftProxy.address, provider);
    }
    if (deployment.onft) {
      return ONFT721__factory.connect(deployment.onft.address, provider);
    }
    throw new Error(`No ONFT contract for ${chainKey}`);
  }
  getERC721Contract(chainKey) {
    const provider = this.providerFactory(chainKey);
    const deployment = this.getDeployment(chainKey);
    return ERC721__factory.connect(deployment.collection.address, provider);
  }
  async transferBatch(input) {
    const onft = this.getONFTContract(input.srcChainKey);
    const provider = this.providerFactory(input.srcChainKey);
    const tokenIds = input.assets.map((amount) => amount.asset.tokenId);
    const adapterParams = uiEvm.serializeAdapterParams(input.adapterParams);
    const { dstAddress, srcAddress } = input;
    const srcChainKey = input.srcChainKey;
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const value = input.fee.nativeFee.quotient;
    const zroPaymentAddress = uiEvm.ZERO_ADDRESS;
    const populatedTransaction = await onft.populateTransaction.sendBatchFrom(
      srcAddress,
      dstEid,
      dstAddress,
      tokenIds,
      srcAddress,
      zroPaymentAddress,
      adapterParams,
      { value, from: srcAddress }
    );
    return uiEvm.createTransaction(populatedTransaction, { provider, chainKey: srcChainKey });
  }
  async transfer(input) {
    assertSameCollection(input.assets.map((amount) => amount.asset));
    if (input.assets.length > 1) {
      return this.transferBatch(input);
    }
    return this.transferSingle(input);
  }
  async transferSingle(input) {
    const [amount] = input.assets;
    uiCore.assert(amount);
    const { srcAddress, dstAddress } = input;
    const onft = this.getONFTContract(input.srcChainKey);
    const provider = this.providerFactory(input.srcChainKey);
    const adapterParams = uiEvm.serializeAdapterParams(input.adapterParams);
    const dstEid = this.chainKeyToEndpointId(input.dstChainKey);
    const tokenId = amount.asset.tokenId;
    const zroPaymentAddress = uiEvm.ZERO_ADDRESS;
    const value = input.fee.nativeFee.quotient;
    console.log({
      srcAddress,
      dstAddress,
      tokenId
    });
    const populatedTransaction = await onft.populateTransaction.sendFrom(
      srcAddress,
      dstEid,
      dstAddress,
      tokenId,
      srcAddress,
      zroPaymentAddress,
      adapterParams,
      { value, from: srcAddress }
    );
    return uiEvm.createTransaction(populatedTransaction, { provider, chainKey: input.srcChainKey });
  }
};

// src/types/NftCollection.ts
var NftCollection = class {
  constructor(address, chainKey, standard, name) {
    this.address = address;
    this.chainKey = chainKey;
    this.standard = standard;
    this.name = name;
  }
  static from({
    address,
    chainKey,
    name,
    standard
  }) {
    return new NftCollection(address, chainKey, standard, name);
  }
  equals(other) {
    return this.address === other.address && this.chainKey === other.chainKey;
  }
};
var nftStandardSchema = z__default.default.union([
  z__default.default.literal(NftStandard.ERC1155),
  z__default.default.literal(NftStandard.ERC721)
]);
var nftCollectionSchema = z__default.default.object({
  address: z__default.default.string(),
  chainKey: z__default.default.string(),
  standard: nftStandardSchema,
  name: z__default.default.string()
}).transform((input) => NftCollection.from(input));
var nftAssetSchema = z__default.default.object({
  tokenId: z__default.default.number().int().positive(),
  collection: nftCollectionSchema
}).transform((input) => NftAsset.from(input));
var contractSchema = z__default.default.object({
  address: z__default.default.string()
});
var onftBridgeConfigSchema = z__default.default.object({
  standard: nftStandardSchema,
  name: z__default.default.string(),
  deployments: z__default.default.record(
    z__default.default.union([
      z__default.default.object({
        eid: z__default.default.number(),
        collection: contractSchema,
        onftProxy: contractSchema
      }),
      z__default.default.object({
        eid: z__default.default.number(),
        onft: contractSchema
      })
    ])
  )
}).transform((input) => {
  const config = {
    standard: input.standard,
    deployments: {}
  };
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    let collection;
    let onft, onftProxy;
    if ("onftProxy" in deployment) {
      collection = NftCollection.from({
        chainKey,
        standard: input.standard,
        name: input.name,
        address: deployment.collection.address
      });
      onftProxy = {
        address: deployment.onftProxy.address,
        chainKey
      };
    } else {
      collection = NftCollection.from({
        chainKey,
        standard: input.standard,
        name: input.name,
        address: deployment.onft.address
      });
      onft = {
        address: deployment.onft.address,
        chainKey
      };
    }
    config.deployments[chainKey] = {
      eid: deployment.eid,
      collection,
      onft,
      onftProxy
    };
  }
  return config;
});
function createOnftBridgeConfig(config) {
  return onftBridgeConfigSchema.parse(config);
}
function serializeOnftBridgeConfig(input) {
  const serialized = {
    name: "OFT",
    // we will override this
    deployments: {},
    standard: input.standard
  };
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    const { eid, collection } = deployment;
    serialized.name = collection.name;
    if (deployment.onft) {
      serialized.deployments[chainKey] = {
        eid,
        onft: {
          address: deployment.onft.address
        }
      };
    }
    if (deployment.onftProxy) {
      serialized.deployments[chainKey] = {
        eid,
        collection: {
          address: collection.address
        },
        onftProxy: {
          address: deployment.onftProxy.address
        }
      };
    }
  }
  return serialized;
}

exports.Amount = Amount;
exports.NftAsset = NftAsset;
exports.NftCollection = NftCollection;
exports.NftStandard = NftStandard;
exports.OnftBridgeApi__ERC1155__evm = OnftBridgeApi__ERC1155__evm;
exports.OnftBridgeApi__ERC721__evm = OnftBridgeApi__ERC721__evm;
exports.RPC__ERC1155MetadataProvider = RPC__ERC1155MetadataProvider;
exports.RPC__ERC721MetadataProvider = RPC__ERC721MetadataProvider;
exports.RPC__Enumerable__ERC721BalanceProvider = RPC__Enumerable__ERC721BalanceProvider;
exports.RPC__StaticId__ERC1155BalanceProvider = RPC__StaticId__ERC1155BalanceProvider;
exports.SimpleHash__MetadataProvider = SimpleHash__MetadataProvider;
exports.Simplehash__BalanceProvider = Simplehash__BalanceProvider;
exports.createOnftBridgeConfig = createOnftBridgeConfig;
exports.nftAssetSchema = nftAssetSchema;
exports.nftCollectionSchema = nftCollectionSchema;
exports.nftStandardSchema = nftStandardSchema;
exports.onftBridgeConfigSchema = onftBridgeConfigSchema;
exports.serializeOnftBridgeConfig = serializeOnftBridgeConfig;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map