import z from 'zod';
import { isAddress } from 'viem';
export { default as assert } from 'tiny-invariant';

/**
 * Represents an Coin with some metadata.
 */
declare class Coin extends BaseCurrency {
    protected constructor(chainKey: string, decimals: number, symbol: string, name?: string);
    /**
     * Returns true if the two Coins are equivalent, i.e. have the same chainKey
     * @param other other currency to compare
     */
    equals(other: Currency): boolean;
    static from(input: {
        chainKey: string;
        decimals: number;
        symbol: string;
        name?: string;
    }): Coin;
}

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
declare class Token extends BaseCurrency {
    /**
     * The contract address on the chain on which this token lives
     */
    readonly address: string;
    protected constructor(chainKey: string, address: string, decimals: number, symbol: string, name?: string);
    static from(input: {
        chainKey: string;
        address: string;
        decimals: number;
        symbol: string;
        name?: string;
    }): Token;
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainKey and address.
     * @param other other token to compare
     */
    equals(other: Currency): boolean;
}

type Currency = Token | Coin;

/**
 * A currency is any fungible financial instrument, including all ERC20 tokens
 */
declare abstract class BaseCurrency {
    /**
     * The layerzero chain key on which this currency resides
     */
    readonly chainKey: string;
    /**
     * The decimals used in representing currency amounts
     */
    readonly decimals: number;
    /**
     * The symbol of the currency, i.e. a short textual non-unique identifier
     */
    readonly symbol: string;
    /**
     * The name of the currency, i.e. a descriptive textual non-unique identifier
     */
    readonly name?: string;
    /**
     * The id of the token used for comparisons
     */
    readonly id: string;
    /**
     * Constructs an instance of the base class `BaseCurrency`.
     * @param chainKey the chain key on which this currency resides
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(id: string, chainKey: string, decimals: number, symbol: string, name?: string);
    /**
     * Returns whether this currency is functionally equivalent to the other currency
     * @param other the other currency
     */
    abstract equals(other: Currency): boolean;
}

declare function isToken(value: unknown): value is Token;
declare function assertToken(value: Currency, errorMessage?: string): asserts value is Token;
declare function isCoin(value: Currency): value is Coin;
declare function isCurrency(value: unknown): value is Currency;

declare function validateAndParseAddress(address: string, chainKey: string): string;

type BigintIsh = string | number | bigint;
declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
declare const MaxUint256: bigint;

declare class Fraction {
    readonly numerator: bigint;
    readonly denominator: bigint;
    constructor(numerator: BigintIsh, denominator?: BigintIsh);
    private static tryParseFraction;
    get quotient(): bigint;
    get remainder(): Fraction;
    invert(): Fraction;
    add(other: Fraction | BigintIsh): Fraction;
    subtract(other: Fraction | BigintIsh): Fraction;
    lessThan(other: Fraction | BigintIsh): boolean;
    lessThanOrEqualTo(other: Fraction | BigintIsh): boolean;
    equalTo(other: Fraction | BigintIsh): boolean;
    greaterThan(other: Fraction | BigintIsh): boolean;
    greaterThanOrEqualTo(other: Fraction | BigintIsh): boolean;
    multiply(other: Fraction | BigintIsh): Fraction;
    divide(other: Fraction | BigintIsh): Fraction;
    toSignificant(significantDigits: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces: number, format?: object, rounding?: Rounding): string;
    /**
     * Helper method for converting any super class back to a fraction
     */
    get asFraction(): Fraction;
}

interface Format {
    decimalSeparator?: string;
    secondaryGroupSize?: number;
    fractionGroupSeparator?: string;
    groupSize?: number;
    groupSeparator?: string;
}
declare class CurrencyAmount<T extends Currency = Currency> extends Fraction {
    readonly token: T;
    readonly decimalScale: bigint;
    /**
     * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
     * @param currency the currency in the amount
     * @param rawAmount the raw token or ether amount
     */
    static fromRawAmount<T extends Currency>(currency: T, rawAmount: BigintIsh): CurrencyAmount<T>;
    /**
     * Construct a currency amount with a denominator that is not equal to 1
     * @param currency the currency
     * @param numerator the numerator of the fractional token amount
     * @param denominator the denominator of the fractional token amount
     */
    static fromFractionalAmount<T extends Currency>(currency: T, numerator: BigintIsh, denominator: BigintIsh): CurrencyAmount<T>;
    protected constructor(currency: T, numerator: BigintIsh, denominator?: BigintIsh);
    add(other: CurrencyAmount<T>): CurrencyAmount<T>;
    subtract(other: CurrencyAmount<T>): CurrencyAmount<T>;
    multiply(other: Fraction | BigintIsh): CurrencyAmount<T>;
    divide(other: Fraction | BigintIsh): CurrencyAmount<T>;
    toSignificant(significantDigits?: number, format?: Format, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: Format, rounding?: Rounding): string;
    toExact(format?: Format): string;
    get asFraction(): Fraction;
    static fromBigInt<T extends Currency>(currency: T, bigIntAmount: bigint): CurrencyAmount<T>;
    toBigInt(): bigint;
}

