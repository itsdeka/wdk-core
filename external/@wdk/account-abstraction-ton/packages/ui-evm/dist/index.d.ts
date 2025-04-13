import { Transaction, ChainKey, AdapterParams, BalanceProvider, Currency, CurrencyAmount, Coin, Token } from '@layerzerolabs/ui-core';
import { Provider, JsonRpcBatchProvider, Network, BaseProvider, Web3Provider } from '@ethersproject/providers';
import { PopulatedTransaction } from '@ethersproject/contracts';
import { Signer } from 'ethers';
import { P as ProviderFactory } from './providerFactory-d4a2e709.js';
export { F as FailoverProvider, a as createFailoverProviderFactory, c as createMulticallProviderFactory, m as multicallDeployments } from './providerFactory-d4a2e709.js';
import { Log } from '@ethersproject/abstract-provider';
import { E as ERC20$1 } from './ERC20-4690a607.js';
import { PublicClient, Chain } from 'viem';
import '@0xsequence/multicall';
import 'ethers/lib/utils';
import '@ethersproject/abi';

declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
declare const ONE_ADDRESS = "0x0000000000000000000000000000000000000001";
declare const AddressOne = "0x0000000000000000000000000000000000000001";
declare const AddressZero = "0x0000000000000000000000000000000000000000";

declare enum ProviderRpcErrorCode {
    ACCOUNT_ACCESS_REJECTED = 4001,
    ACCOUNT_ACCESS_ALREADY_REQUESTED = -32002,
    UNAUTHORIZED = 4100,
    INVALID_PARAMS = -32602,
    UNSUPPORTED_METHOD = 4200,
    DISCONNECTED = 4900,
    CHAIN_DISCONNECTED = 4901,
    CHAIN_NOT_ADDED = 4902,
    DOES_NOT_EXIST = -32601
}

declare function randomizeOrder<T extends {
    weight?: number;
}>(items: T[]): T[];
declare function randomWeighted<T extends {
    weight?: number;
}>(objects: T[], defaultWeight?: number): T | undefined;

type PromiseOrValue<T> = T | Promise<T>;
type EstimateGas = Transaction<Signer>['estimateGas'];
type EstimateNative = Transaction<Signer>['estimateNative'];
type GetGasPrice = () => Promise<bigint>;
type CreateTransactionOptions = {
    chainKey?: ChainKey;
    sender?: string;
    provider?: Provider;
    getGasPrice?: GetGasPrice;
    estimateGas?: EstimateGas;
    estimateNative?: EstimateNative;
};
declare function createTransaction(populatedTransaction: PromiseOrValue<PopulatedTransaction>, options: CreateTransactionOptions): Transaction<Signer, PopulatedTransaction>;
declare function createEstimateGas(populatedTransaction: PromiseOrValue<PopulatedTransaction>, provider: Provider): EstimateGas;

declare function serializeAdapterParams(adapterParams: AdapterParams): string;

type OnErrorCallback = (error: unknown, provider: StaticJsonRpcBatchProvider) => void;
declare class StaticJsonRpcBatchProvider extends JsonRpcBatchProvider {
    private _onError?;
    detectNetwork(): Promise<Network>;
    send(method: string, params: Array<any>): Promise<any>;
    onError(handler: OnErrorCallback): void;
}

declare class BalanceProvider__evm implements BalanceProvider {
    private readonly providerFactory;
    constructor(providerFactory: ProviderFactory);
    supports(token: Currency): boolean;
    getBalance(token: Currency, address: string): Promise<CurrencyAmount<Currency>>;
    getNativeBalance(token: Coin, address: string): Promise<CurrencyAmount<Currency>>;
    getErc20Balance(token: Currency, address: string): Promise<CurrencyAmount<Currency>>;
}

