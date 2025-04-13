import redaxios from 'redaxios';
import { z } from 'zod';

// src/v1/StargateClient.ts
function isBigIntString(v) {
  try {
    BigInt(v);
    return true;
  } catch {
    return false;
  }
}
var bigIntStringSchema = z.string().refine(isBigIntString);
var tokensInputSchema = z.object({
  srcToken: z.string().optional(),
  srcChainKey: z.string().optional()
});
var routesInputSchema = z.object({
  srcToken: z.string(),
  dstToken: z.string(),
  srcChainKey: z.string(),
  dstChainKey: z.string(),
  srcAmount: bigIntStringSchema,
  dstAmountMin: bigIntStringSchema,
  srcAddress: z.string(),
  dstAddress: z.string(),
  dstNativeAmount: bigIntStringSchema.default("0")
});
var errorSchema = z.object({
  message: z.string()
});
var messageInputSchema = z.object({
  txHash: z.string()
});
var messageOutputSchema = z.object({
  message: z.lazy(() => messageSchema).optional()
});
var optionsInputSchema = z.object({
  srcChainKey: z.string(),
  dstChainKey: z.string()
});
var optionsSchema = z.object({
  dstNativeAmountMax: bigIntStringSchema,
  dstNativeAmountDefault: bigIntStringSchema
});
var optionsOutputSchema = z.object({
  options: optionsSchema
});
var evmTransactionRequestSchema = z.object({
  /** Contract code or a hashed method call with encoded args */
  data: z.string(),
  /** Transaction sender */
  from: z.string().optional(),
  /** Transaction recipient */
  to: z.string(),
  /** Value in wei sent with this transaction */
  value: z.string().optional()
});
var aptosTransactionRequestSchema = z.object({
  function: z.string(),
  typeArguments: z.string().array(),
  arguments: z.any().array()
});
var solanaTransactionRequestSchema = z.object({
  encoding: z.enum(["base64"]),
  data: z.string()
});
var unknownTransactionRequestSchema = z.object({});
var resolvedRouteSchema = z.object({
  srcChainKey: z.string(),
  dstChainKey: z.string(),
  messageFee: bigIntStringSchema,
  srcAddress: z.string(),
  dstAddress: z.string(),
  name: z.string(),
  mode: z.string(),
  srcToken: z.string(),
  dstToken: z.string(),
  srcAmount: bigIntStringSchema,
  // amount sent
  srcAmountMax: bigIntStringSchema,
  dstAmount: bigIntStringSchema,
  // amount received (expected)
  dstAmountMin: bigIntStringSchema,
  duration: z.number(),
  allowance: bigIntStringSchema,
  error: z.null(),
  dstNativeAmount: bigIntStringSchema,
  dstNativeAmountMax: bigIntStringSchema.optional(),
  gasUsed: bigIntStringSchema.optional(),
  gasCost: bigIntStringSchema.optional(),
  // amount in native
  steps: z.lazy(
    () => z.union([
      // order affects performance
      bridgeStepSchema,
      approveStepSchema,
      registerStepSchema,
      claimStepSchema
    ]).array()
  )
});
var rejectedRouteSchema = z.object({
  name: z.string(),
  mode: z.string(),
  error: errorSchema
});
var routesOutputSchema = z.object({
  routes: z.union([resolvedRouteSchema, rejectedRouteSchema]).array()
});
var chainSchema = z.object({
  name: z.string(),
  shortName: z.string(),
  chainKey: z.string(),
  chainType: z.string(),
  nativeChainId: z.union([z.number(), z.string()]),
  nativeCurrency: z.object({
    name: z.string(),
    symbol: z.string(),
    decimals: z.number(),
    address: z.string().optional()
  })
});
var chainsOutputSchema = z.object({
  chains: chainSchema.array()
});
var tokenSchema = z.object({
  chainKey: z.string(),
  address: z.string().optional(),
  decimals: z.number(),
  symbol: z.string(),
  name: z.string().optional(),
  price: z.object({
    USD: z.number().optional()
  })
});
var tokensOutputSchema = z.object({
  tokens: tokenSchema.array()
});
var transactionSchema = z.union([
  // order matters
  evmTransactionRequestSchema,
  aptosTransactionRequestSchema,
  solanaTransactionRequestSchema,
  unknownTransactionRequestSchema
]);
var userOperationSchema = z.object({
  abi: z.unknown(),
  args: z.array(z.unknown())
});
var baseStepSchema = z.object({
  type: z.string()
});
var bridgeStepSchema = baseStepSchema.extend({
  type: z.literal("bridge"),
  chainKey: z.string(),
  sender: z.string(),
  transaction: transactionSchema
});
var approveStepSchema = baseStepSchema.extend({
  type: z.literal("approve"),
  chainKey: z.string(),
  sender: z.string(),
  transaction: transactionSchema
});
var registerStepSchema = baseStepSchema.extend({
  type: z.literal("register"),
  chainKey: z.string(),
  sender: z.string(),
  transaction: transactionSchema
});
var claimStepSchema = baseStepSchema.extend({
  type: z.literal("claim"),
  chainKey: z.string(),
  sender: z.string(),
  transaction: transactionSchema
});
var messageSchema = z.object({
  srcTxHash: z.string(),
  dstTxHash: z.string().optional()
});
var unclaimedInputSchema = z.object({
  chainKey: z.string(),
  address: z.string(),
  token: z.string().optional()
});
var unclaimedOutputSchema = z.object({
  unclaimed: z.record(z.string(), bigIntStringSchema)
});

