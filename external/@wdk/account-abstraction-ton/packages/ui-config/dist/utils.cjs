'use strict';

var path = require('path');
var fs = require('fs');
var degit = require('tiged');
var glob = require('glob');
var lzDefinitions = require('@layerzerolabs/lz-definitions');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);
var fs__default = /*#__PURE__*/_interopDefault(fs);
var degit__default = /*#__PURE__*/_interopDefault(degit);

// src/utils.ts
var DEPRECATED_CHAINS = ["base-goerli", "goerli", "zksync-testnet"];
var DEPRECATED_ENDPOINTS = [
  10234,
  // chainKey: venn-testnet
  10237,
  // chainKey: xchain-testnet
  40158,
  // zkpolygon
  40172,
  // kava-testnet
  40195,
  // wanchain-testnet,zora-testnet
  40201,
  // aurora-testnet
  40234,
  // venn-testnet
  40237
  // xchain-testnet
];
var PRIVATE_CHAINS = ["rc1-testnet", "tiltyard", "tron-testnet", "zksync-sepolia"];
var PRIVATE_ENDPOINTS = [
  10206,
  // chainKey: spruce-testnet
  10207,
  // chainKey: pgjjtk-testnet
  10208,
  // chainKey: oda-testnet
  10209,
  // chainKey: kiwi-testnet
  10233,
  // chainKey: bera-testnet
  10236,
  // gunzilla-testnet
  10241,
  // chainKey: kiwi2-testnet
  40259
  // exocore-testnet
];
var DVNS = {
  "DVNBlockhunters.json": {
    provider: "blockhunters",
    name: "Blockhunters"
  },
  "DVNBlockdaemon.json": {
    provider: "blockdaemon",
    name: "Blockdaemon"
  },
  "DVNBware.json": {
    provider: "bware",
    name: "Bware"
  },
  "DVNHorizen.json": {
    provider: "horizen",
    name: "Horizen"
  },
  "DVNGCDA.json": {
    provider: "gcda",
    name: "GCDA"
  },
  "DVNTapioca.json": {
    provider: "tapioca",
    name: "Tapioca"
  },
  "DVNPlanetarium.json": {
    provider: "planetarium",
    name: "Planetarium"
  },
  "DVNNodesguru.json": {
    provider: "nodesguru",
    name: "Nodesguru"
  },
  "DVNNethermind.json": {
    provider: "nethermind",
    name: "Nethermind"
  },
  "DVNAnimoca.json": {
    provider: "animoca",
    name: "Animoca"
  },
  "DVNLagrange.json": {
    provider: "lagrange",
    name: "Lagrange"
  },
  "DVNStablelab.json": {
    provider: "stablelab",
    name: "Stablelab"
  },
  "DVNRepublic.json": {
    provider: "republic",
    name: "Republic"
  },
  "DVNNocturnal.json": {
    provider: "nocturnal",
    name: "Nocturnal"
  },
  "DVNMIM.json": {
    provider: "mim",
    name: "MIM"
  },
  "CCIPDVNAdapter.json": {
    provider: "ccip",
    name: "CCIP"
  },
  "AxelarDVNAdapter.json": {
    provider: "axelar",
    name: "Axelar"
  }
  // to-do: add 3rd party DVNs (e.g., polyhedra)
};
async function readV2DvnsFromMonorepo() {
  const url = "https://github.com/LayerZero-Labs/monorepo/packages/layerzero-v2/evm/sdk/deployments";
  const tempPath = path__default.default.resolve(fs__default.default.mkdtempSync("temp-deployments-"));
  const log = console;
  try {
    log.info(`Downloading deployments from ${url} to ${tempPath}`);
    await degit__default.default(url, { mode: "git", disableCache: false }).clone(tempPath);
    const deploymentsPaths = glob.globSync(path__default.default.join(tempPath, "./*/"));
    const dvns = [];
    for (const deploymentPath of deploymentsPaths) {
      const network = path__default.default.basename(deploymentPath);
      try {
        const eid = lzDefinitions.networkToEndpointId(network, lzDefinitions.EndpointVersion.V2);
        const chainKey = lzDefinitions.endpointIdToChainKey(eid);
        if (PRIVATE_CHAINS.includes(chainKey))
          continue;
        if (PRIVATE_ENDPOINTS.includes(eid))
          continue;
        for (const fileName in DVNS) {
          const name = DVNS[fileName].name;
          const address = tryGetAddress(deploymentPath, fileName);
          if (!address)
            continue;
          const dvn = {
            name,
            address,
            chainKey,
            eid
          };
          dvns.push(dvn);
        }
      } catch (e) {
        if (e instanceof Error) {
          log.error(`Could not get deployment for ${network}: ${e.message}`);
        }
        log.error(e);
      }
    }
    return sortByEid(sortByName(dvns));
  } finally {
    fs__default.default.rmdirSync(tempPath, { recursive: true });
  }
}
async function readV2DeploymentsFromMonorepo() {
  const url = "https://github.com/LayerZero-Labs/monorepo/packages/layerzero-v2/evm/sdk/deployments";
  const tempPath = path__default.default.resolve(fs__default.default.mkdtempSync("temp-deployments-"));
  const log = console;
  try {
    log.info(`Downloading deployments from ${url} to ${tempPath}`);
    await degit__default.default(url, { mode: "git", disableCache: false }).clone(tempPath);
    const deploymentsPaths = glob.globSync(path__default.default.join(tempPath, "./*/"));
    const deployments = [];
    for (const deploymentPath of deploymentsPaths) {
      const network = path__default.default.basename(deploymentPath);
      try {
        const stage = lzDefinitions.networkToStage(network);
        const eid = lzDefinitions.networkToEndpointId(network, lzDefinitions.EndpointVersion.V2);
        const chainKey = lzDefinitions.endpointIdToChainKey(eid);
        if (PRIVATE_CHAINS.includes(chainKey))
          continue;
        if (PRIVATE_ENDPOINTS.includes(eid))
          continue;
        if (stage === "sandbox")
          continue;
        const isDeprecated = DEPRECATED_CHAINS.includes(chainKey) || DEPRECATED_ENDPOINTS.includes(eid) || void 0;
        const lzExecutor = tryGetContract(deploymentPath, "LzExecutor.json");
        const endpointV2 = tryGetContract(deploymentPath, "EndpointV2.json");
        const executor = tryGetContract(deploymentPath, "Executor.json");
        const sendUln301 = tryGetContract(deploymentPath, "SendUln301.json");
        const sendUln302 = tryGetContract(deploymentPath, "SendUln302.json");
        const receiveUln301 = tryGetContract(deploymentPath, "ReceiveUln301.json");
        const receiveUln302 = tryGetContract(deploymentPath, "ReceiveUln302.json");
        if (!endpointV2)
          throw new Error(`No endpointV2 found for ${network}`);
        const deployment = {
          version: 2,
          stage,
          eid,
          chainKey,
          isDeprecated,
          executor,
          lzExecutor,
          endpointV2,
          sendUln301,
          sendUln302,
          receiveUln301,
          receiveUln302
        };
        deployments.push(deployment);
      } catch (e) {
        if (e instanceof Error) {
          log.error(`Could not get deployment for ${network}: ${e.message}`);
        }
        log.error(e);
      }
    }
    return sortByEid(deployments);
  } finally {
    fs__default.default.rmdirSync(tempPath, { recursive: true });
  }
}
async function readDeploymentsFromApi() {
  const url = "https://metadata.layerzero-api.com/v1/metadata/deployments";
  const data = await (await fetch(url)).json();
  return Object.entries(data).map(([chainKey, config]) => {
    const deployments = config.deployments || [];
    return deployments.map((deployment) => ({
      ...deployment,
      eid: Number(deployment.eid)
    }));
  }).flat();
}
async function readDvnsFromApi() {
  const url = "https://metadata.layerzero-api.com/v1/metadata/deployments";
  const data = await (await fetch(url)).json();
  return Object.entries(data).map(([chainKey, config]) => {
    const dvns = config.dvns || {};
    const versionEids = config.deployments?.reduce((versionMap, deployment) => {
      return {
        ...versionMap,
        [deployment.version]: Number(deployment.eid)
      };
    }, {}) || {};
    return Object.entries(dvns).map(([address, dvnConfig]) => {
      return {
        name: dvnConfig.canonicalName,
        address,
        chainKey,
        eid: versionEids[dvnConfig.version] ?? 0
      };
    });
  }).flat();
}
async function readV1DeploymentsFromMonorepo() {
  const url = "https://github.com/LayerZero-Labs/monorepo/packages/layerzero-v1/evm/sdk";
  const tempPath = path__default.default.resolve(fs__default.default.mkdtempSync("temp-deployments-"));
  const log = console;
  try {
    log.info(`Downloading deployments from ${url} to ${tempPath}`);
    await degit__default.default(url, { mode: "git", disableCache: false }).clone(tempPath);
    const deploymentsPaths = glob.globSync(`${tempPath}/deployments/*/`);
    const deployments = [];
    for (const deploymentPath of deploymentsPaths) {
      const network = path__default.default.basename(deploymentPath);
      try {
        const stage = lzDefinitions.networkToStage(network);
        const eid = lzDefinitions.networkToEndpointId(network, lzDefinitions.EndpointVersion.V1);
        const chainKey = lzDefinitions.endpointIdToChainKey(eid);
        if (PRIVATE_CHAINS.includes(chainKey))
          continue;
        if (PRIVATE_ENDPOINTS.includes(eid))
          continue;
        if (stage === "sandbox")
          continue;
        const isDeprecated = DEPRECATED_CHAINS.includes(chainKey) || DEPRECATED_ENDPOINTS.includes(eid) || void 0;
        const endpoint = tryGetContract(deploymentPath, "Endpoint.json");
        const relayer = tryGetContract(deploymentPath, "Relayer.json");
        const relayerV2 = tryGetContract(deploymentPath, "RelayerV2.json");
        const ultraLightNode = tryGetContract(deploymentPath, "UltraLightNode.json");
        const ultraLightNodeV2 = tryGetContract(deploymentPath, "UltraLightNodeV2.json");
        if (!endpoint)
          throw new Error(`No endpoint found for ${network}`);
        const deployment = {
          version: 1,
          stage,
          eid,
          chainKey,
          endpoint,
          isDeprecated,
          relayer,
          relayerV2,
          ultraLightNode,
          ultraLightNodeV2
        };
        deployments.push(deployment);
      } catch (e) {
        if (e instanceof Error) {
          log.error(`Could not get deployment for ${network}: ${e.message}`);
        }
        log.error(e);
      }
    }
    return sortByEid(deployments);
  } finally {
    fs__default.default.rmdirSync(tempPath, { recursive: true });
  }
}
var tryGetContract = (dirPath, fileName) => {
  const address = tryGetAddress(dirPath, fileName);
  return address ? { address } : void 0;
};
function tryGetAddress(dirPath, fileName) {
  const filePath = path__default.default.join(dirPath, fileName);
  if (!fs__default.default.existsSync(filePath))
    return void 0;
  const address = JSON.parse(fs__default.default.readFileSync(filePath, "utf8")).address;
  if (typeof address === "string")
    return address.toLowerCase();
  return void 0;
}
function sortByEid(deployments) {
  return deployments.sort((a, b) => a.eid - b.eid);
}
function sortByName(dvns) {
  return dvns.sort((a, b) => a.name.localeCompare(b.name));
}

exports.readDeploymentsFromApi = readDeploymentsFromApi;
exports.readDvnsFromApi = readDvnsFromApi;
exports.readV1DeploymentsFromMonorepo = readV1DeploymentsFromMonorepo;
exports.readV2DeploymentsFromMonorepo = readV2DeploymentsFromMonorepo;
exports.readV2DvnsFromMonorepo = readV2DvnsFromMonorepo;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=utils.cjs.map