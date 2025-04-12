import type {ProviderFactory} from '@layerzerolabs/ui-evm';
import {Pool__factory} from '../typechain';
import type {ChainPath, StargateV1Pool} from '../types';

export async function getChainPaths(
  pool: Pick<StargateV1Pool, 'address' | 'chainKey' | 'eid'>,
  providerFactory: ProviderFactory,
): Promise<ChainPath[]> {
  const contract = Pool__factory.connect(pool.address, providerFactory(pool.chainKey));
  const [chainPathsLength, srcPoolId] = await Promise.all([
    contract.getChainPathsLength(),
    contract.poolId(),
  ]);

  const indexes = range(0, chainPathsLength.toNumber());
  const promises = indexes.map((index) => getChainPathByIndex(index));
  const paths = await Promise.all(promises);
  return paths;

  // hoisted utils
  async function getChainPathByIndex(index: number): Promise<ChainPath> {
    const path = await contract.chainPaths(index);

    return {
      srcEid: pool.eid,
      dstEid: path.dstChainId,
      srcPoolId: srcPoolId.toNumber(),
      dstPoolId: path.dstPoolId.toNumber(),
      ready: path.ready,
      weight: path.weight.toNumber(),
    };
  }

  function range(start: number, end: number): number[] {
    return Array.from({length: end - start}, (_, i) => start + i);
  }
}