declare class Percent extends Fraction {
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */
    readonly isPercent: true;
    add(other: Fraction | BigintIsh): Percent;
    subtract(other: Fraction | BigintIsh): Percent;
    multiply(other: Fraction | BigintIsh): Percent;
    divide(other: Fraction | BigintIsh): Percent;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
}

declare class Price<TBase extends Currency = Currency, TQuote extends Currency = Currency> extends Fraction {
    readonly baseCurrency: TBase;
    readonly quoteCurrency: TQuote;
    readonly scalar: Fraction;
    /**
     * Construct a price, either with the base and quote currency amount, or the
     * @param args
     */
    constructor(...args: [TBase, TQuote, BigintIsh, BigintIsh] | [{
        baseAmount: CurrencyAmount<TBase>;
        quoteAmount: CurrencyAmount<TQuote>;
    }]);
    /**
     * Flip the price, switching the base and quote currency
     */
    invert(): Price<TQuote, TBase>;
    /**
     * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
     * @param other the other price
     */
    multiply<TOtherQuote extends Currency>(other: Price<TQuote, TOtherQuote>): Price<TBase, TOtherQuote>;
    /**
     * Return the amount of quote currency corresponding to a given amount of the base currency
     * @param currencyAmount the amount of base currency to quote against the price
     */
    quote(currencyAmount: CurrencyAmount<TBase>): CurrencyAmount<TQuote>;
    /**
     * Get the value scaled by decimals for formatting
     * @private
     */
    private get adjustedForDecimals();
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
}

declare const FiatCurrency: {
    readonly USD: "USD";
    readonly EUR: "EUR";
};
type FiatCurrency = keyof typeof FiatCurrency;
type FiatAmount = {
    currency: FiatCurrency;
    value: number;
};

declare function castCurrencyAmountUnsafe(input: CurrencyAmount, dstToken: Currency): CurrencyAmount;

declare function parseCurrencyAmount<T extends Currency>(currency: T, value: string): CurrencyAmount<T>;
declare function tryParseCurrencyAmount<T extends Currency>(currency?: T, value?: string): CurrencyAmount<T> | undefined;

declare function parseFraction(value: string, decimals: number): Fraction;
declare function tryParseFraction(value?: string, decimals?: number): Fraction | undefined;

declare function parsePercent(value: string, decimals: number): Percent;
declare function tryParsePercent(value?: string, decimals?: number): Percent | undefined;

declare function parseAmount<TToken extends Currency = Currency>(amount: string, token: TToken): CurrencyAmount<TToken>;
declare function tryParseAmount<TToken extends Currency = Currency>(amount?: string, token?: TToken): CurrencyAmount<TToken> | undefined;

declare function parseUnits(value: string, decimals: number): bigint;

declare function sumUnsafe(amounts?: (CurrencyAmount | undefined)[], asCurrency?: Currency): CurrencyAmount<Coin | Token> | undefined;

declare function sumFiat(amounts?: (FiatAmount | undefined)[]): FiatAmount | undefined;

declare function removeDust(amount: CurrencyAmount, sharedDecimals: number): CurrencyAmount<Currency>;

