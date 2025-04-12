export type SerializedRoute = SerializedRejectedRoute | SerializedResolvedRoute;

export type SerializedRouteError = {
  message: string;
};

export type SerializedRejectedRoute = {
  name: string;
  mode: string;
  error: SerializedRouteError;
};

export type SerializedResolvedRoute = {
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

export type SerializedEvmTransaction = {
  data?: string;
  from?: string;
  to: string;
  value?: string;
};

export type SerializedChain = {
  name: string;
  shortName: string;
  chainKey: string;
  chainType: string;
  nativeChainId: number | string;
  nativeCurrency: SerializedNativeCurrency;
};

export type SerializedNativeCurrency = {
  name: string;
  symbol: string;
  decimals: number;
  address?: string;
};

export type SerializedToken = {
  chainKey: string;
  address?: string;
  decimals: number;
  symbol: string;
  name?: string;
  price: {
    [key: string]: number;
  };
};

export type SerializedOptions = {
  dstNativeAmountMax: string;
  dstNativeAmountDefault: string;
};

export function isSerializedRouteResolved(
  route: SerializedRoute,
): route is SerializedResolvedRoute {
  return !('error' in route);
}

export function isSerializedRouteRejected(
  route: SerializedRoute,
): route is SerializedRejectedRoute {
  return 'error' in route;
}

export type MessageResponse = {
  message?: SerializedMessage;
};

export type RoutesResponse = {
  routes: SerializedRoute[];
};

export type ChainsResponse = {
  chains: SerializedChain[];
};

export type OptionsResponse = {
  options: SerializedOptions;
};

export type TokensResponse = {
  tokens: SerializedToken[];
};

export type SerializedBaseStep = {
  type: string;
  transaction: unknown;
};

type ChainKey = string;

export type SerializedApproveStep = {
  type: 'approve';
  chainKey: ChainKey;
  sender: string;
  transaction: SerializedTransaction;
};

export type SerializedBridgeStep = {
  type: 'bridge';
  chainKey: ChainKey;
  sender: string;
  transaction: SerializedTransaction;
};

export type SerializedClaimStep = {
  type: 'claim';
  chainKey: ChainKey;
  sender: string;
  transaction: SerializedTransaction;
};

export type SerializedRegisterStep = {
  type: 'register';
  chainKey: ChainKey;
  sender: string;
  transaction: SerializedTransaction;
};

export type SerializedAptosTransaction = {
  function: string;
  typeArguments: string[];
  arguments: any[];
};

export type SerializedSolanaTransaction = {
  // represents VersionedTransaction
  encoding: 'base64';
  data: string;
};

export type SerializedUnknownTransaction = object;

export type SerializedTransaction =
  | SerializedEvmTransaction
  | SerializedAptosTransaction
  | SerializedSolanaTransaction
  | SerializedUnknownTransaction;

export type SerializedStep =
  | SerializedBridgeStep
  | SerializedApproveStep
  | SerializedRegisterStep
  | SerializedClaimStep
  | SerializedBaseStep;

export type SerializedMessage = {
  srcTxHash: string;
  dstTxHash?: string;
};

export type UnclaimedResponse = {
  unclaimed: Record<string, string>;
};