type ERC20Event = {
    event: {
        name: string;
        namespace: 'ERC20';
    };
    args: {
        from: string;
        to: string;
        value: CurrencyAmount;
    };
    address: string;
    chainKey: string;
};
declare class ERC20 {
    readonly token: Token;
    readonly contract: ERC20$1;
    constructor(token: Token, contract: ERC20$1);
    balanceOf(account: string): Promise<CurrencyAmount<Token>>;
    allowance(owner: string, spender: string): Promise<CurrencyAmount<Token>>;
    totalSupply(): Promise<CurrencyAmount<Token>>;
    approve(amount: CurrencyAmount, spender: string): Promise<Transaction<Signer>>;
}
declare class ERC20__api {
    protected providerFactory: ProviderFactory;
    constructor(providerFactory: ProviderFactory);
    forToken(currency: Currency): ERC20;
    getToken: (arguments_0: {
        chainKey: string;
        address: string;
    }) => Promise<Token>;
    getTransferEvents(chainKey: string, txHash: string): Promise<ERC20Event[]>;
    tryParseTransferEvent(chainKey: string, log: Log): Promise<ERC20Event | undefined>;
}

type GasLimit = string | number | bigint;
type NativeDrop = string | number | bigint;
/**
 * Enumerates the supported option types.
 */
declare enum OptionType {
    /**
     * Allows the specification of the gas allowance for the remote executor transaction, measured in destination gas
     * units.
     *
     * Format:
     * bytes  [2     32      ]
     * fields [type  extraGas]
     */
    TYPE_1 = 1,
    /**
     * Combines the functionality of TYPE_1 along with destination gas drop to a remote address.
     *
     * Format:
     * bytes  [2     32        32            bytes[]         ]
     * fields [type  extraGas  dstNativeAmt  dstNativeAddress]
     */
    TYPE_2 = 2,
    /**
     * EndpointV2 specific options.
     */
    TYPE_3 = 3
}
/**
 * Builds OptionsType.TYPE_1.
 *
 * @param {GasLimit} _extraGas The gas allowance for the remote executor transaction, measured in destination gas units.
 */
declare function optionsType1(_extraGas: GasLimit): string;
/**
 * Builds OptionsType.TYPE_2.
 *
 * @param {GasLimit} _extraGas The gas allowance for the remote executor transaction, measured in destination gas units.
 * @param {NativeDrop} _dstNativeAmt The amount of native token to be sent to the destination chain.
 * @param {string} _dstNativeAddress The destination address of _dstNativeAmt.
 */
declare function optionsType2(_extraGas: GasLimit, _dstNativeAmt: NativeDrop, _dstNativeAddress: string): string;
/**
 * Enumerates the supported worker IDs.
 */
declare enum WorkerId {
    EXECUTOR = 1,
    VERIFIER = 2,
    TREASURY = 255
}
type WorkerOptions = {
    workerId: number;
    options: Option[];
};
type Option = {
    type: number;
    params: string;
};
type VerifierOption = Option & {
    index: number;
};
/**
 * Enumerates the supported executor option types.
 */
declare enum ExecutorOptionType {
    LZ_RECEIVE = 1,
    NATIVE_DROP = 2,
    COMPOSE = 3,
    ORDERED = 4
}
/**
 * Enumerates the supported verifier option types.
 */
declare enum VerifierOptionType {
    PRECRIME = 1
}
/**
 * Options builder, available only for EndpointV2.
 */