declare const serializedCoinSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
    chainKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    decimals: number;
    chainKey: string;
    name?: string | undefined;
}, {
    symbol: string;
    decimals: number;
    chainKey: string;
    name?: string | undefined;
}>;
declare const serializedTokenSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
    chainKey: z.ZodString;
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    decimals: number;
    chainKey: string;
    address: string;
    name?: string | undefined;
}, {
    symbol: string;
    decimals: number;
    chainKey: string;
    address: string;
    name?: string | undefined;
}>;
declare const serializedCurrencySchema: z.ZodUnion<[z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
    chainKey: z.ZodString;
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    decimals: number;
    chainKey: string;
    address: string;
    name?: string | undefined;
}, {
    symbol: string;
    decimals: number;
    chainKey: string;
    address: string;
    name?: string | undefined;
}>, z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
    chainKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    decimals: number;
    chainKey: string;
    name?: string | undefined;
}, {
    symbol: string;
    decimals: number;
    chainKey: string;
    name?: string | undefined;
}>]>;
declare const serializedAmountSchema: z.ZodObject<{
    amount: z.ZodString;
    token: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
        chainKey: z.ZodString;
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    }, {
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
        chainKey: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        decimals: number;
        chainKey: string;
        name?: string | undefined;
    }, {
        symbol: string;
        decimals: number;
        chainKey: string;
        name?: string | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    token: {
        symbol: string;
        decimals: number;
        chainKey: string;
        name?: string | undefined;
    } | {
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    };
}, {
    amount: string;
    token: {
        symbol: string;
        decimals: number;
        chainKey: string;
        name?: string | undefined;
    } | {
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    };
}>;
type SerializedCoin = z.infer<typeof serializedCoinSchema>;
type SerializedToken = z.infer<typeof serializedTokenSchema>;
type SerializedAmount = z.infer<typeof serializedAmountSchema>;
type SerializedCurrency = z.infer<typeof serializedCurrencySchema>;
declare const coinSchema: z.ZodSchema<Coin, z.ZodTypeDef, SerializedCoin>;
declare const tokenSchema: z.ZodSchema<Token, z.ZodTypeDef, SerializedToken>;
declare const currencySchema: z.ZodSchema<Currency, z.ZodTypeDef, SerializedCurrency>;
declare const amountSchema: z.ZodSchema<CurrencyAmount, z.ZodTypeDef, SerializedAmount>;
declare function serializeToken(token: Token): SerializedToken;
declare function serializeCoin(coin: Coin): SerializedCoin;
declare function serializeCurrency(currency: Currency): SerializedCurrency;
declare function serializeAmount(amount: CurrencyAmount): SerializedAmount;

type ChainKey = string;

declare const ChainType: {
    readonly EVM: "evm";
    readonly APTOS: "aptos";
    readonly SOLANA: "solana";
    readonly COSMOS: "cosmos";
    readonly TON: "ton";
    readonly TRON: "tron";
};
type ChainType = (typeof ChainType)[keyof typeof ChainType] | (string & {});

interface Network {
    name: string;
    shortName: string;
    chainKey: ChainKey;
    chainType: ChainType;
    nativeChainId: number | string;
    nativeCurrency: Currency;
}
interface NetworkInfo {
    name: string;
    shortName: string;
    chainKey: ChainKey;
    chainType: ChainType;
    nativeChainId: number | string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
        address?: string;
    };
}
interface BlockExplorer {
    name?: string;
    url: string;
    standard?: string;
    isPublic?: boolean;
    isActive?: boolean;
}

declare const serializedNetworkSchema: z.ZodObject<{
    name: z.ZodString;
    shortName: z.ZodString;
    chainKey: z.ZodString;
    chainType: z.ZodNativeEnum<{
        readonly EVM: "evm";
        readonly APTOS: "aptos";
        readonly SOLANA: "solana";
        readonly COSMOS: "cosmos";
        readonly TON: "ton";
        readonly TRON: "tron";
    }>;
    nativeChainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    nativeCurrency: z.ZodObject<{
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    }, {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    chainKey: string;
    shortName: string;
    chainType: "evm" | "aptos" | "solana" | "cosmos" | "ton" | "tron";
    nativeChainId: string | number;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    };
}, {
    name: string;
    chainKey: string;
    shortName: string;
    chainType: "evm" | "aptos" | "solana" | "cosmos" | "ton" | "tron";
    nativeChainId: string | number;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    };
}>;
declare const networkSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    shortName: z.ZodString;
    chainKey: z.ZodString;
    chainType: z.ZodNativeEnum<{
        readonly EVM: "evm";
        readonly APTOS: "aptos";
        readonly SOLANA: "solana";
        readonly COSMOS: "cosmos";
        readonly TON: "ton";
        readonly TRON: "tron";
    }>;
    nativeChainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    nativeCurrency: z.ZodObject<{
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    }, {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    chainKey: string;
    shortName: string;
    chainType: "evm" | "aptos" | "solana" | "cosmos" | "ton" | "tron";
    nativeChainId: string | number;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    };
}, {
    name: string;
    chainKey: string;
    shortName: string;
    chainType: "evm" | "aptos" | "solana" | "cosmos" | "ton" | "tron";
    nativeChainId: string | number;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    };
}>, Network, {
    name: string;
    chainKey: string;
    shortName: string;
    chainType: "evm" | "aptos" | "solana" | "cosmos" | "ton" | "tron";
    nativeChainId: string | number;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
        address?: string | undefined;
    };
}>;
type SerializedNetwork = z.infer<typeof serializedNetworkSchema>;

