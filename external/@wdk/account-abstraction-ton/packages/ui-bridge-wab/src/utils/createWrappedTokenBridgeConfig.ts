import type {WrappedAssetBridgeConfig} from '../types/WrappedAssetBridgeConfig';
import {
  type SerializedWrappedAssetBridgeConfig,
  wrappedAssetBridgeConfigSchema,
} from '../types/zod';

export function createWrappedAssetBridgeConfig(
  input: SerializedWrappedAssetBridgeConfig,
): WrappedAssetBridgeConfig {
  return wrappedAssetBridgeConfigSchema.parse(input);
}
