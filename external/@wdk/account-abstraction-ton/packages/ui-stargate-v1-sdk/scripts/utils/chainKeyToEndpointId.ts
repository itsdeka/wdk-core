import {coreModule} from '@layerzerolabs/ui-core';

export function chainKeyToEndpointId(chainKey: string, version: number) {
  for (const deployment of coreModule.getDeployments()) {
    const isValidVersion = version === 1 ? !!deployment.endpointV1 : !!deployment.endpointV2;
    const isValidChainKey = deployment.chainKey === chainKey;
    if (isValidChainKey && isValidVersion) {
      return deployment.eid;
    }
  }
  throw new Error(`Could not find deployment for chainKey: ${chainKey}`);
}
