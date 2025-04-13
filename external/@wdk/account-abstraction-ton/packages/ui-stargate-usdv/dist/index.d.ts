import { Event, EventFilter, BaseContract, Signer, CallOverrides, BigNumberish, BigNumber, Overrides, ContractTransaction, BytesLike, PayableOverrides, PopulatedTransaction, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { BridgeApi, GetOptionsInput, BridgeOptions, TransferInput, GetMessageFeeInput, GetExtraGasInput, GetOutputInput, BridgeOutput, GetLimitInput, GetAllowanceInput, ApproveInput, GetDurationInput, GetUnclaimedInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { Token, ChainKey, AdapterParams, FeeQuote, CurrencyAmount, Transaction, Currency } from '@layerzerolabs/ui-core';
import { ProviderFactory, ERC20__api } from '@layerzerolabs/ui-evm';
import z from 'zod';

interface TypedEvent<TArgsArray extends Array<any> = any, TArgsObject = any> extends Event {
    args: TArgsArray & TArgsObject;
}
interface TypedEventFilter<_TEvent extends TypedEvent> extends EventFilter {
}
interface TypedListener<TEvent extends TypedEvent> {
    (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void;
}
type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never;
interface OnEvent<TRes> {
    <TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>, listener: TypedListener<TEvent>): TRes;
    (eventName: string, listener: Listener): TRes;
}
type PromiseOrValue<T> = T | Promise<T>;

type MessagingFeeStruct$4 = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStructOutput$3 = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    lzTokenFee: BigNumber;
};
type MessagingReceiptStructOutput$3 = [
    string,
    BigNumber,
    MessagingFeeStructOutput$3
] & {
    guid: string;
    nonce: BigNumber;
    fee: MessagingFeeStructOutput$3;
};
declare namespace SwapRecolor {
    type SwapParamStruct = {
        _fromToken: PromiseOrValue<string>;
        _fromTokenAmount: PromiseOrValue<BigNumberish>;
        _minUSDVOut: PromiseOrValue<BigNumberish>;
    };
    type SwapParamStructOutput = [string, BigNumber, BigNumber] & {
        _fromToken: string;
        _fromTokenAmount: BigNumber;
        _minUSDVOut: BigNumber;
    };
}
declare namespace IOFT$2 {
    type SendParamStruct = {
        to: PromiseOrValue<BytesLike>;
        amountLD: PromiseOrValue<BigNumberish>;
        minAmountLD: PromiseOrValue<BigNumberish>;
        dstEid: PromiseOrValue<BigNumberish>;
    };
    type SendParamStructOutput = [string, BigNumber, BigNumber, number] & {
        to: string;
        amountLD: BigNumber;
        minAmountLD: BigNumber;
        dstEid: number;
    };
}
interface BridgeRecolorInterface extends utils.Interface {
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
    getFunction(nameOrSignatureOrTopic: "color" | "getSupportedTokens" | "getUSDVOut" | "getUSDVOutVerbose" | "lp" | "owner" | "recolorHelper" | "renounceOwnership" | "setColor" | "setLpAddress" | "setToleranceBps" | "setUserRewardBps" | "swapRecolorSend" | "swapRecolorTransfer" | "toleranceBps" | "transferOwnership" | "usdv" | "userRewardBps" | "withdrawUSDV"): FunctionFragment;
    encodeFunctionData(functionFragment: "color", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSupportedTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUSDVOut", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUSDVOutVerbose", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "lp", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "recolorHelper", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setColor", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setLpAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setToleranceBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUserRewardBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "swapRecolorSend", values: [
        SwapRecolor.SwapParamStruct,
        PromiseOrValue<BigNumberish>,
        IOFT$2.SendParamStruct,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct$4,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "swapRecolorTransfer", values: [
        SwapRecolor.SwapParamStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "toleranceBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "usdv", values?: undefined): string;
    encodeFunctionData(functionFragment: "userRewardBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawUSDV", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "color", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupportedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUSDVOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUSDVOutVerbose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recolorHelper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setColor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLpAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setToleranceBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserRewardBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapRecolorSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapRecolorTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toleranceBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userRewardBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawUSDV", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
interface OwnershipTransferredEventObject$2 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$2 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$2>;
type OwnershipTransferredEventFilter$2 = TypedEventFilter<OwnershipTransferredEvent$2>;
interface BridgeRecolor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeRecolorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        color(overrides?: CallOverrides): Promise<[number]>;
        getSupportedTokens(overrides?: CallOverrides): Promise<[string[]] & {
            tokens: string[];
        }>;
        getUSDVOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            usdvOut: BigNumber;
        }>;
        getUSDVOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            usdvOut: BigNumber;
            fee: BigNumber;
            reward: BigNumber;
        }>;
        lp(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        recolorHelper(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setColor(_color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLpAddress(_lp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setToleranceBps(_toleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUserRewardBps(_userRewardBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapRecolorSend(_swapParam: SwapRecolor.SwapParamStruct, arg1: PromiseOrValue<BigNumberish>, _param: IOFT$2.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$4, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapRecolorTransfer(_swapParam: SwapRecolor.SwapParamStruct, _receiver: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        toleranceBps(overrides?: CallOverrides): Promise<[number]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        usdv(overrides?: CallOverrides): Promise<[string]>;
        userRewardBps(overrides?: CallOverrides): Promise<[number]>;
        withdrawUSDV(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    color(overrides?: CallOverrides): Promise<number>;
    getSupportedTokens(overrides?: CallOverrides): Promise<string[]>;
    getUSDVOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getUSDVOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        usdvOut: BigNumber;
        fee: BigNumber;
        reward: BigNumber;
    }>;
    lp(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    recolorHelper(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setColor(_color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLpAddress(_lp: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setToleranceBps(_toleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUserRewardBps(_userRewardBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapRecolorSend(_swapParam: SwapRecolor.SwapParamStruct, arg1: PromiseOrValue<BigNumberish>, _param: IOFT$2.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$4, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapRecolorTransfer(_swapParam: SwapRecolor.SwapParamStruct, _receiver: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    toleranceBps(overrides?: CallOverrides): Promise<number>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    usdv(overrides?: CallOverrides): Promise<string>;
    userRewardBps(overrides?: CallOverrides): Promise<number>;
    withdrawUSDV(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        color(overrides?: CallOverrides): Promise<number>;
        getSupportedTokens(overrides?: CallOverrides): Promise<string[]>;
        getUSDVOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUSDVOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            usdvOut: BigNumber;
            fee: BigNumber;
            reward: BigNumber;
        }>;
        lp(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        recolorHelper(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setColor(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setLpAddress(_lp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setToleranceBps(_toleranceBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUserRewardBps(_userRewardBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapRecolorSend(_swapParam: SwapRecolor.SwapParamStruct, arg1: PromiseOrValue<BigNumberish>, _param: IOFT$2.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$4, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            MessagingReceiptStructOutput$3
        ] & {
            usdvOut: BigNumber;
            msgReceipt: MessagingReceiptStructOutput$3;
        }>;
        swapRecolorTransfer(_swapParam: SwapRecolor.SwapParamStruct, _receiver: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        toleranceBps(overrides?: CallOverrides): Promise<number>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        usdv(overrides?: CallOverrides): Promise<string>;
        userRewardBps(overrides?: CallOverrides): Promise<number>;
        withdrawUSDV(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
    };
    estimateGas: {
        color(overrides?: CallOverrides): Promise<BigNumber>;
        getSupportedTokens(overrides?: CallOverrides): Promise<BigNumber>;
        getUSDVOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUSDVOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lp(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        recolorHelper(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setColor(_color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLpAddress(_lp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setToleranceBps(_toleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUserRewardBps(_userRewardBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapRecolorSend(_swapParam: SwapRecolor.SwapParamStruct, arg1: PromiseOrValue<BigNumberish>, _param: IOFT$2.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$4, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapRecolorTransfer(_swapParam: SwapRecolor.SwapParamStruct, _receiver: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        toleranceBps(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        usdv(overrides?: CallOverrides): Promise<BigNumber>;
        userRewardBps(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawUSDV(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        color(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupportedTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUSDVOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUSDVOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recolorHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setColor(_color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLpAddress(_lp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setToleranceBps(_toleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUserRewardBps(_userRewardBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapRecolorSend(_swapParam: SwapRecolor.SwapParamStruct, arg1: PromiseOrValue<BigNumberish>, _param: IOFT$2.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$4, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapRecolorTransfer(_swapParam: SwapRecolor.SwapParamStruct, _receiver: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        toleranceBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        usdv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userRewardBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawUSDV(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

type OriginStruct = {
    srcEid: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    nonce: PromiseOrValue<BigNumberish>;
};
type InboundPacketStruct = {
    origin: OriginStruct;
    dstEid: PromiseOrValue<BigNumberish>;
    receiver: PromiseOrValue<string>;
    guid: PromiseOrValue<BytesLike>;
    message: PromiseOrValue<BytesLike>;
};
type DeltaStruct$2 = {
    color: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStruct$3 = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStructOutput$2 = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    lzTokenFee: BigNumber;
};
type MessagingReceiptStructOutput$2 = [
    string,
    BigNumber,
    MessagingFeeStructOutput$2
] & {
    guid: string;
    nonce: BigNumber;
    fee: MessagingFeeStructOutput$2;
};
declare namespace IMessaging {
    type SendParamStruct = {
        dstEid: PromiseOrValue<BigNumberish>;
        to: PromiseOrValue<BytesLike>;
        color: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        theta: PromiseOrValue<BigNumberish>;
    };
    type SendParamStructOutput = [
        number,
        string,
        number,
        BigNumber,
        BigNumber
    ] & {
        dstEid: number;
        to: string;
        color: number;
        amount: BigNumber;
        theta: BigNumber;
    };
}
interface MessagingV1Interface extends utils.Interface {
    functions: {
        "_simulateLzReceive(((uint32,bytes32,uint64),uint32,address,bytes32,bytes)[])": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isMainChain()": FunctionFragment;
        "isPeer(uint32,bytes32)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "lzReceiveAndRevert(((uint32,bytes32,uint64),uint32,address,bytes32,bytes)[])": FunctionFragment;
        "mainChainEid()": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "oapp()": FunctionFragment;
        "owner()": FunctionFragment;
        "perColorExtraGasLookup(uint32,uint8)": FunctionFragment;
        "precrime()": FunctionFragment;
        "quoteRemintFee((uint32,int64)[],bytes,bool)": FunctionFragment;
        "quoteSendFee(uint32,bytes,bool,bytes)": FunctionFragment;
        "quoteSyncDeltaFee(uint32,(uint32,int64)[],bytes,bool)": FunctionFragment;
        "remint((uint32,int64)[],uint32,uint64,uint64,bytes,(uint256,uint256),address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "send((uint32,bytes32,uint32,uint64,uint64),bytes,(uint256,uint256),address,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPerColorExtraGas(uint32,uint8,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "syncDelta(uint32,(uint32,int64)[],bytes,(uint256,uint256),address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "usdv()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_simulateLzReceive" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isMainChain" | "isPeer" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "lzReceiveAndRevert" | "mainChainEid" | "minDstGasLookup" | "nonblockingLzReceive" | "oapp" | "owner" | "perColorExtraGasLookup" | "precrime" | "quoteRemintFee" | "quoteSendFee" | "quoteSyncDeltaFee" | "remint" | "renounceOwnership" | "retryMessage" | "send" | "setConfig" | "setMinDstGas" | "setPerColorExtraGas" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "syncDelta" | "transferOwnership" | "trustedRemoteLookup" | "usdv"): FunctionFragment;
    encodeFunctionData(functionFragment: "_simulateLzReceive", values: [InboundPacketStruct[]]): string;
    encodeFunctionData(functionFragment: "failedMessages", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isMainChain", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPeer", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "lzEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "lzReceiveAndRevert", values: [InboundPacketStruct[]]): string;
    encodeFunctionData(functionFragment: "mainChainEid", values?: undefined): string;
    encodeFunctionData(functionFragment: "minDstGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nonblockingLzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "oapp", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "perColorExtraGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteRemintFee", values: [DeltaStruct$2[], PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "quoteSendFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "quoteSyncDeltaFee", values: [
        PromiseOrValue<BigNumberish>,
        DeltaStruct$2[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "remint", values: [
        DeltaStruct$2[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct$3,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [
        IMessaging.SendParamStruct,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct$3,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setMinDstGas", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setPerColorExtraGas", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "syncDelta", values: [
        PromiseOrValue<BigNumberish>,
        DeltaStruct$2[],
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct$3,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "usdv", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_simulateLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMainChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPeer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceiveAndRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mainChainEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oapp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "perColorExtraGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRemintFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSyncDeltaFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPerColorExtraGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdv", data: BytesLike): Result;
    events: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPerColorExtraGas(uint32,uint8,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPerColorExtraGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
}
interface MessageFailedEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject>;
type MessageFailedEventFilter = TypedEventFilter<MessageFailedEvent>;
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
interface RetryMessageSuccessEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject>;
type RetryMessageSuccessEventFilter = TypedEventFilter<RetryMessageSuccessEvent>;
interface SetMinDstGasEventObject {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject>;
type SetMinDstGasEventFilter = TypedEventFilter<SetMinDstGasEvent>;
interface SetPerColorExtraGasEventObject {
    dstEid: number;
    msgType: number;
    extraGas: BigNumber;
}
type SetPerColorExtraGasEvent = TypedEvent<[
    number,
    number,
    BigNumber
], SetPerColorExtraGasEventObject>;
type SetPerColorExtraGasEventFilter = TypedEventFilter<SetPerColorExtraGasEvent>;
interface SetPrecrimeEventObject {
    precrime: string;
}
type SetPrecrimeEvent = TypedEvent<[string], SetPrecrimeEventObject>;
type SetPrecrimeEventFilter = TypedEventFilter<SetPrecrimeEvent>;
interface SetTrustedRemoteEventObject {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject>;
type SetTrustedRemoteEventFilter = TypedEventFilter<SetTrustedRemoteEvent>;
interface SetTrustedRemoteAddressEventObject {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject>;
type SetTrustedRemoteAddressEventFilter = TypedEventFilter<SetTrustedRemoteAddressEvent>;
interface MessagingV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MessagingV1Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _simulateLzReceive(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isMainChain(overrides?: CallOverrides): Promise<[boolean]>;
        isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mainChainEid(overrides?: CallOverrides): Promise<[number]>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        oapp(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        perColorExtraGasLookup(dstEid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            extraGas: BigNumber;
        }>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        quoteRemintFee(_deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSendFee(_dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        remint(_deltas: DeltaStruct$2[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg5: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(_param: IMessaging.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, arg2: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPerColorExtraGas(_dstEid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        syncDelta(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        usdv(overrides?: CallOverrides): Promise<[string]>;
    };
    _simulateLzReceive(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isMainChain(overrides?: CallOverrides): Promise<boolean>;
    isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mainChainEid(overrides?: CallOverrides): Promise<number>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    oapp(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    perColorExtraGasLookup(dstEid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    precrime(overrides?: CallOverrides): Promise<string>;
    quoteRemintFee(_deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    }>;
    quoteSendFee(_dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    }>;
    quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    }>;
    remint(_deltas: DeltaStruct$2[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg5: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(_param: IMessaging.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, arg2: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPerColorExtraGas(_dstEid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    syncDelta(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    usdv(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _simulateLzReceive(_packets: InboundPacketStruct[], overrides?: CallOverrides): Promise<void>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isMainChain(overrides?: CallOverrides): Promise<boolean>;
        isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: CallOverrides): Promise<void>;
        mainChainEid(overrides?: CallOverrides): Promise<number>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        oapp(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        perColorExtraGasLookup(dstEid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<string>;
        quoteRemintFee(_deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSendFee(_dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        remint(_deltas: DeltaStruct$2[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg5: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput$2>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        send(_param: IMessaging.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, arg2: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput$2>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPerColorExtraGas(_dstEid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        syncDelta(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput$2>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        usdv(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        "SetPerColorExtraGas(uint32,uint8,uint256)"(dstEid?: null, msgType?: null, extraGas?: null): SetPerColorExtraGasEventFilter;
        SetPerColorExtraGas(dstEid?: null, msgType?: null, extraGas?: null): SetPerColorExtraGasEventFilter;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
    };
    estimateGas: {
        _simulateLzReceive(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isMainChain(overrides?: CallOverrides): Promise<BigNumber>;
        isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mainChainEid(overrides?: CallOverrides): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        oapp(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        perColorExtraGasLookup(dstEid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        quoteRemintFee(_deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSendFee(_dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        remint(_deltas: DeltaStruct$2[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg5: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(_param: IMessaging.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, arg2: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPerColorExtraGas(_dstEid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        syncDelta(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        usdv(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _simulateLzReceive(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMainChain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mainChainEid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        oapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        perColorExtraGasLookup(dstEid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRemintFee(_deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSendFee(_dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remint(_deltas: DeltaStruct$2[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, arg5: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(_param: IMessaging.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, arg2: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPerColorExtraGas(_dstEid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        syncDelta(_dstEid: PromiseOrValue<BigNumberish>, _deltas: DeltaStruct$2[], _extraOptions: PromiseOrValue<BytesLike>, arg3: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        usdv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

type MessagingFeeStruct$2 = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
declare namespace IMinter {
    type SwapParamStruct = {
        fromToken: PromiseOrValue<string>;
        fromTokenAmount: PromiseOrValue<BigNumberish>;
        minUSDVOut: PromiseOrValue<BigNumberish>;
    };
    type SwapParamStructOutput = [string, BigNumber, BigNumber] & {
        fromToken: string;
        fromTokenAmount: BigNumber;
        minUSDVOut: BigNumber;
    };
}
interface MinterProxyInterface extends utils.Interface {
    functions: {
        "addMinterCodeHash(uint256)": FunctionFragment;
        "colorToMinter(uint32)": FunctionFragment;
        "getMinterCodeHashes()": FunctionFragment;
        "getSupportedFromTokens(uint32)": FunctionFragment;
        "getSwapToUSDVAmountOut(address,uint256,uint32)": FunctionFragment;
        "getSwapToUSDVAmountOutVerbose(address,uint256,uint32)": FunctionFragment;
        "isRegistered(address)": FunctionFragment;
        "minterToColor(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "registerMinter(address)": FunctionFragment;
        "removeMinterCodeHash(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setToSTBTLp(address)": FunctionFragment;
        "swapToUSDV((address,uint256,uint64),address,uint32)": FunctionFragment;
        "swapToUSDVAndSend((address,uint256,uint64),bytes32,uint32,bytes,(uint256,uint256),address,uint32)": FunctionFragment;
        "toSTBTLp()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unregisterMinter(address)": FunctionFragment;
        "usdv()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addMinterCodeHash" | "colorToMinter" | "getMinterCodeHashes" | "getSupportedFromTokens" | "getSwapToUSDVAmountOut" | "getSwapToUSDVAmountOutVerbose" | "isRegistered" | "minterToColor" | "owner" | "registerMinter" | "removeMinterCodeHash" | "renounceOwnership" | "setToSTBTLp" | "swapToUSDV" | "swapToUSDVAndSend" | "toSTBTLp" | "transferOwnership" | "unregisterMinter" | "usdv"): FunctionFragment;
    encodeFunctionData(functionFragment: "addMinterCodeHash", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "colorToMinter", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMinterCodeHashes", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSupportedFromTokens", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSwapToUSDVAmountOut", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getSwapToUSDVAmountOutVerbose", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "isRegistered", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "minterToColor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerMinter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeMinterCodeHash", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setToSTBTLp", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapToUSDV", values: [
        IMinter.SwapParamStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapToUSDVAndSend", values: [
        IMinter.SwapParamStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct$2,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "toSTBTLp", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unregisterMinter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "usdv", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addMinterCodeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "colorToMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinterCodeHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupportedFromTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapToUSDVAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapToUSDVAmountOutVerbose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minterToColor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeMinterCodeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setToSTBTLp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapToUSDV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapToUSDVAndSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toSTBTLp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdv", data: BytesLike): Result;
    events: {
        "AddedMinterCodeHash(uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RegisteredMinter(address,uint32)": EventFragment;
        "RemovedMinterCodeHash(uint256)": EventFragment;
        "SetToSTBTLp(address)": EventFragment;
        "UnregisteredMinter(address,uint32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedMinterCodeHash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegisteredMinter"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedMinterCodeHash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetToSTBTLp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnregisteredMinter"): EventFragment;
}
interface AddedMinterCodeHashEventObject {
    hash: BigNumber;
}
type AddedMinterCodeHashEvent = TypedEvent<[
    BigNumber
], AddedMinterCodeHashEventObject>;
type AddedMinterCodeHashEventFilter = TypedEventFilter<AddedMinterCodeHashEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface RegisteredMinterEventObject {
    minter: string;
    color: number;
}
type RegisteredMinterEvent = TypedEvent<[
    string,
    number
], RegisteredMinterEventObject>;
type RegisteredMinterEventFilter = TypedEventFilter<RegisteredMinterEvent>;
interface RemovedMinterCodeHashEventObject {
    hash: BigNumber;
}
type RemovedMinterCodeHashEvent = TypedEvent<[
    BigNumber
], RemovedMinterCodeHashEventObject>;
type RemovedMinterCodeHashEventFilter = TypedEventFilter<RemovedMinterCodeHashEvent>;
interface SetToSTBTLpEventObject {
    toSTBTLp: string;
}
type SetToSTBTLpEvent = TypedEvent<[string], SetToSTBTLpEventObject>;
type SetToSTBTLpEventFilter = TypedEventFilter<SetToSTBTLpEvent>;
interface UnregisteredMinterEventObject {
    minter: string;
    color: number;
}
type UnregisteredMinterEvent = TypedEvent<[
    string,
    number
], UnregisteredMinterEventObject>;
type UnregisteredMinterEventFilter = TypedEventFilter<UnregisteredMinterEvent>;
interface MinterProxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MinterProxyInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        colorToMinter(color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            minter: string;
        }>;
        getMinterCodeHashes(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getSupportedFromTokens(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            tokens: string[];
        }>;
        getSwapToUSDVAmountOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            usdvOut: BigNumber;
        }>;
        getSwapToUSDVAmountOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            usdvOut: BigNumber;
            fee: BigNumber;
            reward: BigNumber;
        }>;
        isRegistered(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        minterToColor(minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number] & {
            color: number;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        registerMinter(_minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setToSTBTLp(_toSTBTLp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapToUSDV(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapToUSDVAndSend(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<BytesLike>, _dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        toSTBTLp(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unregisterMinter(_minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        usdv(overrides?: CallOverrides): Promise<[string]>;
    };
    addMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    colorToMinter(color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getMinterCodeHashes(overrides?: CallOverrides): Promise<BigNumber[]>;
    getSupportedFromTokens(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getSwapToUSDVAmountOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getSwapToUSDVAmountOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        usdvOut: BigNumber;
        fee: BigNumber;
        reward: BigNumber;
    }>;
    isRegistered(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    minterToColor(minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    owner(overrides?: CallOverrides): Promise<string>;
    registerMinter(_minter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setToSTBTLp(_toSTBTLp: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapToUSDV(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapToUSDVAndSend(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<BytesLike>, _dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    toSTBTLp(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unregisterMinter(_minter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    usdv(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        colorToMinter(color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getMinterCodeHashes(overrides?: CallOverrides): Promise<BigNumber[]>;
        getSupportedFromTokens(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getSwapToUSDVAmountOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapToUSDVAmountOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            usdvOut: BigNumber;
            fee: BigNumber;
            reward: BigNumber;
        }>;
        isRegistered(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        minterToColor(minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        owner(overrides?: CallOverrides): Promise<string>;
        registerMinter(_minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setToSTBTLp(_toSTBTLp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        swapToUSDV(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        swapToUSDVAndSend(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<BytesLike>, _dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        toSTBTLp(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unregisterMinter(_minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        usdv(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddedMinterCodeHash(uint256)"(hash?: null): AddedMinterCodeHashEventFilter;
        AddedMinterCodeHash(hash?: null): AddedMinterCodeHashEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "RegisteredMinter(address,uint32)"(minter?: null, color?: null): RegisteredMinterEventFilter;
        RegisteredMinter(minter?: null, color?: null): RegisteredMinterEventFilter;
        "RemovedMinterCodeHash(uint256)"(hash?: null): RemovedMinterCodeHashEventFilter;
        RemovedMinterCodeHash(hash?: null): RemovedMinterCodeHashEventFilter;
        "SetToSTBTLp(address)"(toSTBTLp?: null): SetToSTBTLpEventFilter;
        SetToSTBTLp(toSTBTLp?: null): SetToSTBTLpEventFilter;
        "UnregisteredMinter(address,uint32)"(minter?: null, color?: null): UnregisteredMinterEventFilter;
        UnregisteredMinter(minter?: null, color?: null): UnregisteredMinterEventFilter;
    };
    estimateGas: {
        addMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        colorToMinter(color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinterCodeHashes(overrides?: CallOverrides): Promise<BigNumber>;
        getSupportedFromTokens(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapToUSDVAmountOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapToUSDVAmountOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isRegistered(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        minterToColor(minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        registerMinter(_minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setToSTBTLp(_toSTBTLp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapToUSDV(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapToUSDVAndSend(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<BytesLike>, _dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        toSTBTLp(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unregisterMinter(_minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        usdv(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        colorToMinter(color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinterCodeHashes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupportedFromTokens(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapToUSDVAmountOut(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapToUSDVAmountOutVerbose(_fromToken: PromiseOrValue<string>, _fromTokenAmount: PromiseOrValue<BigNumberish>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRegistered(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minterToColor(minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerMinter(_minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeMinterCodeHash(_hash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setToSTBTLp(_toSTBTLp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapToUSDV(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapToUSDVAndSend(_param: IMinter.SwapParamStruct, _usdvReceiver: PromiseOrValue<BytesLike>, _dstEid: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, _mintColor: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        toSTBTLp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unregisterMinter(_minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        usdv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

type DeltaStruct$1 = {
    color: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
};
type DeltaStructOutput$1 = [number, BigNumber] & {
    color: number;
    amount: BigNumber;
};
type MessagingFeeStruct$1 = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStructOutput$1 = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    lzTokenFee: BigNumber;
};
type MessagingReceiptStructOutput$1 = [
    string,
    BigNumber,
    MessagingFeeStructOutput$1
] & {
    guid: string;
    nonce: BigNumber;
    fee: MessagingFeeStructOutput$1;
};
declare namespace Colors$1 {
    type ColorStateStruct = {
        colored: PromiseOrValue<BigNumberish>;
        delta: PromiseOrValue<BigNumberish>;
        lastDelta: PromiseOrValue<BigNumberish>;
        lastBlockNumber: PromiseOrValue<BigNumberish>;
        known: PromiseOrValue<boolean>;
    };
    type ColorStateStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
    ] & {
        colored: BigNumber;
        delta: BigNumber;
        lastDelta: BigNumber;
        lastBlockNumber: number;
        known: boolean;
    };
}
declare namespace IOFT$1 {
    type SendParamStruct = {
        to: PromiseOrValue<BytesLike>;
        amountLD: PromiseOrValue<BigNumberish>;
        minAmountLD: PromiseOrValue<BigNumberish>;
        dstEid: PromiseOrValue<BigNumberish>;
    };
    type SendParamStructOutput = [string, BigNumber, BigNumber, number] & {
        to: string;
        amountLD: BigNumber;
        minAmountLD: BigNumber;
        dstEid: number;
    };
}
interface USDVMainInterface extends utils.Interface {
    functions: {
        "admin()": FunctionFragment;
        "implementation()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "blacklist(address,bool)": FunctionFragment;
        "burn(address,uint64,uint32[])": FunctionFragment;
        "colorStateOf(uint32)": FunctionFragment;
        "colorers(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "getDeltas(uint32,uint32)": FunctionFragment;
        "getDeltas(uint32[])": FunctionFragment;
        "getRole(uint8)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "maxKnownColor()": FunctionFragment;
        "mint(address,uint64,uint32)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "paused()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "quoteSendFee((bytes32,uint256,uint256,uint32),bytes,bool,bytes)": FunctionFragment;
        "quoteSyncDeltaFee(uint32,uint32,bytes,bool)": FunctionFragment;
        "remint(uint32,uint64,uint32[],uint64)": FunctionFragment;
        "remintAck((uint32,int64)[],uint32,uint64,uint64)": FunctionFragment;
        "send((bytes32,uint256,uint256,uint32),bytes,(uint256,uint256),address,bytes)": FunctionFragment;
        "sendAck(bytes32,address,uint32,uint64,uint64)": FunctionFragment;
        "setColorer(address,address)": FunctionFragment;
        "setDefaultColor(address,uint32)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "setRole(uint8,address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "syncDelta(uint32,uint64,uint32[],uint64,bytes,(uint256,uint256),address)": FunctionFragment;
        "syncDeltaAck((uint32,int64)[])": FunctionFragment;
        "token()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "userStates(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "admin" | "implementation" | "upgradeTo" | "upgradeToAndCall" | "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "blacklist" | "burn" | "colorStateOf" | "colorers" | "decimals" | "decreaseAllowance" | "eip712Domain" | "getDeltas(uint32,uint32)" | "getDeltas(uint32[])" | "getRole" | "increaseAllowance" | "initialize" | "maxKnownColor" | "mint" | "name" | "nonces" | "paused" | "permit" | "quoteSendFee" | "quoteSyncDeltaFee" | "remint" | "remintAck" | "send" | "sendAck" | "setColorer" | "setDefaultColor" | "setPause" | "setRole" | "symbol" | "syncDelta" | "syncDeltaAck" | "token" | "totalSupply" | "transfer" | "transferFrom" | "userStates"): FunctionFragment;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "blacklist", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "colorStateOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "colorers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDeltas(uint32,uint32)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDeltas(uint32[])", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getRole", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxKnownColor", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "quoteSendFee", values: [
        IOFT$1.SendParamStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "quoteSyncDeltaFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "remint", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "remintAck", values: [
        DeltaStruct$1[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [
        IOFT$1.SendParamStruct,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct$1,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendAck", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setColorer", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDefaultColor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setRole", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "syncDelta", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct$1,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "syncDeltaAck", values: [DeltaStruct$1[]]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "userStates", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "colorStateOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "colorers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeltas(uint32,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeltas(uint32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxKnownColor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSyncDeltaFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remintAck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendAck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setColorer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultColor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncDeltaAck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userStates", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "EIP712DomainChanged()": EventFragment;
        "Initialized(uint8)": EventFragment;
        "ReceiveOFT(bytes32,address,uint256)": EventFragment;
        "Reminted(tuple[],uint64)": EventFragment;
        "SendOFT(bytes32,address,uint256,bytes)": EventFragment;
        "SetBlacklist(address,bool)": EventFragment;
        "SetColorer(address,address,address)": EventFragment;
        "SetDefaultColor(address,address,uint32)": EventFragment;
        "SetInspector(address)": EventFragment;
        "SetPause(bool)": EventFragment;
        "SetRole(uint8,address)": EventFragment;
        "Synced(bytes32,tuple[])": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveOFT"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Reminted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendOFT"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBlacklist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetColorer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDefaultColor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetInspector"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPause"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetRole"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Synced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface AdminChangedEventObject$1 {
    previousAdmin: string;
    newAdmin: string;
}
type AdminChangedEvent$1 = TypedEvent<[
    string,
    string
], AdminChangedEventObject$1>;
type AdminChangedEventFilter$1 = TypedEventFilter<AdminChangedEvent$1>;
interface BeaconUpgradedEventObject$1 {
    beacon: string;
}
type BeaconUpgradedEvent$1 = TypedEvent<[
    string
], BeaconUpgradedEventObject$1>;
type BeaconUpgradedEventFilter$1 = TypedEventFilter<BeaconUpgradedEvent$1>;
interface UpgradedEventObject$1 {
    implementation: string;
}
type UpgradedEvent$1 = TypedEvent<[string], UpgradedEventObject$1>;
type UpgradedEventFilter$1 = TypedEventFilter<UpgradedEvent$1>;
interface ApprovalEventObject$1 {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$1>;
type ApprovalEventFilter$1 = TypedEventFilter<ApprovalEvent$1>;
interface EIP712DomainChangedEventObject$1 {
}
type EIP712DomainChangedEvent$1 = TypedEvent<[
], EIP712DomainChangedEventObject$1>;
type EIP712DomainChangedEventFilter$1 = TypedEventFilter<EIP712DomainChangedEvent$1>;
interface InitializedEventObject$1 {
    version: number;
}
type InitializedEvent$1 = TypedEvent<[number], InitializedEventObject$1>;
type InitializedEventFilter$1 = TypedEventFilter<InitializedEvent$1>;
interface ReceiveOFTEventObject$1 {
    _guid: string;
    _toAddress: string;
    _amountLD: BigNumber;
}
type ReceiveOFTEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], ReceiveOFTEventObject$1>;
type ReceiveOFTEventFilter$1 = TypedEventFilter<ReceiveOFTEvent$1>;
interface RemintedEventObject {
    deltas: DeltaStructOutput$1[];
    remintFee: BigNumber;
}
type RemintedEvent = TypedEvent<[
    DeltaStructOutput$1[],
    BigNumber
], RemintedEventObject>;
type RemintedEventFilter = TypedEventFilter<RemintedEvent>;
interface SendOFTEventObject$1 {
    _guid: string;
    _fromAddress: string;
    _amountLD: BigNumber;
    _composeMsg: string;
}
type SendOFTEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], SendOFTEventObject$1>;
type SendOFTEventFilter$1 = TypedEventFilter<SendOFTEvent$1>;
interface SetBlacklistEventObject$1 {
    user: string;
    isBlacklisted: boolean;
}
type SetBlacklistEvent$1 = TypedEvent<[
    string,
    boolean
], SetBlacklistEventObject$1>;
type SetBlacklistEventFilter$1 = TypedEventFilter<SetBlacklistEvent$1>;
interface SetColorerEventObject$1 {
    caller: string;
    user: string;
    colorer: string;
}
type SetColorerEvent$1 = TypedEvent<[
    string,
    string,
    string
], SetColorerEventObject$1>;
type SetColorerEventFilter$1 = TypedEventFilter<SetColorerEvent$1>;
interface SetDefaultColorEventObject$1 {
    caller: string;
    user: string;
    defaultColor: number;
}
type SetDefaultColorEvent$1 = TypedEvent<[
    string,
    string,
    number
], SetDefaultColorEventObject$1>;
type SetDefaultColorEventFilter$1 = TypedEventFilter<SetDefaultColorEvent$1>;
interface SetInspectorEventObject$1 {
    _inspector: string;
}
type SetInspectorEvent$1 = TypedEvent<[string], SetInspectorEventObject$1>;
type SetInspectorEventFilter$1 = TypedEventFilter<SetInspectorEvent$1>;
interface SetPauseEventObject$1 {
    paused: boolean;
}
type SetPauseEvent$1 = TypedEvent<[boolean], SetPauseEventObject$1>;
type SetPauseEventFilter$1 = TypedEventFilter<SetPauseEvent$1>;
interface SetRoleEventObject$1 {
    role: number;
    addr: string;
}
type SetRoleEvent$1 = TypedEvent<[number, string], SetRoleEventObject$1>;
type SetRoleEventFilter$1 = TypedEventFilter<SetRoleEvent$1>;
interface SyncedEventObject$1 {
    guid: string;
    deltas: DeltaStructOutput$1[];
}
type SyncedEvent$1 = TypedEvent<[
    string,
    DeltaStructOutput$1[]
], SyncedEventObject$1>;
type SyncedEventFilter$1 = TypedEventFilter<SyncedEvent$1>;
interface TransferEventObject$1 {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$1>;
type TransferEventFilter$1 = TypedEventFilter<TransferEvent$1>;
interface USDVMain extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: USDVMainInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Colors$1.ColorStateStructOutput]>;
        colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            colorer: string;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DeltaStructOutput$1[]]>;
        "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[DeltaStructOutput$1[]]>;
        getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        maxKnownColor(overrides?: CallOverrides): Promise<[number]>;
        mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        quoteSendFee(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remintAck(_deltas: DeltaStruct$1[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        syncDeltaAck(_deltas: DeltaStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            boolean,
            number
        ] & {
            color: number;
            balance: BigNumber;
            blacklisted: boolean;
            defaultColor: number;
        }>;
    };
    admin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    implementation(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Colors$1.ColorStateStructOutput>;
    colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DeltaStructOutput$1[]>;
    "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<DeltaStructOutput$1[]>;
    getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    maxKnownColor(overrides?: CallOverrides): Promise<number>;
    mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    quoteSendFee(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    }>;
    quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    }>;
    remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remintAck(_deltas: DeltaStruct$1[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    syncDeltaAck(_deltas: DeltaStruct$1[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        boolean,
        number
    ] & {
        color: number;
        balance: BigNumber;
        blacklisted: boolean;
        defaultColor: number;
    }>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<DeltaStructOutput$1[]>;
        colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Colors$1.ColorStateStructOutput>;
        colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DeltaStructOutput$1[]>;
        "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<DeltaStructOutput$1[]>;
        getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        maxKnownColor(overrides?: CallOverrides): Promise<number>;
        mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        quoteSendFee(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        remintAck(_deltas: DeltaStruct$1[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        send(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput$1>;
        sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput$1>;
        syncDeltaAck(_deltas: DeltaStruct$1[], overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            boolean,
            number
        ] & {
            color: number;
            balance: BigNumber;
            blacklisted: boolean;
            defaultColor: number;
        }>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter$1;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter$1;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter$1;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter$1;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter$1;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter$1;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$1;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$1;
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter$1;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter$1;
        "Initialized(uint8)"(version?: null): InitializedEventFilter$1;
        Initialized(version?: null): InitializedEventFilter$1;
        "ReceiveOFT(bytes32,address,uint256)"(_guid?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _amountLD?: null): ReceiveOFTEventFilter$1;
        ReceiveOFT(_guid?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _amountLD?: null): ReceiveOFTEventFilter$1;
        "Reminted(tuple[],uint64)"(deltas?: null, remintFee?: null): RemintedEventFilter;
        Reminted(deltas?: null, remintFee?: null): RemintedEventFilter;
        "SendOFT(bytes32,address,uint256,bytes)"(_guid?: PromiseOrValue<BytesLike> | null, _fromAddress?: PromiseOrValue<string> | null, _amountLD?: null, _composeMsg?: null): SendOFTEventFilter$1;
        SendOFT(_guid?: PromiseOrValue<BytesLike> | null, _fromAddress?: PromiseOrValue<string> | null, _amountLD?: null, _composeMsg?: null): SendOFTEventFilter$1;
        "SetBlacklist(address,bool)"(user?: PromiseOrValue<string> | null, isBlacklisted?: null): SetBlacklistEventFilter$1;
        SetBlacklist(user?: PromiseOrValue<string> | null, isBlacklisted?: null): SetBlacklistEventFilter$1;
        "SetColorer(address,address,address)"(caller?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, colorer?: null): SetColorerEventFilter$1;
        SetColorer(caller?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, colorer?: null): SetColorerEventFilter$1;
        "SetDefaultColor(address,address,uint32)"(caller?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, defaultColor?: null): SetDefaultColorEventFilter$1;
        SetDefaultColor(caller?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, defaultColor?: null): SetDefaultColorEventFilter$1;
        "SetInspector(address)"(_inspector?: null): SetInspectorEventFilter$1;
        SetInspector(_inspector?: null): SetInspectorEventFilter$1;
        "SetPause(bool)"(paused?: null): SetPauseEventFilter$1;
        SetPause(paused?: null): SetPauseEventFilter$1;
        "SetRole(uint8,address)"(role?: null, addr?: null): SetRoleEventFilter$1;
        SetRole(role?: null, addr?: null): SetRoleEventFilter$1;
        "Synced(bytes32,tuple[])"(guid?: null, deltas?: null): SyncedEventFilter$1;
        Synced(guid?: null, deltas?: null): SyncedEventFilter$1;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$1;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$1;
    };
    estimateGas: {
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        maxKnownColor(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        quoteSendFee(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remintAck(_deltas: DeltaStruct$1[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        syncDeltaAck(_deltas: DeltaStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        maxKnownColor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        quoteSendFee(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remintAck(_deltas: DeltaStruct$1[], _feeColor: PromiseOrValue<BigNumberish>, _feeAmount: PromiseOrValue<BigNumberish>, _feeTheta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(_param: IOFT$1.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        syncDeltaAck(_deltas: DeltaStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

type DeltaStruct = {
    color: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
};
type DeltaStructOutput = [number, BigNumber] & {
    color: number;
    amount: BigNumber;
};
type MessagingFeeStruct = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStructOutput = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    lzTokenFee: BigNumber;
};
type MessagingReceiptStructOutput = [
    string,
    BigNumber,
    MessagingFeeStructOutput
] & {
    guid: string;
    nonce: BigNumber;
    fee: MessagingFeeStructOutput;
};
declare namespace Colors {
    type ColorStateStruct = {
        colored: PromiseOrValue<BigNumberish>;
        delta: PromiseOrValue<BigNumberish>;
        lastDelta: PromiseOrValue<BigNumberish>;
        lastBlockNumber: PromiseOrValue<BigNumberish>;
        known: PromiseOrValue<boolean>;
    };
    type ColorStateStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
    ] & {
        colored: BigNumber;
        delta: BigNumber;
        lastDelta: BigNumber;
        lastBlockNumber: number;
        known: boolean;
    };
}
declare namespace IOFT {
    type SendParamStruct = {
        to: PromiseOrValue<BytesLike>;
        amountLD: PromiseOrValue<BigNumberish>;
        minAmountLD: PromiseOrValue<BigNumberish>;
        dstEid: PromiseOrValue<BigNumberish>;
    };
    type SendParamStructOutput = [string, BigNumber, BigNumber, number] & {
        to: string;
        amountLD: BigNumber;
        minAmountLD: BigNumber;
        dstEid: number;
    };
}
interface USDVSideInterface extends utils.Interface {
    functions: {
        "admin()": FunctionFragment;
        "implementation()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "blacklist(address,bool)": FunctionFragment;
        "burn(address,uint64,uint32[])": FunctionFragment;
        "colorStateOf(uint32)": FunctionFragment;
        "colorers(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "getDeltas(uint32,uint32)": FunctionFragment;
        "getDeltas(uint32[])": FunctionFragment;
        "getRole(uint8)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "maxKnownColor()": FunctionFragment;
        "mint(address,uint64,uint32)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "paused()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "quoteRemintFee(uint32,bytes,bool)": FunctionFragment;
        "quoteSendFee((bytes32,uint256,uint256,uint32),bytes,bool,bytes)": FunctionFragment;
        "quoteSyncDeltaFee(uint32,uint32,bytes,bool)": FunctionFragment;
        "remint(uint32,uint64,uint32[],uint64,bytes,(uint256,uint256),address)": FunctionFragment;
        "send((bytes32,uint256,uint256,uint32),bytes,(uint256,uint256),address,bytes)": FunctionFragment;
        "sendAck(bytes32,address,uint32,uint64,uint64)": FunctionFragment;
        "setColorer(address,address)": FunctionFragment;
        "setDefaultColor(address,uint32)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "setRole(uint8,address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "syncDelta(uint32,uint64,uint32[],uint64,bytes,(uint256,uint256),address)": FunctionFragment;
        "syncDeltaAck((uint32,int64)[])": FunctionFragment;
        "token()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "userStates(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "admin" | "implementation" | "upgradeTo" | "upgradeToAndCall" | "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "blacklist" | "burn" | "colorStateOf" | "colorers" | "decimals" | "decreaseAllowance" | "eip712Domain" | "getDeltas(uint32,uint32)" | "getDeltas(uint32[])" | "getRole" | "increaseAllowance" | "initialize" | "maxKnownColor" | "mint" | "name" | "nonces" | "paused" | "permit" | "quoteRemintFee" | "quoteSendFee" | "quoteSyncDeltaFee" | "remint" | "send" | "sendAck" | "setColorer" | "setDefaultColor" | "setPause" | "setRole" | "symbol" | "syncDelta" | "syncDeltaAck" | "token" | "totalSupply" | "transfer" | "transferFrom" | "userStates"): FunctionFragment;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "blacklist", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "colorStateOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "colorers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDeltas(uint32,uint32)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDeltas(uint32[])", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getRole", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxKnownColor", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "quoteRemintFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "quoteSendFee", values: [
        IOFT.SendParamStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "quoteSyncDeltaFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "remint", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [
        IOFT.SendParamStruct,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendAck", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setColorer", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDefaultColor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setRole", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "syncDelta", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "syncDeltaAck", values: [DeltaStruct[]]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "userStates", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "colorStateOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "colorers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeltas(uint32,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeltas(uint32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxKnownColor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRemintFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSyncDeltaFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendAck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setColorer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultColor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncDeltaAck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userStates", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "EIP712DomainChanged()": EventFragment;
        "Initialized(uint8)": EventFragment;
        "ReceiveOFT(bytes32,address,uint256)": EventFragment;
        "Reminting(bytes32,tuple[],uint64)": EventFragment;
        "SendOFT(bytes32,address,uint256,bytes)": EventFragment;
        "SetBlacklist(address,bool)": EventFragment;
        "SetColorer(address,address,address)": EventFragment;
        "SetDefaultColor(address,address,uint32)": EventFragment;
        "SetInspector(address)": EventFragment;
        "SetPause(bool)": EventFragment;
        "SetRole(uint8,address)": EventFragment;
        "Synced(bytes32,tuple[])": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveOFT"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Reminting"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendOFT"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBlacklist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetColorer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDefaultColor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetInspector"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPause"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetRole"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Synced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
interface BeaconUpgradedEventObject {
    beacon: string;
}
type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
interface UpgradedEventObject {
    implementation: string;
}
type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
interface EIP712DomainChangedEventObject {
}
type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
interface InitializedEventObject {
    version: number;
}
type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
interface ReceiveOFTEventObject {
    _guid: string;
    _toAddress: string;
    _amountLD: BigNumber;
}
type ReceiveOFTEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ReceiveOFTEventObject>;
type ReceiveOFTEventFilter = TypedEventFilter<ReceiveOFTEvent>;
interface RemintingEventObject {
    _guid: string;
    deltas: DeltaStructOutput[];
    remintFee: BigNumber;
}
type RemintingEvent = TypedEvent<[
    string,
    DeltaStructOutput[],
    BigNumber
], RemintingEventObject>;
type RemintingEventFilter = TypedEventFilter<RemintingEvent>;
interface SendOFTEventObject {
    _guid: string;
    _fromAddress: string;
    _amountLD: BigNumber;
    _composeMsg: string;
}
type SendOFTEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], SendOFTEventObject>;
type SendOFTEventFilter = TypedEventFilter<SendOFTEvent>;
interface SetBlacklistEventObject {
    user: string;
    isBlacklisted: boolean;
}
type SetBlacklistEvent = TypedEvent<[
    string,
    boolean
], SetBlacklistEventObject>;
type SetBlacklistEventFilter = TypedEventFilter<SetBlacklistEvent>;
interface SetColorerEventObject {
    caller: string;
    user: string;
    colorer: string;
}
type SetColorerEvent = TypedEvent<[
    string,
    string,
    string
], SetColorerEventObject>;
type SetColorerEventFilter = TypedEventFilter<SetColorerEvent>;
interface SetDefaultColorEventObject {
    caller: string;
    user: string;
    defaultColor: number;
}
type SetDefaultColorEvent = TypedEvent<[
    string,
    string,
    number
], SetDefaultColorEventObject>;
type SetDefaultColorEventFilter = TypedEventFilter<SetDefaultColorEvent>;
interface SetInspectorEventObject {
    _inspector: string;
}
type SetInspectorEvent = TypedEvent<[string], SetInspectorEventObject>;
type SetInspectorEventFilter = TypedEventFilter<SetInspectorEvent>;
interface SetPauseEventObject {
    paused: boolean;
}
type SetPauseEvent = TypedEvent<[boolean], SetPauseEventObject>;
type SetPauseEventFilter = TypedEventFilter<SetPauseEvent>;
interface SetRoleEventObject {
    role: number;
    addr: string;
}
type SetRoleEvent = TypedEvent<[number, string], SetRoleEventObject>;
type SetRoleEventFilter = TypedEventFilter<SetRoleEvent>;
interface SyncedEventObject {
    guid: string;
    deltas: DeltaStructOutput[];
}
type SyncedEvent = TypedEvent<[
    string,
    DeltaStructOutput[]
], SyncedEventObject>;
type SyncedEventFilter = TypedEventFilter<SyncedEvent>;
interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
type TransferEventFilter = TypedEventFilter<TransferEvent>;
interface USDVSide extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: USDVSideInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Colors.ColorStateStructOutput]>;
        colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            colorer: string;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DeltaStructOutput[]]>;
        "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[DeltaStructOutput[]]>;
        getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        maxKnownColor(overrides?: CallOverrides): Promise<[number]>;
        mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        quoteRemintFee(_numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSendFee(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        syncDeltaAck(_deltas: DeltaStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            boolean,
            number
        ] & {
            color: number;
            balance: BigNumber;
            blacklisted: boolean;
            defaultColor: number;
        }>;
    };
    admin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    implementation(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Colors.ColorStateStructOutput>;
    colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DeltaStructOutput[]>;
    "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<DeltaStructOutput[]>;
    getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    maxKnownColor(overrides?: CallOverrides): Promise<number>;
    mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    quoteRemintFee(_numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    }>;
    quoteSendFee(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    }>;
    quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    }>;
    remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    syncDeltaAck(_deltas: DeltaStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        boolean,
        number
    ] & {
        color: number;
        balance: BigNumber;
        blacklisted: boolean;
        defaultColor: number;
    }>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<DeltaStructOutput[]>;
        colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Colors.ColorStateStructOutput>;
        colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DeltaStructOutput[]>;
        "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<DeltaStructOutput[]>;
        getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        maxKnownColor(overrides?: CallOverrides): Promise<number>;
        mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        quoteRemintFee(_numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSendFee(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            lzTokenFee: BigNumber;
        }>;
        remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput>;
        send(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput>;
        sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput>;
        syncDeltaAck(_deltas: DeltaStruct[], overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            boolean,
            number
        ] & {
            color: number;
            balance: BigNumber;
            blacklisted: boolean;
            defaultColor: number;
        }>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "ReceiveOFT(bytes32,address,uint256)"(_guid?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _amountLD?: null): ReceiveOFTEventFilter;
        ReceiveOFT(_guid?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _amountLD?: null): ReceiveOFTEventFilter;
        "Reminting(bytes32,tuple[],uint64)"(_guid?: null, deltas?: null, remintFee?: null): RemintingEventFilter;
        Reminting(_guid?: null, deltas?: null, remintFee?: null): RemintingEventFilter;
        "SendOFT(bytes32,address,uint256,bytes)"(_guid?: PromiseOrValue<BytesLike> | null, _fromAddress?: PromiseOrValue<string> | null, _amountLD?: null, _composeMsg?: null): SendOFTEventFilter;
        SendOFT(_guid?: PromiseOrValue<BytesLike> | null, _fromAddress?: PromiseOrValue<string> | null, _amountLD?: null, _composeMsg?: null): SendOFTEventFilter;
        "SetBlacklist(address,bool)"(user?: PromiseOrValue<string> | null, isBlacklisted?: null): SetBlacklistEventFilter;
        SetBlacklist(user?: PromiseOrValue<string> | null, isBlacklisted?: null): SetBlacklistEventFilter;
        "SetColorer(address,address,address)"(caller?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, colorer?: null): SetColorerEventFilter;
        SetColorer(caller?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, colorer?: null): SetColorerEventFilter;
        "SetDefaultColor(address,address,uint32)"(caller?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, defaultColor?: null): SetDefaultColorEventFilter;
        SetDefaultColor(caller?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, defaultColor?: null): SetDefaultColorEventFilter;
        "SetInspector(address)"(_inspector?: null): SetInspectorEventFilter;
        SetInspector(_inspector?: null): SetInspectorEventFilter;
        "SetPause(bool)"(paused?: null): SetPauseEventFilter;
        SetPause(paused?: null): SetPauseEventFilter;
        "SetRole(uint8,address)"(role?: null, addr?: null): SetRoleEventFilter;
        SetRole(role?: null, addr?: null): SetRoleEventFilter;
        "Synced(bytes32,tuple[])"(guid?: null, deltas?: null): SyncedEventFilter;
        Synced(guid?: null, deltas?: null): SyncedEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        maxKnownColor(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        quoteRemintFee(_numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSendFee(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        syncDeltaAck(_deltas: DeltaStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blacklist(_user: PromiseOrValue<string>, _isBlacklisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burn(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        colorStateOf(_color: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        colorers(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDeltas(uint32,uint32)"(_startColor: PromiseOrValue<BigNumberish>, _endColor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDeltas(uint32[])"(_colors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRole(_role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_owner: PromiseOrValue<string>, _foundation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        maxKnownColor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _color: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        quoteRemintFee(_numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSendFee(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _useLZToken: PromiseOrValue<boolean>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSyncDeltaFee(_dstEid: PromiseOrValue<BigNumberish>, _numDeficits: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _useLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remint(_surplusColor: PromiseOrValue<BigNumberish>, _surplusAmount: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(_param: IOFT.SendParamStruct, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendAck(_guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _color: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setColorer(_user: PromiseOrValue<string>, _colorer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultColor(_user: PromiseOrValue<string>, _defaultColor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRole(_role: PromiseOrValue<BigNumberish>, _addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        syncDelta(_eid: PromiseOrValue<BigNumberish>, _theta: PromiseOrValue<BigNumberish>, _deficits: PromiseOrValue<BigNumberish>[], _feeCap: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _msgFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        syncDeltaAck(_deltas: DeltaStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        userStates(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

type ContractDetails = {
    chainKey: string;
    address: string;
};
type Deployment = {
    usdv: Token;
    eid: number;
    vault?: ContractDetails;
    operators?: ContractDetails[];
    minterProxy?: ContractDetails;
    stbt?: ContractDetails;
    sideChainSwapRecolor: ContractDetails[];
    bridgeRecolor?: ContractDetails;
};
type USDVConfig = {
    deployments: {
        [chainKey: string]: Deployment;
    };
    stables: Token[];
};

declare enum MsgType {
    SEND = 1,
    SEND_AND_CALL = 2,
    SYNC_DELTA = 3,
    REMINT = 4
}
declare class MessagingApi {
    protected config: USDVConfig;
    protected providerFactory: ProviderFactory;
    constructor(config: USDVConfig, providerFactory: ProviderFactory);
    minDstGasLookup(input: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
        msgType: MsgType;
    }): Promise<number>;
    getSendMessageFee(input: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
        adapterParams: AdapterParams;
    }): Promise<FeeQuote>;
    protected getMessagingV1Contract(chainKey: ChainKey): Promise<MessagingV1>;
    protected getUSDV(chainKey: ChainKey): Token;
    serializeOptions(adapterParams: AdapterParams): string;
    mapDstEidId(dstChainKey: ChainKey): number;
    mapDstAddress(dstAddress: string): string;
}

type USDVBridgeFee = {
    fee: CurrencyAmount;
    reward: CurrencyAmount;
};

declare class USDVBridgeBase implements Pick<BridgeApi<unknown>, 'getOptions'> {
    protected readonly config: USDVConfig;
    protected usdvTokens: Token[];
    constructor(config: USDVConfig);
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getDeployment(chainKey: string): Deployment;
    tryGetDeployment(chainKey: string): Deployment;
    chainKeyToEndpointId(chainKey: string): number;
}

declare class BridgeRecolorBridgeApi__evm extends USDVBridgeBase implements BridgeApi<Signer, USDVBridgeFee> {
    protected providerFactory: ProviderFactory;
    protected readonly color: number;
    protected messaging: MessagingApi;
    protected erc20: ERC20__api;
    constructor(config: USDVConfig, providerFactory: ProviderFactory, color: number, messaging?: MessagingApi);
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    getMessageFee({ srcToken, dstToken, adapterParams }: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    supportsClaim(currency: Currency): boolean;
    supportsRegister(currency: Currency): boolean;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    getOutput({ srcAmount, dstToken }: GetOutputInput): Promise<BridgeOutput<USDVBridgeFee>>;
    getDuration(): Promise<number>;
    protected isUSDV(currency: Currency): currency is Token;
    protected isStable(currency: Currency): currency is Token;
    getLimit({ srcToken, dstToken }: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    getUnclaimed(): Promise<CurrencyAmount<Currency>>;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount<Currency>>;
    isRegistered(): Promise<boolean>;
    claim(): Promise<Transaction<Signer>>;
    register(): Promise<Transaction<Signer>>;
    approve({ amount }: ApproveInput): Promise<Transaction<Signer>>;
    protected getBridgeContract(chainKey: ChainKey): BridgeRecolor;
    protected getUSDVContract(chainKey: ChainKey): USDVSide | USDVMain;
}

declare class USDVBridgeApi__evm extends USDVBridgeBase implements BridgeApi<Signer, USDVBridgeFee> {
    protected providerFactory: ProviderFactory;
    protected messaging: MessagingApi;
    protected readonly sharedDecimals: number;
    protected erc20: ERC20__api;
    constructor(config: USDVConfig, providerFactory: ProviderFactory, messaging?: MessagingApi);
    supportsClaim(currency: Currency): boolean;
    supportsRegister(currency: Currency): boolean;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    getDuration(input: GetDurationInput): Promise<number>;
    getLimit({ srcToken }: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    getUnclaimed({ token, address }: GetUnclaimedInput): Promise<CurrencyAmount<Currency>>;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount>;
    isRegistered(): Promise<boolean>;
    claim(): Promise<Transaction<Signer>>;
    register(): Promise<Transaction<Signer>>;
    approve(): Promise<Transaction<Signer>>;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    getMessageFee({ srcToken, dstToken, adapterParams }: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    getOutput({ srcAmount, dstToken }: GetOutputInput): Promise<BridgeOutput<USDVBridgeFee>>;
    protected getUSDVContract(chainKey: ChainKey): USDVSide | USDVMain;
    protected removeDust(amount: CurrencyAmount): CurrencyAmount<Currency>;
}

declare class MinterProxyBridgeApi__evm extends USDVBridgeBase implements BridgeApi<Signer, USDVBridgeFee> {
    private providerFactory;
    protected readonly color: number;
    protected messaging: MessagingApi;
    protected minterProxyChainKey: ChainKey;
    protected minterProxy: MinterProxy;
    protected erc20: ERC20__api;
    constructor(config: USDVConfig, providerFactory: ProviderFactory, color: number, messaging?: MessagingApi);
    supportsClaim(currency: Currency): boolean;
    supportsRegister(currency: Currency): boolean;
    getDuration({ srcToken, dstToken }: GetDurationInput): Promise<number>;
    getUnclaimed(): Promise<CurrencyAmount<Currency>>;
    isRegistered(): Promise<boolean>;
    claim(): Promise<Transaction<Signer>>;
    register(): Promise<Transaction<Signer>>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    getLimit({ srcToken }: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    getMessageFee({ srcToken, dstToken, adapterParams }: GetMessageFeeInput): Promise<FeeQuote>;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    getAllowance({ token, address: user }: GetAllowanceInput): Promise<CurrencyAmount<Currency>>;
    approve({ amount }: ApproveInput): Promise<Transaction<Signer>>;
    getOutput({ srcAmount, dstToken }: GetOutputInput): Promise<BridgeOutput<USDVBridgeFee>>;
    protected get srcAssets(): Currency[];
    protected get dstAssets(): Currency[];
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
}

declare const serializedUSDVConfigSchema: z.ZodEffects<z.ZodObject<{
    deployments: z.ZodRecord<z.ZodString, z.ZodObject<{
        eid: z.ZodNumber;
        usdv: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
        vault: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        minterProxy: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        stbt: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        sideChainSwapRecolor: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>, "many">>>;
        bridgeRecolor: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        usdv: {
            address: string;
        };
        eid: number;
        sideChainSwapRecolor: {
            address: string;
        }[];
        vault?: {
            address: string;
        } | undefined;
        minterProxy?: {
            address: string;
        } | undefined;
        stbt?: {
            address: string;
        } | undefined;
        bridgeRecolor?: {
            address: string;
        } | undefined;
    }, {
        usdv: {
            address: string;
        };
        eid: number;
        vault?: {
            address: string;
        } | undefined;
        minterProxy?: {
            address: string;
        } | undefined;
        stbt?: {
            address: string;
        } | undefined;
        sideChainSwapRecolor?: {
            address: string;
        }[] | undefined;
        bridgeRecolor?: {
            address: string;
        } | undefined;
    }>>;
    stables: z.ZodDefault<z.ZodArray<z.ZodType<Token, z.ZodTypeDef, {
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    deployments: Record<string, {
        usdv: {
            address: string;
        };
        eid: number;
        sideChainSwapRecolor: {
            address: string;
        }[];
        vault?: {
            address: string;
        } | undefined;
        minterProxy?: {
            address: string;
        } | undefined;
        stbt?: {
            address: string;
        } | undefined;
        bridgeRecolor?: {
            address: string;
        } | undefined;
    }>;
    stables: Token[];
}, {
    deployments: Record<string, {
        usdv: {
            address: string;
        };
        eid: number;
        vault?: {
            address: string;
        } | undefined;
        minterProxy?: {
            address: string;
        } | undefined;
        stbt?: {
            address: string;
        } | undefined;
        sideChainSwapRecolor?: {
            address: string;
        }[] | undefined;
        bridgeRecolor?: {
            address: string;
        } | undefined;
    }>;
    stables?: {
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    }[] | undefined;
}>, USDVConfig, {
    deployments: Record<string, {
        usdv: {
            address: string;
        };
        eid: number;
        vault?: {
            address: string;
        } | undefined;
        minterProxy?: {
            address: string;
        } | undefined;
        stbt?: {
            address: string;
        } | undefined;
        sideChainSwapRecolor?: {
            address: string;
        }[] | undefined;
        bridgeRecolor?: {
            address: string;
        } | undefined;
    }>;
    stables?: {
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    }[] | undefined;
}>;
type SerializedUSDVConfig = z.input<typeof serializedUSDVConfigSchema>;
declare function createUSDVConfig(input: SerializedUSDVConfig): USDVConfig;

declare const usdvTestnetConfig: USDVConfig;

declare const usdvMainnetConfig: USDVConfig;

export { BridgeRecolorBridgeApi__evm, Deployment, MessagingApi, MinterProxyBridgeApi__evm, MsgType, SerializedUSDVConfig, USDVBridgeApi__evm, USDVBridgeFee, USDVConfig, createUSDVConfig, serializedUSDVConfigSchema, usdvMainnetConfig, usdvTestnetConfig };