declare class Options {
    protected workerOptions: WorkerOptions[];
    protected constructor();
    /**
     * Create a new options instance.
     */
    static newOptions(): Options;
    /**
     * Create an options instance from a hex string.
     * @param {string} optionsHex The hex string to decode.
     */
    static fromOptions(optionsHex: string): Options;
    /**
     * Add ExecutorOptionType.LZ_RECEIVE option.
     * @param {GasLimit} gasLimit
     * @param {NativeDrop} nativeDrop
     */
    addExecutorLzReceiveOption(gasLimit: GasLimit, nativeDrop?: NativeDrop): Options;
    /**
     * Add ExecutorOptionType.NATIVE_DROP option.
     * @param {NativeDrop} nativeDrop
     * @param {string} receiver
     */
    addExecutorNativeDropOption(nativeDrop: NativeDrop, receiver: string): Options;
    /**
     * Add ExecutorOptionType.COMPOSE option.
     * @param {number} index
     * @param {GasLimit} gasLimit
     * @param {NativeDrop} nativeDrop
     */
    addExecutorComposeOption(index: number, gasLimit: GasLimit, nativeDrop?: NativeDrop): Options;
    /**
     * Add ExecutorOptionType.ORDERED option.
     */
    addExecutorOrderedExecutionOption(): Options;
    /**
     * Add VerifierOptionType.PRECRIME option.
     * @param {number} verifierIdx
     */
    addVerifierPrecrimeOption(verifierIdx: number): Options;
    /**
     * Serialize Options to hex string.
     */
    toHex(): string;
    /**
     * Serialize Options to Uint8Array.
     */
    toBytes(): Uint8Array;
    private addOption;
    /**
     * Decode ExecutorOptionType.LZ_RECEIVE option.  Returns undefined if the option is not present.
     */
    decodeExecutorLzReceiveOption(): {
        gas: bigint;
        value: bigint;
    } | undefined;
    /**
     * Decode ExecutorOptionType.NATIVE_DROP options.  Returns undefined if the options is not present.
     */
    decodeExecutorNativeDropOption(): {
        amount: bigint;
        receiver: string;
    }[];
    /**
     * Decode ExecutorOptionType.COMPOSE options.  Returns undefined if the options is not present.
     */
    decodeExecutorComposeOption(): {
        index: number;
        gas: bigint;
        value: bigint;
    }[];
    /**
     * Decode ExecutorOptionType.ORDERED options.  Returns undefined if the options is not present.
     */
    decodeExecutorOrderedExecutionOption(): boolean;
    private findOptions;
    /**
     * Find VerifierOption by verifierIdx and optionType.  Returns undefined if the option is not present.
     * @param {number} verifierIdx
     * @param {number} optionType
     */
    findVerifierOption(verifierIdx: number, optionType: number): VerifierOption | undefined;
}

declare function hexZeroPadTo32(addr: string): string;
declare function trim0x(str: string): string;
/**
 * Convert address to bytes32
 * @param address 0x prefixed address(20bytes or 32bytes) or solana address
 */
declare function addressToBytes32(address: string): Uint8Array;

type GetPublicClient = (chainKey: ChainKey) => PublicClient;
declare const createGetPublicClient: <config extends {
    chains: Record<ChainKey, Chain>;
}>({ config, createClient, }: {
    config: config;
    createClient?: (chain: Chain) => PublicClient;
}) => GetPublicClient;

type GetProvider<Provider extends BaseProvider = BaseProvider> = (chainKey: ChainKey) => Provider;
declare function createProvider(publicClient: PublicClient): Web3StaticProvider;
declare const createGetProvider: ({ getPublicClient }: {
    getPublicClient: GetPublicClient;
}) => (chainKey: ChainKey) => Web3Provider;
declare class Web3StaticProvider extends Web3Provider {
    detectNetwork(): Promise<Network>;
}

export { AddressOne, AddressZero, BalanceProvider__evm, ERC20Event, ERC20__api, ExecutorOptionType, GasLimit, GetProvider, GetPublicClient, NativeDrop, ONE_ADDRESS, Option, OptionType, Options, ProviderFactory, ProviderRpcErrorCode, StaticJsonRpcBatchProvider, VerifierOption, VerifierOptionType, WorkerId, WorkerOptions, ZERO_ADDRESS, addressToBytes32, createEstimateGas, createGetProvider, createGetPublicClient, createProvider, createTransaction, hexZeroPadTo32, optionsType1, optionsType2, randomWeighted, randomizeOrder, serializeAdapterParams, trim0x };
