import path from 'path';
import degit from 'tiged';
import fs from 'fs-extra';
import {
  EndpointVersion,
  networkToEndpointId as networkToEndpointIdBase,
  networkToStage as networkToStageBase,
} from '@layerzerolabs/lz-definitions';
import {
  endpointIdToChainKey as endpointIdToChainKeyBase,
  getNativeCurrency,
  Stage,
  type Token,
} from '@layerzerolabs/ui-core';
import {ERC20__api} from '@layerzerolabs/ui-evm';
// todo: use schema for JSON and Config for object
import type {
  SerializedStargateV2Config,
  SerializedStargateV2StakingConfig,
  SerializedStargateV2TokenMessagingConfig,
} from '../src/types/zod';
import {StargateOFT__factory, StargatePool__factory} from '../src/typechain';

// waiting for Node.js 20.11: import.meta.dirname;
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {JsonRpcProvider} from '@ethersproject/providers';
import {StargateV2AssetId} from '../src/types/StargateV2AssetId';

const __dirname = dirname(fileURLToPath(import.meta.url));
const log = console;
const requiredStage = Stage.MAINNET;

const STARGATE_API_URL = {
  sandbox: 'https://d1oc18n8di3ccj.cloudfront.net',
  testnet: 'https://d2l228le2lsgpd.cloudfront.net',
  mainnet: 'https://d3k4i7b673n27r.cloudfront.net',
} as const;

async function main() {
  const url = 'https://github.com/stargate-protocol/stargate-v2/packages/stg-evm-v2/deployments/';
  const deploymentsPath = path.resolve(fs.mkdtempSync(path.join(__dirname, '../temp-deployments')));

  try {
    log.info(`Downloading deployments from ${url} to ${deploymentsPath}`);
    await degit(url, {mode: 'git', disableCache: true}).clone(deploymentsPath);
    // Contracts
    // biome-ignore lint/complexity/noUselessLoneBlockStatements: better readability
    {
      saveContractAbi(deploymentsPath, 'StargatePoolUSDC.json', 'StargatePool.json');
      saveContractAbi(deploymentsPath, 'StargateOFTUSDT.json', 'StargateOFT.json');
      saveContractAbi(deploymentsPath, 'StargatePoolNative.json', 'StargatePoolNative.json');
      saveContractAbi(deploymentsPath, 'TokenMessaging.json', 'TokenMessaging.json');
      saveContractAbi(deploymentsPath, 'StargateMultiRewarder.json', 'StargateMultiRewarder.json');
      saveContractAbi(deploymentsPath, 'USDT.json', 'PoolToken.json');
      // saveContractAbi(deploymentsPath, 'OFTTokenBUSD.json', 'OFTToken.json');
      // saveContractAbi(deploymentsPath, 'IntentPoolNative.json', 'IntentPoolNative.json');
      // saveContractAbi(deploymentsPath, 'IntentPoolUSDC.json', 'IntentPool.json');
      // saveContractAbi(deploymentsPath, 'IntentOFTBUSD.json', 'IntentOFT.json');
      saveContractAbi(deploymentsPath, 'FeeLibV1USDC.json', 'FeeLibV1.json');
      saveContractAbi(deploymentsPath, 'StargateStaking.json', 'StargateStaking.json');
    }
    // TokenMessaging
    {
      const config = await parseStargateV2TokenMessagingConfig(deploymentsPath);
      saveTokenMessagingConfig(requiredStage, config);
      console.log(`Saved TokenMessagingConfig`);
    }
    // Stargate
    for (const [assetId, tokenSymbol] of Object.entries(StargateV2AssetId)) {
      const config = await parseStargateV2Config(deploymentsPath, tokenSymbol, assetId);
      saveStargateConfig(tokenSymbol, requiredStage, config);
      console.log(`Saved deployment for ${tokenSymbol}`);
    }
    // Staking
    {
      const config = await parseStargateV2StakingConfig(deploymentsPath);
      saveStakingConfig(requiredStage, config);
      console.log(`Saved StakingConfig`);
    }
  } finally {
    fs.rmdirSync(deploymentsPath, {recursive: true});
  }
}

async function parseStargateV2TokenMessagingConfig(
  deploymentsPath: string,
): Promise<SerializedStargateV2TokenMessagingConfig> {
  const directories = fs.readdirSync(deploymentsPath, {withFileTypes: true});

  const config: SerializedStargateV2TokenMessagingConfig = {
    api: {
      url: STARGATE_API_URL[requiredStage],
    },
    deployments: {},
  };
  for (const dirent of directories) {
    try {
      const network = path.basename(dirent.name);
      const stage = networkToStage(network);
      if (stage !== requiredStage) continue;
      const eid = networkToEndpointId(network, EndpointVersion.V2);
      const chainKey = endpointIdToChainKey(eid);
      const dirPath = path.join(deploymentsPath, dirent.name);

      const tokenMessaging = tryGetContract(dirPath, 'TokenMessaging.json');

      if (!tokenMessaging) throw new Error(`No TokenMessaging deployment for ${chainKey}`);

      config.deployments[chainKey] = {
        eid,
        tokenMessaging,
      };
    } catch (e) {
      log.error(`Could not get deployment for ${dirent.name}: ${e.message}`);
    }
  }
  return config;
}

