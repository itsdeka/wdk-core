import type {Token} from '@layerzerolabs/ui-core';
import type {USDVConfig} from './USDVConfig';
import type {BridgeApi, BridgeOptions, GetOptionsInput} from '@layerzerolabs/ui-bridge-sdk/v1';

export class USDVBridgeBase implements Pick<BridgeApi<unknown>, 'getOptions'> {
  protected usdvTokens: Token[]; // usdv tokens
  constructor(protected readonly config: USDVConfig) {
    this.usdvTokens = Object.values(this.config.deployments).map((d) => d.usdv);
  }

  async getOptions(input: GetOptionsInput): Promise<BridgeOptions> {
    return {options: [{mode: 'taxi'}]};
  }

  getDeployment(chainKey: string) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment) return deployment;
    throw new Error(`No deployment for chainKey: ${chainKey}`);
  }

  tryGetDeployment(chainKey: string) {
    return this.config.deployments[chainKey];
  }

  chainKeyToEndpointId(chainKey: string) {
    const deployment = this.getDeployment(chainKey);
    return deployment.eid;
  }
}
