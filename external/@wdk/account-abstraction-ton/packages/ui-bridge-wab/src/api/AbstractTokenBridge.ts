import {
  type BridgeApi,
  type BridgeOption,
  type BridgeOptions,
  type GetOptionsInput,
  type TransferInput,
  validateInput,
} from '@layerzerolabs/ui-bridge-sdk/v1';
import type {ChainKey, CurrencyAmount} from '@layerzerolabs/ui-core';
import type {WrappedAssetBridgeConfig} from '../types/WrappedAssetBridgeConfig';

export type BridgeFee = {bridgeFee: CurrencyAmount};

export type AbstractTokenBridge<Signer> = BridgeApi<Signer, BridgeFee>;

export abstract class BaseTokenBridge {
  constructor(protected config: WrappedAssetBridgeConfig) {}

  async getOptions(input: GetOptionsInput): Promise<BridgeOptions> {
    const taxiOption: BridgeOption = {
      mode: 'taxi',
    };
    return {options: [taxiOption]};
  }

  protected chainKeyToEndpointId(chainKey: string): number {
    const deployment = this.getDeployment(chainKey);
    return deployment.eid;
  }

  protected tryGetDeployment(chainKey: ChainKey) {
    const deployment = this.config.deployments[chainKey];
    // adding this condition so TS understands there can be no deployment
    if (deployment) return deployment;
    return undefined;
  }

  protected getDeployment(chainKey: ChainKey) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment) return deployment;
    throw new Error(`No deployment for ${chainKey}`);
  }

  protected validateInput(input: TransferInput): asserts input is Required<TransferInput> {
    validateInput(input);
  }
}
