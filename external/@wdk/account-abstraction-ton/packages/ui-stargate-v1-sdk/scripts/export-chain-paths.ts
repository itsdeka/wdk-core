import fs from 'fs';
import path from 'path';
import type {StargateV1Config} from '../src/types';
import {createProviderFactory} from '../src/test/providerFactory';
import {getChainPaths} from '../src/pools/getChainPaths';
import {isValidChainPath} from '../src/pools/isValidChainPath';
import {mainnet} from '../src/config/mainnet';
import {testnet} from '../src/config/testnet';

// waiting for Node.js 20.11: import.meta.dirname;
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {Stage} from '@layerzerolabs/ui-core';

const stage: Stage = Stage.TESTNET;

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const pools = stage === Stage.MAINNET ? mainnet.pools : testnet.pools;
  const providerFactory = createProviderFactory();
  const chainPathsArray = await Promise.all(
    pools.map((pool) => getChainPaths(pool, providerFactory)),
  );

  const chainPaths = chainPathsArray.flat();

  const validChainPaths = chainPaths.filter(isValidChainPath);

  return validChainPaths;
}

function save(fileName: string, unknown) {
  const destPath = path.join(__dirname, '..', `src/config/${stage}/`, fileName);
  console.log(`Saving to ${destPath}`);
  fs.writeFileSync(destPath, JSON.stringify(unknown, null, 2));
}

main().then((json) => save('chainPaths.json', json));
