import redaxios from 'redaxios';
import z$1, { z } from 'zod';

type SerializedRoute = SerializedRejectedRoute | SerializedResolvedRoute;
type SerializedRouteError = {
    message: string;
};
type SerializedRejectedRoute = {
    name: string;
    mode: string;
    error: SerializedRouteError;
};
type SerializedResolvedRoute = {
    name: string;
    mode: string;
    error: null;
    srcChainKey: string;
    dstChainKey: string;
    srcToken: string;
    dstToken: string;
    srcAmount: string;
    srcAmountMax: string;
    dstAmount: string;
    dstAmountMin: string;
    duration: number;
    allowance: string;
    dstNativeAmount: string;
    dstNativeAmountMax?: string;
    messageFee: string;
    srcAddress: string;
    dstAddress: string;
    gasCost?: string;
    gasUsed?: string;
    gasNativeAmount?: string;
    steps: SerializedStep[];
};
type SerializedEvmTransaction = {
    data?: string;
    from?: string;
    to: string;
    value?: string;
};
type SerializedChain = {
    name: string;
    shortName: string;
    chainKey: string;
    chainType: string;
    nativeChainId: number | string;
    nativeCurrency: SerializedNativeCurrency;
};
type SerializedNativeCurrency = {
    name: string;
    symbol: string;
    decimals: number;
    address?: string;
};
type SerializedToken = {
    chainKey: string;
    address?: string;
    decimals: number;
    symbol: string;
    name?: string;
    price: {
        [key: string]: number;
    };
};
type SerializedOptions = {
    dstNativeAmountMax: string;
    dstNativeAmountDefault: string;
};
declare function isSerializedRouteResolved(route: SerializedRoute): route is SerializedResolvedRoute;
declare function isSerializedRouteRejected(route: SerializedRoute): route is SerializedRejectedRoute;
type MessageResponse = {
    message?: SerializedMessage;
};
type RoutesResponse = {
    routes: SerializedRoute[];
};
type ChainsResponse = {
    chains: SerializedChain[];
};
type OptionsResponse = {
    options: SerializedOptions;
};
type TokensResponse = {
    tokens: SerializedToken[];
};
type SerializedBaseStep = {
    type: string;
    transaction: unknown;
};
type ChainKey = string;
type SerializedApproveStep = {
    type: 'approve';
    chainKey: ChainKey;
    sender: string;
    transaction: SerializedTransaction;
};
type SerializedBridgeStep = {
    type: 'bridge';
    chainKey: ChainKey;
    sender: string;
    transaction: SerializedTransaction;
};
type SerializedClaimStep = {
    type: 'claim';
    chainKey: ChainKey;
    sender: string;
    transaction: SerializedTransaction;
};
type SerializedRegisterStep = {
    type: 'register';
    chainKey: ChainKey;
    sender: string;
    transaction: SerializedTransaction;
};
type SerializedAptosTransaction = {
    function: string;
    typeArguments: string[];
    arguments: any[];
};
type SerializedSolanaTransaction = {
    encoding: 'base64';
    data: string;
};
type SerializedUnknownTransaction = object;
type SerializedTransaction = SerializedEvmTransaction | SerializedAptosTransaction | SerializedSolanaTransaction | SerializedUnknownTransaction;
type SerializedStep = SerializedBridgeStep | SerializedApproveStep | SerializedRegisterStep | SerializedClaimStep | SerializedBaseStep;
type SerializedMessage = {
    srcTxHash: string;
    dstTxHash?: string;
};
type UnclaimedResponse = {
    unclaimed: Record<string, string>;
};

