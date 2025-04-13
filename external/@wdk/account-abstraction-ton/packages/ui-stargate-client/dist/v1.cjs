'use strict';

var redaxios = require('redaxios');
var zod = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var redaxios__default = /*#__PURE__*/_interopDefault(redaxios);

// src/v1/StargateClient.ts
function isBigIntString(v) {
  try {
    BigInt(v);
    return true;
  } catch {
    return false;
  }
}
var bigIntStringSchema = zod.z.string().refine(isBigIntString);
var tokensInputSchema = zod.z.object({
  srcToken: zod.z.string().optional(),
  srcChainKey: zod.z.string().optional()
});
var routesInputSchema = zod.z.object({
  srcToken: zod.z.string(),
  dstToken: zod.z.string(),
  srcChainKey: zod.z.string(),
  dstChainKey: zod.z.string(),
  srcAmount: bigIntStringSchema,
  dstAmountMin: bigIntStringSchema,
  srcAddress: zod.z.string(),
  dstAddress: zod.z.string(),
  dstNativeAmount: bigIntStringSchema.default("0")
});
var errorSchema = zod.z.object({
  message: zod.z.string()
});
var messageInputSchema = zod.z.object({
  txHash: zod.z.string()
});
var messageOutputSchema = zod.z.object({
  message: zod.z.lazy(() => messageSchema).optional()
});
var optionsInputSchema = zod.z.object({
  srcChainKey: zod.z.string(),
  dstChainKey: zod.z.string()
});
var optionsSchema = zod.z.object({
  dstNativeAmountMax: bigIntStringSchema,
  dstNativeAmountDefault: bigIntStringSchema
});
var optionsOutputSchema = zod.z.object({
  options: optionsSchema
});
var evmTransactionRequestSchema = zod.z.object({
  /** Contract code or a hashed method call with encoded args */
  data: zod.z.string(),
  /** Transaction sender */
  from: zod.z.string().optional(),
  /** Transaction recipient */
  to: zod.z.string(),
  /** Value in wei sent with this transaction */
  value: zod.z.string().optional()
});
var aptosTransactionRequestSchema = zod.z.object({
  function: zod.z.string(),
  typeArguments: zod.z.string().array(),
  arguments: zod.z.any().array()
});
var solanaTransactionRequestSchema = zod.z.object({
  encoding: zod.z.enum(["base64"]),
  data: zod.z.string()
});
var unknownTransactionRequestSchema = zod.z.object({});
var resolvedRouteSchema = zod.z.object({
  srcChainKey: zod.z.string(),
  dstChainKey: zod.z.string(),
  messageFee: bigIntStringSchema,
  srcAddress: zod.z.string(),
  dstAddress: zod.z.string(),
  name: zod.z.string(),
  mode: zod.z.string(),
  srcToken: zod.z.string(),
  dstToken: zod.z.string(),
  srcAmount: bigIntStringSchema,
  // amount sent
  srcAmountMax: bigIntStringSchema,
  dstAmount: bigIntStringSchema,
  // amount received (expected)
  dstAmountMin: bigIntStringSchema,
  duration: zod.z.number(),
  allowance: bigIntStringSchema,
  error: zod.z.null(),
  dstNativeAmount: bigIntStringSchema,
  dstNativeAmountMax: bigIntStringSchema.optional(),
  gasUsed: bigIntStringSchema.optional(),
  gasCost: bigIntStringSchema.optional(),
  // amount in native
  steps: zod.z.lazy(
    () => zod.z.union([
      // order affects performance
      bridgeStepSchema,
      approveStepSchema,
      registerStepSchema,
      claimStepSchema
    ]).array()
  )
});
var rejectedRouteSchema = zod.z.object({
  name: zod.z.string(),
  mode: zod.z.string(),
  error: errorSchema
});
var routesOutputSchema = zod.z.object({
  routes: zod.z.union([resolvedRouteSchema, rejectedRouteSchema]).array()
});
var chainSchema = zod.z.object({
  name: zod.z.string(),
  shortName: zod.z.string(),
  chainKey: zod.z.string(),
  chainType: zod.z.string(),
  nativeChainId: zod.z.union([zod.z.number(), zod.z.string()]),
  nativeCurrency: zod.z.object({
    name: zod.z.string(),
    symbol: zod.z.string(),
    decimals: zod.z.number(),
    address: zod.z.string().optional()
  })
});
var chainsOutputSchema = zod.z.object({
  chains: chainSchema.array()
});
var tokenSchema = zod.z.object({
  chainKey: zod.z.string(),
  address: zod.z.string().optional(),
  decimals: zod.z.number(),
  symbol: zod.z.string(),
  name: zod.z.string().optional(),
  price: zod.z.object({
    USD: zod.z.number().optional()
  })
});
var tokensOutputSchema = zod.z.object({
  tokens: tokenSchema.array()
});
var transactionSchema = zod.z.union([
  // order matters
  evmTransactionRequestSchema,
  aptosTransactionRequestSchema,
  solanaTransactionRequestSchema,
  unknownTransactionRequestSchema
]);
var userOperationSchema = zod.z.object({
  abi: zod.z.unknown(),
  args: zod.z.array(zod.z.unknown())
});
var baseStepSchema = zod.z.object({
  type: zod.z.string()
});
var bridgeStepSchema = baseStepSchema.extend({
  type: zod.z.literal("bridge"),
  chainKey: zod.z.string(),
  sender: zod.z.string(),
  transaction: transactionSchema
});
var approveStepSchema = baseStepSchema.extend({
  type: zod.z.literal("approve"),
  chainKey: zod.z.string(),
  sender: zod.z.string(),
  transaction: transactionSchema
});
var registerStepSchema = baseStepSchema.extend({
  type: zod.z.literal("register"),
  chainKey: zod.z.string(),
  sender: zod.z.string(),
  transaction: transactionSchema
});
var claimStepSchema = baseStepSchema.extend({
  type: zod.z.literal("claim"),
  chainKey: zod.z.string(),
  sender: zod.z.string(),
  transaction: transactionSchema
});
var messageSchema = zod.z.object({
  srcTxHash: zod.z.string(),
  dstTxHash: zod.z.string().optional()
});
var unclaimedInputSchema = zod.z.object({
  chainKey: zod.z.string(),
  address: zod.z.string(),
  token: zod.z.string().optional()
});
var unclaimedOutputSchema = zod.z.object({
  unclaimed: zod.z.record(zod.z.string(), bigIntStringSchema)
});

