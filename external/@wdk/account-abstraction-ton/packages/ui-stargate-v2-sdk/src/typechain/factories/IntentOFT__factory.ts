/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IntentOFT, IntentOFTInterface } from "../IntentOFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stargate",
        type: "address",
      },
      {
        internalType: "address",
        name: "_permit2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Transfer_ApproveFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "dstEid",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "to",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLD",
        type: "uint256",
      },
    ],
    name: "IntentSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "permit2",
    outputs: [
      {
        internalType: "contract IPermit2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct IntentBase.IntentSend",
        name: "_intentSend",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_oftCmd",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_intentFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "stargate",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IntentOFT__factory {
  static readonly abi = _abi;
  static createInterface(): IntentOFTInterface {
    return new utils.Interface(_abi) as IntentOFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IntentOFT {
    return new Contract(address, _abi, signerOrProvider) as IntentOFT;
  }
}