async function parseStargateV2StakingConfig(
  deploymentsPath: string,
): Promise<SerializedStargateV2StakingConfig> {
  const directories = fs.readdirSync(deploymentsPath, {withFileTypes: true});
  const config: SerializedStargateV2StakingConfig = {
    deployments: {},
  };
  for (const dirent of directories) {
    try {
      const network = path.basename(dirent.name);
      const stage = networkToStage(network);
      if (stage !== requiredStage) continue;
      const eid = networkToEndpointId(network, EndpointVersion.V2);
      const chainKey = endpointIdToChainKey(eid);
      const dirPath = path.join(deploymentsPath, dirent.name);

      const stargateStaking = tryGetContract(dirPath, 'StargateStaking.json');
      const stargateMultiRewarder = tryGetContract(dirPath, 'StargateMultiRewarder.json');

      if (!stargateStaking) {
        // no StargateStaking deployment
        continue;
      }
      if (!stargateMultiRewarder)
        throw new Error(`No StargateMultiRewarder deployment for ${chainKey}`);

      config.deployments[chainKey] = {
        stargateStaking,
        stargateMultiRewarder,
      };
    } catch (e) {
      log.error(`Could not get deployment for ${dirent.name}: ${e.message}`);
    }
  }
  return config;
}

async function parseStargateV2Config(
  deploymentsPath: string,
  tokenSymbol: string,
  assetId: number | string,
): Promise<SerializedStargateV2Config> {
  const directories = fs.readdirSync(deploymentsPath, {withFileTypes: true});
  const config: SerializedStargateV2Config = {
    assetId: Number(assetId),
    deployments: {},
    // todo: verify
    sharedDecimals: 6,
  };
  for (const dirent of directories) {
    try {
      if (!dirent.isDirectory()) continue;
      const network = path.basename(dirent.name);
      const stage = networkToStage(network);
      if (stage !== requiredStage) continue;
      const eid = networkToEndpointId(network, EndpointVersion.V2);
      const chainKey = endpointIdToChainKey(eid);
      const dirPath = path.join(deploymentsPath, dirent.name);

      const stargatePool = tryGetContract(dirPath, `StargatePool${tokenSymbol}.json`);
      const stargatePoolNative = tryGetContract(dirPath, `StargatePoolNative.json`);
      const stargateOft = tryGetContract(dirPath, `StargateOFT${tokenSymbol}.json`);
      // const poolToken = tryGetContract(dirPath, `PoolToken${tokenSymbol}.json`);
      // const oftToken = tryGetContract(dirPath, `OFTToken${tokenSymbol}.json`);
      // const intentPool = tryGetContract(dirPath, `IntentPool${tokenSymbol}.json`);
      // const intentPoolNative = tryGetContract(dirPath, `IntentPoolNative.json`);
      // const intentOft = tryGetContract(dirPath, `IntentOFT${tokenSymbol}.json`);
      const tokenMessaging = tryGetContract(dirPath, `TokenMessaging.json`);
      const feeLibV1 = tryGetContract(dirPath, `FeeLibV1${tokenSymbol}.json`);

      if (!stargatePool && !stargatePoolNative && !stargateOft) {
        // no Stargate deployment for this token
        continue;
      }

      if (!feeLibV1) {
        // no FeeLibV1 deployment for this token
        continue;
      }

      if (!tokenMessaging) {
        // no TokenMessaging deployment for this token
        continue;
      }

      // order matters
      const currency = await (stargatePool
        ? getStargatePoolCurrency({chainKey, address: stargatePool.address})
        : stargateOft
          ? getStargateOftCurrency({chainKey, address: stargateOft.address})
          : stargatePoolNative
            ? getStargatePoolNativeCurrency({chainKey, address: stargatePoolNative.address})
            : panic(`No currency for ${tokenSymbol} on ${chainKey}`)
      ).catch(failWithMessage(`Could not get currency for ${tokenSymbol} on ${chainKey}`));

      const pool = stargatePool ?? stargatePoolNative;

      const lpToken = pool
        ? await getStargatePoolLpToken({chainKey, address: pool.address}).catch(
            failWithMessage(
              `Could not get LP token for ${tokenSymbol} on ${chainKey}:${pool.address}`,
            ),
          )
        : undefined;

      config.deployments[chainKey] = {
        eid,
        token: serializeCurrency(currency),
        lpToken: lpToken && serializeToken(lpToken),
        feeLib: feeLibV1,
        tokenMessaging,
      };
      // stargate can be one of the following:
      if (stargateOft) {
        config.deployments[chainKey].stargateOft = stargateOft;
      } else if (stargatePool) {
        config.deployments[chainKey].stargatePool = stargatePool;
      } else if (stargatePoolNative) {
        config.deployments[chainKey].stargatePoolNative = stargatePoolNative;
      } else {
        throw new Error(`No stargate deployment for ${tokenSymbol} on ${chainKey}`);
      }
    } catch (e) {
      log.error(`Could not get deployment for ${dirent.name}: ${e.message}`);
    }
  }
  return config;
}