// src/v1/StargateClient.ts
var StargateClient = class {
  constructor(config) {
    this.config = config;
    this.http = config.http ? config.http : redaxios__default.default.create({
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

exports.NATIVE_ETH_ADDRESS = NATIVE_ETH_ADDRESS;
exports.StargateClient = StargateClient;
exports.approveStepSchema = approveStepSchema;
exports.aptosTransactionRequestSchema = aptosTransactionRequestSchema;
exports.base64ToUint8Array = base64ToUint8Array;
exports.baseStepSchema = baseStepSchema;
exports.bigIntStringSchema = bigIntStringSchema;
exports.bridgeStepSchema = bridgeStepSchema;
exports.chainSchema = chainSchema;
exports.chainsOutputSchema = chainsOutputSchema;
exports.claimStepSchema = claimStepSchema;
exports.errorSchema = errorSchema;
exports.evmTransactionRequestSchema = evmTransactionRequestSchema;
exports.hexToUnit8Array = hexToUnit8Array;
exports.isSerializedRouteRejected = isSerializedRouteRejected;
exports.isSerializedRouteResolved = isSerializedRouteResolved;
exports.messageInputSchema = messageInputSchema;
exports.messageOutputSchema = messageOutputSchema;
exports.messageSchema = messageSchema;
exports.optionsInputSchema = optionsInputSchema;
exports.optionsOutputSchema = optionsOutputSchema;
exports.optionsSchema = optionsSchema;
exports.registerStepSchema = registerStepSchema;
exports.rejectedRouteSchema = rejectedRouteSchema;
exports.resolvedRouteSchema = resolvedRouteSchema;
exports.routesInputSchema = routesInputSchema;
exports.routesOutputSchema = routesOutputSchema;
exports.solanaTransactionRequestSchema = solanaTransactionRequestSchema;
exports.tokenSchema = tokenSchema;
exports.tokensInputSchema = tokensInputSchema;
exports.tokensOutputSchema = tokensOutputSchema;
exports.transactionSchema = transactionSchema;
exports.uint8ArrayToBase64 = uint8ArrayToBase64;
exports.unclaimedInputSchema = unclaimedInputSchema;
exports.unclaimedOutputSchema = unclaimedOutputSchema;
exports.unit8ArrayToHex = unit8ArrayToHex;
exports.unknownTransactionRequestSchema = unknownTransactionRequestSchema;
exports.userOperationSchema = userOperationSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=v1.cjs.map