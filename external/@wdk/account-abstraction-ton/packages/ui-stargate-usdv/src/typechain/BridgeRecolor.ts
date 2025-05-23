/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type MessagingFeeStruct = {
  nativeFee: PromiseOrValue<BigNumberish>;
  lzTokenFee: PromiseOrValue<BigNumberish>;
};

export type MessagingFeeStructOutput = [BigNumber, BigNumber] & {
  nativeFee: BigNumber;
  lzTokenFee: BigNumber;
};

export type MessagingReceiptStruct = {
  guid: PromiseOrValue<BytesLike>;
  nonce: PromiseOrValue<BigNumberish>;
  fee: MessagingFeeStruct;
};

export type MessagingReceiptStructOutput = [
  string,
  BigNumber,
  MessagingFeeStructOutput
] & { guid: string; nonce: BigNumber; fee: MessagingFeeStructOutput };

export declare namespace SwapRecolor {
  export type SwapParamStruct = {
    _fromToken: PromiseOrValue<string>;
    _fromTokenAmount: PromiseOrValue<BigNumberish>;
    _minUSDVOut: PromiseOrValue<BigNumberish>;
  };

  export type SwapParamStructOutput = [string, BigNumber, BigNumber] & {
    _fromToken: string;
    _fromTokenAmount: BigNumber;
    _minUSDVOut: BigNumber;
  };
}

export declare namespace IOFT {
  export type SendParamStruct = {
    to: PromiseOrValue<BytesLike>;
    amountLD: PromiseOrValue<BigNumberish>;
    minAmountLD: PromiseOrValue<BigNumberish>;
    dstEid: PromiseOrValue<BigNumberish>;
  };

  export type SendParamStructOutput = [string, BigNumber, BigNumber, number] & {
    to: string;
    amountLD: BigNumber;
    minAmountLD: BigNumber;
    dstEid: number;
  };
}

