import {createMulticallProviderFactory, createFailoverProviderFactory} from '@layerzerolabs/ui-evm';

export function createProviderFactory() {
  const multicall = createMulticallProviderFactory(createFailoverProviderFactory());
  return multicall;
}
