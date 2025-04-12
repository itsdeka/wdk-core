import fs from 'fs';
import path from 'path';

import {StargateVersion} from '@layerzerolabs/ui-stargate';
import {
  ERC20__api,
  createFailoverProviderFactory,
  createMulticallProviderFactory,
} from '@layerzerolabs/ui-evm';

import {mainnet} from '../src/config/mainnet';
import {testnet} from '../src/config/testnet';

import {Factory__factory, Pool__factory} from '../src/typechain';
import type {StargateV1Pool} from '../src/types';
import {Stage, getNativeCurrency} from '@layerzerolabs/ui-core';
import {serializePool} from '../src/types/zod';

// waiting for Node.js 20.11: import.meta.dirname;
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isPoolDisabled} from './utils/isPoolDisabled';

const __dirname = dirname(fileURLToPath(import.meta.url));
const stage: Stage = Stage.MAINNET;

async function main() {
  const deployments = stage === Stage.MAINNET ? mainnet.deployments : testnet.deployments;
  const providerFactory = createMulticallProviderFactory(createFailoverProviderFactory());
  const erc20 = new ERC20__api(providerFactory);

  const pools: StargateV1Pool[] = [];
  for (const chainKey in deployments) {
    const deployment = deployments[chainKey];
    if (!deployment.factory) {
      console.log(`Skipping ${chainKey} because it has no factory`);
      continue;
    }
    console.log(`Getting pools for ${chainKey} factory at ${deployment.factory.address}`);
    const chainPools = await getPoolsFromFactory(deployment.factory);
    console.log(`Got ${chainPools.length} pools for ${chainKey}`);
    pools.push(...chainPools);
  }

  return pools;

  async function getPoolsFromFactory({
    address: factory,
    chainKey,
  }: {
    address: string;
    chainKey: string;
  }): Promise<StargateV1Pool[]> {
    const factoryContract = Factory__factory.connect(factory, providerFactory(chainKey));
    const poolCount = await factoryContract.allPoolsLength().then((n) => n.toNumber());
    const promises: Promise<StargateV1Pool>[] = [];

    for (let i = 0; i < poolCount; i++) {
      promises.push(
        factoryContract.allPools(i).then((address) => getPoolByAddress({address, chainKey})),
      );
    }

    return Promise.all(promises);
  }

  async function getPoolByAddress({
    address,
    chainKey,
  }: {
    address: string;
    chainKey: string;
  }): Promise<StargateV1Pool> {
    const poolContract = Pool__factory.connect(address, providerFactory(chainKey));
    const [tokenAddress, poolId, sharedDecimals] = await Promise.all([
      poolContract.token(),
      poolContract.poolId().then((n) => n.toNumber()),
      poolContract.sharedDecimals().then((n) => n.toNumber()),
    ]);

    const [lpToken, poolToken] = await Promise.all([
      erc20.getToken({chainKey, address: address}),
      erc20.getToken({chainKey, address: tokenAddress}),
    ]);

    const token = poolId === 13 ? getNativeCurrency(chainKey) : poolToken;
    const disabled = isPoolDisabled({chainKey, poolId});

    const pool: StargateV1Pool = {
      poolId,
      eid: chainKeyToEndpointId(chainKey),
      chainKey,
      address,
      disabled,
      sharedDecimals,
      stargateVersion: StargateVersion.V1,
      token,
      lpToken,
      symbol: lpToken.symbol,
      decimals: lpToken.decimals,
    };

    return pool;
  }

  function chainKeyToEndpointId(chainKey: string): number {
    const deployment = deployments[chainKey];
    if (deployment) return deployment.eid;

    throw new Error(`No endpointId for chainKey: ${chainKey}`);
  }
}

function save(fileName: string, unknown) {
  const destPath = path.join(__dirname, '..', `src/config/${stage}/`, fileName);
  console.log(`Saving to ${destPath}`);
  fs.writeFileSync(destPath, JSON.stringify(unknown, null, 2));
}

main()
  .then((pools) => pools.map(serializePool))
  .then((json) => save('pools.json', json));