// src/v1/StargateClient.ts
var StargateClient = class {
  constructor(config) {
    this.config = config;
    this.http = config.http ? config.http : redaxios.create({
      baseURL: config.apiUrl,
      headers: { "x-stargate-api-key": config.apiKey }
    });
  }
  http;
  async getChains() {
    const response = await this.http.get("v1/bridge/chains");
    return chainsOutputSchema.parse(response.data);
  }
  async getTokens(input = {}) {
    const params = tokensInputSchema.parse(input);
    const response = await this.http.get("v1/bridge/tokens", { params });
    return tokensOutputSchema.parse(response.data);
  }
  async getRoutes(input) {
    const params = routesInputSchema.parse(input);
    const response = await this.http.get("v1/bridge/routes", { params });
    return routesOutputSchema.parse(response.data);
  }
  async getMessage(input) {
    const params = messageInputSchema.parse(input);
    const response = await this.http.get(`v1/bridge/tx/${encodeURIComponent(params.txHash)}`, {
      validateStatus: (status) => status === 200 || status === 404
    });
    return messageOutputSchema.parse(response.data);
  }
  async getOptions(input) {
    const params = optionsInputSchema.parse(input);
    const response = await this.http.get("v1/bridge/options", { params });
    return optionsOutputSchema.parse(response.data);
  }
  async getUnclaimed(input) {
    const params = unclaimedInputSchema.parse(input);
    const response = await this.http.get("v1/bridge/unclaimed", { params });
    return unclaimedOutputSchema.parse(response.data);
  }
};

// src/v1/constants.ts
var NATIVE_ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

// src/v1/utils.ts
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const uint8Array = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return uint8Array;
}
function uint8ArrayToBase64(uint8Array) {
  let binary = "";
  const len = uint8Array.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
}
function unit8ArrayToHex(value) {
  return "0x" + Buffer.from(value).toString("hex");
}
function hexToUnit8Array(hex) {
  return new Uint8Array(Buffer.from(hex.slice(2), "hex"));
}

// src/v1/types.ts
function isSerializedRouteResolved(route) {
  return !("error" in route);
}
function isSerializedRouteRejected(route) {
  return "error" in route;
}

export { NATIVE_ETH_ADDRESS, StargateClient, approveStepSchema, aptosTransactionRequestSchema, base64ToUint8Array, baseStepSchema, bigIntStringSchema, bridgeStepSchema, chainSchema, chainsOutputSchema, claimStepSchema, errorSchema, evmTransactionRequestSchema, hexToUnit8Array, isSerializedRouteRejected, isSerializedRouteResolved, messageInputSchema, messageOutputSchema, messageSchema, optionsInputSchema, optionsOutputSchema, optionsSchema, registerStepSchema, rejectedRouteSchema, resolvedRouteSchema, routesInputSchema, routesOutputSchema, solanaTransactionRequestSchema, tokenSchema, tokensInputSchema, tokensOutputSchema, transactionSchema, uint8ArrayToBase64, unclaimedInputSchema, unclaimedOutputSchema, unit8ArrayToHex, unknownTransactionRequestSchema, userOperationSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=v1.mjs.map