function failWithMessage(message: string) {
  return (error: unknown) => {
    console.log(message);
    throw error;
  };
}

// overrides
function endpointIdToChainKey(eid: number) {
  if (eid === 50121) return 'ethereum-sandbox';
  if (eid === 50109) return 'polygon-sandbox';
  if (eid === 50151) return 'metis-sandbox';
  if (eid === 50102) return 'bsc-sandbox';
  return endpointIdToChainKeyBase(eid);
}

function networkToStage(network: string) {
  if (network.includes('sandbox')) return 'sandbox';
  return networkToStageBase(network);
}

function networkToEndpointId(network: string, version: EndpointVersion) {
  if (network === 'ethereum-sandbox-local') return 50121;
  if (network === 'polygon-sandbox-local') return 50109;
  if (network === 'metis-sandbox-local') return 50151;
  if (network === 'bsc-sandbox-local') return 50102;
  return networkToEndpointIdBase(network, version);
}

const erc20 = new ERC20__api(providerFactory);

function providerFactory(chainKey: string) {
  const rpcs = {
    'ethereum-sandbox': 'http://ethereum.lz-localnet.org:8545',
    'polygon-sandbox': 'http://polygon.lz-localnet.org:8545',
    'metis-sandbox': 'http://metis.lz-localnet.org:8545',
    'bsc-sandbox': 'http://bsc.lz-localnet.org:8545',
    'sepolia-testnet': 'https://rpc2.sepolia.org',
    'bsc-testnet': 'https://data-seed-prebsc-1-s2.bnbchain.org:8545',
    'arbitrum-sepolia': 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public',
    'optimism-sepolia': 'https://optimism-sepolia.blockpi.network/v1/rpc/public',
    'klaytn-baobab': 'https://public-en-baobab.klaytn.net',
    sepolia: 'https://rpc2.sepolia.org',
    ethereum: 'https://cloudflare-eth.com',
    fantom: 'https://fantom.drpc.org',
    optimism: 'https://mainnet.optimism.io',
    polygon: 'https://polygon-rpc.com',
    arbitrum: 'https://arb1.arbitrum.io/rpc',
    avalanche: 'https://api.avax.network/ext/bc/C/rpc',
    bsc: 'https://bscrpc.com',
    zkevm: 'https://zkevm-rpc.com',
    astar: 'https://rpc.astar.network:854',
    base: 'https://base.blockpi.network/v1/rpc/public',
    blast: 'https://blast.drpc.org',
    metis: 'https://andromeda.metis.io/?owner=1088',
    mantle: 'https://rpc.mantle.xyz',
    linea: 'https://rpc.linea.build',
    zksync: 'https://mainnet.era.zksync.io',
    scroll: 'https://scroll.drpc.org',
    moonriver: 'https://moonriver.drpc.org',
    kava: 'https://evm.kava.io',
    mode: 'https://mainnet.mode.network',
    klaytn: 'https://public-en-cypress.klaytn.net',
    aurora: 'https://mainnet.aurora.dev',
    ebi: 'https://rpc.ebi.xyz',
    iota: 'https://json-rpc.evm.iotaledger.net',
    sei: 'https://evm-rpc.sei-apis.com',
    taiko: 'https://rpc.mainnet.taiko.xyz',
    xchain: 'https://xchain-rpc.idex.io',
    rarible: 'https://mainnet.rpc.rarichain.org/http',
    flare: 'https://flare-api.flare.network/ext/C/rpc',
    gravity: 'https://rpc.gravity.xyz',
  };

  const rpc = rpcs[chainKey];
  if (!rpc) throw new Error(`No RPC found for ${chainKey}`);
  const provider = new JsonRpcProvider(rpc);
  return provider;
}