declare const bigIntStringSchema: z.ZodEffects<z.ZodString, string, string>;
declare const tokensInputSchema: z.ZodObject<{
    srcToken: z.ZodOptional<z.ZodString>;
    srcChainKey: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    srcToken?: string | undefined;
    srcChainKey?: string | undefined;
}, {
    srcToken?: string | undefined;
    srcChainKey?: string | undefined;
}>;
declare const routesInputSchema: z.ZodObject<{
    srcToken: z.ZodString;
    dstToken: z.ZodString;
    srcChainKey: z.ZodString;
    dstChainKey: z.ZodString;
    srcAmount: z.ZodEffects<z.ZodString, string, string>;
    dstAmountMin: z.ZodEffects<z.ZodString, string, string>;
    srcAddress: z.ZodString;
    dstAddress: z.ZodString;
    dstNativeAmount: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    srcToken: string;
    srcChainKey: string;
    dstToken: string;
    dstChainKey: string;
    srcAmount: string;
    dstAmountMin: string;
    srcAddress: string;
    dstAddress: string;
    dstNativeAmount: string;
}, {
    srcToken: string;
    srcChainKey: string;
    dstToken: string;
    dstChainKey: string;
    srcAmount: string;
    dstAmountMin: string;
    srcAddress: string;
    dstAddress: string;
    dstNativeAmount?: string | undefined;
}>;
declare const errorSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
declare const messageInputSchema: z.ZodObject<{
    txHash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    txHash: string;
}, {
    txHash: string;
}>;
declare const messageOutputSchema: z.ZodObject<{
    message: z.ZodOptional<z.ZodLazy<z.ZodType<SerializedMessage, z.ZodTypeDef, SerializedMessage>>>;
}, "strip", z.ZodTypeAny, {
    message?: SerializedMessage | undefined;
}, {
    message?: SerializedMessage | undefined;
}>;
declare const optionsInputSchema: z.ZodObject<{
    srcChainKey: z.ZodString;
    dstChainKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    srcChainKey: string;
    dstChainKey: string;
}, {
    srcChainKey: string;
    dstChainKey: string;
}>;
declare const optionsSchema: z.ZodSchema<SerializedOptions>;
declare const optionsOutputSchema: z.ZodSchema<OptionsResponse>;
declare const evmTransactionRequestSchema: z.ZodSchema<SerializedEvmTransaction>;
declare const aptosTransactionRequestSchema: z.ZodSchema<SerializedAptosTransaction>;
declare const solanaTransactionRequestSchema: z.ZodSchema<SerializedSolanaTransaction>;
declare const unknownTransactionRequestSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
declare const resolvedRouteSchema: z.ZodSchema<SerializedResolvedRoute>;
declare const rejectedRouteSchema: z.ZodSchema<SerializedRejectedRoute>;
declare const routesOutputSchema: z.ZodSchema<RoutesResponse>;
declare const chainSchema: z.ZodSchema<SerializedChain>;
declare const chainsOutputSchema: z.ZodSchema<ChainsResponse>;
declare const tokenSchema: z.ZodSchema<SerializedToken>;
declare const tokensOutputSchema: z.ZodSchema<TokensResponse>;
declare const transactionSchema: z.ZodUnion<[z.ZodType<SerializedEvmTransaction, z.ZodTypeDef, SerializedEvmTransaction>, z.ZodType<SerializedAptosTransaction, z.ZodTypeDef, SerializedAptosTransaction>, z.ZodType<SerializedSolanaTransaction, z.ZodTypeDef, SerializedSolanaTransaction>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>]>;
declare const userOperationSchema: z.ZodObject<{
    abi: z.ZodUnknown;
    args: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    args: unknown[];
    abi?: unknown;
}, {
    args: unknown[];
    abi?: unknown;
}>;
declare const baseStepSchema: z.ZodObject<{
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
}, {
    type: string;
}>;
declare const bridgeStepSchema: z.ZodSchema<SerializedBridgeStep>;
declare const approveStepSchema: z.ZodSchema<SerializedApproveStep>;
declare const registerStepSchema: z.ZodSchema<SerializedRegisterStep>;
declare const claimStepSchema: z.ZodSchema<SerializedClaimStep>;
declare const messageSchema: z.ZodSchema<SerializedMessage>;
declare const unclaimedInputSchema: z.ZodObject<{
    chainKey: z.ZodString;
    address: z.ZodString;
    token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    chainKey: string;
    address: string;
    token?: string | undefined;
}, {
    chainKey: string;
    address: string;
    token?: string | undefined;
}>;
declare const unclaimedOutputSchema: z.ZodObject<{
    unclaimed: z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    unclaimed: Record<string, string>;
}, {
    unclaimed: Record<string, string>;
}>;

type ClientOptions = {
    apiUrl: string;
    apiKey: string;
    http: undefined | never;
} | {
    apiUrl?: never;
    apiKey?: never;
    http: ReturnType<typeof redaxios.create>;
};
declare class StargateClient {
    readonly config: ClientOptions;
    protected http: ReturnType<typeof redaxios.create>;
    constructor(config: ClientOptions);
    getChains(): Promise<ChainsResponse>;
    getTokens(input?: z$1.input<typeof tokensInputSchema>): Promise<TokensResponse>;
    getRoutes(input: z$1.input<typeof routesInputSchema>): Promise<RoutesResponse>;
    getMessage(input: z$1.input<typeof messageInputSchema>): Promise<MessageResponse>;
    getOptions(input: z$1.input<typeof optionsInputSchema>): Promise<OptionsResponse>;
    getUnclaimed(input: z$1.input<typeof unclaimedInputSchema>): Promise<UnclaimedResponse>;
}

declare const NATIVE_ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

declare function base64ToUint8Array(base64: string): Uint8Array;
declare function uint8ArrayToBase64(uint8Array: Uint8Array): string;
declare function unit8ArrayToHex(value: Uint8Array): string;
declare function hexToUnit8Array(hex: string): Uint8Array;

export { ChainsResponse, MessageResponse, NATIVE_ETH_ADDRESS, OptionsResponse, RoutesResponse, SerializedApproveStep, SerializedAptosTransaction, SerializedBaseStep, SerializedBridgeStep, SerializedChain, SerializedClaimStep, SerializedEvmTransaction, SerializedMessage, SerializedNativeCurrency, SerializedOptions, SerializedRegisterStep, SerializedRejectedRoute, SerializedResolvedRoute, SerializedRoute, SerializedRouteError, SerializedSolanaTransaction, SerializedStep, SerializedToken, SerializedTransaction, SerializedUnknownTransaction, StargateClient, TokensResponse, UnclaimedResponse, approveStepSchema, aptosTransactionRequestSchema, base64ToUint8Array, baseStepSchema, bigIntStringSchema, bridgeStepSchema, chainSchema, chainsOutputSchema, claimStepSchema, errorSchema, evmTransactionRequestSchema, hexToUnit8Array, isSerializedRouteRejected, isSerializedRouteResolved, messageInputSchema, messageOutputSchema, messageSchema, optionsInputSchema, optionsOutputSchema, optionsSchema, registerStepSchema, rejectedRouteSchema, resolvedRouteSchema, routesInputSchema, routesOutputSchema, solanaTransactionRequestSchema, tokenSchema, tokensInputSchema, tokensOutputSchema, transactionSchema, uint8ArrayToBase64, unclaimedInputSchema, unclaimedOutputSchema, unit8ArrayToHex, unknownTransactionRequestSchema, userOperationSchema };
