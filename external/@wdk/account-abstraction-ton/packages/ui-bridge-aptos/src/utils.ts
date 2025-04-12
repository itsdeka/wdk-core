import type {GetRouteInput} from '@layerzerolabs/ui-bridge-sdk/v2';
import {
  type Currency,
  CurrencyAmount,
  isAptosChainKey,
  isEvmChainKey,
  MaxUint256,
  type ChainKey,
} from '@layerzerolabs/ui-core';
import type {AptosBridgeConfig} from './types/AptosBridgeConfig';
import {AddressOne} from '@layerzerolabs/ui-evm';
import {fullAddress} from '@layerzerolabs/ui-aptos';

export function getPath(input: GetRouteInput) {
  return {srcChainKey: input.srcToken.chainKey, dstChainKey: input.dstToken.chainKey};
}

export function tryGetDeployment(
  chainKey: ChainKey,
  config: AptosBridgeConfig,
): AptosBridgeConfig['deployments'][ChainKey] | undefined {
  return config.deployments[chainKey];
}

export function getDeployment(chainKey: ChainKey, config: AptosBridgeConfig) {
  const deployment = tryGetDeployment(chainKey, config);
  if (deployment) return deployment;
  throw new Error(`Deployment not found for chainKey ${chainKey}`);
}

export function getDstAddressForQuote(chainKey: ChainKey) {
  if (isEvmChainKey(chainKey)) {
    return AddressOne;
  }
  if (isAptosChainKey(chainKey)) {
    return fullAddress('0').toString();
  }
  throw new Error(`Unsupported chainKey: ${chainKey}`);
}

export function getMaxAmount(token: Currency) {
  return CurrencyAmount.fromRawAmount(token, MaxUint256);
}

export function isValidPair(
  srcToken: Currency,
  dstToken: Currency,
  config: AptosBridgeConfig,
): boolean {
  if (srcToken.chainKey === dstToken.chainKey) return false;
  for (const tokens of Object.values(config.tokens)) {
    if (
      tokens.some((token) => token.equals(srcToken)) &&
      tokens.some((token) => token.equals(dstToken))
    ) {
      return true;
    }
  }
  return false;
}
