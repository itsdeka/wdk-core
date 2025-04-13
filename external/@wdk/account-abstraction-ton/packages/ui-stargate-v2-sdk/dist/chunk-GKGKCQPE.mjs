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
  FeeLibV1__factory: () => FeeLibV1__factory,
  PoolToken__factory: () => PoolToken__factory,
  StargateMultiRewarder__factory: () => StargateMultiRewarder__factory,
  StargateOFT__factory: () => StargateOFT__factory,
  StargatePoolNative__factory: () => StargatePoolNative__factory,
  StargatePool__factory: () => StargatePool__factory,
  StargateStaking__factory: () => StargateStaking__factory,
  TokenMessaging__factory: () => TokenMessaging__factory
});
var _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stargate",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "FeeLib_InvalidFeeConfiguration",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeLib_Paused",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeLib_Unauthorized",
    type: "error"
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
        components: [
          {
            internalType: "bool",
            name: "paused",
            type: "bool"
          },
          {
            internalType: "uint64",
            name: "zone1UpperBound",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "zone2UpperBound",
            type: "uint64"
          },
          {
            internalType: "uint24",
            name: "zone1FeeMillionth",
            type: "uint24"
          },
          {
            internalType: "uint24",
            name: "zone2FeeMillionth",
            type: "uint24"
          },
          {
            internalType: "uint24",
            name: "zone3FeeMillionth",
            type: "uint24"
          },
          {
            internalType: "uint24",
            name: "rewardMillionth",
            type: "uint24"
          }
        ],
        indexed: false,
        internalType: "struct FeeConfig",
        name: "config",
        type: "tuple"
      }
    ],
    name: "FeeConfigSet",
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
        internalType: "bool",
        name: "isPaused",
        type: "bool"
      }
    ],
    name: "PausedSet",
    type: "event"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amountInSD",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "deficitSD",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "toOFT",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isTaxi",
            type: "bool"
          }
        ],
        internalType: "struct FeeParams",
        name: "_params",
        type: "tuple"
      }
    ],
    name: "applyFee",
    outputs: [
      {
        internalType: "uint64",
        name: "amountOutSD",
        type: "uint64"
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
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amountInSD",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "deficitSD",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "toOFT",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isTaxi",
            type: "bool"
          }
        ],
        internalType: "struct FeeParams",
        name: "_params",
        type: "tuple"
      }
    ],
    name: "applyFeeView",
    outputs: [
      {
        internalType: "uint64",
        name: "amountOutSD",
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
        name: "eid",
        type: "uint32"
      }
    ],
    name: "feeConfigs",
    outputs: [
      {
        internalType: "bool",
        name: "paused",
        type: "bool"
      },
      {
        internalType: "uint64",
        name: "zone1UpperBound",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "zone2UpperBound",
        type: "uint64"
      },
      {
        internalType: "uint24",
        name: "zone1FeeMillionth",
        type: "uint24"
      },
      {
        internalType: "uint24",
        name: "zone2FeeMillionth",
        type: "uint24"
      },
      {
        internalType: "uint24",
        name: "zone3FeeMillionth",
        type: "uint24"
      },
      {
        internalType: "uint24",
        name: "rewardMillionth",
        type: "uint24"
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
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_zone1UpperBound",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_zone2UpperBound",
        type: "uint64"
      },
      {
        internalType: "uint24",
        name: "_zone1FeeMillionth",
        type: "uint24"
      },
      {
        internalType: "uint24",
        name: "_zone2FeeMillionth",
        type: "uint24"
      },
      {
        internalType: "uint24",
        name: "_zone3FeeMillionth",
        type: "uint24"
      },
      {
        internalType: "uint24",
        name: "_rewardMillionth",
        type: "uint24"
      }
    ],
    name: "setFeeConfig",
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
        internalType: "bool",
        name: "_isPaused",
        type: "bool"
      }
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "stargate",
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
    name: "stargateType",
    outputs: [
      {
        internalType: "enum StargateType",
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
var FeeLibV1__factory = class {
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider);
  }
};
__publicField(FeeLibV1__factory, "abi", _abi);
var _abi2 = [
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
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
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
  }
];
var PoolToken__factory = class {
  static createInterface() {
    return new utils.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi2, signerOrProvider);
  }
};
__publicField(PoolToken__factory, "abi", _abi2);
var _abi3 = [
  {
    inputs: [
      {
        internalType: "contract IStargateStaking",
        name: "_staking",
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
        name: "token",
        type: "address"
      }
    ],
    name: "MultiRewarderDisconnectedStakingToken",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256"
      }
    ],
    name: "MultiRewarderIncorrectNative",
    type: "error"
  },
  {
    inputs: [],
    name: "MultiRewarderMaxActiveRewardTokens",
    type: "error"
  },
  {
    inputs: [],
    name: "MultiRewarderMaxPoolsForRewardToken",
    type: "error"
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
    name: "MultiRewarderNativeTransferFailed",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardToken",
        type: "address"
      }
    ],
    name: "MultiRewarderPoolFinished",
    type: "error"
  },
  {
    inputs: [],
    name: "MultiRewarderRenounceOwnershipDisabled",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256"
      }
    ],
    name: "MultiRewarderStartInPast",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address"
      }
    ],
    name: "MultiRewarderUnauthorizedCaller",
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
    name: "MultiRewarderUnregisteredToken",
    type: "error"
  },
  {
    inputs: [],
    name: "MultiRewarderZeroDuration",
    type: "error"
  },
  {
    inputs: [],
    name: "MultiRewarderZeroRewardRate",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address"
      }
    ],
    name: "RewarderAlreadyConnected",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20[]",
        name: "stakeToken",
        type: "address[]"
      },
      {
        indexed: false,
        internalType: "uint48[]",
        name: "allocPoint",
        type: "uint48[]"
      }
    ],
    name: "AllocPointsSet",
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
        name: "rewardToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "stakeToken",
        type: "address"
      }
    ],
    name: "PoolRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountAdded",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "newEnd",
        type: "uint48"
      }
    ],
    name: "RewardExtended",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address"
      }
    ],
    name: "RewardRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountAdded",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountPeriod",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "start",
        type: "uint48"
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "duration",
        type: "uint48"
      }
    ],
    name: "RewardSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "pullTokens",
        type: "bool"
      }
    ],
    name: "RewardStopped",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address"
      }
    ],
    name: "RewarderConnected",
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
        internalType: "address[]",
        name: "rewardTokens",
        type: "address[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      }
    ],
    name: "RewardsClaimed",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardToken",
        type: "address"
      }
    ],
    name: "allocPointsByReward",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "",
        type: "address[]"
      },
      {
        internalType: "uint48[]",
        name: "",
        type: "uint48[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address"
      }
    ],
    name: "allocPointsByStake",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      },
      {
        internalType: "uint48[]",
        name: "",
        type: "uint48[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address"
      }
    ],
    name: "connect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "extendReward",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getRewards",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      },
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
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "oldStake",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "oldSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "onUpdate",
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
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardToken",
        type: "address"
      }
    ],
    name: "rewardDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rewardPerSec",
            type: "uint256"
          },
          {
            internalType: "uint160",
            name: "totalAllocPoints",
            type: "uint160"
          },
          {
            internalType: "uint48",
            name: "start",
            type: "uint48"
          },
          {
            internalType: "uint48",
            name: "end",
            type: "uint48"
          },
          {
            internalType: "bool",
            name: "exists",
            type: "bool"
          }
        ],
        internalType: "struct IMultiRewarder.RewardDetails",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
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
        name: "rewardToken",
        type: "address"
      },
      {
        internalType: "contract IERC20[]",
        name: "stakingTokens",
        type: "address[]"
      },
      {
        internalType: "uint48[]",
        name: "allocPoints",
        type: "uint48[]"
      }
    ],
    name: "setAllocPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint48",
        name: "start",
        type: "uint48"
      },
      {
        internalType: "uint48",
        name: "duration",
        type: "uint48"
      }
    ],
    name: "setReward",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "staking",
    outputs: [
      {
        internalType: "contract IStargateStaking",
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
        name: "rewardToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "bool",
        name: "pullTokens",
        type: "bool"
      }
    ],
    name: "stopReward",
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
var StargateMultiRewarder__factory = class {
  static createInterface() {
    return new utils.Interface(_abi3);
  }
  static connect(address, signerOrProvider) {
    return new Contract(
      address,
      _abi3,
      signerOrProvider
    );
  }
};
__publicField(StargateMultiRewarder__factory, "abi", _abi3);
var _abi4 = [
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
        name: "_endpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "InvalidLocalDecimals",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_AlreadyHasCredit",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_InsufficientCredit",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_UnlimitedCredit",
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
    inputs: [],
    name: "Stargate_InsufficientFare",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidPath",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidTokenDecimals",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_LzTokenUnavailable",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_OutflowFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_Paused",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_RecoverTokenUnsupported",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_ReentrantCall",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_SlippageTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_Unauthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_UnreceivedTokenNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_WithdrawPlannerFeeFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "Transfer_TransferFailed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct StargateBase.AddressConfig",
        name: "config",
        type: "tuple"
      }
    ],
    name: "AddressConfigSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "srcEid",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        indexed: false,
        internalType: "struct Credit[]",
        name: "credits",
        type: "tuple[]"
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
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        indexed: false,
        internalType: "struct Credit[]",
        name: "credits",
        type: "tuple[]"
      }
    ],
    name: "CreditsSent",
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
        internalType: "bool",
        name: "oft",
        type: "bool"
      }
    ],
    name: "OFTPathSet",
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
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "PauseSet",
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
    name: "PlannerFeeWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "amountSD",
        type: "uint64"
      }
    ],
    name: "TreasuryFeeAdded",
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
        internalType: "uint64",
        name: "amountSD",
        type: "uint64"
      }
    ],
    name: "TreasuryFeeWithdrawn",
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
        internalType: "uint8",
        name: "index",
        type: "uint8"
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
        name: "receiver",
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
        internalType: "bytes",
        name: "composeMsg",
        type: "bytes"
      }
    ],
    name: "UnreceivedTokenCached",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      }
    ],
    name: "addTreasuryFee",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [],
    name: "getAddressConfig",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        internalType: "struct StargateBase.AddressConfig",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
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
    name: "paths",
    outputs: [
      {
        internalType: "uint64",
        name: "credit",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "plannerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "available",
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
        name: "limit",
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
        name: "receipt",
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
        name: "fee",
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
        name: "_srcEid",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        internalType: "struct Credit[]",
        name: "_credits",
        type: "tuple[]"
      }
    ],
    name: "receiveCredits",
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
        internalType: "uint8",
        name: "_seatNumber",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      }
    ],
    name: "receiveTokenBus",
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
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "receiveTokenTaxi",
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
    name: "recoverToken",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint8",
        name: "_index",
        type: "uint8"
      },
      {
        internalType: "uint32",
        name: "_srcEid",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "retryReceiveToken",
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
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "minAmount",
            type: "uint64"
          }
        ],
        internalType: "struct TargetCredit[]",
        name: "_credits",
        type: "tuple[]"
      }
    ],
    name: "sendCredits",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        internalType: "struct Credit[]",
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
    name: "sendToken",
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
      },
      {
        components: [
          {
            internalType: "uint72",
            name: "ticketId",
            type: "uint72"
          },
          {
            internalType: "bytes",
            name: "passengerBytes",
            type: "bytes"
          }
        ],
        internalType: "struct Ticket",
        name: "ticket",
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
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        internalType: "struct StargateBase.AddressConfig",
        name: "_config",
        type: "tuple"
      }
    ],
    name: "setAddressConfig",
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
        internalType: "bool",
        name: "_oft",
        type: "bool"
      }
    ],
    name: "setOFTPath",
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
    inputs: [],
    name: "stargateType",
    outputs: [
      {
        internalType: "enum StargateType",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "status",
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
    name: "treasuryFee",
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
        internalType: "bytes32",
        name: "guid",
        type: "bytes32"
      },
      {
        internalType: "uint8",
        name: "index",
        type: "uint8"
      }
    ],
    name: "unreceivedTokens",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawPlannerFee",
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
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      }
    ],
    name: "withdrawTreasuryFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var StargateOFT__factory = class {
  static createInterface() {
    return new utils.Interface(_abi4);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi4, signerOrProvider);
  }
};
__publicField(StargateOFT__factory, "abi", _abi4);
var _abi5 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_lpTokenName",
        type: "string"
      },
      {
        internalType: "string",
        name: "_lpTokenSymbol",
        type: "string"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "_tokenDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "_sharedDecimals",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_endpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "InvalidLocalDecimals",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_AlreadyHasCredit",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_InsufficientCredit",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_UnlimitedCredit",
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
    inputs: [],
    name: "StargatePoolUSDC_BurnAmountExceedsBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InsufficientFare",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidPath",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidTokenDecimals",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_LzTokenUnavailable",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_OnlyTaxi",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_OutflowFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_Paused",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_RecoverTokenUnsupported",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_ReentrantCall",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_SlippageTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_Unauthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_UnreceivedTokenNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "Transfer_ApproveFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "Transfer_TransferFailed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct StargateBase.AddressConfig",
        name: "config",
        type: "tuple"
      }
    ],
    name: "AddressConfigSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "srcEid",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        indexed: false,
        internalType: "struct Credit[]",
        name: "credits",
        type: "tuple[]"
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
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        indexed: false,
        internalType: "struct Credit[]",
        name: "credits",
        type: "tuple[]"
      }
    ],
    name: "CreditsSent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      }
    ],
    name: "Deposited",
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
        internalType: "bool",
        name: "oft",
        type: "bool"
      }
    ],
    name: "OFTPathSet",
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
        internalType: "uint64",
        name: "amountSD",
        type: "uint64"
      }
    ],
    name: "Path_CreditBurned",
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
    name: "PauseSet",
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
    name: "PlannerFeeWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLD",
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
        internalType: "uint64",
        name: "amountSD",
        type: "uint64"
      }
    ],
    name: "TreasuryFeeAdded",
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
        internalType: "uint64",
        name: "amountSD",
        type: "uint64"
      }
    ],
    name: "TreasuryFeeWithdrawn",
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
        internalType: "uint8",
        name: "index",
        type: "uint8"
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
        name: "receiver",
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
        internalType: "bytes",
        name: "composeMsg",
        type: "bytes"
      }
    ],
    name: "UnreceivedTokenCached",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      }
    ],
    name: "addTreasuryFee",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_burnAdmin",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_burnAllowanceSD",
        type: "uint64"
      }
    ],
    name: "allowBurn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "burnAdmin",
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
    name: "burnAllowanceSD",
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
    name: "burnLockedUSDC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "deficitOffset",
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
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
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
    inputs: [],
    name: "getAddressConfig",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        internalType: "struct StargateBase.AddressConfig",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTransferGasLimit",
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
    inputs: [],
    name: "lpToken",
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
    name: "paths",
    outputs: [
      {
        internalType: "uint64",
        name: "credit",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "plannerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "available",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolBalance",
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
        name: "limit",
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
        name: "receipt",
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
    name: "quoteRedeemSend",
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
        name: "fee",
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
        name: "fee",
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
        name: "_srcEid",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        internalType: "struct Credit[]",
        name: "_credits",
        type: "tuple[]"
      }
    ],
    name: "receiveCredits",
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
        internalType: "uint8",
        name: "_seatNumber",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      }
    ],
    name: "receiveTokenBus",
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
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "receiveTokenTaxi",
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
    name: "recoverToken",
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
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      }
    ],
    name: "redeem",
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
    name: "redeemSend",
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
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "redeemable",
    outputs: [
      {
        internalType: "uint256",
        name: "amountLD",
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
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
      },
      {
        internalType: "uint8",
        name: "_index",
        type: "uint8"
      },
      {
        internalType: "uint32",
        name: "_srcEid",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "retryReceiveToken",
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
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "minAmount",
            type: "uint64"
          }
        ],
        internalType: "struct TargetCredit[]",
        name: "_credits",
        type: "tuple[]"
      }
    ],
    name: "sendCredits",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        internalType: "struct Credit[]",
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
    name: "sendToken",
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
      },
      {
        components: [
          {
            internalType: "uint72",
            name: "ticketId",
            type: "uint72"
          },
          {
            internalType: "bytes",
            name: "passengerBytes",
            type: "bytes"
          }
        ],
        internalType: "struct Ticket",
        name: "ticket",
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
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        internalType: "struct StargateBase.AddressConfig",
        name: "_config",
        type: "tuple"
      }
    ],
    name: "setAddressConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_deficitOffsetLD",
        type: "uint256"
      }
    ],
    name: "setDeficitOffset",
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
        internalType: "bool",
        name: "_oft",
        type: "bool"
      }
    ],
    name: "setOFTPath",
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
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      }
    ],
    name: "setTransferGasLimit",
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
    inputs: [],
    name: "stargateType",
    outputs: [
      {
        internalType: "enum StargateType",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "status",
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
    name: "treasuryFee",
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
        internalType: "bytes32",
        name: "guid",
        type: "bytes32"
      },
      {
        internalType: "uint8",
        name: "index",
        type: "uint8"
      }
    ],
    name: "unreceivedTokens",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawPlannerFee",
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
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      }
    ],
    name: "withdrawTreasuryFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var StargatePool__factory = class {
  static createInterface() {
    return new utils.Interface(_abi5);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi5, signerOrProvider);
  }
};
__publicField(StargatePool__factory, "abi", _abi5);
var _abi6 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_lpTokenName",
        type: "string"
      },
      {
        internalType: "string",
        name: "_lpTokenSymbol",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "_tokenDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "_sharedDecimals",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_endpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "InvalidLocalDecimals",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_AlreadyHasCredit",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_InsufficientCredit",
    type: "error"
  },
  {
    inputs: [],
    name: "Path_UnlimitedCredit",
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
    inputs: [],
    name: "Stargate_InsufficientFare",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidPath",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_InvalidTokenDecimals",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_LzTokenUnavailable",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_OnlyTaxi",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_OutflowFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_Paused",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_RecoverTokenUnsupported",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_ReentrantCall",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_SlippageTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_Unauthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "Stargate_UnreceivedTokenNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "Transfer_ApproveFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "Transfer_TransferFailed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct StargateBase.AddressConfig",
        name: "config",
        type: "tuple"
      }
    ],
    name: "AddressConfigSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "srcEid",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        indexed: false,
        internalType: "struct Credit[]",
        name: "credits",
        type: "tuple[]"
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
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        indexed: false,
        internalType: "struct Credit[]",
        name: "credits",
        type: "tuple[]"
      }
    ],
    name: "CreditsSent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      }
    ],
    name: "Deposited",
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
        internalType: "bool",
        name: "oft",
        type: "bool"
      }
    ],
    name: "OFTPathSet",
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
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "PauseSet",
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
    name: "PlannerFeeWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLD",
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
        internalType: "uint64",
        name: "amountSD",
        type: "uint64"
      }
    ],
    name: "TreasuryFeeAdded",
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
        internalType: "uint64",
        name: "amountSD",
        type: "uint64"
      }
    ],
    name: "TreasuryFeeWithdrawn",
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
        internalType: "uint8",
        name: "index",
        type: "uint8"
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
        name: "receiver",
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
        internalType: "bytes",
        name: "composeMsg",
        type: "bytes"
      }
    ],
    name: "UnreceivedTokenCached",
    type: "event"
  },
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      }
    ],
    name: "addTreasuryFee",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [],
    name: "deficitOffset",
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
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
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
    inputs: [],
    name: "getAddressConfig",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        internalType: "struct StargateBase.AddressConfig",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTransferGasLimit",
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
    inputs: [],
    name: "lpToken",
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
    name: "paths",
    outputs: [
      {
        internalType: "uint64",
        name: "credit",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "plannerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "available",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolBalance",
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
        name: "limit",
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
        name: "receipt",
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
    name: "quoteRedeemSend",
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
        name: "fee",
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
        name: "fee",
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
        name: "_srcEid",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        internalType: "struct Credit[]",
        name: "_credits",
        type: "tuple[]"
      }
    ],
    name: "receiveCredits",
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
        internalType: "uint8",
        name: "_seatNumber",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      }
    ],
    name: "receiveTokenBus",
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
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "receiveTokenTaxi",
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
    name: "recoverToken",
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
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      }
    ],
    name: "redeem",
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
    name: "redeemSend",
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
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "redeemable",
    outputs: [
      {
        internalType: "uint256",
        name: "amountLD",
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
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32"
      },
      {
        internalType: "uint8",
        name: "_index",
        type: "uint8"
      },
      {
        internalType: "uint32",
        name: "_srcEid",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_composeMsg",
        type: "bytes"
      }
    ],
    name: "retryReceiveToken",
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
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "minAmount",
            type: "uint64"
          }
        ],
        internalType: "struct TargetCredit[]",
        name: "_credits",
        type: "tuple[]"
      }
    ],
    name: "sendCredits",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "amount",
            type: "uint64"
          }
        ],
        internalType: "struct Credit[]",
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
    name: "sendToken",
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
      },
      {
        components: [
          {
            internalType: "uint72",
            name: "ticketId",
            type: "uint72"
          },
          {
            internalType: "bytes",
            name: "passengerBytes",
            type: "bytes"
          }
        ],
        internalType: "struct Ticket",
        name: "ticket",
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
            name: "feeLib",
            type: "address"
          },
          {
            internalType: "address",
            name: "planner",
            type: "address"
          },
          {
            internalType: "address",
            name: "treasurer",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "creditMessaging",
            type: "address"
          },
          {
            internalType: "address",
            name: "lzToken",
            type: "address"
          }
        ],
        internalType: "struct StargateBase.AddressConfig",
        name: "_config",
        type: "tuple"
      }
    ],
    name: "setAddressConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_deficitOffsetLD",
        type: "uint256"
      }
    ],
    name: "setDeficitOffset",
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
        internalType: "bool",
        name: "_oft",
        type: "bool"
      }
    ],
    name: "setOFTPath",
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
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      }
    ],
    name: "setTransferGasLimit",
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
    inputs: [],
    name: "stargateType",
    outputs: [
      {
        internalType: "enum StargateType",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "status",
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
    name: "treasuryFee",
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
        internalType: "bytes32",
        name: "guid",
        type: "bytes32"
      },
      {
        internalType: "uint8",
        name: "index",
        type: "uint8"
      }
    ],
    name: "unreceivedTokens",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawPlannerFee",
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
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64"
      }
    ],
    name: "withdrawTreasuryFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