declare function toULNv2(eid: number): number;

declare const isEvmAddress: typeof isAddress;

declare function isEvmChainKey(chainKey: ChainKey): boolean;

declare function isAptosAddress(address: string): boolean;

declare function isAptosChainKey(chainKey: ChainKey): boolean;

declare function isTonChainKey(chainKey: ChainKey): boolean;

declare function isSolanaAddress(address: string): boolean;

declare function isSolanaChainKey(chainKey: ChainKey): boolean;

declare function isTronAddress(address: string): boolean;

declare function isTronChainKey(chainKey: ChainKey): boolean;

declare const isTonAddress: (address: string) => boolean;

type Rpc = {
    url: string;
    timeout?: number;
    weight?: number;
};
type RpcList = Rpc[];
type RpcMap = {
    [chainKey in ChainKey]?: RpcList;
};

declare const Stage: {
    readonly MAINNET: "mainnet";
    readonly TESTNET: "testnet";
    readonly SANDBOX: "sandbox";
};
type Stage = (typeof Stage)[keyof typeof Stage] | (string & {});

type Contract = {
    address: string;
};
interface DeploymentV1 {
    eid: number;
    chainKey: ChainKey;
    stage: Stage;
    version: 1;
    endpointV1?: Contract;
    treasury?: Contract;
    relayerV1?: Contract;
    relayerV2?: Contract;
    priceFeed?: Contract;
    ultraLightNodeV2?: Contract;
}
interface DeploymentV2 {
    eid: number;
    chainKey: ChainKey;
    stage: Stage;
    version: 2;
    endpointV2?: Contract;
    treasury?: Contract;
    executor?: Contract;
    executorFeeLib?: Contract;
    lzExecutor?: Contract;
    priceFeed?: Contract;
    receiveUln301?: Contract;
    receiveUln302?: Contract;
    sendUln301?: Contract;
    sendUln302?: Contract;
}
type Deployment = DeploymentV1 | DeploymentV2;

declare class CoreModule {
    protected _networks: Network[];
    protected _networkByChainKey: Map<string, Network>;
    protected _deployments: Deployment[];
    protected _deploymentByEndpointId: Map<number, Deployment>;
    protected _rpcMap: RpcMap;
    protected _log: Console;
    protected _blockExplorers: Record<ChainKey, BlockExplorer[]>;
    constructor();
    get networks(): Network[];
    get rpcMap(): RpcMap;
    get blockExplorers(): Record<ChainKey, BlockExplorer[]>;
    setNetworks<TNetworkInfo extends NetworkInfo>(networks: TNetworkInfo[]): void;
    setDeployments(deployments: Deployment[]): void;
    setBlockExplorers(blockExplorers: Record<ChainKey, BlockExplorer[]>): void;
    setRpcMap(rpcMap: RpcMap): void;
    tryGetNetwork: (chainKey: ChainKey | undefined) => Network | undefined;
    getNetwork: (chainKey: ChainKey) => Network;
    tryGetNetworkByNativeChainId: (chainType?: ChainType, nativeChainId?: number | string) => Network | undefined;
    getRpcs: (chainKey: ChainKey) => RpcList;
    getBlockExplorers: (chainKey: ChainKey) => BlockExplorer[];
    getNetworkByNativeChainId: (chainType: ChainType, nativeChainId: number | string) => Network;
    tryGetNativeCurrency: (chainKey: ChainKey | undefined) => Currency | undefined;
    getNativeCurrency: (chainKey: ChainKey) => Currency;
    getScanLink(input: {
        txHash: string;
        chainKey: string;
    } | {
        address: string;
        chainKey: string;
    }): string;
    isNativeCurrency: (currency: Currency) => boolean;
    endpointIdToStage: (endpointId: number) => Stage;
    tryGetDeployment: (endpointId: number) => Deployment | undefined;
    getDeployment: (endpointId: number) => Deployment;
    getNetworks(): Network[];
    getDeployments(): Deployment[];
    endpointIdToChainKey: (endpointId: number) => string;
    chainKeyToEndpointId: (chainKey: string, endpointVersion: 1 | 2, stage: Stage) => number;
    isChainType: (chainKey: ChainKey, chainType: ChainType) => boolean;
}

