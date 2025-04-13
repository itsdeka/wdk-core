import { Event, EventFilter, BaseContract, Signer, BigNumberish, PayableOverrides, ContractTransaction, CallOverrides, BigNumber, Overrides, BytesLike, PopulatedTransaction, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';

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

type CreditStruct$2 = {
    srcEid: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
};
type CreditStructOutput$2 = [number, BigNumber] & {
    srcEid: number;
    amount: BigNumber;
};
type SendParamStruct$2 = {
    dstEid: PromiseOrValue<BigNumberish>;
    to: PromiseOrValue<BytesLike>;
    amountLD: PromiseOrValue<BigNumberish>;
    minAmountLD: PromiseOrValue<BigNumberish>;
    extraOptions: PromiseOrValue<BytesLike>;
    composeMsg: PromiseOrValue<BytesLike>;
    oftCmd: PromiseOrValue<BytesLike>;
};
type OFTLimitStructOutput$2 = [BigNumber, BigNumber] & {
    minAmountLD: BigNumber;
    maxAmountLD: BigNumber;
};
type OFTFeeDetailStructOutput$2 = [BigNumber, string] & {
    feeAmountLD: BigNumber;
    description: string;
};
type OFTReceiptStructOutput$2 = [BigNumber, BigNumber] & {
    amountSentLD: BigNumber;
    amountReceivedLD: BigNumber;
};
type MessagingFeeStruct$3 = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStructOutput$3 = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    lzTokenFee: BigNumber;
};
type OriginStruct$3 = {
    srcEid: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    nonce: PromiseOrValue<BigNumberish>;
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
type TargetCreditStruct$2 = {
    srcEid: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    minAmount: PromiseOrValue<BigNumberish>;
};
type TicketStructOutput$3 = [BigNumber, string] & {
    ticketId: BigNumber;
    passengerBytes: string;
};
declare namespace StargateBase$2 {
    type AddressConfigStruct = {
        feeLib: PromiseOrValue<string>;
        planner: PromiseOrValue<string>;
        treasurer: PromiseOrValue<string>;
        tokenMessaging: PromiseOrValue<string>;
        creditMessaging: PromiseOrValue<string>;
        lzToken: PromiseOrValue<string>;
    };
    type AddressConfigStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        feeLib: string;
        planner: string;
        treasurer: string;
        tokenMessaging: string;
        creditMessaging: string;
        lzToken: string;
    };
}
interface StargateOFTInterface extends utils.Interface {
    functions: {
        "addTreasuryFee(uint256)": FunctionFragment;
        "approvalRequired()": FunctionFragment;
        "endpoint()": FunctionFragment;
        "getAddressConfig()": FunctionFragment;
        "localEid()": FunctionFragment;
        "oftVersion()": FunctionFragment;
        "owner()": FunctionFragment;
        "paths(uint32)": FunctionFragment;
        "plannerFee()": FunctionFragment;
        "quoteOFT((uint32,bytes32,uint256,uint256,bytes,bytes,bytes))": FunctionFragment;
        "quoteSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)": FunctionFragment;
        "receiveCredits(uint32,(uint32,uint64)[])": FunctionFragment;
        "receiveTokenBus((uint32,bytes32,uint64),bytes32,uint8,address,uint64)": FunctionFragment;
        "receiveTokenTaxi((uint32,bytes32,uint64),bytes32,address,uint64,bytes)": FunctionFragment;
        "recoverToken(address,address,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryReceiveToken(bytes32,uint8,uint32,address,uint256,bytes)": FunctionFragment;
        "send((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "sendCredits(uint32,(uint32,uint64,uint64)[])": FunctionFragment;
        "sendToken((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "setAddressConfig((address,address,address,address,address,address))": FunctionFragment;
        "setOFTPath(uint32,bool)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "sharedDecimals()": FunctionFragment;
        "stargateType()": FunctionFragment;
        "status()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "treasuryFee()": FunctionFragment;
        "unreceivedTokens(bytes32,uint8)": FunctionFragment;
        "withdrawPlannerFee()": FunctionFragment;
        "withdrawTreasuryFee(address,uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addTreasuryFee" | "approvalRequired" | "endpoint" | "getAddressConfig" | "localEid" | "oftVersion" | "owner" | "paths" | "plannerFee" | "quoteOFT" | "quoteSend" | "receiveCredits" | "receiveTokenBus" | "receiveTokenTaxi" | "recoverToken" | "renounceOwnership" | "retryReceiveToken" | "send" | "sendCredits" | "sendToken" | "setAddressConfig" | "setOFTPath" | "setPause" | "sharedDecimals" | "stargateType" | "status" | "token" | "transferOwnership" | "treasuryFee" | "unreceivedTokens" | "withdrawPlannerFee" | "withdrawTreasuryFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "addTreasuryFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approvalRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddressConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "localEid", values?: undefined): string;
    encodeFunctionData(functionFragment: "oftVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paths", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "plannerFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteOFT", values: [SendParamStruct$2]): string;
    encodeFunctionData(functionFragment: "quoteSend", values: [SendParamStruct$2, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "receiveCredits", values: [PromiseOrValue<BigNumberish>, CreditStruct$2[]]): string;
    encodeFunctionData(functionFragment: "receiveTokenBus", values: [
        OriginStruct$3,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "receiveTokenTaxi", values: [
        OriginStruct$3,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "recoverToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryReceiveToken", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [SendParamStruct$2, MessagingFeeStruct$3, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sendCredits", values: [PromiseOrValue<BigNumberish>, TargetCreditStruct$2[]]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [SendParamStruct$2, MessagingFeeStruct$3, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAddressConfig", values: [StargateBase$2.AddressConfigStruct]): string;
    encodeFunctionData(functionFragment: "setOFTPath", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "sharedDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargateType", values?: undefined): string;
    encodeFunctionData(functionFragment: "status", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "treasuryFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "unreceivedTokens", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawPlannerFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTreasuryFee", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addTreasuryFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvalRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oftVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plannerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveTokenBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveTokenTaxi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryReceiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOFTPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unreceivedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawPlannerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTreasuryFee", data: BytesLike): Result;
    events: {
        "AddressConfigSet(tuple)": EventFragment;
        "CreditsReceived(uint32,tuple[])": EventFragment;
        "CreditsSent(uint32,tuple[])": EventFragment;
        "OFTPathSet(uint32,bool)": EventFragment;
        "OFTReceived(bytes32,uint32,address,uint256)": EventFragment;
        "OFTSent(bytes32,uint32,address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PauseSet(bool)": EventFragment;
        "PlannerFeeWithdrawn(uint256)": EventFragment;
        "TreasuryFeeAdded(uint64)": EventFragment;
        "TreasuryFeeWithdrawn(address,uint64)": EventFragment;
        "UnreceivedTokenCached(bytes32,uint8,uint32,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditsReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditsSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTPathSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauseSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlannerFeeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TreasuryFeeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TreasuryFeeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnreceivedTokenCached"): EventFragment;
}
interface AddressConfigSetEventObject$2 {
    config: StargateBase$2.AddressConfigStructOutput;
}
type AddressConfigSetEvent$2 = TypedEvent<[
    StargateBase$2.AddressConfigStructOutput
], AddressConfigSetEventObject$2>;
type AddressConfigSetEventFilter$2 = TypedEventFilter<AddressConfigSetEvent$2>;
interface CreditsReceivedEventObject$2 {
    srcEid: number;
    credits: CreditStructOutput$2[];
}
type CreditsReceivedEvent$2 = TypedEvent<[
    number,
    CreditStructOutput$2[]
], CreditsReceivedEventObject$2>;
type CreditsReceivedEventFilter$2 = TypedEventFilter<CreditsReceivedEvent$2>;
interface CreditsSentEventObject$2 {
    dstEid: number;
    credits: CreditStructOutput$2[];
}
type CreditsSentEvent$2 = TypedEvent<[
    number,
    CreditStructOutput$2[]
], CreditsSentEventObject$2>;
type CreditsSentEventFilter$2 = TypedEventFilter<CreditsSentEvent$2>;
interface OFTPathSetEventObject$2 {
    dstEid: number;
    oft: boolean;
}
type OFTPathSetEvent$2 = TypedEvent<[
    number,
    boolean
], OFTPathSetEventObject$2>;
type OFTPathSetEventFilter$2 = TypedEventFilter<OFTPathSetEvent$2>;
interface OFTReceivedEventObject$2 {
    guid: string;
    srcEid: number;
    toAddress: string;
    amountReceivedLD: BigNumber;
}
type OFTReceivedEvent$2 = TypedEvent<[
    string,
    number,
    string,
    BigNumber
], OFTReceivedEventObject$2>;
type OFTReceivedEventFilter$2 = TypedEventFilter<OFTReceivedEvent$2>;
interface OFTSentEventObject$2 {
    guid: string;
    dstEid: number;
    fromAddress: string;
    amountSentLD: BigNumber;
    amountReceivedLD: BigNumber;
}
type OFTSentEvent$2 = TypedEvent<[
    string,
    number,
    string,
    BigNumber,
    BigNumber
], OFTSentEventObject$2>;
type OFTSentEventFilter$2 = TypedEventFilter<OFTSentEvent$2>;
interface OwnershipTransferredEventObject$3 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$3 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$3>;
type OwnershipTransferredEventFilter$3 = TypedEventFilter<OwnershipTransferredEvent$3>;
interface PauseSetEventObject$2 {
    paused: boolean;
}
type PauseSetEvent$2 = TypedEvent<[boolean], PauseSetEventObject$2>;
type PauseSetEventFilter$2 = TypedEventFilter<PauseSetEvent$2>;
interface PlannerFeeWithdrawnEventObject$2 {
    amount: BigNumber;
}
type PlannerFeeWithdrawnEvent$2 = TypedEvent<[
    BigNumber
], PlannerFeeWithdrawnEventObject$2>;
type PlannerFeeWithdrawnEventFilter$2 = TypedEventFilter<PlannerFeeWithdrawnEvent$2>;
interface TreasuryFeeAddedEventObject$2 {
    amountSD: BigNumber;
}
type TreasuryFeeAddedEvent$2 = TypedEvent<[
    BigNumber
], TreasuryFeeAddedEventObject$2>;
type TreasuryFeeAddedEventFilter$2 = TypedEventFilter<TreasuryFeeAddedEvent$2>;
interface TreasuryFeeWithdrawnEventObject$2 {
    to: string;
    amountSD: BigNumber;
}
type TreasuryFeeWithdrawnEvent$2 = TypedEvent<[
    string,
    BigNumber
], TreasuryFeeWithdrawnEventObject$2>;
type TreasuryFeeWithdrawnEventFilter$2 = TypedEventFilter<TreasuryFeeWithdrawnEvent$2>;
interface UnreceivedTokenCachedEventObject$2 {
    guid: string;
    index: number;
    srcEid: number;
    receiver: string;
    amountLD: BigNumber;
    composeMsg: string;
}
type UnreceivedTokenCachedEvent$2 = TypedEvent<[
    string,
    number,
    number,
    string,
    BigNumber,
    string
], UnreceivedTokenCachedEventObject$2>;
type UnreceivedTokenCachedEventFilter$2 = TypedEventFilter<UnreceivedTokenCachedEvent$2>;
interface StargateOFT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargateOFTInterface;
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
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approvalRequired(overrides?: CallOverrides): Promise<[boolean]>;
        endpoint(overrides?: CallOverrides): Promise<[string]>;
        getAddressConfig(overrides?: CallOverrides): Promise<[StargateBase$2.AddressConfigStructOutput]>;
        localEid(overrides?: CallOverrides): Promise<[number]>;
        oftVersion(overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            interfaceId: string;
            version: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            credit: BigNumber;
        }>;
        plannerFee(overrides?: CallOverrides): Promise<[BigNumber] & {
            available: BigNumber;
        }>;
        quoteOFT(_sendParam: SendParamStruct$2, overrides?: CallOverrides): Promise<[
            OFTLimitStructOutput$2,
            OFTFeeDetailStructOutput$2[],
            OFTReceiptStructOutput$2
        ] & {
            limit: OFTLimitStructOutput$2;
            oftFeeDetails: OFTFeeDetailStructOutput$2[];
            receipt: OFTReceiptStructOutput$2;
        }>;
        quoteSend(_sendParam: SendParamStruct$2, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[MessagingFeeStructOutput$3] & {
            fee: MessagingFeeStructOutput$3;
        }>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveTokenBus(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveTokenTaxi(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendToken(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAddressConfig(_config: StargateBase$2.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<[number]>;
        stargateType(overrides?: CallOverrides): Promise<[number]>;
        status(overrides?: CallOverrides): Promise<[number]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        treasuryFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            hash: string;
        }>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approvalRequired(overrides?: CallOverrides): Promise<boolean>;
    endpoint(overrides?: CallOverrides): Promise<string>;
    getAddressConfig(overrides?: CallOverrides): Promise<StargateBase$2.AddressConfigStructOutput>;
    localEid(overrides?: CallOverrides): Promise<number>;
    oftVersion(overrides?: CallOverrides): Promise<[string, BigNumber] & {
        interfaceId: string;
        version: BigNumber;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
    quoteOFT(_sendParam: SendParamStruct$2, overrides?: CallOverrides): Promise<[
        OFTLimitStructOutput$2,
        OFTFeeDetailStructOutput$2[],
        OFTReceiptStructOutput$2
    ] & {
        limit: OFTLimitStructOutput$2;
        oftFeeDetails: OFTFeeDetailStructOutput$2[];
        receipt: OFTReceiptStructOutput$2;
    }>;
    quoteSend(_sendParam: SendParamStruct$2, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$3>;
    receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveTokenBus(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveTokenTaxi(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendToken(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAddressConfig(_config: StargateBase$2.AddressConfigStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sharedDecimals(overrides?: CallOverrides): Promise<number>;
    stargateType(overrides?: CallOverrides): Promise<number>;
    status(overrides?: CallOverrides): Promise<number>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
    unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    withdrawPlannerFee(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approvalRequired(overrides?: CallOverrides): Promise<boolean>;
        endpoint(overrides?: CallOverrides): Promise<string>;
        getAddressConfig(overrides?: CallOverrides): Promise<StargateBase$2.AddressConfigStructOutput>;
        localEid(overrides?: CallOverrides): Promise<number>;
        oftVersion(overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            interfaceId: string;
            version: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFT(_sendParam: SendParamStruct$2, overrides?: CallOverrides): Promise<[
            OFTLimitStructOutput$2,
            OFTFeeDetailStructOutput$2[],
            OFTReceiptStructOutput$2
        ] & {
            limit: OFTLimitStructOutput$2;
            oftFeeDetails: OFTFeeDetailStructOutput$2[];
            receipt: OFTReceiptStructOutput$2;
        }>;
        quoteSend(_sendParam: SendParamStruct$2, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$3>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$2[], overrides?: CallOverrides): Promise<void>;
        receiveTokenBus(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        receiveTokenTaxi(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        send(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput$3,
            OFTReceiptStructOutput$2
        ] & {
            msgReceipt: MessagingReceiptStructOutput$3;
            oftReceipt: OFTReceiptStructOutput$2;
        }>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$2[], overrides?: CallOverrides): Promise<CreditStructOutput$2[]>;
        sendToken(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput$3,
            OFTReceiptStructOutput$2,
            TicketStructOutput$3
        ] & {
            msgReceipt: MessagingReceiptStructOutput$3;
            oftReceipt: OFTReceiptStructOutput$2;
            ticket: TicketStructOutput$3;
        }>;
        setAddressConfig(_config: StargateBase$2.AddressConfigStruct, overrides?: CallOverrides): Promise<void>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        sharedDecimals(overrides?: CallOverrides): Promise<number>;
        stargateType(overrides?: CallOverrides): Promise<number>;
        status(overrides?: CallOverrides): Promise<number>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        withdrawPlannerFee(overrides?: CallOverrides): Promise<void>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressConfigSet(tuple)"(config?: null): AddressConfigSetEventFilter$2;
        AddressConfigSet(config?: null): AddressConfigSetEventFilter$2;
        "CreditsReceived(uint32,tuple[])"(srcEid?: null, credits?: null): CreditsReceivedEventFilter$2;
        CreditsReceived(srcEid?: null, credits?: null): CreditsReceivedEventFilter$2;
        "CreditsSent(uint32,tuple[])"(dstEid?: null, credits?: null): CreditsSentEventFilter$2;
        CreditsSent(dstEid?: null, credits?: null): CreditsSentEventFilter$2;
        "OFTPathSet(uint32,bool)"(dstEid?: null, oft?: null): OFTPathSetEventFilter$2;
        OFTPathSet(dstEid?: null, oft?: null): OFTPathSetEventFilter$2;
        "OFTReceived(bytes32,uint32,address,uint256)"(guid?: PromiseOrValue<BytesLike> | null, srcEid?: null, toAddress?: PromiseOrValue<string> | null, amountReceivedLD?: null): OFTReceivedEventFilter$2;
        OFTReceived(guid?: PromiseOrValue<BytesLike> | null, srcEid?: null, toAddress?: PromiseOrValue<string> | null, amountReceivedLD?: null): OFTReceivedEventFilter$2;
        "OFTSent(bytes32,uint32,address,uint256,uint256)"(guid?: PromiseOrValue<BytesLike> | null, dstEid?: null, fromAddress?: PromiseOrValue<string> | null, amountSentLD?: null, amountReceivedLD?: null): OFTSentEventFilter$2;
        OFTSent(guid?: PromiseOrValue<BytesLike> | null, dstEid?: null, fromAddress?: PromiseOrValue<string> | null, amountSentLD?: null, amountReceivedLD?: null): OFTSentEventFilter$2;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        "PauseSet(bool)"(paused?: null): PauseSetEventFilter$2;
        PauseSet(paused?: null): PauseSetEventFilter$2;
        "PlannerFeeWithdrawn(uint256)"(amount?: null): PlannerFeeWithdrawnEventFilter$2;
        PlannerFeeWithdrawn(amount?: null): PlannerFeeWithdrawnEventFilter$2;
        "TreasuryFeeAdded(uint64)"(amountSD?: null): TreasuryFeeAddedEventFilter$2;
        TreasuryFeeAdded(amountSD?: null): TreasuryFeeAddedEventFilter$2;
        "TreasuryFeeWithdrawn(address,uint64)"(to?: null, amountSD?: null): TreasuryFeeWithdrawnEventFilter$2;
        TreasuryFeeWithdrawn(to?: null, amountSD?: null): TreasuryFeeWithdrawnEventFilter$2;
        "UnreceivedTokenCached(bytes32,uint8,uint32,address,uint256,bytes)"(guid?: null, index?: null, srcEid?: null, receiver?: null, amountLD?: null, composeMsg?: null): UnreceivedTokenCachedEventFilter$2;
        UnreceivedTokenCached(guid?: null, index?: null, srcEid?: null, receiver?: null, amountLD?: null, composeMsg?: null): UnreceivedTokenCachedEventFilter$2;
    };
    estimateGas: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approvalRequired(overrides?: CallOverrides): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<BigNumber>;
        getAddressConfig(overrides?: CallOverrides): Promise<BigNumber>;
        localEid(overrides?: CallOverrides): Promise<BigNumber>;
        oftVersion(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFT(_sendParam: SendParamStruct$2, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSend(_sendParam: SendParamStruct$2, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveTokenBus(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveTokenTaxi(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendToken(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAddressConfig(_config: StargateBase$2.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        stargateType(overrides?: CallOverrides): Promise<BigNumber>;
        status(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approvalRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localEid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oftVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        plannerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteOFT(_sendParam: SendParamStruct$2, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSend(_sendParam: SendParamStruct$2, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveTokenBus(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveTokenTaxi(_origin: OriginStruct$3, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendToken(_sendParam: SendParamStruct$2, _fee: MessagingFeeStruct$3, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAddressConfig(_config: StargateBase$2.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargateType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        status(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        treasuryFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

type CreditStruct$1 = {
    srcEid: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
};
type CreditStructOutput$1 = [number, BigNumber] & {
    srcEid: number;
    amount: BigNumber;
};
type SendParamStruct$1 = {
    dstEid: PromiseOrValue<BigNumberish>;
    to: PromiseOrValue<BytesLike>;
    amountLD: PromiseOrValue<BigNumberish>;
    minAmountLD: PromiseOrValue<BigNumberish>;
    extraOptions: PromiseOrValue<BytesLike>;
    composeMsg: PromiseOrValue<BytesLike>;
    oftCmd: PromiseOrValue<BytesLike>;
};
type OFTLimitStructOutput$1 = [BigNumber, BigNumber] & {
    minAmountLD: BigNumber;
    maxAmountLD: BigNumber;
};
type OFTFeeDetailStructOutput$1 = [BigNumber, string] & {
    feeAmountLD: BigNumber;
    description: string;
};
type OFTReceiptStructOutput$1 = [BigNumber, BigNumber] & {
    amountSentLD: BigNumber;
    amountReceivedLD: BigNumber;
};
type MessagingFeeStruct$2 = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStructOutput$2 = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    lzTokenFee: BigNumber;
};
type OriginStruct$2 = {
    srcEid: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    nonce: PromiseOrValue<BigNumberish>;
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
type TargetCreditStruct$1 = {
    srcEid: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    minAmount: PromiseOrValue<BigNumberish>;
};
type TicketStructOutput$2 = [BigNumber, string] & {
    ticketId: BigNumber;
    passengerBytes: string;
};
declare namespace StargateBase$1 {
    type AddressConfigStruct = {
        feeLib: PromiseOrValue<string>;
        planner: PromiseOrValue<string>;
        treasurer: PromiseOrValue<string>;
        tokenMessaging: PromiseOrValue<string>;
        creditMessaging: PromiseOrValue<string>;
        lzToken: PromiseOrValue<string>;
    };
    type AddressConfigStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        feeLib: string;
        planner: string;
        treasurer: string;
        tokenMessaging: string;
        creditMessaging: string;
        lzToken: string;
    };
}
interface StargatePoolInterface extends utils.Interface {
    functions: {
        "addTreasuryFee(uint256)": FunctionFragment;
        "allowBurn(address,uint64)": FunctionFragment;
        "approvalRequired()": FunctionFragment;
        "burnAdmin()": FunctionFragment;
        "burnAllowanceSD()": FunctionFragment;
        "burnLockedUSDC()": FunctionFragment;
        "deficitOffset()": FunctionFragment;
        "deposit(address,uint256)": FunctionFragment;
        "endpoint()": FunctionFragment;
        "getAddressConfig()": FunctionFragment;
        "getTransferGasLimit()": FunctionFragment;
        "localEid()": FunctionFragment;
        "lpToken()": FunctionFragment;
        "oftVersion()": FunctionFragment;
        "owner()": FunctionFragment;
        "paths(uint32)": FunctionFragment;
        "plannerFee()": FunctionFragment;
        "poolBalance()": FunctionFragment;
        "quoteOFT((uint32,bytes32,uint256,uint256,bytes,bytes,bytes))": FunctionFragment;
        "quoteRedeemSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)": FunctionFragment;
        "quoteSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)": FunctionFragment;
        "receiveCredits(uint32,(uint32,uint64)[])": FunctionFragment;
        "receiveTokenBus((uint32,bytes32,uint64),bytes32,uint8,address,uint64)": FunctionFragment;
        "receiveTokenTaxi((uint32,bytes32,uint64),bytes32,address,uint64,bytes)": FunctionFragment;
        "recoverToken(address,address,uint256)": FunctionFragment;
        "redeem(uint256,address)": FunctionFragment;
        "redeemSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "redeemable(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryReceiveToken(bytes32,uint8,uint32,address,uint256,bytes)": FunctionFragment;
        "send((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "sendCredits(uint32,(uint32,uint64,uint64)[])": FunctionFragment;
        "sendToken((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "setAddressConfig((address,address,address,address,address,address))": FunctionFragment;
        "setDeficitOffset(uint256)": FunctionFragment;
        "setOFTPath(uint32,bool)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "setTransferGasLimit(uint256)": FunctionFragment;
        "sharedDecimals()": FunctionFragment;
        "stargateType()": FunctionFragment;
        "status()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "treasuryFee()": FunctionFragment;
        "tvl()": FunctionFragment;
        "unreceivedTokens(bytes32,uint8)": FunctionFragment;
        "withdrawPlannerFee()": FunctionFragment;
        "withdrawTreasuryFee(address,uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addTreasuryFee" | "allowBurn" | "approvalRequired" | "burnAdmin" | "burnAllowanceSD" | "burnLockedUSDC" | "deficitOffset" | "deposit" | "endpoint" | "getAddressConfig" | "getTransferGasLimit" | "localEid" | "lpToken" | "oftVersion" | "owner" | "paths" | "plannerFee" | "poolBalance" | "quoteOFT" | "quoteRedeemSend" | "quoteSend" | "receiveCredits" | "receiveTokenBus" | "receiveTokenTaxi" | "recoverToken" | "redeem" | "redeemSend" | "redeemable" | "renounceOwnership" | "retryReceiveToken" | "send" | "sendCredits" | "sendToken" | "setAddressConfig" | "setDeficitOffset" | "setOFTPath" | "setPause" | "setTransferGasLimit" | "sharedDecimals" | "stargateType" | "status" | "token" | "transferOwnership" | "treasuryFee" | "tvl" | "unreceivedTokens" | "withdrawPlannerFee" | "withdrawTreasuryFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "addTreasuryFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allowBurn", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approvalRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnAllowanceSD", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnLockedUSDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "deficitOffset", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddressConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTransferGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "localEid", values?: undefined): string;
    encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "oftVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paths", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "plannerFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteOFT", values: [SendParamStruct$1]): string;
    encodeFunctionData(functionFragment: "quoteRedeemSend", values: [SendParamStruct$1, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "quoteSend", values: [SendParamStruct$1, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "receiveCredits", values: [PromiseOrValue<BigNumberish>, CreditStruct$1[]]): string;
    encodeFunctionData(functionFragment: "receiveTokenBus", values: [
        OriginStruct$2,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "receiveTokenTaxi", values: [
        OriginStruct$2,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "recoverToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeem", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "redeemSend", values: [SendParamStruct$1, MessagingFeeStruct$2, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "redeemable", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryReceiveToken", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [SendParamStruct$1, MessagingFeeStruct$2, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sendCredits", values: [PromiseOrValue<BigNumberish>, TargetCreditStruct$1[]]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [SendParamStruct$1, MessagingFeeStruct$2, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAddressConfig", values: [StargateBase$1.AddressConfigStruct]): string;
    encodeFunctionData(functionFragment: "setDeficitOffset", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setOFTPath", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setTransferGasLimit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sharedDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargateType", values?: undefined): string;
    encodeFunctionData(functionFragment: "status", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "treasuryFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "tvl", values?: undefined): string;
    encodeFunctionData(functionFragment: "unreceivedTokens", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawPlannerFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTreasuryFee", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addTreasuryFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvalRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnAllowanceSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnLockedUSDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deficitOffset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransferGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oftVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plannerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRedeemSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveTokenBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveTokenTaxi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryReceiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDeficitOffset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOFTPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTransferGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tvl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unreceivedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawPlannerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTreasuryFee", data: BytesLike): Result;
    events: {
        "AddressConfigSet(tuple)": EventFragment;
        "CreditsReceived(uint32,tuple[])": EventFragment;
        "CreditsSent(uint32,tuple[])": EventFragment;
        "Deposited(address,address,uint256)": EventFragment;
        "OFTPathSet(uint32,bool)": EventFragment;
        "OFTReceived(bytes32,uint32,address,uint256)": EventFragment;
        "OFTSent(bytes32,uint32,address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Path_CreditBurned(uint64)": EventFragment;
        "PauseSet(bool)": EventFragment;
        "PlannerFeeWithdrawn(uint256)": EventFragment;
        "Redeemed(address,address,uint256)": EventFragment;
        "TreasuryFeeAdded(uint64)": EventFragment;
        "TreasuryFeeWithdrawn(address,uint64)": EventFragment;
        "UnreceivedTokenCached(bytes32,uint8,uint32,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditsReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditsSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTPathSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Path_CreditBurned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauseSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlannerFeeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TreasuryFeeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TreasuryFeeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnreceivedTokenCached"): EventFragment;
}
interface AddressConfigSetEventObject$1 {
    config: StargateBase$1.AddressConfigStructOutput;
}
type AddressConfigSetEvent$1 = TypedEvent<[
    StargateBase$1.AddressConfigStructOutput
], AddressConfigSetEventObject$1>;
type AddressConfigSetEventFilter$1 = TypedEventFilter<AddressConfigSetEvent$1>;
interface CreditsReceivedEventObject$1 {
    srcEid: number;
    credits: CreditStructOutput$1[];
}
type CreditsReceivedEvent$1 = TypedEvent<[
    number,
    CreditStructOutput$1[]
], CreditsReceivedEventObject$1>;
type CreditsReceivedEventFilter$1 = TypedEventFilter<CreditsReceivedEvent$1>;
interface CreditsSentEventObject$1 {
    dstEid: number;
    credits: CreditStructOutput$1[];
}
type CreditsSentEvent$1 = TypedEvent<[
    number,
    CreditStructOutput$1[]
], CreditsSentEventObject$1>;
type CreditsSentEventFilter$1 = TypedEventFilter<CreditsSentEvent$1>;
interface DepositedEventObject$1 {
    payer: string;
    receiver: string;
    amountLD: BigNumber;
}
type DepositedEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], DepositedEventObject$1>;
type DepositedEventFilter$1 = TypedEventFilter<DepositedEvent$1>;
interface OFTPathSetEventObject$1 {
    dstEid: number;
    oft: boolean;
}
type OFTPathSetEvent$1 = TypedEvent<[
    number,
    boolean
], OFTPathSetEventObject$1>;
type OFTPathSetEventFilter$1 = TypedEventFilter<OFTPathSetEvent$1>;
interface OFTReceivedEventObject$1 {
    guid: string;
    srcEid: number;
    toAddress: string;
    amountReceivedLD: BigNumber;
}
type OFTReceivedEvent$1 = TypedEvent<[
    string,
    number,
    string,
    BigNumber
], OFTReceivedEventObject$1>;
type OFTReceivedEventFilter$1 = TypedEventFilter<OFTReceivedEvent$1>;
interface OFTSentEventObject$1 {
    guid: string;
    dstEid: number;
    fromAddress: string;
    amountSentLD: BigNumber;
    amountReceivedLD: BigNumber;
}
type OFTSentEvent$1 = TypedEvent<[
    string,
    number,
    string,
    BigNumber,
    BigNumber
], OFTSentEventObject$1>;
type OFTSentEventFilter$1 = TypedEventFilter<OFTSentEvent$1>;
interface OwnershipTransferredEventObject$2 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$2 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$2>;
type OwnershipTransferredEventFilter$2 = TypedEventFilter<OwnershipTransferredEvent$2>;
interface Path_CreditBurnedEventObject {
    amountSD: BigNumber;
}
type Path_CreditBurnedEvent = TypedEvent<[
    BigNumber
], Path_CreditBurnedEventObject>;
type Path_CreditBurnedEventFilter = TypedEventFilter<Path_CreditBurnedEvent>;
interface PauseSetEventObject$1 {
    paused: boolean;
}
type PauseSetEvent$1 = TypedEvent<[boolean], PauseSetEventObject$1>;
type PauseSetEventFilter$1 = TypedEventFilter<PauseSetEvent$1>;
interface PlannerFeeWithdrawnEventObject$1 {
    amount: BigNumber;
}
type PlannerFeeWithdrawnEvent$1 = TypedEvent<[
    BigNumber
], PlannerFeeWithdrawnEventObject$1>;
type PlannerFeeWithdrawnEventFilter$1 = TypedEventFilter<PlannerFeeWithdrawnEvent$1>;
interface RedeemedEventObject$1 {
    payer: string;
    receiver: string;
    amountLD: BigNumber;
}
type RedeemedEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], RedeemedEventObject$1>;
type RedeemedEventFilter$1 = TypedEventFilter<RedeemedEvent$1>;
interface TreasuryFeeAddedEventObject$1 {
    amountSD: BigNumber;
}
type TreasuryFeeAddedEvent$1 = TypedEvent<[
    BigNumber
], TreasuryFeeAddedEventObject$1>;
type TreasuryFeeAddedEventFilter$1 = TypedEventFilter<TreasuryFeeAddedEvent$1>;
interface TreasuryFeeWithdrawnEventObject$1 {
    to: string;
    amountSD: BigNumber;
}
type TreasuryFeeWithdrawnEvent$1 = TypedEvent<[
    string,
    BigNumber
], TreasuryFeeWithdrawnEventObject$1>;
type TreasuryFeeWithdrawnEventFilter$1 = TypedEventFilter<TreasuryFeeWithdrawnEvent$1>;
interface UnreceivedTokenCachedEventObject$1 {
    guid: string;
    index: number;
    srcEid: number;
    receiver: string;
    amountLD: BigNumber;
    composeMsg: string;
}
type UnreceivedTokenCachedEvent$1 = TypedEvent<[
    string,
    number,
    number,
    string,
    BigNumber,
    string
], UnreceivedTokenCachedEventObject$1>;
type UnreceivedTokenCachedEventFilter$1 = TypedEventFilter<UnreceivedTokenCachedEvent$1>;
interface StargatePool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargatePoolInterface;
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
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowBurn(_burnAdmin: PromiseOrValue<string>, _burnAllowanceSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approvalRequired(overrides?: CallOverrides): Promise<[boolean]>;
        burnAdmin(overrides?: CallOverrides): Promise<[string]>;
        burnAllowanceSD(overrides?: CallOverrides): Promise<[BigNumber]>;
        burnLockedUSDC(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deficitOffset(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        endpoint(overrides?: CallOverrides): Promise<[string]>;
        getAddressConfig(overrides?: CallOverrides): Promise<[StargateBase$1.AddressConfigStructOutput]>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        localEid(overrides?: CallOverrides): Promise<[number]>;
        lpToken(overrides?: CallOverrides): Promise<[string]>;
        oftVersion(overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            interfaceId: string;
            version: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            credit: BigNumber;
        }>;
        plannerFee(overrides?: CallOverrides): Promise<[BigNumber] & {
            available: BigNumber;
        }>;
        poolBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        quoteOFT(_sendParam: SendParamStruct$1, overrides?: CallOverrides): Promise<[
            OFTLimitStructOutput$1,
            OFTFeeDetailStructOutput$1[],
            OFTReceiptStructOutput$1
        ] & {
            limit: OFTLimitStructOutput$1;
            oftFeeDetails: OFTFeeDetailStructOutput$1[];
            receipt: OFTReceiptStructOutput$1;
        }>;
        quoteRedeemSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[MessagingFeeStructOutput$2] & {
            fee: MessagingFeeStructOutput$2;
        }>;
        quoteSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[MessagingFeeStructOutput$2] & {
            fee: MessagingFeeStructOutput$2;
        }>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveTokenBus(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveTokenTaxi(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemSend(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountLD: BigNumber;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendToken(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAddressConfig(_config: StargateBase$1.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<[number]>;
        stargateType(overrides?: CallOverrides): Promise<[number]>;
        status(overrides?: CallOverrides): Promise<[number]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        treasuryFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        tvl(overrides?: CallOverrides): Promise<[BigNumber]>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            hash: string;
        }>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowBurn(_burnAdmin: PromiseOrValue<string>, _burnAllowanceSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approvalRequired(overrides?: CallOverrides): Promise<boolean>;
    burnAdmin(overrides?: CallOverrides): Promise<string>;
    burnAllowanceSD(overrides?: CallOverrides): Promise<BigNumber>;
    burnLockedUSDC(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deficitOffset(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    endpoint(overrides?: CallOverrides): Promise<string>;
    getAddressConfig(overrides?: CallOverrides): Promise<StargateBase$1.AddressConfigStructOutput>;
    getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    localEid(overrides?: CallOverrides): Promise<number>;
    lpToken(overrides?: CallOverrides): Promise<string>;
    oftVersion(overrides?: CallOverrides): Promise<[string, BigNumber] & {
        interfaceId: string;
        version: BigNumber;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
    poolBalance(overrides?: CallOverrides): Promise<BigNumber>;
    quoteOFT(_sendParam: SendParamStruct$1, overrides?: CallOverrides): Promise<[
        OFTLimitStructOutput$1,
        OFTFeeDetailStructOutput$1[],
        OFTReceiptStructOutput$1
    ] & {
        limit: OFTLimitStructOutput$1;
        oftFeeDetails: OFTFeeDetailStructOutput$1[];
        receipt: OFTReceiptStructOutput$1;
    }>;
    quoteRedeemSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$2>;
    quoteSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$2>;
    receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$1[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveTokenBus(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveTokenTaxi(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemSend(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$1[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendToken(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAddressConfig(_config: StargateBase$1.AddressConfigStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sharedDecimals(overrides?: CallOverrides): Promise<number>;
    stargateType(overrides?: CallOverrides): Promise<number>;
    status(overrides?: CallOverrides): Promise<number>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
    tvl(overrides?: CallOverrides): Promise<BigNumber>;
    unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    withdrawPlannerFee(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        allowBurn(_burnAdmin: PromiseOrValue<string>, _burnAllowanceSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approvalRequired(overrides?: CallOverrides): Promise<boolean>;
        burnAdmin(overrides?: CallOverrides): Promise<string>;
        burnAllowanceSD(overrides?: CallOverrides): Promise<BigNumber>;
        burnLockedUSDC(overrides?: CallOverrides): Promise<void>;
        deficitOffset(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<string>;
        getAddressConfig(overrides?: CallOverrides): Promise<StargateBase$1.AddressConfigStructOutput>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        localEid(overrides?: CallOverrides): Promise<number>;
        lpToken(overrides?: CallOverrides): Promise<string>;
        oftVersion(overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            interfaceId: string;
            version: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
        poolBalance(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFT(_sendParam: SendParamStruct$1, overrides?: CallOverrides): Promise<[
            OFTLimitStructOutput$1,
            OFTFeeDetailStructOutput$1[],
            OFTReceiptStructOutput$1
        ] & {
            limit: OFTLimitStructOutput$1;
            oftFeeDetails: OFTFeeDetailStructOutput$1[];
            receipt: OFTReceiptStructOutput$1;
        }>;
        quoteRedeemSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$2>;
        quoteSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$2>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$1[], overrides?: CallOverrides): Promise<void>;
        receiveTokenBus(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        receiveTokenTaxi(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemSend(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput$2,
            OFTReceiptStructOutput$1
        ] & {
            msgReceipt: MessagingReceiptStructOutput$2;
            oftReceipt: OFTReceiptStructOutput$1;
        }>;
        redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        send(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput$2,
            OFTReceiptStructOutput$1
        ] & {
            msgReceipt: MessagingReceiptStructOutput$2;
            oftReceipt: OFTReceiptStructOutput$1;
        }>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$1[], overrides?: CallOverrides): Promise<CreditStructOutput$1[]>;
        sendToken(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput$2,
            OFTReceiptStructOutput$1,
            TicketStructOutput$2
        ] & {
            msgReceipt: MessagingReceiptStructOutput$2;
            oftReceipt: OFTReceiptStructOutput$1;
            ticket: TicketStructOutput$2;
        }>;
        setAddressConfig(_config: StargateBase$1.AddressConfigStruct, overrides?: CallOverrides): Promise<void>;
        setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sharedDecimals(overrides?: CallOverrides): Promise<number>;
        stargateType(overrides?: CallOverrides): Promise<number>;
        status(overrides?: CallOverrides): Promise<number>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
        tvl(overrides?: CallOverrides): Promise<BigNumber>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        withdrawPlannerFee(overrides?: CallOverrides): Promise<void>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressConfigSet(tuple)"(config?: null): AddressConfigSetEventFilter$1;
        AddressConfigSet(config?: null): AddressConfigSetEventFilter$1;
        "CreditsReceived(uint32,tuple[])"(srcEid?: null, credits?: null): CreditsReceivedEventFilter$1;
        CreditsReceived(srcEid?: null, credits?: null): CreditsReceivedEventFilter$1;
        "CreditsSent(uint32,tuple[])"(dstEid?: null, credits?: null): CreditsSentEventFilter$1;
        CreditsSent(dstEid?: null, credits?: null): CreditsSentEventFilter$1;
        "Deposited(address,address,uint256)"(payer?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amountLD?: null): DepositedEventFilter$1;
        Deposited(payer?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amountLD?: null): DepositedEventFilter$1;
        "OFTPathSet(uint32,bool)"(dstEid?: null, oft?: null): OFTPathSetEventFilter$1;
        OFTPathSet(dstEid?: null, oft?: null): OFTPathSetEventFilter$1;
        "OFTReceived(bytes32,uint32,address,uint256)"(guid?: PromiseOrValue<BytesLike> | null, srcEid?: null, toAddress?: PromiseOrValue<string> | null, amountReceivedLD?: null): OFTReceivedEventFilter$1;
        OFTReceived(guid?: PromiseOrValue<BytesLike> | null, srcEid?: null, toAddress?: PromiseOrValue<string> | null, amountReceivedLD?: null): OFTReceivedEventFilter$1;
        "OFTSent(bytes32,uint32,address,uint256,uint256)"(guid?: PromiseOrValue<BytesLike> | null, dstEid?: null, fromAddress?: PromiseOrValue<string> | null, amountSentLD?: null, amountReceivedLD?: null): OFTSentEventFilter$1;
        OFTSent(guid?: PromiseOrValue<BytesLike> | null, dstEid?: null, fromAddress?: PromiseOrValue<string> | null, amountSentLD?: null, amountReceivedLD?: null): OFTSentEventFilter$1;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        "Path_CreditBurned(uint64)"(amountSD?: null): Path_CreditBurnedEventFilter;
        Path_CreditBurned(amountSD?: null): Path_CreditBurnedEventFilter;
        "PauseSet(bool)"(paused?: null): PauseSetEventFilter$1;
        PauseSet(paused?: null): PauseSetEventFilter$1;
        "PlannerFeeWithdrawn(uint256)"(amount?: null): PlannerFeeWithdrawnEventFilter$1;
        PlannerFeeWithdrawn(amount?: null): PlannerFeeWithdrawnEventFilter$1;
        "Redeemed(address,address,uint256)"(payer?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amountLD?: null): RedeemedEventFilter$1;
        Redeemed(payer?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amountLD?: null): RedeemedEventFilter$1;
        "TreasuryFeeAdded(uint64)"(amountSD?: null): TreasuryFeeAddedEventFilter$1;
        TreasuryFeeAdded(amountSD?: null): TreasuryFeeAddedEventFilter$1;
        "TreasuryFeeWithdrawn(address,uint64)"(to?: null, amountSD?: null): TreasuryFeeWithdrawnEventFilter$1;
        TreasuryFeeWithdrawn(to?: null, amountSD?: null): TreasuryFeeWithdrawnEventFilter$1;
        "UnreceivedTokenCached(bytes32,uint8,uint32,address,uint256,bytes)"(guid?: null, index?: null, srcEid?: null, receiver?: null, amountLD?: null, composeMsg?: null): UnreceivedTokenCachedEventFilter$1;
        UnreceivedTokenCached(guid?: null, index?: null, srcEid?: null, receiver?: null, amountLD?: null, composeMsg?: null): UnreceivedTokenCachedEventFilter$1;
    };
    estimateGas: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowBurn(_burnAdmin: PromiseOrValue<string>, _burnAllowanceSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approvalRequired(overrides?: CallOverrides): Promise<BigNumber>;
        burnAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        burnAllowanceSD(overrides?: CallOverrides): Promise<BigNumber>;
        burnLockedUSDC(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deficitOffset(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<BigNumber>;
        getAddressConfig(overrides?: CallOverrides): Promise<BigNumber>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        localEid(overrides?: CallOverrides): Promise<BigNumber>;
        lpToken(overrides?: CallOverrides): Promise<BigNumber>;
        oftVersion(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
        poolBalance(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFT(_sendParam: SendParamStruct$1, overrides?: CallOverrides): Promise<BigNumber>;
        quoteRedeemSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveTokenBus(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveTokenTaxi(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemSend(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendToken(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAddressConfig(_config: StargateBase$1.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        stargateType(overrides?: CallOverrides): Promise<BigNumber>;
        status(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
        tvl(overrides?: CallOverrides): Promise<BigNumber>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowBurn(_burnAdmin: PromiseOrValue<string>, _burnAllowanceSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approvalRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnAllowanceSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnLockedUSDC(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deficitOffset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localEid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oftVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        plannerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteOFT(_sendParam: SendParamStruct$1, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRedeemSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSend(_sendParam: SendParamStruct$1, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveTokenBus(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveTokenTaxi(_origin: OriginStruct$2, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemSend(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendToken(_sendParam: SendParamStruct$1, _fee: MessagingFeeStruct$2, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAddressConfig(_config: StargateBase$1.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargateType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        status(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        treasuryFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tvl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

type CreditStruct = {
    srcEid: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
};
type CreditStructOutput = [number, BigNumber] & {
    srcEid: number;
    amount: BigNumber;
};
type SendParamStruct = {
    dstEid: PromiseOrValue<BigNumberish>;
    to: PromiseOrValue<BytesLike>;
    amountLD: PromiseOrValue<BigNumberish>;
    minAmountLD: PromiseOrValue<BigNumberish>;
    extraOptions: PromiseOrValue<BytesLike>;
    composeMsg: PromiseOrValue<BytesLike>;
    oftCmd: PromiseOrValue<BytesLike>;
};
type OFTLimitStructOutput = [BigNumber, BigNumber] & {
    minAmountLD: BigNumber;
    maxAmountLD: BigNumber;
};
type OFTFeeDetailStructOutput = [BigNumber, string] & {
    feeAmountLD: BigNumber;
    description: string;
};
type OFTReceiptStructOutput = [BigNumber, BigNumber] & {
    amountSentLD: BigNumber;
    amountReceivedLD: BigNumber;
};
type MessagingFeeStruct$1 = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStructOutput$1 = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    lzTokenFee: BigNumber;
};
type OriginStruct$1 = {
    srcEid: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    nonce: PromiseOrValue<BigNumberish>;
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
type TargetCreditStruct = {
    srcEid: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    minAmount: PromiseOrValue<BigNumberish>;
};
type TicketStructOutput$1 = [BigNumber, string] & {
    ticketId: BigNumber;
    passengerBytes: string;
};
declare namespace StargateBase {
    type AddressConfigStruct = {
        feeLib: PromiseOrValue<string>;
        planner: PromiseOrValue<string>;
        treasurer: PromiseOrValue<string>;
        tokenMessaging: PromiseOrValue<string>;
        creditMessaging: PromiseOrValue<string>;
        lzToken: PromiseOrValue<string>;
    };
    type AddressConfigStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        feeLib: string;
        planner: string;
        treasurer: string;
        tokenMessaging: string;
        creditMessaging: string;
        lzToken: string;
    };
}
interface StargatePoolNativeInterface extends utils.Interface {
    functions: {
        "addTreasuryFee(uint256)": FunctionFragment;
        "approvalRequired()": FunctionFragment;
        "deficitOffset()": FunctionFragment;
        "deposit(address,uint256)": FunctionFragment;
        "endpoint()": FunctionFragment;
        "getAddressConfig()": FunctionFragment;
        "getTransferGasLimit()": FunctionFragment;
        "localEid()": FunctionFragment;
        "lpToken()": FunctionFragment;
        "oftVersion()": FunctionFragment;
        "owner()": FunctionFragment;
        "paths(uint32)": FunctionFragment;
        "plannerFee()": FunctionFragment;
        "poolBalance()": FunctionFragment;
        "quoteOFT((uint32,bytes32,uint256,uint256,bytes,bytes,bytes))": FunctionFragment;
        "quoteRedeemSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)": FunctionFragment;
        "quoteSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)": FunctionFragment;
        "receiveCredits(uint32,(uint32,uint64)[])": FunctionFragment;
        "receiveTokenBus((uint32,bytes32,uint64),bytes32,uint8,address,uint64)": FunctionFragment;
        "receiveTokenTaxi((uint32,bytes32,uint64),bytes32,address,uint64,bytes)": FunctionFragment;
        "recoverToken(address,address,uint256)": FunctionFragment;
        "redeem(uint256,address)": FunctionFragment;
        "redeemSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "redeemable(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryReceiveToken(bytes32,uint8,uint32,address,uint256,bytes)": FunctionFragment;
        "send((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "sendCredits(uint32,(uint32,uint64,uint64)[])": FunctionFragment;
        "sendToken((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "setAddressConfig((address,address,address,address,address,address))": FunctionFragment;
        "setDeficitOffset(uint256)": FunctionFragment;
        "setOFTPath(uint32,bool)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "setTransferGasLimit(uint256)": FunctionFragment;
        "sharedDecimals()": FunctionFragment;
        "stargateType()": FunctionFragment;
        "status()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "treasuryFee()": FunctionFragment;
        "tvl()": FunctionFragment;
        "unreceivedTokens(bytes32,uint8)": FunctionFragment;
        "withdrawPlannerFee()": FunctionFragment;
        "withdrawTreasuryFee(address,uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addTreasuryFee" | "approvalRequired" | "deficitOffset" | "deposit" | "endpoint" | "getAddressConfig" | "getTransferGasLimit" | "localEid" | "lpToken" | "oftVersion" | "owner" | "paths" | "plannerFee" | "poolBalance" | "quoteOFT" | "quoteRedeemSend" | "quoteSend" | "receiveCredits" | "receiveTokenBus" | "receiveTokenTaxi" | "recoverToken" | "redeem" | "redeemSend" | "redeemable" | "renounceOwnership" | "retryReceiveToken" | "send" | "sendCredits" | "sendToken" | "setAddressConfig" | "setDeficitOffset" | "setOFTPath" | "setPause" | "setTransferGasLimit" | "sharedDecimals" | "stargateType" | "status" | "token" | "transferOwnership" | "treasuryFee" | "tvl" | "unreceivedTokens" | "withdrawPlannerFee" | "withdrawTreasuryFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "addTreasuryFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approvalRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "deficitOffset", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddressConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTransferGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "localEid", values?: undefined): string;
    encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "oftVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paths", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "plannerFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteOFT", values: [SendParamStruct]): string;
    encodeFunctionData(functionFragment: "quoteRedeemSend", values: [SendParamStruct, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "quoteSend", values: [SendParamStruct, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "receiveCredits", values: [PromiseOrValue<BigNumberish>, CreditStruct[]]): string;
    encodeFunctionData(functionFragment: "receiveTokenBus", values: [
        OriginStruct$1,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "receiveTokenTaxi", values: [
        OriginStruct$1,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "recoverToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeem", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "redeemSend", values: [SendParamStruct, MessagingFeeStruct$1, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "redeemable", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryReceiveToken", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [SendParamStruct, MessagingFeeStruct$1, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sendCredits", values: [PromiseOrValue<BigNumberish>, TargetCreditStruct[]]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [SendParamStruct, MessagingFeeStruct$1, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAddressConfig", values: [StargateBase.AddressConfigStruct]): string;
    encodeFunctionData(functionFragment: "setDeficitOffset", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setOFTPath", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setTransferGasLimit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sharedDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargateType", values?: undefined): string;
    encodeFunctionData(functionFragment: "status", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "treasuryFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "tvl", values?: undefined): string;
    encodeFunctionData(functionFragment: "unreceivedTokens", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawPlannerFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTreasuryFee", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addTreasuryFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvalRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deficitOffset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransferGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oftVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plannerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRedeemSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveTokenBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveTokenTaxi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryReceiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDeficitOffset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOFTPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTransferGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tvl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unreceivedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawPlannerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTreasuryFee", data: BytesLike): Result;
    events: {
        "AddressConfigSet(tuple)": EventFragment;
        "CreditsReceived(uint32,tuple[])": EventFragment;
        "CreditsSent(uint32,tuple[])": EventFragment;
        "Deposited(address,address,uint256)": EventFragment;
        "OFTPathSet(uint32,bool)": EventFragment;
        "OFTReceived(bytes32,uint32,address,uint256)": EventFragment;
        "OFTSent(bytes32,uint32,address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PauseSet(bool)": EventFragment;
        "PlannerFeeWithdrawn(uint256)": EventFragment;
        "Redeemed(address,address,uint256)": EventFragment;
        "TreasuryFeeAdded(uint64)": EventFragment;
        "TreasuryFeeWithdrawn(address,uint64)": EventFragment;
        "UnreceivedTokenCached(bytes32,uint8,uint32,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditsReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditsSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTPathSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauseSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlannerFeeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TreasuryFeeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TreasuryFeeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnreceivedTokenCached"): EventFragment;
}
interface AddressConfigSetEventObject {
    config: StargateBase.AddressConfigStructOutput;
}
type AddressConfigSetEvent = TypedEvent<[
    StargateBase.AddressConfigStructOutput
], AddressConfigSetEventObject>;
type AddressConfigSetEventFilter = TypedEventFilter<AddressConfigSetEvent>;
interface CreditsReceivedEventObject {
    srcEid: number;
    credits: CreditStructOutput[];
}
type CreditsReceivedEvent = TypedEvent<[
    number,
    CreditStructOutput[]
], CreditsReceivedEventObject>;
type CreditsReceivedEventFilter = TypedEventFilter<CreditsReceivedEvent>;
interface CreditsSentEventObject {
    dstEid: number;
    credits: CreditStructOutput[];
}
type CreditsSentEvent = TypedEvent<[
    number,
    CreditStructOutput[]
], CreditsSentEventObject>;
type CreditsSentEventFilter = TypedEventFilter<CreditsSentEvent>;
interface DepositedEventObject {
    payer: string;
    receiver: string;
    amountLD: BigNumber;
}
type DepositedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], DepositedEventObject>;
type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
interface OFTPathSetEventObject {
    dstEid: number;
    oft: boolean;
}
type OFTPathSetEvent = TypedEvent<[
    number,
    boolean
], OFTPathSetEventObject>;
type OFTPathSetEventFilter = TypedEventFilter<OFTPathSetEvent>;
interface OFTReceivedEventObject {
    guid: string;
    srcEid: number;
    toAddress: string;
    amountReceivedLD: BigNumber;
}
type OFTReceivedEvent = TypedEvent<[
    string,
    number,
    string,
    BigNumber
], OFTReceivedEventObject>;
type OFTReceivedEventFilter = TypedEventFilter<OFTReceivedEvent>;
interface OFTSentEventObject {
    guid: string;
    dstEid: number;
    fromAddress: string;
    amountSentLD: BigNumber;
    amountReceivedLD: BigNumber;
}
type OFTSentEvent = TypedEvent<[
    string,
    number,
    string,
    BigNumber,
    BigNumber
], OFTSentEventObject>;
type OFTSentEventFilter = TypedEventFilter<OFTSentEvent>;
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
interface PauseSetEventObject {
    paused: boolean;
}
type PauseSetEvent = TypedEvent<[boolean], PauseSetEventObject>;
type PauseSetEventFilter = TypedEventFilter<PauseSetEvent>;
interface PlannerFeeWithdrawnEventObject {
    amount: BigNumber;
}
type PlannerFeeWithdrawnEvent = TypedEvent<[
    BigNumber
], PlannerFeeWithdrawnEventObject>;
type PlannerFeeWithdrawnEventFilter = TypedEventFilter<PlannerFeeWithdrawnEvent>;
interface RedeemedEventObject {
    payer: string;
    receiver: string;
    amountLD: BigNumber;
}
type RedeemedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RedeemedEventObject>;
type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;
interface TreasuryFeeAddedEventObject {
    amountSD: BigNumber;
}
type TreasuryFeeAddedEvent = TypedEvent<[
    BigNumber
], TreasuryFeeAddedEventObject>;
type TreasuryFeeAddedEventFilter = TypedEventFilter<TreasuryFeeAddedEvent>;
interface TreasuryFeeWithdrawnEventObject {
    to: string;
    amountSD: BigNumber;
}
type TreasuryFeeWithdrawnEvent = TypedEvent<[
    string,
    BigNumber
], TreasuryFeeWithdrawnEventObject>;
type TreasuryFeeWithdrawnEventFilter = TypedEventFilter<TreasuryFeeWithdrawnEvent>;
interface UnreceivedTokenCachedEventObject {
    guid: string;
    index: number;
    srcEid: number;
    receiver: string;
    amountLD: BigNumber;
    composeMsg: string;
}
type UnreceivedTokenCachedEvent = TypedEvent<[
    string,
    number,
    number,
    string,
    BigNumber,
    string
], UnreceivedTokenCachedEventObject>;
type UnreceivedTokenCachedEventFilter = TypedEventFilter<UnreceivedTokenCachedEvent>;
interface StargatePoolNative extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargatePoolNativeInterface;
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
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approvalRequired(overrides?: CallOverrides): Promise<[boolean]>;
        deficitOffset(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        endpoint(overrides?: CallOverrides): Promise<[string]>;
        getAddressConfig(overrides?: CallOverrides): Promise<[StargateBase.AddressConfigStructOutput]>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        localEid(overrides?: CallOverrides): Promise<[number]>;
        lpToken(overrides?: CallOverrides): Promise<[string]>;
        oftVersion(overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            interfaceId: string;
            version: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            credit: BigNumber;
        }>;
        plannerFee(overrides?: CallOverrides): Promise<[BigNumber] & {
            available: BigNumber;
        }>;
        poolBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<[
            OFTLimitStructOutput,
            OFTFeeDetailStructOutput[],
            OFTReceiptStructOutput
        ] & {
            limit: OFTLimitStructOutput;
            oftFeeDetails: OFTFeeDetailStructOutput[];
            receipt: OFTReceiptStructOutput;
        }>;
        quoteRedeemSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[MessagingFeeStructOutput$1] & {
            fee: MessagingFeeStructOutput$1;
        }>;
        quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[MessagingFeeStructOutput$1] & {
            fee: MessagingFeeStructOutput$1;
        }>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveTokenBus(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveTokenTaxi(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemSend(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountLD: BigNumber;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendToken(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAddressConfig(_config: StargateBase.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<[number]>;
        stargateType(overrides?: CallOverrides): Promise<[number]>;
        status(overrides?: CallOverrides): Promise<[number]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        treasuryFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        tvl(overrides?: CallOverrides): Promise<[BigNumber]>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            hash: string;
        }>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approvalRequired(overrides?: CallOverrides): Promise<boolean>;
    deficitOffset(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    endpoint(overrides?: CallOverrides): Promise<string>;
    getAddressConfig(overrides?: CallOverrides): Promise<StargateBase.AddressConfigStructOutput>;
    getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    localEid(overrides?: CallOverrides): Promise<number>;
    lpToken(overrides?: CallOverrides): Promise<string>;
    oftVersion(overrides?: CallOverrides): Promise<[string, BigNumber] & {
        interfaceId: string;
        version: BigNumber;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
    poolBalance(overrides?: CallOverrides): Promise<BigNumber>;
    quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<[
        OFTLimitStructOutput,
        OFTFeeDetailStructOutput[],
        OFTReceiptStructOutput
    ] & {
        limit: OFTLimitStructOutput;
        oftFeeDetails: OFTFeeDetailStructOutput[];
        receipt: OFTReceiptStructOutput;
    }>;
    quoteRedeemSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$1>;
    quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$1>;
    receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveTokenBus(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveTokenTaxi(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemSend(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendToken(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAddressConfig(_config: StargateBase.AddressConfigStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sharedDecimals(overrides?: CallOverrides): Promise<number>;
    stargateType(overrides?: CallOverrides): Promise<number>;
    status(overrides?: CallOverrides): Promise<number>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
    tvl(overrides?: CallOverrides): Promise<BigNumber>;
    unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    withdrawPlannerFee(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approvalRequired(overrides?: CallOverrides): Promise<boolean>;
        deficitOffset(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<string>;
        getAddressConfig(overrides?: CallOverrides): Promise<StargateBase.AddressConfigStructOutput>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        localEid(overrides?: CallOverrides): Promise<number>;
        lpToken(overrides?: CallOverrides): Promise<string>;
        oftVersion(overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            interfaceId: string;
            version: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
        poolBalance(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<[
            OFTLimitStructOutput,
            OFTFeeDetailStructOutput[],
            OFTReceiptStructOutput
        ] & {
            limit: OFTLimitStructOutput;
            oftFeeDetails: OFTFeeDetailStructOutput[];
            receipt: OFTReceiptStructOutput;
        }>;
        quoteRedeemSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$1>;
        quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput$1>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct[], overrides?: CallOverrides): Promise<void>;
        receiveTokenBus(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        receiveTokenTaxi(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemSend(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput$1,
            OFTReceiptStructOutput
        ] & {
            msgReceipt: MessagingReceiptStructOutput$1;
            oftReceipt: OFTReceiptStructOutput;
        }>;
        redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput$1,
            OFTReceiptStructOutput
        ] & {
            msgReceipt: MessagingReceiptStructOutput$1;
            oftReceipt: OFTReceiptStructOutput;
        }>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct[], overrides?: CallOverrides): Promise<CreditStructOutput[]>;
        sendToken(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput$1,
            OFTReceiptStructOutput,
            TicketStructOutput$1
        ] & {
            msgReceipt: MessagingReceiptStructOutput$1;
            oftReceipt: OFTReceiptStructOutput;
            ticket: TicketStructOutput$1;
        }>;
        setAddressConfig(_config: StargateBase.AddressConfigStruct, overrides?: CallOverrides): Promise<void>;
        setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sharedDecimals(overrides?: CallOverrides): Promise<number>;
        stargateType(overrides?: CallOverrides): Promise<number>;
        status(overrides?: CallOverrides): Promise<number>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
        tvl(overrides?: CallOverrides): Promise<BigNumber>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        withdrawPlannerFee(overrides?: CallOverrides): Promise<void>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressConfigSet(tuple)"(config?: null): AddressConfigSetEventFilter;
        AddressConfigSet(config?: null): AddressConfigSetEventFilter;
        "CreditsReceived(uint32,tuple[])"(srcEid?: null, credits?: null): CreditsReceivedEventFilter;
        CreditsReceived(srcEid?: null, credits?: null): CreditsReceivedEventFilter;
        "CreditsSent(uint32,tuple[])"(dstEid?: null, credits?: null): CreditsSentEventFilter;
        CreditsSent(dstEid?: null, credits?: null): CreditsSentEventFilter;
        "Deposited(address,address,uint256)"(payer?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amountLD?: null): DepositedEventFilter;
        Deposited(payer?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amountLD?: null): DepositedEventFilter;
        "OFTPathSet(uint32,bool)"(dstEid?: null, oft?: null): OFTPathSetEventFilter;
        OFTPathSet(dstEid?: null, oft?: null): OFTPathSetEventFilter;
        "OFTReceived(bytes32,uint32,address,uint256)"(guid?: PromiseOrValue<BytesLike> | null, srcEid?: null, toAddress?: PromiseOrValue<string> | null, amountReceivedLD?: null): OFTReceivedEventFilter;
        OFTReceived(guid?: PromiseOrValue<BytesLike> | null, srcEid?: null, toAddress?: PromiseOrValue<string> | null, amountReceivedLD?: null): OFTReceivedEventFilter;
        "OFTSent(bytes32,uint32,address,uint256,uint256)"(guid?: PromiseOrValue<BytesLike> | null, dstEid?: null, fromAddress?: PromiseOrValue<string> | null, amountSentLD?: null, amountReceivedLD?: null): OFTSentEventFilter;
        OFTSent(guid?: PromiseOrValue<BytesLike> | null, dstEid?: null, fromAddress?: PromiseOrValue<string> | null, amountSentLD?: null, amountReceivedLD?: null): OFTSentEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "PauseSet(bool)"(paused?: null): PauseSetEventFilter;
        PauseSet(paused?: null): PauseSetEventFilter;
        "PlannerFeeWithdrawn(uint256)"(amount?: null): PlannerFeeWithdrawnEventFilter;
        PlannerFeeWithdrawn(amount?: null): PlannerFeeWithdrawnEventFilter;
        "Redeemed(address,address,uint256)"(payer?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amountLD?: null): RedeemedEventFilter;
        Redeemed(payer?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amountLD?: null): RedeemedEventFilter;
        "TreasuryFeeAdded(uint64)"(amountSD?: null): TreasuryFeeAddedEventFilter;
        TreasuryFeeAdded(amountSD?: null): TreasuryFeeAddedEventFilter;
        "TreasuryFeeWithdrawn(address,uint64)"(to?: null, amountSD?: null): TreasuryFeeWithdrawnEventFilter;
        TreasuryFeeWithdrawn(to?: null, amountSD?: null): TreasuryFeeWithdrawnEventFilter;
        "UnreceivedTokenCached(bytes32,uint8,uint32,address,uint256,bytes)"(guid?: null, index?: null, srcEid?: null, receiver?: null, amountLD?: null, composeMsg?: null): UnreceivedTokenCachedEventFilter;
        UnreceivedTokenCached(guid?: null, index?: null, srcEid?: null, receiver?: null, amountLD?: null, composeMsg?: null): UnreceivedTokenCachedEventFilter;
    };
    estimateGas: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approvalRequired(overrides?: CallOverrides): Promise<BigNumber>;
        deficitOffset(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<BigNumber>;
        getAddressConfig(overrides?: CallOverrides): Promise<BigNumber>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        localEid(overrides?: CallOverrides): Promise<BigNumber>;
        lpToken(overrides?: CallOverrides): Promise<BigNumber>;
        oftVersion(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        plannerFee(overrides?: CallOverrides): Promise<BigNumber>;
        poolBalance(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<BigNumber>;
        quoteRedeemSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveTokenBus(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveTokenTaxi(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemSend(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendToken(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAddressConfig(_config: StargateBase.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        stargateType(overrides?: CallOverrides): Promise<BigNumber>;
        status(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        treasuryFee(overrides?: CallOverrides): Promise<BigNumber>;
        tvl(overrides?: CallOverrides): Promise<BigNumber>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addTreasuryFee(_amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approvalRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitOffset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localEid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oftVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paths(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        plannerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRedeemSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveCredits(_srcEid: PromiseOrValue<BigNumberish>, _credits: CreditStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveTokenBus(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _seatNumber: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveTokenTaxi(_origin: OriginStruct$1, _guid: PromiseOrValue<BytesLike>, _receiver: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recoverToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeem(_amountLD: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemSend(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemable(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryReceiveToken(_guid: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _srcEid: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _composeMsg: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _credits: TargetCreditStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendToken(_sendParam: SendParamStruct, _fee: MessagingFeeStruct$1, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAddressConfig(_config: StargateBase.AddressConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDeficitOffset(_deficitOffsetLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOFTPath(_dstEid: PromiseOrValue<BigNumberish>, _oft: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargateType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        status(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        treasuryFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tvl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unreceivedTokens(guid: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawPlannerFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTreasuryFee(_to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

type EnforcedOptionParamStruct = {
    eid: PromiseOrValue<BigNumberish>;
    msgType: PromiseOrValue<BigNumberish>;
    options: PromiseOrValue<BytesLike>;
};
type EnforcedOptionParamStructOutput = [number, number, string] & {
    eid: number;
    msgType: number;
    options: string;
};
type OriginStruct = {
    srcEid: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    nonce: PromiseOrValue<BigNumberish>;
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
type InboundPacketStruct = {
    origin: OriginStruct;
    dstEid: PromiseOrValue<BigNumberish>;
    receiver: PromiseOrValue<string>;
    guid: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BigNumberish>;
    executor: PromiseOrValue<string>;
    message: PromiseOrValue<BytesLike>;
    extraData: PromiseOrValue<BytesLike>;
};
type TaxiParamsStruct = {
    sender: PromiseOrValue<string>;
    dstEid: PromiseOrValue<BigNumberish>;
    receiver: PromiseOrValue<BytesLike>;
    amountSD: PromiseOrValue<BigNumberish>;
    composeMsg: PromiseOrValue<BytesLike>;
    extraOptions: PromiseOrValue<BytesLike>;
};
type RideBusParamsStruct = {
    sender: PromiseOrValue<string>;
    dstEid: PromiseOrValue<BigNumberish>;
    receiver: PromiseOrValue<BytesLike>;
    amountSD: PromiseOrValue<BigNumberish>;
    nativeDrop: PromiseOrValue<boolean>;
};
type TicketStructOutput = [BigNumber, string] & {
    ticketId: BigNumber;
    passengerBytes: string;
};
interface TokenMessagingInterface extends utils.Interface {
    functions: {
        "MSG_TYPE_BUS()": FunctionFragment;
        "MSG_TYPE_TAXI()": FunctionFragment;
        "allowInitializePath((uint32,bytes32,uint64))": FunctionFragment;
        "assetIds(address)": FunctionFragment;
        "busQueues(uint32)": FunctionFragment;
        "combineOptions(uint32,uint16,bytes)": FunctionFragment;
        "driveBus(uint32,bytes)": FunctionFragment;
        "endpoint()": FunctionFragment;
        "enforcedOptions(uint32,uint16)": FunctionFragment;
        "gasLimits(uint32)": FunctionFragment;
        "getPassengerHash(uint32,uint16)": FunctionFragment;
        "getTransferGasLimit()": FunctionFragment;
        "initializeBusQueueStorage(uint32[],uint16,uint16)": FunctionFragment;
        "isComposeMsgSender((uint32,bytes32,uint64),bytes,address)": FunctionFragment;
        "isPeer(uint32,bytes32)": FunctionFragment;
        "lzReceive((uint32,bytes32,uint64),bytes32,bytes,address,bytes)": FunctionFragment;
        "lzReceiveAndRevert(((uint32,bytes32,uint64),uint32,address,bytes32,uint256,address,bytes,bytes)[])": FunctionFragment;
        "lzReceiveSimulate((uint32,bytes32,uint64),bytes32,bytes,address,bytes)": FunctionFragment;
        "maxAssetId()": FunctionFragment;
        "nativeDropAmounts(uint32)": FunctionFragment;
        "nextNonce(uint32,bytes32)": FunctionFragment;
        "oApp()": FunctionFragment;
        "oAppVersion()": FunctionFragment;
        "owner()": FunctionFragment;
        "peers(uint32)": FunctionFragment;
        "planner()": FunctionFragment;
        "preCrime()": FunctionFragment;
        "queueCapacity()": FunctionFragment;
        "quoteDriveBus(uint32,bytes)": FunctionFragment;
        "quoteFares(uint32,uint8)": FunctionFragment;
        "quoteRideBus(uint32,bool)": FunctionFragment;
        "quoteTaxi((address,uint32,bytes32,uint64,bytes,bytes),bool)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rideBus((address,uint32,bytes32,uint64,bool))": FunctionFragment;
        "setAssetId(address,uint16)": FunctionFragment;
        "setDelegate(address)": FunctionFragment;
        "setEnforcedOptions((uint32,uint16,bytes)[])": FunctionFragment;
        "setFares(uint32,uint80,uint80)": FunctionFragment;
        "setGasLimit(uint32,uint128,uint128)": FunctionFragment;
        "setMaxAssetId(uint16)": FunctionFragment;
        "setMaxNumPassengers(uint32,uint8)": FunctionFragment;
        "setNativeDropAmount(uint32,uint128)": FunctionFragment;
        "setPeer(uint32,bytes32)": FunctionFragment;
        "setPlanner(address)": FunctionFragment;
        "setPreCrime(address)": FunctionFragment;
        "setTransferGasLimit(uint256)": FunctionFragment;
        "stargateImpls(uint16)": FunctionFragment;
        "taxi((address,uint32,bytes32,uint64,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MSG_TYPE_BUS" | "MSG_TYPE_TAXI" | "allowInitializePath" | "assetIds" | "busQueues" | "combineOptions" | "driveBus" | "endpoint" | "enforcedOptions" | "gasLimits" | "getPassengerHash" | "getTransferGasLimit" | "initializeBusQueueStorage" | "isComposeMsgSender" | "isPeer" | "lzReceive" | "lzReceiveAndRevert" | "lzReceiveSimulate" | "maxAssetId" | "nativeDropAmounts" | "nextNonce" | "oApp" | "oAppVersion" | "owner" | "peers" | "planner" | "preCrime" | "queueCapacity" | "quoteDriveBus" | "quoteFares" | "quoteRideBus" | "quoteTaxi" | "renounceOwnership" | "rideBus" | "setAssetId" | "setDelegate" | "setEnforcedOptions" | "setFares" | "setGasLimit" | "setMaxAssetId" | "setMaxNumPassengers" | "setNativeDropAmount" | "setPeer" | "setPlanner" | "setPreCrime" | "setTransferGasLimit" | "stargateImpls" | "taxi" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "MSG_TYPE_BUS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MSG_TYPE_TAXI", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowInitializePath", values: [OriginStruct]): string;
    encodeFunctionData(functionFragment: "assetIds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "busQueues", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "combineOptions", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "driveBus", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "enforcedOptions", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "gasLimits", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPassengerHash", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTransferGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeBusQueueStorage", values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "isComposeMsgSender", values: [OriginStruct, PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPeer", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        OriginStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "lzReceiveAndRevert", values: [InboundPacketStruct[]]): string;
    encodeFunctionData(functionFragment: "lzReceiveSimulate", values: [
        OriginStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "maxAssetId", values?: undefined): string;
    encodeFunctionData(functionFragment: "nativeDropAmounts", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nextNonce", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "oApp", values?: undefined): string;
    encodeFunctionData(functionFragment: "oAppVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "peers", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "planner", values?: undefined): string;
    encodeFunctionData(functionFragment: "preCrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "queueCapacity", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteDriveBus", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "quoteFares", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "quoteRideBus", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "quoteTaxi", values: [TaxiParamsStruct, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rideBus", values: [RideBusParamsStruct]): string;
    encodeFunctionData(functionFragment: "setAssetId", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setDelegate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setEnforcedOptions", values: [EnforcedOptionParamStruct[]]): string;
    encodeFunctionData(functionFragment: "setFares", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setGasLimit", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setMaxAssetId", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxNumPassengers", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setNativeDropAmount", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPeer", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setPlanner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setPreCrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTransferGasLimit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stargateImpls", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "taxi", values: [TaxiParamsStruct, MessagingFeeStruct, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "MSG_TYPE_BUS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MSG_TYPE_TAXI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowInitializePath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "busQueues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "combineOptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "driveBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enforcedOptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPassengerHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransferGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeBusQueueStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isComposeMsgSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPeer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceiveAndRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceiveSimulate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAssetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeDropAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oAppVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "peers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "planner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "preCrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueCapacity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteDriveBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteFares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRideBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteTaxi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rideBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEnforcedOptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxAssetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxNumPassengers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNativeDropAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPeer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlanner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPreCrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTransferGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateImpls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AssetIdSet(address,uint16)": EventFragment;
        "BusDriven(uint32,uint72,uint8,bytes32)": EventFragment;
        "BusQueueStorageInitialized(uint32,uint16,uint16)": EventFragment;
        "BusRode(uint32,uint72,uint80,bytes)": EventFragment;
        "EnforcedOptionSet(tuple[])": EventFragment;
        "FaresSet(uint32,uint80,uint80)": EventFragment;
        "GasLimitSet(uint32,uint128,uint128)": EventFragment;
        "MaxAssetIdSet(uint16)": EventFragment;
        "MaxNumPassengersSet(uint32,uint8)": EventFragment;
        "NativeDropAmountSet(uint32,uint128)": EventFragment;
        "NativeDropApplied(address,uint128)": EventFragment;
        "NativeDropFailed(address,uint128)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PeerSet(uint32,bytes32)": EventFragment;
        "PlannerSet(address)": EventFragment;
        "PreCrimeSet(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BusDriven"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BusQueueStorageInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BusRode"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnforcedOptionSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FaresSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasLimitSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxAssetIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxNumPassengersSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeDropAmountSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeDropApplied"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeDropFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PeerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlannerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PreCrimeSet"): EventFragment;
}
interface AssetIdSetEventObject {
    stargateImpl: string;
    assetId: number;
}
type AssetIdSetEvent = TypedEvent<[
    string,
    number
], AssetIdSetEventObject>;
type AssetIdSetEventFilter = TypedEventFilter<AssetIdSetEvent>;
interface BusDrivenEventObject {
    dstEid: number;
    startTicketId: BigNumber;
    numPassengers: number;
    guid: string;
}
type BusDrivenEvent = TypedEvent<[
    number,
    BigNumber,
    number,
    string
], BusDrivenEventObject>;
type BusDrivenEventFilter = TypedEventFilter<BusDrivenEvent>;
interface BusQueueStorageInitializedEventObject {
    dstEid: number;
    startSlot: number;
    endSlot: number;
}
type BusQueueStorageInitializedEvent = TypedEvent<[
    number,
    number,
    number
], BusQueueStorageInitializedEventObject>;
type BusQueueStorageInitializedEventFilter = TypedEventFilter<BusQueueStorageInitializedEvent>;
interface BusRodeEventObject {
    dstEid: number;
    ticketId: BigNumber;
    fare: BigNumber;
    passenger: string;
}
type BusRodeEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    string
], BusRodeEventObject>;
type BusRodeEventFilter = TypedEventFilter<BusRodeEvent>;
interface EnforcedOptionSetEventObject {
    _enforcedOptions: EnforcedOptionParamStructOutput[];
}
type EnforcedOptionSetEvent = TypedEvent<[
    EnforcedOptionParamStructOutput[]
], EnforcedOptionSetEventObject>;
type EnforcedOptionSetEventFilter = TypedEventFilter<EnforcedOptionSetEvent>;
interface FaresSetEventObject {
    dstEid: number;
    busFare: BigNumber;
    busAndNativeDropFare: BigNumber;
}
type FaresSetEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], FaresSetEventObject>;
type FaresSetEventFilter = TypedEventFilter<FaresSetEvent>;
interface GasLimitSetEventObject {
    eid: number;
    gasLimit: BigNumber;
    nativeDropGasLimit: BigNumber;
}
type GasLimitSetEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], GasLimitSetEventObject>;
type GasLimitSetEventFilter = TypedEventFilter<GasLimitSetEvent>;
interface MaxAssetIdSetEventObject {
    maxAssetId: number;
}
type MaxAssetIdSetEvent = TypedEvent<[number], MaxAssetIdSetEventObject>;
type MaxAssetIdSetEventFilter = TypedEventFilter<MaxAssetIdSetEvent>;
interface MaxNumPassengersSetEventObject {
    dstEid: number;
    maxNumPassengers: number;
}
type MaxNumPassengersSetEvent = TypedEvent<[
    number,
    number
], MaxNumPassengersSetEventObject>;
type MaxNumPassengersSetEventFilter = TypedEventFilter<MaxNumPassengersSetEvent>;
interface NativeDropAmountSetEventObject {
    dstEid: number;
    nativeDropAmount: BigNumber;
}
type NativeDropAmountSetEvent = TypedEvent<[
    number,
    BigNumber
], NativeDropAmountSetEventObject>;
type NativeDropAmountSetEventFilter = TypedEventFilter<NativeDropAmountSetEvent>;
interface NativeDropAppliedEventObject {
    receiver: string;
    amount: BigNumber;
}
type NativeDropAppliedEvent = TypedEvent<[
    string,
    BigNumber
], NativeDropAppliedEventObject>;
type NativeDropAppliedEventFilter = TypedEventFilter<NativeDropAppliedEvent>;
interface NativeDropFailedEventObject {
    receiver: string;
    amount: BigNumber;
}
type NativeDropFailedEvent = TypedEvent<[
    string,
    BigNumber
], NativeDropFailedEventObject>;
type NativeDropFailedEventFilter = TypedEventFilter<NativeDropFailedEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface PeerSetEventObject {
    eid: number;
    peer: string;
}
type PeerSetEvent = TypedEvent<[number, string], PeerSetEventObject>;
type PeerSetEventFilter = TypedEventFilter<PeerSetEvent>;
interface PlannerSetEventObject {
    planner: string;
}
type PlannerSetEvent = TypedEvent<[string], PlannerSetEventObject>;
type PlannerSetEventFilter = TypedEventFilter<PlannerSetEvent>;
interface PreCrimeSetEventObject {
    preCrimeAddress: string;
}
type PreCrimeSetEvent = TypedEvent<[string], PreCrimeSetEventObject>;
type PreCrimeSetEventFilter = TypedEventFilter<PreCrimeSetEvent>;
interface TokenMessaging extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenMessagingInterface;
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
        MSG_TYPE_BUS(overrides?: CallOverrides): Promise<[number]>;
        MSG_TYPE_TAXI(overrides?: CallOverrides): Promise<[number]>;
        allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<[boolean]>;
        assetIds(stargateImpl: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number] & {
            assetId: number;
        }>;
        busQueues(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number,
            BigNumber
        ] & {
            maxNumPassengers: number;
            busFare: BigNumber;
            busAndNativeDropFare: BigNumber;
            qLength: number;
            nextTicketId: BigNumber;
        }>;
        combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        driveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        endpoint(overrides?: CallOverrides): Promise<[string]>;
        enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            enforcedOption: string;
        }>;
        gasLimits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            gasLimit: BigNumber;
            nativeDropGasLimit: BigNumber;
        }>;
        getPassengerHash(_dstEid: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            hash: string;
        }>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        initializeBusQueueStorage(_dstEids: PromiseOrValue<BigNumberish>[], _startSlot: PromiseOrValue<BigNumberish>, _endSlot: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isComposeMsgSender(arg0: OriginStruct, _message: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lzReceiveSimulate(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        maxAssetId(overrides?: CallOverrides): Promise<[number]>;
        nativeDropAmounts(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            nativeDropAmount: BigNumber;
        }>;
        nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        oApp(overrides?: CallOverrides): Promise<[string]>;
        oAppVersion(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            senderVersion: BigNumber;
            receiverVersion: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            peer: string;
        }>;
        planner(overrides?: CallOverrides): Promise<[string]>;
        preCrime(overrides?: CallOverrides): Promise<[string]>;
        queueCapacity(overrides?: CallOverrides): Promise<[number]>;
        quoteDriveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[MessagingFeeStructOutput] & {
            fee: MessagingFeeStructOutput;
        }>;
        quoteFares(_dstEid: PromiseOrValue<BigNumberish>, _numPassengers: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            busFare: BigNumber;
            busAndNativeDropFare: BigNumber;
        }>;
        quoteRideBus(_dstEid: PromiseOrValue<BigNumberish>, _airdrop: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[MessagingFeeStructOutput] & {
            fee: MessagingFeeStructOutput;
        }>;
        quoteTaxi(_params: TaxiParamsStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[MessagingFeeStructOutput] & {
            fee: MessagingFeeStructOutput;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rideBus(_params: RideBusParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAssetId(_stargateImpl: PromiseOrValue<string>, _assetId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDelegate(_delegate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFares(_dstEid: PromiseOrValue<BigNumberish>, _busFare: PromiseOrValue<BigNumberish>, _busAndNativeDropFare: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGasLimit(_eid: PromiseOrValue<BigNumberish>, _gasLimit: PromiseOrValue<BigNumberish>, _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxAssetId(_maxAssetId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxNumPassengers(_dstEid: PromiseOrValue<BigNumberish>, _maxNumPassengers: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setNativeDropAmount(_dstEid: PromiseOrValue<BigNumberish>, _nativeDropAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPlanner(_planner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPreCrime(_preCrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stargateImpls(assetId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            stargateImpl: string;
        }>;
        taxi(_params: TaxiParamsStruct, _messagingFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    MSG_TYPE_BUS(overrides?: CallOverrides): Promise<number>;
    MSG_TYPE_TAXI(overrides?: CallOverrides): Promise<number>;
    allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<boolean>;
    assetIds(stargateImpl: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    busQueues(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        number,
        BigNumber
    ] & {
        maxNumPassengers: number;
        busFare: BigNumber;
        busAndNativeDropFare: BigNumber;
        qLength: number;
        nextTicketId: BigNumber;
    }>;
    combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    driveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    endpoint(overrides?: CallOverrides): Promise<string>;
    enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    gasLimits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        gasLimit: BigNumber;
        nativeDropGasLimit: BigNumber;
    }>;
    getPassengerHash(_dstEid: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    initializeBusQueueStorage(_dstEids: PromiseOrValue<BigNumberish>[], _startSlot: PromiseOrValue<BigNumberish>, _endSlot: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isComposeMsgSender(arg0: OriginStruct, _message: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lzReceiveSimulate(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    maxAssetId(overrides?: CallOverrides): Promise<number>;
    nativeDropAmounts(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    oApp(overrides?: CallOverrides): Promise<string>;
    oAppVersion(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        senderVersion: BigNumber;
        receiverVersion: BigNumber;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    planner(overrides?: CallOverrides): Promise<string>;
    preCrime(overrides?: CallOverrides): Promise<string>;
    queueCapacity(overrides?: CallOverrides): Promise<number>;
    quoteDriveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
    quoteFares(_dstEid: PromiseOrValue<BigNumberish>, _numPassengers: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        busFare: BigNumber;
        busAndNativeDropFare: BigNumber;
    }>;
    quoteRideBus(_dstEid: PromiseOrValue<BigNumberish>, _airdrop: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
    quoteTaxi(_params: TaxiParamsStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rideBus(_params: RideBusParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAssetId(_stargateImpl: PromiseOrValue<string>, _assetId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDelegate(_delegate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFares(_dstEid: PromiseOrValue<BigNumberish>, _busFare: PromiseOrValue<BigNumberish>, _busAndNativeDropFare: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGasLimit(_eid: PromiseOrValue<BigNumberish>, _gasLimit: PromiseOrValue<BigNumberish>, _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxAssetId(_maxAssetId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxNumPassengers(_dstEid: PromiseOrValue<BigNumberish>, _maxNumPassengers: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setNativeDropAmount(_dstEid: PromiseOrValue<BigNumberish>, _nativeDropAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPlanner(_planner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPreCrime(_preCrime: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stargateImpls(assetId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    taxi(_params: TaxiParamsStruct, _messagingFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        MSG_TYPE_BUS(overrides?: CallOverrides): Promise<number>;
        MSG_TYPE_TAXI(overrides?: CallOverrides): Promise<number>;
        allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<boolean>;
        assetIds(stargateImpl: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        busQueues(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number,
            BigNumber
        ] & {
            maxNumPassengers: number;
            busFare: BigNumber;
            busAndNativeDropFare: BigNumber;
            qLength: number;
            nextTicketId: BigNumber;
        }>;
        combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        driveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput>;
        endpoint(overrides?: CallOverrides): Promise<string>;
        enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        gasLimits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            gasLimit: BigNumber;
            nativeDropGasLimit: BigNumber;
        }>;
        getPassengerHash(_dstEid: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        initializeBusQueueStorage(_dstEids: PromiseOrValue<BigNumberish>[], _startSlot: PromiseOrValue<BigNumberish>, _endSlot: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        isComposeMsgSender(arg0: OriginStruct, _message: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: CallOverrides): Promise<void>;
        lzReceiveSimulate(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        maxAssetId(overrides?: CallOverrides): Promise<number>;
        nativeDropAmounts(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        oApp(overrides?: CallOverrides): Promise<string>;
        oAppVersion(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            senderVersion: BigNumber;
            receiverVersion: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        planner(overrides?: CallOverrides): Promise<string>;
        preCrime(overrides?: CallOverrides): Promise<string>;
        queueCapacity(overrides?: CallOverrides): Promise<number>;
        quoteDriveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
        quoteFares(_dstEid: PromiseOrValue<BigNumberish>, _numPassengers: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            busFare: BigNumber;
            busAndNativeDropFare: BigNumber;
        }>;
        quoteRideBus(_dstEid: PromiseOrValue<BigNumberish>, _airdrop: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
        quoteTaxi(_params: TaxiParamsStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rideBus(_params: RideBusParamsStruct, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput,
            TicketStructOutput
        ] & {
            receipt: MessagingReceiptStructOutput;
            ticket: TicketStructOutput;
        }>;
        setAssetId(_stargateImpl: PromiseOrValue<string>, _assetId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setDelegate(_delegate: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: CallOverrides): Promise<void>;
        setFares(_dstEid: PromiseOrValue<BigNumberish>, _busFare: PromiseOrValue<BigNumberish>, _busAndNativeDropFare: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setGasLimit(_eid: PromiseOrValue<BigNumberish>, _gasLimit: PromiseOrValue<BigNumberish>, _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxAssetId(_maxAssetId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxNumPassengers(_dstEid: PromiseOrValue<BigNumberish>, _maxNumPassengers: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setNativeDropAmount(_dstEid: PromiseOrValue<BigNumberish>, _nativeDropAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setPlanner(_planner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setPreCrime(_preCrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stargateImpls(assetId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        taxi(_params: TaxiParamsStruct, _messagingFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetIdSet(address,uint16)"(stargateImpl?: null, assetId?: null): AssetIdSetEventFilter;
        AssetIdSet(stargateImpl?: null, assetId?: null): AssetIdSetEventFilter;
        "BusDriven(uint32,uint72,uint8,bytes32)"(dstEid?: null, startTicketId?: null, numPassengers?: null, guid?: null): BusDrivenEventFilter;
        BusDriven(dstEid?: null, startTicketId?: null, numPassengers?: null, guid?: null): BusDrivenEventFilter;
        "BusQueueStorageInitialized(uint32,uint16,uint16)"(dstEid?: null, startSlot?: null, endSlot?: null): BusQueueStorageInitializedEventFilter;
        BusQueueStorageInitialized(dstEid?: null, startSlot?: null, endSlot?: null): BusQueueStorageInitializedEventFilter;
        "BusRode(uint32,uint72,uint80,bytes)"(dstEid?: null, ticketId?: null, fare?: null, passenger?: null): BusRodeEventFilter;
        BusRode(dstEid?: null, ticketId?: null, fare?: null, passenger?: null): BusRodeEventFilter;
        "EnforcedOptionSet(tuple[])"(_enforcedOptions?: null): EnforcedOptionSetEventFilter;
        EnforcedOptionSet(_enforcedOptions?: null): EnforcedOptionSetEventFilter;
        "FaresSet(uint32,uint80,uint80)"(dstEid?: null, busFare?: null, busAndNativeDropFare?: null): FaresSetEventFilter;
        FaresSet(dstEid?: null, busFare?: null, busAndNativeDropFare?: null): FaresSetEventFilter;
        "GasLimitSet(uint32,uint128,uint128)"(eid?: null, gasLimit?: null, nativeDropGasLimit?: null): GasLimitSetEventFilter;
        GasLimitSet(eid?: null, gasLimit?: null, nativeDropGasLimit?: null): GasLimitSetEventFilter;
        "MaxAssetIdSet(uint16)"(maxAssetId?: null): MaxAssetIdSetEventFilter;
        MaxAssetIdSet(maxAssetId?: null): MaxAssetIdSetEventFilter;
        "MaxNumPassengersSet(uint32,uint8)"(dstEid?: null, maxNumPassengers?: null): MaxNumPassengersSetEventFilter;
        MaxNumPassengersSet(dstEid?: null, maxNumPassengers?: null): MaxNumPassengersSetEventFilter;
        "NativeDropAmountSet(uint32,uint128)"(dstEid?: null, nativeDropAmount?: null): NativeDropAmountSetEventFilter;
        NativeDropAmountSet(dstEid?: null, nativeDropAmount?: null): NativeDropAmountSetEventFilter;
        "NativeDropApplied(address,uint128)"(receiver?: null, amount?: null): NativeDropAppliedEventFilter;
        NativeDropApplied(receiver?: null, amount?: null): NativeDropAppliedEventFilter;
        "NativeDropFailed(address,uint128)"(receiver?: null, amount?: null): NativeDropFailedEventFilter;
        NativeDropFailed(receiver?: null, amount?: null): NativeDropFailedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "PeerSet(uint32,bytes32)"(eid?: null, peer?: null): PeerSetEventFilter;
        PeerSet(eid?: null, peer?: null): PeerSetEventFilter;
        "PlannerSet(address)"(planner?: null): PlannerSetEventFilter;
        PlannerSet(planner?: null): PlannerSetEventFilter;
        "PreCrimeSet(address)"(preCrimeAddress?: null): PreCrimeSetEventFilter;
        PreCrimeSet(preCrimeAddress?: null): PreCrimeSetEventFilter;
    };
    estimateGas: {
        MSG_TYPE_BUS(overrides?: CallOverrides): Promise<BigNumber>;
        MSG_TYPE_TAXI(overrides?: CallOverrides): Promise<BigNumber>;
        allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<BigNumber>;
        assetIds(stargateImpl: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        busQueues(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        driveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<BigNumber>;
        enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gasLimits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPassengerHash(_dstEid: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        initializeBusQueueStorage(_dstEids: PromiseOrValue<BigNumberish>[], _startSlot: PromiseOrValue<BigNumberish>, _endSlot: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isComposeMsgSender(arg0: OriginStruct, _message: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lzReceiveSimulate(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        maxAssetId(overrides?: CallOverrides): Promise<BigNumber>;
        nativeDropAmounts(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        oApp(overrides?: CallOverrides): Promise<BigNumber>;
        oAppVersion(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        planner(overrides?: CallOverrides): Promise<BigNumber>;
        preCrime(overrides?: CallOverrides): Promise<BigNumber>;
        queueCapacity(overrides?: CallOverrides): Promise<BigNumber>;
        quoteDriveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteFares(_dstEid: PromiseOrValue<BigNumberish>, _numPassengers: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteRideBus(_dstEid: PromiseOrValue<BigNumberish>, _airdrop: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteTaxi(_params: TaxiParamsStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rideBus(_params: RideBusParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAssetId(_stargateImpl: PromiseOrValue<string>, _assetId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDelegate(_delegate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFares(_dstEid: PromiseOrValue<BigNumberish>, _busFare: PromiseOrValue<BigNumberish>, _busAndNativeDropFare: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGasLimit(_eid: PromiseOrValue<BigNumberish>, _gasLimit: PromiseOrValue<BigNumberish>, _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxAssetId(_maxAssetId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxNumPassengers(_dstEid: PromiseOrValue<BigNumberish>, _maxNumPassengers: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setNativeDropAmount(_dstEid: PromiseOrValue<BigNumberish>, _nativeDropAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPlanner(_planner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPreCrime(_preCrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stargateImpls(assetId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        taxi(_params: TaxiParamsStruct, _messagingFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        MSG_TYPE_BUS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MSG_TYPE_TAXI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assetIds(stargateImpl: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        busQueues(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        driveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gasLimits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPassengerHash(_dstEid: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransferGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeBusQueueStorage(_dstEids: PromiseOrValue<BigNumberish>[], _startSlot: PromiseOrValue<BigNumberish>, _endSlot: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isComposeMsgSender(arg0: OriginStruct, _message: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lzReceiveAndRevert(_packets: InboundPacketStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lzReceiveSimulate(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        maxAssetId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nativeDropAmounts(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oApp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oAppVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        planner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        preCrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queueCapacity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteDriveBus(_dstEid: PromiseOrValue<BigNumberish>, _passengers: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteFares(_dstEid: PromiseOrValue<BigNumberish>, _numPassengers: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRideBus(_dstEid: PromiseOrValue<BigNumberish>, _airdrop: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteTaxi(_params: TaxiParamsStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rideBus(_params: RideBusParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAssetId(_stargateImpl: PromiseOrValue<string>, _assetId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDelegate(_delegate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFares(_dstEid: PromiseOrValue<BigNumberish>, _busFare: PromiseOrValue<BigNumberish>, _busAndNativeDropFare: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGasLimit(_eid: PromiseOrValue<BigNumberish>, _gasLimit: PromiseOrValue<BigNumberish>, _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxAssetId(_maxAssetId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxNumPassengers(_dstEid: PromiseOrValue<BigNumberish>, _maxNumPassengers: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setNativeDropAmount(_dstEid: PromiseOrValue<BigNumberish>, _nativeDropAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPlanner(_planner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPreCrime(_preCrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTransferGasLimit(_gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stargateImpls(assetId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        taxi(_params: TaxiParamsStruct, _messagingFee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

export { MessagingFeeStruct$2 as M, OnEvent as O, PromiseOrValue as P, StargateOFTInterface as S, TypedEvent as T, TypedEventFilter as a, TypedListener as b, StargateOFT as c, StargatePoolInterface as d, StargatePool as e, StargatePoolNativeInterface as f, StargatePoolNative as g, TokenMessagingInterface as h, TokenMessaging as i, SendParamStruct$2 as j };
