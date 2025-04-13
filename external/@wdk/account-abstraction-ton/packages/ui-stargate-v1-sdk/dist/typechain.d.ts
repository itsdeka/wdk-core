import { BaseContract, Signer, BigNumberish, Overrides, ContractTransaction, CallOverrides, BytesLike, BigNumber, PayableOverrides, PopulatedTransaction, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Provider, Listener } from '@ethersproject/providers';
import { T as TypedEvent, a as TypedEventFilter, b as TypedListener, O as OnEvent, P as PromiseOrValue, R as RouterInterface, c as Router$1, S as StargateFeeLibraryInterface, d as StargateFeeLibrary, e as StargateWidgetInterface, f as StargateWidget } from './StargateWidget-25f8a83a.js';

declare namespace Router {
    type LzTxObjStruct = {
        dstGasForCall: PromiseOrValue<BigNumberish>;
        dstNativeAmount: PromiseOrValue<BigNumberish>;
        dstNativeAddr: PromiseOrValue<BytesLike>;
    };
    type LzTxObjStructOutput = [BigNumber, BigNumber, string] & {
        dstGasForCall: BigNumber;
        dstNativeAmount: BigNumber;
        dstNativeAddr: string;
    };
}
declare namespace Pool$1 {
    type CreditObjStruct = {
        credits: PromiseOrValue<BigNumberish>;
        idealBalance: PromiseOrValue<BigNumberish>;
    };
    type CreditObjStructOutput = [BigNumber, BigNumber] & {
        credits: BigNumber;
        idealBalance: BigNumber;
    };
    type SwapObjStruct = {
        amount: PromiseOrValue<BigNumberish>;
        eqFee: PromiseOrValue<BigNumberish>;
        eqReward: PromiseOrValue<BigNumberish>;
        lpFee: PromiseOrValue<BigNumberish>;
        protocolFee: PromiseOrValue<BigNumberish>;
        lkbRemove: PromiseOrValue<BigNumberish>;
    };
    type SwapObjStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        eqFee: BigNumber;
        eqReward: BigNumber;
        lpFee: BigNumber;
        protocolFee: BigNumber;
        lkbRemove: BigNumber;
    };
}
interface BridgeInterface extends utils.Interface {
    functions: {
        "approveTokenSpender(address,address,uint256)": FunctionFragment;
        "bridgeLookup(uint16)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "gasLookup(uint16,uint8)": FunctionFragment;
        "layerZeroEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "quoteLayerZeroFee(uint16,uint8,bytes,bytes,(uint256,uint256,bytes))": FunctionFragment;
        "redeemLocal(uint16,uint256,uint256,address,(uint256,uint256),uint256,bytes,(uint256,uint256,bytes))": FunctionFragment;
        "redeemLocalCallback(uint16,address,(uint256,uint256),(uint256,uint256,bytes),bytes)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "router()": FunctionFragment;
        "sendCredits(uint16,uint256,uint256,address,(uint256,uint256))": FunctionFragment;
        "setBridge(uint16,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setGasAmount(uint16,uint8,uint256)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setUseLayerZeroToken(bool)": FunctionFragment;
        "swap(uint16,uint256,uint256,address,(uint256,uint256),(uint256,uint256,uint256,uint256,uint256,uint256),(uint256,uint256,bytes),bytes,bytes)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "useLayerZeroToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveTokenSpender" | "bridgeLookup" | "forceResumeReceive" | "gasLookup" | "layerZeroEndpoint" | "lzReceive" | "owner" | "quoteLayerZeroFee" | "redeemLocal" | "redeemLocalCallback" | "renounceOwnership" | "router" | "sendCredits" | "setBridge" | "setConfig" | "setGasAmount" | "setReceiveVersion" | "setSendVersion" | "setUseLayerZeroToken" | "swap" | "transferOwnership" | "useLayerZeroToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveTokenSpender", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "bridgeLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "gasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "layerZeroEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteLayerZeroFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        Router.LzTxObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "redeemLocal", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        Pool$1.CreditObjStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        Router.LzTxObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "redeemLocalCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        Pool$1.CreditObjStruct,
        Router.LzTxObjStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendCredits", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        Pool$1.CreditObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "setBridge", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setGasAmount", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUseLayerZeroToken", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        Pool$1.CreditObjStruct,
        Pool$1.SwapObjStruct,
        Router.LzTxObjStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "useLayerZeroToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "approveTokenSpender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "layerZeroEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteLayerZeroFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLocalCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseLayerZeroToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useLayerZeroToken", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "SendMsg(uint8,uint64)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendMsg"): EventFragment;
}
interface OwnershipTransferredEventObject$8 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$8 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$8>;
type OwnershipTransferredEventFilter$8 = TypedEventFilter<OwnershipTransferredEvent$8>;
interface SendMsgEventObject {
    msgType: number;
    nonce: BigNumber;
}
type SendMsgEvent = TypedEvent<[number, BigNumber], SendMsgEventObject>;
type SendMsgEventFilter = TypedEventFilter<SendMsgEvent>;
interface Bridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeInterface;
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
        approveTokenSpender(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bridgeLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        layerZeroEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        quoteLayerZeroFee(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _transferAndCallPayload: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        redeemLocal(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _amountSD: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemLocalCallback(_chainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _lzTxParams: Router.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        sendCredits(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBridge(_chainId: PromiseOrValue<BigNumberish>, _bridgeAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGasAmount(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _gasAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUseLayerZeroToken(enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swap(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _s: Pool$1.SwapObjStruct, _lzTxParams: Router.LzTxObjStruct, _to: PromiseOrValue<BytesLike>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        useLayerZeroToken(overrides?: CallOverrides): Promise<[boolean]>;
    };
    approveTokenSpender(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bridgeLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    layerZeroEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    quoteLayerZeroFee(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _transferAndCallPayload: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    redeemLocal(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _amountSD: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemLocalCallback(_chainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _lzTxParams: Router.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    sendCredits(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBridge(_chainId: PromiseOrValue<BigNumberish>, _bridgeAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGasAmount(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _gasAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUseLayerZeroToken(enable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swap(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _s: Pool$1.SwapObjStruct, _lzTxParams: Router.LzTxObjStruct, _to: PromiseOrValue<BytesLike>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    useLayerZeroToken(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        approveTokenSpender(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        bridgeLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        gasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        layerZeroEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        quoteLayerZeroFee(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _transferAndCallPayload: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        redeemLocal(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _amountSD: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: CallOverrides): Promise<void>;
        redeemLocalCallback(_chainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _lzTxParams: Router.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
        sendCredits(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, overrides?: CallOverrides): Promise<void>;
        setBridge(_chainId: PromiseOrValue<BigNumberish>, _bridgeAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setGasAmount(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _gasAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUseLayerZeroToken(enable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        swap(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _s: Pool$1.SwapObjStruct, _lzTxParams: Router.LzTxObjStruct, _to: PromiseOrValue<BytesLike>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        useLayerZeroToken(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$8;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$8;
        "SendMsg(uint8,uint64)"(msgType?: null, nonce?: null): SendMsgEventFilter;
        SendMsg(msgType?: null, nonce?: null): SendMsgEventFilter;
    };
    estimateGas: {
        approveTokenSpender(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bridgeLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        layerZeroEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        quoteLayerZeroFee(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _transferAndCallPayload: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        redeemLocal(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _amountSD: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemLocalCallback(_chainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _lzTxParams: Router.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        sendCredits(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBridge(_chainId: PromiseOrValue<BigNumberish>, _bridgeAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGasAmount(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _gasAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUseLayerZeroToken(enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swap(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _s: Pool$1.SwapObjStruct, _lzTxParams: Router.LzTxObjStruct, _to: PromiseOrValue<BytesLike>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        useLayerZeroToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        approveTokenSpender(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bridgeLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        layerZeroEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteLayerZeroFee(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _transferAndCallPayload: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemLocal(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _amountSD: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _lzTxParams: Router.LzTxObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemLocalCallback(_chainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _lzTxParams: Router.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendCredits(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBridge(_chainId: PromiseOrValue<BigNumberish>, _bridgeAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGasAmount(_chainId: PromiseOrValue<BigNumberish>, _functionType: PromiseOrValue<BigNumberish>, _gasAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUseLayerZeroToken(enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swap(_chainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _c: Pool$1.CreditObjStruct, _s: Pool$1.SwapObjStruct, _lzTxParams: Router.LzTxObjStruct, _to: PromiseOrValue<BytesLike>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        useLayerZeroToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

interface ERC20Interface extends utils.Interface {
    functions: {
        "name()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "name" | "approve" | "totalSupply" | "transferFrom" | "decimals" | "balanceOf" | "symbol" | "transfer" | "allowance"): FunctionFragment;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject$3 {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent$3 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$3>;
type ApprovalEventFilter$3 = TypedEventFilter<ApprovalEvent$3>;
interface TransferEventObject$3 {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent$3 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$3>;
type TransferEventFilter$3 = TypedEventFilter<TransferEvent$3>;
interface ERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC20Interface;
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
        name(overrides?: CallOverrides): Promise<[string]>;
        approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowance(_owner: PromiseOrValue<string>, _spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    name(overrides?: CallOverrides): Promise<string>;
    approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowance(_owner: PromiseOrValue<string>, _spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        name(overrides?: CallOverrides): Promise<string>;
        approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<number>;
        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        allowance(_owner: PromiseOrValue<string>, _spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$3;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$3;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$3;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$3;
    };
    estimateGas: {
        name(overrides?: CallOverrides): Promise<BigNumber>;
        approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowance(_owner: PromiseOrValue<string>, _spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowance(_owner: PromiseOrValue<string>, _spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

interface FactoryInterface extends utils.Interface {
    functions: {
        "allPools(uint256)": FunctionFragment;
        "allPoolsLength()": FunctionFragment;
        "createPool(uint256,address,uint8,uint8,string,string)": FunctionFragment;
        "defaultFeeLibrary()": FunctionFragment;
        "getPool(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "router()": FunctionFragment;
        "setDefaultFeeLibrary(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allPools" | "allPoolsLength" | "createPool" | "defaultFeeLibrary" | "getPool" | "owner" | "renounceOwnership" | "router" | "setDefaultFeeLibrary" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "allPools", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allPoolsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "createPool", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "defaultFeeLibrary", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPool", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDefaultFeeLibrary", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "allPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPoolsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultFeeLibrary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultFeeLibrary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
interface OwnershipTransferredEventObject$7 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$7 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$7>;
type OwnershipTransferredEventFilter$7 = TypedEventFilter<OwnershipTransferredEvent$7>;
interface Factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FactoryInterface;
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
        allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        allPoolsLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        createPool(_poolId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _sharedDecimals: PromiseOrValue<BigNumberish>, _localDecimals: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        defaultFeeLibrary(overrides?: CallOverrides): Promise<[string]>;
        getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        setDefaultFeeLibrary(_defaultFeeLibrary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;
    createPool(_poolId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _sharedDecimals: PromiseOrValue<BigNumberish>, _localDecimals: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    defaultFeeLibrary(overrides?: CallOverrides): Promise<string>;
    getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    setDefaultFeeLibrary(_defaultFeeLibrary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;
        createPool(_poolId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _sharedDecimals: PromiseOrValue<BigNumberish>, _localDecimals: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        defaultFeeLibrary(overrides?: CallOverrides): Promise<string>;
        getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
        setDefaultFeeLibrary(_defaultFeeLibrary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$7;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$7;
    };
    estimateGas: {
        allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;
        createPool(_poolId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _sharedDecimals: PromiseOrValue<BigNumberish>, _localDecimals: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        defaultFeeLibrary(overrides?: CallOverrides): Promise<BigNumber>;
        getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        setDefaultFeeLibrary(_defaultFeeLibrary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allPoolsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createPool(_poolId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _sharedDecimals: PromiseOrValue<BigNumberish>, _localDecimals: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        defaultFeeLibrary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDefaultFeeLibrary(_defaultFeeLibrary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface FeeDistributorInterface extends utils.Interface {
    functions: {
        "canTokenBeClaimed(address)": FunctionFragment;
        "checkpoint()": FunctionFragment;
        "checkpointToken(address)": FunctionFragment;
        "checkpointTokens(address[])": FunctionFragment;
        "checkpointUser(address)": FunctionFragment;
        "claimToken(address,address)": FunctionFragment;
        "claimTokens(address,address[])": FunctionFragment;
        "depositToken(address,uint256)": FunctionFragment;
        "depositTokens(address[],uint256[])": FunctionFragment;
        "enableOnlyVeHolderClaiming(bool)": FunctionFragment;
        "enableTokenClaiming(address,bool)": FunctionFragment;
        "getStartTime()": FunctionFragment;
        "getTimeCursor()": FunctionFragment;
        "getTokenCachedBalance(address)": FunctionFragment;
        "getTokenLastBalance(address)": FunctionFragment;
        "getTokenStartTime(address)": FunctionFragment;
        "getTokenTimeCursor(address)": FunctionFragment;
        "getTokensDistributedInWeek(address,uint256)": FunctionFragment;
        "getTotalSupplyAtTimestamp(uint256)": FunctionFragment;
        "getUserBalanceAtTimestamp(address,uint256)": FunctionFragment;
        "getUserLastEpochCheckpointed(address)": FunctionFragment;
        "getUserStartTime(address)": FunctionFragment;
        "getUserTimeCursor(address)": FunctionFragment;
        "getUserTokenTimeCursor(address,address)": FunctionFragment;
        "getVotingEscrow()": FunctionFragment;
        "onlyVeHolderClaimingEnabled(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawToken(address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "canTokenBeClaimed" | "checkpoint" | "checkpointToken" | "checkpointTokens" | "checkpointUser" | "claimToken" | "claimTokens" | "depositToken" | "depositTokens" | "enableOnlyVeHolderClaiming" | "enableTokenClaiming" | "getStartTime" | "getTimeCursor" | "getTokenCachedBalance" | "getTokenLastBalance" | "getTokenStartTime" | "getTokenTimeCursor" | "getTokensDistributedInWeek" | "getTotalSupplyAtTimestamp" | "getUserBalanceAtTimestamp" | "getUserLastEpochCheckpointed" | "getUserStartTime" | "getUserTimeCursor" | "getUserTokenTimeCursor" | "getVotingEscrow" | "onlyVeHolderClaimingEnabled" | "owner" | "renounceOwnership" | "transferOwnership" | "withdrawToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "canTokenBeClaimed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "checkpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpointToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "checkpointTokens", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "checkpointUser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimToken", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimTokens", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "depositToken", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "depositTokens", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "enableOnlyVeHolderClaiming", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "enableTokenClaiming", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "getStartTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTimeCursor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenCachedBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTokenLastBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTokenStartTime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTokenTimeCursor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTokensDistributedInWeek", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTotalSupplyAtTimestamp", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUserBalanceAtTimestamp", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUserLastEpochCheckpointed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserStartTime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserTimeCursor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserTokenTimeCursor", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getVotingEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "onlyVeHolderClaimingEnabled", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "canTokenBeClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpointToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpointTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpointUser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableOnlyVeHolderClaiming", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableTokenClaiming", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimeCursor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenCachedBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenLastBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenTimeCursor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokensDistributedInWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupplyAtTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserBalanceAtTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserLastEpochCheckpointed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserTimeCursor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserTokenTimeCursor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotingEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onlyVeHolderClaimingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "OnlyVeHolderClaimingEnabled(address,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TokenCheckpointed(address,uint256,uint256)": EventFragment;
        "TokenClaimingEnabled(address,bool)": EventFragment;
        "TokenWithdrawn(address,uint256,address)": EventFragment;
        "TokensClaimed(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OnlyVeHolderClaimingEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenCheckpointed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenClaimingEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
}
interface OnlyVeHolderClaimingEnabledEventObject {
    user: string;
    enabled: boolean;
}
type OnlyVeHolderClaimingEnabledEvent = TypedEvent<[
    string,
    boolean
], OnlyVeHolderClaimingEnabledEventObject>;
type OnlyVeHolderClaimingEnabledEventFilter = TypedEventFilter<OnlyVeHolderClaimingEnabledEvent>;
interface OwnershipTransferredEventObject$6 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$6 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$6>;
type OwnershipTransferredEventFilter$6 = TypedEventFilter<OwnershipTransferredEvent$6>;
interface TokenCheckpointedEventObject {
    token: string;
    amount: BigNumber;
    lastCheckpointTimestamp: BigNumber;
}
type TokenCheckpointedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], TokenCheckpointedEventObject>;
type TokenCheckpointedEventFilter = TypedEventFilter<TokenCheckpointedEvent>;
interface TokenClaimingEnabledEventObject {
    token: string;
    enabled: boolean;
}
type TokenClaimingEnabledEvent = TypedEvent<[
    string,
    boolean
], TokenClaimingEnabledEventObject>;
type TokenClaimingEnabledEventFilter = TypedEventFilter<TokenClaimingEnabledEvent>;
interface TokenWithdrawnEventObject {
    token: string;
    amount: BigNumber;
    recipient: string;
}
type TokenWithdrawnEvent = TypedEvent<[
    string,
    BigNumber,
    string
], TokenWithdrawnEventObject>;
type TokenWithdrawnEventFilter = TypedEventFilter<TokenWithdrawnEvent>;
interface TokensClaimedEventObject {
    user: string;
    token: string;
    amount: BigNumber;
    userTokenTimeCursor: BigNumber;
}
type TokensClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
interface FeeDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FeeDistributorInterface;
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
        canTokenBeClaimed(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkpointToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkpointTokens(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkpointUser(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimToken(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimTokens(user: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositTokens(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enableOnlyVeHolderClaiming(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enableTokenClaiming(token: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTimeCursor(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenCachedBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenLastBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenStartTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenTimeCursor(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokensDistributedInWeek(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalSupplyAtTimestamp(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserBalanceAtTimestamp(user: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserLastEpochCheckpointed(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserStartTime(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserTimeCursor(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserTokenTimeCursor(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVotingEscrow(overrides?: CallOverrides): Promise<[string]>;
        onlyVeHolderClaimingEnabled(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    canTokenBeClaimed(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    checkpoint(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkpointToken(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkpointTokens(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkpointUser(user: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimToken(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimTokens(user: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositTokens(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enableOnlyVeHolderClaiming(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enableTokenClaiming(token: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getStartTime(overrides?: CallOverrides): Promise<BigNumber>;
    getTimeCursor(overrides?: CallOverrides): Promise<BigNumber>;
    getTokenCachedBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenLastBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenStartTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenTimeCursor(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getTokensDistributedInWeek(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTotalSupplyAtTimestamp(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserBalanceAtTimestamp(user: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserLastEpochCheckpointed(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserStartTime(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserTimeCursor(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserTokenTimeCursor(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getVotingEscrow(overrides?: CallOverrides): Promise<string>;
    onlyVeHolderClaimingEnabled(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        canTokenBeClaimed(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        checkpoint(overrides?: CallOverrides): Promise<void>;
        checkpointToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        checkpointTokens(tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        checkpointUser(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        claimToken(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimTokens(user: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        depositToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositTokens(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        enableOnlyVeHolderClaiming(enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        enableTokenClaiming(token: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getStartTime(overrides?: CallOverrides): Promise<BigNumber>;
        getTimeCursor(overrides?: CallOverrides): Promise<BigNumber>;
        getTokenCachedBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenLastBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenStartTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenTimeCursor(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokensDistributedInWeek(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSupplyAtTimestamp(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserBalanceAtTimestamp(user: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserLastEpochCheckpointed(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserStartTime(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserTimeCursor(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserTokenTimeCursor(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotingEscrow(overrides?: CallOverrides): Promise<string>;
        onlyVeHolderClaimingEnabled(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OnlyVeHolderClaimingEnabled(address,bool)"(user?: null, enabled?: null): OnlyVeHolderClaimingEnabledEventFilter;
        OnlyVeHolderClaimingEnabled(user?: null, enabled?: null): OnlyVeHolderClaimingEnabledEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$6;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$6;
        "TokenCheckpointed(address,uint256,uint256)"(token?: null, amount?: null, lastCheckpointTimestamp?: null): TokenCheckpointedEventFilter;
        TokenCheckpointed(token?: null, amount?: null, lastCheckpointTimestamp?: null): TokenCheckpointedEventFilter;
        "TokenClaimingEnabled(address,bool)"(token?: null, enabled?: null): TokenClaimingEnabledEventFilter;
        TokenClaimingEnabled(token?: null, enabled?: null): TokenClaimingEnabledEventFilter;
        "TokenWithdrawn(address,uint256,address)"(token?: null, amount?: null, recipient?: null): TokenWithdrawnEventFilter;
        TokenWithdrawn(token?: null, amount?: null, recipient?: null): TokenWithdrawnEventFilter;
        "TokensClaimed(address,address,uint256,uint256)"(user?: null, token?: null, amount?: null, userTokenTimeCursor?: null): TokensClaimedEventFilter;
        TokensClaimed(user?: null, token?: null, amount?: null, userTokenTimeCursor?: null): TokensClaimedEventFilter;
    };
    estimateGas: {
        canTokenBeClaimed(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkpointToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkpointTokens(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkpointUser(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimToken(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimTokens(user: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositTokens(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enableOnlyVeHolderClaiming(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enableTokenClaiming(token: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getStartTime(overrides?: CallOverrides): Promise<BigNumber>;
        getTimeCursor(overrides?: CallOverrides): Promise<BigNumber>;
        getTokenCachedBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenLastBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenStartTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenTimeCursor(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokensDistributedInWeek(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSupplyAtTimestamp(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserBalanceAtTimestamp(user: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserLastEpochCheckpointed(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserStartTime(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserTimeCursor(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserTokenTimeCursor(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotingEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        onlyVeHolderClaimingEnabled(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        canTokenBeClaimed(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkpointToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkpointTokens(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkpointUser(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimToken(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimTokens(user: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositTokens(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enableOnlyVeHolderClaiming(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enableTokenClaiming(token: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTimeCursor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenCachedBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenLastBalance(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenStartTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenTimeCursor(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokensDistributedInWeek(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSupplyAtTimestamp(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserBalanceAtTimestamp(user: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserLastEpochCheckpointed(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserStartTime(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserTimeCursor(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserTokenTimeCursor(user: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotingEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onlyVeHolderClaimingEnabled(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface LPStakingInterface extends utils.Interface {
    functions: {
        "BONUS_MULTIPLIER()": FunctionFragment;
        "add(uint256,address)": FunctionFragment;
        "bonusEndBlock()": FunctionFragment;
        "deposit(uint256,uint256)": FunctionFragment;
        "emergencyWithdraw(uint256)": FunctionFragment;
        "getMultiplier(uint256,uint256)": FunctionFragment;
        "lpBalances(uint256)": FunctionFragment;
        "massUpdatePools()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingStargate(uint256,address)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "set(uint256,uint256)": FunctionFragment;
        "setStargatePerBlock(uint256)": FunctionFragment;
        "stargate()": FunctionFragment;
        "stargatePerBlock()": FunctionFragment;
        "startBlock()": FunctionFragment;
        "totalAllocPoint()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updatePool(uint256)": FunctionFragment;
        "userInfo(uint256,address)": FunctionFragment;
        "withdraw(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BONUS_MULTIPLIER" | "add" | "bonusEndBlock" | "deposit" | "emergencyWithdraw" | "getMultiplier" | "lpBalances" | "massUpdatePools" | "owner" | "pendingStargate" | "poolInfo" | "poolLength" | "renounceOwnership" | "set" | "setStargatePerBlock" | "stargate" | "stargatePerBlock" | "startBlock" | "totalAllocPoint" | "transferOwnership" | "updatePool" | "userInfo" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "BONUS_MULTIPLIER", values?: undefined): string;
    encodeFunctionData(functionFragment: "add", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bonusEndBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMultiplier", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "lpBalances", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "massUpdatePools", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingStargate", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "set", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setStargatePerBlock", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stargate", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updatePool", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "userInfo", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "BONUS_MULTIPLIER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bonusEndBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "massUpdatePools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStargatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Deposit(address,uint256,uint256)": EventFragment;
        "EmergencyWithdraw(address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
interface DepositEventObject$2 {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
type DepositEvent$2 = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DepositEventObject$2>;
type DepositEventFilter$2 = TypedEventFilter<DepositEvent$2>;
interface EmergencyWithdrawEventObject {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
type EmergencyWithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], EmergencyWithdrawEventObject>;
type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;
interface OwnershipTransferredEventObject$5 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$5 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$5>;
type OwnershipTransferredEventFilter$5 = TypedEventFilter<OwnershipTransferredEvent$5>;
interface WithdrawEventObject$2 {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
type WithdrawEvent$2 = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject$2>;
type WithdrawEventFilter$2 = TypedEventFilter<WithdrawEvent$2>;
interface LPStaking extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LPStakingInterface;
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
        BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>;
        add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bonusEndBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        massUpdatePools(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingStargate(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lpToken: string;
            allocPoint: BigNumber;
            lastRewardBlock: BigNumber;
            accStargatePerShare: BigNumber;
        }>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStargatePerBlock(_stargatePerBlock: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stargate(overrides?: CallOverrides): Promise<[string]>;
        stargatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
    add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    massUpdatePools(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingStargate(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardBlock: BigNumber;
        accStargatePerShare: BigNumber;
    }>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStargatePerBlock(_stargatePerBlock: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stargate(overrides?: CallOverrides): Promise<string>;
    stargatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    startBlock(overrides?: CallOverrides): Promise<BigNumber>;
    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
    }>;
    withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
        add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        massUpdatePools(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingStargate(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lpToken: string;
            allocPoint: BigNumber;
            lastRewardBlock: BigNumber;
            accStargatePerShare: BigNumber;
        }>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setStargatePerBlock(_stargatePerBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stargate(overrides?: CallOverrides): Promise<string>;
        stargatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        startBlock(overrides?: CallOverrides): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposit(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): DepositEventFilter$2;
        Deposit(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): DepositEventFilter$2;
        "EmergencyWithdraw(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): EmergencyWithdrawEventFilter;
        EmergencyWithdraw(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): EmergencyWithdrawEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$5;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$5;
        "Withdraw(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): WithdrawEventFilter$2;
        Withdraw(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): WithdrawEventFilter$2;
    };
    estimateGas: {
        BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
        add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        massUpdatePools(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingStargate(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStargatePerBlock(_stargatePerBlock: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stargate(overrides?: CallOverrides): Promise<BigNumber>;
        stargatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        startBlock(overrides?: CallOverrides): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bonusEndBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        massUpdatePools(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingStargate(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStargatePerBlock(_stargatePerBlock: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stargate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface LPStakingTimeInterface extends utils.Interface {
    functions: {
        "BONUS_MULTIPLIER()": FunctionFragment;
        "add(uint256,address)": FunctionFragment;
        "bonusEndTime()": FunctionFragment;
        "deposit(uint256,uint256)": FunctionFragment;
        "eToken()": FunctionFragment;
        "eTokenPerSecond()": FunctionFragment;
        "emergencyWithdraw(uint256)": FunctionFragment;
        "getMultiplier(uint256,uint256)": FunctionFragment;
        "lpBalances(uint256)": FunctionFragment;
        "massUpdatePools()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingEmissionToken(uint256,address)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "set(uint256,uint256)": FunctionFragment;
        "setETokenPerSecond(uint256)": FunctionFragment;
        "startTime()": FunctionFragment;
        "totalAllocPoint()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updatePool(uint256)": FunctionFragment;
        "userInfo(uint256,address)": FunctionFragment;
        "withdraw(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BONUS_MULTIPLIER" | "add" | "bonusEndTime" | "deposit" | "eToken" | "eTokenPerSecond" | "emergencyWithdraw" | "getMultiplier" | "lpBalances" | "massUpdatePools" | "owner" | "pendingEmissionToken" | "poolInfo" | "poolLength" | "renounceOwnership" | "set" | "setETokenPerSecond" | "startTime" | "totalAllocPoint" | "transferOwnership" | "updatePool" | "userInfo" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "BONUS_MULTIPLIER", values?: undefined): string;
    encodeFunctionData(functionFragment: "add", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bonusEndTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "eToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "eTokenPerSecond", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMultiplier", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "lpBalances", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "massUpdatePools", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingEmissionToken", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "set", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setETokenPerSecond", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updatePool", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "userInfo", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "BONUS_MULTIPLIER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bonusEndTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eTokenPerSecond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "massUpdatePools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingEmissionToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setETokenPerSecond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Add(uint256,address)": EventFragment;
        "LPStakingTimeDeposit(address,uint256,uint256)": EventFragment;
        "LPStakingTimeEmergencyWithdraw(address,uint256,uint256)": EventFragment;
        "LPStakingTimeOwnershipTransferred(address,address)": EventFragment;
        "Set(uint256,uint256)": EventFragment;
        "TokensPerSec(uint256)": EventFragment;
        "LPStakingTimeWithdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Add"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LPStakingTimeDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LPStakingTimeEmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LPStakingTimeOwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Set"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensPerSec"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LPStakingTimeWithdraw"): EventFragment;
}
interface AddEventObject {
    allocPoint: BigNumber;
    lpToken: string;
}
type AddEvent = TypedEvent<[BigNumber, string], AddEventObject>;
type AddEventFilter = TypedEventFilter<AddEvent>;
interface LPStakingTimeDepositEventObject {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
type LPStakingTimeDepositEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], LPStakingTimeDepositEventObject>;
type LPStakingTimeDepositEventFilter = TypedEventFilter<LPStakingTimeDepositEvent>;
interface LPStakingTimeEmergencyWithdrawEventObject {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
type LPStakingTimeEmergencyWithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], LPStakingTimeEmergencyWithdrawEventObject>;
type LPStakingTimeEmergencyWithdrawEventFilter = TypedEventFilter<LPStakingTimeEmergencyWithdrawEvent>;
interface LPStakingTimeOwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type LPStakingTimeOwnershipTransferredEvent = TypedEvent<[
    string,
    string
], LPStakingTimeOwnershipTransferredEventObject>;
type LPStakingTimeOwnershipTransferredEventFilter = TypedEventFilter<LPStakingTimeOwnershipTransferredEvent>;
interface SetEventObject {
    pid: BigNumber;
    allocPoint: BigNumber;
}
type SetEvent = TypedEvent<[BigNumber, BigNumber], SetEventObject>;
type SetEventFilter = TypedEventFilter<SetEvent>;
interface TokensPerSecEventObject {
    eTokenPerSecond: BigNumber;
}
type TokensPerSecEvent = TypedEvent<[
    BigNumber
], TokensPerSecEventObject>;
type TokensPerSecEventFilter = TypedEventFilter<TokensPerSecEvent>;
interface LPStakingTimeWithdrawEventObject {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
type LPStakingTimeWithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], LPStakingTimeWithdrawEventObject>;
type LPStakingTimeWithdrawEventFilter = TypedEventFilter<LPStakingTimeWithdrawEvent>;
interface LPStakingTime extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LPStakingTimeInterface;
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
        BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>;
        add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bonusEndTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        eToken(overrides?: CallOverrides): Promise<[string]>;
        eTokenPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;
        emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        massUpdatePools(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingEmissionToken(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lpToken: string;
            allocPoint: BigNumber;
            lastRewardTime: BigNumber;
            accEmissionPerShare: BigNumber;
        }>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setETokenPerSecond(_eTokenPerSecond: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
    add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bonusEndTime(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    eToken(overrides?: CallOverrides): Promise<string>;
    eTokenPerSecond(overrides?: CallOverrides): Promise<BigNumber>;
    emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    massUpdatePools(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingEmissionToken(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardTime: BigNumber;
        accEmissionPerShare: BigNumber;
    }>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setETokenPerSecond(_eTokenPerSecond: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startTime(overrides?: CallOverrides): Promise<BigNumber>;
    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
    }>;
    withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
        add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        bonusEndTime(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        eToken(overrides?: CallOverrides): Promise<string>;
        eTokenPerSecond(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        massUpdatePools(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingEmissionToken(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lpToken: string;
            allocPoint: BigNumber;
            lastRewardTime: BigNumber;
            accEmissionPerShare: BigNumber;
        }>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setETokenPerSecond(_eTokenPerSecond: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startTime(overrides?: CallOverrides): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Add(uint256,address)"(allocPoint?: null, lpToken?: PromiseOrValue<string> | null): AddEventFilter;
        Add(allocPoint?: null, lpToken?: PromiseOrValue<string> | null): AddEventFilter;
        "LPStakingTimeDeposit(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): LPStakingTimeDepositEventFilter;
        LPStakingTimeDeposit(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): LPStakingTimeDepositEventFilter;
        "LPStakingTimeEmergencyWithdraw(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): LPStakingTimeEmergencyWithdrawEventFilter;
        LPStakingTimeEmergencyWithdraw(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): LPStakingTimeEmergencyWithdrawEventFilter;
        "LPStakingTimeOwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): LPStakingTimeOwnershipTransferredEventFilter;
        LPStakingTimeOwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): LPStakingTimeOwnershipTransferredEventFilter;
        "Set(uint256,uint256)"(pid?: PromiseOrValue<BigNumberish> | null, allocPoint?: null): SetEventFilter;
        Set(pid?: PromiseOrValue<BigNumberish> | null, allocPoint?: null): SetEventFilter;
        "TokensPerSec(uint256)"(eTokenPerSecond?: null): TokensPerSecEventFilter;
        TokensPerSec(eTokenPerSecond?: null): TokensPerSecEventFilter;
        "LPStakingTimeWithdraw(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): LPStakingTimeWithdrawEventFilter;
        LPStakingTimeWithdraw(user?: PromiseOrValue<string> | null, pid?: PromiseOrValue<BigNumberish> | null, amount?: null): LPStakingTimeWithdrawEventFilter;
    };
    estimateGas: {
        BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
        add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bonusEndTime(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        eToken(overrides?: CallOverrides): Promise<BigNumber>;
        eTokenPerSecond(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        massUpdatePools(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingEmissionToken(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setETokenPerSecond(_eTokenPerSecond: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startTime(overrides?: CallOverrides): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add(_allocPoint: PromiseOrValue<BigNumberish>, _lpToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bonusEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        eToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eTokenPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getMultiplier(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpBalances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        massUpdatePools(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingEmissionToken(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set(_pid: PromiseOrValue<BigNumberish>, _allocPoint: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setETokenPerSecond(_eTokenPerSecond: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        userInfo(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface MerkleDropV2Interface extends utils.Interface {
    functions: {
        "claimed(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "redeemFees(address,uint256,bytes32[])": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "root()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateMerkleRoot(bytes32)": FunctionFragment;
        "withdrawFees(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimed" | "owner" | "redeemFees" | "renounceOwnership" | "root" | "token" | "transferOwnership" | "updateMerkleRoot" | "withdrawFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "root", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateMerkleRoot", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "withdrawFees", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMerkleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
    events: {
        "FeesClaimed(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FeesClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
interface FeesClaimedEventObject {
    account: string;
    amount: BigNumber;
}
type FeesClaimedEvent = TypedEvent<[
    string,
    BigNumber
], FeesClaimedEventObject>;
type FeesClaimedEventFilter = TypedEventFilter<FeesClaimedEvent>;
interface OwnershipTransferredEventObject$4 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$4 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$4>;
type OwnershipTransferredEventFilter$4 = TypedEventFilter<OwnershipTransferredEvent$4>;
interface MerkleDropV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MerkleDropV2Interface;
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
        claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        redeemFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _proof: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        root(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    redeemFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _proof: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    root(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        redeemFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _proof: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        root(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        withdrawFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FeesClaimed(address,uint256)"(account?: null, amount?: null): FeesClaimedEventFilter;
        FeesClaimed(account?: null, amount?: null): FeesClaimedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$4;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$4;
    };
    estimateGas: {
        claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        redeemFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _proof: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        root(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _proof: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        root(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFees(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface PoolInterface extends utils.Interface {
    functions: {
        "BP_DENOMINATOR()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "PERMIT_TYPEHASH()": FunctionFragment;
        "activateChainPath(uint16,uint256)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "batched()": FunctionFragment;
        "callDelta(bool)": FunctionFragment;
        "chainPathIndexLookup(uint16,uint256)": FunctionFragment;
        "chainPaths(uint256)": FunctionFragment;
        "convertRate()": FunctionFragment;
        "createChainPath(uint16,uint256,uint256)": FunctionFragment;
        "creditChainPath(uint16,uint256,(uint256,uint256))": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "defaultLPMode()": FunctionFragment;
        "defaultSwapMode()": FunctionFragment;
        "deltaCredit()": FunctionFragment;
        "eqFeePool()": FunctionFragment;
        "feeLibrary()": FunctionFragment;
        "getChainPath(uint16,uint256)": FunctionFragment;
        "getChainPathsLength()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "instantRedeemLocal(address,uint256,address)": FunctionFragment;
        "localDecimals()": FunctionFragment;
        "lpDeltaBP()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "mintFeeBP()": FunctionFragment;
        "mintFeeBalance()": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "poolId()": FunctionFragment;
        "protocolFeeBalance()": FunctionFragment;
        "redeemLocal(address,uint256,uint16,uint256,address)": FunctionFragment;
        "redeemLocalCallback(uint16,uint256,address,uint256,uint256)": FunctionFragment;
        "redeemLocalCheckOnRemote(uint16,uint256,uint256)": FunctionFragment;
        "redeemRemote(uint16,uint256,address,uint256)": FunctionFragment;
        "router()": FunctionFragment;
        "sendCredits(uint16,uint256)": FunctionFragment;
        "setDeltaParam(bool,uint256,uint256,bool,bool)": FunctionFragment;
        "setFee(uint256)": FunctionFragment;
        "setFeeLibrary(address)": FunctionFragment;
        "setSwapStop(bool)": FunctionFragment;
        "setWeightForChainPath(uint16,uint256,uint16)": FunctionFragment;
        "sharedDecimals()": FunctionFragment;
        "stopSwap()": FunctionFragment;
        "swap(uint16,uint256,address,uint256,uint256,bool)": FunctionFragment;
        "swapDeltaBP()": FunctionFragment;
        "swapRemote(uint16,uint256,address,(uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "symbol()": FunctionFragment;
        "token()": FunctionFragment;
        "totalLiquidity()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalWeight()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "withdrawMintFeeBalance(address)": FunctionFragment;
        "withdrawProtocolFeeBalance(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BP_DENOMINATOR" | "DOMAIN_SEPARATOR" | "PERMIT_TYPEHASH" | "activateChainPath" | "allowance" | "approve" | "balanceOf" | "batched" | "callDelta" | "chainPathIndexLookup" | "chainPaths" | "convertRate" | "createChainPath" | "creditChainPath" | "decimals" | "decreaseAllowance" | "defaultLPMode" | "defaultSwapMode" | "deltaCredit" | "eqFeePool" | "feeLibrary" | "getChainPath" | "getChainPathsLength" | "increaseAllowance" | "instantRedeemLocal" | "localDecimals" | "lpDeltaBP" | "mint" | "mintFeeBP" | "mintFeeBalance" | "name" | "nonces" | "permit" | "poolId" | "protocolFeeBalance" | "redeemLocal" | "redeemLocalCallback" | "redeemLocalCheckOnRemote" | "redeemRemote" | "router" | "sendCredits" | "setDeltaParam" | "setFee" | "setFeeLibrary" | "setSwapStop" | "setWeightForChainPath" | "sharedDecimals" | "stopSwap" | "swap" | "swapDeltaBP" | "swapRemote" | "symbol" | "token" | "totalLiquidity" | "totalSupply" | "totalWeight" | "transfer" | "transferFrom" | "withdrawMintFeeBalance" | "withdrawProtocolFeeBalance"): FunctionFragment;
    encodeFunctionData(functionFragment: "BP_DENOMINATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "activateChainPath", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "batched", values?: undefined): string;
    encodeFunctionData(functionFragment: "callDelta", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "chainPathIndexLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "chainPaths", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "convertRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "createChainPath", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "creditChainPath", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        Pool.CreditObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "defaultLPMode", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultSwapMode", values?: undefined): string;
    encodeFunctionData(functionFragment: "deltaCredit", values?: undefined): string;
    encodeFunctionData(functionFragment: "eqFeePool", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeLibrary", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainPath", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getChainPathsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "instantRedeemLocal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "localDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "lpDeltaBP", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mintFeeBP", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintFeeBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "poolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemLocal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "redeemLocalCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeemLocalCheckOnRemote", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeemRemote", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendCredits", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setDeltaParam", values: [
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "setFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFeeLibrary", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setSwapStop", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setWeightForChainPath", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "sharedDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopSwap", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "swapDeltaBP", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapRemote", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        Pool.SwapObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalLiquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalWeight", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawMintFeeBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawProtocolFeeBalance", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "BP_DENOMINATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activateChainPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batched", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainPathIndexLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainPaths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createChainPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditChainPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultLPMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultSwapMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deltaCredit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eqFeePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeLibrary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainPathsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantRedeemLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpDeltaBP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintFeeBP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintFeeBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLocalCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLocalCheckOnRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDeltaParam", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeLibrary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSwapStop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWeightForChainPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapDeltaBP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalWeight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawMintFeeBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawProtocolFeeBalance", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Burn(address,uint256,uint256)": EventFragment;
        "ChainPathUpdate(uint16,uint256,uint256)": EventFragment;
        "CreditChainPath(uint16,uint256,uint256,uint256)": EventFragment;
        "DeltaParamUpdated(bool,uint256,uint256,bool,bool)": EventFragment;
        "FeeLibraryUpdated(address)": EventFragment;
        "FeesUpdated(uint256)": EventFragment;
        "InstantRedeemLocal(address,uint256,uint256,address)": EventFragment;
        "Mint(address,uint256,uint256,uint256)": EventFragment;
        "RedeemLocal(address,uint256,uint256,uint16,uint256,address)": EventFragment;
        "RedeemLocalCallback(address,uint256,uint256)": EventFragment;
        "RedeemRemote(uint16,uint256,address,uint256,uint256)": EventFragment;
        "SendCredits(uint16,uint256,uint256,uint256)": EventFragment;
        "StopSwapUpdated(bool)": EventFragment;
        "Swap(uint16,uint256,address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "SwapRemote(address,uint256,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "WithdrawMintFeeBalance(address,uint256)": EventFragment;
        "WithdrawProtocolFeeBalance(address,uint256)": EventFragment;
        "WithdrawRemote(uint16,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChainPathUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditChainPath"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeltaParamUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeLibraryUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InstantRedeemLocal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RedeemLocal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RedeemLocalCallback"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RedeemRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendCredits"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StopSwapUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawMintFeeBalance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawProtocolFeeBalance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawRemote"): EventFragment;
}
interface ApprovalEventObject$2 {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent$2 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$2>;
type ApprovalEventFilter$2 = TypedEventFilter<ApprovalEvent$2>;
interface BurnEventObject {
    from: string;
    amountLP: BigNumber;
    amountSD: BigNumber;
}
type BurnEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], BurnEventObject>;
type BurnEventFilter = TypedEventFilter<BurnEvent>;
interface ChainPathUpdateEventObject {
    dstChainId: number;
    dstPoolId: BigNumber;
    weight: BigNumber;
}
type ChainPathUpdateEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], ChainPathUpdateEventObject>;
type ChainPathUpdateEventFilter = TypedEventFilter<ChainPathUpdateEvent>;
interface CreditChainPathEventObject {
    chainId: number;
    srcPoolId: BigNumber;
    amountSD: BigNumber;
    idealBalance: BigNumber;
}
type CreditChainPathEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    BigNumber
], CreditChainPathEventObject>;
type CreditChainPathEventFilter = TypedEventFilter<CreditChainPathEvent>;
interface DeltaParamUpdatedEventObject {
    batched: boolean;
    swapDeltaBP: BigNumber;
    lpDeltaBP: BigNumber;
    defaultSwapMode: boolean;
    defaultLPMode: boolean;
}
type DeltaParamUpdatedEvent = TypedEvent<[
    boolean,
    BigNumber,
    BigNumber,
    boolean,
    boolean
], DeltaParamUpdatedEventObject>;
type DeltaParamUpdatedEventFilter = TypedEventFilter<DeltaParamUpdatedEvent>;
interface FeeLibraryUpdatedEventObject {
    feeLibraryAddr: string;
}
type FeeLibraryUpdatedEvent = TypedEvent<[
    string
], FeeLibraryUpdatedEventObject>;
type FeeLibraryUpdatedEventFilter = TypedEventFilter<FeeLibraryUpdatedEvent>;
interface FeesUpdatedEventObject {
    mintFeeBP: BigNumber;
}
type FeesUpdatedEvent = TypedEvent<[BigNumber], FeesUpdatedEventObject>;
type FeesUpdatedEventFilter = TypedEventFilter<FeesUpdatedEvent>;
interface InstantRedeemLocalEventObject {
    from: string;
    amountLP: BigNumber;
    amountSD: BigNumber;
    to: string;
}
type InstantRedeemLocalEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], InstantRedeemLocalEventObject>;
type InstantRedeemLocalEventFilter = TypedEventFilter<InstantRedeemLocalEvent>;
interface MintEventObject {
    to: string;
    amountLP: BigNumber;
    amountSD: BigNumber;
    mintFeeAmountSD: BigNumber;
}
type MintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], MintEventObject>;
type MintEventFilter = TypedEventFilter<MintEvent>;
interface RedeemLocalEventObject {
    from: string;
    amountLP: BigNumber;
    amountSD: BigNumber;
    chainId: number;
    dstPoolId: BigNumber;
    to: string;
}
type RedeemLocalEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    string
], RedeemLocalEventObject>;
type RedeemLocalEventFilter = TypedEventFilter<RedeemLocalEvent>;
interface RedeemLocalCallbackEventObject {
    _to: string;
    _amountSD: BigNumber;
    _amountToMintSD: BigNumber;
}
type RedeemLocalCallbackEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], RedeemLocalCallbackEventObject>;
type RedeemLocalCallbackEventFilter = TypedEventFilter<RedeemLocalCallbackEvent>;
interface RedeemRemoteEventObject {
    chainId: number;
    dstPoolId: BigNumber;
    from: string;
    amountLP: BigNumber;
    amountSD: BigNumber;
}
type RedeemRemoteEvent = TypedEvent<[
    number,
    BigNumber,
    string,
    BigNumber,
    BigNumber
], RedeemRemoteEventObject>;
type RedeemRemoteEventFilter = TypedEventFilter<RedeemRemoteEvent>;
interface SendCreditsEventObject {
    dstChainId: number;
    dstPoolId: BigNumber;
    credits: BigNumber;
    idealBalance: BigNumber;
}
type SendCreditsEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    BigNumber
], SendCreditsEventObject>;
type SendCreditsEventFilter = TypedEventFilter<SendCreditsEvent>;
interface StopSwapUpdatedEventObject {
    swapStop: boolean;
}
type StopSwapUpdatedEvent = TypedEvent<[
    boolean
], StopSwapUpdatedEventObject>;
type StopSwapUpdatedEventFilter = TypedEventFilter<StopSwapUpdatedEvent>;
interface SwapEventObject {
    chainId: number;
    dstPoolId: BigNumber;
    from: string;
    amountSD: BigNumber;
    eqReward: BigNumber;
    eqFee: BigNumber;
    protocolFee: BigNumber;
    lpFee: BigNumber;
}
type SwapEvent = TypedEvent<[
    number,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], SwapEventObject>;
type SwapEventFilter = TypedEventFilter<SwapEvent>;
interface SwapRemoteEventObject {
    to: string;
    amountSD: BigNumber;
    protocolFee: BigNumber;
    dstFee: BigNumber;
}
type SwapRemoteEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], SwapRemoteEventObject>;
type SwapRemoteEventFilter = TypedEventFilter<SwapRemoteEvent>;
interface TransferEventObject$2 {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent$2 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$2>;
type TransferEventFilter$2 = TypedEventFilter<TransferEvent$2>;
interface WithdrawMintFeeBalanceEventObject {
    to: string;
    amountSD: BigNumber;
}
type WithdrawMintFeeBalanceEvent = TypedEvent<[
    string,
    BigNumber
], WithdrawMintFeeBalanceEventObject>;
type WithdrawMintFeeBalanceEventFilter = TypedEventFilter<WithdrawMintFeeBalanceEvent>;
interface WithdrawProtocolFeeBalanceEventObject {
    to: string;
    amountSD: BigNumber;
}
type WithdrawProtocolFeeBalanceEvent = TypedEvent<[
    string,
    BigNumber
], WithdrawProtocolFeeBalanceEventObject>;
type WithdrawProtocolFeeBalanceEventFilter = TypedEventFilter<WithdrawProtocolFeeBalanceEvent>;
interface WithdrawRemoteEventObject {
    srcChainId: number;
    srcPoolId: BigNumber;
    swapAmount: BigNumber;
    mintAmount: BigNumber;
}
type WithdrawRemoteEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    BigNumber
], WithdrawRemoteEventObject>;
type WithdrawRemoteEventFilter = TypedEventFilter<WithdrawRemoteEvent>;
declare namespace Pool {
    type CreditObjStruct = {
        credits: PromiseOrValue<BigNumberish>;
        idealBalance: PromiseOrValue<BigNumberish>;
    };
    type CreditObjStructOutput = [BigNumber, BigNumber] & {
        credits: BigNumber;
        idealBalance: BigNumber;
    };
    type ChainPathStruct = {
        ready: PromiseOrValue<boolean>;
        dstChainId: PromiseOrValue<BigNumberish>;
        dstPoolId: PromiseOrValue<BigNumberish>;
        weight: PromiseOrValue<BigNumberish>;
        balance: PromiseOrValue<BigNumberish>;
        lkb: PromiseOrValue<BigNumberish>;
        credits: PromiseOrValue<BigNumberish>;
        idealBalance: PromiseOrValue<BigNumberish>;
    };
    type ChainPathStructOutput = [
        boolean,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        ready: boolean;
        dstChainId: number;
        dstPoolId: BigNumber;
        weight: BigNumber;
        balance: BigNumber;
        lkb: BigNumber;
        credits: BigNumber;
        idealBalance: BigNumber;
    };
    type SwapObjStruct = {
        amount: PromiseOrValue<BigNumberish>;
        eqFee: PromiseOrValue<BigNumberish>;
        eqReward: PromiseOrValue<BigNumberish>;
        lpFee: PromiseOrValue<BigNumberish>;
        protocolFee: PromiseOrValue<BigNumberish>;
        lkbRemove: PromiseOrValue<BigNumberish>;
    };
    type SwapObjStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        eqFee: BigNumber;
        eqReward: BigNumber;
        lpFee: BigNumber;
        protocolFee: BigNumber;
        lkbRemove: BigNumber;
    };
}
interface Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolInterface;
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
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        activateChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        batched(overrides?: CallOverrides): Promise<[boolean]>;
        callDelta(_fullMode: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        chainPathIndexLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        chainPaths(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            number,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            ready: boolean;
            dstChainId: number;
            dstPoolId: BigNumber;
            weight: BigNumber;
            balance: BigNumber;
            lkb: BigNumber;
            credits: BigNumber;
            idealBalance: BigNumber;
        }>;
        convertRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        createChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        creditChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _c: Pool.CreditObjStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        defaultLPMode(overrides?: CallOverrides): Promise<[boolean]>;
        defaultSwapMode(overrides?: CallOverrides): Promise<[boolean]>;
        deltaCredit(overrides?: CallOverrides): Promise<[BigNumber]>;
        eqFeePool(overrides?: CallOverrides): Promise<[BigNumber]>;
        feeLibrary(overrides?: CallOverrides): Promise<[string]>;
        getChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Pool.ChainPathStructOutput]>;
        getChainPathsLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        instantRedeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        localDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        lpDeltaBP(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(_to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintFeeBP(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintFeeBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        poolId(overrides?: CallOverrides): Promise<[BigNumber]>;
        protocolFeeBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        redeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemLocalCallback(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _amountToMintSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemLocalCheckOnRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemRemote(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        sendCredits(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDeltaParam(_batched: PromiseOrValue<boolean>, _swapDeltaBP: PromiseOrValue<BigNumberish>, _lpDeltaBP: PromiseOrValue<BigNumberish>, _defaultSwapMode: PromiseOrValue<boolean>, _defaultLPMode: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFee(_mintFeeBP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeLibrary(_feeLibraryAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSwapStop(_swapStop: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWeightForChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        stopSwap(overrides?: CallOverrides): Promise<[boolean]>;
        swap(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, newLiquidity: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapDeltaBP(overrides?: CallOverrides): Promise<[BigNumber]>;
        swapRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _s: Pool.SwapObjStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        totalLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalWeight(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawMintFeeBalance(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawProtocolFeeBalance(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    activateChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    batched(overrides?: CallOverrides): Promise<boolean>;
    callDelta(_fullMode: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    chainPathIndexLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    chainPaths(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        boolean,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        ready: boolean;
        dstChainId: number;
        dstPoolId: BigNumber;
        weight: BigNumber;
        balance: BigNumber;
        lkb: BigNumber;
        credits: BigNumber;
        idealBalance: BigNumber;
    }>;
    convertRate(overrides?: CallOverrides): Promise<BigNumber>;
    createChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    creditChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _c: Pool.CreditObjStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    defaultLPMode(overrides?: CallOverrides): Promise<boolean>;
    defaultSwapMode(overrides?: CallOverrides): Promise<boolean>;
    deltaCredit(overrides?: CallOverrides): Promise<BigNumber>;
    eqFeePool(overrides?: CallOverrides): Promise<BigNumber>;
    feeLibrary(overrides?: CallOverrides): Promise<string>;
    getChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Pool.ChainPathStructOutput>;
    getChainPathsLength(overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    instantRedeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    localDecimals(overrides?: CallOverrides): Promise<BigNumber>;
    lpDeltaBP(overrides?: CallOverrides): Promise<BigNumber>;
    mint(_to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintFeeBP(overrides?: CallOverrides): Promise<BigNumber>;
    mintFeeBalance(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    poolId(overrides?: CallOverrides): Promise<BigNumber>;
    protocolFeeBalance(overrides?: CallOverrides): Promise<BigNumber>;
    redeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemLocalCallback(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _amountToMintSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemLocalCheckOnRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemRemote(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    sendCredits(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDeltaParam(_batched: PromiseOrValue<boolean>, _swapDeltaBP: PromiseOrValue<BigNumberish>, _lpDeltaBP: PromiseOrValue<BigNumberish>, _defaultSwapMode: PromiseOrValue<boolean>, _defaultLPMode: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFee(_mintFeeBP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeLibrary(_feeLibraryAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSwapStop(_swapStop: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWeightForChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
    stopSwap(overrides?: CallOverrides): Promise<boolean>;
    swap(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, newLiquidity: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapDeltaBP(overrides?: CallOverrides): Promise<BigNumber>;
    swapRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _s: Pool.SwapObjStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    totalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawMintFeeBalance(_to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawProtocolFeeBalance(_to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        activateChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        batched(overrides?: CallOverrides): Promise<boolean>;
        callDelta(_fullMode: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        chainPathIndexLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        chainPaths(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            number,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            ready: boolean;
            dstChainId: number;
            dstPoolId: BigNumber;
            weight: BigNumber;
            balance: BigNumber;
            lkb: BigNumber;
            credits: BigNumber;
            idealBalance: BigNumber;
        }>;
        convertRate(overrides?: CallOverrides): Promise<BigNumber>;
        createChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        creditChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _c: Pool.CreditObjStruct, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        defaultLPMode(overrides?: CallOverrides): Promise<boolean>;
        defaultSwapMode(overrides?: CallOverrides): Promise<boolean>;
        deltaCredit(overrides?: CallOverrides): Promise<BigNumber>;
        eqFeePool(overrides?: CallOverrides): Promise<BigNumber>;
        feeLibrary(overrides?: CallOverrides): Promise<string>;
        getChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Pool.ChainPathStructOutput>;
        getChainPathsLength(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        instantRedeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        localDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        lpDeltaBP(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mintFeeBP(overrides?: CallOverrides): Promise<BigNumber>;
        mintFeeBalance(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        poolId(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeBalance(overrides?: CallOverrides): Promise<BigNumber>;
        redeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemLocalCallback(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _amountToMintSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        redeemLocalCheckOnRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            swapAmount: BigNumber;
            mintAmount: BigNumber;
        }>;
        redeemRemote(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<string>;
        sendCredits(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Pool.CreditObjStructOutput>;
        setDeltaParam(_batched: PromiseOrValue<boolean>, _swapDeltaBP: PromiseOrValue<BigNumberish>, _lpDeltaBP: PromiseOrValue<BigNumberish>, _defaultSwapMode: PromiseOrValue<boolean>, _defaultLPMode: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setFee(_mintFeeBP: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFeeLibrary(_feeLibraryAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setSwapStop(_swapStop: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setWeightForChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        stopSwap(overrides?: CallOverrides): Promise<boolean>;
        swap(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, newLiquidity: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<Pool.SwapObjStructOutput>;
        swapDeltaBP(overrides?: CallOverrides): Promise<BigNumber>;
        swapRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _s: Pool.SwapObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        totalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        withdrawMintFeeBalance(_to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawProtocolFeeBalance(_to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$2;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$2;
        "Burn(address,uint256,uint256)"(from?: null, amountLP?: null, amountSD?: null): BurnEventFilter;
        Burn(from?: null, amountLP?: null, amountSD?: null): BurnEventFilter;
        "ChainPathUpdate(uint16,uint256,uint256)"(dstChainId?: null, dstPoolId?: null, weight?: null): ChainPathUpdateEventFilter;
        ChainPathUpdate(dstChainId?: null, dstPoolId?: null, weight?: null): ChainPathUpdateEventFilter;
        "CreditChainPath(uint16,uint256,uint256,uint256)"(chainId?: null, srcPoolId?: null, amountSD?: null, idealBalance?: null): CreditChainPathEventFilter;
        CreditChainPath(chainId?: null, srcPoolId?: null, amountSD?: null, idealBalance?: null): CreditChainPathEventFilter;
        "DeltaParamUpdated(bool,uint256,uint256,bool,bool)"(batched?: null, swapDeltaBP?: null, lpDeltaBP?: null, defaultSwapMode?: null, defaultLPMode?: null): DeltaParamUpdatedEventFilter;
        DeltaParamUpdated(batched?: null, swapDeltaBP?: null, lpDeltaBP?: null, defaultSwapMode?: null, defaultLPMode?: null): DeltaParamUpdatedEventFilter;
        "FeeLibraryUpdated(address)"(feeLibraryAddr?: null): FeeLibraryUpdatedEventFilter;
        FeeLibraryUpdated(feeLibraryAddr?: null): FeeLibraryUpdatedEventFilter;
        "FeesUpdated(uint256)"(mintFeeBP?: null): FeesUpdatedEventFilter;
        FeesUpdated(mintFeeBP?: null): FeesUpdatedEventFilter;
        "InstantRedeemLocal(address,uint256,uint256,address)"(from?: null, amountLP?: null, amountSD?: null, to?: null): InstantRedeemLocalEventFilter;
        InstantRedeemLocal(from?: null, amountLP?: null, amountSD?: null, to?: null): InstantRedeemLocalEventFilter;
        "Mint(address,uint256,uint256,uint256)"(to?: null, amountLP?: null, amountSD?: null, mintFeeAmountSD?: null): MintEventFilter;
        Mint(to?: null, amountLP?: null, amountSD?: null, mintFeeAmountSD?: null): MintEventFilter;
        "RedeemLocal(address,uint256,uint256,uint16,uint256,address)"(from?: null, amountLP?: null, amountSD?: null, chainId?: null, dstPoolId?: null, to?: null): RedeemLocalEventFilter;
        RedeemLocal(from?: null, amountLP?: null, amountSD?: null, chainId?: null, dstPoolId?: null, to?: null): RedeemLocalEventFilter;
        "RedeemLocalCallback(address,uint256,uint256)"(_to?: null, _amountSD?: null, _amountToMintSD?: null): RedeemLocalCallbackEventFilter;
        RedeemLocalCallback(_to?: null, _amountSD?: null, _amountToMintSD?: null): RedeemLocalCallbackEventFilter;
        "RedeemRemote(uint16,uint256,address,uint256,uint256)"(chainId?: null, dstPoolId?: null, from?: null, amountLP?: null, amountSD?: null): RedeemRemoteEventFilter;
        RedeemRemote(chainId?: null, dstPoolId?: null, from?: null, amountLP?: null, amountSD?: null): RedeemRemoteEventFilter;
        "SendCredits(uint16,uint256,uint256,uint256)"(dstChainId?: null, dstPoolId?: null, credits?: null, idealBalance?: null): SendCreditsEventFilter;
        SendCredits(dstChainId?: null, dstPoolId?: null, credits?: null, idealBalance?: null): SendCreditsEventFilter;
        "StopSwapUpdated(bool)"(swapStop?: null): StopSwapUpdatedEventFilter;
        StopSwapUpdated(swapStop?: null): StopSwapUpdatedEventFilter;
        "Swap(uint16,uint256,address,uint256,uint256,uint256,uint256,uint256)"(chainId?: null, dstPoolId?: null, from?: null, amountSD?: null, eqReward?: null, eqFee?: null, protocolFee?: null, lpFee?: null): SwapEventFilter;
        Swap(chainId?: null, dstPoolId?: null, from?: null, amountSD?: null, eqReward?: null, eqFee?: null, protocolFee?: null, lpFee?: null): SwapEventFilter;
        "SwapRemote(address,uint256,uint256,uint256)"(to?: null, amountSD?: null, protocolFee?: null, dstFee?: null): SwapRemoteEventFilter;
        SwapRemote(to?: null, amountSD?: null, protocolFee?: null, dstFee?: null): SwapRemoteEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$2;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$2;
        "WithdrawMintFeeBalance(address,uint256)"(to?: null, amountSD?: null): WithdrawMintFeeBalanceEventFilter;
        WithdrawMintFeeBalance(to?: null, amountSD?: null): WithdrawMintFeeBalanceEventFilter;
        "WithdrawProtocolFeeBalance(address,uint256)"(to?: null, amountSD?: null): WithdrawProtocolFeeBalanceEventFilter;
        WithdrawProtocolFeeBalance(to?: null, amountSD?: null): WithdrawProtocolFeeBalanceEventFilter;
        "WithdrawRemote(uint16,uint256,uint256,uint256)"(srcChainId?: null, srcPoolId?: null, swapAmount?: null, mintAmount?: null): WithdrawRemoteEventFilter;
        WithdrawRemote(srcChainId?: null, srcPoolId?: null, swapAmount?: null, mintAmount?: null): WithdrawRemoteEventFilter;
    };
    estimateGas: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        activateChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        batched(overrides?: CallOverrides): Promise<BigNumber>;
        callDelta(_fullMode: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        chainPathIndexLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        chainPaths(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertRate(overrides?: CallOverrides): Promise<BigNumber>;
        createChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        creditChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _c: Pool.CreditObjStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        defaultLPMode(overrides?: CallOverrides): Promise<BigNumber>;
        defaultSwapMode(overrides?: CallOverrides): Promise<BigNumber>;
        deltaCredit(overrides?: CallOverrides): Promise<BigNumber>;
        eqFeePool(overrides?: CallOverrides): Promise<BigNumber>;
        feeLibrary(overrides?: CallOverrides): Promise<BigNumber>;
        getChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getChainPathsLength(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        instantRedeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        localDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        lpDeltaBP(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintFeeBP(overrides?: CallOverrides): Promise<BigNumber>;
        mintFeeBalance(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        poolId(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeBalance(overrides?: CallOverrides): Promise<BigNumber>;
        redeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemLocalCallback(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _amountToMintSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemLocalCheckOnRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemRemote(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        sendCredits(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDeltaParam(_batched: PromiseOrValue<boolean>, _swapDeltaBP: PromiseOrValue<BigNumberish>, _lpDeltaBP: PromiseOrValue<BigNumberish>, _defaultSwapMode: PromiseOrValue<boolean>, _defaultLPMode: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFee(_mintFeeBP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeLibrary(_feeLibraryAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSwapStop(_swapStop: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWeightForChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        stopSwap(overrides?: CallOverrides): Promise<BigNumber>;
        swap(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, newLiquidity: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapDeltaBP(overrides?: CallOverrides): Promise<BigNumber>;
        swapRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _s: Pool.SwapObjStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawMintFeeBalance(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawProtocolFeeBalance(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        activateChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batched(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callDelta(_fullMode: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        chainPathIndexLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainPaths(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        creditChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _c: Pool.CreditObjStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        defaultLPMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultSwapMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deltaCredit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eqFeePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeLibrary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainPathsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        instantRedeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        localDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpDeltaBP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintFeeBP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintFeeBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        poolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFeeBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemLocal(_from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemLocalCallback(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, _amountToMintSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemLocalCheckOnRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemRemote(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendCredits(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDeltaParam(_batched: PromiseOrValue<boolean>, _swapDeltaBP: PromiseOrValue<BigNumberish>, _lpDeltaBP: PromiseOrValue<BigNumberish>, _defaultSwapMode: PromiseOrValue<boolean>, _defaultLPMode: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFee(_mintFeeBP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeLibrary(_feeLibraryAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSwapStop(_swapStop: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWeightForChainPath(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _weight: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stopSwap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(_dstChainId: PromiseOrValue<BigNumberish>, _dstPoolId: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, newLiquidity: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapDeltaBP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcPoolId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, _s: Pool.SwapObjStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawMintFeeBalance(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawProtocolFeeBalance(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface RouterETHInterface extends utils.Interface {
    functions: {
        "addLiquidityETH()": FunctionFragment;
        "poolId()": FunctionFragment;
        "stargateEthVault()": FunctionFragment;
        "stargateRouter()": FunctionFragment;
        "swapETH(uint16,address,bytes,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addLiquidityETH" | "poolId" | "stargateEthVault" | "stargateRouter" | "swapETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "addLiquidityETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargateEthVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargateRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "addLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateEthVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapETH", data: BytesLike): Result;
    events: {};
}
interface RouterETH extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RouterETHInterface;
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
        addLiquidityETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        poolId(overrides?: CallOverrides): Promise<[number]>;
        stargateEthVault(overrides?: CallOverrides): Promise<[string]>;
        stargateRouter(overrides?: CallOverrides): Promise<[string]>;
        swapETH(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addLiquidityETH(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    poolId(overrides?: CallOverrides): Promise<number>;
    stargateEthVault(overrides?: CallOverrides): Promise<string>;
    stargateRouter(overrides?: CallOverrides): Promise<string>;
    swapETH(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addLiquidityETH(overrides?: CallOverrides): Promise<void>;
        poolId(overrides?: CallOverrides): Promise<number>;
        stargateEthVault(overrides?: CallOverrides): Promise<string>;
        stargateRouter(overrides?: CallOverrides): Promise<string>;
        swapETH(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addLiquidityETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        poolId(overrides?: CallOverrides): Promise<BigNumber>;
        stargateEthVault(overrides?: CallOverrides): Promise<BigNumber>;
        stargateRouter(overrides?: CallOverrides): Promise<BigNumber>;
        swapETH(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addLiquidityETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        poolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargateEthVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargateRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapETH(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _minAmountLD: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface StargateTokenInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "chainId()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "dstContractLookup(uint16)": FunctionFragment;
        "endpoint()": FunctionFragment;
        "estimateSendTokensFee(uint16,bool,bytes)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "isMain()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "pauseSendTokens(bool)": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "sendTokens(uint16,bytes,uint256,address,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setDestination(uint16,bytes)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "chainId" | "decimals" | "decreaseAllowance" | "dstContractLookup" | "endpoint" | "estimateSendTokensFee" | "forceResumeReceive" | "increaseAllowance" | "isMain" | "lzReceive" | "name" | "owner" | "pauseSendTokens" | "paused" | "renounceOwnership" | "sendTokens" | "setConfig" | "setDestination" | "setReceiveVersion" | "setSendVersion" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "dstContractLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateSendTokensFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isMain", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseSendTokens", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setDestination", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dstContractLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendTokensFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseSendTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDestination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(bool)": EventFragment;
        "ReceiveFromChain(uint16,uint64,uint256)": EventFragment;
        "SendToChain(uint16,bytes,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
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
interface OwnershipTransferredEventObject$3 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$3 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$3>;
type OwnershipTransferredEventFilter$3 = TypedEventFilter<OwnershipTransferredEvent$3>;
interface PausedEventObject {
    isPaused: boolean;
}
type PausedEvent = TypedEvent<[boolean], PausedEventObject>;
type PausedEventFilter = TypedEventFilter<PausedEvent>;
interface ReceiveFromChainEventObject {
    srcChainId: number;
    nonce: BigNumber;
    qty: BigNumber;
}
type ReceiveFromChainEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], ReceiveFromChainEventObject>;
type ReceiveFromChainEventFilter = TypedEventFilter<ReceiveFromChainEvent>;
interface SendToChainEventObject {
    dstChainId: number;
    to: string;
    qty: BigNumber;
}
type SendToChainEvent = TypedEvent<[
    number,
    string,
    BigNumber
], SendToChainEventObject>;
type SendToChainEventFilter = TypedEventFilter<SendToChainEvent>;
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
interface StargateToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargateTokenInterface;
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
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        chainId(overrides?: CallOverrides): Promise<[number]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        endpoint(overrides?: CallOverrides): Promise<[string]>;
        estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isMain(overrides?: CallOverrides): Promise<[boolean]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    chainId(overrides?: CallOverrides): Promise<number>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    endpoint(overrides?: CallOverrides): Promise<string>;
    estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isMain(overrides?: CallOverrides): Promise<boolean>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<number>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        endpoint(overrides?: CallOverrides): Promise<string>;
        estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isMain(overrides?: CallOverrides): Promise<boolean>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$1;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$1;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        "Paused(bool)"(isPaused?: null): PausedEventFilter;
        Paused(isPaused?: null): PausedEventFilter;
        "ReceiveFromChain(uint16,uint64,uint256)"(srcChainId?: null, nonce?: null, qty?: null): ReceiveFromChainEventFilter;
        ReceiveFromChain(srcChainId?: null, nonce?: null, qty?: null): ReceiveFromChainEventFilter;
        "SendToChain(uint16,bytes,uint256)"(dstChainId?: null, to?: null, qty?: null): SendToChainEventFilter;
        SendToChain(dstChainId?: null, to?: null, qty?: null): SendToChainEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$1;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$1;
    };
    estimateGas: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isMain(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isMain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface VotingEscrowInterface extends utils.Interface {
    functions: {
        "MAXTIME()": FunctionFragment;
        "MINTIME()": FunctionFragment;
        "add_to_whitelist(address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfAt(address,uint256)": FunctionFragment;
        "balanceOfAtT(address,uint256)": FunctionFragment;
        "changeController(address)": FunctionFragment;
        "checkpoint()": FunctionFragment;
        "contracts_whitelist(address)": FunctionFragment;
        "controller()": FunctionFragment;
        "create_lock(uint256,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit_for(address,uint256)": FunctionFragment;
        "epoch()": FunctionFragment;
        "get_last_user_slope(address)": FunctionFragment;
        "increase_amount(uint256)": FunctionFragment;
        "increase_amount_and_time(uint256,uint256)": FunctionFragment;
        "increase_unlock_time(uint256)": FunctionFragment;
        "locked(address)": FunctionFragment;
        "locked__end(address)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "point_history(uint256)": FunctionFragment;
        "remove_from_whitelist(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "slope_changes(uint256)": FunctionFragment;
        "supply()": FunctionFragment;
        "symbol()": FunctionFragment;
        "token()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalSupplyAt(uint256)": FunctionFragment;
        "totalSupplyAtT(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "transfersEnabled()": FunctionFragment;
        "unlock()": FunctionFragment;
        "unlocked()": FunctionFragment;
        "user_point_epoch(address)": FunctionFragment;
        "user_point_history(address,uint256)": FunctionFragment;
        "user_point_history__ts(address,uint256)": FunctionFragment;
        "version()": FunctionFragment;
        "withdraw()": FunctionFragment;
        "withdraw_and_create_lock(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAXTIME" | "MINTIME" | "add_to_whitelist" | "balanceOf" | "balanceOfAt" | "balanceOfAtT" | "changeController" | "checkpoint" | "contracts_whitelist" | "controller" | "create_lock" | "decimals" | "deposit_for" | "epoch" | "get_last_user_slope" | "increase_amount" | "increase_amount_and_time" | "increase_unlock_time" | "locked" | "locked__end" | "name" | "owner" | "point_history" | "remove_from_whitelist" | "renounceOwnership" | "slope_changes" | "supply" | "symbol" | "token" | "totalSupply" | "totalSupplyAt" | "totalSupplyAtT" | "transferOwnership" | "transfersEnabled" | "unlock" | "unlocked" | "user_point_epoch" | "user_point_history" | "user_point_history__ts" | "version" | "withdraw" | "withdraw_and_create_lock"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAXTIME", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTIME", values?: undefined): string;
    encodeFunctionData(functionFragment: "add_to_whitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfAt", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfAtT", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "changeController", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "checkpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "contracts_whitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    encodeFunctionData(functionFragment: "create_lock", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit_for", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_last_user_slope", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increase_amount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increase_amount_and_time", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increase_unlock_time", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "locked", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "locked__end", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "point_history", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remove_from_whitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "slope_changes", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supply", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupplyAt", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupplyAtT", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transfersEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlocked", values?: undefined): string;
    encodeFunctionData(functionFragment: "user_point_epoch", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "user_point_history", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "user_point_history__ts", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw_and_create_lock", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "MAXTIME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTIME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_to_whitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAtT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contracts_whitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "create_lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit_for", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_last_user_slope", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increase_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increase_amount_and_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increase_unlock_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked__end", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "point_history", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_from_whitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slope_changes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAtT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfersEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_history", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_history__ts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw_and_create_lock", data: BytesLike): Result;
    events: {
        "Deposit(address,uint256,uint256,uint8,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Supply(uint256,uint256)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Supply"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
interface DepositEventObject$1 {
    provider: string;
    value: BigNumber;
    locktime: BigNumber;
    deposit_type: number;
    ts: BigNumber;
}
type DepositEvent$1 = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber
], DepositEventObject$1>;
type DepositEventFilter$1 = TypedEventFilter<DepositEvent$1>;
interface OwnershipTransferredEventObject$2 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$2 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$2>;
type OwnershipTransferredEventFilter$2 = TypedEventFilter<OwnershipTransferredEvent$2>;
interface SupplyEventObject$1 {
    prevSupply: BigNumber;
    supply: BigNumber;
}
type SupplyEvent$1 = TypedEvent<[BigNumber, BigNumber], SupplyEventObject$1>;
type SupplyEventFilter$1 = TypedEventFilter<SupplyEvent$1>;
interface WithdrawEventObject$1 {
    provider: string;
    value: BigNumber;
    ts: BigNumber;
}
type WithdrawEvent$1 = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject$1>;
type WithdrawEventFilter$1 = TypedEventFilter<WithdrawEvent$1>;
interface VotingEscrow extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VotingEscrowInterface;
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
        MAXTIME(overrides?: CallOverrides): Promise<[BigNumber]>;
        MINTIME(overrides?: CallOverrides): Promise<[BigNumber]>;
        add_to_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        changeController(_newController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        controller(overrides?: CallOverrides): Promise<[string]>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        epoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            amount: BigNumber;
            end: BigNumber;
        }>;
        locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        supply(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transfersEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        unlock(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unlocked(overrides?: CallOverrides): Promise<[boolean]>;
        user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        version(overrides?: CallOverrides): Promise<[string]>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw_and_create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;
    MINTIME(overrides?: CallOverrides): Promise<BigNumber>;
    add_to_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    changeController(_newController: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkpoint(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    controller(overrides?: CallOverrides): Promise<string>;
    create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    epoch(overrides?: CallOverrides): Promise<BigNumber>;
    get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        amount: BigNumber;
        end: BigNumber;
    }>;
    locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
    }>;
    remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    supply(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transfersEnabled(overrides?: CallOverrides): Promise<boolean>;
    unlock(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unlocked(overrides?: CallOverrides): Promise<boolean>;
    user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
    }>;
    user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    version(overrides?: CallOverrides): Promise<string>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw_and_create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;
        MINTIME(overrides?: CallOverrides): Promise<BigNumber>;
        add_to_whitelist(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        changeController(_newController: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        checkpoint(overrides?: CallOverrides): Promise<void>;
        contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        controller(overrides?: CallOverrides): Promise<string>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            amount: BigNumber;
            end: BigNumber;
        }>;
        locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transfersEnabled(overrides?: CallOverrides): Promise<boolean>;
        unlock(overrides?: CallOverrides): Promise<void>;
        unlocked(overrides?: CallOverrides): Promise<boolean>;
        user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<string>;
        withdraw(overrides?: CallOverrides): Promise<void>;
        withdraw_and_create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposit(address,uint256,uint256,uint8,uint256)"(provider?: PromiseOrValue<string> | null, value?: null, locktime?: PromiseOrValue<BigNumberish> | null, deposit_type?: null, ts?: null): DepositEventFilter$1;
        Deposit(provider?: PromiseOrValue<string> | null, value?: null, locktime?: PromiseOrValue<BigNumberish> | null, deposit_type?: null, ts?: null): DepositEventFilter$1;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        "Supply(uint256,uint256)"(prevSupply?: null, supply?: null): SupplyEventFilter$1;
        Supply(prevSupply?: null, supply?: null): SupplyEventFilter$1;
        "Withdraw(address,uint256,uint256)"(provider?: PromiseOrValue<string> | null, value?: null, ts?: null): WithdrawEventFilter$1;
        Withdraw(provider?: PromiseOrValue<string> | null, value?: null, ts?: null): WithdrawEventFilter$1;
    };
    estimateGas: {
        MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;
        MINTIME(overrides?: CallOverrides): Promise<BigNumber>;
        add_to_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        changeController(_newController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<BigNumber>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transfersEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        unlock(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unlocked(overrides?: CallOverrides): Promise<BigNumber>;
        user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw_and_create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        MAXTIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINTIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add_to_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeController(_newController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transfersEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlock(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unlocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw_and_create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface WhitelistAuctionInterface extends utils.Interface {
    functions: {
        "FIRST_AUCTION_DURATION()": FunctionFragment;
        "SECOND_AUCTION_DURATION()": FunctionFragment;
        "STARGATE_FOR_AUCTION()": FunctionFragment;
        "USD_AUCTION_CAP()": FunctionFragment;
        "VEST_DURATION()": FunctionFragment;
        "addAuctionAddresses(address[])": FunctionFragment;
        "addBondAddresses(address[])": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "astgDecimals()": FunctionFragment;
        "astgWhitelist(address)": FunctionFragment;
        "astgWhitelistMaxAlloc()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "bondingWhitelist(address)": FunctionFragment;
        "bondingWhitelistMaxAlloc()": FunctionFragment;
        "capStgAuctionAmount()": FunctionFragment;
        "countOfMaxAuction()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "enterFirstAuction(uint256)": FunctionFragment;
        "enterSecondAuction(uint256)": FunctionFragment;
        "firstAuctionEndTime()": FunctionFragment;
        "firstAuctionStartTime()": FunctionFragment;
        "getFirstAuctionCapAmount(address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerWithdrawn()": FunctionFragment;
        "redeem()": FunctionFragment;
        "redeemable(address)": FunctionFragment;
        "redeemedShares(address)": FunctionFragment;
        "remainingUsdQuota()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "secondAuctionAdditionalAllocCap()": FunctionFragment;
        "secondAuctionAllocCap()": FunctionFragment;
        "secondAuctionEndTime()": FunctionFragment;
        "secondAuctionInit()": FunctionFragment;
        "stableCoin()": FunctionFragment;
        "stargateToken()": FunctionFragment;
        "stargateTreasury()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "vestStartTime()": FunctionFragment;
        "withdrawRemainingStargate(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "FIRST_AUCTION_DURATION" | "SECOND_AUCTION_DURATION" | "STARGATE_FOR_AUCTION" | "USD_AUCTION_CAP" | "VEST_DURATION" | "addAuctionAddresses" | "addBondAddresses" | "allowance" | "approve" | "astgDecimals" | "astgWhitelist" | "astgWhitelistMaxAlloc" | "balanceOf" | "bondingWhitelist" | "bondingWhitelistMaxAlloc" | "capStgAuctionAmount" | "countOfMaxAuction" | "decimals" | "decreaseAllowance" | "enterFirstAuction" | "enterSecondAuction" | "firstAuctionEndTime" | "firstAuctionStartTime" | "getFirstAuctionCapAmount" | "increaseAllowance" | "name" | "owner" | "ownerWithdrawn" | "redeem" | "redeemable" | "redeemedShares" | "remainingUsdQuota" | "renounceOwnership" | "secondAuctionAdditionalAllocCap" | "secondAuctionAllocCap" | "secondAuctionEndTime" | "secondAuctionInit" | "stableCoin" | "stargateToken" | "stargateTreasury" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "vestStartTime" | "withdrawRemainingStargate"): FunctionFragment;
    encodeFunctionData(functionFragment: "FIRST_AUCTION_DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "SECOND_AUCTION_DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "STARGATE_FOR_AUCTION", values?: undefined): string;
    encodeFunctionData(functionFragment: "USD_AUCTION_CAP", values?: undefined): string;
    encodeFunctionData(functionFragment: "VEST_DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuctionAddresses", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "addBondAddresses", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "astgDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "astgWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "astgWhitelistMaxAlloc", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bondingWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bondingWhitelistMaxAlloc", values?: undefined): string;
    encodeFunctionData(functionFragment: "capStgAuctionAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "countOfMaxAuction", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "enterFirstAuction", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "enterSecondAuction", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "firstAuctionEndTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstAuctionStartTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFirstAuctionCapAmount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerWithdrawn", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemable", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "redeemedShares", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "remainingUsdQuota", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "secondAuctionAdditionalAllocCap", values?: undefined): string;
    encodeFunctionData(functionFragment: "secondAuctionAllocCap", values?: undefined): string;
    encodeFunctionData(functionFragment: "secondAuctionEndTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "secondAuctionInit", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableCoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargateToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargateTreasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "vestStartTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawRemainingStargate", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "FIRST_AUCTION_DURATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SECOND_AUCTION_DURATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STARGATE_FOR_AUCTION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USD_AUCTION_CAP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VEST_DURATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuctionAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBondAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "astgDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "astgWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "astgWhitelistMaxAlloc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bondingWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bondingWhitelistMaxAlloc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "capStgAuctionAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countOfMaxAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterFirstAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterSecondAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstAuctionEndTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstAuctionStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFirstAuctionCapAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerWithdrawn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemedShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainingUsdQuota", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondAuctionAdditionalAllocCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondAuctionAllocCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondAuctionEndTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondAuctionInit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableCoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vestStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawRemainingStargate", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "FinalWithdrawal(address,uint256,uint256)": EventFragment;
        "FirstAuctioned(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Redeemed(address,uint256,uint256)": EventFragment;
        "SecondAuctioned(address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FinalWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FirstAuctioned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SecondAuctioned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
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
interface FinalWithdrawalEventObject {
    _to: string;
    _remainingUSD: BigNumber;
    _remainingSTG: BigNumber;
}
type FinalWithdrawalEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], FinalWithdrawalEventObject>;
type FinalWithdrawalEventFilter = TypedEventFilter<FinalWithdrawalEvent>;
interface FirstAuctionedEventObject {
    _sender: string;
    _astgAmount: BigNumber;
}
type FirstAuctionedEvent = TypedEvent<[
    string,
    BigNumber
], FirstAuctionedEventObject>;
type FirstAuctionedEventFilter = TypedEventFilter<FirstAuctionedEvent>;
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
interface RedeemedEventObject {
    _sender: string;
    _astgAmount: BigNumber;
    _stgAmount: BigNumber;
}
type RedeemedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], RedeemedEventObject>;
type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;
interface SecondAuctionedEventObject {
    _sender: string;
    _astgAmount: BigNumber;
}
type SecondAuctionedEvent = TypedEvent<[
    string,
    BigNumber
], SecondAuctionedEventObject>;
type SecondAuctionedEventFilter = TypedEventFilter<SecondAuctionedEvent>;
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
interface WhitelistAuction extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WhitelistAuctionInterface;
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
        FIRST_AUCTION_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        SECOND_AUCTION_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        STARGATE_FOR_AUCTION(overrides?: CallOverrides): Promise<[BigNumber]>;
        USD_AUCTION_CAP(overrides?: CallOverrides): Promise<[BigNumber]>;
        VEST_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        addAuctionAddresses(addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addBondAddresses(addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        astgDecimals(overrides?: CallOverrides): Promise<[number]>;
        astgWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        astgWhitelistMaxAlloc(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        bondingWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        bondingWhitelistMaxAlloc(overrides?: CallOverrides): Promise<[BigNumber]>;
        capStgAuctionAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        countOfMaxAuction(overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enterFirstAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enterSecondAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        firstAuctionEndTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        firstAuctionStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        getFirstAuctionCapAmount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerWithdrawn(overrides?: CallOverrides): Promise<[boolean]>;
        redeem(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemable(_redeemer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        redeemedShares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        remainingUsdQuota(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        secondAuctionAdditionalAllocCap(overrides?: CallOverrides): Promise<[BigNumber]>;
        secondAuctionAllocCap(overrides?: CallOverrides): Promise<[BigNumber]>;
        secondAuctionEndTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        secondAuctionInit(overrides?: CallOverrides): Promise<[boolean]>;
        stableCoin(overrides?: CallOverrides): Promise<[string]>;
        stargateToken(overrides?: CallOverrides): Promise<[string]>;
        stargateTreasury(overrides?: CallOverrides): Promise<[string]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        vestStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawRemainingStargate(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    FIRST_AUCTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    SECOND_AUCTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    STARGATE_FOR_AUCTION(overrides?: CallOverrides): Promise<BigNumber>;
    USD_AUCTION_CAP(overrides?: CallOverrides): Promise<BigNumber>;
    VEST_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    addAuctionAddresses(addresses: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addBondAddresses(addresses: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    astgDecimals(overrides?: CallOverrides): Promise<number>;
    astgWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    astgWhitelistMaxAlloc(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    bondingWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    bondingWhitelistMaxAlloc(overrides?: CallOverrides): Promise<BigNumber>;
    capStgAuctionAmount(overrides?: CallOverrides): Promise<BigNumber>;
    countOfMaxAuction(overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enterFirstAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enterSecondAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    firstAuctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;
    firstAuctionStartTime(overrides?: CallOverrides): Promise<BigNumber>;
    getFirstAuctionCapAmount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerWithdrawn(overrides?: CallOverrides): Promise<boolean>;
    redeem(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemable(_redeemer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    redeemedShares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    remainingUsdQuota(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    secondAuctionAdditionalAllocCap(overrides?: CallOverrides): Promise<BigNumber>;
    secondAuctionAllocCap(overrides?: CallOverrides): Promise<BigNumber>;
    secondAuctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;
    secondAuctionInit(overrides?: CallOverrides): Promise<boolean>;
    stableCoin(overrides?: CallOverrides): Promise<string>;
    stargateToken(overrides?: CallOverrides): Promise<string>;
    stargateTreasury(overrides?: CallOverrides): Promise<string>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    vestStartTime(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawRemainingStargate(_to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        FIRST_AUCTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        SECOND_AUCTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        STARGATE_FOR_AUCTION(overrides?: CallOverrides): Promise<BigNumber>;
        USD_AUCTION_CAP(overrides?: CallOverrides): Promise<BigNumber>;
        VEST_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        addAuctionAddresses(addresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        addBondAddresses(addresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        astgDecimals(overrides?: CallOverrides): Promise<number>;
        astgWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        astgWhitelistMaxAlloc(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bondingWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        bondingWhitelistMaxAlloc(overrides?: CallOverrides): Promise<BigNumber>;
        capStgAuctionAmount(overrides?: CallOverrides): Promise<BigNumber>;
        countOfMaxAuction(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        enterFirstAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        enterSecondAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        firstAuctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;
        firstAuctionStartTime(overrides?: CallOverrides): Promise<BigNumber>;
        getFirstAuctionCapAmount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerWithdrawn(overrides?: CallOverrides): Promise<boolean>;
        redeem(overrides?: CallOverrides): Promise<void>;
        redeemable(_redeemer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemedShares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        remainingUsdQuota(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        secondAuctionAdditionalAllocCap(overrides?: CallOverrides): Promise<BigNumber>;
        secondAuctionAllocCap(overrides?: CallOverrides): Promise<BigNumber>;
        secondAuctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;
        secondAuctionInit(overrides?: CallOverrides): Promise<boolean>;
        stableCoin(overrides?: CallOverrides): Promise<string>;
        stargateToken(overrides?: CallOverrides): Promise<string>;
        stargateTreasury(overrides?: CallOverrides): Promise<string>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        vestStartTime(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawRemainingStargate(_to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "FinalWithdrawal(address,uint256,uint256)"(_to?: null, _remainingUSD?: null, _remainingSTG?: null): FinalWithdrawalEventFilter;
        FinalWithdrawal(_to?: null, _remainingUSD?: null, _remainingSTG?: null): FinalWithdrawalEventFilter;
        "FirstAuctioned(address,uint256)"(_sender?: null, _astgAmount?: null): FirstAuctionedEventFilter;
        FirstAuctioned(_sender?: null, _astgAmount?: null): FirstAuctionedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "Redeemed(address,uint256,uint256)"(_sender?: null, _astgAmount?: null, _stgAmount?: null): RedeemedEventFilter;
        Redeemed(_sender?: null, _astgAmount?: null, _stgAmount?: null): RedeemedEventFilter;
        "SecondAuctioned(address,uint256)"(_sender?: null, _astgAmount?: null): SecondAuctionedEventFilter;
        SecondAuctioned(_sender?: null, _astgAmount?: null): SecondAuctionedEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        FIRST_AUCTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        SECOND_AUCTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        STARGATE_FOR_AUCTION(overrides?: CallOverrides): Promise<BigNumber>;
        USD_AUCTION_CAP(overrides?: CallOverrides): Promise<BigNumber>;
        VEST_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        addAuctionAddresses(addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addBondAddresses(addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        astgDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        astgWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        astgWhitelistMaxAlloc(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bondingWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bondingWhitelistMaxAlloc(overrides?: CallOverrides): Promise<BigNumber>;
        capStgAuctionAmount(overrides?: CallOverrides): Promise<BigNumber>;
        countOfMaxAuction(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enterFirstAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enterSecondAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        firstAuctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;
        firstAuctionStartTime(overrides?: CallOverrides): Promise<BigNumber>;
        getFirstAuctionCapAmount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerWithdrawn(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemable(_redeemer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemedShares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        remainingUsdQuota(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        secondAuctionAdditionalAllocCap(overrides?: CallOverrides): Promise<BigNumber>;
        secondAuctionAllocCap(overrides?: CallOverrides): Promise<BigNumber>;
        secondAuctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;
        secondAuctionInit(overrides?: CallOverrides): Promise<BigNumber>;
        stableCoin(overrides?: CallOverrides): Promise<BigNumber>;
        stargateToken(overrides?: CallOverrides): Promise<BigNumber>;
        stargateTreasury(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        vestStartTime(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawRemainingStargate(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        FIRST_AUCTION_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SECOND_AUCTION_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STARGATE_FOR_AUCTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USD_AUCTION_CAP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VEST_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuctionAddresses(addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addBondAddresses(addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        astgDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        astgWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        astgWhitelistMaxAlloc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bondingWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bondingWhitelistMaxAlloc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        capStgAuctionAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        countOfMaxAuction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enterFirstAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enterSecondAuction(_requestAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        firstAuctionEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstAuctionStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFirstAuctionCapAmount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerWithdrawn(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemable(_redeemer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemedShares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remainingUsdQuota(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        secondAuctionAdditionalAllocCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        secondAuctionAllocCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        secondAuctionEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        secondAuctionInit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stableCoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargateToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargateTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vestStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawRemainingStargate(_to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface SVotingEscrowInterface extends utils.Interface {
    functions: {
        "MAXTIME()": FunctionFragment;
        "MINTIME()": FunctionFragment;
        "add_to_whitelist(address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfAt(address,uint256)": FunctionFragment;
        "balanceOfAtT(address,uint256)": FunctionFragment;
        "changeController(address)": FunctionFragment;
        "checkpoint()": FunctionFragment;
        "contracts_whitelist(address)": FunctionFragment;
        "controller()": FunctionFragment;
        "create_lock(uint256,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit_for(address,uint256)": FunctionFragment;
        "epoch()": FunctionFragment;
        "get_last_user_slope(address)": FunctionFragment;
        "increase_amount(uint256)": FunctionFragment;
        "increase_amount_and_time(uint256,uint256)": FunctionFragment;
        "increase_unlock_time(uint256)": FunctionFragment;
        "locked(address)": FunctionFragment;
        "locked__end(address)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "point_history(uint256)": FunctionFragment;
        "remove_from_whitelist(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "slope_changes(uint256)": FunctionFragment;
        "supply()": FunctionFragment;
        "symbol()": FunctionFragment;
        "token()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalSupplyAt(uint256)": FunctionFragment;
        "totalSupplyAtT(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "transfersEnabled()": FunctionFragment;
        "unlock()": FunctionFragment;
        "unlocked()": FunctionFragment;
        "user_point_epoch(address)": FunctionFragment;
        "user_point_history(address,uint256)": FunctionFragment;
        "user_point_history__ts(address,uint256)": FunctionFragment;
        "version()": FunctionFragment;
        "withdraw()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAXTIME" | "MINTIME" | "add_to_whitelist" | "balanceOf" | "balanceOfAt" | "balanceOfAtT" | "changeController" | "checkpoint" | "contracts_whitelist" | "controller" | "create_lock" | "decimals" | "deposit_for" | "epoch" | "get_last_user_slope" | "increase_amount" | "increase_amount_and_time" | "increase_unlock_time" | "locked" | "locked__end" | "name" | "owner" | "point_history" | "remove_from_whitelist" | "renounceOwnership" | "slope_changes" | "supply" | "symbol" | "token" | "totalSupply" | "totalSupplyAt" | "totalSupplyAtT" | "transferOwnership" | "transfersEnabled" | "unlock" | "unlocked" | "user_point_epoch" | "user_point_history" | "user_point_history__ts" | "version" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAXTIME", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTIME", values?: undefined): string;
    encodeFunctionData(functionFragment: "add_to_whitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfAt", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfAtT", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "changeController", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "checkpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "contracts_whitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    encodeFunctionData(functionFragment: "create_lock", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit_for", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_last_user_slope", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increase_amount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increase_amount_and_time", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increase_unlock_time", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "locked", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "locked__end", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "point_history", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remove_from_whitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "slope_changes", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supply", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupplyAt", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupplyAtT", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transfersEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlocked", values?: undefined): string;
    encodeFunctionData(functionFragment: "user_point_epoch", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "user_point_history", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "user_point_history__ts", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAXTIME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTIME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_to_whitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAtT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contracts_whitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "create_lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit_for", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_last_user_slope", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increase_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increase_amount_and_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increase_unlock_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked__end", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "point_history", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_from_whitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slope_changes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAtT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfersEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_history", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_history__ts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Deposit(address,uint256,uint256,uint8,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Supply(uint256,uint256)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Supply"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
interface DepositEventObject {
    provider: string;
    value: BigNumber;
    locktime: BigNumber;
    deposit_type: number;
    ts: BigNumber;
}
type DepositEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber
], DepositEventObject>;
type DepositEventFilter = TypedEventFilter<DepositEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface SupplyEventObject {
    prevSupply: BigNumber;
    supply: BigNumber;
}
type SupplyEvent = TypedEvent<[BigNumber, BigNumber], SupplyEventObject>;
type SupplyEventFilter = TypedEventFilter<SupplyEvent>;
interface WithdrawEventObject {
    provider: string;
    value: BigNumber;
    ts: BigNumber;
}
type WithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
interface SVotingEscrow extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SVotingEscrowInterface;
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
        MAXTIME(overrides?: CallOverrides): Promise<[BigNumber]>;
        MINTIME(overrides?: CallOverrides): Promise<[BigNumber]>;
        add_to_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        changeController(_newController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        controller(overrides?: CallOverrides): Promise<[string]>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        epoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            amount: BigNumber;
            end: BigNumber;
        }>;
        locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        supply(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transfersEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        unlock(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unlocked(overrides?: CallOverrides): Promise<[boolean]>;
        user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        version(overrides?: CallOverrides): Promise<[string]>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;
    MINTIME(overrides?: CallOverrides): Promise<BigNumber>;
    add_to_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    changeController(_newController: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkpoint(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    controller(overrides?: CallOverrides): Promise<string>;
    create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    epoch(overrides?: CallOverrides): Promise<BigNumber>;
    get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        amount: BigNumber;
        end: BigNumber;
    }>;
    locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
    }>;
    remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    supply(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transfersEnabled(overrides?: CallOverrides): Promise<boolean>;
    unlock(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unlocked(overrides?: CallOverrides): Promise<boolean>;
    user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
    }>;
    user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    version(overrides?: CallOverrides): Promise<string>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;
        MINTIME(overrides?: CallOverrides): Promise<BigNumber>;
        add_to_whitelist(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        changeController(_newController: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        checkpoint(overrides?: CallOverrides): Promise<void>;
        contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        controller(overrides?: CallOverrides): Promise<string>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            amount: BigNumber;
            end: BigNumber;
        }>;
        locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transfersEnabled(overrides?: CallOverrides): Promise<boolean>;
        unlock(overrides?: CallOverrides): Promise<void>;
        unlocked(overrides?: CallOverrides): Promise<boolean>;
        user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<string>;
        withdraw(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposit(address,uint256,uint256,uint8,uint256)"(provider?: PromiseOrValue<string> | null, value?: null, locktime?: PromiseOrValue<BigNumberish> | null, deposit_type?: null, ts?: null): DepositEventFilter;
        Deposit(provider?: PromiseOrValue<string> | null, value?: null, locktime?: PromiseOrValue<BigNumberish> | null, deposit_type?: null, ts?: null): DepositEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Supply(uint256,uint256)"(prevSupply?: null, supply?: null): SupplyEventFilter;
        Supply(prevSupply?: null, supply?: null): SupplyEventFilter;
        "Withdraw(address,uint256,uint256)"(provider?: PromiseOrValue<string> | null, value?: null, ts?: null): WithdrawEventFilter;
        Withdraw(provider?: PromiseOrValue<string> | null, value?: null, ts?: null): WithdrawEventFilter;
    };
    estimateGas: {
        MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;
        MINTIME(overrides?: CallOverrides): Promise<BigNumber>;
        add_to_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        changeController(_newController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<BigNumber>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transfersEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        unlock(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unlocked(overrides?: CallOverrides): Promise<BigNumber>;
        user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        MAXTIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINTIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add_to_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAt(addr: PromiseOrValue<string>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAtT(addr: PromiseOrValue<string>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeController(_newController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        contracts_whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit_for(_addr: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increase_amount_and_time(_value: PromiseOrValue<BigNumberish>, _unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_from_whitelist(addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transfersEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlock(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unlocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_point_history(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_point_history__ts(_addr: PromiseOrValue<string>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

declare class Bridge__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_layerZeroEndpoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_router";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "msgType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly name: "SendMsg";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approveTokenSpender";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly name: "bridgeLookup";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }];
        readonly name: "forceResumeReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly name: "gasLookup";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "layerZeroEndpoint";
        readonly outputs: readonly [{
            readonly internalType: "contract ILayerZeroEndpoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "lzReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "_functionType";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "_toAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_transferAndCallPayload";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Router.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }];
        readonly name: "quoteLayerZeroFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "credits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idealBalance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.CreditObj";
            readonly name: "_c";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountSD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Router.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }];
        readonly name: "redeemLocal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "credits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idealBalance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.CreditObj";
            readonly name: "_c";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Router.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "redeemLocalCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "router";
        readonly outputs: readonly [{
            readonly internalType: "contract Router";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "credits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idealBalance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.CreditObj";
            readonly name: "_c";
            readonly type: "tuple";
        }];
        readonly name: "sendCredits";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_bridgeAddress";
            readonly type: "bytes";
        }];
        readonly name: "setBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_version";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_configType";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_config";
            readonly type: "bytes";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "_functionType";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasAmount";
            readonly type: "uint256";
        }];
        readonly name: "setGasAmount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "version";
            readonly type: "uint16";
        }];
        readonly name: "setReceiveVersion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "version";
            readonly type: "uint16";
        }];
        readonly name: "setSendVersion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "enable";
            readonly type: "bool";
        }];
        readonly name: "setUseLayerZeroToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "credits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idealBalance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.CreditObj";
            readonly name: "_c";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqReward";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lpFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "protocolFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lkbRemove";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.SwapObj";
            readonly name: "_s";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Router.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "swap";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "useLayerZeroToken";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Bridge;
}

declare class ERC20__factory {
    static readonly abi: readonly [{
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_spender";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly name: "_spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }];
    static createInterface(): ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20;
}

declare class Factory__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_router";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "allPools";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "allPoolsLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "_sharedDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "_localDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }];
        readonly name: "createPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "poolAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultFeeLibrary";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "getPool";
        readonly outputs: readonly [{
            readonly internalType: "contract Pool";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "router";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_defaultFeeLibrary";
            readonly type: "address";
        }];
        readonly name: "setDefaultFeeLibrary";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Factory;
}

declare class FeeDistributor__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IVotingEscrow";
            readonly name: "votingEscrow";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "OnlyVeHolderClaimingEnabled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lastCheckpointTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "TokenCheckpointed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "TokenClaimingEnabled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly name: "TokenWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "userTokenTimeCursor";
            readonly type: "uint256";
        }];
        readonly name: "TokensClaimed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "canTokenBeClaimed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "checkpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "checkpointToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }];
        readonly name: "checkpointTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "checkpointUser";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "claimToken";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }];
        readonly name: "claimTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "depositToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly name: "depositTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "enableOnlyVeHolderClaiming";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "enable";
            readonly type: "bool";
        }];
        readonly name: "enableTokenClaiming";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStartTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTimeCursor";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getTokenCachedBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getTokenLastBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getTokenStartTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getTokenTimeCursor";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "getTokensDistributedInWeek";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "getTotalSupplyAtTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "getUserBalanceAtTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserLastEpochCheckpointed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserStartTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserTimeCursor";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getUserTokenTimeCursor";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVotingEscrow";
        readonly outputs: readonly [{
            readonly internalType: "contract IVotingEscrow";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "onlyVeHolderClaimingEnabled";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly name: "withdrawToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FeeDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeeDistributor;
}

declare class LPStaking__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract StargateToken";
            readonly name: "_stargate";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_stargatePerBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_startBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bonusEndBlock";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "EmergencyWithdraw";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BONUS_MULTIPLIER";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_allocPoint";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_lpToken";
            readonly type: "address";
        }];
        readonly name: "add";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "bonusEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }];
        readonly name: "emergencyWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_from";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_to";
            readonly type: "uint256";
        }];
        readonly name: "getMultiplier";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "lpBalances";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "massUpdatePools";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_user";
            readonly type: "address";
        }];
        readonly name: "pendingStargate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "poolInfo";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "lpToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allocPoint";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastRewardBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "accStargatePerShare";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_allocPoint";
            readonly type: "uint256";
        }];
        readonly name: "set";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_stargatePerBlock";
            readonly type: "uint256";
        }];
        readonly name: "setStargatePerBlock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargate";
        readonly outputs: readonly [{
            readonly internalType: "contract StargateToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargatePerBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalAllocPoint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }];
        readonly name: "updatePool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "userInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "rewardDebt";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): LPStakingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LPStaking;
}

declare class LPStakingTime__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_eToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_eTokenPerSecond";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bonusEndTime";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "allocPoint";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "lpToken";
            readonly type: "address";
        }];
        readonly name: "Add";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "LPStakingTimeDeposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "LPStakingTimeEmergencyWithdraw";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "LPStakingTimeOwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "allocPoint";
            readonly type: "uint256";
        }];
        readonly name: "Set";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "eTokenPerSecond";
            readonly type: "uint256";
        }];
        readonly name: "TokensPerSec";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "LPStakingTimeWithdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BONUS_MULTIPLIER";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_allocPoint";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_lpToken";
            readonly type: "address";
        }];
        readonly name: "add";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "bonusEndTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "eToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "eTokenPerSecond";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }];
        readonly name: "emergencyWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_from";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_to";
            readonly type: "uint256";
        }];
        readonly name: "getMultiplier";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "lpBalances";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "massUpdatePools";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_user";
            readonly type: "address";
        }];
        readonly name: "pendingEmissionToken";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "poolInfo";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "lpToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allocPoint";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastRewardTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "accEmissionPerShare";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_allocPoint";
            readonly type: "uint256";
        }];
        readonly name: "set";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_eTokenPerSecond";
            readonly type: "uint256";
        }];
        readonly name: "setETokenPerSecond";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalAllocPoint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }];
        readonly name: "updatePool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "userInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "rewardDebt";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): LPStakingTimeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LPStakingTime;
}

declare class MerkleDropV2__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_merkleroot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "FeesClaimed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "claimed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "_proof";
            readonly type: "bytes32[]";
        }];
        readonly name: "redeemFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "root";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_merkleRoot";
            readonly type: "bytes32";
        }];
        readonly name: "updateMerkleRoot";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MerkleDropV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MerkleDropV2;
}

declare class Pool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_router";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_sharedDecimals";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_localDecimals";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_feeLibrary";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }];
        readonly name: "Burn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "dstChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "dstPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "ChainPathUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "chainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "srcPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "idealBalance";
            readonly type: "uint256";
        }];
        readonly name: "CreditChainPath";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "batched";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "swapDeltaBP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpDeltaBP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "defaultSwapMode";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "defaultLPMode";
            readonly type: "bool";
        }];
        readonly name: "DeltaParamUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "feeLibraryAddr";
            readonly type: "address";
        }];
        readonly name: "FeeLibraryUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "mintFeeBP";
            readonly type: "uint256";
        }];
        readonly name: "FeesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "InstantRedeemLocal";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "mintFeeAmountSD";
            readonly type: "uint256";
        }];
        readonly name: "Mint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "chainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "dstPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "RedeemLocal";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_amountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_amountToMintSD";
            readonly type: "uint256";
        }];
        readonly name: "RedeemLocalCallback";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "chainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "dstPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }];
        readonly name: "RedeemRemote";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "dstChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "dstPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "credits";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "idealBalance";
            readonly type: "uint256";
        }];
        readonly name: "SendCredits";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "swapStop";
            readonly type: "bool";
        }];
        readonly name: "StopSwapUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "chainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "dstPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "eqReward";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "eqFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "protocolFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpFee";
            readonly type: "uint256";
        }];
        readonly name: "Swap";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "protocolFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "dstFee";
            readonly type: "uint256";
        }];
        readonly name: "SwapRemote";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }];
        readonly name: "WithdrawMintFeeBalance";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }];
        readonly name: "WithdrawProtocolFeeBalance";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "srcChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "srcPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "swapAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "mintAmount";
            readonly type: "uint256";
        }];
        readonly name: "WithdrawRemote";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BP_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }];
        readonly name: "activateChainPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "batched";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_fullMode";
            readonly type: "bool";
        }];
        readonly name: "callDelta";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "chainPathIndexLookup";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "chainPaths";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "ready";
            readonly type: "bool";
        }, {
            readonly internalType: "uint16";
            readonly name: "dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lkb";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "credits";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "idealBalance";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "convertRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_weight";
            readonly type: "uint256";
        }];
        readonly name: "createChainPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "credits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idealBalance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.CreditObj";
            readonly name: "_c";
            readonly type: "tuple";
        }];
        readonly name: "creditChainPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultLPMode";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultSwapMode";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deltaCredit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "eqFeePool";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeLibrary";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }];
        readonly name: "getChainPath";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "ready";
                readonly type: "bool";
            }, {
                readonly internalType: "uint16";
                readonly name: "dstChainId";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstPoolId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "weight";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lkb";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "credits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idealBalance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.ChainPath";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getChainPathsLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLP";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "instantRedeemLocal";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "localDecimals";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lpDeltaBP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mintFeeBP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mintFeeBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "protocolFeeBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "redeemLocal";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountSD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountToMintSD";
            readonly type: "uint256";
        }];
        readonly name: "redeemLocalCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountSD";
            readonly type: "uint256";
        }];
        readonly name: "redeemLocalCheckOnRemote";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "swapAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mintAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLP";
            readonly type: "uint256";
        }];
        readonly name: "redeemRemote";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "router";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }];
        readonly name: "sendCredits";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "credits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idealBalance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.CreditObj";
            readonly name: "c";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_batched";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_swapDeltaBP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_lpDeltaBP";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_defaultSwapMode";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_defaultLPMode";
            readonly type: "bool";
        }];
        readonly name: "setDeltaParam";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_mintFeeBP";
            readonly type: "uint256";
        }];
        readonly name: "setFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_feeLibraryAddr";
            readonly type: "address";
        }];
        readonly name: "setFeeLibrary";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_swapStop";
            readonly type: "bool";
        }];
        readonly name: "setSwapStop";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "_weight";
            readonly type: "uint16";
        }];
        readonly name: "setWeightForChainPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sharedDecimals";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stopSwap";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "newLiquidity";
            readonly type: "bool";
        }];
        readonly name: "swap";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqReward";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lpFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "protocolFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lkbRemove";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.SwapObj";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "swapDeltaBP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqReward";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lpFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "protocolFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lkbRemove";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.SwapObj";
            readonly name: "_s";
            readonly type: "tuple";
        }];
        readonly name: "swapRemote";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "withdrawMintFeeBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "withdrawProtocolFeeBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Pool;
}

declare class Router__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "chainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "srcAddress";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "reason";
            readonly type: "bytes";
        }];
        readonly name: "CachedSwapSaved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "srcChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes";
            readonly name: "srcAddress";
            readonly type: "bytes";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "srcPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "dstPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "mintAmountSD";
            readonly type: "uint256";
        }];
        readonly name: "RedeemLocalCallback";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "bridgeFunctionType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "chainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "srcAddress";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly name: "Revert";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "srcChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "to";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "redeemAmountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "mintAmountSD";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes";
            readonly name: "srcAddress";
            readonly type: "bytes";
        }];
        readonly name: "RevertRedeemLocal";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }];
        readonly name: "activateChainPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "addLiquidity";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "bridge";
        readonly outputs: readonly [{
            readonly internalType: "contract Bridge";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "cachedSwapLookup";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_fullMode";
            readonly type: "bool";
        }];
        readonly name: "callDelta";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "clearCachedSwap";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_weight";
            readonly type: "uint256";
        }];
        readonly name: "createChainPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "_sharedDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "_localDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }];
        readonly name: "createPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "credits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idealBalance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.CreditObj";
            readonly name: "_c";
            readonly type: "tuple";
        }];
        readonly name: "creditChainPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly internalType: "contract Factory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcPoolId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLP";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "instantRedeemLocal";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountSD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mintFeeOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "protocolFeeOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "_functionType";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "_toAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_transferAndCallPayload";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }];
        readonly name: "quoteLayerZeroFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLP";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }];
        readonly name: "redeemLocal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountSD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_mintAmountSD";
            readonly type: "uint256";
        }];
        readonly name: "redeemLocalCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountSD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }];
        readonly name: "redeemLocalCheckOnRemote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }];
        readonly name: "redeemRemote";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "retryRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "revertLookup";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }];
        readonly name: "revertRedeemLocal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "sendCredits";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract Bridge";
            readonly name: "_bridge";
            readonly type: "address";
        }, {
            readonly internalType: "contract Factory";
            readonly name: "_factory";
            readonly type: "address";
        }];
        readonly name: "setBridgeAndFactory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_batched";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_swapDeltaBP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_lpDeltaBP";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_defaultSwapMode";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_defaultLPMode";
            readonly type: "bool";
        }];
        readonly name: "setDeltaParam";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_feeLibraryAddr";
            readonly type: "address";
        }];
        readonly name: "setFeeLibrary";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_mintFeeBP";
            readonly type: "uint256";
        }];
        readonly name: "setFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "setMintFeeOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "setProtocolFeeOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_swapStop";
            readonly type: "bool";
        }];
        readonly name: "setSwapStop";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "_weight";
            readonly type: "uint16";
        }];
        readonly name: "setWeightForChainPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmountLD";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "swap";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstGasForCall";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqReward";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lpFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "protocolFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lkbRemove";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.SwapObj";
            readonly name: "_s";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "swapRemote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "withdrawMintFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_poolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "withdrawProtocolFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): RouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Router$1;
}

declare class RouterETH__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_stargateEthVault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stargateRouter";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_poolId";
            readonly type: "uint16";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "addLiquidityETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolId";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateEthVault";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateRouter";
        readonly outputs: readonly [{
            readonly internalType: "contract IStargateRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_toAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmountLD";
            readonly type: "uint256";
        }];
        readonly name: "swapETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): RouterETHInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RouterETH;
}

declare class StargateFeeLibrary__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_factory";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpFeeBP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "protocolFeeBP";
            readonly type: "uint256";
        }];
        readonly name: "FeesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BP_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "eqFeeBP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "eqRewardBP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly internalType: "contract Factory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountSD";
            readonly type: "uint256";
        }];
        readonly name: "getFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "eqReward";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lpFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "protocolFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lkbRemove";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pool.SwapObj";
            readonly name: "s";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lpFeeBP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "protocolFeeBP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_lpFeeBP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_protocolFeeBP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_eqFeeBP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_eqRewardBP";
            readonly type: "uint256";
        }];
        readonly name: "setFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): StargateFeeLibraryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateFeeLibrary;
}

declare class StargateToken__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "_endpoint";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_mainChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "initialSupplyOnMainEndpoint";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPaused";
            readonly type: "bool";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "srcChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "qty";
            readonly type: "uint256";
        }];
        readonly name: "ReceiveFromChain";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "dstChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "to";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "qty";
            readonly type: "uint256";
        }];
        readonly name: "SendToChain";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "chainId";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly name: "dstContractLookup";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "endpoint";
        readonly outputs: readonly [{
            readonly internalType: "contract ILayerZeroEndpoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bool";
            readonly name: "_useZro";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "txParameters";
            readonly type: "bytes";
        }];
        readonly name: "estimateSendTokensFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "zroFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }];
        readonly name: "forceResumeReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isMain";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_fromAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "lzReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_pause";
            readonly type: "bool";
        }];
        readonly name: "pauseSendTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_qty";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "zroPaymentAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "adapterParam";
            readonly type: "bytes";
        }];
        readonly name: "sendTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_version";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_configType";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_config";
            readonly type: "bytes";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_destinationContractAddress";
            readonly type: "bytes";
        }];
        readonly name: "setDestination";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "version";
            readonly type: "uint16";
        }];
        readonly name: "setReceiveVersion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "version";
            readonly type: "uint16";
        }];
        readonly name: "setSendVersion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): StargateTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateToken;
}

declare class StargateWidget__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_stargateRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stargateRouterETH";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stargateFactory";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes2";
            readonly name: "partnerId";
            readonly type: "bytes2";
        }];
        readonly name: "PartnerSwap";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes2";
            readonly name: "partnerId";
            readonly type: "bytes2";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tenthBps";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "widgetFee";
            readonly type: "uint256";
        }];
        readonly name: "WidgetSwapped";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_UINT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "TENTH_BPS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes2";
            readonly name: "_partnerId";
            readonly type: "bytes2";
        }];
        readonly name: "partnerSwap";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract IStargateFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateRouter";
        readonly outputs: readonly [{
            readonly internalType: "contract IStargateRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateRouterETH";
        readonly outputs: readonly [{
            readonly internalType: "contract IStargateRouterETH";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes2";
            readonly name: "_partnerId";
            readonly type: "bytes2";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "tenthBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "feeCollector";
                readonly type: "address";
            }];
            readonly internalType: "struct IStargateWidget.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "swapETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "_srcPoolId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstPoolId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmountLD";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly name: "_lzTxParams";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_to";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes2";
            readonly name: "_partnerId";
            readonly type: "bytes2";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "tenthBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "feeCollector";
                readonly type: "address";
            }];
            readonly internalType: "struct IStargateWidget.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "swapTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "tokenApproved";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): StargateWidgetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateWidget;
}

declare class VotingEscrow__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token_addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "min_time";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "locktime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum VotingEscrow.DepositType";
            readonly name: "deposit_type";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "ts";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "prevSupply";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "supply";
            readonly type: "uint256";
        }];
        readonly name: "Supply";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "ts";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAXTIME";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MINTIME";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "add_to_whitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "balanceOfAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_t";
            readonly type: "uint256";
        }];
        readonly name: "balanceOfAtT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newController";
            readonly type: "address";
        }];
        readonly name: "changeController";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "checkpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "contracts_whitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "controller";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_unlock_time";
            readonly type: "uint256";
        }];
        readonly name: "create_lock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "deposit_for";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "epoch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "get_last_user_slope";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "increase_amount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_unlock_time";
            readonly type: "uint256";
        }];
        readonly name: "increase_amount_and_time";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_unlock_time";
            readonly type: "uint256";
        }];
        readonly name: "increase_unlock_time";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "locked";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "amount";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "end";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "locked__end";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "point_history";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "bias";
            readonly type: "int128";
        }, {
            readonly internalType: "int128";
            readonly name: "slope";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "ts";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blk";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "remove_from_whitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "slope_changes";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "supply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAtT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "transfersEnabled";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unlock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unlocked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "user_point_epoch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "user_point_history";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "bias";
            readonly type: "int128";
        }, {
            readonly internalType: "int128";
            readonly name: "slope";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "ts";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blk";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_idx";
            readonly type: "uint256";
        }];
        readonly name: "user_point_history__ts";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_unlock_time";
            readonly type: "uint256";
        }];
        readonly name: "withdraw_and_create_lock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): VotingEscrowInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VotingEscrow;
}

declare class WhitelistAuction__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_stargateTreasury";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Metadata";
            readonly name: "_stargate";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Metadata";
            readonly name: "_stableCoin";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_auctionStartTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_astgWhitelistMaxAlloc";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondingWhitelistMaxAlloc";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_remainingUSD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_remainingSTG";
            readonly type: "uint256";
        }];
        readonly name: "FinalWithdrawal";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_astgAmount";
            readonly type: "uint256";
        }];
        readonly name: "FirstAuctioned";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_astgAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_stgAmount";
            readonly type: "uint256";
        }];
        readonly name: "Redeemed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_astgAmount";
            readonly type: "uint256";
        }];
        readonly name: "SecondAuctioned";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "FIRST_AUCTION_DURATION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SECOND_AUCTION_DURATION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "STARGATE_FOR_AUCTION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "USD_AUCTION_CAP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VEST_DURATION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "addresses";
            readonly type: "address[]";
        }];
        readonly name: "addAuctionAddresses";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "addresses";
            readonly type: "address[]";
        }];
        readonly name: "addBondAddresses";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "astgDecimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "astgWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "astgWhitelistMaxAlloc";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "bondingWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "bondingWhitelistMaxAlloc";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "capStgAuctionAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "countOfMaxAuction";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_requestAmount";
            readonly type: "uint256";
        }];
        readonly name: "enterFirstAuction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_requestAmount";
            readonly type: "uint256";
        }];
        readonly name: "enterSecondAuction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "firstAuctionEndTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "firstAuctionStartTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getFirstAuctionCapAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ownerWithdrawn";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "redeem";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_redeemer";
            readonly type: "address";
        }];
        readonly name: "redeemable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "redeemedShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "remainingUsdQuota";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "secondAuctionAdditionalAllocCap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "secondAuctionAllocCap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "secondAuctionEndTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "secondAuctionInit";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stableCoin";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Metadata";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Metadata";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateTreasury";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "vestStartTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "withdrawRemainingStargate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): WhitelistAuctionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WhitelistAuction;
}

declare class SVotingEscrow__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token_addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "min_time";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "locktime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum VotingEscrow.DepositType";
            readonly name: "deposit_type";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "ts";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "prevSupply";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "supply";
            readonly type: "uint256";
        }];
        readonly name: "Supply";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "ts";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAXTIME";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MINTIME";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "add_to_whitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "balanceOfAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_t";
            readonly type: "uint256";
        }];
        readonly name: "balanceOfAtT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newController";
            readonly type: "address";
        }];
        readonly name: "changeController";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "checkpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "contracts_whitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "controller";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_unlock_time";
            readonly type: "uint256";
        }];
        readonly name: "create_lock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "deposit_for";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "epoch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "get_last_user_slope";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "increase_amount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_unlock_time";
            readonly type: "uint256";
        }];
        readonly name: "increase_amount_and_time";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_unlock_time";
            readonly type: "uint256";
        }];
        readonly name: "increase_unlock_time";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "locked";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "amount";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "end";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "locked__end";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "point_history";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "bias";
            readonly type: "int128";
        }, {
            readonly internalType: "int128";
            readonly name: "slope";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "ts";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blk";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "remove_from_whitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "slope_changes";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "supply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAtT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "transfersEnabled";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unlock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unlocked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "user_point_epoch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "user_point_history";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "bias";
            readonly type: "int128";
        }, {
            readonly internalType: "int128";
            readonly name: "slope";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "ts";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blk";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_idx";
            readonly type: "uint256";
        }];
        readonly name: "user_point_history__ts";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SVotingEscrowInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SVotingEscrow;
}

type index_Bridge__factory = Bridge__factory;
declare const index_Bridge__factory: typeof Bridge__factory;
type index_ERC20__factory = ERC20__factory;
declare const index_ERC20__factory: typeof ERC20__factory;
type index_Factory__factory = Factory__factory;
declare const index_Factory__factory: typeof Factory__factory;
type index_FeeDistributor__factory = FeeDistributor__factory;
declare const index_FeeDistributor__factory: typeof FeeDistributor__factory;
type index_LPStakingTime__factory = LPStakingTime__factory;
declare const index_LPStakingTime__factory: typeof LPStakingTime__factory;
type index_LPStaking__factory = LPStaking__factory;
declare const index_LPStaking__factory: typeof LPStaking__factory;
type index_MerkleDropV2__factory = MerkleDropV2__factory;
declare const index_MerkleDropV2__factory: typeof MerkleDropV2__factory;
type index_Pool__factory = Pool__factory;
declare const index_Pool__factory: typeof Pool__factory;
type index_RouterETH__factory = RouterETH__factory;
declare const index_RouterETH__factory: typeof RouterETH__factory;
type index_Router__factory = Router__factory;
declare const index_Router__factory: typeof Router__factory;
type index_SVotingEscrow__factory = SVotingEscrow__factory;
declare const index_SVotingEscrow__factory: typeof SVotingEscrow__factory;
type index_StargateFeeLibrary__factory = StargateFeeLibrary__factory;
declare const index_StargateFeeLibrary__factory: typeof StargateFeeLibrary__factory;
type index_StargateToken__factory = StargateToken__factory;
declare const index_StargateToken__factory: typeof StargateToken__factory;
type index_StargateWidget__factory = StargateWidget__factory;
declare const index_StargateWidget__factory: typeof StargateWidget__factory;
type index_VotingEscrow__factory = VotingEscrow__factory;
declare const index_VotingEscrow__factory: typeof VotingEscrow__factory;
type index_WhitelistAuction__factory = WhitelistAuction__factory;
declare const index_WhitelistAuction__factory: typeof WhitelistAuction__factory;
declare namespace index {
  export {
    index_Bridge__factory as Bridge__factory,
    index_ERC20__factory as ERC20__factory,
    index_Factory__factory as Factory__factory,
    index_FeeDistributor__factory as FeeDistributor__factory,
    index_LPStakingTime__factory as LPStakingTime__factory,
    index_LPStaking__factory as LPStaking__factory,
    index_MerkleDropV2__factory as MerkleDropV2__factory,
    index_Pool__factory as Pool__factory,
    index_RouterETH__factory as RouterETH__factory,
    index_Router__factory as Router__factory,
    index_SVotingEscrow__factory as SVotingEscrow__factory,
    index_StargateFeeLibrary__factory as StargateFeeLibrary__factory,
    index_StargateToken__factory as StargateToken__factory,
    index_StargateWidget__factory as StargateWidget__factory,
    index_VotingEscrow__factory as VotingEscrow__factory,
    index_WhitelistAuction__factory as WhitelistAuction__factory,
  };
}

export { Bridge, Bridge__factory, ERC20, ERC20__factory, Factory, Factory__factory, FeeDistributor, FeeDistributor__factory, LPStaking, LPStakingTime, LPStakingTime__factory, LPStaking__factory, MerkleDropV2, MerkleDropV2__factory, Pool, Pool__factory, Router$1 as Router, RouterETH, RouterETH__factory, Router__factory, SVotingEscrow, SVotingEscrow__factory, StargateFeeLibrary, StargateFeeLibrary__factory, StargateToken, StargateToken__factory, StargateWidget, StargateWidget__factory, VotingEscrow, VotingEscrow__factory, WhitelistAuction, WhitelistAuction__factory, index as factories };
