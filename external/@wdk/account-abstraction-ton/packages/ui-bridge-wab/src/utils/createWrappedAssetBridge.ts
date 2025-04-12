import type {ProviderFactory} from '@layerzerolabs/ui-evm';
import type {Signer} from 'ethers';

import {OriginalTokenBridge} from '../api/OriginalTokenBridge';
import {WrappedTokenBridge} from '../api/WrappedTokenBridge';
import type {AbstractTokenBridge} from '../api/AbstractTokenBridge';
import type {WrappedAssetBridgeConfig} from '../types/WrappedAssetBridgeConfig';

export function createWrappedAssetBridge(
  config: WrappedAssetBridgeConfig,
  providerFactory: ProviderFactory,
): AbstractTokenBridge<Signer>[] {
  const bridges: AbstractTokenBridge<Signer>[] = [];
  for (const deployment of Object.values(config.deployments)) {
    if (deployment.bridgeOriginal) {
      const bridge = new OriginalTokenBridge(providerFactory, deployment.bridgeOriginal, config);
      bridges.push(bridge);
    }
    if (deployment.bridgeWrapped) {
      const bridge = new WrappedTokenBridge(providerFactory, deployment.bridgeWrapped, config);
      bridges.push(bridge);
    }
  }
  return bridges;
}