async function getStargatePoolLpToken(pool: {address: string; chainKey: string}) {
  const stargatePoolContract = StargatePool__factory.connect(
    pool.address,
    providerFactory(pool.chainKey),
  );
  const lpTokenAddress = await stargatePoolContract.lpToken();
  const lpToken = erc20.getToken({
    chainKey: pool.chainKey,
    address: lpTokenAddress,
  });
  return lpToken;
}

async function getStargatePoolCurrency(stargatePool: {address: string; chainKey: string}) {
  const stargatePoolContract = StargatePool__factory.connect(
    stargatePool.address,
    providerFactory(stargatePool.chainKey),
  );
  const currencyAddress = await stargatePoolContract.token();
  return erc20
    .getToken({
      chainKey: stargatePool.chainKey,
      address: currencyAddress,
    })
    .catch(
      failWithMessage(
        `Could not get StargatePool currency for pool on ${stargatePool.chainKey}:${stargatePool.address}`,
      ),
    );
}

async function getStargateOftCurrency(stargateOft: {address: string; chainKey: string}) {
  const stargateOftContract = StargateOFT__factory.connect(
    stargateOft.address,
    providerFactory(stargateOft.chainKey),
  );
  const token = await stargateOftContract.token();
  return erc20
    .getToken({address: token, chainKey: stargateOft.chainKey})
    .catch(
      failWithMessage(
        `Could not get StargateOft currency for OFT on ${stargateOft.chainKey}:${stargateOft.address}`,
      ),
    );
}

async function getStargatePoolNativeCurrency(stargateNativePool: {
  address: string;
  chainKey: string;
}) {
  return getNativeCurrency(stargateNativePool.chainKey);
}

function panic(message: string): never {
  throw new Error(message);
}

function serializeToken(token: Token) {
  return {
    name: token.name,
    symbol: token.symbol,
    decimals: token.decimals,
    address: token.address,
  };
}

function serializeCurrency(currency: Token | {symbol: string; decimals: number}) {
  return {
    name: 'name' in currency ? currency.name : undefined,
    symbol: currency.symbol,
    decimals: currency.decimals,
    address: 'address' in currency ? currency.address : undefined,
  };
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

function saveStargateConfig(
  tokenSymbol: string,
  stage: string,
  config: SerializedStargateV2Config,
) {
  const filePath = path.join(__dirname, `../src/config/${stage}/${tokenSymbol.toLowerCase()}.ts`);
  const constantName = `${tokenSymbol}_${stage}`.toUpperCase();
  const content = [
    `import type {StargateV2Config} from '../../types/StargateV2Config';`,
    `import {createConfig} from '../../types/zod';`,
    '', // empty line
    `export const ${constantName}: StargateV2Config = createConfig(${JSON.stringify(
      config,
      null,
      2,
    )})`,
  ].join('\n');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function saveTokenMessagingConfig(stage: string, config: SerializedStargateV2TokenMessagingConfig) {
  const filePath = path.join(__dirname, `../src/config/${stage}/tokenMessaging.ts`);
  const constantName = `TOKEN_MESSAGING_${stage}`.toUpperCase();
  const content = [
    `import type {StargateV2TokenMessagingConfig} from '../../types/zod';`,
    '', // empty line
    `export const ${constantName}: StargateV2TokenMessagingConfig = (${JSON.stringify(
      config,
      null,
      2,
    )})`,
  ].join('\n');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function saveStakingConfig(stage: string, config: SerializedStargateV2StakingConfig) {
  const filePath = path.join(__dirname, `../src/config/${stage}/stargateStaking.ts`);
  const constantName = `STARGATE_V2_STAKING_${stage}`.toUpperCase();
  const content = [
    `import type {SerializedStargateV2StakingConfig} from '../../types/zod';`,
    '', // empty line
    `export const ${constantName}: SerializedStargateV2StakingConfig = (${JSON.stringify(
      config,
      null,
      2,
    )})`,
  ].join('\n');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function saveContractAbi(
  deploymentsPath: string,
  deploymentsFileName: string,
  abiFileName: string,
) {
  const directories = fs.readdirSync(deploymentsPath, {withFileTypes: true});
  for (const dirent of directories) {
    if (!dirent.isDirectory()) continue;
    const srcFilePath = path.join(deploymentsPath, dirent.name, deploymentsFileName);
    const dstFilePath = path.join(__dirname, `../src/evm/abi/${abiFileName}`);
    if (!fs.existsSync(srcFilePath)) continue;
    const contract: {abi: unknown} = JSON.parse(fs.readFileSync(srcFilePath, 'utf8'));
    fs.writeFileSync(dstFilePath, JSON.stringify(contract.abi, null, 2));
    return;
  }
  throw new Error(`Could not find ${deploymentsFileName}`);
}

main();
