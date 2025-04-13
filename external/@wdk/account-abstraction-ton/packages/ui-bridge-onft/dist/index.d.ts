import { ProviderFactory } from '@layerzerolabs/ui-evm';
import { ChainKey, FeeQuote, AdapterParams, Transaction } from '@layerzerolabs/ui-core';
import * as ethers from 'ethers';
import { Event, EventFilter, BaseContract, Signer, BigNumberish, CallOverrides, BigNumber, BytesLike, Overrides, ContractTransaction, PopulatedTransaction, utils, PayableOverrides } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import z from 'zod';

interface AbstractAsset {
    equals(other: unknown): boolean;
}

declare class Amount<TAsset extends AbstractAsset> {
    readonly asset: TAsset;
    readonly value: bigint;
    private constructor();
    static from<TAsset extends AbstractAsset>(asset: TAsset, value: bigint): Amount<TAsset>;
    equals(other: Amount<AbstractAsset>): other is Amount<TAsset>;
    toBigInt(): bigint;
    toNumber(): number;
}

type NftStandard = 'ERC1155' | 'ERC721';
declare const NftStandard: {
    readonly ERC1155: NftStandard;
    readonly ERC721: NftStandard;
};

declare class NftCollection {
    readonly address: string;
    readonly chainKey: string;
    readonly standard: NftStandard;
    readonly name: string;
    private constructor();
    static from({ address, chainKey, name, standard, }: {
        address: string;
        chainKey: string;
        standard: NftStandard;
        name: string;
    }): NftCollection;
    equals(other: NftCollection): boolean;
}

declare class NftAsset implements AbstractAsset {
    readonly collection: NftCollection;
    readonly tokenId: number;
    private constructor();
    static from({ collection, tokenId, }: {
        collection: NftCollection;
        tokenId: number;
    }): NftAsset;
    equals(other: unknown): other is NftAsset;
}

interface OnftBalanceProvider {
    supports(collection: NftCollection): boolean;
    getAssets(collection: NftCollection, owner: string): Promise<Amount<NftAsset>[]>;
}

type OnftProxyContract = {
    chainKey: ChainKey;
    address: string;
};
type OnftContract = {
    chainKey: ChainKey;
    address: string;
};
type OnftBridgeConfig = {
    standard: NftStandard;
    deployments: {
        [chainKey: string]: {
            eid: number;
            collection: NftCollection;
            onft?: OnftContract;
            onftProxy?: OnftProxyContract;
        };
    };
};

/**
 * RPC-based balance provider for ERC721 tokens.
 *
 * Using ERC721Enumerable extension
 */
declare class RPC__Enumerable__ERC721BalanceProvider implements OnftBalanceProvider {
    protected readonly config: OnftBridgeConfig;
    protected readonly providerFactory: ProviderFactory;
    constructor(config: OnftBridgeConfig, providerFactory: ProviderFactory);
    supports(collection: NftCollection): boolean;
    getAssets(collection: NftCollection, address: string): Promise<Amount<NftAsset>[]>;
}

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

