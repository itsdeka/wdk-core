import path from 'path';
import degit from 'tiged';
import fs from 'fs-extra';
import {EndpointVersion, networkToEndpointId, networkToStage} from '@layerzerolabs/lz-definitions';
import {Stage, endpointIdToChainKey} from '@layerzerolabs/ui-core';
import lodash from 'lodash';
import type {SerializedDeployment} from '../src/types/zod';

// waiting for Node.js 20.11: import.meta.dirname;
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const {camelCase, compact, uniqBy} = lodash;
const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const url =
    'https://github.com/stargate-protocol/stargate-internal/packages/stg-evm-v1/deployments/';
  const log = console;
  const deploymentsPath = path.resolve(fs.mkdtempSync(path.join(__dirname, '../temp-deployments')));
  try {
    log.info(`Downloading deployments from ${url} to ${deploymentsPath}`);
    await degit(url, {mode: 'git', disableCache: true}).clone(deploymentsPath);
    const directories = fs.readdirSync(deploymentsPath, {withFileTypes: true});

    for (const dirent of directories) {
      try {
        if (!dirent.isDirectory()) continue;
        const network = path.basename(dirent.name);
        const stage = networkToStage(network);
        const eid = networkToEndpointId(network, EndpointVersion.V1);
        const chainKey = endpointIdToChainKey(eid);
        const dirPath = path.join(deploymentsPath, dirent.name);

        const factory = tryGetContract(dirPath, 'Factory.json');
        const bridge = tryGetContract(dirPath, 'Bridge.json');
        const router = tryGetContract(dirPath, 'Router.json');
        const routerEth = tryGetFrontendRouterETH(
          tryGetContract(dirPath, 'RouterETH.json'),
          chainKey,
          stage,
        );
        const widgetSwap = tryGetContract(dirPath, 'WidgetSwap.json');
        const stargateToken = tryGetContract(dirPath, 'StargateToken.json');
        const lpStaking = tryGetContract(dirPath, 'LPStaking.json');
        const lpStakingTime = tryGetContract(dirPath, 'LPStakingTime.json');
        const poolView = tryGetContract(dirPath, 'PoolView.json');
        const stargatePreCrime = tryGetContract(dirPath, 'PoolView.json');
        const lpStakingTimeMetis = tryGetContract(dirPath, 'LPStakingTimeMetis.json');

        const deployment: SerializedDeployment = {
          eid,
          factory,
          bridge,
          router,
          routerEth,
          widgetSwap,
          poolView,
          stargateToken,
          stargatePreCrime,
          lpStakingTime: uniqBy(compact([lpStakingTime, lpStakingTimeMetis]), 'address'),
          lpStaking: uniqBy(compact([lpStaking]), 'address'),
        };
        saveDeployment(chainKey, deployment);
        console.log(`Saved deployment for ${dirent.name}`);
      } catch (e) {
        log.error(`Could not get deployment for ${dirent.name}: ${e.message}`);
      }
    }
  } finally {
    fs.rmdirSync(deploymentsPath, {recursive: true});
  }
}

function tryGetContract(dirPath: string, fileName: string) {
  const address = tryGetAddress(dirPath, fileName);
  if (!address) return undefined;
  return {address};
}

function tryGetAddress(dirPath: string, fileName: string) {
  const filePath = path.join(dirPath, fileName);
  if (!fs.existsSync(filePath)) return undefined;
  const address = JSON.parse(fs.readFileSync(filePath, 'utf8')).address;
  if (typeof address === 'string') return address;
  return undefined;
}

function saveDeployment(chainKey: string, deployment) {
  const filePath = path.join(__dirname, `../src/deployments/${chainKey}/index.ts`);
  const content = [
    `import {SerializedDeployment} from '../../types/zod';`,
    '', // empty line
    `export const ${camelCase(chainKey)}: SerializedDeployment = ${JSON.stringify(
      deployment,
      null,
      2,
    )}`,
  ].join('\n');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function tryGetFrontendRouterETH(
  routerEth: {address: string} | undefined,
  chainKey: string,
  stage: string,
) {
  if (stage !== Stage.MAINNET) return routerEth;
  // frontend uses different RouterETH contract - one that cannot send payload
  // https://stargateprotocol.gitbook.io/stargate/developers/contract-addresses/mainnet
  const FRONTEND_ROUTER_ETH = {
    ethereum: '0x150f94B44927F078737562f0fcF3C95c01Cc2376',
    arbitrum: '0xbf22f0f184bCcbeA268dF387a49fF5238dD23E40',
    optimism: '0xB49c4e680174E331CB0A7fF3Ab58afC9738d5F8b',
    base: '0x50B6EbC2103BFEc165949CC946d739d5650d7ae4',
    linea: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
  };
  const override = FRONTEND_ROUTER_ETH[chainKey];
  if (!override) throw new Error(`No frontend RouterETH override for ${chainKey}`);
  return {address: override};
}

main();