var StargatePoolNative__factory = class {
  static createInterface() {
    return new utils.Interface(_abi6);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi6, signerOrProvider);
  }
};
__publicField(StargatePoolNative__factory, "abi", _abi6);
var _abi7 = [
  {
    inputs: [],
    name: "InvalidCaller",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      }
    ],
    name: "NonExistentPool",
    type: "error"
  },
  {
    inputs: [],
    name: "StargateStakingRenounceOwnershipDisabled",
    type: "error"
  },
  {
    inputs: [],
    name: "WithdrawalAmountExceedsBalance",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
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
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "contract IRewarder",
        name: "rewarder",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "exists",
        type: "bool"
      }
    ],
    name: "PoolSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
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
        internalType: "address",
        name: "to",
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
        internalType: "bool",
        name: "withUpdate",
        type: "bool"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "user",
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
        internalType: "contract IERC20[]",
        name: "lpTokens",
        type: "address[]"
      }
    ],
    name: "claim",
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
        internalType: "contract IERC20",
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
        name: "amount",
        type: "uint256"
      }
    ],
    name: "depositTo",
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
    name: "emergencyWithdraw",
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
    name: "isPool",
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
    name: "rewarder",
    outputs: [
      {
        internalType: "contract IRewarder",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "contract IRewarder",
        name: "newRewarder",
        type: "address"
      }
    ],
    name: "setPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256"
      }
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokensLength",
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
      }
    ],
    name: "withdraw",
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
        internalType: "contract IStakingReceiver",
        name: "to",
        type: "address"
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
    name: "withdrawToAndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var StargateStaking__factory = class {
  static createInterface() {
    return new utils.Interface(_abi7);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi7, signerOrProvider);
  }
};
__publicField(StargateStaking__factory, "abi", _abi7);
var _abi8 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_endpoint",
        type: "address"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_queueCapacity",
        type: "uint16"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "BusCodec_InvalidBusBytesLength",
    type: "error"
  },
  {
    inputs: [],
    name: "BusCodec_InvalidMessage",
    type: "error"
  },
  {
    inputs: [],
    name: "BusCodec_InvalidPassengersBytesLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "nativeDrop",
        type: "bool"
      }
    ],
    name: "Bus_InvalidFare",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "numPassengers",
        type: "uint8"
      }
    ],
    name: "Bus_InvalidNumPassengers",
    type: "error"
  },
  {
    inputs: [],
    name: "Bus_InvalidPassenger",
    type: "error"
  },
  {
    inputs: [],
    name: "Bus_QueueFull",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidDelegate",
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
    inputs: [],
    name: "MessagingOptions_ZeroGasLimit",
    type: "error"
  },
  {
    inputs: [],
    name: "Messaging_InvalidAssetId",
    type: "error"
  },
  {
    inputs: [],
    name: "Messaging_InvalidEid",
    type: "error"
  },
  {
    inputs: [],
    name: "Messaging_InvalidMsgValue",
    type: "error"
  },
  {
    inputs: [],
    name: "Messaging_InvalidQueueCapacity",
    type: "error"
  },
  {
    inputs: [],
    name: "Messaging_MaxNumPassengersExceedsQueueCapacity",
    type: "error"
  },
  {
    inputs: [],
    name: "Messaging_NotEnoughPassengers",
    type: "error"
  },
  {
    inputs: [],
    name: "Messaging_Unauthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "Messaging_Unavailable",
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
    name: "OnlySelf",
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
    inputs: [],
    name: "TaxiCodec_InvalidMessage",
    type: "error"
  },
  {
    inputs: [],
    name: "Transfer_ApproveFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "Transfer_TransferFailed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stargateImpl",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "assetId",
        type: "uint16"
      }
    ],
    name: "AssetIdSet",
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
        internalType: "uint72",
        name: "startTicketId",
        type: "uint72"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "numPassengers",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "guid",
        type: "bytes32"
      }
    ],
    name: "BusDriven",
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
        internalType: "uint16",
        name: "startSlot",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "endSlot",
        type: "uint16"
      }
    ],
    name: "BusQueueStorageInitialized",
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
        internalType: "uint72",
        name: "ticketId",
        type: "uint72"
      },
      {
        indexed: false,
        internalType: "uint80",
        name: "fare",
        type: "uint80"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "passenger",
        type: "bytes"
      }
    ],
    name: "BusRode",
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
        internalType: "uint32",
        name: "dstEid",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint80",
        name: "busFare",
        type: "uint80"
      },
      {
        indexed: false,
        internalType: "uint80",
        name: "busAndNativeDropFare",
        type: "uint80"
      }
    ],
    name: "FaresSet",
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
        internalType: "uint128",
        name: "gasLimit",
        type: "uint128"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "nativeDropGasLimit",
        type: "uint128"
      }
    ],
    name: "GasLimitSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "maxAssetId",
        type: "uint16"
      }
    ],
    name: "MaxAssetIdSet",
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
        name: "maxNumPassengers",
        type: "uint8"
      }
    ],
    name: "MaxNumPassengersSet",
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
        internalType: "uint128",
        name: "nativeDropAmount",
        type: "uint128"
      }
    ],
    name: "NativeDropAmountSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128"
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
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128"
      }
    ],
    name: "NativeDropFailed",
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
        internalType: "address",
        name: "preCrimeAddress",
        type: "address"
      }
    ],
    name: "PreCrimeSet",
    type: "event"
  },
  {
    inputs: [],
    name: "MSG_TYPE_BUS",
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
    name: "MSG_TYPE_TAXI",
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
    inputs: [
      {
        internalType: "address",
        name: "stargateImpl",
        type: "address"
      }
    ],
    name: "assetIds",
    outputs: [
      {
        internalType: "uint16",
        name: "assetId",
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
    name: "busQueues",
    outputs: [
      {
        internalType: "uint8",
        name: "maxNumPassengers",
        type: "uint8"
      },
      {
        internalType: "uint80",
        name: "busFare",
        type: "uint80"
      },
      {
        internalType: "uint80",
        name: "busAndNativeDropFare",
        type: "uint80"
      },
      {
        internalType: "uint16",
        name: "qLength",
        type: "uint16"
      },
      {
        internalType: "uint72",
        name: "nextTicketId",
        type: "uint72"
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
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "_passengers",
        type: "bytes"
      }
    ],
    name: "driveBus",
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
        name: "receipt",
        type: "tuple"
      }
    ],
    stateMutability: "payable",
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
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32"
      }
    ],
    name: "gasLimits",
    outputs: [
      {
        internalType: "uint128",
        name: "gasLimit",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "nativeDropGasLimit",
        type: "uint128"
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
        internalType: "uint16",
        name: "_index",
        type: "uint16"
      }
    ],
    name: "getPassengerHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTransferGasLimit",
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
        internalType: "uint32[]",
        name: "_dstEids",
        type: "uint32[]"
      },
      {
        internalType: "uint16",
        name: "_startSlot",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_endSlot",
        type: "uint16"
      }
    ],
    name: "initializeBusQueueStorage",
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
        name: "_message",
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
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "executor",
            type: "address"
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
    name: "lzReceiveSimulate",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "maxAssetId",
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
    name: "nativeDropAmounts",
    outputs: [
      {
        internalType: "uint128",
        name: "nativeDropAmount",
        type: "uint128"
      }
    ],
    stateMutability: "view",
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
    name: "oApp",
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
    inputs: [],
    name: "preCrime",
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
    name: "queueCapacity",
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
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "_passengers",
        type: "bytes"
      }
    ],
    name: "quoteDriveBus",
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
        name: "fee",
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
        internalType: "uint8",
        name: "_numPassengers",
        type: "uint8"
      }
    ],
    name: "quoteFares",
    outputs: [
      {
        internalType: "uint256",
        name: "busFare",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "busAndNativeDropFare",
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
        internalType: "bool",
        name: "_airdrop",
        type: "bool"
      }
    ],
    name: "quoteRideBus",
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
        name: "fee",
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
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "receiver",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "amountSD",
            type: "uint64"
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes"
          }
        ],
        internalType: "struct TaxiParams",
        name: "_params",
        type: "tuple"
      },
      {
        internalType: "bool",
        name: "_payInLzToken",
        type: "bool"
      }
    ],
    name: "quoteTaxi",
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
        name: "fee",
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
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "receiver",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "amountSD",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "nativeDrop",
            type: "bool"
          }
        ],
        internalType: "struct RideBusParams",
        name: "_params",
        type: "tuple"
      }
    ],
    name: "rideBus",
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
        name: "receipt",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "uint72",
            name: "ticketId",
            type: "uint72"
          },
          {
            internalType: "bytes",
            name: "passengerBytes",
            type: "bytes"
          }
        ],
        internalType: "struct Ticket",
        name: "ticket",
        type: "tuple"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stargateImpl",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_assetId",
        type: "uint16"
      }
    ],
    name: "setAssetId",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32"
      },
      {
        internalType: "uint80",
        name: "_busFare",
        type: "uint80"
      },
      {
        internalType: "uint80",
        name: "_busAndNativeDropFare",
        type: "uint80"
      }
    ],
    name: "setFares",
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
        internalType: "uint128",
        name: "_gasLimit",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "_nativeDropGasLimit",
        type: "uint128"
      }
    ],
    name: "setGasLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_maxAssetId",
        type: "uint16"
      }
    ],
    name: "setMaxAssetId",
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
        name: "_maxNumPassengers",
        type: "uint8"
      }
    ],
    name: "setMaxNumPassengers",
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
        internalType: "uint128",
        name: "_nativeDropAmount",
        type: "uint128"
      }
    ],
    name: "setNativeDropAmount",
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
    inputs: [
      {
        internalType: "address",
        name: "_preCrime",
        type: "address"
      }
    ],
    name: "setPreCrime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      }
    ],
    name: "setTransferGasLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "assetId",
        type: "uint16"
      }
    ],
    name: "stargateImpls",
    outputs: [
      {
        internalType: "address",
        name: "stargateImpl",
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
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "receiver",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "amountSD",
            type: "uint64"
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes"
          }
        ],
        internalType: "struct TaxiParams",
        name: "_params",
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
        name: "_messagingFee",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address"
      }
    ],
    name: "taxi",
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
        name: "receipt",
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
  }
];
var TokenMessaging__factory = class {
  static createInterface() {
    return new utils.Interface(_abi8);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi8, signerOrProvider);
  }
};
__publicField(TokenMessaging__factory, "abi", _abi8);

export { FeeLibV1__factory, PoolToken__factory, StargateMultiRewarder__factory, StargateOFT__factory, StargatePoolNative__factory, StargatePool__factory, StargateStaking__factory, TokenMessaging__factory, __publicField, factories_exports };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-GKGKCQPE.mjs.map