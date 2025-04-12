import {z} from 'zod';
import type {
  ChainsResponse,
  RoutesResponse,
  TokensResponse,
  OptionsResponse,
  SerializedAptosTransaction,
  SerializedApproveStep,
  SerializedBridgeStep,
  SerializedChain,
  SerializedClaimStep,
  SerializedRegisterStep,
  SerializedRejectedRoute,
  SerializedResolvedRoute,
  SerializedSolanaTransaction,
  SerializedToken,
  SerializedEvmTransaction,
  SerializedMessage,
  SerializedOptions,
} from './types';

function isBigIntString(v: string) {
  try {
    BigInt(v);
    return true;
  } catch {
    return false;
  }
}

export const bigIntStringSchema = z.string().refine(isBigIntString);

export const tokensInputSchema = z.object({
  srcToken: z.string().optional(),
  srcChainKey: z.string().optional(),
});

// refine extend and transform in app
// types in client need to be kept as simple as possible
export const routesInputSchema = z.object({
  srcToken: z.string(),
  dstToken: z.string(),
  srcChainKey: z.string(),
  dstChainKey: z.string(),
  srcAmount: bigIntStringSchema,
  dstAmountMin: bigIntStringSchema,
  srcAddress: z.string(),
  dstAddress: z.string(),
  dstNativeAmount: bigIntStringSchema.default('0'),
});

export const errorSchema = z.object({
  message: z.string(),
});

export const messageInputSchema = z.object({
  txHash: z.string(),
});

export const messageOutputSchema = z.object({
  message: z.lazy(() => messageSchema).optional(),
});

export const optionsInputSchema = z.object({
  srcChainKey: z.string(),
  dstChainKey: z.string(),
});

export const optionsSchema: z.ZodSchema<SerializedOptions> = z.object({
  dstNativeAmountMax: bigIntStringSchema,
  dstNativeAmountDefault: bigIntStringSchema,
});

export const optionsOutputSchema: z.ZodSchema<OptionsResponse> = z.object({
  options: optionsSchema,
});

// based on viem/types/transaction.ts
export const evmTransactionRequestSchema: z.ZodSchema<SerializedEvmTransaction> = z.object({
  /** Contract code or a hashed method call with encoded args */
  data: z.string(),
  /** Transaction sender */
  from: z.string().optional(),
  /** Transaction recipient */
  to: z.string(),
  /** Value in wei sent with this transaction */
  value: z.string().optional(),
});

export const aptosTransactionRequestSchema: z.ZodSchema<SerializedAptosTransaction> = z.object({
  function: z.string(),
  typeArguments: z.string().array(),
  arguments: z.any().array(),
});

export const solanaTransactionRequestSchema: z.ZodSchema<SerializedSolanaTransaction> = z.object({
  encoding: z.enum(['base64']),
  data: z.string(),
});

export const unknownTransactionRequestSchema = z.object({});

export const resolvedRouteSchema: z.ZodSchema<SerializedResolvedRoute> = z.object({
  srcChainKey: z.string(),
  dstChainKey: z.string(),
  messageFee: bigIntStringSchema,
  srcAddress: z.string(),
  dstAddress: z.string(),
  name: z.string(),
  mode: z.string(),
  srcToken: z.string(),
  dstToken: z.string(),
  srcAmount: bigIntStringSchema, // amount sent
  srcAmountMax: bigIntStringSchema,
  dstAmount: bigIntStringSchema, // amount received (expected)
  dstAmountMin: bigIntStringSchema,
  duration: z.number(),
  allowance: bigIntStringSchema,
  error: z.null(),
  dstNativeAmount: bigIntStringSchema,
  dstNativeAmountMax: bigIntStringSchema.optional(),
  gasUsed: bigIntStringSchema.optional(),
  gasCost: bigIntStringSchema.optional(), // amount in native
  steps: z.lazy(() =>
    z
      .union([
        // order affects performance
        bridgeStepSchema,
        approveStepSchema,
        registerStepSchema,
        claimStepSchema,
      ])
      .array(),
  ),
});

export const rejectedRouteSchema: z.ZodSchema<SerializedRejectedRoute> = z.object({
  name: z.string(),
  mode: z.string(),
  error: errorSchema,
});

export const routesOutputSchema: z.ZodSchema<RoutesResponse> = z.object({
  routes: z.union([resolvedRouteSchema, rejectedRouteSchema]).array(),
});

export const chainSchema: z.ZodSchema<SerializedChain> = z.object({
  name: z.string(),
  shortName: z.string(),
  chainKey: z.string(),
  chainType: z.string(),
  nativeChainId: z.union([z.number(), z.string()]),
  nativeCurrency: z.object({
    name: z.string(),
    symbol: z.string(),
    decimals: z.number(),
    address: z.string().optional(),
  }),
});

export const chainsOutputSchema: z.ZodSchema<ChainsResponse> = z.object({
  chains: chainSchema.array(),
});

export const tokenSchema: z.ZodSchema<SerializedToken> = z.object({
  chainKey: z.string(),
  address: z.string().optional(),
  decimals: z.number(),
  symbol: z.string(),
  name: z.string().optional(),
  price: z.object({
    USD: z.number().optional(),
  }),
});

export const tokensOutputSchema: z.ZodSchema<TokensResponse> = z.object({
  tokens: tokenSchema.array(),
});

export const transactionSchema = z.union([
  // order matters
  evmTransactionRequestSchema,
  aptosTransactionRequestSchema,
  solanaTransactionRequestSchema,
  unknownTransactionRequestSchema,
]);

export const userOperationSchema = z.object({
  abi: z.unknown(),
  args: z.array(z.unknown()),
});

// todo: discuss if we should call it step or action
export const baseStepSchema = z.object({
  type: z.string(),
});

export const bridgeStepSchema: z.ZodSchema<SerializedBridgeStep> = baseStepSchema.extend({
  type: z.literal('bridge'),
  chainKey: z.string(),
  sender: z.string(),
  transaction: transactionSchema,
});

export const approveStepSchema: z.ZodSchema<SerializedApproveStep> = baseStepSchema.extend({
  type: z.literal('approve'),
  chainKey: z.string(),
  sender: z.string(),
  transaction: transactionSchema,
});

export const registerStepSchema: z.ZodSchema<SerializedRegisterStep> = baseStepSchema.extend({
  type: z.literal('register'),
  chainKey: z.string(),
  sender: z.string(),
  transaction: transactionSchema,
});

export const claimStepSchema: z.ZodSchema<SerializedClaimStep> = baseStepSchema.extend({
  type: z.literal('claim'),
  chainKey: z.string(),
  sender: z.string(),
  transaction: transactionSchema,
});

export const messageSchema: z.ZodSchema<SerializedMessage> = z.object({
  srcTxHash: z.string(),
  dstTxHash: z.string().optional(),
});

export const unclaimedInputSchema = z.object({
  chainKey: z.string(),
  address: z.string(),
  token: z.string().optional(),
});

export const unclaimedOutputSchema = z.object({
  unclaimed: z.record(z.string(), bigIntStringSchema),
});