interface WaitForPromise extends Promise<void> {
    cancel(): void;
}
declare function waitFor(condition: () => boolean | undefined | null | Promise<boolean>, { timeout, interval }?: {
    timeout?: number | undefined;
    interval?: number | undefined;
}): WaitForPromise;

declare const tryParseNumber: (value: string) => string | undefined;
declare const parseNumber: (value: string) => string;
declare function escapeRegExp(string: string): string;

declare function interpolateString(str: string, variables: Record<string, string | number>): string;

declare const coreModule: CoreModule;

declare const tryGetNetwork: typeof coreModule.tryGetNetwork;
declare const getNetwork: typeof coreModule.getNetwork;
declare const getBlockExplorers: typeof coreModule.getBlockExplorers;
declare const getRpcs: typeof coreModule.getRpcs;
declare const tryGetNativeCurrency: typeof coreModule.tryGetNativeCurrency;
declare const getNativeCurrency: typeof coreModule.getNativeCurrency;
declare const tryGetNetworkByNativeChainId: typeof coreModule.tryGetNetworkByNativeChainId;
declare const getNetworkByNativeChainId: typeof coreModule.getNetworkByNativeChainId;
declare const isNativeCurrency: typeof coreModule.isNativeCurrency;
declare const endpointIdToStage: typeof coreModule.endpointIdToStage;
declare const endpointIdToChainKey: typeof coreModule.endpointIdToChainKey;
declare const chainKeyToEndpointId: typeof coreModule.chainKeyToEndpointId;
declare const isChainType: typeof coreModule.isChainType;
declare const getScanLink: typeof coreModule.getScanLink;
declare const getExplorerLink: (input: {
    chainKey: string;
    address: string;
} | {
    chainKey: string;
    txHash: string;
}) => string;

declare function hasAddress<T extends object>(obj: T): obj is T & {
    address: string;
};

declare function createRpcMap(rawRpcMap?: RpcMap, env?: Record<string, string | number>): RpcMap;

declare function unit8ArrayToHex(value: Uint8Array): string;

declare function hexToUnit8Array(hex: string): Uint8Array;

declare class InvalidAddressError extends Error {
    readonly name = "InvalidAddressError";
    constructor({ address, type }: {
        address: string;
        type: ChainType;
    });
}

type BalanceProvider = {
    supports(token: Currency): boolean;
    getBalance(token: Currency, address: string): Promise<CurrencyAmount>;
};

interface DstNativeProvider {
    getMaxAmount(path: GeMaxAmountInput): Promise<CurrencyAmount>;
    getDefaultAmount(path: GetDefaultAmountInput): Promise<CurrencyAmount>;
}
interface GeMaxAmountInput {
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
}
interface GetDefaultAmountInput {
    dstChainKey: ChainKey;
}

type PriceProvider = {
    getCurrentPrice(token: Currency, fiatCurrency: FiatCurrency): Promise<FiatAmount>;
};

type TransactionResult = {
    txHash: string;
    wait(): Promise<{
        txHash: string;
    }>;
};
type Transaction<Signer, RawTransaction = unknown> = {
    signAndSubmitTransaction(signer: Signer): Promise<TransactionResult>;
    estimateGas(signer?: Signer): Promise<bigint>;
    estimateNative(signer?: Signer): Promise<CurrencyAmount>;
    unwrap(): Promise<RawTransaction>;
};

type AbstractResource = {
    chainKey: string;
};
type ResourceProvider<Signer = unknown, Resource extends AbstractResource = AbstractResource> = {
    supports(resource: unknown): resource is Resource;
    register(resource: Resource): Promise<Transaction<Signer>>;
    isRegistered(resource: Resource, address: string): Promise<boolean>;
    getType(resource: Resource): string;
};

type TokenList<TItem = TokenListItem> = TItem[];
type TokenListItem = {
    price: Partial<Record<FiatCurrency, number | null>>;
    address?: string | undefined;
    decimals: number;
    chainKey: string;
    name?: string;
    icon?: string;
    symbol: string;
};

type GetTokenListOptions = {};
interface TokenListProvider<TItem = TokenListItem> {
    getTokenList(options?: GetTokenListOptions): Promise<TokenList<TItem>>;
}

