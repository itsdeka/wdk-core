import type {ChainKey} from '@layerzerolabs/ui-core';

export type AptosNetworkConfigs = Partial<Record<ChainKey, AptosNetworkConfig>>;

export interface AptosNetworkConfig {
  nodeUrl: string;
  executorAccount: string;
}