export interface BridgeRecolorInterface extends utils.Interface {
  functions: {
    "color()": FunctionFragment;
    "getSupportedTokens()": FunctionFragment;
    "getUSDVOut(address,uint256)": FunctionFragment;
    "getUSDVOutVerbose(address,uint256)": FunctionFragment;
    "lp()": FunctionFragment;
    "owner()": FunctionFragment;
    "recolorHelper()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setColor(uint32)": FunctionFragment;
    "setLpAddress(address)": FunctionFragment;
    "setToleranceBps(uint16)": FunctionFragment;
    "setUserRewardBps(uint16)": FunctionFragment;
    "swapRecolorSend((address,uint256,uint64),uint32,(bytes32,uint256,uint256,uint32),bytes,(uint256,uint256),address,bytes)": FunctionFragment;
    "swapRecolorTransfer((address,uint256,uint64),address,uint32)": FunctionFragment;
    "toleranceBps()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "usdv()": FunctionFragment;
    "userRewardBps()": FunctionFragment;
    "withdrawUSDV(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "color"
      | "getSupportedTokens"
      | "getUSDVOut"
      | "getUSDVOutVerbose"
      | "lp"
      | "owner"
      | "recolorHelper"
      | "renounceOwnership"
      | "setColor"
      | "setLpAddress"
      | "setToleranceBps"
      | "setUserRewardBps"
      | "swapRecolorSend"
      | "swapRecolorTransfer"
      | "toleranceBps"
      | "transferOwnership"
      | "usdv"
      | "userRewardBps"
      | "withdrawUSDV"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "color", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSupportedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUSDVOut",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUSDVOutVerbose",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "lp", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recolorHelper",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setColor",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLpAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setToleranceBps",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserRewardBps",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRecolorSend",
    values: [
      SwapRecolor.SwapParamStruct,
      PromiseOrValue<BigNumberish>,
      IOFT.SendParamStruct,
      PromiseOrValue<BytesLike>,
      MessagingFeeStruct,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRecolorTransfer",
    values: [
      SwapRecolor.SwapParamStruct,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "toleranceBps",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "usdv", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userRewardBps",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUSDV",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "color", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUSDVOut", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUSDVOutVerbose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recolorHelper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setColor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLpAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setToleranceBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserRewardBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapRecolorSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapRecolorTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toleranceBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdv", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userRewardBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUSDV",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface BridgeRecolor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeRecolorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    color(overrides?: CallOverrides): Promise<[number]>;

    getSupportedTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    getUSDVOut(
      _fromToken: PromiseOrValue<string>,
      _fromTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { usdvOut: BigNumber }>;

    getUSDVOutVerbose(
      _fromToken: PromiseOrValue<string>,
      _fromTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        usdvOut: BigNumber;
        fee: BigNumber;
        reward: BigNumber;
      }
    >;

    lp(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recolorHelper(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setColor(
      _color: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLpAddress(
      _lp: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setToleranceBps(
      _toleranceBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUserRewardBps(
      _userRewardBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapRecolorSend(
      _swapParam: SwapRecolor.SwapParamStruct,
      arg1: PromiseOrValue<BigNumberish>,
      _param: IOFT.SendParamStruct,
      _extraOptions: PromiseOrValue<BytesLike>,
      _msgFee: MessagingFeeStruct,
      _refundAddress: PromiseOrValue<string>,
      _composeMsg: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapRecolorTransfer(
      _swapParam: SwapRecolor.SwapParamStruct,
      _receiver: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    toleranceBps(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usdv(overrides?: CallOverrides): Promise<[string]>;

    userRewardBps(overrides?: CallOverrides): Promise<[number]>;

    withdrawUSDV(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  color(overrides?: CallOverrides): Promise<number>;

  getSupportedTokens(overrides?: CallOverrides): Promise<string[]>;

  getUSDVOut(
    _fromToken: PromiseOrValue<string>,
    _fromTokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUSDVOutVerbose(
    _fromToken: PromiseOrValue<string>,
    _fromTokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      usdvOut: BigNumber;
      fee: BigNumber;
      reward: BigNumber;
    }
  >;

  lp(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  recolorHelper(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setColor(
    _color: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLpAddress(
    _lp: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setToleranceBps(
    _toleranceBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUserRewardBps(
    _userRewardBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapRecolorSend(
    _swapParam: SwapRecolor.SwapParamStruct,
    arg1: PromiseOrValue<BigNumberish>,
    _param: IOFT.SendParamStruct,
    _extraOptions: PromiseOrValue<BytesLike>,
    _msgFee: MessagingFeeStruct,
    _refundAddress: PromiseOrValue<string>,
    _composeMsg: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapRecolorTransfer(
    _swapParam: SwapRecolor.SwapParamStruct,
    _receiver: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  toleranceBps(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usdv(overrides?: CallOverrides): Promise<string>;

  userRewardBps(overrides?: CallOverrides): Promise<number>;

  withdrawUSDV(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    color(overrides?: CallOverrides): Promise<number>;

    getSupportedTokens(overrides?: CallOverrides): Promise<string[]>;

    getUSDVOut(
      _fromToken: PromiseOrValue<string>,
      _fromTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUSDVOutVerbose(
      _fromToken: PromiseOrValue<string>,
      _fromTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        usdvOut: BigNumber;
        fee: BigNumber;
        reward: BigNumber;
      }
    >;

    lp(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    recolorHelper(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setColor(
      _color: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLpAddress(
      _lp: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setToleranceBps(
      _toleranceBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserRewardBps(
      _userRewardBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapRecolorSend(
      _swapParam: SwapRecolor.SwapParamStruct,
      arg1: PromiseOrValue<BigNumberish>,
      _param: IOFT.SendParamStruct,
      _extraOptions: PromiseOrValue<BytesLike>,
      _msgFee: MessagingFeeStruct,
      _refundAddress: PromiseOrValue<string>,
      _composeMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, MessagingReceiptStructOutput] & {
        usdvOut: BigNumber;
        msgReceipt: MessagingReceiptStructOutput;
      }
    >;

    swapRecolorTransfer(
      _swapParam: SwapRecolor.SwapParamStruct,
      _receiver: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toleranceBps(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    usdv(overrides?: CallOverrides): Promise<string>;

    userRewardBps(overrides?: CallOverrides): Promise<number>;

    withdrawUSDV(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    color(overrides?: CallOverrides): Promise<BigNumber>;

    getSupportedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getUSDVOut(
      _fromToken: PromiseOrValue<string>,
      _fromTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUSDVOutVerbose(
      _fromToken: PromiseOrValue<string>,
      _fromTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lp(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recolorHelper(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setColor(
      _color: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLpAddress(
      _lp: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setToleranceBps(
      _toleranceBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUserRewardBps(
      _userRewardBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapRecolorSend(
      _swapParam: SwapRecolor.SwapParamStruct,
      arg1: PromiseOrValue<BigNumberish>,
      _param: IOFT.SendParamStruct,
      _extraOptions: PromiseOrValue<BytesLike>,
      _msgFee: MessagingFeeStruct,
      _refundAddress: PromiseOrValue<string>,
      _composeMsg: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapRecolorTransfer(
      _swapParam: SwapRecolor.SwapParamStruct,
      _receiver: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    toleranceBps(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usdv(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardBps(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawUSDV(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    color(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSupportedTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUSDVOut(
      _fromToken: PromiseOrValue<string>,
      _fromTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUSDVOutVerbose(
      _fromToken: PromiseOrValue<string>,
      _fromTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recolorHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setColor(
      _color: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLpAddress(
      _lp: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setToleranceBps(
      _toleranceBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUserRewardBps(
      _userRewardBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapRecolorSend(
      _swapParam: SwapRecolor.SwapParamStruct,
      arg1: PromiseOrValue<BigNumberish>,
      _param: IOFT.SendParamStruct,
      _extraOptions: PromiseOrValue<BytesLike>,
      _msgFee: MessagingFeeStruct,
      _refundAddress: PromiseOrValue<string>,
      _composeMsg: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapRecolorTransfer(
      _swapParam: SwapRecolor.SwapParamStruct,
      _receiver: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    toleranceBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usdv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawUSDV(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