type DurationProviderConfig = {
    blockConfirmation: {
        [chainKey: string]: Seconds;
    } & {
        default: Seconds;
    };
    averageBlockTime: {
        [chainKey: string]: Seconds;
    } & {
        default: Seconds;
    };
    extraDelay: Seconds;
};
declare class DurationProvider {
    protected config: DurationProviderConfig;
    constructor(config: DurationProviderConfig);
    setConfig(config: DurationProviderConfig): void;
    getExpectedDate(ua: UA, dstEid: number, sentTimestamp?: number): Promise<UnixTimestamp>;
    getMessageDuration(ua: UA, dstEid: number): Promise<Seconds>;
    getRequiredConfirmations(ua: UA, dstEid: number): Promise<Seconds>;
    getAverageBlockTime(chainKey: ChainKey): Promise<Seconds>;
    protected endpointIdToChainKey(eid: number): ChainKey;
}
type UnixTimestamp = number;
type Seconds = number;
type UA = {
    eid: number;
    address: string;
};

declare const durationProvider: DurationProvider;
declare const getExpectedDate: typeof durationProvider.getExpectedDate;
declare const getMessageDuration: typeof durationProvider.getMessageDuration;

declare class AdapterParams {
    readonly version: number;
    readonly extraGas: number;
    readonly dstNativeAmount?: CurrencyAmount | undefined;
    readonly dstNativeAddress?: string | undefined;
    private constructor();
    static forV1(extraGas?: number): AdapterParams;
    static forV2(input: AdapterParamsV2Input): AdapterParams;
    static create(input: AdapterParamsV1Input | AdapterParamsV2Input): AdapterParams;
}
type AdapterParamsV1Input = {
    extraGas?: number;
};
type AdapterParamsV2Input = {
    extraGas?: number;
    dstNativeAmount: CurrencyAmount;
    dstNativeAddress: string;
};

type FeeQuote = {
    zroFee: CurrencyAmount;
    nativeFee: CurrencyAmount;
};

declare class MessageFee implements FeeQuote {
    readonly nativeFee: CurrencyAmount;
    readonly zroFee: CurrencyAmount;
    protected constructor(nativeFee: CurrencyAmount, zroFee: CurrencyAmount);
    static from(chainKey: ChainKey, { nativeFee, zroFee }: {
        nativeFee: number | string | bigint;
        zroFee: number | string | bigint;
    }): MessageFee;
}

export { AbstractResource, AdapterParams, BalanceProvider, BaseCurrency, BigintIsh, BlockExplorer, ChainKey, ChainType, Coin, CoreModule, Currency, CurrencyAmount, DstNativeProvider, DurationProvider, DurationProviderConfig, FeeQuote, FiatAmount, FiatCurrency, Fraction, GetTokenListOptions, InvalidAddressError, MaxUint256, MessageFee, Network, NetworkInfo, Percent, Price, PriceProvider, ResourceProvider, Rounding, Rpc, RpcList, RpcMap, SerializedAmount, SerializedCoin, SerializedCurrency, SerializedNetwork, SerializedToken, Stage, Token, TokenList, TokenListItem, TokenListProvider, Transaction, TransactionResult, amountSchema, assertToken, castCurrencyAmountUnsafe, chainKeyToEndpointId, coinSchema, coreModule, createRpcMap, currencySchema, durationProvider, endpointIdToChainKey, endpointIdToStage, escapeRegExp, getBlockExplorers, getExpectedDate, getExplorerLink, getMessageDuration, getNativeCurrency, getNetwork, getNetworkByNativeChainId, getRpcs, getScanLink, hasAddress, hexToUnit8Array, interpolateString, isAptosAddress, isAptosChainKey, isChainType, isCoin, isCurrency, isEvmAddress, isEvmChainKey, isNativeCurrency, isSolanaAddress, isSolanaChainKey, isToken, isTonAddress, isTonChainKey, isTronAddress, isTronChainKey, networkSchema, parseAmount, parseCurrencyAmount, parseFraction, parseNumber, parsePercent, parseUnits, removeDust, serializeAmount, serializeCoin, serializeCurrency, serializeToken, serializedAmountSchema, serializedCoinSchema, serializedCurrencySchema, serializedNetworkSchema, serializedTokenSchema, sumFiat, sumUnsafe, toULNv2, tokenSchema, tryGetNativeCurrency, tryGetNetwork, tryGetNetworkByNativeChainId, tryParseAmount, tryParseCurrencyAmount, tryParseFraction, tryParseNumber, tryParsePercent, unit8ArrayToHex, validateAndParseAddress, waitFor };