interface ERC1155Interface extends utils.Interface {
    functions: {
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "mint(address,uint256,uint256,bytes)": FunctionFragment;
        "mintBatch(address,uint256[],uint256[],bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "balanceOfBatch" | "isApprovedForAll" | "mint" | "mintBatch" | "owner" | "renounceOwnership" | "safeBatchTransferFrom" | "safeTransferFrom" | "setApprovalForAll" | "supportsInterface" | "transferOwnership" | "uri"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "mintBatch", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "uri", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}
interface ApprovalForAllEventObject$3 {
    account: string;
    operator: string;
    approved: boolean;
}
type ApprovalForAllEvent$3 = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject$3>;
type ApprovalForAllEventFilter$3 = TypedEventFilter<ApprovalForAllEvent$3>;
interface OwnershipTransferredEventObject$5 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$5 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$5>;
type OwnershipTransferredEventFilter$5 = TypedEventFilter<OwnershipTransferredEvent$5>;
interface TransferBatchEventObject$1 {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
type TransferBatchEvent$1 = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], TransferBatchEventObject$1>;
type TransferBatchEventFilter$1 = TypedEventFilter<TransferBatchEvent$1>;
interface TransferSingleEventObject$1 {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
type TransferSingleEvent$1 = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TransferSingleEventObject$1>;
type TransferSingleEventFilter$1 = TypedEventFilter<TransferSingleEvent$1>;
interface URIEventObject$1 {
    value: string;
    id: BigNumber;
}
type URIEvent$1 = TypedEvent<[string, BigNumber], URIEventObject$1>;
type URIEventFilter$1 = TypedEventFilter<URIEvent$1>;
interface ERC1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC1155Interface;
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
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mint(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mint(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mint(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(account?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter$3;
        ApprovalForAll(account?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter$3;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$5;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$5;
        "TransferBatch(address,address,address,uint256[],uint256[])"(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, ids?: null, values?: null): TransferBatchEventFilter$1;
        TransferBatch(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, ids?: null, values?: null): TransferBatchEventFilter$1;
        "TransferSingle(address,address,address,uint256,uint256)"(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: null, value?: null): TransferSingleEventFilter$1;
        TransferSingle(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: null, value?: null): TransferSingleEventFilter$1;
        "URI(string,uint256)"(value?: null, id?: PromiseOrValue<BigNumberish> | null): URIEventFilter$1;
        URI(value?: null, id?: PromiseOrValue<BigNumberish> | null): URIEventFilter$1;
    };
    estimateGas: {
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

interface ERC721Interface extends utils.Interface {
    functions: {
        "MAX_BY_MINT()": FunctionFragment;
        "MAX_ELEMENTS()": FunctionFragment;
        "PRICE()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseTokenURI()": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "creatorAddress()": FunctionFragment;
        "devAddress()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "pause(bool)": FunctionFragment;
        "paused()": FunctionFragment;
        "price(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "reveal_timestamp()": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setBaseURI(string)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalMint()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "walletOfOwner(address)": FunctionFragment;
        "withdrawAll()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_BY_MINT" | "MAX_ELEMENTS" | "PRICE" | "approve" | "balanceOf" | "baseTokenURI" | "burn" | "creatorAddress" | "devAddress" | "getApproved" | "isApprovedForAll" | "mint" | "name" | "owner" | "ownerOf" | "pause" | "paused" | "price" | "renounceOwnership" | "reveal_timestamp" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setBaseURI" | "supportsInterface" | "symbol" | "tokenByIndex" | "tokenOfOwnerByIndex" | "tokenURI" | "totalMint" | "totalSupply" | "transferFrom" | "transferOwnership" | "walletOfOwner" | "withdrawAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_BY_MINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_ELEMENTS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "baseTokenURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "creatorAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "devAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "price", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "reveal_timestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setBaseURI", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "walletOfOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAX_BY_MINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_ELEMENTS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseTokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creatorAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reveal_timestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "walletOfOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "CreatePenguin(uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreatePenguin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
interface ApprovalEventObject$1 {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
type ApprovalEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$1>;
type ApprovalEventFilter$1 = TypedEventFilter<ApprovalEvent$1>;
interface ApprovalForAllEventObject$2 {
    owner: string;
    operator: string;
    approved: boolean;
}
type ApprovalForAllEvent$2 = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject$2>;
type ApprovalForAllEventFilter$2 = TypedEventFilter<ApprovalForAllEvent$2>;
interface CreatePenguinEventObject {
    id: BigNumber;
}
type CreatePenguinEvent = TypedEvent<[
    BigNumber
], CreatePenguinEventObject>;
type CreatePenguinEventFilter = TypedEventFilter<CreatePenguinEvent>;
interface OwnershipTransferredEventObject$4 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$4 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$4>;
type OwnershipTransferredEventFilter$4 = TypedEventFilter<OwnershipTransferredEvent$4>;
interface PausedEventObject {
    account: string;
}
type PausedEvent = TypedEvent<[string], PausedEventObject>;
type PausedEventFilter = TypedEventFilter<PausedEvent>;
interface TransferEventObject$1 {
    from: string;
    to: string;
    tokenId: BigNumber;
}
type TransferEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$1>;
type TransferEventFilter$1 = TypedEventFilter<TransferEvent$1>;
interface UnpausedEventObject {
    account: string;
}
type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
interface ERC721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC721Interface;
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
        MAX_BY_MINT(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_ELEMENTS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRICE(overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseTokenURI(overrides?: CallOverrides): Promise<[string]>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        creatorAddress(overrides?: CallOverrides): Promise<[string]>;
        devAddress(overrides?: CallOverrides): Promise<[string]>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mint(_to: PromiseOrValue<string>, _count: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        pause(val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        price(_count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        reveal_timestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBaseURI(baseURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        totalMint(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        walletOfOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        withdrawAll(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    MAX_BY_MINT(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_ELEMENTS(overrides?: CallOverrides): Promise<BigNumber>;
    PRICE(overrides?: CallOverrides): Promise<BigNumber>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    baseTokenURI(overrides?: CallOverrides): Promise<string>;
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    creatorAddress(overrides?: CallOverrides): Promise<string>;
    devAddress(overrides?: CallOverrides): Promise<string>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mint(_to: PromiseOrValue<string>, _count: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    pause(val: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    price(_count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    reveal_timestamp(overrides?: CallOverrides): Promise<BigNumber>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBaseURI(baseURI: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    totalMint(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    walletOfOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    withdrawAll(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        MAX_BY_MINT(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_ELEMENTS(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseTokenURI(overrides?: CallOverrides): Promise<string>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        creatorAddress(overrides?: CallOverrides): Promise<string>;
        devAddress(overrides?: CallOverrides): Promise<string>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mint(_to: PromiseOrValue<string>, _count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        pause(val: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        price(_count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        reveal_timestamp(overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setBaseURI(baseURI: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        totalMint(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        walletOfOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        withdrawAll(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter$1;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter$1;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter$2;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter$2;
        "CreatePenguin(uint256)"(id?: PromiseOrValue<BigNumberish> | null): CreatePenguinEventFilter;
        CreatePenguin(id?: PromiseOrValue<BigNumberish> | null): CreatePenguinEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$4;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$4;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter$1;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter$1;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        MAX_BY_MINT(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_ELEMENTS(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseTokenURI(overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        creatorAddress(overrides?: CallOverrides): Promise<BigNumber>;
        devAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: PromiseOrValue<string>, _count: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pause(val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        price(_count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        reveal_timestamp(overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBaseURI(baseURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalMint(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        walletOfOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawAll(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_BY_MINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_ELEMENTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseTokenURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        creatorAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_to: PromiseOrValue<string>, _count: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price(_count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        reveal_timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBaseURI(baseURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        walletOfOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawAll(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface ONFT1155Interface extends utils.Interface {
    functions: {
        "DEFAULT_PAYLOAD_SIZE_LIMIT()": FunctionFragment;
        "FUNCTION_TYPE_SEND()": FunctionFragment;
        "FUNCTION_TYPE_SEND_BATCH()": FunctionFragment;
        "NO_EXTRA_GAS()": FunctionFragment;
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "estimateSendBatchFee(uint16,bytes,uint256[],uint256[],bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,bytes,uint256,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "payloadSizeLimitLookup(uint16)": FunctionFragment;
        "precrime()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "sendBatchFrom(address,uint16,bytes,uint256[],uint256[],address,address,bytes)": FunctionFragment;
        "sendFrom(address,uint16,bytes,uint256,uint256,address,address,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPayloadSizeLimit(uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_PAYLOAD_SIZE_LIMIT" | "FUNCTION_TYPE_SEND" | "FUNCTION_TYPE_SEND_BATCH" | "NO_EXTRA_GAS" | "balanceOf" | "balanceOfBatch" | "estimateSendBatchFee" | "estimateSendFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isApprovedForAll" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "owner" | "payloadSizeLimitLookup" | "precrime" | "renounceOwnership" | "retryMessage" | "safeBatchTransferFrom" | "safeTransferFrom" | "sendBatchFrom" | "sendFrom" | "setApprovalForAll" | "setConfig" | "setMinDstGas" | "setPayloadSizeLimit" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "supportsInterface" | "transferOwnership" | "trustedRemoteLookup" | "uri" | "useCustomAdapterParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "FUNCTION_TYPE_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "FUNCTION_TYPE_SEND_BATCH", values?: undefined): string;
    encodeFunctionData(functionFragment: "NO_EXTRA_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "estimateSendBatchFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
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
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "lzEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "minDstGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nonblockingLzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "payloadSizeLimitLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendBatchFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
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
    encodeFunctionData(functionFragment: "setPayloadSizeLimit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setUseCustomAdapterParams", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "uri", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FUNCTION_TYPE_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FUNCTION_TYPE_SEND_BATCH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NO_EXTRA_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendBatchFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payloadSizeLimitLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendBatchFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPayloadSizeLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveBatchFromChain(uint16,bytes,address,uint256[],uint256[])": EventFragment;
        "ReceiveFromChain(uint16,bytes,address,uint256,uint256)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendBatchToChain(uint16,address,bytes,uint256[],uint256[])": EventFragment;
        "SendToChain(uint16,address,bytes,uint256,uint256)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveBatchFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendBatchToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}
interface ApprovalForAllEventObject$1 {
    account: string;
    operator: string;
    approved: boolean;
}
type ApprovalForAllEvent$1 = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject$1>;
type ApprovalForAllEventFilter$1 = TypedEventFilter<ApprovalForAllEvent$1>;
interface MessageFailedEventObject$3 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent$3 = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject$3>;
type MessageFailedEventFilter$3 = TypedEventFilter<MessageFailedEvent$3>;
interface OwnershipTransferredEventObject$3 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$3 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$3>;
type OwnershipTransferredEventFilter$3 = TypedEventFilter<OwnershipTransferredEvent$3>;
interface ReceiveBatchFromChainEventObject$1 {
    _srcChainId: number;
    _srcAddress: string;
    _toAddress: string;
    _tokenIds: BigNumber[];
    _amounts: BigNumber[];
}
type ReceiveBatchFromChainEvent$1 = TypedEvent<[
    number,
    string,
    string,
    BigNumber[],
    BigNumber[]
], ReceiveBatchFromChainEventObject$1>;
type ReceiveBatchFromChainEventFilter$1 = TypedEventFilter<ReceiveBatchFromChainEvent$1>;
interface ReceiveFromChainEventObject$3 {
    _srcChainId: number;
    _srcAddress: string;
    _toAddress: string;
    _tokenId: BigNumber;
    _amount: BigNumber;
}
type ReceiveFromChainEvent$3 = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber
], ReceiveFromChainEventObject$3>;
type ReceiveFromChainEventFilter$3 = TypedEventFilter<ReceiveFromChainEvent$3>;
interface RetryMessageSuccessEventObject$3 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent$3 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject$3>;
type RetryMessageSuccessEventFilter$3 = TypedEventFilter<RetryMessageSuccessEvent$3>;
interface SendBatchToChainEventObject$1 {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _tokenIds: BigNumber[];
    _amounts: BigNumber[];
}
type SendBatchToChainEvent$1 = TypedEvent<[
    number,
    string,
    string,
    BigNumber[],
    BigNumber[]
], SendBatchToChainEventObject$1>;
type SendBatchToChainEventFilter$1 = TypedEventFilter<SendBatchToChainEvent$1>;
interface SendToChainEventObject$3 {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _tokenId: BigNumber;
    _amount: BigNumber;
}
type SendToChainEvent$3 = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber
], SendToChainEventObject$3>;
type SendToChainEventFilter$3 = TypedEventFilter<SendToChainEvent$3>;
interface SetMinDstGasEventObject$3 {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent$3 = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject$3>;
type SetMinDstGasEventFilter$3 = TypedEventFilter<SetMinDstGasEvent$3>;
interface SetPrecrimeEventObject$3 {
    precrime: string;
}
type SetPrecrimeEvent$3 = TypedEvent<[string], SetPrecrimeEventObject$3>;
type SetPrecrimeEventFilter$3 = TypedEventFilter<SetPrecrimeEvent$3>;
interface SetTrustedRemoteEventObject$3 {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent$3 = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject$3>;
type SetTrustedRemoteEventFilter$3 = TypedEventFilter<SetTrustedRemoteEvent$3>;
interface SetTrustedRemoteAddressEventObject$3 {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent$3 = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject$3>;
type SetTrustedRemoteAddressEventFilter$3 = TypedEventFilter<SetTrustedRemoteAddressEvent$3>;
interface SetUseCustomAdapterParamsEventObject$3 {
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent$3 = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject$3>;
type SetUseCustomAdapterParamsEventFilter$3 = TypedEventFilter<SetUseCustomAdapterParamsEvent$3>;
interface TransferBatchEventObject {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
type TransferBatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], TransferBatchEventObject>;
type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;
interface TransferSingleEventObject {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
type TransferSingleEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TransferSingleEventObject>;
type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;
interface URIEventObject {
    value: string;
    id: BigNumber;
}
type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;
type URIEventFilter = TypedEventFilter<URIEvent>;
interface ONFT1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ONFT1155Interface;
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
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<[number]>;
        FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<[number]>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
    };
    DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<number>;
    FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<number>;
    NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    precrime(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
    setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<number>;
        FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<number>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(account?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter$1;
        ApprovalForAll(account?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter$1;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$3;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$3;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        "ReceiveBatchFromChain(uint16,bytes,address,uint256[],uint256[])"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenIds?: null, _amounts?: null): ReceiveBatchFromChainEventFilter$1;
        ReceiveBatchFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenIds?: null, _amounts?: null): ReceiveBatchFromChainEventFilter$1;
        "ReceiveFromChain(uint16,bytes,address,uint256,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenId?: null, _amount?: null): ReceiveFromChainEventFilter$3;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenId?: null, _amount?: null): ReceiveFromChainEventFilter$3;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$3;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$3;
        "SendBatchToChain(uint16,address,bytes,uint256[],uint256[])"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenIds?: null, _amounts?: null): SendBatchToChainEventFilter$1;
        SendBatchToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenIds?: null, _amounts?: null): SendBatchToChainEventFilter$1;
        "SendToChain(uint16,address,bytes,uint256,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenId?: null, _amount?: null): SendToChainEventFilter$3;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenId?: null, _amount?: null): SendToChainEventFilter$3;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$3;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$3;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter$3;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter$3;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$3;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$3;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$3;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$3;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$3;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$3;
        "TransferBatch(address,address,address,uint256[],uint256[])"(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, ids?: null, values?: null): TransferBatchEventFilter;
        TransferBatch(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, ids?: null, values?: null): TransferBatchEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: null, value?: null): TransferSingleEventFilter;
        TransferSingle(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: null, value?: null): TransferSingleEventFilter;
        "URI(string,uint256)"(value?: null, id?: PromiseOrValue<BigNumberish> | null): URIEventFilter;
        URI(value?: null, id?: PromiseOrValue<BigNumberish> | null): URIEventFilter;
    };
    estimateGas: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uri(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

interface ONFT721Interface extends utils.Interface {
    functions: {
        "FUNCTION_TYPE_SEND()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "clearCredits(bytes)": FunctionFragment;
        "dstChainIdToBatchLimit(uint16)": FunctionFragment;
        "dstChainIdToTransferGas(uint16)": FunctionFragment;
        "estimateSendBatchFee(uint16,bytes,uint256[],bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,bytes,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "minGasToTransferAndStore()": FunctionFragment;
        "name()": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "precrime()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "sendBatchFrom(address,uint16,bytes,uint256[],address,address,bytes)": FunctionFragment;
        "sendFrom(address,uint16,bytes,uint256,address,address,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setDstChainIdToBatchLimit(uint16,uint256)": FunctionFragment;
        "setDstChainIdToTransferGas(uint16,uint256)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setMinGasToTransferAndStore(uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "storedCredits(bytes32)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "FUNCTION_TYPE_SEND" | "approve" | "balanceOf" | "clearCredits" | "dstChainIdToBatchLimit" | "dstChainIdToTransferGas" | "estimateSendBatchFee" | "estimateSendFee" | "failedMessages" | "forceResumeReceive" | "getApproved" | "getConfig" | "getTrustedRemoteAddress" | "isApprovedForAll" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "minGasToTransferAndStore" | "name" | "nonblockingLzReceive" | "owner" | "ownerOf" | "precrime" | "renounceOwnership" | "retryMessage" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "sendBatchFrom" | "sendFrom" | "setApprovalForAll" | "setConfig" | "setDstChainIdToBatchLimit" | "setDstChainIdToTransferGas" | "setMinDstGas" | "setMinGasToTransferAndStore" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "storedCredits" | "supportsInterface" | "symbol" | "tokenURI" | "transferFrom" | "transferOwnership" | "trustedRemoteLookup"): FunctionFragment;
    encodeFunctionData(functionFragment: "FUNCTION_TYPE_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "clearCredits", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "dstChainIdToBatchLimit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "dstChainIdToTransferGas", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "estimateSendBatchFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "failedMessages", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "lzEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "minDstGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "minGasToTransferAndStore", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonblockingLzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendBatchFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setDstChainIdToBatchLimit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setDstChainIdToTransferGas", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinDstGas", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setMinGasToTransferAndStore", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "storedCredits", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "FUNCTION_TYPE_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dstChainIdToBatchLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dstChainIdToTransferGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendBatchFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minGasToTransferAndStore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendBatchFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDstChainIdToBatchLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDstChainIdToTransferGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinGasToTransferAndStore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storedCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "CreditCleared(bytes32)": EventFragment;
        "CreditStored(bytes32,bytes)": EventFragment;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveFromChain(uint16,bytes,address,uint256[])": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendToChain(uint16,address,bytes,uint256[])": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditCleared"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditStored"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
interface CreditClearedEventObject$1 {
    _hashedPayload: string;
}
type CreditClearedEvent$1 = TypedEvent<[string], CreditClearedEventObject$1>;
type CreditClearedEventFilter$1 = TypedEventFilter<CreditClearedEvent$1>;
interface CreditStoredEventObject$1 {
    _hashedPayload: string;
    _payload: string;
}
type CreditStoredEvent$1 = TypedEvent<[
    string,
    string
], CreditStoredEventObject$1>;
type CreditStoredEventFilter$1 = TypedEventFilter<CreditStoredEvent$1>;
interface MessageFailedEventObject$2 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent$2 = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject$2>;
type MessageFailedEventFilter$2 = TypedEventFilter<MessageFailedEvent$2>;
interface OwnershipTransferredEventObject$2 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$2 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$2>;
type OwnershipTransferredEventFilter$2 = TypedEventFilter<OwnershipTransferredEvent$2>;
interface ReceiveFromChainEventObject$2 {
    _srcChainId: number;
    _srcAddress: string;
    _toAddress: string;
    _tokenIds: BigNumber[];
}
type ReceiveFromChainEvent$2 = TypedEvent<[
    number,
    string,
    string,
    BigNumber[]
], ReceiveFromChainEventObject$2>;
type ReceiveFromChainEventFilter$2 = TypedEventFilter<ReceiveFromChainEvent$2>;
interface RetryMessageSuccessEventObject$2 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent$2 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject$2>;
type RetryMessageSuccessEventFilter$2 = TypedEventFilter<RetryMessageSuccessEvent$2>;
interface SendToChainEventObject$2 {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _tokenIds: BigNumber[];
}
type SendToChainEvent$2 = TypedEvent<[
    number,
    string,
    string,
    BigNumber[]
], SendToChainEventObject$2>;
type SendToChainEventFilter$2 = TypedEventFilter<SendToChainEvent$2>;
interface SetMinDstGasEventObject$2 {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent$2 = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject$2>;
type SetMinDstGasEventFilter$2 = TypedEventFilter<SetMinDstGasEvent$2>;
interface SetPrecrimeEventObject$2 {
    precrime: string;
}
type SetPrecrimeEvent$2 = TypedEvent<[string], SetPrecrimeEventObject$2>;
type SetPrecrimeEventFilter$2 = TypedEventFilter<SetPrecrimeEvent$2>;
interface SetTrustedRemoteEventObject$2 {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent$2 = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject$2>;
type SetTrustedRemoteEventFilter$2 = TypedEventFilter<SetTrustedRemoteEvent$2>;
interface SetTrustedRemoteAddressEventObject$2 {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent$2 = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject$2>;
type SetTrustedRemoteAddressEventFilter$2 = TypedEventFilter<SetTrustedRemoteAddressEvent$2>;
interface SetUseCustomAdapterParamsEventObject$2 {
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent$2 = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject$2>;
type SetUseCustomAdapterParamsEventFilter$2 = TypedEventFilter<SetUseCustomAdapterParamsEvent$2>;
interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
type TransferEventFilter = TypedEventFilter<TransferEvent>;
interface ONFT721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ONFT721Interface;
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
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<[number]>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        minGasToTransferAndStore(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            number,
            string,
            BigNumber,
            boolean
        ] & {
            srcChainId: number;
            toAddress: string;
            index: BigNumber;
            creditsRemain: boolean;
        }>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<number>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    minGasToTransferAndStore(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    precrime(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
    storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        number,
        string,
        BigNumber,
        boolean
    ] & {
        srcChainId: number;
        toAddress: string;
        index: BigNumber;
        creditsRemain: boolean;
    }>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<number>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        minGasToTransferAndStore(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        precrime(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            number,
            string,
            BigNumber,
            boolean
        ] & {
            srcChainId: number;
            toAddress: string;
            index: BigNumber;
            creditsRemain: boolean;
        }>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "CreditCleared(bytes32)"(_hashedPayload?: null): CreditClearedEventFilter$1;
        CreditCleared(_hashedPayload?: null): CreditClearedEventFilter$1;
        "CreditStored(bytes32,bytes)"(_hashedPayload?: null, _payload?: null): CreditStoredEventFilter$1;
        CreditStored(_hashedPayload?: null, _payload?: null): CreditStoredEventFilter$1;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$2;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$2;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        "ReceiveFromChain(uint16,bytes,address,uint256[])"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenIds?: null): ReceiveFromChainEventFilter$2;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenIds?: null): ReceiveFromChainEventFilter$2;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$2;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$2;
        "SendToChain(uint16,address,bytes,uint256[])"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenIds?: null): SendToChainEventFilter$2;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenIds?: null): SendToChainEventFilter$2;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$2;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$2;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter$2;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter$2;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$2;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$2;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$2;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$2;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$2;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$2;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
    };
    estimateGas: {
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        minGasToTransferAndStore(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minGasToTransferAndStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

interface ProxyONFT1155Interface extends utils.Interface {
    functions: {
        "DEFAULT_PAYLOAD_SIZE_LIMIT()": FunctionFragment;
        "FUNCTION_TYPE_SEND()": FunctionFragment;
        "FUNCTION_TYPE_SEND_BATCH()": FunctionFragment;
        "NO_EXTRA_GAS()": FunctionFragment;
        "estimateSendBatchFee(uint16,bytes,uint256[],uint256[],bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,bytes,uint256,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "payloadSizeLimitLookup(uint16)": FunctionFragment;
        "precrime()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendBatchFrom(address,uint16,bytes,uint256[],uint256[],address,address,bytes)": FunctionFragment;
        "sendFrom(address,uint16,bytes,uint256,uint256,address,address,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPayloadSizeLimit(uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_PAYLOAD_SIZE_LIMIT" | "FUNCTION_TYPE_SEND" | "FUNCTION_TYPE_SEND_BATCH" | "NO_EXTRA_GAS" | "estimateSendBatchFee" | "estimateSendFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "onERC1155BatchReceived" | "onERC1155Received" | "owner" | "payloadSizeLimitLookup" | "precrime" | "renounceOwnership" | "retryMessage" | "sendBatchFrom" | "sendFrom" | "setConfig" | "setMinDstGas" | "setPayloadSizeLimit" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "supportsInterface" | "token" | "transferOwnership" | "trustedRemoteLookup" | "useCustomAdapterParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "FUNCTION_TYPE_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "FUNCTION_TYPE_SEND_BATCH", values?: undefined): string;
    encodeFunctionData(functionFragment: "NO_EXTRA_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateSendBatchFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
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
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "lzEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "minDstGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nonblockingLzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "payloadSizeLimitLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendBatchFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
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
    encodeFunctionData(functionFragment: "setPayloadSizeLimit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setUseCustomAdapterParams", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FUNCTION_TYPE_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FUNCTION_TYPE_SEND_BATCH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NO_EXTRA_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendBatchFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payloadSizeLimitLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendBatchFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPayloadSizeLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    events: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveBatchFromChain(uint16,bytes,address,uint256[],uint256[])": EventFragment;
        "ReceiveFromChain(uint16,bytes,address,uint256,uint256)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendBatchToChain(uint16,address,bytes,uint256[],uint256[])": EventFragment;
        "SendToChain(uint16,address,bytes,uint256,uint256)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveBatchFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendBatchToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
}
interface MessageFailedEventObject$1 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent$1 = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject$1>;
type MessageFailedEventFilter$1 = TypedEventFilter<MessageFailedEvent$1>;
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
interface ReceiveBatchFromChainEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _toAddress: string;
    _tokenIds: BigNumber[];
    _amounts: BigNumber[];
}
type ReceiveBatchFromChainEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber[],
    BigNumber[]
], ReceiveBatchFromChainEventObject>;
type ReceiveBatchFromChainEventFilter = TypedEventFilter<ReceiveBatchFromChainEvent>;
interface ReceiveFromChainEventObject$1 {
    _srcChainId: number;
    _srcAddress: string;
    _toAddress: string;
    _tokenId: BigNumber;
    _amount: BigNumber;
}
type ReceiveFromChainEvent$1 = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber
], ReceiveFromChainEventObject$1>;
type ReceiveFromChainEventFilter$1 = TypedEventFilter<ReceiveFromChainEvent$1>;
interface RetryMessageSuccessEventObject$1 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent$1 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject$1>;
type RetryMessageSuccessEventFilter$1 = TypedEventFilter<RetryMessageSuccessEvent$1>;
interface SendBatchToChainEventObject {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _tokenIds: BigNumber[];
    _amounts: BigNumber[];
}
type SendBatchToChainEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber[],
    BigNumber[]
], SendBatchToChainEventObject>;
type SendBatchToChainEventFilter = TypedEventFilter<SendBatchToChainEvent>;
interface SendToChainEventObject$1 {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _tokenId: BigNumber;
    _amount: BigNumber;
}
type SendToChainEvent$1 = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber
], SendToChainEventObject$1>;
type SendToChainEventFilter$1 = TypedEventFilter<SendToChainEvent$1>;
interface SetMinDstGasEventObject$1 {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent$1 = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject$1>;
type SetMinDstGasEventFilter$1 = TypedEventFilter<SetMinDstGasEvent$1>;
interface SetPrecrimeEventObject$1 {
    precrime: string;
}
type SetPrecrimeEvent$1 = TypedEvent<[string], SetPrecrimeEventObject$1>;
type SetPrecrimeEventFilter$1 = TypedEventFilter<SetPrecrimeEvent$1>;
interface SetTrustedRemoteEventObject$1 {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent$1 = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject$1>;
type SetTrustedRemoteEventFilter$1 = TypedEventFilter<SetTrustedRemoteEvent$1>;
interface SetTrustedRemoteAddressEventObject$1 {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent$1 = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject$1>;
type SetTrustedRemoteAddressEventFilter$1 = TypedEventFilter<SetTrustedRemoteAddressEvent$1>;
interface SetUseCustomAdapterParamsEventObject$1 {
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent$1 = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject$1>;
type SetUseCustomAdapterParamsEventFilter$1 = TypedEventFilter<SetUseCustomAdapterParamsEvent$1>;
interface ProxyONFT1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyONFT1155Interface;
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
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<[number]>;
        FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<[number]>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155BatchReceived(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
    };
    DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<number>;
    FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<number>;
    NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155BatchReceived(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    precrime(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
    setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<number>;
        FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<number>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        onERC1155BatchReceived(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$1;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$1;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "ReceiveBatchFromChain(uint16,bytes,address,uint256[],uint256[])"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenIds?: null, _amounts?: null): ReceiveBatchFromChainEventFilter;
        ReceiveBatchFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenIds?: null, _amounts?: null): ReceiveBatchFromChainEventFilter;
        "ReceiveFromChain(uint16,bytes,address,uint256,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenId?: null, _amount?: null): ReceiveFromChainEventFilter$1;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenId?: null, _amount?: null): ReceiveFromChainEventFilter$1;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$1;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$1;
        "SendBatchToChain(uint16,address,bytes,uint256[],uint256[])"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenIds?: null, _amounts?: null): SendBatchToChainEventFilter;
        SendBatchToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenIds?: null, _amounts?: null): SendBatchToChainEventFilter;
        "SendToChain(uint16,address,bytes,uint256,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenId?: null, _amount?: null): SendToChainEventFilter$1;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenId?: null, _amount?: null): SendToChainEventFilter$1;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$1;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$1;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter$1;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter$1;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$1;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$1;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$1;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$1;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$1;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$1;
    };
    estimateGas: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155BatchReceived(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FUNCTION_TYPE_SEND_BATCH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

interface ProxyONFT721Interface extends utils.Interface {
    functions: {
        "FUNCTION_TYPE_SEND()": FunctionFragment;
        "clearCredits(bytes)": FunctionFragment;
        "dstChainIdToBatchLimit(uint16)": FunctionFragment;
        "dstChainIdToTransferGas(uint16)": FunctionFragment;
        "estimateSendBatchFee(uint16,bytes,uint256[],bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,bytes,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "minGasToTransferAndStore()": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "precrime()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendBatchFrom(address,uint16,bytes,uint256[],address,address,bytes)": FunctionFragment;
        "sendFrom(address,uint16,bytes,uint256,address,address,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setDstChainIdToBatchLimit(uint16,uint256)": FunctionFragment;
        "setDstChainIdToTransferGas(uint16,uint256)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setMinGasToTransferAndStore(uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "storedCredits(bytes32)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "FUNCTION_TYPE_SEND" | "clearCredits" | "dstChainIdToBatchLimit" | "dstChainIdToTransferGas" | "estimateSendBatchFee" | "estimateSendFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "minGasToTransferAndStore" | "nonblockingLzReceive" | "onERC721Received" | "owner" | "precrime" | "renounceOwnership" | "retryMessage" | "sendBatchFrom" | "sendFrom" | "setConfig" | "setDstChainIdToBatchLimit" | "setDstChainIdToTransferGas" | "setMinDstGas" | "setMinGasToTransferAndStore" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "storedCredits" | "supportsInterface" | "token" | "transferOwnership" | "trustedRemoteLookup"): FunctionFragment;
    encodeFunctionData(functionFragment: "FUNCTION_TYPE_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "clearCredits", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "dstChainIdToBatchLimit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "dstChainIdToTransferGas", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "estimateSendBatchFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
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
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "lzEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "minDstGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "minGasToTransferAndStore", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonblockingLzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendBatchFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setDstChainIdToBatchLimit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setDstChainIdToTransferGas", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinDstGas", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setMinGasToTransferAndStore", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "storedCredits", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "FUNCTION_TYPE_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dstChainIdToBatchLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dstChainIdToTransferGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendBatchFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minGasToTransferAndStore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendBatchFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDstChainIdToBatchLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDstChainIdToTransferGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinGasToTransferAndStore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storedCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    events: {
        "CreditCleared(bytes32)": EventFragment;
        "CreditStored(bytes32,bytes)": EventFragment;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveFromChain(uint16,bytes,address,uint256[])": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendToChain(uint16,address,bytes,uint256[])": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CreditCleared"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditStored"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
}
interface CreditClearedEventObject {
    _hashedPayload: string;
}
type CreditClearedEvent = TypedEvent<[string], CreditClearedEventObject>;
type CreditClearedEventFilter = TypedEventFilter<CreditClearedEvent>;
interface CreditStoredEventObject {
    _hashedPayload: string;
    _payload: string;
}
type CreditStoredEvent = TypedEvent<[
    string,
    string
], CreditStoredEventObject>;
type CreditStoredEventFilter = TypedEventFilter<CreditStoredEvent>;
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
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface ReceiveFromChainEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _toAddress: string;
    _tokenIds: BigNumber[];
}
type ReceiveFromChainEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber[]
], ReceiveFromChainEventObject>;
type ReceiveFromChainEventFilter = TypedEventFilter<ReceiveFromChainEvent>;
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
interface SendToChainEventObject {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _tokenIds: BigNumber[];
}
type SendToChainEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber[]
], SendToChainEventObject>;
type SendToChainEventFilter = TypedEventFilter<SendToChainEvent>;
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
interface SetUseCustomAdapterParamsEventObject {
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject>;
type SetUseCustomAdapterParamsEventFilter = TypedEventFilter<SetUseCustomAdapterParamsEvent>;
interface ProxyONFT721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyONFT721Interface;
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
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<[number]>;
        clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        minGasToTransferAndStore(overrides?: CallOverrides): Promise<[BigNumber]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            number,
            string,
            BigNumber,
            boolean
        ] & {
            srcChainId: number;
            toAddress: string;
            index: BigNumber;
            creditsRemain: boolean;
        }>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<number>;
    clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    minGasToTransferAndStore(overrides?: CallOverrides): Promise<BigNumber>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    precrime(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
    storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        number,
        string,
        BigNumber,
        boolean
    ] & {
        srcChainId: number;
        toAddress: string;
        index: BigNumber;
        creditsRemain: boolean;
    }>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<number>;
        clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        minGasToTransferAndStore(overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        onERC721Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        precrime(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            number,
            string,
            BigNumber,
            boolean
        ] & {
            srcChainId: number;
            toAddress: string;
            index: BigNumber;
            creditsRemain: boolean;
        }>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CreditCleared(bytes32)"(_hashedPayload?: null): CreditClearedEventFilter;
        CreditCleared(_hashedPayload?: null): CreditClearedEventFilter;
        "CreditStored(bytes32,bytes)"(_hashedPayload?: null, _payload?: null): CreditStoredEventFilter;
        CreditStored(_hashedPayload?: null, _payload?: null): CreditStoredEventFilter;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ReceiveFromChain(uint16,bytes,address,uint256[])"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenIds?: null): ReceiveFromChainEventFilter;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: PromiseOrValue<BytesLike> | null, _toAddress?: PromiseOrValue<string> | null, _tokenIds?: null): ReceiveFromChainEventFilter;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        "SendToChain(uint16,address,bytes,uint256[])"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenIds?: null): SendToChainEventFilter;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _tokenIds?: null): SendToChainEventFilter;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
    };
    estimateGas: {
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        minGasToTransferAndStore(overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC721Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        FUNCTION_TYPE_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearCredits(_payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dstChainIdToBatchLimit(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dstChainIdToTransferGas(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendBatchFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minGasToTransferAndStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(_operator: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendBatchFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenIds: PromiseOrValue<BigNumberish>[], _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _tokenId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDstChainIdToBatchLimit(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToBatchLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDstChainIdToTransferGas(_dstChainId: PromiseOrValue<BigNumberish>, _dstChainIdToTransferGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinGasToTransferAndStore(_minGasToTransferAndStore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        storedCredits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

/**
 * RPC-based balance provider for ERC1155 tokens.
 *
 * Since ERC1155 does not have a standardized enumerability,
 * the downside of this provider is that the token IDs need to be provided to it statically.
 * On the upside, the balances returned will be fresh as opposed to any third-party indexing service.
 */
declare class RPC__StaticId__ERC1155BalanceProvider implements OnftBalanceProvider {
    protected readonly ids: (bigint | string | number)[];
    protected readonly providerFactory: ProviderFactory;
    constructor(ids: (bigint | string | number)[], providerFactory: ProviderFactory);
    supports(collection: NftCollection): boolean;
    protected getContract(collection: NftCollection): ERC1155;
    getAssets(collection: NftCollection, owner: string): Promise<Amount<NftAsset>[]>;
}

/**
 * Example third-party OnftContract balance provider based on SimpleHash API
 *
 * You will need to sign up for their API and pass your API Key to this provider
 * in order to use it. Also remember that it's only available on a subset of chains.
 *
 * The downside of this provider is that their service lags behind the chain
 * so there might be a delay if a new token is minted. On the upside the API is quite fast
 */
declare class Simplehash__BalanceProvider implements OnftBalanceProvider {
    private readonly apiKey;
    protected readonly chainNameMap: Map<string, string>;
    constructor(apiKey: string, chainNameMap?: Map<string, string>);
    supports(collection: NftCollection): boolean;
    getAssets(collection: NftCollection, owner: string): Promise<Amount<NftAsset>[]>;
}

type NftMetadata = {
    image?: string;
    name?: string;
    description?: string;
};
interface NftMetadataProvider {
    supports(collection: NftCollection): boolean;
    getMetadata(asset: NftAsset): Promise<NftMetadata>;
}

/**
 * RPC-based metadata provider for ERC1155 tokens - it calls the RPC endpoint,
 * gets the uri and returns the metadata it contains.
 *
 * The downside of this provider is the chain call which can be expensive or slow,
 * on the upside the metadata is always the fresh version if the OnftContract is dynamic
 */
declare class RPC__ERC1155MetadataProvider implements NftMetadataProvider {
    protected readonly providerFactory: ProviderFactory;
    constructor(providerFactory: ProviderFactory);
    supports(collection: NftCollection): boolean;
    protected getContract(collection: NftCollection): ERC1155;
    getMetadata(asset: NftAsset): Promise<NftMetadata>;
}

/**
 * RPC-based metadata provider for ERC721 tokens - it calls the RPC endpoint,
 * gets the tokenURI and returns the metadata it contains.
 *
 * The downside of this provider is the chain call which can be expensive or slow,
 * on the upside the metadata is always the fresh version if the OnftContract is dynamic
 */
declare class RPC__ERC721MetadataProvider implements NftMetadataProvider {
    protected readonly providerFactory: ProviderFactory;
    constructor(providerFactory: ProviderFactory);
    supports(collection: NftCollection): boolean;
    protected getContract(collection: NftCollection): ERC721;
    getMetadata(asset: NftAsset): Promise<NftMetadata>;
}

/**
 * Example third-party NFT metadata provider based on SimpleHash API
 *
 * You will need to sign up for their API and pass your API Key to this provider
 * in order to use it. Also remember that it's only available on a subset of chains.
 *
 * The downside of this provider is that their service lags behind the chain
 * so there might be a delay if a new token is minted. On the upside the API is quite fast
 * and can also provide you with thumbnail URLs for NFTs with large images
 */
declare class SimpleHash__MetadataProvider implements NftMetadataProvider {
    private readonly apiKey;
    protected readonly chainKeyMap: Map<string, string>;
    constructor(apiKey: string, chainKeyMap?: Map<string, string>);
    supports(collection: NftCollection): boolean;
    getMetadata(asset: NftAsset): Promise<NftMetadata>;
}

type OnftTransferInput = {
    assets: Amount<NftAsset>[];
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
    srcAddress: string;
    dstAddress: string;
    fee: FeeQuote;
    adapterParams: AdapterParams;
};
type OnftInflightTransaction = {
    assets: Amount<NftAsset>[];
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
    srcTxHash: string;
    srcTxTimestamp: number;
};
interface OnftBridgeApi<Signer> {
    supports(collection: NftCollection): boolean;
    getMessageFee(assets: NftAsset[], dstChainId: ChainKey, adapterParams: AdapterParams): Promise<FeeQuote>;
    getAssets(collection: NftCollection, account: string): Promise<Amount<NftAsset>[]>;
    getExtraGas(tokens: NftAsset[], dstChainId: ChainKey): Promise<number>;
    transfer(input: OnftTransferInput): Promise<Transaction<Signer>>;
    isApproved(assets: NftAsset[], owner: string): Promise<boolean>;
    approve(assets: NftAsset[]): Promise<Transaction<Signer>>;
    getInflight(account: string): Promise<OnftInflightTransaction[]>;
}

declare class OnftBridgeApi__ERC1155__evm implements OnftBridgeApi<Signer> {
    readonly config: OnftBridgeConfig;
    private readonly providerFactory;
    readonly balanceProvider: OnftBalanceProvider;
    constructor(config: OnftBridgeConfig, providerFactory: ProviderFactory, balanceProvider: OnftBalanceProvider);
    protected getDeployment(chainKey: ChainKey): {
        eid: number;
        collection: NftCollection;
        onft?: {
            chainKey: ChainKey;
            address: string;
        };
        onftProxy?: {
            chainKey: ChainKey;
            address: string;
        };
    };
    protected chainKeyToEndpointId(chainKey: string): number;
    getInflight(account: string): Promise<OnftInflightTransaction[]>;
    getMessageFee(assets: NftAsset[], dstChainKey: ChainKey, adapterParams: AdapterParams): Promise<FeeQuote>;
    protected minDstGasLookup: (srcChainKey: ChainKey, dstChainKey: ChainKey) => Promise<ethers.BigNumber>;
    getExtraGas: (assets: NftAsset[], dstChainKey: ChainKey) => Promise<number>;
    protected tryGetProxy(chainKey: ChainKey): {
        chainKey: ChainKey;
        address: string;
    } | undefined;
    isApproved(assets: NftAsset[], owner: string): Promise<boolean>;
    approve(assets: NftAsset[]): Promise<Transaction<Signer>>;
    supports(collection: NftCollection): boolean;
    protected getSingleMessageFee(asset: NftAsset, dstChainKey: ChainKey, adapterParams: AdapterParams): Promise<FeeQuote>;
    protected getBatchMessageFee(assets: NftAsset[], dstChainKey: ChainKey, adapterParams: AdapterParams): Promise<FeeQuote>;
    getAssets(collection: NftCollection, address: string): Promise<Amount<NftAsset>[]>;
    protected getONFTContract(chainKey: ChainKey): ONFT1155 | ProxyONFT1155;
    protected getERC1155Contract(chainKey: ChainKey): ERC1155;
    protected transferBatch(input: OnftTransferInput): Promise<Transaction<Signer>>;
    transfer(input: OnftTransferInput): Promise<Transaction<Signer>>;
    protected transferSingle(input: OnftTransferInput): Promise<Transaction<Signer>>;
}

declare class OnftBridgeApi__ERC721__evm implements OnftBridgeApi<Signer> {
    readonly config: OnftBridgeConfig;
    private readonly providerFactory;
    readonly balanceProvider: OnftBalanceProvider;
    constructor(config: OnftBridgeConfig, providerFactory: ProviderFactory, balanceProvider?: OnftBalanceProvider);
    getInflight(account: string): Promise<OnftInflightTransaction[]>;
    getMessageFee(assets: NftAsset[], dstChainKey: ChainKey, adapterParams: AdapterParams): Promise<FeeQuote>;
    protected getDeployment(chainKey: ChainKey): {
        eid: number;
        collection: NftCollection;
        onft?: {
            chainKey: ChainKey;
            address: string;
        };
        onftProxy?: {
            chainKey: ChainKey;
            address: string;
        };
    };
    protected chainKeyToEndpointId(chainKey: string): number;
    protected minDstGasLookup: (srcChainKey: ChainKey, dstChainKey: ChainKey) => Promise<ethers.BigNumber>;
    protected dstChainIdToTransferGas: (srcChainKey: ChainKey, dstChainKey: ChainKey) => Promise<ethers.BigNumber>;
    protected tryGetOnftProxy(chainKey: ChainKey): {
        chainKey: ChainKey;
        address: string;
    } | undefined;
    getExtraGas: (assets: NftAsset[], dstChainKey: ChainKey) => Promise<number>;
    isApproved(assets: NftAsset[], _owner: string): Promise<boolean>;
    approve(assets: NftAsset[]): Promise<Transaction<Signer>>;
    supports(collection: NftCollection): boolean;
    protected getSingleMessageFee(asset: NftAsset, dstChainKey: ChainKey, adapterParams: AdapterParams): Promise<FeeQuote>;
    protected getBatchMessageFee(assets: NftAsset[], dstChainKey: ChainKey, adapterParams: AdapterParams): Promise<FeeQuote>;
    getAssets(collection: NftCollection, address: string): Promise<Amount<NftAsset>[]>;
    protected getONFTContract(chainKey: ChainKey): ONFT721 | ProxyONFT721;
    protected getERC721Contract(chainKey: ChainKey): ERC721;
    protected transferBatch(input: OnftTransferInput): Promise<Transaction<Signer>>;
    transfer(input: OnftTransferInput): Promise<Transaction<Signer>>;
    protected transferSingle(input: OnftTransferInput): Promise<Transaction<Signer>>;
}

declare const nftStandardSchema: z.ZodUnion<[z.ZodLiteral<NftStandard>, z.ZodLiteral<NftStandard>]>;
declare const nftCollectionSchema: z.ZodEffects<z.ZodObject<{
    address: z.ZodString;
    chainKey: z.ZodString;
    standard: z.ZodUnion<[z.ZodLiteral<NftStandard>, z.ZodLiteral<NftStandard>]>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
    chainKey: string;
    name: string;
    standard: NftStandard;
}, {
    address: string;
    chainKey: string;
    name: string;
    standard: NftStandard;
}>, NftCollection, {
    address: string;
    chainKey: string;
    name: string;
    standard: NftStandard;
}>;
declare const nftAssetSchema: z.ZodEffects<z.ZodObject<{
    tokenId: z.ZodNumber;
    collection: z.ZodEffects<z.ZodObject<{
        address: z.ZodString;
        chainKey: z.ZodString;
        standard: z.ZodUnion<[z.ZodLiteral<NftStandard>, z.ZodLiteral<NftStandard>]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
        chainKey: string;
        name: string;
        standard: NftStandard;
    }, {
        address: string;
        chainKey: string;
        name: string;
        standard: NftStandard;
    }>, NftCollection, {
        address: string;
        chainKey: string;
        name: string;
        standard: NftStandard;
    }>;
}, "strip", z.ZodTypeAny, {
    collection: NftCollection;
    tokenId: number;
}, {
    collection: {
        address: string;
        chainKey: string;
        name: string;
        standard: NftStandard;
    };
    tokenId: number;
}>, NftAsset, {
    collection: {
        address: string;
        chainKey: string;
        name: string;
        standard: NftStandard;
    };
    tokenId: number;
}>;
declare const onftBridgeConfigSchema: z.ZodEffects<z.ZodObject<{
    standard: z.ZodUnion<[z.ZodLiteral<NftStandard>, z.ZodLiteral<NftStandard>]>;
    name: z.ZodString;
    deployments: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        eid: z.ZodNumber;
        collection: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
        onftProxy: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        collection: {
            address: string;
        };
        onftProxy: {
            address: string;
        };
        eid: number;
    }, {
        collection: {
            address: string;
        };
        onftProxy: {
            address: string;
        };
        eid: number;
    }>, z.ZodObject<{
        eid: z.ZodNumber;
        onft: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        eid: number;
        onft: {
            address: string;
        };
    }, {
        eid: number;
        onft: {
            address: string;
        };
    }>]>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    standard: NftStandard;
    deployments: Record<string, {
        collection: {
            address: string;
        };
        onftProxy: {
            address: string;
        };
        eid: number;
    } | {
        eid: number;
        onft: {
            address: string;
        };
    }>;
}, {
    name: string;
    standard: NftStandard;
    deployments: Record<string, {
        collection: {
            address: string;
        };
        onftProxy: {
            address: string;
        };
        eid: number;
    } | {
        eid: number;
        onft: {
            address: string;
        };
    }>;
}>, OnftBridgeConfig, {
    name: string;
    standard: NftStandard;
    deployments: Record<string, {
        collection: {
            address: string;
        };
        onftProxy: {
            address: string;
        };
        eid: number;
    } | {
        eid: number;
        onft: {
            address: string;
        };
    }>;
}>;
declare function createOnftBridgeConfig(config: SerializedOnftBridgeConfig): OnftBridgeConfig;
type SerializedOnftBridgeConfig = z.input<typeof onftBridgeConfigSchema>;
declare function serializeOnftBridgeConfig(input: OnftBridgeConfig): SerializedOnftBridgeConfig;

export { Amount, NftAsset, NftCollection, NftMetadata, NftMetadataProvider, NftStandard, OnftBalanceProvider, OnftBridgeApi, OnftBridgeApi__ERC1155__evm, OnftBridgeApi__ERC721__evm, OnftBridgeConfig, OnftInflightTransaction, OnftTransferInput, RPC__ERC1155MetadataProvider, RPC__ERC721MetadataProvider, RPC__Enumerable__ERC721BalanceProvider, RPC__StaticId__ERC1155BalanceProvider, SerializedOnftBridgeConfig, SimpleHash__MetadataProvider, Simplehash__BalanceProvider, createOnftBridgeConfig, nftAssetSchema, nftCollectionSchema, nftStandardSchema, onftBridgeConfigSchema, serializeOnftBridgeConfig };
