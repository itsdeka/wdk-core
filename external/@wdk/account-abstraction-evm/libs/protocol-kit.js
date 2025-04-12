"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/Safe.ts
import {
  OperationType as OperationType3,
  SigningMethod as SigningMethod2
} from "@safe-global/types-kit";

// src/contracts/utils.ts
import {
  concat as concat2,
  getContractAddress,
  isAddress as isAddress4,
  keccak256 as keccak2562,
  pad,
  parseAbi as parseAbi3,
  toHex as toHex3,
  toEventHash,
  decodeEventLog
} from "viem";
import { waitForTransactionReceipt } from "viem/actions";

// src/contracts/config.ts
import {
  getCompatibilityFallbackHandlerDeployments,
  getCreateCallDeployments,
  getMultiSendCallOnlyDeployments,
  getMultiSendDeployments,
  getProxyFactoryDeployments,
  getSafeL2SingletonDeployments,
  getSafeSingletonDeployments,
  getSignMessageLibDeployments,
  getSimulateTxAccessorDeployments
} from "@safe-global/safe-deployments";
import {
  getSafeWebAuthnSignerFactoryDeployment,
  getSafeWebAuthnShareSignerDeployment
} from "@safe-global/safe-modules-deployments";
var DEFAULT_SAFE_VERSION = "1.4.1";
var SAFE_SINGLETON_ADDRESS = "0x29fcB43b46531BcA003ddC8FCB67FFE91900C762"
var safeDeploymentsVersions = {
  "1.4.1": {
    safeSingletonVersion: "1.4.1",
    safeSingletonL2Version: "1.4.1",
    safeProxyFactoryVersion: "1.4.1",
    compatibilityFallbackHandler: "1.4.1",
    multiSendVersion: "1.4.1",
    multiSendCallOnlyVersion: "1.4.1",
    signMessageLibVersion: "1.4.1",
    createCallVersion: "1.4.1",
    simulateTxAccessorVersion: "1.4.1",
    safeWebAuthnSignerFactoryVersion: "0.2.1",
    safeWebAuthnSharedSignerVersion: "0.2.1"
  },
  "1.3.0": {
    safeSingletonVersion: "1.3.0",
    safeSingletonL2Version: "1.3.0",
    safeProxyFactoryVersion: "1.3.0",
    compatibilityFallbackHandler: "1.3.0",
    multiSendVersion: "1.3.0",
    multiSendCallOnlyVersion: "1.3.0",
    signMessageLibVersion: "1.3.0",
    createCallVersion: "1.3.0",
    simulateTxAccessorVersion: "1.3.0",
    safeWebAuthnSignerFactoryVersion: "0.2.1",
    safeWebAuthnSharedSignerVersion: "0.2.1"
  },
  "1.2.0": {
    safeSingletonVersion: "1.2.0",
    safeSingletonL2Version: void 0,
    safeProxyFactoryVersion: "1.1.1",
    compatibilityFallbackHandler: "1.3.0",
    multiSendVersion: "1.1.1",
    multiSendCallOnlyVersion: "1.3.0",
    signMessageLibVersion: "1.3.0",
    createCallVersion: "1.3.0",
    safeWebAuthnSignerFactoryVersion: void 0,
    safeWebAuthnSharedSignerVersion: void 0
  },
  "1.1.1": {
    safeSingletonVersion: "1.1.1",
    safeSingletonL2Version: void 0,
    safeProxyFactoryVersion: "1.1.1",
    compatibilityFallbackHandler: "1.3.0",
    multiSendVersion: "1.1.1",
    multiSendCallOnlyVersion: "1.3.0",
    signMessageLibVersion: "1.3.0",
    createCallVersion: "1.3.0",
    safeWebAuthnSignerFactoryVersion: void 0,
    safeWebAuthnSharedSignerVersion: void 0
  },
  "1.0.0": {
    safeSingletonVersion: "1.0.0",
    safeSingletonL2Version: void 0,
    safeProxyFactoryVersion: "1.0.0",
    compatibilityFallbackHandler: "1.3.0",
    multiSendVersion: "1.1.1",
    multiSendCallOnlyVersion: "1.3.0",
    signMessageLibVersion: "1.3.0",
    createCallVersion: "1.3.0",
    safeWebAuthnSignerFactoryVersion: void 0,
    safeWebAuthnSharedSignerVersion: void 0
  }
};
var safeDeploymentsL1ChainIds = [
  1n
  // Ethereum Mainnet
];
var contractFunctions = {
  safeSingletonVersion: getSafeSingletonDeployments,
  safeSingletonL2Version: getSafeL2SingletonDeployments,
  safeProxyFactoryVersion: getProxyFactoryDeployments,
  compatibilityFallbackHandler: getCompatibilityFallbackHandlerDeployments,
  multiSendVersion: getMultiSendDeployments,
  multiSendCallOnlyVersion: getMultiSendCallOnlyDeployments,
  signMessageLibVersion: getSignMessageLibDeployments,
  createCallVersion: getCreateCallDeployments,
  simulateTxAccessorVersion: getSimulateTxAccessorDeployments,
  safeWebAuthnSignerFactoryVersion: getSafeWebAuthnSignerFactoryDeployment,
  safeWebAuthnSharedSignerVersion: getSafeWebAuthnShareSignerDeployment
};
function getContractDeployment(safeVersion, chainId, contractName3) {
  const contractVersion = safeDeploymentsVersions[safeVersion][contractName3];
  const filters = {
    version: contractVersion,
    network: chainId.toString(),
    released: true
  };
  const deployment = contractFunctions[contractName3](filters);
  return deployment;
}
function getContractInfo(contractAddress) {
  for (const [safeVersion, contracts] of Object.entries(safeDeploymentsVersions)) {
    for (const [contractName3, contractVersion] of Object.entries(contracts)) {
      const filters = {
        version: contractVersion,
        released: true
      };
      const deployment = contractFunctions[contractName3](
        filters
      );
      if (deployment && deployment.networkAddresses) {
        for (const [, addresses] of Object.entries(deployment.networkAddresses)) {
          if (Array.isArray(addresses) && addresses.find((a) => a.toLowerCase() === contractAddress.toLowerCase()) || typeof addresses === "string" && addresses.toLowerCase() === contractAddress.toLowerCase()) {
            const types = Object.keys(deployment.deployments);
            const type = types.find(
              (t) => deployment.deployments[t]?.address.toLowerCase() === contractAddress.toLowerCase()
            );
            if (type) {
              return {
                version: safeVersion,
                type,
                contractName: contractName3
              };
            }
          }
        }
      }
    }
  }
  return void 0;
}

// src/utils/constants.ts
import { zeroAddress } from "viem";
var ZERO_ADDRESS = zeroAddress;
var EMPTY_DATA = "0x";
var SENTINEL_ADDRESS = "0x0000000000000000000000000000000000000001";

// src/utils/address.ts
function sameString(str1, str2) {
  return !!str1 && !!str2 && str1.toLowerCase() === str2.toLowerCase();
}
function isZeroAddress(address) {
  return sameString(address, ZERO_ADDRESS);
}
function isSentinelAddress(address) {
  return sameString(address, SENTINEL_ADDRESS);
}
function isRestrictedAddress(address) {
  return isZeroAddress(address) || isSentinelAddress(address);
}

// src/utils/eip-3770/index.ts
import { isAddress } from "viem";

// src/utils/eip-3770/config.ts
var networks = [
  { chainId: 1n, shortName: "eth" },
  { chainId: 3n, shortName: "rop" },
  { chainId: 4n, shortName: "rin" },
  { chainId: 5n, shortName: "gor" },
  { chainId: 10n, shortName: "oeth" },
  { chainId: 11n, shortName: "meta" },
  { chainId: 12n, shortName: "kal" },
  { chainId: 14n, shortName: "flr" },
  { chainId: 16n, shortName: "cflr" },
  { chainId: 18n, shortName: "tst" },
  { chainId: 19n, shortName: "sgb" },
  { chainId: 25n, shortName: "cro" },
  { chainId: 28n, shortName: "bobarinkeby" },
  { chainId: 30n, shortName: "rsk" },
  { chainId: 31n, shortName: "trsk" },
  { chainId: 39n, shortName: "u2u" },
  { chainId: 40n, shortName: "telosevm" },
  { chainId: 41n, shortName: "telosevmtestnet" },
  { chainId: 42n, shortName: "kov" },
  { chainId: 43n, shortName: "pangolin" },
  { chainId: 44n, shortName: "crab" },
  { chainId: 46n, shortName: "darwinia" },
  { chainId: 50n, shortName: "xdc" },
  { chainId: 51n, shortName: "txdc" },
  { chainId: 56n, shortName: "bnb" },
  { chainId: 57n, shortName: "sys" },
  { chainId: 61n, shortName: "etc" },
  { chainId: 63n, shortName: "metc" },
  { chainId: 69n, shortName: "okov" },
  { chainId: 71n, shortName: "cfxtest" },
  { chainId: 81n, shortName: "joc" },
  { chainId: 82n, shortName: "meter" },
  { chainId: 83n, shortName: "meter-test" },
  { chainId: 88n, shortName: "vic" },
  { chainId: 96n, shortName: "bkc" },
  { chainId: 97n, shortName: "bnbt" },
  { chainId: 100n, shortName: "gno" },
  { chainId: 106n, shortName: "vlx" },
  { chainId: 108n, shortName: "tt" },
  { chainId: 109n, shortName: "shibariumecosystem" },
  { chainId: 111n, shortName: "etl" },
  { chainId: 114n, shortName: "c2flr" },
  { chainId: 122n, shortName: "fuse" },
  { chainId: 123n, shortName: "spark" },
  { chainId: 130n, shortName: "unichain" },
  { chainId: 133n, shortName: "HSKT" },
  { chainId: 137n, shortName: "matic" },
  { chainId: 146n, shortName: "sonic" },
  { chainId: 148n, shortName: "shimmerevm" },
  { chainId: 155n, shortName: "tenet-testnet" },
  { chainId: 169n, shortName: "manta" },
  { chainId: 177n, shortName: "hsk" },
  { chainId: 179n, shortName: "abey" },
  { chainId: 181n, shortName: "water" },
  { chainId: 195n, shortName: "tokb" },
  { chainId: 196n, shortName: "okb" },
  { chainId: 204n, shortName: "opbnb" },
  { chainId: 240n, shortName: "zkTCRO" },
  { chainId: 246n, shortName: "ewt" },
  { chainId: 250n, shortName: "ftm" },
  { chainId: 252n, shortName: "fraxtal" },
  { chainId: 255n, shortName: "kroma" },
  { chainId: 274n, shortName: "lachain" },
  { chainId: 280n, shortName: "zksync-goerli" },
  { chainId: 282n, shortName: "zkTCRO" },
  { chainId: 288n, shortName: "boba" },
  { chainId: 291n, shortName: "orderly" },
  { chainId: 300n, shortName: "zksync-sepolia" },
  { chainId: 314n, shortName: "filecoin" },
  { chainId: 321n, shortName: "kcs" },
  { chainId: 322n, shortName: "kcst" },
  { chainId: 324n, shortName: "zksync" },
  { chainId: 336n, shortName: "sdn" },
  { chainId: 338n, shortName: "tcro" },
  { chainId: 360n, shortName: "shape" },
  { chainId: 369n, shortName: "pls" },
  { chainId: 388n, shortName: "zkCRO" },
  { chainId: 418n, shortName: "latestnet" },
  { chainId: 420n, shortName: "ogor" },
  { chainId: 424n, shortName: "PGN" },
  { chainId: 466n, shortName: "appchain" },
  { chainId: 478n, shortName: "formnetwork" },
  { chainId: 480n, shortName: "wc" },
  { chainId: 530n, shortName: "FxCore" },
  { chainId: 545n, shortName: "flow-testnet" },
  { chainId: 570n, shortName: "sys-rollux" },
  { chainId: 588n, shortName: "metis-stardust" },
  { chainId: 592n, shortName: "astr" },
  { chainId: 595n, shortName: "maca" },
  { chainId: 599n, shortName: "metis-goerli" },
  { chainId: 648n, shortName: "ace" },
  { chainId: 686n, shortName: "kar" },
  { chainId: 690n, shortName: "redstone" },
  { chainId: 747n, shortName: "flow-mainnet" },
  { chainId: 787n, shortName: "aca" },
  { chainId: 919n, shortName: "modesep" },
  { chainId: 938n, shortName: "haust" },
  { chainId: 943n, shortName: "t4pls" },
  { chainId: 970n, shortName: "ccn" },
  { chainId: 995n, shortName: "5ire" },
  { chainId: 1001n, shortName: "baobab" },
  { chainId: 1008n, shortName: "eun" },
  { chainId: 1030n, shortName: "cfx" },
  { chainId: 1088n, shortName: "metis-andromeda" },
  { chainId: 1101n, shortName: "zkevm" },
  { chainId: 1111n, shortName: "wemix" },
  { chainId: 1112n, shortName: "twemix" },
  { chainId: 1114n, shortName: "tcore2" },
  { chainId: 1115n, shortName: "tcore" },
  { chainId: 1116n, shortName: "core" },
  { chainId: 1125n, shortName: "taker" },
  { chainId: 1135n, shortName: "lisk" },
  { chainId: 1230n, shortName: "UltronTestnet" },
  { chainId: 1231n, shortName: "UltronMainnet" },
  { chainId: 1284n, shortName: "mbeam" },
  { chainId: 1285n, shortName: "mriver" },
  { chainId: 1287n, shortName: "mbase" },
  { chainId: 1294n, shortName: "bobabeam" },
  { chainId: 1329n, shortName: "sei" },
  { chainId: 1337n, shortName: "geth" },
  { chainId: 1442n, shortName: "testnet-zkEVM-mango" },
  { chainId: 1513n, shortName: "Story" },
  { chainId: 1516n, shortName: "story-testnet" },
  { chainId: 1559n, shortName: "tenet" },
  { chainId: 1625n, shortName: "gravity" },
  { chainId: 1663n, shortName: "Gobi" },
  { chainId: 1729n, shortName: "reya" },
  { chainId: 1750n, shortName: "metall2" },
  { chainId: 1807n, shortName: "rana" },
  { chainId: 1811n, shortName: "lif3-testnet" },
  { chainId: 1890n, shortName: "lightlink_phoenix" },
  { chainId: 1891n, shortName: "lightlink_pegasus" },
  { chainId: 1923n, shortName: "swell-l2" },
  { chainId: 1924n, shortName: "swell-l2-testnet" },
  { chainId: 1984n, shortName: "euntest" },
  { chainId: 1998n, shortName: "kyoto-testnet" },
  { chainId: 2000n, shortName: "dc" },
  { chainId: 2001n, shortName: "milkada" },
  { chainId: 2002n, shortName: "milkalgo" },
  { chainId: 2008n, shortName: "cloudwalk_testnet" },
  { chainId: 2019n, shortName: "pmint_test" },
  { chainId: 2020n, shortName: "pmint" },
  { chainId: 2021n, shortName: "edg" },
  { chainId: 2039n, shortName: "aleph" },
  { chainId: 2187n, shortName: "g7" },
  { chainId: 2192n, shortName: "snax" },
  { chainId: 2221n, shortName: "tkava" },
  { chainId: 2222n, shortName: "kava" },
  { chainId: 2331n, shortName: "rss3-testnet" },
  { chainId: 2358n, shortName: "kroma-sepolia" },
  { chainId: 2442n, shortName: "zkevm-testnet-cardona" },
  { chainId: 2810n, shortName: "hmorph" },
  { chainId: 2818n, shortName: "morph" },
  { chainId: 3338n, shortName: "PEAQ" },
  { chainId: 3501n, shortName: "JFIN" },
  { chainId: 3636n, shortName: "BTNX" },
  { chainId: 3737n, shortName: "csb" },
  { chainId: 3776n, shortName: "astrzk" },
  { chainId: 4002n, shortName: "tftm" },
  { chainId: 4061n, shortName: "Nahmii3Mainnet" },
  { chainId: 4062n, shortName: "Nahmii3Testnet" },
  { chainId: 4078n, shortName: "muster" },
  { chainId: 4157n, shortName: "crossfi-testnet" },
  { chainId: 4162n, shortName: "SXR" },
  { chainId: 4202n, shortName: "lisksep" },
  { chainId: 4337n, shortName: "beam" },
  { chainId: 4460n, shortName: "orderlyl2" },
  { chainId: 4653n, shortName: "gold" },
  { chainId: 4661n, shortName: "appchaintestnet" },
  { chainId: 4689n, shortName: "iotex-mainnet" },
  { chainId: 4918n, shortName: "txvm" },
  { chainId: 4919n, shortName: "xvm" },
  { chainId: 5000n, shortName: "mantle" },
  { chainId: 5001n, shortName: "mantle-testnet" },
  { chainId: 5003n, shortName: "mnt-sep" },
  { chainId: 5115n, shortName: "citrea-testnet" },
  { chainId: 5165n, shortName: "ftn" },
  { chainId: 5611n, shortName: "obnbt" },
  { chainId: 5700n, shortName: "tsys" },
  { chainId: 6001n, shortName: "bouncebit-mainnet" },
  { chainId: 6102n, shortName: "cascadia" },
  { chainId: 6321n, shortName: "eaura" },
  { chainId: 6322n, shortName: "aura" },
  { chainId: 6398n, shortName: "connext-sepolia" },
  { chainId: 6688n, shortName: "iris" },
  { chainId: 6880n, shortName: "mtt-mainnet" },
  { chainId: 7000n, shortName: "zetachain-mainnet" },
  { chainId: 7001n, shortName: "zetachain-testnet" },
  { chainId: 7070n, shortName: "planq" },
  { chainId: 7171n, shortName: "bitrock" },
  { chainId: 7200n, shortName: "xsat" },
  { chainId: 7332n, shortName: "EON" },
  { chainId: 7341n, shortName: "shyft" },
  { chainId: 7560n, shortName: "cyeth" },
  { chainId: 7700n, shortName: "canto" },
  { chainId: 7771n, shortName: "tbitrock" },
  { chainId: 8192n, shortName: "tqf" },
  { chainId: 8194n, shortName: "ttqf" },
  { chainId: 8217n, shortName: "cypress" },
  { chainId: 8329n, shortName: "lrz" },
  { chainId: 8453n, shortName: "base" },
  { chainId: 8822n, shortName: "iotaevm" },
  { chainId: 9000n, shortName: "evmos-testnet" },
  { chainId: 9001n, shortName: "evmos" },
  { chainId: 9700n, shortName: "MainnetDev" },
  { chainId: 9728n, shortName: "boba-testnet" },
  { chainId: 10000n, shortName: "smartbch" },
  { chainId: 10001n, shortName: "smartbchtest" },
  { chainId: 10081n, shortName: "joct" },
  { chainId: 10200n, shortName: "chi" },
  { chainId: 10242n, shortName: "aa" },
  { chainId: 10243n, shortName: "aat" },
  { chainId: 10849n, shortName: "lamina1" },
  { chainId: 11011n, shortName: "shapesep" },
  { chainId: 11111n, shortName: "WAGMI" },
  { chainId: 11235n, shortName: "islm" },
  { chainId: 11437n, shortName: "shyftt" },
  { chainId: 11501n, shortName: "bevm" },
  { chainId: 11503n, shortName: "bevm-test" },
  { chainId: 11820n, shortName: "artela-mainnet" },
  { chainId: 11891n, shortName: "Arianee" },
  { chainId: 12324n, shortName: "l3x" },
  { chainId: 12325n, shortName: "l3x-testnet" },
  { chainId: 12357n, shortName: "rei-testnet" },
  { chainId: 12553n, shortName: "rss3" },
  { chainId: 13337n, shortName: "beam-testnet" },
  { chainId: 13371n, shortName: "imx" },
  { chainId: 13473n, shortName: "imx-testnet" },
  { chainId: 13746n, shortName: "g7t" },
  { chainId: 14800n, shortName: "vana-moksha" },
  { chainId: 17000n, shortName: "holesky" },
  { chainId: 17069n, shortName: "garnet" },
  { chainId: 17172n, shortName: "eclipse" },
  { chainId: 18231n, shortName: "unreal-old" },
  { chainId: 18233n, shortName: "unreal" },
  { chainId: 22776n, shortName: "mapo" },
  { chainId: 23294n, shortName: "sapphire" },
  { chainId: 23295n, shortName: "sapphire-testnet" },
  { chainId: 25327n, shortName: "Everclear" },
  { chainId: 28979n, shortName: "kimbonet-testnet" },
  { chainId: 31611n, shortName: "mezo" },
  { chainId: 32769n, shortName: "zil" },
  { chainId: 33101n, shortName: "zil-testnet" },
  { chainId: 33139n, shortName: "apechain" },
  { chainId: 33401n, shortName: "slingshot" },
  { chainId: 34443n, shortName: "mode" },
  { chainId: 35441n, shortName: "q" },
  { chainId: 35443n, shortName: "q-testnet" },
  { chainId: 37111n, shortName: "lens-sepolia" },
  { chainId: 41455n, shortName: "aleph-zero" },
  { chainId: 42161n, shortName: "arb1" },
  { chainId: 42170n, shortName: "arb-nova" },
  { chainId: 42220n, shortName: "celo" },
  { chainId: 42421n, shortName: "rwa" },
  { chainId: 42793n, shortName: "etlk" },
  { chainId: 43111n, shortName: "hemi" },
  { chainId: 43113n, shortName: "fuji" },
  { chainId: 43114n, shortName: "avax" },
  { chainId: 43288n, shortName: "boba-avax" },
  { chainId: 44787n, shortName: "alfa" },
  { chainId: 45000n, shortName: "autobahnnetwork" },
  { chainId: 47763n, shortName: "neox-mainnet" },
  { chainId: 47805n, shortName: "rei" },
  { chainId: 48899n, shortName: "zircuit-testnet" },
  { chainId: 48900n, shortName: "zircuit-mainnet" },
  { chainId: 53457n, shortName: "dodochain" },
  { chainId: 54211n, shortName: "islmt" },
  { chainId: 56288n, shortName: "boba-bnb" },
  { chainId: 57000n, shortName: "tsys-rollux" },
  { chainId: 57054n, shortName: "blaze" },
  { chainId: 57073n, shortName: "ink" },
  { chainId: 58008n, shortName: "sepPGN" },
  { chainId: 59140n, shortName: "linea-goerli" },
  { chainId: 59141n, shortName: "linea-sepolia" },
  { chainId: 59144n, shortName: "linea" },
  { chainId: 60808n, shortName: "bob" },
  { chainId: 61166n, shortName: "treasure" },
  { chainId: 71401n, shortName: "gw-testnet-v1" },
  { chainId: 71402n, shortName: "gw-mainnet-v1" },
  { chainId: 73799n, shortName: "vt" },
  { chainId: 80001n, shortName: "maticmum" },
  { chainId: 80002n, shortName: "polygonamoy" },
  { chainId: 80084n, shortName: "berachainbArtio" },
  { chainId: 80085n, shortName: "berachainArtio" },
  { chainId: 80094n, shortName: "berachain" },
  { chainId: 81457n, shortName: "blastmainnet" },
  { chainId: 83291n, shortName: "lrz-testnet" },
  { chainId: 84531n, shortName: "basegor" },
  { chainId: 84532n, shortName: "basesep" },
  { chainId: 90001n, shortName: "dhobyghaut" },
  { chainId: 97435n, shortName: "sling" },
  { chainId: 98864n, shortName: "plume-devnet" },
  { chainId: 98865n, shortName: "plume" },
  { chainId: 103454n, shortName: "masatest" },
  { chainId: 105105n, shortName: "stratis" },
  { chainId: 111188n, shortName: "re-al" },
  { chainId: 128123n, shortName: "etlt" },
  { chainId: 167000n, shortName: "tko-mainnet" },
  { chainId: 167008n, shortName: "tko-katla" },
  { chainId: 167009n, shortName: "tko-hekla" },
  { chainId: 175188n, shortName: "lpy" },
  { chainId: 200101n, shortName: "milktada" },
  { chainId: 200202n, shortName: "milktalgo" },
  { chainId: 200810n, shortName: "btrt" },
  { chainId: 205205n, shortName: "auroria" },
  { chainId: 314159n, shortName: "filecoin-calibration" },
  { chainId: 328527n, shortName: "nal" },
  { chainId: 333999n, shortName: "olympus" },
  { chainId: 381931n, shortName: "metal" },
  { chainId: 421611n, shortName: "arb-rinkeby" },
  { chainId: 421613n, shortName: "arb-goerli" },
  { chainId: 421614n, shortName: "arb-sep" },
  { chainId: 444444n, shortName: "syndr" },
  { chainId: 490000n, shortName: "ATN" },
  { chainId: 534351n, shortName: "scr-sepolia" },
  { chainId: 534352n, shortName: "scr" },
  { chainId: 534353n, shortName: "scr-alpha" },
  { chainId: 543210n, shortName: "zero-network" },
  { chainId: 555666n, shortName: "eclipset" },
  { chainId: 622277n, shortName: "rth" },
  { chainId: 656476n, shortName: "open-campus-codex" },
  { chainId: 660279n, shortName: "xai" },
  { chainId: 668668n, shortName: "cnw" },
  { chainId: 713715n, shortName: "sei-devnet" },
  { chainId: 743111n, shortName: "hemi-sep" },
  { chainId: 763373n, shortName: "inksepolia" },
  { chainId: 764984n, shortName: "lamina1test" },
  { chainId: 808813n, shortName: "bob-sepolia" },
  { chainId: 810180n, shortName: "zklink-nova" },
  { chainId: 839999n, shortName: "txsat" },
  { chainId: 978657n, shortName: "treasure-ruby" },
  { chainId: 984122n, shortName: "forma" },
  { chainId: 1501869n, shortName: "water9" },
  { chainId: 3441006n, shortName: "mantaSepoliaTestnet" },
  { chainId: 4457845n, shortName: "zero-sepolia" },
  { chainId: 6038361n, shortName: "azkyt" },
  { chainId: 7225878n, shortName: "saakuru" },
  { chainId: 7777777n, shortName: "zora" },
  { chainId: 9999999n, shortName: "fluence" },
  { chainId: 11155111n, shortName: "sep" },
  { chainId: 11155420n, shortName: "opsep" },
  { chainId: 12227332n, shortName: "neox-t4" },
  { chainId: 52164803n, shortName: "fluence-testnet" },
  { chainId: 94204209n, shortName: "polygon-blackberry" },
  { chainId: 111557560n, shortName: "cysep" },
  { chainId: 123420111n, shortName: "opcelestia-raspberry" },
  { chainId: 161221135n, shortName: "plume-testnet" },
  { chainId: 168587773n, shortName: "blastsepolia" },
  { chainId: 222000222n, shortName: "kanazawa" },
  { chainId: 245022926n, shortName: "neonevm-devnet" },
  { chainId: 245022934n, shortName: "neonevm-mainnet" },
  { chainId: 253368190n, shortName: "flame" },
  { chainId: 328527624n, shortName: "nalsep" },
  { chainId: 333000333n, shortName: "meld" },
  { chainId: 476462898n, shortName: "Skopje" },
  { chainId: 666666666n, shortName: "degen-chain" },
  { chainId: 888888888n, shortName: "ancient8" },
  { chainId: 999999999n, shortName: "zsep" },
  { chainId: 1313161554n, shortName: "aurora" },
  { chainId: 1313161555n, shortName: "aurora-testnet" },
  { chainId: 1511670449n, shortName: "GPT" },
  { chainId: 1570754601n, shortName: "hst-test" },
  { chainId: 1666600000n, shortName: "hmy-s0" },
  { chainId: 1666700000n, shortName: "hmy-b-s0" },
  { chainId: 11297108099n, shortName: "tpalm" },
  { chainId: 11297108109n, shortName: "palm" },
  { chainId: 37714555429n, shortName: "xaitestnet" },
  { chainId: 88153591557n, shortName: "arb-blueberry" },
  { chainId: 123420000220n, shortName: "fluence-stage" },
  { chainId: 920637907288165n, shortName: "kkrt-starknet-sepolia" }
];
if (process.env.TEST_NETWORK === "hardhat") {
  networks.push({ shortName: "local", chainId: 31337n });
}

// src/utils/eip-3770/index.ts
function parseEip3770Address(fullAddress) {
  const parts = fullAddress.split(":");
  const address = parts.length > 1 ? parts[1] : parts[0];
  const prefix = parts.length > 1 ? parts[0] : "";
  return { prefix, address };
}
function getEip3770NetworkPrefixFromChainId(chainId) {
  const network = networks.find((network2) => chainId === network2.chainId);
  if (!network) {
    throw new Error("No network prefix supported for the current chainId");
  }
  return network.shortName;
}
function isValidEip3770NetworkPrefix(prefix) {
  return networks.some(({ shortName }) => shortName === prefix);
}
function validateEip3770NetworkPrefix(prefix, currentChainId) {
  const isCurrentNetworkPrefix = prefix === getEip3770NetworkPrefixFromChainId(currentChainId);
  if (!isValidEip3770NetworkPrefix(prefix) || !isCurrentNetworkPrefix) {
    throw new Error("The network prefix must match the current network");
  }
}
function validateEthereumAddress(address) {
  if (!isAddress(address)) {
    throw new Error(`Invalid Ethereum address ${address}`);
  }
}
function validateEip3770Address(fullAddress, currentChainId) {
  const { address, prefix } = parseEip3770Address(fullAddress);
  validateEthereumAddress(address);
  if (prefix) {
    validateEip3770NetworkPrefix(prefix, currentChainId);
  }
  return { address, prefix };
}

// src/utils/eip-712/index.ts
import { hashMessage as performMessageHash } from "viem";
import semverSatisfies from "semver/functions/satisfies.js";

// src/utils/eip-712/encode.ts
import {
  keccak256,
  concat,
  encodeAbiParameters,
  getTypesForEIP712Domain,
  validateTypedData,
  hashDomain,
  toHex
} from "viem";

// src/utils/types.ts
import { isHex, defineChain, etherUnits } from "viem";
import * as allChains from "viem/chains";
function isSafeConfigWithPredictedSafe(config) {
  return config.predictedSafe !== void 0;
}
function asHash(hash) {
  return hash;
}
function asHex(hex) {
  return isHex(hex) ? hex : `0x${hex}`;
}
function getChainById(chainId) {
  const chain = Object.values(allChains).find((chain2) => chain2.id === Number(chainId));
  if (chain) {
    return chain;
  } else {
    return defineChain({
      id: Number(chainId),
      name: "Custom",
      nativeCurrency: {
        decimals: etherUnits.wei,
        name: "Ether",
        symbol: "ETH"
      },
      rpcUrls: {
        default: {
          http: [],
          webSocket: []
        }
      }
    });
  }
}

// src/utils/eip-712/encode.ts
function encodeField({
  types,
  name,
  type,
  value
}) {
  if (types[type] !== void 0) {
    return [{ type: "bytes32" }, keccak256(encodeData({ data: value, primaryType: type, types }))];
  }
  if (type === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, keccak256(value)];
  }
  if (type === "string") return [{ type: "bytes32" }, keccak256(toHex(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = value.map(
      (item) => encodeField({
        name,
        type: parsedType,
        types,
        value: item
      })
    );
    return [
      { type: "bytes32" },
      keccak256(
        encodeAbiParameters(
          typeValuePairs.map(([t]) => t),
          typeValuePairs.map(([, v]) => v)
        )
      )
    ];
  }
  return [{ type }, value];
}
function findTypeDependencies({
  primaryType: primaryType_,
  types
}, results = /* @__PURE__ */ new Set()) {
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match?.[0] || "";
  if (results.has(primaryType) || types[primaryType] === void 0) {
    return results;
  }
  results.add(primaryType);
  for (const field of types[primaryType]) {
    findTypeDependencies({ primaryType: field.type, types }, results);
  }
  return results;
}
function encodeType({
  primaryType,
  types
}) {
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function hashType({
  primaryType,
  types
}) {
  const encodedHashType = toHex(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeData({
  data,
  primaryType,
  types
}) {
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType]) {
    const [type, value] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value);
  }
  return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashStruct({
  data,
  primaryType,
  types
}) {
  const encoded = encodeData({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
function deducePrimaryType(types) {
  return Object.keys(types)[0];
}
function hashTypedData(typedData) {
  const data = encodeTypedData(typedData);
  return keccak256(asHex(data));
}
function encodeTypedData(typedData) {
  typedData.primaryType = !typedData?.primaryType ? deducePrimaryType(typedData.types) : typedData?.primaryType;
  const { domain = {}, message, primaryType } = typedData;
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...typedData.types
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x1901"];
  if (domain)
    parts.push(
      hashDomain({
        domain,
        types
      })
    );
  if (primaryType !== "EIP712Domain")
    parts.push(
      hashStruct({
        data: message,
        primaryType,
        types
      })
    );
  return concat(parts);
}

// src/utils/eip-712/index.ts
var EQ_OR_GT_1_3_0 = ">=1.3.0";
var EIP712_DOMAIN_BEFORE_V130 = [
  {
    type: "address",
    name: "verifyingContract"
  }
];
var EIP712_DOMAIN = [
  {
    type: "uint256",
    name: "chainId"
  },
  {
    type: "address",
    name: "verifyingContract"
  }
];
function getEip712TxTypes(safeVersion) {
  const eip712WithChainId = semverSatisfies(safeVersion, EQ_OR_GT_1_3_0);
  return {
    EIP712Domain: eip712WithChainId ? EIP712_DOMAIN : EIP712_DOMAIN_BEFORE_V130,
    SafeTx: [
      { type: "address", name: "to" },
      { type: "uint256", name: "value" },
      { type: "bytes", name: "data" },
      { type: "uint8", name: "operation" },
      { type: "uint256", name: "safeTxGas" },
      { type: "uint256", name: "baseGas" },
      { type: "uint256", name: "gasPrice" },
      { type: "address", name: "gasToken" },
      { type: "address", name: "refundReceiver" },
      { type: "uint256", name: "nonce" }
    ]
  };
}
function getEip712MessageTypes(safeVersion) {
  const eip712WithChainId = semverSatisfies(safeVersion, EQ_OR_GT_1_3_0);
  return {
    EIP712Domain: eip712WithChainId ? EIP712_DOMAIN : EIP712_DOMAIN_BEFORE_V130,
    SafeMessage: [{ type: "bytes", name: "message" }]
  };
}
var hashTypedData2 = (typedData) => {
  return hashTypedData(typedData);
};
var hashMessage = (message) => {
  return performMessageHash(message);
};
var hashSafeMessage = (message) => {
  return typeof message === "string" ? hashMessage(message) : hashTypedData2(message);
};
function generateTypedData({
  safeAddress,
  safeVersion,
  chainId,
  data
}) {
  const isSafeTransactionDataType = data.hasOwnProperty("to");
  const eip712WithChainId = semverSatisfies(safeVersion, EQ_OR_GT_1_3_0);
  let typedData;
  if (isSafeTransactionDataType) {
    const txData = data;
    typedData = {
      types: getEip712TxTypes(safeVersion),
      domain: {
        verifyingContract: safeAddress
      },
      primaryType: "SafeTx",
      message: {
        ...txData,
        value: txData.value,
        safeTxGas: txData.safeTxGas,
        baseGas: txData.baseGas,
        gasPrice: txData.gasPrice,
        nonce: txData.nonce
      }
    };
  } else {
    const message = data;
    typedData = {
      types: getEip712MessageTypes(safeVersion),
      domain: {
        verifyingContract: safeAddress
      },
      primaryType: "SafeMessage",
      message: { message: hashSafeMessage(message) }
    };
  }
  if (eip712WithChainId) {
    typedData.domain.chainId = Number(chainId);
  }
  return typedData;
}

// src/utils/safeVersions.ts
import semverSatisfies2 from "semver/functions/satisfies.js";
var SAFE_FEATURES_BY_VERSION = {
  ["SAFE_TX_GAS_OPTIONAL" /* SAFE_TX_GAS_OPTIONAL */]: ">=1.3.0",
  ["SAFE_TX_GUARDS" /* SAFE_TX_GUARDS */]: ">=1.3.0",
  ["SAFE_FALLBACK_HANDLER" /* SAFE_FALLBACK_HANDLER */]: ">=1.1.1",
  ["ETH_SIGN" /* ETH_SIGN */]: ">=1.1.0",
  ["ACCOUNT_ABSTRACTION" /* ACCOUNT_ABSTRACTION */]: ">=1.3.0",
  ["REQUIRED_TXGAS" /* REQUIRED_TXGAS */]: "<=1.2.0",
  ["SIMULATE_AND_REVERT" /* SIMULATE_AND_REVERT */]: ">=1.3.0",
  ["PASSKEY_SIGNER" /* PASSKEY_SIGNER */]: ">=1.3.0",
  ["SAFE_L2_CONTRACTS" /* SAFE_L2_CONTRACTS */]: ">=1.3.0"
};
var hasSafeFeature = (feature, version) => {
  if (!(feature in SAFE_FEATURES_BY_VERSION)) {
    return false;
  }
  return semverSatisfies2(version, SAFE_FEATURES_BY_VERSION[feature]);
};
async function isSafeContractCompatibleWithRequiredTxGas(safeContract) {
  const safeVersion = safeContract.safeVersion;
  if (!hasSafeFeature("REQUIRED_TXGAS" /* REQUIRED_TXGAS */, safeVersion)) {
    throw new Error("Current version of the Safe does not support the requiredTxGas functionality");
  }
  return safeContract;
}
async function isSafeContractCompatibleWithSimulateAndRevert(safeContract) {
  const safeVersion = safeContract.safeVersion;
  if (!hasSafeFeature("SIMULATE_AND_REVERT" /* SIMULATE_AND_REVERT */, safeVersion)) {
    throw new Error(
      "Current version of the Safe does not support the simulateAndRevert functionality"
    );
  }
  return safeContract;
}

// src/utils/signatures/SafeSignature.ts
var EthSafeSignature = class {
  /**
   * Creates an instance of a Safe signature.
   *
   * @param signer - Ethers signer
   * @param signature - The Safe signature
   * @returns The Safe signature instance
   */
  constructor(signer, signature, isContractSignature = false) {
    this.signer = signer;
    this.data = signature;
    this.isContractSignature = isContractSignature;
  }
  /**
   * Returns the static part of the Safe signature.
   *
   * @returns The static part of the Safe signature
   */
  staticPart(dynamicOffset) {
    if (this.isContractSignature) {
      return `${this.signer.slice(2).padStart(64, "0")}${dynamicOffset || ""}00`;
    }
    return this.data;
  }
  /**
   * Returns the dynamic part of the Safe signature.
   *
   * @returns The dynamic part of the Safe signature
   */
  dynamicPart() {
    if (this.isContractSignature) {
      const dynamicPartLength = (this.data.slice(2).length / 2).toString(16).padStart(64, "0");
      return `${dynamicPartLength}${this.data.slice(2)}`;
    }
    return "";
  }
};

// src/utils/signatures/utils.ts
import { recoverAddress } from "viem";
import {
  SigningMethod
} from "@safe-global/types-kit";
import semverSatisfies3 from "semver/functions/satisfies.js";
function generatePreValidatedSignature(ownerAddress) {
  const signature = "0x000000000000000000000000" + ownerAddress.slice(2) + "000000000000000000000000000000000000000000000000000000000000000001";
  return new EthSafeSignature(ownerAddress, signature);
}
async function isTxHashSignedWithPrefix(txHash, signature, ownerAddress) {
  let hasPrefix;
  try {
    const recoveredAddress = await recoverAddress({
      hash: asHash(txHash),
      signature: asHex(signature)
    });
    hasPrefix = !sameString(recoveredAddress, ownerAddress);
  } catch (e) {
    hasPrefix = true;
  }
  return hasPrefix;
}
var adjustVInSignature = async (signingMethod, signature, safeTxHash, signerAddress) => {
  const ETHEREUM_V_VALUES = [0, 1, 27, 28];
  const MIN_VALID_V_VALUE_FOR_SAFE_ECDSA = 27;
  let signatureV = parseInt(signature.slice(-2), 16);
  if (!ETHEREUM_V_VALUES.includes(signatureV)) {
    throw new Error("Invalid signature");
  }
  if (signingMethod === SigningMethod.ETH_SIGN) {
    if (signatureV < MIN_VALID_V_VALUE_FOR_SAFE_ECDSA) {
      signatureV += MIN_VALID_V_VALUE_FOR_SAFE_ECDSA;
    }
    const adjustedSignature = signature.slice(0, -2) + signatureV.toString(16);
    const signatureHasPrefix = await isTxHashSignedWithPrefix(
      safeTxHash,
      adjustedSignature,
      signerAddress
    );
    if (signatureHasPrefix) {
      signatureV += 4;
    }
  }
  if (signingMethod === SigningMethod.ETH_SIGN_TYPED_DATA) {
    if (signatureV < MIN_VALID_V_VALUE_FOR_SAFE_ECDSA) {
      signatureV += MIN_VALID_V_VALUE_FOR_SAFE_ECDSA;
    }
  }
  signature = signature.slice(0, -2) + signatureV.toString(16);
  return signature;
};
async function generateSignature(safeProvider, hash) {
  const signerAddress = await safeProvider.getSignerAddress();
  if (!signerAddress) {
    throw new Error("SafeProvider must be initialized with a signer to use this method");
  }
  let signature = await safeProvider.signMessage(hash);
  signature = await adjustVInSignature(SigningMethod.ETH_SIGN, signature, hash, signerAddress);
  return new EthSafeSignature(signerAddress, signature);
}
async function generateEIP712Signature(safeProvider, safeEIP712Args, methodVersion) {
  const signerAddress = await safeProvider.getSignerAddress();
  if (!signerAddress) {
    throw new Error("SafeProvider must be initialized with a signer to use this method");
  }
  let signature = await safeProvider.signTypedData(safeEIP712Args, methodVersion);
  signature = await adjustVInSignature(SigningMethod.ETH_SIGN_TYPED_DATA, signature);
  return new EthSafeSignature(signerAddress, signature);
}
var buildContractSignature = async (signatures, signerSafeAddress) => {
  const contractSignature = new EthSafeSignature(
    signerSafeAddress,
    buildSignatureBytes(signatures),
    true
  );
  return contractSignature;
};
var buildSignatureBytes = (signatures) => {
  const SIGNATURE_LENGTH_BYTES = 65;
  signatures.sort(
    (left, right) => left.signer.toLowerCase().localeCompare(right.signer.toLowerCase())
  );
  let signatureBytes = EMPTY_DATA;
  let dynamicBytes = "";
  for (const signature of signatures) {
    if (signature.isContractSignature) {
      const dynamicPartPosition = (signatures.length * SIGNATURE_LENGTH_BYTES + dynamicBytes.length / 2).toString(16).padStart(64, "0");
      signatureBytes += signature.staticPart(dynamicPartPosition);
      dynamicBytes += signature.dynamicPart();
    } else {
      signatureBytes += signature.data.slice(2);
    }
  }
  return signatureBytes + dynamicBytes;
};
var preimageSafeTransactionHash = (safeAddress, safeTx, safeVersion, chainId) => {
  const safeTxTypes = getEip712TxTypes(safeVersion);
  const message = safeTx;
  return encodeTypedData({
    domain: { verifyingContract: safeAddress, chainId: Number(chainId) },
    types: { SafeTx: safeTxTypes.SafeTx },
    message
  });
};
var preimageSafeMessageHash = (safeAddress, message, safeVersion, chainId) => {
  const safeMessageTypes = getEip712MessageTypes(safeVersion);
  return encodeTypedData({
    domain: { verifyingContract: safeAddress, chainId: Number(chainId) },
    types: { SafeMessage: safeMessageTypes.SafeMessage },
    message: { message }
  });
};
var EQ_OR_GT_1_3_02 = ">=1.3.0";
var calculateSafeTransactionHash = (safeAddress, safeTx, safeVersion, chainId) => {
  const safeTxTypes = getEip712TxTypes(safeVersion);
  const domain = { verifyingContract: safeAddress };
  if (semverSatisfies3(safeVersion, EQ_OR_GT_1_3_02)) {
    domain.chainId = Number(chainId);
  }
  const message = safeTx;
  return hashTypedData2({ domain, types: { SafeTx: safeTxTypes.SafeTx }, message });
};
var calculateSafeMessageHash = (safeAddress, message, safeVersion, chainId) => {
  const safeMessageTypes = getEip712MessageTypes(safeVersion);
  return hashTypedData2({
    domain: { verifyingContract: safeAddress, chainId: Number(chainId) },
    types: { SafeMessage: safeMessageTypes.SafeMessage },
    message: { message }
  });
};

// src/utils/transactions/gas.ts
import { BaseError } from "viem";
import { OperationType } from "@safe-global/types-kit";
import semverSatisfies4 from "semver/functions/satisfies.js";

// src/contracts/BaseContract.ts
import {
  encodeFunctionData
} from "viem";
import { estimateContractGas, getTransactionReceipt } from "viem/actions";
var BaseContract = class {
  /**
   * @constructor
   * Constructs an instance of BaseContract.
   *
   * @param contractName - The contract name.
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the contract. It should be compatible with the specific version of the contract.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the Safe deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(contractName3, chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    this.getAddress = () => {
      return this.contractAddress;
    };
    this.encode = (functionToEncode, args) => {
      const abi = this.contractAbi;
      const functionName = functionToEncode;
      const params = args;
      return encodeFunctionData({
        abi,
        functionName,
        args: params
      });
    };
    this.estimateGas = async (functionToEstimate, args, options = {}) => {
      const contractOptions = this.convertOptions(options);
      const abi = this.contractAbi;
      const params = args;
      return estimateContractGas(this.runner, {
        abi,
        functionName: functionToEstimate,
        address: this.getAddress(),
        args: params,
        ...contractOptions
      });
    };
    const deployment = getContractDeployment(safeVersion, chainId, contractName3);
    const resolvedAddress = customContractAddress ?? this.#resolveAddress(
      deployment?.networkAddresses[chainId.toString()],
      deployment,
      deploymentType
    );
    if (!resolvedAddress) {
      throw new Error(`Invalid ${contractName3.replace("Version", "")} contract address`);
    }
    this.chainId = chainId;
    this.contractName = contractName3;
    this.safeVersion = safeVersion;
    this.contractAddress = resolvedAddress;
    this.contractAbi = customContractAbi || deployment?.abi || // this cast is required because abi is set as any[] in safe-deployments
    defaultAbi;
    this.runner = safeProvider.getExternalProvider();
    this.safeProvider = safeProvider;
  }
  #resolveAddress(networkAddresses, deployment, deploymentType) {
    if (!networkAddresses) {
      return void 0;
    }
    if (deploymentType && deployment && "deployments" in deployment) {
      const customDeploymentTypeAddress = deployment.deployments[deploymentType]?.address;
      if (typeof networkAddresses === "string") {
        return networkAddresses === customDeploymentTypeAddress ? customDeploymentTypeAddress : void 0;
      }
      return networkAddresses.find((address) => address === customDeploymentTypeAddress);
    }
    if (typeof networkAddresses === "string") {
      return networkAddresses;
    }
    return networkAddresses[0];
  }
  async init() {
    this.wallet = await this.safeProvider.getExternalSigner();
  }
  async getTransactionReceipt(hash) {
    return getTransactionReceipt(this.runner, { hash });
  }
  /**
   * Converts a type of TransactionOptions to a viem transaction type. The viem transaction type creates a clear distinction between the multiple transaction objects (e.g., post-London hard fork) and doesn't allow a union of fields.
   * See: https://github.com/wevm/viem/blob/viem%402.18.0/src/types/fee.ts and https://github.com/wevm/viem/blob/603227e2588366914fb79a902d23fd9afc353cc6/src/types/transaction.ts#L200
   *
   * @param options - Transaction options as expected throughout safe sdk and propagated on the results.
   *
   * @returns Options object compatible with Viem
   */
  convertOptions(options) {
    const chain = this.getChain();
    if (!chain) throw new Error("Invalid chainId");
    const account = this.getWallet().account;
    if (!account) throw new Error("Invalid signer");
    const txOptions = convertTransactionOptions(options);
    return { chain, ...txOptions, account };
  }
  getChain() {
    return getChainById(this.chainId);
  }
  getWallet() {
    if (!this.wallet) throw new Error("A signer must be set");
    return this.wallet;
  }
  async write(functionName, args, options) {
    const converted = this.convertOptions(options);
    return await this.getWallet().writeContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName,
      args,
      ...converted
    });
  }
  async read(functionName, args) {
    return await this.runner.readContract({
      functionName,
      abi: this.contractAbi,
      address: this.contractAddress,
      args
    });
  }
};
var BaseContract_default = BaseContract;

// src/contracts/CreateCall/CreateCallBaseContract.ts
var CreateCallBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of CreateCallBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the CreateCall contract. It should be compatible with the specific version of the contract.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the Safe deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "createCallVersion";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var CreateCallBaseContract_default = CreateCallBaseContract;

// src/contracts/CreateCall/v1.3.0/CreateCallContract_v1_3_0.ts
import {
  createCall_1_3_0_ContractArtifacts
} from "@safe-global/types-kit";
var CreateCallContract_v1_3_0 = class extends CreateCallBaseContract_default {
  /**
   * Constructs an instance of CreateCallContract_v1_3_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the CreateCall deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.3.0";
    const defaultAbi = createCall_1_3_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @param args - Array[value, deploymentData]
     * @param options - TransactionOptions
     * @returns Promise<TransactionResult>
     */
    this.performCreate = async (args, options) => {
      if (options && !options.gasLimit) {
        options.gasLimit = (await this.estimateGas("performCreate", [...args], { ...options })).toString();
      }
      return toTxResult(this.runner, await this.write("performCreate", args, options), options);
    };
    /**
     * @param args - Array[value, deploymentData, salt]
     * @param options - TransactionOptions
     * @returns Promise<TransactionResult>
     */
    this.performCreate2 = async (args, options) => {
      if (options && !options.gasLimit) {
        options.gasLimit = (await this.estimateGas("performCreate2", args, options)).toString();
      }
      return toTxResult(this.runner, await this.write("performCreate2", args, options), options);
    };
  }
};
var CreateCallContract_v1_3_0_default = CreateCallContract_v1_3_0;

// src/contracts/CreateCall/v1.4.1/CreateCallContract_v1_4_1.ts
import {
  createCall_1_4_1_ContractArtifacts
} from "@safe-global/types-kit";
var CreateCallContract_v1_4_1 = class extends CreateCallBaseContract_default {
  /**
   * Constructs an instance of CreateCallContract_v1_4_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the CreateCall deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.4.1";
    const defaultAbi = createCall_1_4_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @param args - Array[value, deploymentData]
     * @param options - TransactionOptions
     * @returns Promise<TransactionResult>
     */
    this.performCreate = async (args, options) => {
      if (options && !options.gasLimit) {
        options.gasLimit = (await this.estimateGas("performCreate", args, options)).toString();
      }
      return toTxResult(this.runner, await this.write("performCreate", args, options), options);
    };
    /**
     * @param args - Array[value, deploymentData, salt]
     * @param options - TransactionOptions
     * @returns Promise<TransactionResult>
     */
    this.performCreate2 = async (args, options) => {
      if (options && !options.gasLimit) {
        options.gasLimit = (await this.estimateGas("performCreate2", [...args], { ...options })).toString();
      }
      return toTxResult(this.runner, await this.write("performCreate2", args, options), options);
    };
  }
};
var CreateCallContract_v1_4_1_default = CreateCallContract_v1_4_1;

// src/contracts/MultiSend/MultiSendBaseContract.ts
var MultiSendBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of MultiSendBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the MultiSend contract. It should be compatible with the specific version of the MultiSend contract.
   * @param safeVersion - The version of the MultiSend contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSend deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the MultiSend deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "multiSendVersion";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var MultiSendBaseContract_default = MultiSendBaseContract;

// src/contracts/MultiSend/v1.1.1/MultiSendContract_v1_1_1.ts
import {
  multisend_1_1_1_ContractArtifacts
} from "@safe-global/types-kit";
var MultiSendContract_v1_1_1 = class extends MultiSendBaseContract_default {
  /**
   * Constructs an instance of MultiSendContract_v1_1_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSend deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.1.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.1.1";
    const defaultAbi = multisend_1_1_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
  }
};
var MultiSendContract_v1_1_1_default = MultiSendContract_v1_1_1;

// src/contracts/MultiSend/v1.3.0/MultiSendContract_v1_3_0.ts
import {
  multisend_1_3_0_ContractArtifacts
} from "@safe-global/types-kit";
var MultiSendContract_v1_3_0 = class extends MultiSendBaseContract_default {
  /**
   * Constructs an instance of MultiSendContract_v1_3_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSend deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.3.0";
    const defaultAbi = multisend_1_3_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
  }
};
var MultiSendContract_v1_3_0_default = MultiSendContract_v1_3_0;

// src/contracts/MultiSend/v1.4.1/MultiSendContract_v1_4_1.ts
import {
  multisend_1_4_1_ContractArtifacts
} from "@safe-global/types-kit";
var MultiSendContract_v1_4_1 = class extends MultiSendBaseContract_default {
  /**
   * Constructs an instance of MultiSendContract_v1_4_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSend deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.4.1";
    const defaultAbi = multisend_1_4_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
  }
};
var MultiSendContract_v1_4_1_default = MultiSendContract_v1_4_1;

// src/contracts/MultiSend/MultiSendCallOnlyBaseContract.ts
var MultiSendCallOnlyBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of MultiSendCallOnlyBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the MultiSendCallOnly contract. It should be compatible with the specific version of the MultiSendCallOnly contract.
   * @param safeVersion - The version of the MultiSendCallOnly contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSendCallOnly deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the MultiSendCallOnly deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "multiSendCallOnlyVersion";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var MultiSendCallOnlyBaseContract_default = MultiSendCallOnlyBaseContract;

// src/contracts/MultiSend/v1.3.0/MultiSendCallOnlyContract_v1_3_0.ts
import {
  multiSendCallOnly_1_3_0_ContractArtifacts
} from "@safe-global/types-kit";
var MultiSendCallOnlyContract_v1_3_0 = class extends MultiSendCallOnlyBaseContract_default {
  /**
   * Constructs an instance of MultiSendCallOnlyContract_v1_3_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSendCallOnly deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.3.0";
    const defaultAbi = multiSendCallOnly_1_3_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
  }
};
var MultiSendCallOnlyContract_v1_3_0_default = MultiSendCallOnlyContract_v1_3_0;

// src/contracts/MultiSend/v1.4.1/MultiSendCallOnlyContract_v1_4_1.ts
import {
  multiSendCallOnly_1_4_1_ContractArtifacts
} from "@safe-global/types-kit";
var MultiSendCallOnlyContract_v1_4_1 = class extends MultiSendCallOnlyBaseContract_default {
  /**
   * Constructs an instance of MultiSendCallOnlyContract_v1_4_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSendCallOnly deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.4.1";
    const defaultAbi = multiSendCallOnly_1_4_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
  }
};
var MultiSendCallOnlyContract_v1_4_1_default = MultiSendCallOnlyContract_v1_4_1;

// src/contracts/SignMessageLib/SignMessageLibBaseContract.ts
var SignMessageLibBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of  SignMessageLibBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the SignMessageLib contract. It should be compatible with the specific version of the SignMessageLib contract.
   * @param safeVersion - The version of the SignMessageLib contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the SignMessageLib deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the SignMessageLib deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "signMessageLibVersion";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var SignMessageLibBaseContract_default = SignMessageLibBaseContract;

// src/contracts/SignMessageLib/v1.3.0/SignMessageLibContract_v1_3_0.ts
import {
  signMessageLib_1_3_0_ContractArtifacts
} from "@safe-global/types-kit";
var SignMessageLibContract_v1_3_0 = class extends SignMessageLibBaseContract_default {
  /**
   * Constructs an instance of SignMessageLibContract_v1_3_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the SignMessageLib deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.3.0";
    const defaultAbi = signMessageLib_1_3_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @param args - Array[message]
     */
    this.getMessageHash = async (args) => {
      return [await this.read("getMessageHash", args)];
    };
    /**
     * @param args - Array[data]
     */
    this.signMessage = async (data, options) => {
      if (options && !options.gasLimit) {
        options.gasLimit = Number(await this.estimateGas("signMessage", data, { ...options }));
      }
      return toTxResult(this.runner, await this.write("signMessage", data, options), options);
    };
  }
};
var SignMessageLibContract_v1_3_0_default = SignMessageLibContract_v1_3_0;

// src/contracts/SignMessageLib/v1.4.1/SignMessageLibContract_v1_4_1.ts
import {
  signMessageLib_1_4_1_ContractArtifacts
} from "@safe-global/types-kit";
var SignMessageLibContract_v1_4_1 = class extends SignMessageLibBaseContract_default {
  /**
   * Constructs an instance of SignMessageLibContract_v1_4_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the SignMessageLib deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.4.1";
    const defaultAbi = signMessageLib_1_4_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @param args - Array[message]
     */
    this.getMessageHash = async (args) => {
      return [await this.read("getMessageHash", args)];
    };
    /**
     * @param args - Array[data]
     */
    this.signMessage = async (data, options) => {
      if (options && !options.gasLimit) {
        options.gasLimit = Number(await this.estimateGas("signMessage", data, { ...options }));
      }
      return toTxResult(this.runner, await this.write("signMessage", data, options), options);
    };
  }
};
var SignMessageLibContract_v1_4_1_default = SignMessageLibContract_v1_4_1;

// src/contracts/Safe/v1.0.0/SafeContract_v1_0_0.ts
import { simulateContract } from "viem/actions";

// src/contracts/Safe/SafeBaseContract.ts
var SafeBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of SafeBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the Safe contract. It should be compatible with the specific version of the Safe contract.
   * @param safeVersion - The version of the Safe contract.
   * @param isL1SafeSingleton - A flag indicating if the contract is a L1 Safe Singleton.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the Safe deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, isL1SafeSingleton = safeDeploymentsL1ChainIds.includes(chainId), customContractAddress, customContractAbi, deploymentType) {
    const isL1Contract = isL1SafeSingleton || !hasSafeFeature("SAFE_L2_CONTRACTS" /* SAFE_L2_CONTRACTS */, safeVersion);
    const contractName3 = isL1Contract ? "safeSingletonVersion" : "safeSingletonL2Version";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var SafeBaseContract_default = SafeBaseContract;

// src/contracts/Safe/v1.0.0/SafeContract_v1_0_0.ts
import {
  safe_1_0_0_ContractArtifacts
} from "@safe-global/types-kit";
var SafeContract_v1_0_0 = class extends SafeBaseContract_default {
  /**
   * Constructs an instance of SafeContract_v1_0_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param isL1SafeSingleton - A flag indicating if the contract is a L1 Safe Singleton.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.0.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, isL1SafeSingleton, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.0.0";
    const defaultAbi = safe_1_0_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      isL1SafeSingleton,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /* ----- Specific v1.0.0 properties -----  */
    this.DOMAIN_SEPARATOR_TYPEHASH = async () => {
      return [await this.read("DOMAIN_SEPARATOR_TYPEHASH")];
    };
    this.SENTINEL_MODULES = async () => {
      return [await this.read("SENTINEL_MODULES")];
    };
    this.SENTINEL_OWNERS = async () => {
      return [await this.read("SENTINEL_OWNERS")];
    };
    this.SAFE_MSG_TYPEHASH = async () => {
      return [await this.read("SAFE_MSG_TYPEHASH")];
    };
    this.SAFE_TX_TYPEHASH = async () => {
      return [await this.read("SAFE_TX_TYPEHASH")];
    };
    /* ----- End of specific v1.0.0 properties -----  */
    /**
     * @returns Array[contractName]
     */
    this.NAME = async () => {
      return [await this.read("NAME")];
    };
    /**
     * @returns Array[safeContractVersion]
     */
    this.VERSION = async () => {
      return [await this.read("VERSION")];
    };
    /**
     * @param args - Array[owner, txHash]
     * @returns Array[approvedHashes]
     */
    this.approvedHashes = async (args) => {
      return [await this.read("approvedHashes", args)];
    };
    /**
     * @returns Array[domainSeparator]
     */
    this.domainSeparator = async () => {
      return [await this.read("domainSeparator")];
    };
    /**
     * Returns array of modules.
     * @returns Array[Array[modules]]
     */
    this.getModules = async () => {
      return [await this.read("getModules")];
    };
    /**
     * Returns the list of Safe owner accounts.
     * @returns Array[Array[owners]]
     */
    this.getOwners = async () => {
      return [await this.read("getOwners")];
    };
    /**
     * Returns the Safe threshold.
     * @returns Array[threshold]
     */
    this.getThreshold = async () => {
      return [await this.read("getThreshold")];
    };
    /**
     * Checks if a specific address is an owner of the current Safe.
     * @param args - Array[address]
     * @returns Array[isOwner]
     */
    this.isOwner = async (args) => {
      return [await this.read("isOwner", args)];
    };
    /**
     * Returns the Safe nonce.
     * @returns Array[nonce]
     */
    this.nonce = async () => {
      return [await this.read("nonce")];
    };
    /**
     * @param args - Array[messageHash]
     * @returns Array[signedMessages]
     */
    this.signedMessages = async (args) => {
      return [await this.read("signedMessages", args)];
    };
    /**
     * Returns hash of a message that can be signed by owners.
     * @param args - Array[message]
     * @returns Array[messageHash]
     */
    this.getMessageHash = async (args) => {
      return [await this.read("getMessageHash", args)];
    };
    /**
     * Returns the bytes that are hashed to be signed by owners.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[encodedData]
     */
    this.encodeTransactionData = async (args) => {
      return [await this.read("encodeTransactionData", args)];
    };
    /**
     * Returns hash to be signed by owners.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[transactionHash]
     */
    this.getTransactionHash = async (args) => {
      return [await this.read("getTransactionHash", args)];
    };
  }
  /**
   * Marks a hash as approved. This can be used to validate a hash that is used by a signature.
   * @param hash - The hash that should be marked as approved for signatures that are verified by this contract.
   * @param options - Optional transaction options.
   * @returns Transaction result.
   */
  async approveHash(hash, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas("approveHash", [asHash(hash)], options);
    return toTxResult(
      this.runner,
      await this.write("approveHash", [asHash(hash)], { ...options, gasLimit }),
      options
    );
  }
  /**
   * Executes a transaction.
   * @param safeTransaction - The Safe transaction to execute.
   * @param options - Transaction options.
   * @returns Transaction result.
   */
  async execTransaction(safeTransaction, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas(
      "execTransaction",
      [
        safeTransaction.data.to,
        BigInt(safeTransaction.data.value),
        asHex(safeTransaction.data.data),
        safeTransaction.data.operation,
        BigInt(safeTransaction.data.safeTxGas),
        BigInt(safeTransaction.data.baseGas),
        BigInt(safeTransaction.data.gasPrice),
        safeTransaction.data.gasToken,
        safeTransaction.data.refundReceiver,
        asHex(safeTransaction.encodedSignatures())
      ],
      options
    );
    const args = [
      safeTransaction.data.to,
      BigInt(safeTransaction.data.value),
      asHex(safeTransaction.data.data),
      safeTransaction.data.operation,
      BigInt(safeTransaction.data.safeTxGas),
      BigInt(safeTransaction.data.baseGas),
      BigInt(safeTransaction.data.gasPrice),
      safeTransaction.data.gasToken,
      safeTransaction.data.refundReceiver,
      asHex(safeTransaction.encodedSignatures())
    ];
    return toTxResult(
      this.runner,
      await this.write("execTransaction", args, { ...options, gasLimit }),
      options
    );
  }
  async getModulesPaginated([start, pageSize]) {
    if (pageSize <= 0) throw new Error("Invalid page size for fetching paginated modules");
    const size = Number(pageSize);
    const [array] = await this.getModules();
    if (isSentinelAddress(start)) {
      const next = pageSize < array.length ? array[size] : SENTINEL_ADDRESS;
      return [array.slice(0, size), next];
    } else {
      const moduleIndex = array.findIndex((module) => sameString(module, start));
      if (moduleIndex === -1) {
        return [[], SENTINEL_ADDRESS];
      }
      const nextElementIndex = moduleIndex + 1;
      const nextPageAddress = nextElementIndex + size < array.length ? array[nextElementIndex + size] : SENTINEL_ADDRESS;
      return [array.slice(moduleIndex + 1, nextElementIndex + size), nextPageAddress];
    }
  }
  /**
   * Checks if a specific Safe module is enabled for the current Safe.
   * @param moduleAddress - The module address to check.
   * @returns True, if the module with the given address is enabled.
   */
  async isModuleEnabled([moduleAddress]) {
    const [modules] = await this.getModules();
    const isModuleEnabled = modules.some(
      (enabledModuleAddress) => sameString(enabledModuleAddress, moduleAddress)
    );
    return [isModuleEnabled];
  }
  /**
   * Checks whether a given Safe transaction can be executed successfully with no errors.
   * @param safeTransaction - The Safe transaction to check.
   * @param options - Optional transaction options.
   * @returns True, if the given transactions is valid.
   */
  async isValidTransaction(safeTransaction, options = {}) {
    try {
      const gasLimit = options?.gasLimit || await this.estimateGas(
        "execTransaction",
        [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        options
      );
      const converted = this.convertOptions({ ...options, gasLimit });
      const txResult = await simulateContract(this.runner, {
        address: this.contractAddress,
        functionName: "execTransaction",
        abi: this.contractAbi,
        args: [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        ...converted
      });
      return txResult.result;
    } catch (error) {
      return false;
    }
  }
  /**
   * returns the nonce of the Safe contract.
   *
   * @returns {Promise<bigint>} A promise that resolves to the nonce of the Safe contract.
   */
  async getNonce() {
    const [nonce] = await this.nonce();
    return nonce;
  }
};
var SafeContract_v1_0_0_default = SafeContract_v1_0_0;

// src/contracts/Safe/v1.1.1/SafeContract_v1_1_1.ts
import { simulateContract as simulateContract2 } from "viem/actions";
import {
  safe_1_1_1_ContractArtifacts
} from "@safe-global/types-kit";
var SafeContract_v1_1_1 = class extends SafeBaseContract_default {
  /**
   * Constructs an instance of SafeContract_v1_1_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param isL1SafeSingleton - A flag indicating if the contract is a L1 Safe Singleton.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.1.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, isL1SafeSingleton, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.1.1";
    const defaultAbi = safe_1_1_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      isL1SafeSingleton,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @returns Array[contractName]
     */
    this.NAME = async () => {
      return [await this.read("NAME")];
    };
    /**
     * @returns Array[safeContractVersion]
     */
    this.VERSION = async () => {
      return [await this.read("VERSION")];
    };
    /**
     * @param args - Array[owner, txHash]
     * @returns Array[approvedHashes]
     */
    this.approvedHashes = async (args) => {
      return [await this.read("approvedHashes", args)];
    };
    /**
     * @returns Array[domainSeparator]
     */
    this.domainSeparator = async () => {
      return [await this.read("domainSeparator")];
    };
    /**
     * Returns array of first 10 modules.
     * @returns Array[Array[modules]]
     */
    this.getModules = async () => {
      return [await this.read("getModules")];
    };
    /**
     * Returns array of modules.
     * @param args - Array[start, pageSize]
     * @returns Array[Array[modules], next]
     */
    this.getModulesPaginated = async (args) => {
      const [array, next] = await this.read("getModulesPaginated", args);
      return [array, next];
    };
    /**
     * Returns the list of Safe owner accounts.
     * @returns Array[Array[owners]]
     */
    this.getOwners = async () => {
      return [await this.read("getOwners")];
    };
    /**
     * Returns the Safe threshold.
     * @returns Array[threshold]
     */
    this.getThreshold = async () => {
      return [await this.read("getThreshold")];
    };
    /**
     * Checks if a specific address is an owner of the current Safe.
     * @param args - Array[address]
     * @returns Array[isOwner]
     */
    this.isOwner = async (args) => {
      return [await this.read("isOwner", args)];
    };
    /**
     * Returns the Safe nonce.
     * @returns Array[nonce]
     */
    this.nonce = async () => {
      return [await this.read("nonce")];
    };
    /**
     * @param args - Array[messageHash]
     * @returns Array[signedMessages]
     */
    this.signedMessages = async (args) => {
      return [await this.read("signedMessages", args)];
    };
    /**
     * Returns hash of a message that can be signed by owners.
     * @param args - Array[message]
     * @returns Array[messageHash]
     */
    this.getMessageHash = async (args) => {
      return [await this.read("getMessageHash", args)];
    };
    /**
     * Returns the bytes that are hashed to be signed by owners.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[encodedData]
     */
    this.encodeTransactionData = async (args) => {
      return [await this.read("encodeTransactionData", args)];
    };
    /**
     * Returns hash to be signed by owners.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[transactionHash]
     */
    this.getTransactionHash = async (args) => {
      return [await this.read("getTransactionHash", args)];
    };
  }
  /**
   * Marks a hash as approved. This can be used to validate a hash that is used by a signature.
   * @param hash - The hash that should be marked as approved for signatures that are verified by this contract.
   * @param options - Optional transaction options.
   * @returns Transaction result.
   */
  async approveHash(hash, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas("approveHash", [asHash(hash)], options);
    return toTxResult(
      this.runner,
      await this.write("approveHash", [asHash(hash)], { ...options, gasLimit }),
      options
    );
  }
  /**
   * Executes a transaction.
   * @param safeTransaction - The Safe transaction to execute.
   * @param options - Transaction options.
   * @returns Transaction result.
   */
  async execTransaction(safeTransaction, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas(
      "execTransaction",
      [
        safeTransaction.data.to,
        BigInt(safeTransaction.data.value),
        asHex(safeTransaction.data.data),
        safeTransaction.data.operation,
        BigInt(safeTransaction.data.safeTxGas),
        BigInt(safeTransaction.data.baseGas),
        BigInt(safeTransaction.data.gasPrice),
        safeTransaction.data.gasToken,
        safeTransaction.data.refundReceiver,
        asHex(safeTransaction.encodedSignatures())
      ],
      options
    );
    const args = [
      safeTransaction.data.to,
      BigInt(safeTransaction.data.value),
      asHex(safeTransaction.data.data),
      safeTransaction.data.operation,
      BigInt(safeTransaction.data.safeTxGas),
      BigInt(safeTransaction.data.baseGas),
      BigInt(safeTransaction.data.gasPrice),
      safeTransaction.data.gasToken,
      safeTransaction.data.refundReceiver,
      asHex(safeTransaction.encodedSignatures())
    ];
    return toTxResult(
      this.runner,
      await this.write("execTransaction", args, { ...options, gasLimit }),
      options
    );
  }
  /**
   * Checks if a specific Safe module is enabled for the current Safe.
   * @param moduleAddress - The module address to check.
   * @returns True, if the module with the given address is enabled.
   */
  async isModuleEnabled([moduleAddress]) {
    const [modules] = await this.getModules();
    const isModuleEnabled = modules.some(
      (enabledModuleAddress) => sameString(enabledModuleAddress, moduleAddress)
    );
    return [isModuleEnabled];
  }
  /**
   * Checks whether a given Safe transaction can be executed successfully with no errors.
   * @param safeTransaction - The Safe transaction to check.
   * @param options - Optional transaction options.
   * @returns True, if the given transactions is valid.
   */
  async isValidTransaction(safeTransaction, options = {}) {
    try {
      const gasLimit = options?.gasLimit || await this.estimateGas(
        "execTransaction",
        [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        options
      );
      const converted = this.convertOptions({ ...options, gasLimit });
      const txResult = await simulateContract2(this.runner, {
        address: this.contractAddress,
        functionName: "execTransaction",
        abi: this.contractAbi,
        args: [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        ...converted
      });
      return txResult.result;
    } catch (error) {
      return false;
    }
  }
  /**
   * returns the nonce of the Safe contract.
   *
   * @returns {Promise<bigint>} A promise that resolves to the nonce of the Safe contract.
   */
  async getNonce() {
    const [nonce] = await this.nonce();
    return nonce;
  }
};
var SafeContract_v1_1_1_default = SafeContract_v1_1_1;

// src/contracts/Safe/v1.2.0/SafeContract_v1_2_0.ts
import { simulateContract as simulateContract3 } from "viem/actions";
import {
  safe_1_2_0_ContractArtifacts
} from "@safe-global/types-kit";
var SafeContract_v1_2_0 = class extends SafeBaseContract_default {
  /**
   * Constructs an instance of SafeContract_v1_2_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param isL1SafeSingleton - A flag indicating if the contract is a L1 Safe Singleton.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.2.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, isL1SafeSingleton, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.2.0";
    const defaultAbi = safe_1_2_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      isL1SafeSingleton,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @returns Array[contractName]
     */
    this.NAME = async () => {
      return [await this.read("NAME")];
    };
    /**
     * @returns Array[safeContractVersion]
     */
    this.VERSION = async () => {
      return [await this.read("VERSION")];
    };
    /**
     * @param args - Array[owner, txHash]
     * @returns Array[approvedHashes]
     */
    this.approvedHashes = async (args) => {
      return [await this.read("approvedHashes", args)];
    };
    /**
     * @returns Array[domainSeparator]
     */
    this.domainSeparator = async () => {
      return [await this.read("domainSeparator")];
    };
    /**
     * Returns array of first 10 modules.
     * @returns Array[Array[modules]]
     */
    this.getModules = async () => {
      return [await this.read("getModules")];
    };
    /**
     * Returns array of modules.
     * @param args - Array[start, pageSize]
     * @returns Array[Array[modules], next]
     */
    this.getModulesPaginated = async (args) => {
      const [array, next] = await this.read("getModulesPaginated", args);
      return [array, next];
    };
    /**
     * Returns the list of Safe owner accounts.
     * @returns Array[Array[owners]]
     */
    this.getOwners = async () => {
      return [await this.read("getOwners")];
    };
    /**
     * Returns the Safe threshold.
     * @returns Array[threshold]
     */
    this.getThreshold = async () => {
      return [await this.read("getThreshold")];
    };
    /**
     * Checks if a specific Safe module is enabled for the current Safe.
     * @param args - Array[moduleAddress]
     * @returns Array[isEnabled]
     */
    this.isModuleEnabled = async (args) => {
      return [await this.read("isModuleEnabled", args)];
    };
    /**
     * Checks if a specific address is an owner of the current Safe.
     * @param args - Array[address]
     * @returns Array[isOwner]
     */
    this.isOwner = async (args) => {
      return [await this.read("isOwner", args)];
    };
    /**
     * Returns the Safe nonce.
     * @returns Array[nonce]
     */
    this.nonce = async () => {
      return [await this.read("nonce")];
    };
    /**
     * @param args - Array[messageHash]
     * @returns Array[signedMessages]
     */
    this.signedMessages = async (args) => {
      return [await this.read("signedMessages", args)];
    };
    /**
     * @param args - Array[message]
     * @returns Array[messageHash]
     */
    this.getMessageHash = async (args) => {
      return [await this.read("getMessageHash", args)];
    };
    /**
     * Encodes the data for a transaction to the Safe contract.
     *
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[encodedData]
     */
    this.encodeTransactionData = async (args) => {
      return [await this.read("encodeTransactionData", args)];
    };
    /**
     * Returns hash to be signed by owners.
     *
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[transactionHash]
     */
    this.getTransactionHash = async (args) => {
      return [await this.read("getTransactionHash", args)];
    };
  }
  /**
   * Marks a hash as approved. This can be used to validate a hash that is used by a signature.
   * @param hash - The hash that should be marked as approved for signatures that are verified by this contract.
   * @param options - Optional transaction options.
   * @returns Transaction result.
   */
  async approveHash(hash, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas("approveHash", [asHash(hash)], options);
    return toTxResult(
      this.runner,
      await this.write("approveHash", [asHash(hash)], { ...options, gasLimit }),
      options
    );
  }
  /**
   * Executes a transaction.
   * @param safeTransaction - The Safe transaction to execute.
   * @param options - Transaction options.
   * @returns Transaction result.
   */
  async execTransaction(safeTransaction, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas(
      "execTransaction",
      [
        safeTransaction.data.to,
        BigInt(safeTransaction.data.value),
        asHex(safeTransaction.data.data),
        safeTransaction.data.operation,
        BigInt(safeTransaction.data.safeTxGas),
        BigInt(safeTransaction.data.baseGas),
        BigInt(safeTransaction.data.gasPrice),
        safeTransaction.data.gasToken,
        safeTransaction.data.refundReceiver,
        asHex(safeTransaction.encodedSignatures())
      ],
      options
    );
    const args = [
      safeTransaction.data.to,
      BigInt(safeTransaction.data.value),
      asHex(safeTransaction.data.data),
      safeTransaction.data.operation,
      BigInt(safeTransaction.data.safeTxGas),
      BigInt(safeTransaction.data.baseGas),
      BigInt(safeTransaction.data.gasPrice),
      safeTransaction.data.gasToken,
      safeTransaction.data.refundReceiver,
      asHex(safeTransaction.encodedSignatures())
    ];
    return toTxResult(
      this.runner,
      await this.write("execTransaction", args, { ...options, gasLimit }),
      options
    );
  }
  /**
   * Returns the chain id of the Safe contract. (Custom method - not defined in the Safe Contract)
   * @returns Array[chainId]
   */
  async getChainId() {
    return [await Promise.resolve(this.chainId)];
  }
  /**
   * Checks whether a given Safe transaction can be executed successfully with no errors.
   * @param safeTransaction - The Safe transaction to check.
   * @param options - Optional transaction options.
   * @returns True, if the given transactions is valid.
   */
  async isValidTransaction(safeTransaction, options = {}) {
    try {
      const gasLimit = options?.gasLimit || await this.estimateGas(
        "execTransaction",
        [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        options
      );
      const converted = this.convertOptions({ ...options, gasLimit });
      const txResult = await simulateContract3(this.runner, {
        address: this.contractAddress,
        functionName: "execTransaction",
        abi: this.contractAbi,
        args: [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        ...converted
      });
      return txResult.result;
    } catch (error) {
      return false;
    }
  }
  /**
   * returns the nonce of the Safe contract.
   *
   * @returns {Promise<bigint>} A promise that resolves to the nonce of the Safe contract.
   */
  async getNonce() {
    const [nonce] = await this.nonce();
    return nonce;
  }
};
var SafeContract_v1_2_0_default = SafeContract_v1_2_0;

// src/contracts/Safe/v1.3.0/SafeContract_v1_3_0.ts
import { simulateContract as simulateContract4 } from "viem/actions";
import {
  safe_1_3_0_ContractArtifacts
} from "@safe-global/types-kit";
var SafeContract_v1_3_0 = class extends SafeBaseContract_default {
  /**
   * Constructs an instance of SafeContract_v1_3_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param isL1SafeSingleton - A flag indicating if the contract is a L1 Safe Singleton.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, isL1SafeSingleton, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.3.0";
    const defaultAbi = safe_1_3_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      isL1SafeSingleton,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @returns Array[safeContractVersion]
     */
    this.VERSION = async () => {
      return [await this.read("VERSION")];
    };
    /**
     * @param args - Array[owner, txHash]
     * @returns Array[approvedHashes]
     */
    this.approvedHashes = async (args) => {
      return [await this.read("approvedHashes", args)];
    };
    /**
     * Checks whether the signature provided is valid for the provided data, hash and number of required signatures.
     * Will revert otherwise.
     * @param args - Array[dataHash, data, signatures, requiredSignatures]
     * @returns Empty array
     */
    this.checkNSignatures = async (args) => {
      await this.read("checkNSignatures", args);
      return [];
    };
    /**
     * Checks whether the signature provided is valid for the provided data and hash. Will revert otherwise.
     * @param args - Array[dataHash, data, signatures]
     * @returns Empty array
     */
    this.checkSignatures = async (args) => {
      await this.read("checkSignatures", args);
      return [];
    };
    /**
     * @returns Array[domainSeparator]
     */
    this.domainSeparator = async () => {
      return [await this.read("domainSeparator")];
    };
    /**
     * Encodes the data for a transaction to the Safe contract.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[encodedData]
     */
    this.encodeTransactionData = async (args) => {
      return [await this.read("encodeTransactionData", args)];
    };
    /**
     * Returns array of modules.
     * @param args - Array[start, pageSize]
     * @returns Array[Array[modules], next]
     */
    this.getModulesPaginated = async (args) => {
      const [array, next] = await this.read("getModulesPaginated", args);
      return [array, next];
    };
    /**
     * Returns the list of Safe owner accounts.
     * @returns Array[Array[owners]]
     */
    this.getOwners = async () => {
      return [await this.read("getOwners")];
    };
    /**
     * Reads `length` bytes of storage in the currents contract
     * @param args - Array[offset, length]
     * @returns Array[storage]
     */
    this.getStorageAt = async (args) => {
      return [await this.read("getStorageAt", args)];
    };
    /**
     * Returns the Safe threshold.
     * @returns Array[threshold]
     */
    this.getThreshold = async () => {
      return [await this.read("getThreshold")];
    };
    /**
     * Returns hash to be signed by owners.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[transactionHash]
     */
    this.getTransactionHash = async (args) => {
      return [await this.read("getTransactionHash", args)];
    };
    /**
     * Checks if a specific Safe module is enabled for the current Safe.
     * @param args - Array[moduleAddress]
     * @returns Array[isEnabled]
     */
    this.isModuleEnabled = async (args) => {
      return [await this.read("isModuleEnabled", args)];
    };
    /**
     * Checks if a specific address is an owner of the current Safe.
     * @param args - Array[address]
     * @returns Array[isOwner]
     */
    this.isOwner = async (args) => {
      return [await this.read("isOwner", args)];
    };
    /**
     * Returns the Safe nonce.
     * @returns Array[nonce]
     */
    this.nonce = async () => {
      return [await this.read("nonce")];
    };
    /**
     * @param args - Array[messageHash]
     * @returns Array[signedMessages]
     */
    this.signedMessages = async (args) => {
      return [await this.read("signedMessages", args)];
    };
  }
  /**
   * Checks whether a given Safe transaction can be executed successfully with no errors.
   * @param safeTransaction - The Safe transaction to check.
   * @param options - Optional transaction options.
   * @returns True, if the given transactions is valid.
   */
  async isValidTransaction(safeTransaction, options = {}) {
    try {
      const gasLimit = options?.gasLimit || await this.estimateGas(
        "execTransaction",
        [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        options
      );
      const converted = this.convertOptions({ ...options, gasLimit });
      const txResult = await simulateContract4(this.runner, {
        address: this.contractAddress,
        functionName: "execTransaction",
        abi: this.contractAbi,
        args: [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        ...converted
      });
      return txResult.result;
    } catch (error) {
      return false;
    }
  }
  /**
   * Executes a transaction.
   * @param safeTransaction - The Safe transaction to execute.
   * @param options - Transaction options.
   * @returns Transaction result.
   */
  async execTransaction(safeTransaction, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas(
      "execTransaction",
      [
        safeTransaction.data.to,
        BigInt(safeTransaction.data.value),
        asHex(safeTransaction.data.data),
        safeTransaction.data.operation,
        BigInt(safeTransaction.data.safeTxGas),
        BigInt(safeTransaction.data.baseGas),
        BigInt(safeTransaction.data.gasPrice),
        safeTransaction.data.gasToken,
        safeTransaction.data.refundReceiver,
        asHex(safeTransaction.encodedSignatures())
      ],
      options
    );
    const args = [
      safeTransaction.data.to,
      BigInt(safeTransaction.data.value),
      asHex(safeTransaction.data.data),
      safeTransaction.data.operation,
      BigInt(safeTransaction.data.safeTxGas),
      BigInt(safeTransaction.data.baseGas),
      BigInt(safeTransaction.data.gasPrice),
      safeTransaction.data.gasToken,
      safeTransaction.data.refundReceiver,
      asHex(safeTransaction.encodedSignatures())
    ];
    return toTxResult(
      this.runner,
      await this.write("execTransaction", args, { ...options, gasLimit }),
      options
    );
  }
  /**
   * Returns array of first 10 modules.
   * @returns Array[modules]
   */
  async getModules() {
    const [modules] = await this.getModulesPaginated([SENTINEL_ADDRESS, BigInt(10)]);
    return [modules.map((module) => module)];
  }
  /**
   * Marks a hash as approved. This can be used to validate a hash that is used by a signature.
   * @param hash - The hash that should be marked as approved for signatures that are verified by this contract.
   * @param options - Optional transaction options.
   * @returns Transaction result.
   */
  async approveHash(hash, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas("approveHash", [asHash(hash)], options);
    return toTxResult(
      this.runner,
      await this.write("approveHash", [asHash(hash)], { ...options, gasLimit }),
      options
    );
  }
  /**
   * Returns the chain id of the Safe contract. (Custom method - not defined in the Safe Contract)
   * @returns Array[chainId]
   */
  async getChainId() {
    return [await Promise.resolve(this.chainId)];
  }
  /**
   * returns the nonce of the Safe contract.
   *
   * @returns {Promise<bigint>} A promise that resolves to the nonce of the Safe contract.
   */
  async getNonce() {
    const [nonce] = await this.nonce();
    return nonce;
  }
};
var SafeContract_v1_3_0_default = SafeContract_v1_3_0;

// src/contracts/Safe/v1.4.1/SafeContract_v1_4_1.ts
import { simulateContract as simulateContract5 } from "viem/actions";
import {
  safe_1_4_1_ContractArtifacts
} from "@safe-global/types-kit";
var SafeContract_v1_4_1 = class extends SafeBaseContract_default {
  /**
   * Constructs an instance of SafeContract_v1_4_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param isL1SafeSingleton - A flag indicating if the contract is a L1 Safe Singleton.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, isL1SafeSingleton, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.4.1";
    const defaultAbi = safe_1_4_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      isL1SafeSingleton,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @returns Array[safeContractVersion]
     */
    this.VERSION = async () => {
      return [await this.read("VERSION")];
    };
    /**
     * @param args - Array[owner, txHash]
     * @returns Array[approvedHashes]
     */
    this.approvedHashes = async (args) => {
      return [await this.read("approvedHashes", args)];
    };
    /**
     * Checks whether the signature provided is valid for the provided data, hash and number of required signatures.
     * Will revert otherwise.
     * @param args - Array[dataHash, data, signatures, requiredSignatures]
     * @returns Empty array
     */
    this.checkNSignatures = async (args) => {
      await this.read("checkNSignatures", args);
      return [];
    };
    /**
     * Checks whether the signature provided is valid for the provided data and hash. Will revert otherwise.
     * @param args - Array[dataHash, data, signatures]
     * @returns Empty array
     */
    this.checkSignatures = async (args) => {
      await this.read("checkSignatures", args);
      return [];
    };
    /**
     * @returns Array[domainSeparator]
     */
    this.domainSeparator = async () => {
      return [await this.read("domainSeparator")];
    };
    /**
     * Encodes the data for a transaction to the Safe contract.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[encodedData]
     */
    this.encodeTransactionData = async (args) => {
      return [await this.read("encodeTransactionData", args)];
    };
    /**
     * Returns array of modules.
     * @param args - Array[start, pageSize]
     * @returns Array[Array[modules], next]
     */
    this.getModulesPaginated = async (args) => {
      const [array, next] = await this.read("getModulesPaginated", args);
      return [array, next];
    };
    /**
     * Returns the list of Safe owner accounts.
     * @returns Array[Array[owners]]
     */
    this.getOwners = async () => {
      return [await this.read("getOwners")];
    };
    /**
     * Reads `length` bytes of storage in the currents contract
     * @param args - Array[offset, length]
     * @returns Array[storage]
     */
    this.getStorageAt = async (args) => {
      return [await this.read("getStorageAt", args)];
    };
    /**
     * Returns the Safe threshold.
     * @returns Array[threshold]
     */
    this.getThreshold = async () => {
      return [await this.read("getThreshold")];
    };
    /**
     * Returns hash to be signed by owners.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
     * @returns Array[transactionHash]
     */
    this.getTransactionHash = async (args) => {
      return [await this.read("getTransactionHash", args)];
    };
    /**
     * Checks if a specific Safe module is enabled for the current Safe.
     * @param args - Array[moduleAddress]
     * @returns Array[isEnabled]
     */
    this.isModuleEnabled = async (args) => {
      return [await this.read("isModuleEnabled", args)];
    };
    /**
     * Checks if a specific address is an owner of the current Safe.
     * @param args - Array[address]
     * @returns Array[isOwner]
     */
    this.isOwner = async (args) => {
      return [await this.read("isOwner", args)];
    };
    /**
     * Returns the Safe nonce.
     * @returns Array[nonce]
     */
    this.nonce = async () => {
      return [await this.read("nonce")];
    };
    /**
     * @param args - Array[messageHash]
     * @returns Array[signedMessages]
     */
    this.signedMessages = async (args) => {
      return [await this.read("signedMessages", args)];
    };
  }
  /**
   * Checks whether a given Safe transaction can be executed successfully with no errors.
   * @param safeTransaction - The Safe transaction to check.
   * @param options - Optional transaction options.
   * @returns True, if the given transactions is valid.
   */
  async isValidTransaction(safeTransaction, options = {}) {
    try {
      const gasLimit = options?.gasLimit || await this.estimateGas(
        "execTransaction",
        [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        options
      );
      const converted = this.convertOptions({ ...options, gasLimit });
      const txResult = await simulateContract5(this.runner, {
        address: this.contractAddress,
        functionName: "execTransaction",
        abi: this.contractAbi,
        args: [
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          asHex(safeTransaction.data.data),
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          asHex(safeTransaction.encodedSignatures())
        ],
        ...converted
      });
      return txResult.result;
    } catch (error) {
      return false;
    }
  }
  /**
   * Executes a transaction.
   * @param safeTransaction - The Safe transaction to execute.
   * @param options - Transaction options.
   * @returns Transaction result.
   */
  async execTransaction(safeTransaction, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas(
      "execTransaction",
      [
        safeTransaction.data.to,
        BigInt(safeTransaction.data.value),
        asHex(safeTransaction.data.data),
        safeTransaction.data.operation,
        BigInt(safeTransaction.data.safeTxGas),
        BigInt(safeTransaction.data.baseGas),
        BigInt(safeTransaction.data.gasPrice),
        safeTransaction.data.gasToken,
        safeTransaction.data.refundReceiver,
        asHex(safeTransaction.encodedSignatures())
      ],
      options
    );
    const args = [
      safeTransaction.data.to,
      BigInt(safeTransaction.data.value),
      asHex(safeTransaction.data.data),
      safeTransaction.data.operation,
      BigInt(safeTransaction.data.safeTxGas),
      BigInt(safeTransaction.data.baseGas),
      BigInt(safeTransaction.data.gasPrice),
      safeTransaction.data.gasToken,
      safeTransaction.data.refundReceiver,
      asHex(safeTransaction.encodedSignatures())
    ];
    return toTxResult(
      this.runner,
      await this.write("execTransaction", args, { ...options, gasLimit }),
      options
    );
  }
  /**
   * Returns array of first 10 modules.
   * @returns Array[modules]
   */
  async getModules() {
    const [modules] = await this.getModulesPaginated([SENTINEL_ADDRESS, BigInt(10)]);
    return [modules.map((module) => module)];
  }
  /**
   * Marks a hash as approved. This can be used to validate a hash that is used by a signature.
   * @param hash - The hash that should be marked as approved for signatures that are verified by this contract.
   * @param options - Optional transaction options.
   * @returns Transaction result.
   */
  async approveHash(hash, options) {
    const gasLimit = options?.gasLimit || await this.estimateGas("approveHash", [asHash(hash)], options);
    return toTxResult(
      this.runner,
      await this.write("approveHash", [asHash(hash)], { ...options, gasLimit }),
      options
    );
  }
  /**
   * Returns the chain id of the Safe contract. (Custom method - not defined in the Safe Contract)
   * @returns Array[chainId]
   */
  async getChainId() {
    return [await Promise.resolve(this.chainId)];
  }
  /**
   * returns the nonce of the Safe contract.
   *
   * @returns {Promise<bigint>} A promise that resolves to the nonce of the Safe contract.
   */
  async getNonce() {
    const [nonce] = await this.nonce();
    return nonce;
  }
};
var SafeContract_v1_4_1_default = SafeContract_v1_4_1;

// src/contracts/SafeProxyFactory/SafeProxyFactoryBaseContract.ts
var SafeProxyFactoryBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of SafeProxyFactoryBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the Safe contract. It should be compatible with the specific version of the contract.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the Safe deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "safeProxyFactoryVersion";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var SafeProxyFactoryBaseContract_default = SafeProxyFactoryBaseContract;

// src/contracts/SafeProxyFactory/v1.0.0/SafeProxyFactoryContract_v1_0_0.ts
import {
  safeProxyFactory_1_0_0_ContractArtifacts
} from "@safe-global/types-kit";
var SafeProxyFactoryContract_v1_0_0 = class extends SafeProxyFactoryBaseContract_default {
  /**
   * Constructs an instance of SafeProxyFactoryContract_v1_0_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.0.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.0.0";
    const defaultAbi = safeProxyFactory_1_0_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     * @returns Array[creationCode]
     */
    this.proxyCreationCode = async () => {
      return [await this.read("proxyCreationCode")];
    };
    /**
     * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
     * @returns Array[runtimeCode]
     */
    this.proxyRuntimeCode = async () => {
      return [await this.read("proxyRuntimeCode")];
    };
    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param args - Array[masterCopy, data]
     * @returns Array[proxyAddress]
     */
    this.createProxy = async (args) => {
      return [await this.write("createProxy", args)];
    };
    /**
     * Allows to create new proxy contract and execute a message call to the new proxy within one transaction.
     * @param args - Array[masterCopy, initializer, saltNonce]
     * @returns Array[proxyAddress]
     */
    this.createProxyWithNonce = async (args) => {
      return [await this.write("createProxyWithNonce", args)];
    };
  }
};
var SafeProxyFactoryContract_v1_0_0_default = SafeProxyFactoryContract_v1_0_0;

// src/contracts/SafeProxyFactory/v1.1.1/SafeProxyFactoryContract_v1_1_1.ts
import {
  safeProxyFactory_1_1_1_ContractArtifacts
} from "@safe-global/types-kit";
var SafeProxyFactoryContract_v1_1_1 = class extends SafeProxyFactoryBaseContract_default {
  /**
   * Constructs an instance of SafeProxyFactoryContract_v1_1_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.1.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.1.1";
    const defaultAbi = safeProxyFactory_1_1_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     * @returns Array[creationCode]
     */
    this.proxyCreationCode = async () => {
      return [await this.read("proxyCreationCode")];
    };
    /**
     * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
     * @returns Array[runtimeCode]
     */
    this.proxyRuntimeCode = async () => {
      return [await this.read("proxyRuntimeCode")];
    };
    /**
     * Allows to get the address for a new proxy contact created via `createProxyWithNonce`.
     * @param args - Array[masterCopy, initializer, saltNonceBigInt]
     * @returns Array[proxyAddress]
     */
    this.calculateCreateProxyWithNonceAddress = async (args) => {
      return [await this.write("calculateCreateProxyWithNonceAddress", args)];
    };
    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param args - Array[masterCopy, data]
     * @returns Array[proxyAddress]
     */
    this.createProxy = async (args) => {
      return [await this.write("createProxy", args)];
    };
    /**
     * Allows to create new proxy contract, execute a message call to the new proxy and call a specified callback within one transaction.
     * @param args - Array[masterCopy, initializer, saltNonce, callback]
     * @returns Array[proxyAddress]
     */
    this.createProxyWithCallback = async (args) => {
      return [await this.write("createProxyWithCallback", args)];
    };
    /**
     * Allows to create new proxy contract and execute a message call to the new proxy within one transaction.
     * @param args - Array[masterCopy, initializer, saltNonce]
     * @returns Array[proxyAddress]
     */
    this.createProxyWithNonce = async (args) => {
      return [await this.write("createProxyWithNonce", args)];
    };
  }
};
var SafeProxyFactoryContract_v1_1_1_default = SafeProxyFactoryContract_v1_1_1;

// src/contracts/SafeProxyFactory/v1.3.0/SafeProxyFactoryContract_v1_3_0.ts
import {
  safeProxyFactory_1_3_0_ContractArtifacts
} from "@safe-global/types-kit";
var SafeProxyFactoryContract_v1_3_0 = class extends SafeProxyFactoryBaseContract_default {
  /**
   * Constructs an instance of SafeProxyFactoryContract_v1_3_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.3.0";
    const defaultAbi = safeProxyFactory_1_3_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     * @returns Array[creationCode]
     */
    this.proxyCreationCode = async () => {
      return [await this.read("proxyCreationCode")];
    };
    /**
     * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
     * @returns Array[runtimeCode]
     */
    this.proxyRuntimeCode = async () => {
      return [await this.read("proxyRuntimeCode")];
    };
    /**
     * Allows to get the address for a new proxy contact created via `createProxyWithNonce`.
     * @param args - Array[singleton, initializer, saltNonce]
     * @returns Array[proxyAddress]
     */
    this.calculateCreateProxyWithNonceAddress = async (args) => {
      return [await this.write("calculateCreateProxyWithNonceAddress", args)];
    };
    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param args - Array[singleton, data]
     * @returns Array[proxyAddress]
     */
    this.createProxy = async (args) => {
      return [await this.write("createProxy", args)];
    };
    /**
     * Allows to create new proxy contract, execute a message call to the new proxy and call a specified callback within one transaction.
     * @param args - Array[singleton, initializer, saltNonce, callback]
     * @returns Array[proxyAddress]
     */
    this.createProxyWithCallback = async (args) => {
      return [await this.write("createProxyWithCallback", args)];
    };
    /**
     * Allows to create new proxy contract and execute a message call to the new proxy within one transaction.
     * @param args - Array[singleton, initializer, saltNonce]
     * @returns Array[proxyAddress]
     */
    this.createProxyWithNonce = async (args) => {
      return [await this.write("createProxyWithNonce", args)];
    };
  }
};
var SafeProxyFactoryContract_v1_3_0_default = SafeProxyFactoryContract_v1_3_0;

// src/contracts/SafeProxyFactory/v1.4.1/SafeProxyFactoryContract_v1_4_1.ts
import {
  safeProxyFactory_1_4_1_ContractArtifacts
} from "@safe-global/types-kit";
var SafeProxyFactoryContract_v1_4_1 = class extends SafeProxyFactoryBaseContract_default {
  /**
   * Constructs an instance of SafeProxyFactoryContract_v1_4_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.4.1";
    const defaultAbi = safeProxyFactory_1_4_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * Returns the ID of the chain the contract is currently deployed on.
     * @returns Array[chainId]
     */
    this.getChainId = async () => {
      return [await this.read("getChainId")];
    };
    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     * @returns Array[creationCode]
     */
    this.proxyCreationCode = async () => {
      return [await this.read("proxyCreationCode")];
    };
    /**
     * Deploys a new chain-specific proxy with singleton and salt. Optionally executes an initializer call to a new proxy.
     * @param args - Array[singleton, initializer, saltNonce]
     * @returns Array[proxy]
     */
    this.createChainSpecificProxyWithNonce = async (args) => {
      return [await this.write("createChainSpecificProxyWithNonce", args)];
    };
    /**
     * Deploy a new proxy with singleton and salt.
     * Optionally executes an initializer call to a new proxy and calls a specified callback address.
     * @param args - Array[singleton, initializer, saltNonce, callback]
     * @returns Array[proxy]
     */
    this.createProxyWithCallback = async (args) => {
      return [await this.write("createProxyWithCallback", args)];
    };
    /**
     * Deploys a new proxy with singleton and salt. Optionally executes an initializer call to a new proxy.
     * @param args - Array[singleton, initializer, saltNonce]
     * @returns Array[proxy]
     */
    this.createProxyWithNonce = async (args) => {
      return [await this.write("createProxyWithNonce", args)];
    };
  }
};
var SafeProxyFactoryContract_v1_4_1_default = SafeProxyFactoryContract_v1_4_1;

// src/contracts/SimulateTxAccessor/SimulateTxAccessorBaseContract.ts
var SimulateTxAccessorBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of SimulateTxAccessorBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the SimulateTxAccessor contract. It should be compatible with the specific version of the contract.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the Safe deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "simulateTxAccessorVersion";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var SimulateTxAccessorBaseContract_default = SimulateTxAccessorBaseContract;

// src/contracts/SimulateTxAccessor/v1.3.0/SimulateTxAccessorContract_v1_3_0.ts
import {
  simulateTxAccessor_1_3_0_ContractArtifacts
} from "@safe-global/types-kit";
var SimulateTxAccessorContract_v1_3_0 = class extends SimulateTxAccessorBaseContract_default {
  /**
   * Constructs an instance of SimulateTxAccessorContract_v1_3_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the SimulateTxAccessor deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.3.0";
    const defaultAbi = simulateTxAccessor_1_3_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @param args - Array[to, value, data, operation]
     * @returns Array[estimate, success, returnData]
     */
    this.simulate = async (args) => {
      const [estimate, success, returnData] = await this.write("simulate", args);
      return [BigInt(estimate), !!success, asHex(returnData)];
    };
  }
};
var SimulateTxAccessorContract_v1_3_0_default = SimulateTxAccessorContract_v1_3_0;

// src/contracts/SimulateTxAccessor/v1.4.1/SimulateTxAccessorContract_v1_4_1.ts
import {
  simulateTxAccessor_1_4_1_ContractArtifacts
} from "@safe-global/types-kit";
var SimulateTxAccessorContract_v1_4_1 = class extends SimulateTxAccessorBaseContract_default {
  /**
   * Constructs an instance of SimulateTxAccessorContract_v1_4_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the SimulateTxAccessor deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.4.1";
    const defaultAbi = simulateTxAccessor_1_4_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * @param args - Array[to, value, data, operation]
     * @returns Array[estimate, success, returnData]
     */
    this.simulate = async (args) => {
      const [estimate, success, returnData] = await this.write("simulate", args);
      return [BigInt(estimate), !!success, asHex(returnData)];
    };
  }
};
var SimulateTxAccessorContract_v1_4_1_default = SimulateTxAccessorContract_v1_4_1;

// src/contracts/CompatibilityFallbackHandler/CompatibilityFallbackHandlerBaseContract.ts
var CompatibilityFallbackHandlerBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of  CompatibilityFallbackHandlerBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the CompatibilityFallbackHandler contract. It should be compatible with the specific version of the contract.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the Safe deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "compatibilityFallbackHandler";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var CompatibilityFallbackHandlerBaseContract_default = CompatibilityFallbackHandlerBaseContract;

// src/contracts/CompatibilityFallbackHandler/v1.3.0/CompatibilityFallbackHandlerContract_v1_3_0.ts
import {
  compatibilityFallbackHandler_1_3_0_ContractArtifacts
} from "@safe-global/types-kit";
var CompatibilityFallbackHandlerContract_v1_3_0 = class extends CompatibilityFallbackHandlerBaseContract_default {
  /**
   * Constructs an instance of CompatibilityFallbackHandlerContract_v1_3_0
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the CompatibilityFallbackHandler deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.3.0";
    const defaultAbi = compatibilityFallbackHandler_1_3_0_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
  }
};
var CompatibilityFallbackHandlerContract_v1_3_0_default = CompatibilityFallbackHandlerContract_v1_3_0;

// src/contracts/CompatibilityFallbackHandler/v1.4.1/CompatibilityFallbackHandlerContract_v1_4_1.ts
import {
  compatibilityFallbackHandler_1_4_1_ContractArtifacts
} from "@safe-global/types-kit";
var CompatibilityFallbackHandlerContract_v1_4_1 = class extends CompatibilityFallbackHandlerBaseContract_default {
  /**
   * Constructs an instance of CompatibilityFallbackHandlerContract_v1_4_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the CompatibilityFallbackHandler deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, customContractAddress, customContractAbi, deploymentType) {
    const safeVersion = "1.4.1";
    const defaultAbi = compatibilityFallbackHandler_1_4_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
  }
};
var CompatibilityFallbackHandlerContract_v1_4_1_default = CompatibilityFallbackHandlerContract_v1_4_1;

// src/contracts/SafeWebAuthnSignerFactory/SafeWebAuthnSignerFactoryBaseContract.ts
var SafeWebAuthnSignerFactoryBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of SafeWebAuthnSignerFactoryBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the Safe contract. It should be compatible with the specific version of the contract.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the Safe deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "safeWebAuthnSignerFactoryVersion";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var SafeWebAuthnSignerFactoryBaseContract_default = SafeWebAuthnSignerFactoryBaseContract;

// src/contracts/SafeWebAuthnSignerFactory/v0.2.1/SafeWebAuthnSignerFactoryContract_v0_2_1.ts
import {
  SafeWebAuthnSignerFactory_0_2_1_ContractArtifacts
} from "@safe-global/types-kit";
var SafeWebAuthnSignerFactoryContract_v0_2_1 = class extends SafeWebAuthnSignerFactoryBaseContract_default {
  /**
   * Constructs an instance of SafeWebAuthnSignerFactoryContract_v0_2_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 0.2.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const defaultAbi = SafeWebAuthnSignerFactory_0_2_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * Returns the address of the Signer.
     * @param args - Array[x, y, verifiers]
     * @returns Array[signer]
     */
    this.getSigner = async (args) => {
      return [await this.read("getSigner", args)];
    };
    /**
     * Returns the address of the Signer and deploy the signer contract if its not deployed yet.
     * @param args - Array[x, y, verifiers]
     * @returns Array[signer]
     */
    this.createSigner = async (args) => {
      return [await this.write("createSigner", args)];
    };
    this.isValidSignatureForSigner = async (args) => {
      return [await this.read("isValidSignatureForSigner", args)];
    };
  }
};
var SafeWebAuthnSignerFactoryContract_v0_2_1_default = SafeWebAuthnSignerFactoryContract_v0_2_1;

// src/contracts/SafeWebAuthnSharedSigner/SafeWebAuthnSharedSignerBaseContract.ts
var SafeWebAuthnSharedSignerBaseContract = class extends BaseContract_default {
  /**
   * @constructor
   * Constructs an instance of SafeWebAuthnSharedSignerBaseContract.
   *
   * @param chainId - The chain ID of the contract.
   * @param safeProvider - An instance of SafeProvider.
   * @param defaultAbi - The default ABI for the Safe contract. It should be compatible with the specific version of the contract.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the ABI is derived from the Safe deployments or the defaultAbi is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, defaultAbi, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const contractName3 = "safeWebAuthnSharedSignerVersion";
    super(
      contractName3,
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    this.contractName = contractName3;
  }
};
var SafeWebAuthnSharedSignerBaseContract_default = SafeWebAuthnSharedSignerBaseContract;

// src/contracts/SafeWebAuthnSharedSigner/v0.2.1/SafeWebAuthnSharedSignerContract_v0_2_1.ts
import {
  SafeWebAuthnSharedSigner_0_2_1_ContractArtifacts
} from "@safe-global/types-kit";
var SafeWebAuthnSharedSignerContract_v0_2_1 = class extends SafeWebAuthnSharedSignerBaseContract_default {
  /**
   * Constructs an instance of SafeWebAuthnSharedSignerContract_v0_2_1
   *
   * @param chainId - The chain ID where the contract resides.
   * @param safeProvider - An instance of SafeProvider.
   * @param safeVersion - The version of the Safe contract.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 0.2.1 is used.
   * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
   */
  constructor(chainId, safeProvider, safeVersion, customContractAddress, customContractAbi, deploymentType) {
    const defaultAbi = SafeWebAuthnSharedSigner_0_2_1_ContractArtifacts.abi;
    super(
      chainId,
      safeProvider,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      deploymentType
    );
    /**
     * Return the signer configuration for the specified account.
     * @param args - Array[address]
     * @returns Array[signer]
     */
    this.getConfiguration = async (args) => {
      return [await this.read("getConfiguration", args)];
    };
    /**
     * Sets the signer configuration for the calling account.
     * @param args - Array[signer]
     * @returns Array[]
     */
    this.configure = async (args) => {
      await this.write("configure", args);
      return [];
    };
    this.isValidSignature = async (args) => {
      return [await this.read("isValidSignature", args)];
    };
    /**
     * @returns The starting storage slot on the account containing the signer data.
     */
    this.SIGNER_SLOT = async () => {
      return [await this.read("SIGNER_SLOT")];
    };
  }
};
var SafeWebAuthnSharedSignerContract_v0_2_1_default = SafeWebAuthnSharedSignerContract_v0_2_1;

// src/contracts/contractInstances.ts
async function getSafeContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, isL1SafeSingleton, deploymentType) {
  const chainId = await safeProvider.getChainId();
  let safeContractInstance;
  switch (safeVersion) {
    case "1.4.1":
      safeContractInstance = new SafeContract_v1_4_1_default(
        chainId,
        safeProvider,
        isL1SafeSingleton,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.3.0":
      safeContractInstance = new SafeContract_v1_3_0_default(
        chainId,
        safeProvider,
        isL1SafeSingleton,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.2.0":
      safeContractInstance = new SafeContract_v1_2_0_default(
        chainId,
        safeProvider,
        isL1SafeSingleton,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.1.1":
      safeContractInstance = new SafeContract_v1_1_1_default(
        chainId,
        safeProvider,
        isL1SafeSingleton,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.0.0":
      safeContractInstance = new SafeContract_v1_0_0_default(
        chainId,
        safeProvider,
        isL1SafeSingleton,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    default:
      throw new Error("Invalid Safe version");
  }
  await safeContractInstance.init();
  return safeContractInstance;
}
async function getCompatibilityFallbackHandlerContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  let compatibilityFallbackHandlerInstance;
  switch (safeVersion) {
    case "1.4.1":
      compatibilityFallbackHandlerInstance = new CompatibilityFallbackHandlerContract_v1_4_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.3.0":
    case "1.2.0":
    case "1.1.1":
      compatibilityFallbackHandlerInstance = new CompatibilityFallbackHandlerContract_v1_3_0_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    default:
      throw new Error("Invalid Safe version");
  }
  await compatibilityFallbackHandlerInstance.init();
  return compatibilityFallbackHandlerInstance;
}
async function getMultiSendContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  let multiSendContractInstance;
  switch (safeVersion) {
    case "1.4.1":
      multiSendContractInstance = new MultiSendContract_v1_4_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.3.0":
      multiSendContractInstance = new MultiSendContract_v1_3_0_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.2.0":
    case "1.1.1":
    case "1.0.0":
      multiSendContractInstance = new MultiSendContract_v1_1_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    default:
      throw new Error("Invalid Safe version");
  }
  await multiSendContractInstance.init();
  return multiSendContractInstance;
}
async function getMultiSendCallOnlyContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  let multiSendCallOnlyContractInstance;
  switch (safeVersion) {
    case "1.4.1":
      multiSendCallOnlyContractInstance = new MultiSendCallOnlyContract_v1_4_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.3.0":
    case "1.2.0":
    case "1.1.1":
    case "1.0.0":
      multiSendCallOnlyContractInstance = new MultiSendCallOnlyContract_v1_3_0_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    default:
      throw new Error("Invalid Safe version");
  }
  await multiSendCallOnlyContractInstance.init();
  return multiSendCallOnlyContractInstance;
}
async function getSafeProxyFactoryContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  let safeProxyFactoryContractInstance;
  switch (safeVersion) {
    case "1.4.1":
      safeProxyFactoryContractInstance = new SafeProxyFactoryContract_v1_4_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.3.0":
      safeProxyFactoryContractInstance = new SafeProxyFactoryContract_v1_3_0_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.2.0":
    case "1.1.1":
      safeProxyFactoryContractInstance = new SafeProxyFactoryContract_v1_1_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.0.0":
      safeProxyFactoryContractInstance = new SafeProxyFactoryContract_v1_0_0_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    default:
      throw new Error("Invalid Safe version");
  }
  await safeProxyFactoryContractInstance.init();
  return safeProxyFactoryContractInstance;
}
async function getSignMessageLibContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  let signMessageLibContractInstance;
  switch (safeVersion) {
    case "1.4.1":
      signMessageLibContractInstance = new SignMessageLibContract_v1_4_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.3.0":
      signMessageLibContractInstance = new SignMessageLibContract_v1_3_0_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    default:
      throw new Error("Invalid Safe version");
  }
  await signMessageLibContractInstance.init();
  return signMessageLibContractInstance;
}
async function getCreateCallContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  let createCallContractInstance;
  switch (safeVersion) {
    case "1.4.1":
      createCallContractInstance = new CreateCallContract_v1_4_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.3.0":
    case "1.2.0":
    case "1.1.1":
    case "1.0.0":
      createCallContractInstance = new CreateCallContract_v1_3_0_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    default:
      throw new Error("Invalid Safe version");
  }
  await createCallContractInstance.init();
  return createCallContractInstance;
}
async function getSimulateTxAccessorContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  let simulateTxAccessorContractInstance;
  switch (safeVersion) {
    case "1.4.1":
      simulateTxAccessorContractInstance = new SimulateTxAccessorContract_v1_4_1_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    case "1.3.0":
      simulateTxAccessorContractInstance = new SimulateTxAccessorContract_v1_3_0_default(
        chainId,
        safeProvider,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      break;
    default:
      throw new Error("Invalid Safe version");
  }
  await simulateTxAccessorContractInstance.init();
  return simulateTxAccessorContractInstance;
}
async function getSafeWebAuthnSignerFactoryContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  switch (safeVersion) {
    case "1.4.1":
    case "1.3.0":
      const safeWebAuthnSignerFactoryContractInstance = new SafeWebAuthnSignerFactoryContract_v0_2_1_default(
        chainId,
        safeProvider,
        safeVersion,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      await safeWebAuthnSignerFactoryContractInstance.init();
      return safeWebAuthnSignerFactoryContractInstance;
    default:
      throw new Error("Invalid Safe version");
  }
}
async function getSafeWebAuthnSharedSignerContractInstance(safeVersion, safeProvider, contractAddress, customContractAbi, deploymentType) {
  const chainId = await safeProvider.getChainId();
  switch (safeVersion) {
    case "1.4.1":
    case "1.3.0":
      const safeWebAuthnSharedSignerContractInstance = new SafeWebAuthnSharedSignerContract_v0_2_1_default(
        chainId,
        safeProvider,
        safeVersion,
        contractAddress,
        customContractAbi,
        deploymentType
      );
      await safeWebAuthnSharedSignerContractInstance.init();
      return safeWebAuthnSharedSignerContractInstance;
    default:
      throw new Error("Invalid Safe version");
  }
}

// src/contracts/safeDeploymentContracts.ts
async function getSafeContract({
  safeProvider,
  safeVersion,
  customSafeAddress,
  isL1SafeSingleton,
  customContracts,
  deploymentType
}) {
  const safeContract = await getSafeContractInstance(
    safeVersion,
    safeProvider,
    SAFE_SINGLETON_ADDRESS,
    customContracts?.safeSingletonAbi,
    isL1SafeSingleton,
    deploymentType
  );  
  const isContractDeployed = await safeProvider.isContractDeployed(safeContract.getAddress());
  if (!isContractDeployed) {
    throw new Error("SafeProxy contract is not deployed on the current network");
  }
  return safeContract;
}
async function getSafeProxyFactoryContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const safeProxyFactoryContract = await getSafeProxyFactoryContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.safeProxyFactoryAddress,
    customContracts?.safeProxyFactoryAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(
    safeProxyFactoryContract.getAddress()
  );
  if (!isContractDeployed) {
    throw new Error("SafeProxyFactory contract is not deployed on the current network");
  }
  return safeProxyFactoryContract;
}
async function getCompatibilityFallbackHandlerContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const fallbackHandlerContract = await getCompatibilityFallbackHandlerContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.fallbackHandlerAddress,
    customContracts?.fallbackHandlerAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(
    fallbackHandlerContract.getAddress()
  );
  if (!isContractDeployed) {
    throw new Error("CompatibilityFallbackHandler contract is not deployed on the current network");
  }
  return fallbackHandlerContract;
}
async function getMultiSendContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const multiSendContract = await getMultiSendContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.multiSendAddress,
    customContracts?.multiSendAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(multiSendContract.getAddress());
  if (!isContractDeployed) {
    throw new Error("MultiSend contract is not deployed on the current network");
  }
  return multiSendContract;
}
async function getMultiSendCallOnlyContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const multiSendCallOnlyContract = await getMultiSendCallOnlyContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.multiSendCallOnlyAddress,
    customContracts?.multiSendCallOnlyAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(
    multiSendCallOnlyContract.getAddress()
  );
  if (!isContractDeployed) {
    throw new Error("MultiSendCallOnly contract is not deployed on the current network");
  }
  return multiSendCallOnlyContract;
}
async function getSignMessageLibContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const signMessageLibContract = await getSignMessageLibContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.signMessageLibAddress,
    customContracts?.signMessageLibAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(
    signMessageLibContract.getAddress()
  );
  if (!isContractDeployed) {
    throw new Error("SignMessageLib contract is not deployed on the current network");
  }
  return signMessageLibContract;
}
async function getCreateCallContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const createCallContract = await getCreateCallContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.createCallAddress,
    customContracts?.createCallAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(createCallContract.getAddress());
  if (!isContractDeployed) {
    throw new Error("CreateCall contract is not deployed on the current network");
  }
  return createCallContract;
}
async function getSimulateTxAccessorContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const simulateTxAccessorContract = await getSimulateTxAccessorContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.simulateTxAccessorAddress,
    customContracts?.simulateTxAccessorAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(
    simulateTxAccessorContract.getAddress()
  );
  if (!isContractDeployed) {
    throw new Error("SimulateTxAccessor contract is not deployed on the current network");
  }
  return simulateTxAccessorContract;
}
async function getSafeWebAuthnSignerFactoryContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const safeWebAuthnSignerFactoryContract = await getSafeWebAuthnSignerFactoryContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.safeWebAuthnSignerFactoryAddress,
    customContracts?.safeWebAuthnSignerFactoryAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(
    safeWebAuthnSignerFactoryContract.getAddress()
  );
  if (!isContractDeployed) {
    throw new Error("safeWebAuthnSignerFactory contract is not deployed on the current network");
  }
  return safeWebAuthnSignerFactoryContract;
}
async function getSafeWebAuthnSharedSignerContract({
  safeProvider,
  safeVersion,
  customContracts,
  deploymentType
}) {
  const safeWebAuthnSharedSignerContract = await getSafeWebAuthnSharedSignerContractInstance(
    safeVersion,
    safeProvider,
    customContracts?.safeWebAuthnSharedSignerAddress,
    customContracts?.safeWebAuthnSharedSignerAbi,
    deploymentType
  );
  const isContractDeployed = await safeProvider.isContractDeployed(
    safeWebAuthnSharedSignerContract.getAddress()
  );
  if (!isContractDeployed) {
    throw new Error("safeWebAuthnSharedSigner contract is not deployed on the current network");
  }
  return safeWebAuthnSharedSignerContract;
}

// src/utils/transactions/gas.ts
var CALL_DATA_ZERO_BYTE_GAS_COST = 4;
var CALL_DATA_BYTE_GAS_COST = 16;
var INITIZATION_GAS_COST = 2e4;
var INCREMENT_NONCE_GAS_COST = 5e3;
var HASH_GENERATION_GAS_COST = 1500;
var ECRECOVER_GAS_COST = 6e3;
var TRANSAFER_GAS_COST = 32e3;
var GAS_COST_PER_SIGNATURE = 1 * CALL_DATA_BYTE_GAS_COST + 2 * 32 * CALL_DATA_BYTE_GAS_COST + ECRECOVER_GAS_COST;
function estimateDataGasCosts(data) {
  const bytes = data.match(/.{2}/g);
  return bytes.reduce((gasCost, currentByte) => {
    if (currentByte === "0x") {
      return gasCost + 0;
    }
    if (currentByte === "00") {
      return gasCost + CALL_DATA_ZERO_BYTE_GAS_COST;
    }
    return gasCost + CALL_DATA_BYTE_GAS_COST;
  }, 0);
}
async function estimateGas(safeVersion, safeContract, safeProvider, to, valueInWei, data, operation, customContracts) {
  const chainId = await safeProvider.getChainId();
  const simulateTxAccessorContract = await getSimulateTxAccessorContract({
    safeProvider,
    safeVersion,
    customContracts: customContracts?.[chainId.toString()]
  });
  const transactionDataToEstimate = simulateTxAccessorContract.encode("simulate", [
    to,
    BigInt(valueInWei),
    asHex(data),
    operation
  ]);
  const safeContractContractCompatibleWithSimulateAndRevert = await isSafeContractCompatibleWithSimulateAndRevert(safeContract);
  const safeFunctionToEstimate = safeContractContractCompatibleWithSimulateAndRevert.encode(
    "simulateAndRevert",
    [simulateTxAccessorContract.getAddress(), asHex(transactionDataToEstimate)]
  );
  const safeAddress = safeContract.getAddress();
  const transactionToEstimateGas = {
    to: safeAddress,
    value: "0",
    data: safeFunctionToEstimate,
    from: safeAddress
  };
  try {
    const encodedResponse = await safeProvider.call(transactionToEstimateGas);
    return decodeSafeTxGas(encodedResponse);
  } catch (error) {
    return parseSafeTxGasErrorResponse(error);
  }
}
async function estimateTxGas(safeContract, safeProvider, to, valueInWei, data, operation) {
  const safeAddress = safeContract.getAddress();
  try {
    const estimateGas3 = await safeProvider.estimateGas({
      to,
      from: safeAddress,
      value: valueInWei,
      data
    });
    return estimateGas3;
  } catch (error) {
    if (operation === OperationType.DelegateCall) {
      return "0";
    }
    return Promise.reject(error);
  }
}
async function estimateTxBaseGas(safe, safeTransaction) {
  const safeTransactionData = safeTransaction.data;
  const { to, value, data, operation, safeTxGas, gasToken, refundReceiver } = safeTransactionData;
  const safeThreshold = await safe.getThreshold();
  const safeNonce = await safe.getNonce();
  const signaturesGasCost = safeThreshold * GAS_COST_PER_SIGNATURE;
  const encodeSafeTxGas = safeTxGas || 0;
  const encodeBaseGas = 0;
  const gasPrice = 1;
  const encodeGasToken = gasToken || ZERO_ADDRESS;
  const encodeRefundReceiver = refundReceiver || ZERO_ADDRESS;
  const signatures = "0x";
  const safeVersion = safe.getContractVersion();
  const safeProvider = safe.getSafeProvider();
  const isL1SafeSingleton = safe.getContractManager().isL1SafeSingleton;
  const chainId = await safe.getChainId();
  const customContracts = safe.getContractManager().contractNetworks?.[chainId.toString()];
  const safeSingletonContract = await getSafeContract({
    safeProvider,
    safeVersion,
    isL1SafeSingleton,
    customContracts
  });
  const execTransactionData = safeSingletonContract.encode("execTransaction", [
    to,
    BigInt(value),
    data,
    operation,
    encodeSafeTxGas,
    encodeBaseGas,
    gasPrice,
    encodeGasToken,
    encodeRefundReceiver,
    signatures
  ]);
  const isSafeInitialized = safeNonce !== 0;
  const incrementNonceGasCost = isSafeInitialized ? INCREMENT_NONCE_GAS_COST : INITIZATION_GAS_COST;
  let baseGas = signaturesGasCost + estimateDataGasCosts(execTransactionData) + incrementNonceGasCost + HASH_GENERATION_GAS_COST;
  baseGas > 65536 ? baseGas += 64 : baseGas += 128;
  baseGas += TRANSAFER_GAS_COST;
  return baseGas.toString();
}
async function estimateSafeTxGas(safe, safeTransaction) {
  const safeVersion = safe.getContractVersion();
  if (semverSatisfies4(safeVersion, ">=1.3.0")) {
    const safeTxGas2 = await estimateSafeTxGasWithSimulate(safe, safeTransaction);
    return addExtraGasForSafety(safeTxGas2);
  }
  const safeTxGas = await estimateSafeTxGasWithRequiredTxGas(safe, safeTransaction);
  return addExtraGasForSafety(safeTxGas);
}
function addExtraGasForSafety(safeTxGas) {
  const INCREASE_GAS_FACTOR = 1.05;
  return Math.round(Number(safeTxGas) * INCREASE_GAS_FACTOR).toString();
}
async function estimateSafeTxGasWithRequiredTxGas(safe, safeTransaction) {
  const isSafeDeployed = await safe.isSafeDeployed();
  const safeAddress = await safe.getAddress();
  const safeVersion = safe.getContractVersion();
  const safeProvider = safe.getSafeProvider();
  const isL1SafeSingleton = safe.getContractManager().isL1SafeSingleton;
  const chainId = await safe.getChainId();
  const customContracts = safe.getContractManager().contractNetworks?.[chainId.toString()];
  const safeSingletonContract = await getSafeContract({
    safeProvider,
    safeVersion,
    isL1SafeSingleton,
    customContracts
  });
  const safeContractCompatibleWithRequiredTxGas = await isSafeContractCompatibleWithRequiredTxGas(safeSingletonContract);
  const transactionDataToEstimate = safeContractCompatibleWithRequiredTxGas.encode(
    "requiredTxGas",
    [
      safeTransaction.data.to,
      BigInt(safeTransaction.data.value),
      asHex(safeTransaction.data.data),
      safeTransaction.data.operation
    ]
  );
  const to = isSafeDeployed ? safeAddress : safeSingletonContract.getAddress();
  const transactionToEstimateGas = {
    to,
    value: "0",
    data: transactionDataToEstimate,
    from: safeAddress
  };
  try {
    const encodedResponse = await safeProvider.call(transactionToEstimateGas);
    const safeTxGas = "0x" + encodedResponse.slice(-32);
    return safeTxGas;
  } catch (error) {
    try {
      const revertData = error?.info?.error?.data;
      if (revertData && revertData.startsWith("Reverted ")) {
        const [, safeTxGas] = revertData.split("Reverted ");
        return Number(safeTxGas).toString();
      }
    } catch {
      return "0";
    }
  }
  return "0";
}
function decodeSafeTxGas(encodedDataResponse) {
  const [, encodedSafeTxGas] = encodedDataResponse.split("0x");
  const data = "0x" + encodedSafeTxGas;
  return Number("0x" + data.slice(184).slice(0, 10)).toString();
}
function isEthersError(error) {
  return error.data != null;
}
function isViemError(error) {
  return error instanceof BaseError;
}
function isGnosisChainEstimationError(error) {
  return error.info.error.data != null;
}
function parseSafeTxGasErrorResponse(error) {
  if (isEthersError(error)) {
    return decodeSafeTxGas(error.data);
  }
  if (isViemError(error)) {
    const cause = error.walk();
    if (typeof cause?.data === "string") {
      return decodeSafeTxGas(cause?.data);
    }
  }
  if (isGnosisChainEstimationError(error)) {
    const gnosisChainProviderData = error.info.error.data;
    const isString = typeof gnosisChainProviderData === "string";
    const encodedDataResponse = isString ? gnosisChainProviderData : gnosisChainProviderData.data;
    return decodeSafeTxGas(encodedDataResponse);
  }
  const isEncodedDataPresent = error.message.includes("0x");
  if (isEncodedDataPresent) {
    return decodeSafeTxGas(error.message);
  }
  throw new Error("Could not parse SafeTxGas from Estimation response, Details: " + error?.message);
}
async function estimateSafeTxGasWithSimulate(safe, safeTransaction) {
  const isSafeDeployed = await safe.isSafeDeployed();
  const safeAddress = await safe.getAddress();
  const safeVersion = safe.getContractVersion();
  const safeProvider = safe.getSafeProvider();
  const chainId = await safe.getChainId();
  const customContracts = safe.getContractManager().contractNetworks?.[chainId.toString()];
  const isL1SafeSingleton = safe.getContractManager().isL1SafeSingleton;
  const safeSingletonContract = await getSafeContract({
    safeProvider,
    safeVersion,
    isL1SafeSingleton,
    customContracts
  });
  const simulateTxAccessorContract = await getSimulateTxAccessorContract({
    safeProvider,
    safeVersion,
    customContracts
  });
  const transactionDataToEstimate = simulateTxAccessorContract.encode("simulate", [
    safeTransaction.data.to,
    BigInt(safeTransaction.data.value),
    asHex(safeTransaction.data.data),
    safeTransaction.data.operation
  ]);
  const to = isSafeDeployed ? safeAddress : safeSingletonContract.getAddress();
  const SafeContractCompatibleWithSimulateAndRevert = await isSafeContractCompatibleWithSimulateAndRevert(safeSingletonContract);
  const safeFunctionToEstimate = SafeContractCompatibleWithSimulateAndRevert.encode(
    "simulateAndRevert",
    [simulateTxAccessorContract.getAddress(), asHex(transactionDataToEstimate)]
  );
  const transactionToEstimateGas = {
    to,
    value: "0",
    data: safeFunctionToEstimate,
    from: safeAddress
  };
  try {
    const encodedResponse = await safeProvider.call(transactionToEstimateGas);
    const safeTxGas = decodeSafeTxGas(encodedResponse);
    return safeTxGas;
  } catch (error) {
    return parseSafeTxGasErrorResponse(error);
  }
}
async function estimateSafeDeploymentGas(safe) {
  const isSafeDeployed = await safe.isSafeDeployed();
  if (isSafeDeployed) {
    return "0";
  }
  const safeProvider = safe.getSafeProvider();
  const safeDeploymentTransaction = await safe.createSafeDeploymentTransaction();
  const estimation = await safeProvider.estimateGas({
    ...safeDeploymentTransaction,
    from: ZERO_ADDRESS
    // if we use the Safe address the estimation always fails due to CREATE2
  });
  return estimation;
}

// src/utils/transactions/SafeTransaction.ts
var EthSafeTransaction = class {
  constructor(data) {
    this.signatures = /* @__PURE__ */ new Map();
    this.data = data;
  }
  getSignature(signer) {
    return this.signatures.get(signer.toLowerCase());
  }
  addSignature(signature) {
    this.signatures.set(signature.signer.toLowerCase(), signature);
  }
  encodedSignatures() {
    return buildSignatureBytes(Array.from(this.signatures.values()));
  }
};
var SafeTransaction_default = EthSafeTransaction;

// src/utils/transactions/utils.ts
import {
  OperationType as OperationType2
} from "@safe-global/types-kit";
import semverSatisfies5 from "semver/functions/satisfies.js";
import {
  toBytes,
  getAddress,
  encodePacked,
  bytesToHex,
  decodeFunctionData,
  parseAbi
} from "viem";
import { waitForTransactionReceipt as waitForTransactionReceiptViem } from "viem/actions";
function standardizeMetaTransactionData(tx) {
  const standardizedTxs = {
    ...tx,
    operation: tx.operation ?? OperationType2.Call
  };
  return standardizedTxs;
}
async function standardizeSafeTransactionData({
  safeContract,
  predictedSafe,
  provider,
  tx,
  contractNetworks
}) {
  const standardizedTxs = {
    to: tx.to,
    value: tx.value,
    data: tx.data,
    operation: tx.operation ?? OperationType2.Call,
    baseGas: tx.baseGas ?? "0",
    gasPrice: tx.gasPrice ?? "0",
    gasToken: tx.gasToken || ZERO_ADDRESS,
    refundReceiver: tx.refundReceiver || ZERO_ADDRESS,
    nonce: tx.nonce ?? (safeContract ? Number(await safeContract.getNonce()) : 0)
  };
  if (typeof tx.safeTxGas !== "undefined") {
    return {
      ...standardizedTxs,
      safeTxGas: tx.safeTxGas
    };
  }
  let safeVersion;
  if (predictedSafe) {
    safeVersion = predictedSafe?.safeDeploymentConfig?.safeVersion || DEFAULT_SAFE_VERSION;
  } else {
    if (!safeContract) {
      throw new Error("Safe is not deployed");
    }
    safeVersion = safeContract.safeVersion;
  }
  const hasSafeTxGasOptional = hasSafeFeature("SAFE_TX_GAS_OPTIONAL" /* SAFE_TX_GAS_OPTIONAL */, safeVersion);
  if (hasSafeTxGasOptional && standardizedTxs.gasPrice === "0" || hasSafeTxGasOptional && predictedSafe) {
    return {
      ...standardizedTxs,
      safeTxGas: "0"
    };
  }
  if (!safeContract) {
    throw new Error("Safe is not deployed");
  }
  let safeTxGas;
  const safeProvider = new SafeProvider_default({ provider });
  if (semverSatisfies5(safeVersion, ">=1.3.0")) {
    safeTxGas = await estimateGas(
      safeVersion,
      safeContract,
      safeProvider,
      standardizedTxs.to,
      standardizedTxs.value,
      standardizedTxs.data,
      standardizedTxs.operation,
      contractNetworks
    );
  } else {
    safeTxGas = await estimateTxGas(
      safeContract,
      safeProvider,
      standardizedTxs.to,
      standardizedTxs.value,
      standardizedTxs.data,
      standardizedTxs.operation
    );
  }
  return {
    ...standardizedTxs,
    safeTxGas
  };
}
function encodeMetaTransaction(tx) {
  const data = toBytes(tx.data);
  const encoded = encodePacked(
    ["uint8", "address", "uint256", "uint256", "bytes"],
    [
      tx.operation ?? OperationType2.Call,
      tx.to,
      BigInt(tx.value),
      BigInt(data.length),
      bytesToHex(data)
    ]
  );
  return encoded.slice(2);
}
function encodeMultiSendData(txs) {
  return `0x${txs.map((tx) => encodeMetaTransaction(tx)).join("")}`;
}
function isSafeMultisigTransactionResponse(safeTransaction) {
  return safeTransaction.isExecuted !== void 0;
}
function isPasskeyParam(params) {
  return params.passkey !== void 0;
}
function isOldOwnerPasskey(params) {
  return params.oldOwnerPasskey !== void 0;
}
function isNewOwnerPasskey(params) {
  return params.newOwnerPasskey !== void 0;
}
function toEstimateGasParameters(tx) {
  const params = isLegacyTransaction(tx) ? createLegacyTxOptions(tx) : createTxOptions(tx);
  if (tx.value) {
    params.value = BigInt(tx.value);
  }
  if (tx.to) {
    params.to = tx.to;
  }
  if (tx.data) {
    params.data = asHex(tx.data);
  }
  return params;
}
function toTransactionRequest(tx) {
  const params = isLegacyTransaction(tx) ? createLegacyTxOptions(tx) : createTxOptions(tx);
  if (tx.to) {
    params.to = tx.to;
  }
  if (tx.data) {
    params.data = asHex(tx.data);
  }
  return params;
}
function convertTransactionOptions(options) {
  return isLegacyTransaction(options) ? createLegacyTxOptions(options) : createTxOptions(options);
}
function isLegacyTransaction(options) {
  return !!options?.gasPrice;
}
function createLegacyTxOptions(options) {
  const converted = {};
  if (options?.from) {
    converted.account = options.from;
  }
  if (options?.gasLimit) {
    converted.gas = BigInt(options.gasLimit);
  }
  if (options?.gasPrice) {
    converted.gasPrice = BigInt(options.gasPrice);
  }
  if (options?.nonce) {
    converted.nonce = options.nonce;
  }
  return converted;
}
function createTxOptions(options) {
  const converted = {};
  if (options?.from) {
    converted.account = options.from;
  }
  if (options?.gasLimit) {
    converted.gas = BigInt(options.gasLimit);
  }
  if (options?.maxFeePerGas) {
    converted.maxFeePerGas = BigInt(options.maxFeePerGas);
  }
  if (options?.maxPriorityFeePerGas) {
    converted.maxPriorityFeePerGas = BigInt(options.maxPriorityFeePerGas);
  }
  if (options?.nonce) {
    converted.nonce = options.nonce;
  }
  return converted;
}

// src/utils/passkeys/extractPasskeyData.ts
import { Buffer as Buffer2 } from "buffer";
import { getFCLP256VerifierDeployment } from "@safe-global/safe-modules-deployments";
function base64ToUint8Array(base64) {
  const base64Fixed = base64.replace(/-/g, "+").replace(/_/g, "/");
  const binaryBuffer = Buffer2.from(base64Fixed, "base64");
  return new Uint8Array(binaryBuffer);
}
async function importLibs() {
  const { p256 } = await import("@noble/curves/p256");
  const { AsnParser, AsnProp, AsnPropTypes, AsnType, AsnTypeTypes } = await import("@peculiar/asn1-schema");
  let AlgorithmIdentifier = class {
    constructor() {
      this.id = "";
      this.curve = "";
    }
  };
  __decorateClass([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
  ], AlgorithmIdentifier.prototype, "id", 2);
  __decorateClass([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier, optional: true })
  ], AlgorithmIdentifier.prototype, "curve", 2);
  AlgorithmIdentifier = __decorateClass([
    AsnType({ type: AsnTypeTypes.Sequence })
  ], AlgorithmIdentifier);
  let ECPublicKey = class {
    constructor() {
      this.algorithm = new AlgorithmIdentifier();
      this.publicKey = new ArrayBuffer(0);
    }
  };
  __decorateClass([
    AsnProp({ type: AlgorithmIdentifier })
  ], ECPublicKey.prototype, "algorithm", 2);
  __decorateClass([
    AsnProp({ type: AsnPropTypes.BitString })
  ], ECPublicKey.prototype, "publicKey", 2);
  ECPublicKey = __decorateClass([
    AsnType({ type: AsnTypeTypes.Sequence })
  ], ECPublicKey);
  return {
    p256,
    AsnParser,
    ECPublicKey
  };
}
async function decodePublicKeyForReactNative(publicKey) {
  const { p256, AsnParser, ECPublicKey } = await importLibs();
  let publicKeyBytes = base64ToUint8Array(publicKey);
  if (publicKeyBytes.length === 0) {
    throw new Error("Decoded public key is empty.");
  }
  const isAsn1Encoded = publicKeyBytes[0] === 48;
  const isUncompressedKey = publicKeyBytes.length === 64;
  if (isAsn1Encoded) {
    const asn1ParsedKey = AsnParser.parse(publicKeyBytes.buffer, ECPublicKey);
    publicKeyBytes = new Uint8Array(asn1ParsedKey.publicKey);
  } else if (isUncompressedKey) {
    const uncompressedKey = new Uint8Array(65);
    uncompressedKey[0] = 4;
    uncompressedKey.set(publicKeyBytes, 1);
    publicKeyBytes = uncompressedKey;
  }
  const point = p256.ProjectivePoint.fromHex(publicKeyBytes);
  const x = point.x.toString(16).padStart(64, "0");
  const y = point.y.toString(16).padStart(64, "0");
  return {
    x: "0x" + x,
    y: "0x" + y
  };
}
async function decodePublicKeyForWeb(publicKey) {
  const algorithm = {
    name: "ECDSA",
    namedCurve: "P-256",
    hash: { name: "SHA-256" }
  };
  const key = await crypto.subtle.importKey("spki", publicKey, algorithm, true, ["verify"]);
  const { x, y } = await crypto.subtle.exportKey("jwk", key);
  const isValidCoordinates = !!x && !!y;
  if (!isValidCoordinates) {
    throw new Error("Failed to generate passkey Coordinates. crypto.subtle.exportKey() failed");
  }
  return {
    x: "0x" + Buffer2.from(x, "base64").toString("hex"),
    y: "0x" + Buffer2.from(y, "base64").toString("hex")
  };
}
async function decodePublicKey(response) {
  const publicKeyAuthenticatorResponse = response;
  const publicKey = publicKeyAuthenticatorResponse.getPublicKey();
  if (!publicKey) {
    throw new Error("Failed to generate passkey coordinates. getPublicKey() failed");
  }
  if (typeof publicKey === "string") {
    return decodePublicKeyForReactNative(publicKey);
  }
  if (publicKey instanceof ArrayBuffer) {
    return await decodePublicKeyForWeb(publicKey);
  }
  throw new Error("Unsupported public key format.");
}
async function extractPasskeyData(passkeyCredential) {
  const passkeyPublicKeyCredential = passkeyCredential;
  const rawId = Buffer2.from(passkeyPublicKeyCredential.rawId).toString("hex");
  const coordinates = await decodePublicKey(passkeyPublicKeyCredential.response);
  return {
    rawId,
    coordinates
  };
}
function getDefaultFCLP256VerifierAddress(chainId) {
  const FCLP256VerifierDeployment = getFCLP256VerifierDeployment({
    version: "0.2.1",
    released: true,
    network: chainId
  });
  if (!FCLP256VerifierDeployment) {
    throw new Error(`Failed to load FCLP256Verifier deployment for chain ID ${chainId}`);
  }
  const verifierAddress = FCLP256VerifierDeployment.networkAddresses[chainId];
  if (!verifierAddress) {
    throw new Error(`FCLP256Verifier address not found for chain ID ${chainId}`);
  }
  return verifierAddress;
}

// src/utils/passkeys/PasskeyClient.ts
import {
  hexToBytes,
  encodeAbiParameters as encodeAbiParameters2,
  toHex as toHex2,
  toBytes as toBytes2,
  stringToBytes,
  isHex as isHex2,
  createClient,
  custom,
  walletActions,
  maxUint256,
  fromBytes,
  fromHex,
  parseAbiParameters,
  encodeFunctionData as encodeFunctionData2,
  parseAbi as parseAbi2
} from "viem";

// src/utils/passkeys/isSharedSigner.ts
async function isSharedSigner(passkey, safeWebAuthnSharedSignerContract, safeAddress, owners, chainId) {
  const sharedSignerContractAddress = safeWebAuthnSharedSignerContract.contractAddress;
  if (safeAddress && owners.includes(sharedSignerContractAddress)) {
    const [sharedSignerSlot] = await safeWebAuthnSharedSignerContract.getConfiguration([
      asHex(safeAddress)
    ]);
    const { x, y, verifiers } = sharedSignerSlot;
    const verifierAddress = passkey.customVerifierAddress || getDefaultFCLP256VerifierAddress(chainId);
    const isSharedSigner2 = BigInt(passkey.coordinates.x) === x && BigInt(passkey.coordinates.y) === y && BigInt(verifierAddress) === verifiers;
    return isSharedSigner2;
  }
  return false;
}
var isSharedSigner_default = isSharedSigner;

// src/utils/passkeys/PasskeyClient.ts
var PASSKEY_CLIENT_KEY = "passkeyWallet";
var PASSKEY_CLIENT_NAME = "Passkey Wallet Client";
var sign = async (passkeyRawId, data, getFn) => {
  const getCredentials = getFn || navigator.credentials.get.bind(navigator.credentials);
  const assertion = await getCredentials({
    publicKey: {
      challenge: data,
      allowCredentials: [{ type: "public-key", id: passkeyRawId }],
      userVerification: "required"
    }
  });
  const assertionResponse = assertion.response;
  if (!assertionResponse?.authenticatorData) {
    throw new Error("Failed to sign data with passkey Signer");
  }
  const { authenticatorData, signature, clientDataJSON } = assertionResponse;
  return encodeAbiParameters2(parseAbiParameters("bytes, bytes, uint256[2]"), [
    toHex2(new Uint8Array(authenticatorData)),
    extractClientDataFields(clientDataJSON),
    extractSignature(signature)
  ]);
};
var signTransaction = () => {
  throw new Error("Passkey Signers cannot sign transactions, they can only sign data.");
};
var signTypedData = () => {
  throw new Error("Passkey Signers cannot sign signTypedData, they can only sign data.");
};
var createPasskeyClient = async (passkey, safeWebAuthnSignerFactoryContract, safeWebAuthnSharedSignerContract, provider, safeAddress, owners, chainId) => {
  const { rawId, coordinates, customVerifierAddress } = passkey;
  const passkeyRawId = hexToBytes(asHex(rawId));
  const verifierAddress = customVerifierAddress || getDefaultFCLP256VerifierAddress(chainId);
  const isPasskeySharedSigner = await isSharedSigner_default(
    passkey,
    safeWebAuthnSharedSignerContract,
    safeAddress,
    owners,
    chainId
  );
  let signerAddress;
  if (isPasskeySharedSigner) {
    signerAddress = safeWebAuthnSharedSignerContract.getAddress();
  } else {
    ;
    [signerAddress] = await safeWebAuthnSignerFactoryContract.getSigner([
      BigInt(coordinates.x),
      BigInt(coordinates.y),
      fromHex(asHex(verifierAddress), "bigint")
    ]);
  }
  return createClient({
    account: signerAddress,
    name: PASSKEY_CLIENT_NAME,
    key: PASSKEY_CLIENT_KEY,
    transport: custom(provider.transport)
  }).extend(walletActions).extend(() => ({
    signMessage({ message }) {
      if (typeof message === "string") {
        return sign(passkeyRawId, toBytes2(message), passkey.getFn);
      }
      return sign(
        passkeyRawId,
        isHex2(message.raw) ? toBytes2(message.raw) : message.raw,
        passkey.getFn
      );
    },
    signTransaction,
    signTypedData,
    encodeConfigure() {
      return encodeFunctionData2({
        abi: parseAbi2(["function configure((uint256 x, uint256 y, uint176 verifiers) signer)"]),
        functionName: "configure",
        args: [
          {
            x: BigInt(passkey.coordinates.x),
            y: BigInt(passkey.coordinates.y),
            verifiers: fromHex(asHex(verifierAddress), "bigint")
          }
        ]
      });
    },
    encodeCreateSigner() {
      return asHex(
        safeWebAuthnSignerFactoryContract.encode("createSigner", [
          BigInt(coordinates.x),
          BigInt(coordinates.y),
          BigInt(verifierAddress)
        ])
      );
    },
    createDeployTxRequest() {
      const passkeySignerDeploymentTransaction = {
        to: safeWebAuthnSignerFactoryContract.getAddress(),
        value: "0",
        data: this.encodeCreateSigner()
      };
      return passkeySignerDeploymentTransaction;
    }
  }));
};
function decodeClientDataJSON(clientDataJSON) {
  const uint8Array = new Uint8Array(clientDataJSON);
  let result = "";
  for (let i = 0; i < uint8Array.length; i++) {
    result += String.fromCharCode(uint8Array[i]);
  }
  return result;
}
function extractClientDataFields(clientDataJSON) {
  const decodedClientDataJSON = decodeClientDataJSON(clientDataJSON);
  const match = decodedClientDataJSON.match(
    /^\{"type":"webauthn.get","challenge":"[A-Za-z0-9\-_]{43}",(.*)\}$/
  );
  if (!match) {
    throw new Error("challenge not found in client data JSON");
  }
  const [, fields] = match;
  return toHex2(stringToBytes(fields));
}
function extractSignature(signature) {
  const check = (x) => {
    if (!x) {
      throw new Error("invalid signature encoding");
    }
  };
  const view = new DataView(
    signature instanceof ArrayBuffer ? signature : signature instanceof Uint8Array ? signature.buffer : new Uint8Array(signature).buffer
  );
  check(view.getUint8(0) === 48);
  check(view.getUint8(1) === view.byteLength - 2);
  const readInt = (offset) => {
    check(view.getUint8(offset) === 2);
    const len = view.getUint8(offset + 1);
    const start = offset + 2;
    const end = start + len;
    const n = fromBytes(new Uint8Array(view.buffer.slice(start, end)), "bigint");
    check(n < maxUint256);
    return [n, end];
  };
  const [r, sOffset] = readInt(2);
  const [s] = readInt(sOffset);
  return [r, s];
}

// src/utils/passkeys/getPasskeyOwnerAddress.ts
async function getPasskeyOwnerAddress(safe, passkey) {
  const safeVersion = safe.getContractVersion();
  const safeAddress = await safe.getAddress();
  const owners = await safe.getOwners();
  const safePasskeyProvider = await SafeProvider_default.init({
    provider: safe.getSafeProvider().provider,
    signer: passkey,
    safeVersion,
    contractNetworks: safe.getContractManager().contractNetworks,
    safeAddress,
    owners
  });
  const passkeySigner = await safePasskeyProvider.getExternalSigner();
  const passkeyOwnerAddress = passkeySigner.account.address;
  return passkeyOwnerAddress;
}
var getPasskeyOwnerAddress_default = getPasskeyOwnerAddress;

// src/utils/block.ts
function asBlockId(blockId) {
  return typeof blockId === "number" ? blockNumber(blockId) : blockTag(blockId);
}
function blockNumber(blockNumber2) {
  return { blockNumber: blockNumber2.toNumber() };
}
function blockTag(blockTag2) {
  return { blockTag: blockTag2 };
}

// src/SafeProvider.ts
import {
  createPublicClient,
  createWalletClient,
  custom as custom2,
  http,
  getAddress as getAddress2,
  isAddress as isAddress3,
  decodeAbiParameters,
  encodeAbiParameters as encodeAbiParameters3,
  parseAbiParameters as parseAbiParameters2,
  toBytes as toBytes3,
  walletActions as walletActions2,
  publicActions,
  createClient as createClient2,
  rpcSchema
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import {
  call,
  estimateGas as estimateGas2,
  getBalance,
  getCode,
  getTransaction,
  getTransactionCount,
  getStorageAt,
  readContract
} from "viem/actions";

// src/utils/provider.ts
import { isAddress as isAddress2 } from "viem";
var isEip1193Provider = (provider) => typeof provider !== "string";
var isPrivateKey = (signer) => typeof signer === "string" && !isAddress2(signer);
var isSignerPasskeyClient = (signer) => !!signer && signer.key === PASSKEY_CLIENT_KEY;

// src/SafeProvider.ts
var SafeProvider = class _SafeProvider {
  #chain;
  #externalProvider;
  constructor({
    provider,
    signer
  }) {
    this.#externalProvider = createPublicClient({
      transport: isEip1193Provider(provider) ? custom2(provider) : http(provider)
    });
    this.provider = provider;
    this.signer = signer;
    this.#chain = void 0;
  }
  getExternalProvider() {
    return this.#externalProvider;
  }
  static async init({
    provider,
    signer,
    safeVersion = DEFAULT_SAFE_VERSION,
    contractNetworks,
    safeAddress,
    owners
  }) {
    const isPasskeySigner = signer && typeof signer !== "string";
    if (isPasskeySigner) {
      if (!hasSafeFeature("PASSKEY_SIGNER" /* PASSKEY_SIGNER */, safeVersion)) {
        throw new Error(
          "Current version of the Safe does not support the Passkey signer functionality"
        );
      }
      const safeProvider = new _SafeProvider({
        provider
      });
      const chainId = await safeProvider.getChainId();
      const customContracts = contractNetworks?.[chainId.toString()];
      let passkeySigner;
      if (!isSignerPasskeyClient(signer)) {
        const safeWebAuthnSignerFactoryContract = await getSafeWebAuthnSignerFactoryContract({
          safeProvider,
          safeVersion,
          customContracts
        });
        const safeWebAuthnSharedSignerContract = await getSafeWebAuthnSharedSignerContract({
          safeProvider,
          safeVersion,
          customContracts
        });
        passkeySigner = await createPasskeyClient(
          signer,
          safeWebAuthnSignerFactoryContract,
          safeWebAuthnSharedSignerContract,
          safeProvider.getExternalProvider(),
          safeAddress || "",
          owners || [],
          chainId.toString()
        );
      } else {
        passkeySigner = signer;
      }
      return new _SafeProvider({
        provider,
        signer: passkeySigner
      });
    } else {
      return new _SafeProvider({
        provider,
        signer
      });
    }
  }
  async getExternalSigner() {
    const { transport, chain = await this.#getChain() } = this.getExternalProvider();
    if (isSignerPasskeyClient(this.signer)) {
      return this.signer;
    }
    if (isPrivateKey(this.signer)) {
      const account = privateKeyToAccount(asHex(this.signer));
      return createWalletClient({
        account,
        chain,
        transport: custom2(transport)
      });
    }
    if (this.signer && typeof this.signer === "string") {
      return createWalletClient({
        account: this.signer,
        chain,
        transport: custom2(transport)
      });
    }
    try {
      const wallet = createWalletClient({
        chain,
        transport: custom2(transport)
      });
      const [address] = await wallet.getAddresses();
      if (address) {
        const client = createClient2({
          account: address,
          transport: custom2(transport),
          chain: wallet.chain,
          rpcSchema: rpcSchema()
        }).extend(walletActions2).extend(publicActions);
        return client;
      }
    } catch {
    }
    return void 0;
  }
  async isPasskeySigner() {
    return isSignerPasskeyClient(this.signer);
  }
  isAddress(address) {
    return isAddress3(address);
  }
  async getEip3770Address(fullAddress) {
    const chainId = await this.getChainId();
    return validateEip3770Address(fullAddress, chainId);
  }
  async getBalance(address, blockTag2) {
    return getBalance(this.#externalProvider, {
      address,
      ...asBlockId(blockTag2)
    });
  }
  async getNonce(address, blockTag2) {
    return getTransactionCount(this.#externalProvider, {
      address,
      ...asBlockId(blockTag2)
    });
  }
  async getChainId() {
    const res = (await this.#getChain()).id;
    return BigInt(res);
  }
  getChecksummedAddress(address) {
    return getAddress2(address);
  }
  async getContractCode(address, blockTag2) {
    const res = await getCode(this.#externalProvider, {
      address,
      ...asBlockId(blockTag2)
    });
    return res ?? "0x";
  }
  async isContractDeployed(address, blockTag2) {
    const contractCode = await getCode(this.#externalProvider, {
      address,
      ...asBlockId(blockTag2)
    });
    return !!contractCode;
  }
  async getStorageAt(address, position) {
    const content = await getStorageAt(this.#externalProvider, {
      address,
      slot: asHex(position)
    });
    const decodedContent = this.decodeParameters("address", asHex(content));
    return decodedContent[0];
  }
  async getTransaction(transactionHash) {
    return getTransaction(this.#externalProvider, {
      hash: asHash(transactionHash)
    });
  }
  async getSignerAddress() {
    const externalSigner = await this.getExternalSigner();
    return externalSigner ? getAddress2(externalSigner.account.address) : void 0;
  }
  async signMessage(message) {
    const signer = await this.getExternalSigner();
    const account = await this.getSignerAddress();
    if (!signer || !account) {
      throw new Error("SafeProvider must be initialized with a signer to use this method");
    }
    if (sameString(signer.account.address, account)) {
      return await signer?.signMessage({
        message: { raw: toBytes3(message) }
      });
    } else {
      return await signer?.signMessage({
        account,
        message: { raw: toBytes3(message) }
      });
    }
  }
  async signTypedData(safeEIP712Args) {
    const signer = await this.getExternalSigner();
    if (!signer) {
      throw new Error("SafeProvider must be initialized with a signer to use this method");
    }
    if (isTypedDataSigner(signer)) {
      const typedData = generateTypedData(safeEIP712Args);
      const { chainId, verifyingContract } = typedData.domain;
      const chain = chainId ? Number(chainId) : void 0;
      const domain = { verifyingContract, chainId: chain };
      const signature = await signer.signTypedData({
        domain,
        types: typedData.primaryType === "SafeMessage" ? { SafeMessage: typedData.types.SafeMessage } : { SafeTx: typedData.types.SafeTx },
        primaryType: typedData.primaryType,
        message: typedData.message
      });
      return signature;
    }
    throw new Error("The current signer does not implement EIP-712 to sign typed data");
  }
  async estimateGas(transaction) {
    const converted = toEstimateGasParameters(transaction);
    return (await estimateGas2(this.#externalProvider, converted)).toString();
  }
  async call(transaction, blockTag2) {
    const converted = toTransactionRequest(transaction);
    const { data } = await call(this.#externalProvider, {
      ...converted,
      ...asBlockId(blockTag2)
    });
    return data ?? "0x";
  }
  async readContract(args) {
    return readContract(this.#externalProvider, args);
  }
  // TODO: fix anys
  encodeParameters(types, values) {
    return encodeAbiParameters3(parseAbiParameters2(types), values);
  }
  decodeParameters(types, values) {
    return decodeAbiParameters(parseAbiParameters2(types), asHex(values));
  }
  async #getChain() {
    if (this.#chain) return this.#chain;
    const chain = getChainById(BigInt(await this.#externalProvider.getChainId()));
    if (!chain) throw new Error("Invalid chainId");
    this.#chain = chain;
    return this.#chain;
  }
};
var SafeProvider_default = SafeProvider;

// src/utils/memoized.ts
function createMemoizedFunction(callback, cache = {}) {
  const replacer = createSafeContractSerializerReplacer();
  return (...args) => {
    const key = JSON.stringify(args, replacer);
    cache[key] = cache[key] || callback(...args);
    return cache[key];
  };
}
function createSafeContractSerializerReplacer() {
  const seen = /* @__PURE__ */ new Set();
  return (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    if (value instanceof SafeProvider_default && value !== null) {
      if (seen.has(value)) {
        return void 0;
      }
      seen.add(value);
      return {
        $safeProvider: {
          provider: typeof value.provider === "object" ? "EIP1193Provider" : value.provider,
          signer: value.signer
        }
      };
    }
    return value;
  };
}

// src/contracts/utils.ts
import semverSatisfies6 from "semver/functions/satisfies.js";
var PREDETERMINED_SALT_NONCE = "0xb1073742015cbcf5a3a4d9d1ae33ecf619439710b89475f92e2abd2117e90f90";
var ZKSYNC_MAINNET = 324n;
var ZKSYNC_TESTNET = 300n;
var ZKSYNC_SAFE_PROXY_DEPLOYED_BYTECODE = {
  "1.3.0": {
    deployedBytecodeHash: "0x0100004124426fb9ebb25e27d670c068e52f9ba631bd383279a188be47e3f86d"
  }
};
var ZKSYNC_CREATE2_PREFIX = "0x2020dba91b30cc0006188af794c2fb30dd8520db7e2c088b7fc7c103c00ca494";
function encodeCreateProxyWithNonce(safeProxyFactoryContract, safeSingletonAddress, initializer, salt) {
  return safeProxyFactoryContract.encode("createProxyWithNonce", [
    safeSingletonAddress,
    asHex(initializer),
    BigInt(salt || PREDETERMINED_SALT_NONCE)
  ]);
}
var memoizedGetCompatibilityFallbackHandlerContract = createMemoizedFunction(
  getCompatibilityFallbackHandlerContract
);
async function encodeSetupCallData({
  safeProvider,
  safeAccountConfig,
  safeContract,
  customContracts,
  customSafeVersion,
  deploymentType
}) {
  const {
    owners,
    threshold,
    to = ZERO_ADDRESS,
    data = EMPTY_DATA,
    fallbackHandler,
    paymentToken = ZERO_ADDRESS,
    payment = 0,
    paymentReceiver = ZERO_ADDRESS
  } = safeAccountConfig;
  const safeVersion = customSafeVersion || safeContract.safeVersion;
  if (semverSatisfies6(safeVersion, "<=1.0.0")) {
    return safeContract.encode("setup", [
      owners,
      threshold,
      to,
      asHex(data),
      paymentToken,
      payment,
      paymentReceiver
    ]);
  }
  let fallbackHandlerAddress = fallbackHandler;
  const isValidAddress = fallbackHandlerAddress !== void 0 && isAddress4(fallbackHandlerAddress);
  if (!isValidAddress) {
    const fallbackHandlerContract = await memoizedGetCompatibilityFallbackHandlerContract({
      safeProvider,
      safeVersion,
      customContracts,
      deploymentType
    });
    fallbackHandlerAddress = fallbackHandlerContract.getAddress();
  }
  return safeContract.encode("setup", [
    owners,
    threshold,
    to,
    data,
    fallbackHandlerAddress,
    paymentToken,
    payment,
    paymentReceiver
  ]);
}
var memoizedGetProxyFactoryContract = createMemoizedFunction(
  ({
    safeProvider,
    safeVersion,
    customContracts,
    deploymentType
  }) => getSafeProxyFactoryContract({ safeProvider, safeVersion, customContracts, deploymentType })
);
var memoizedGetProxyCreationCode = createMemoizedFunction(
  async ({
    safeProvider,
    safeVersion,
    customContracts,
    chainId,
    deploymentType
  }) => {
    const safeProxyFactoryContract = await memoizedGetProxyFactoryContract({
      safeProvider,
      safeVersion,
      customContracts,
      chainId,
      deploymentType
    });
    return safeProxyFactoryContract.proxyCreationCode();
  }
);
var memoizedGetSafeContract = createMemoizedFunction(
  ({
    safeProvider,
    safeVersion,
    isL1SafeSingleton,
    customContracts,
    deploymentType
  }) => getSafeContract({
    safeProvider,
    safeVersion,
    isL1SafeSingleton,
    customContracts,
    deploymentType
  })
);
async function getSafeContractVersion(safeProvider, safeAddress) {
  return await safeProvider.readContract({
    address: safeAddress,
    abi: parseAbi3(["function VERSION() view returns (string)"]),
    functionName: "VERSION"
  });
}
function getChainSpecificDefaultSaltNonce(chainId) {
  return keccak2562(toHex3(PREDETERMINED_SALT_NONCE + chainId));
}
async function getPredictedSafeAddressInitCode({
  safeProvider,
  chainId,
  safeAccountConfig,
  safeDeploymentConfig = {},
  isL1SafeSingleton,
  customContracts
}) {
  validateSafeAccountConfig(safeAccountConfig);
  validateSafeDeploymentConfig(safeDeploymentConfig);
  const {
    safeVersion = DEFAULT_SAFE_VERSION,
    saltNonce = getChainSpecificDefaultSaltNonce(chainId),
    deploymentType
  } = safeDeploymentConfig;
  const safeProxyFactoryContract = await memoizedGetProxyFactoryContract({
    safeProvider,
    safeVersion,
    customContracts,
    chainId: chainId.toString(),
    deploymentType
  });
  const safeContract = await memoizedGetSafeContract({
    safeProvider,
    safeVersion,
    isL1SafeSingleton,
    customContracts,
    chainId: chainId.toString(),
    deploymentType
  });
  const initializer = await encodeSetupCallData({
    safeProvider,
    safeAccountConfig,
    safeContract,
    customContracts,
    customSafeVersion: safeVersion,
    // it is more efficient if we provide the safeVersion manually
    deploymentType
  });
  const encodedNonce = safeProvider.encodeParameters("uint256", [saltNonce]);
  const safeSingletonAddress = safeContract.getAddress();
  const initCodeCallData = encodeCreateProxyWithNonce(
    safeProxyFactoryContract,
    safeSingletonAddress,
    initializer,
    encodedNonce
  );
  const safeProxyFactoryAddress = safeProxyFactoryContract.getAddress();
  const initCode = `0x${[safeProxyFactoryAddress, initCodeCallData].reduce(
    (acc, x) => acc + x.replace("0x", ""),
    ""
  )}`;
  return initCode;
}
async function predictSafeAddress({
  safeProvider,
  chainId,
  safeAccountConfig,
  safeDeploymentConfig = {},
  isL1SafeSingleton,
  customContracts
}) {
  validateSafeAccountConfig(safeAccountConfig);
  validateSafeDeploymentConfig(safeDeploymentConfig);
  const {
    safeVersion = DEFAULT_SAFE_VERSION,
    saltNonce = getChainSpecificDefaultSaltNonce(chainId),
    deploymentType
  } = safeDeploymentConfig;
  const safeProxyFactoryContract = await memoizedGetProxyFactoryContract({
    safeProvider,
    safeVersion,
    customContracts,
    chainId: chainId.toString(),
    deploymentType
  });
  const [proxyCreationCode] = await memoizedGetProxyCreationCode({
    safeProvider,
    safeVersion,
    customContracts,
    chainId: chainId.toString(),
    deploymentType
  });
  const safeContract = await memoizedGetSafeContract({
    safeProvider,
    safeVersion,
    isL1SafeSingleton,
    customContracts,
    chainId: chainId.toString(),
    deploymentType
  });
  const initializer = await encodeSetupCallData({
    safeProvider,
    safeAccountConfig,
    safeContract,
    customContracts,
    customSafeVersion: safeVersion,
    // it is more efficient if we provide the safeVersion manuall
    deploymentType
  });
  const initializerHash = keccak2562(asHex(initializer));
  const encodedNonce = asHex(safeProvider.encodeParameters("uint256", [saltNonce]));
  const salt = keccak2562(concat2([initializerHash, encodedNonce]));
  const input = safeProvider.encodeParameters("address", [safeContract.getAddress()]);
  const from = safeProxyFactoryContract.getAddress();
  const isZkSyncEraChain = [ZKSYNC_MAINNET, ZKSYNC_TESTNET].includes(chainId);
  if (isZkSyncEraChain) {
    const proxyAddress2 = zkSyncEraCreate2Address(from, safeVersion, salt, asHex(input));
    return safeProvider.getChecksummedAddress(proxyAddress2);
  }
  const initCode = concat2([proxyCreationCode, asHex(input)]);
  const proxyAddress = getContractAddress({
    from,
    bytecode: initCode,
    opcode: "CREATE2",
    salt
  });
  return safeProvider.getChecksummedAddress(proxyAddress);
}
var validateSafeAccountConfig = ({ owners, threshold }) => {
  if (owners.length <= 0) throw new Error("Owner list must have at least one owner");
  if (threshold <= 0) throw new Error("Threshold must be greater than or equal to 1");
  if (threshold > owners.length)
    throw new Error("Threshold must be lower than or equal to owners length");
};
var validateSafeDeploymentConfig = ({ saltNonce }) => {
  if (saltNonce && BigInt(saltNonce) < 0)
    throw new Error("saltNonce must be greater than or equal to 0");
};
function getProxyCreationEvent(safeVersion) {
  const isLegacyProxyCreationEvent = semverSatisfies6(safeVersion, "<1.3.0");
  if (isLegacyProxyCreationEvent) {
    return "event ProxyCreation(address)";
  }
  if (semverSatisfies6(safeVersion, "=1.3.0")) {
    return "event ProxyCreation(address, address)";
  }
  return "event ProxyCreation(address indexed, address)";
}
function getSafeAddressFromDeploymentTx(txReceipt, safeVersion) {
  const eventHash = toEventHash(getProxyCreationEvent(safeVersion));
  const proxyCreationEvent = txReceipt?.logs.find((event) => event.topics[0] === eventHash);
  if (!proxyCreationEvent) {
    throw new Error("SafeProxy was not deployed correctly");
  }
  const { data, topics } = proxyCreationEvent;
  const { args } = decodeEventLog({
    abi: parseAbi3([getProxyCreationEvent(safeVersion)]),
    eventName: "ProxyCreation",
    data,
    topics
  });
  if (!args || !args.length) {
    throw new Error("SafeProxy was not deployed correctly");
  }
  return args[0];
}
function zkSyncEraCreate2Address(from, safeVersion, salt, input) {
  const bytecodeHash = ZKSYNC_SAFE_PROXY_DEPLOYED_BYTECODE[safeVersion].deployedBytecodeHash;
  const inputHash = keccak2562(input);
  const addressBytes = keccak2562(
    concat2([ZKSYNC_CREATE2_PREFIX, pad(asHex(from)), salt, bytecodeHash, inputHash])
  ).slice(26);
  return `0x${addressBytes}`;
}
function toTxResult(runner, hash, options) {
  return {
    hash,
    options,
    transactionResponse: {
      wait: async () => waitForTransactionReceipt(runner, { hash })
    }
  };
}
function isTypedDataSigner(signer) {
  const isPasskeySigner = !!signer?.passkeyRawId;
  return signer.signTypedData !== void 0 || !isPasskeySigner;
}

// src/managers/contractManager.ts
var ContractManager = class _ContractManager {
  #contractNetworks;
  #isL1SafeSingleton;
  #safeContract;
  #multiSendContract;
  #multiSendCallOnlyContract;
  static async init(config, safeProvider) {
    const contractManager = new _ContractManager();
    await contractManager.#initializeContractManager(config, safeProvider);
    return contractManager;
  }
  async #initializeContractManager(config, safeProvider) {
    const { isL1SafeSingleton, contractNetworks, predictedSafe, safeAddress } = config;
    const chainId = await safeProvider.getChainId();
    const customContracts = contractNetworks?.[chainId.toString()];
    this.#contractNetworks = contractNetworks;
    this.#isL1SafeSingleton = isL1SafeSingleton;
    let safeVersion;
    if (isSafeConfigWithPredictedSafe(config)) {
      safeVersion = predictedSafe?.safeDeploymentConfig?.safeVersion ?? DEFAULT_SAFE_VERSION;
    } else {
      try {
        safeVersion = await getSafeContractVersion(safeProvider, safeAddress);
      } catch (e) {
        safeVersion = DEFAULT_SAFE_VERSION;
      }
      this.#safeContract = await getSafeContract({
        safeProvider,
        safeVersion,
        isL1SafeSingleton,
        customSafeAddress: safeAddress,
        customContracts
      });
    }
    this.#multiSendContract = await getMultiSendContract({
      safeProvider,
      safeVersion,
      customContracts,
      deploymentType: predictedSafe?.safeDeploymentConfig?.deploymentType
    });
    this.#multiSendCallOnlyContract = await getMultiSendCallOnlyContract({
      safeProvider,
      safeVersion,
      customContracts,
      deploymentType: predictedSafe?.safeDeploymentConfig?.deploymentType
    });
  }
  get contractNetworks() {
    return this.#contractNetworks;
  }
  get isL1SafeSingleton() {
    return this.#isL1SafeSingleton;
  }
  get safeContract() {
    return this.#safeContract;
  }
  get multiSendContract() {
    return this.#multiSendContract;
  }
  get multiSendCallOnlyContract() {
    return this.#multiSendCallOnlyContract;
  }
};
var contractManager_default = ContractManager;

// src/managers/fallbackHandlerManager.ts
var FallbackHandlerManager = class {
  #safeProvider;
  #safeContract;
  // keccak256("fallback_manager.handler.address")
  #slot = "0x6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d5";
  constructor(safeProvider, safeContract) {
    this.#safeProvider = safeProvider;
    this.#safeContract = safeContract;
  }
  validateFallbackHandlerAddress(fallbackHandlerAddress) {
    const isValidAddress = this.#safeProvider.isAddress(fallbackHandlerAddress);
    if (!isValidAddress || isZeroAddress(fallbackHandlerAddress)) {
      throw new Error("Invalid fallback handler address provided");
    }
  }
  validateFallbackHandlerIsNotEnabled(currentFallbackHandler, newFallbackHandlerAddress) {
    if (sameString(currentFallbackHandler, newFallbackHandlerAddress)) {
      throw new Error("Fallback handler provided is already enabled");
    }
  }
  validateFallbackHandlerIsEnabled(fallbackHandlerAddress) {
    if (isZeroAddress(fallbackHandlerAddress)) {
      throw new Error("There is no fallback handler enabled yet");
    }
  }
  async isFallbackHandlerCompatible() {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const safeVersion = this.#safeContract.safeVersion;
    if (!hasSafeFeature("SAFE_FALLBACK_HANDLER" /* SAFE_FALLBACK_HANDLER */, safeVersion)) {
      throw new Error(
        "Current version of the Safe does not support the fallback handler functionality"
      );
    }
    return this.#safeContract;
  }
  async getFallbackHandler() {
    const safeContract = await this.isFallbackHandlerCompatible();
    return this.#safeProvider.getStorageAt(safeContract.getAddress(), this.#slot);
  }
  async encodeEnableFallbackHandlerData(fallbackHandlerAddress) {
    const safeContract = await this.isFallbackHandlerCompatible();
    this.validateFallbackHandlerAddress(fallbackHandlerAddress);
    const currentFallbackHandler = await this.getFallbackHandler();
    this.validateFallbackHandlerIsNotEnabled(currentFallbackHandler, fallbackHandlerAddress);
    return safeContract.encode("setFallbackHandler", [asHex(fallbackHandlerAddress)]);
  }
  async encodeDisableFallbackHandlerData() {
    const safeContract = await this.isFallbackHandlerCompatible();
    const currentFallbackHandler = await this.getFallbackHandler();
    this.validateFallbackHandlerIsEnabled(currentFallbackHandler);
    return safeContract.encode("setFallbackHandler", [asHex(ZERO_ADDRESS)]);
  }
};
var fallbackHandlerManager_default = FallbackHandlerManager;

// src/managers/guardManager.ts
var GuardManager = class {
  #safeProvider;
  #safeContract;
  // keccak256("guard_manager.guard.address")
  #slot = "0x4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c8";
  constructor(safeProvider, safeContract) {
    this.#safeProvider = safeProvider;
    this.#safeContract = safeContract;
  }
  validateGuardAddress(guardAddress) {
    const isValidAddress = this.#safeProvider.isAddress(guardAddress);
    if (!isValidAddress || isZeroAddress(guardAddress)) {
      throw new Error("Invalid guard address provided");
    }
  }
  validateGuardIsNotEnabled(currentGuard, newGuardAddress) {
    if (sameString(currentGuard, newGuardAddress)) {
      throw new Error("Guard provided is already enabled");
    }
  }
  validateGuardIsEnabled(guardAddress) {
    if (isZeroAddress(guardAddress)) {
      throw new Error("There is no guard enabled yet");
    }
  }
  async isGuardCompatible() {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const safeVersion = this.#safeContract.safeVersion;
    if (!hasSafeFeature("SAFE_TX_GUARDS" /* SAFE_TX_GUARDS */, safeVersion)) {
      throw new Error(
        "Current version of the Safe does not support Safe transaction guards functionality"
      );
    }
    return this.#safeContract;
  }
  async getGuard() {
    const safeContract = await this.isGuardCompatible();
    return this.#safeProvider.getStorageAt(safeContract.getAddress(), this.#slot);
  }
  async encodeEnableGuardData(guardAddress) {
    const safeContract = await this.isGuardCompatible();
    this.validateGuardAddress(guardAddress);
    const currentGuard = await this.getGuard();
    this.validateGuardIsNotEnabled(currentGuard, guardAddress);
    return safeContract.encode("setGuard", [asHex(guardAddress)]);
  }
  async encodeDisableGuardData() {
    const safeContract = await this.isGuardCompatible();
    const currentGuard = await this.getGuard();
    this.validateGuardIsEnabled(currentGuard);
    return safeContract.encode("setGuard", [asHex(ZERO_ADDRESS)]);
  }
};
var guardManager_default = GuardManager;

// src/managers/moduleManager.ts
var ModuleManager = class {
  #safeProvider;
  #safeContract;
  constructor(safeProvider, safeContract) {
    this.#safeProvider = safeProvider;
    this.#safeContract = safeContract;
  }
  validateModuleAddress(moduleAddress) {
    const isValidAddress = this.#safeProvider.isAddress(moduleAddress);
    if (!isValidAddress || isRestrictedAddress(moduleAddress)) {
      throw new Error("Invalid module address provided");
    }
  }
  validateModuleIsNotEnabled(moduleAddress, modules) {
    const moduleIndex = modules.findIndex((module) => sameString(module, moduleAddress));
    const isEnabled = moduleIndex >= 0;
    if (isEnabled) {
      throw new Error("Module provided is already enabled");
    }
  }
  validateModuleIsEnabled(moduleAddress, modules) {
    const moduleIndex = modules.findIndex((module) => sameString(module, moduleAddress));
    const isEnabled = moduleIndex >= 0;
    if (!isEnabled) {
      throw new Error("Module provided is not enabled yet");
    }
    return moduleIndex;
  }
  async getModules() {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const [modules] = await this.#safeContract.getModules();
    return [...modules];
  }
  async getModulesPaginated(start, pageSize) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const [modules, next] = await this.#safeContract.getModulesPaginated([start, BigInt(pageSize)]);
    return { modules, next };
  }
  async isModuleEnabled(moduleAddress) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const [isModuleEnabled] = await this.#safeContract.isModuleEnabled([moduleAddress]);
    return isModuleEnabled;
  }
  async encodeEnableModuleData(moduleAddress) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    this.validateModuleAddress(moduleAddress);
    const modules = await this.getModules();
    this.validateModuleIsNotEnabled(moduleAddress, modules);
    return this.#safeContract.encode("enableModule", [moduleAddress]);
  }
  async encodeDisableModuleData(moduleAddress) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    this.validateModuleAddress(moduleAddress);
    const modules = await this.getModules();
    const moduleIndex = this.validateModuleIsEnabled(moduleAddress, modules);
    const prevModuleAddress = moduleIndex === 0 ? SENTINEL_ADDRESS : modules[moduleIndex - 1];
    return this.#safeContract.encode("disableModule", [prevModuleAddress, moduleAddress]);
  }
};
var moduleManager_default = ModuleManager;

// src/managers/ownerManager.ts
var OwnerManager = class {
  #safeProvider;
  #safeContract;
  constructor(safeProvider, safeContract) {
    this.#safeProvider = safeProvider;
    this.#safeContract = safeContract;
  }
  validateOwnerAddress(ownerAddress, errorMessage) {
    const isValidAddress = this.#safeProvider.isAddress(ownerAddress);
    if (!isValidAddress || isRestrictedAddress(ownerAddress)) {
      throw new Error(errorMessage || "Invalid owner address provided");
    }
  }
  validateThreshold(threshold, numOwners) {
    if (threshold <= 0) {
      throw new Error("Threshold needs to be greater than 0");
    }
    if (threshold > numOwners) {
      throw new Error("Threshold cannot exceed owner count");
    }
  }
  validateAddressIsNotOwner(ownerAddress, owners, errorMessage) {
    const ownerIndex = owners.findIndex((owner) => sameString(owner, ownerAddress));
    const isOwner = ownerIndex >= 0;
    if (isOwner) {
      throw new Error(errorMessage || "Address provided is already an owner");
    }
  }
  validateAddressIsOwner(ownerAddress, owners, errorMessage) {
    const ownerIndex = owners.findIndex((owner) => sameString(owner, ownerAddress));
    const isOwner = ownerIndex >= 0;
    if (!isOwner) {
      throw new Error(errorMessage || "Address provided is not an owner");
    }
    return ownerIndex;
  }
  async getOwners() {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const [owners] = await this.#safeContract.getOwners();
    return [...owners];
  }
  async getThreshold() {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const [threshold] = await this.#safeContract.getThreshold();
    return Number(threshold);
  }
  async isOwner(ownerAddress) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const [isOwner] = await this.#safeContract.isOwner([ownerAddress]);
    return isOwner;
  }
  async encodeAddOwnerWithThresholdData(ownerAddress, threshold) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    this.validateOwnerAddress(ownerAddress);
    const owners = await this.getOwners();
    this.validateAddressIsNotOwner(ownerAddress, owners);
    const newThreshold = threshold ?? await this.getThreshold();
    this.validateThreshold(newThreshold, owners.length + 1);
    return this.#safeContract.encode("addOwnerWithThreshold", [ownerAddress, newThreshold]);
  }
  async encodeRemoveOwnerData(ownerAddress, threshold) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    this.validateOwnerAddress(ownerAddress);
    const owners = await this.getOwners();
    const ownerIndex = this.validateAddressIsOwner(ownerAddress, owners);
    const newThreshold = threshold ?? await this.getThreshold() - 1;
    this.validateThreshold(newThreshold, owners.length - 1);
    const prevOwnerAddress = ownerIndex === 0 ? SENTINEL_ADDRESS : owners[ownerIndex - 1];
    return this.#safeContract.encode("removeOwner", [prevOwnerAddress, ownerAddress, newThreshold]);
  }
  async encodeSwapOwnerData(oldOwnerAddress, newOwnerAddress) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    this.validateOwnerAddress(newOwnerAddress, "Invalid new owner address provided");
    this.validateOwnerAddress(oldOwnerAddress, "Invalid old owner address provided");
    const owners = await this.getOwners();
    this.validateAddressIsNotOwner(
      newOwnerAddress,
      owners,
      "New address provided is already an owner"
    );
    const oldOwnerIndex = this.validateAddressIsOwner(
      oldOwnerAddress,
      owners,
      "Old address provided is not an owner"
    );
    const prevOwnerAddress = oldOwnerIndex === 0 ? SENTINEL_ADDRESS : owners[oldOwnerIndex - 1];
    return this.#safeContract.encode("swapOwner", [
      prevOwnerAddress,
      oldOwnerAddress,
      newOwnerAddress
    ]);
  }
  async encodeChangeThresholdData(threshold) {
    if (!this.#safeContract) {
      throw new Error("Safe is not deployed");
    }
    const owners = await this.getOwners();
    this.validateThreshold(threshold, owners.length);
    return this.#safeContract.encode("changeThreshold", [threshold]);
  }
};
var ownerManager_default = OwnerManager;

// src/utils/messages/SafeMessage.ts
var EthSafeMessage = class {
  constructor(data) {
    this.signatures = /* @__PURE__ */ new Map();
    this.data = data;
  }
  getSignature(signer) {
    return this.signatures.get(signer.toLowerCase());
  }
  addSignature(signature) {
    this.signatures.set(signature.signer.toLowerCase(), signature);
  }
  encodedSignatures() {
    return buildSignatureBytes(Array.from(this.signatures.values()));
  }
};
var SafeMessage_default = EthSafeMessage;

// src/Safe.ts
import semverSatisfies7 from "semver/functions/satisfies.js";

// src/utils/passkeys/createPasskeyDeploymentTransaction.ts
async function createPasskeyDeploymentTransaction(safe, passkey) {
  const safeVersion = safe.getContractVersion();
  const safeAddress = await safe.getAddress();
  const owners = await safe.getOwners();
  const safePasskeyProvider = await SafeProvider_default.init({
    provider: safe.getSafeProvider().provider,
    signer: passkey,
    safeVersion,
    contractNetworks: safe.getContractManager().contractNetworks,
    safeAddress,
    owners
  });
  const passkeySigner = await safePasskeyProvider.getExternalSigner();
  const passkeyAddress = passkeySigner.account.address;
  const isPasskeyDeployed = await safe.getSafeProvider().isContractDeployed(passkeyAddress);
  if (isPasskeyDeployed) {
    throw new Error("Passkey Signer contract already deployed");
  }
  return passkeySigner.createDeployTxRequest();
}
var createPasskeyDeploymentTransaction_default = createPasskeyDeploymentTransaction;

// src/utils/on-chain-tracking/generateOnChainIdentifier.ts
import { keccak256 as keccak2563, toHex as toHex4 } from "viem";
function generateHash(input, size) {
  const fullHash = keccak2563(toHex4(input));
  return toHex4(fullHash.slice(-size)).replace("0x", "");
}
function generateOnChainIdentifier({
  project,
  platform = "Web",
  tool,
  toolVersion
}) {
  const identifierPrefix = "5afe";
  const identifierVersion = "00";
  const projectHash = generateHash(project, 20);
  const platformHash = generateHash(platform, 3);
  const toolHash = generateHash(tool, 3);
  const toolVersionHash = generateHash(toolVersion, 3);
  return `${identifierPrefix}${identifierVersion}${projectHash}${platformHash}${toolHash}${toolVersionHash}`;
}
var generateOnChainIdentifier_default = generateOnChainIdentifier;

// src/utils/getProtocolKitVersion.ts
var getProtocolKitVersion = () => "6.0.0";

// src/Safe.ts
var EQ_OR_GT_1_4_1 = ">=1.4.1";
var EQ_OR_GT_1_3_03 = ">=1.3.0";
var Safe = class _Safe {
  constructor() {
    this.#MAGIC_VALUE = "0x1626ba7e";
    this.#MAGIC_VALUE_BYTES = "0x20c13b0b";
    // on-chain Analytics
    this.#onchainIdentifier = "";
    /**
     * Call the CompatibilityFallbackHandler getMessageHash method
     *
     * @param messageHash The hash of the message
     * @returns Returns the Safe message hash to be signed
     * @link https://github.com/safe-global/safe-contracts/blob/8ffae95faa815acf86ec8b50021ebe9f96abde10/contracts/handler/CompatibilityFallbackHandler.sol#L26-L28
     */
    this.getSafeMessageHash = async (messageHash) => {
      const safeAddress = await this.getAddress();
      const safeVersion = this.getContractVersion();
      const chainId = await this.getChainId();
      return calculateSafeMessageHash(safeAddress, messageHash, safeVersion, chainId);
    };
    /**
     * Call the CompatibilityFallbackHandler isValidSignature method
     *
     * @param messageHash The hash of the message
     * @param signature The signature to be validated or '0x'. You can send as signature one of the following:
     *  1) An array of SafeSignature. In this case the signatures are concatenated for validation (buildSignatureBytes())
     *  2) The concatenated signatures as string
     *  3) '0x' if you want to validate an onchain message (Approved hash)
     * @returns A boolean indicating if the signature is valid
     * @link https://github.com/safe-global/safe-contracts/blob/main/contracts/handler/CompatibilityFallbackHandler.sol
     */
    this.isValidSignature = async (messageHash, signature = "0x") => {
      const safeAddress = await this.getAddress();
      const fallbackHandler = await this.#getFallbackHandlerContract();
      const signatureToCheck = signature && Array.isArray(signature) ? buildSignatureBytes(signature) : signature;
      const bytes32Tuple = [
        asHash(messageHash),
        asHex(signatureToCheck)
      ];
      const data = fallbackHandler.encode("isValidSignature", bytes32Tuple);
      const bytesTuple = [
        asHash(messageHash),
        asHex(signatureToCheck)
      ];
      const bytesData = fallbackHandler.encode("isValidSignature", bytesTuple);
      try {
        const isValidSignatureResponse = await Promise.all([
          this.#safeProvider.call({
            from: safeAddress,
            to: safeAddress,
            data
          }),
          this.#safeProvider.call({
            from: safeAddress,
            to: safeAddress,
            data: bytesData
          })
        ]);
        return !!isValidSignatureResponse.length && (isValidSignatureResponse[0].slice(0, 10).toLowerCase() === this.#MAGIC_VALUE || isValidSignatureResponse[1].slice(0, 10).toLowerCase() === this.#MAGIC_VALUE_BYTES);
      } catch (error) {
        return false;
      }
    };
    this.getContractInfo = ({
      contractAddress
    }) => {
      return getContractInfo(contractAddress);
    };
  }
  #predictedSafe;
  #safeProvider;
  #contractManager;
  #ownerManager;
  #moduleManager;
  #guardManager;
  #fallbackHandlerManager;
  #MAGIC_VALUE;
  #MAGIC_VALUE_BYTES;
  #onchainIdentifier;
  /**
   * Creates an instance of the Safe Core SDK.
   * @param config - Ethers Safe configuration
   * @returns The Safe Core SDK instance
   * @throws "The SDK must be initialized with a safeAddress or a predictedSafe"
   * @throws "SafeProxy contract is not deployed on the current network"
   * @throws "MultiSend contract is not deployed on the current network"
   * @throws "MultiSendCallOnly contract is not deployed on the current network"
   */
  static async init(config) {
    const protocolKit = new _Safe();
    await protocolKit.#initializeProtocolKit(config);
    return protocolKit;
  }
  /**
   * Initializes the Safe Core SDK instance.
   * @param config - Safe configuration
   * @throws "Signer must be connected to a provider"
   * @throws "SafeProxy contract is not deployed on the current network"
   * @throws "MultiSend contract is not deployed on the current network"
   * @throws "MultiSendCallOnly contract is not deployed on the current network"
   */
  async #initializeProtocolKit(config) {
    const { provider, signer, isL1SafeSingleton, contractNetworks, onchainAnalytics } = config;
    if (onchainAnalytics?.project) {
      const { project, platform } = onchainAnalytics;
      this.#onchainIdentifier = generateOnChainIdentifier_default({
        project,
        platform,
        tool: "protocol-kit",
        toolVersion: getProtocolKitVersion()
      });
    }
    this.#safeProvider = await SafeProvider_default.init({
      provider,
      signer,
      safeVersion: DEFAULT_SAFE_VERSION,
      contractNetworks
    });
    if (isSafeConfigWithPredictedSafe(config)) {
      this.#predictedSafe = config.predictedSafe;
      this.#contractManager = await contractManager_default.init(
        {
          provider,
          predictedSafe: this.#predictedSafe,
          isL1SafeSingleton,
          contractNetworks
        },
        this.#safeProvider
      );
    } else {
      this.#contractManager = await contractManager_default.init(
        {
          provider,
          safeAddress: config.safeAddress,
          isL1SafeSingleton,
          contractNetworks
        },
        this.#safeProvider
      );
    }
    const safeVersion = this.getContractVersion();
    this.#safeProvider = await SafeProvider_default.init({
      provider,
      signer,
      safeVersion,
      contractNetworks
    });
    this.#ownerManager = new ownerManager_default(this.#safeProvider, this.#contractManager.safeContract);
    this.#moduleManager = new moduleManager_default(this.#safeProvider, this.#contractManager.safeContract);
    this.#guardManager = new guardManager_default(this.#safeProvider, this.#contractManager.safeContract);
    this.#fallbackHandlerManager = new fallbackHandlerManager_default(
      this.#safeProvider,
      this.#contractManager.safeContract
    );
    const isPasskeySigner = signer && typeof signer !== "string";
    if (isPasskeySigner) {
      const safeAddress = await this.getAddress();
      const owners = await this.getOwners();
      this.#safeProvider = await SafeProvider_default.init({
        provider,
        signer,
        safeVersion,
        contractNetworks,
        safeAddress,
        owners
      });
    }
  }
  /**
   * Returns a new instance of the Safe Core SDK.
   * @param config - Connect Safe configuration
   * @throws "A safeAddress and a predictedSafe cannot be connected at the same time"
   * @throws "SafeProxy contract is not deployed on the current network"
   * @throws "MultiSend contract is not deployed on the current network"
   * @throws "MultiSendCallOnly contract is not deployed on the current network"
   */
  async connect(config) {
    const { provider, signer, safeAddress, predictedSafe, isL1SafeSingleton, contractNetworks } = config;
    const configProps = {
      provider: provider || this.#safeProvider.provider,
      signer,
      isL1SafeSingleton: isL1SafeSingleton || this.#contractManager.isL1SafeSingleton,
      contractNetworks: contractNetworks || this.#contractManager.contractNetworks
    };
    if (safeAddress) {
      return await _Safe.init({
        safeAddress,
        ...configProps
      });
    }
    if (predictedSafe) {
      return await _Safe.init({
        predictedSafe,
        ...configProps
      });
    }
    if (this.#predictedSafe) {
      return await _Safe.init({
        predictedSafe: this.#predictedSafe,
        ...configProps
      });
    }
    return await _Safe.init({
      safeAddress: await this.getAddress(),
      ...configProps
    });
  }
  /**
   * Returns the initialization code to deploy a Safe account based on the predicted address.
   *
   * @returns The Safe configuration
   */
  async getInitCode() {
    if (!this.#predictedSafe) {
      throw new Error("The Safe already exists");
    }
    const chainId = await this.#safeProvider.getChainId();
    return getPredictedSafeAddressInitCode({
      safeProvider: this.#safeProvider,
      chainId,
      customContracts: this.#contractManager.contractNetworks?.[chainId.toString()],
      ...this.#predictedSafe
    });
  }
  /**
   * Returns the predicted Safe configuration.
   * @returns {PredictedSafeProps | undefined} The predicted Safe configuration
   */
  getPredictedSafe() {
    return this.#predictedSafe;
  }
  /**
   * Returns the address of the current SafeProxy contract.
   *
   * @returns The address of the SafeProxy contract
   */
  async getAddress() {
    if (this.#predictedSafe) {
      const safeVersion = this.getContractVersion();
      if (!hasSafeFeature("ACCOUNT_ABSTRACTION" /* ACCOUNT_ABSTRACTION */, safeVersion)) {
        throw new Error(
          "Account Abstraction functionality is not available for Safes with version lower than v1.3.0"
        );
      }
      const chainId = await this.#safeProvider.getChainId();
      return predictSafeAddress({
        safeProvider: this.#safeProvider,
        chainId,
        isL1SafeSingleton: this.#contractManager.isL1SafeSingleton,
        customContracts: this.#contractManager.contractNetworks?.[chainId.toString()],
        ...this.#predictedSafe
      });
    }
    if (!this.#contractManager.safeContract) {
      throw new Error("Safe is not deployed");
    }
    return this.#contractManager.safeContract.getAddress();
  }
  /**
   * Returns the ContractManager
   *
   * @returns The current ContractManager
   * */
  getContractManager() {
    return this.#contractManager;
  }
  /**
   * Returns the current SafeProvider.
   *
   * @returns The current SafeProvider
   */
  getSafeProvider() {
    return this.#safeProvider;
  }
  /**
   * Returns the address of the MultiSend contract.
   *
   * @returns The address of the MultiSend contract
   */
  getMultiSendAddress() {
    return this.#contractManager.multiSendContract.getAddress();
  }
  /**
   * Returns the address of the MultiSendCallOnly contract.
   *
   * @returns The address of the MultiSendCallOnly contract
   */
  getMultiSendCallOnlyAddress() {
    return this.#contractManager.multiSendCallOnlyContract.getAddress();
  }
  /**
   * Checks if the current Safe is deployed.
   *
   * @returns TRUE if the Safe contract is deployed
   */
  async isSafeDeployed() {
    const safeAddress = await this.getAddress();
    const isSafeDeployed = await this.#safeProvider.isContractDeployed(safeAddress);
    return isSafeDeployed;
  }
  /**
   * Returns the Safe Singleton contract version.
   *
   * @returns The Safe Singleton contract version
   */
  getContractVersion() {
    if (this.#contractManager.safeContract) {
      return this.#contractManager.safeContract.safeVersion;
    }
    if (this.#predictedSafe?.safeDeploymentConfig?.safeVersion) {
      return this.#predictedSafe.safeDeploymentConfig.safeVersion;
    }
    return DEFAULT_SAFE_VERSION;
  }
  /**
   * Returns the list of Safe owner accounts.
   *
   * @returns The list of owners
   */
  async getOwners() {
    if (this.#predictedSafe?.safeAccountConfig.owners) {
      return Promise.resolve(this.#predictedSafe.safeAccountConfig.owners);
    }
    return this.#ownerManager.getOwners();
  }
  /**
   * Returns the Safe nonce.
   *
   * @returns The Safe nonce
   */
  async getNonce() {
    if (!this.#contractManager.safeContract) {
      return Promise.resolve(0);
    }
    const nonce = await this.#contractManager.safeContract.getNonce();
    return Number(nonce);
  }
  /**
   * Returns the Safe threshold.
   *
   * @returns The Safe threshold
   */
  async getThreshold() {
    if (this.#predictedSafe?.safeAccountConfig.threshold) {
      return Promise.resolve(this.#predictedSafe.safeAccountConfig.threshold);
    }
    return this.#ownerManager.getThreshold();
  }
  /**
   * Returns the chainId of the connected network.
   *
   * @returns The chainId of the connected network
   */
  async getChainId() {
    return this.#safeProvider.getChainId();
  }
  /**
   * Returns the ETH balance of the Safe.
   *
   * @returns The ETH balance of the Safe
   */
  async getBalance() {
    return this.#safeProvider.getBalance(await this.getAddress());
  }
  /**
   * Returns the address of the FallbackHandler contract.
   *
   * @returns The address of the FallbackHandler contract
   */
  getFallbackHandler() {
    return this.#fallbackHandlerManager.getFallbackHandler();
  }
  /**
   * Returns the enabled Safe guard or 0x address if no guards are enabled.
   *
   * @returns The address of the enabled Safe guard
   * @throws "Current version of the Safe does not support Safe transaction guards functionality"
   */
  async getGuard() {
    return this.#guardManager.getGuard();
  }
  /**
   * Returns the list of addresses of all the enabled Safe modules.
   *
   * @returns The list of addresses of all the enabled Safe modules
   */
  async getModules() {
    return this.#moduleManager.getModules();
  }
  /**
   * Returns the list of addresses of all the enabled Safe modules. The list will start on the next position address in relation to start.
   *
   * @param start - The address to be "offsetted" from the list, should be SENTINEL_ADDRESS otherwise.
   * @param pageSize - The size of the page. It will be the max length of the returning array. Must be greater then 0.
   * @returns The list of addresses of all the enabled Safe modules
   */
  async getModulesPaginated(start, pageSize = 10) {
    return this.#moduleManager.getModulesPaginated(start, pageSize);
  }
  /**
   * Checks if a specific Safe module is enabled for the current Safe.
   *
   * @param moduleAddress - The desired module address
   * @returns TRUE if the module is enabled
   */
  async isModuleEnabled(moduleAddress) {
    return this.#moduleManager.isModuleEnabled(moduleAddress);
  }
  /**
   * Checks if a specific address is an owner of the current Safe.
   *
   * @param ownerAddress - The account address
   * @returns TRUE if the account is an owner
   */
  async isOwner(ownerAddress) {
    if (this.#predictedSafe?.safeAccountConfig.owners) {
      return Promise.resolve(
        this.#predictedSafe?.safeAccountConfig.owners.some(
          (owner) => sameString(owner, ownerAddress)
        )
      );
    }
    return this.#ownerManager.isOwner(ownerAddress);
  }
  /**
   * Returns a Safe transaction ready to be signed by the owners.
   *
   * @param createTransactionProps - The createTransaction props
   * @returns The Safe transaction
   * @throws "Invalid empty array of transactions"
   */
  async createTransaction({
    transactions,
    onlyCalls = false,
    options
  }) {
    const safeVersion = this.getContractVersion();
    if (this.#predictedSafe && !hasSafeFeature("ACCOUNT_ABSTRACTION" /* ACCOUNT_ABSTRACTION */, safeVersion)) {
      throw new Error(
        "Account Abstraction functionality is not available for Safes with version lower than v1.3.0"
      );
    }
    if (transactions.length === 0) {
      throw new Error("Invalid empty array of transactions");
    }
    let newTransaction;
    if (transactions.length > 1) {
      const multiSendContract = onlyCalls ? this.#contractManager.multiSendCallOnlyContract : this.#contractManager.multiSendContract;
      const multiSendData = encodeMultiSendData(transactions.map(standardizeMetaTransactionData));
      const multiSendTransaction = {
        ...options,
        to: multiSendContract.getAddress(),
        value: "0",
        data: multiSendContract.encode("multiSend", [asHex(multiSendData)]),
        operation: OperationType3.DelegateCall
      };
      newTransaction = multiSendTransaction;
    } else {
      newTransaction = { ...options, ...transactions[0] };
    }
    if (this.#predictedSafe) {
      return new SafeTransaction_default(
        await standardizeSafeTransactionData({
          predictedSafe: this.#predictedSafe,
          provider: this.#safeProvider.provider,
          tx: newTransaction,
          contractNetworks: this.#contractManager.contractNetworks
        })
      );
    }
    if (!this.#contractManager.safeContract) {
      throw new Error("Safe is not deployed");
    }
    return new SafeTransaction_default(
      await standardizeSafeTransactionData({
        safeContract: this.#contractManager.safeContract,
        provider: this.#safeProvider.provider,
        tx: newTransaction,
        contractNetworks: this.#contractManager.contractNetworks
      })
    );
  }
  /**
   * Returns a Safe transaction ready to be signed by the owners that invalidates the pending Safe transaction/s with a specific nonce.
   *
   * @param nonce - The nonce of the transaction/s that are going to be rejected
   * @returns The Safe transaction that invalidates the pending Safe transaction/s
   */
  async createRejectionTransaction(nonce) {
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: "0x"
    };
    const options = {
      nonce,
      safeTxGas: "0"
    };
    return this.createTransaction({ transactions: [safeTransactionData], options });
  }
  /**
   * Copies a Safe transaction
   *
   * @param safeTransaction - The Safe transaction
   * @returns The new Safe transaction
   */
  async copyTransaction(safeTransaction) {
    const { to, value, data, operation, ...options } = safeTransaction.data;
    const safeTransactionData = {
      to,
      value,
      data,
      operation
    };
    const signedSafeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    safeTransaction.signatures.forEach((signature) => {
      signedSafeTransaction.addSignature(signature);
    });
    return signedSafeTransaction;
  }
  /**
   * Returns the transaction hash of a Safe transaction.
   *
   * @param safeTransaction - The Safe transaction
   * @returns The hash of the Safe transaction
   */
  async getTransactionHash(safeTransaction) {
    const safeAddress = await this.getAddress();
    const safeVersion = this.getContractVersion();
    const chainId = await this.getChainId();
    return calculateSafeTransactionHash(safeAddress, safeTransaction.data, safeVersion, chainId);
  }
  /**
   * Signs a hash using the current signer account.
   *
   * @param hash - The hash to sign
   * @returns The Safe signature
   */
  async signHash(hash) {
    const isPasskeySigner = await this.#safeProvider.isPasskeySigner();
    const signerAddress = await this.#safeProvider.getSignerAddress();
    if (isPasskeySigner && signerAddress) {
      let signature2 = await this.#safeProvider.signMessage(hash);
      signature2 = await adjustVInSignature(SigningMethod2.ETH_SIGN, signature2, hash, signerAddress);
      const safeSignature = new EthSafeSignature(signerAddress, signature2, true);
      return safeSignature;
    }
    const signature = await generateSignature(this.#safeProvider, hash);
    return signature;
  }
  /**
   * Returns a Safe message ready to be signed by the owners.
   *
   * @param message - The message
   * @returns The Safe message
   */
  createMessage(message) {
    return new SafeMessage_default(message);
  }
  /**
   * Returns the Safe message with a new signature
   *
   * @param message The message to be signed
   * @param signingMethod The signature type
   * @param preimageSafeAddress If the preimage is required, the address of the Safe that will be used to calculate the preimage.
   * This field is mandatory for 1.4.1 contract versions Because the safe uses the old EIP-1271 interface which uses `bytes` instead of `bytes32` for the message
   * we need to use the pre-image of the message to calculate the message hash
   * https://github.com/safe-global/safe-contracts/blob/192c7dc67290940fcbc75165522bb86a37187069/test/core/Safe.Signatures.spec.ts#L229-L233
   * @returns The signed Safe message
   */
  async signMessage(message, signingMethod = SigningMethod2.ETH_SIGN_TYPED_DATA_V4, preimageSafeAddress) {
    const signerAddress = await this.#safeProvider.getSignerAddress();
    if (!signerAddress) {
      throw new Error("The protocol-kit requires a signer to use this method");
    }
    const addressIsOwner = await this.isOwner(signerAddress);
    if (!addressIsOwner) {
      throw new Error("Messages can only be signed by Safe owners");
    }
    const safeVersion = this.getContractVersion();
    if (signingMethod === SigningMethod2.SAFE_SIGNATURE && semverSatisfies7(safeVersion, EQ_OR_GT_1_4_1) && !preimageSafeAddress) {
      throw new Error("The parent Safe account address is mandatory for contract signatures");
    }
    let signature;
    if (signingMethod === SigningMethod2.ETH_SIGN_TYPED_DATA_V4) {
      signature = await this.signTypedData(message, "v4");
    } else if (signingMethod === SigningMethod2.ETH_SIGN_TYPED_DATA_V3) {
      signature = await this.signTypedData(message, "v3");
    } else if (signingMethod === SigningMethod2.ETH_SIGN_TYPED_DATA) {
      signature = await this.signTypedData(message, void 0);
    } else {
      const chainId = await this.getChainId();
      if (!hasSafeFeature("ETH_SIGN" /* ETH_SIGN */, safeVersion)) {
        throw new Error("eth_sign is only supported by Safes >= v1.1.0");
      }
      let safeMessageHash;
      if (signingMethod === SigningMethod2.SAFE_SIGNATURE && preimageSafeAddress && semverSatisfies7(safeVersion, EQ_OR_GT_1_4_1)) {
        const messageHashData = preimageSafeMessageHash(
          preimageSafeAddress,
          hashSafeMessage(message.data),
          safeVersion,
          chainId
        );
        safeMessageHash = await this.getSafeMessageHash(messageHashData);
      } else {
        safeMessageHash = await this.getSafeMessageHash(hashSafeMessage(message.data));
      }
      signature = await this.signHash(safeMessageHash);
    }
    const signedSafeMessage = this.createMessage(message.data);
    message.signatures.forEach((signature2) => {
      signedSafeMessage.addSignature(signature2);
    });
    signedSafeMessage.addSignature(signature);
    return signedSafeMessage;
  }
  /**
   * Signs a transaction according to the EIP-712 using the current signer account.
   *
   * @param eip712Data - The Safe Transaction or message hash to be signed
   * @param methodVersion - EIP-712 version. Optional
   * @returns The Safe signature
   */
  async signTypedData(eip712Data, methodVersion) {
    const safeEIP712Args = {
      safeAddress: await this.getAddress(),
      safeVersion: this.getContractVersion(),
      chainId: await this.#safeProvider.getChainId(),
      data: eip712Data.data
    };
    return generateEIP712Signature(this.#safeProvider, safeEIP712Args, methodVersion);
  }
  /**
   * Adds the signature of the current signer to the Safe transaction object.
   *
   * @param safeTransaction - The Safe transaction to be signed
   * @param signingMethod - Method followed to sign a transaction. Optional. Default value is "eth_sign"
   * @param preimageSafeAddress - If the preimage is required, the address of the Safe that will be used to calculate the preimage
   * This field is mandatory for 1.3.0 and 1.4.1 contract versions Because the safe uses the old EIP-1271 interface which uses `bytes` instead of `bytes32` for the message
   * we need to use the pre-image of the message to calculate the message hash
   * https://github.com/safe-global/safe-contracts/blob/192c7dc67290940fcbc75165522bb86a37187069/test/core/Safe.Signatures.spec.ts#L229-L233
   * @returns The signed Safe transaction
   * @throws "Transactions can only be signed by Safe owners"
   */
  async signTransaction(safeTransaction, signingMethod = SigningMethod2.ETH_SIGN_TYPED_DATA_V4, preimageSafeAddress) {
    const transaction = isSafeMultisigTransactionResponse(safeTransaction) ? await this.toSafeTransactionType(safeTransaction) : safeTransaction;
    const signerAddress = await this.#safeProvider.getSignerAddress();
    if (!signerAddress) {
      throw new Error("The protocol-kit requires a signer to use this method");
    }
    const addressIsOwner = await this.isOwner(signerAddress);
    if (!addressIsOwner) {
      throw new Error("Transactions can only be signed by Safe owners");
    }
    const safeVersion = this.getContractVersion();
    if (signingMethod === SigningMethod2.SAFE_SIGNATURE && semverSatisfies7(safeVersion, EQ_OR_GT_1_3_03) && !preimageSafeAddress) {
      throw new Error("The parent Safe account address is mandatory for contract signatures");
    }
    let signature;
    const isPasskeySigner = await this.#safeProvider.isPasskeySigner();
    if (isPasskeySigner) {
      const txHash = await this.getTransactionHash(transaction);
      signature = await this.signHash(txHash);
    } else if (signingMethod === SigningMethod2.ETH_SIGN_TYPED_DATA_V4) {
      signature = await this.signTypedData(transaction, "v4");
    } else if (signingMethod === SigningMethod2.ETH_SIGN_TYPED_DATA_V3) {
      signature = await this.signTypedData(transaction, "v3");
    } else if (signingMethod === SigningMethod2.ETH_SIGN_TYPED_DATA) {
      signature = await this.signTypedData(transaction, void 0);
    } else {
      const safeVersion2 = this.getContractVersion();
      const chainId = await this.getChainId();
      if (!hasSafeFeature("ETH_SIGN" /* ETH_SIGN */, safeVersion2)) {
        throw new Error("eth_sign is only supported by Safes >= v1.1.0");
      }
      let txHash;
      if (signingMethod === SigningMethod2.SAFE_SIGNATURE && semverSatisfies7(safeVersion2, EQ_OR_GT_1_3_03) && preimageSafeAddress) {
        const txHashData = preimageSafeTransactionHash(
          preimageSafeAddress,
          safeTransaction.data,
          safeVersion2,
          chainId
        );
        txHash = await this.getSafeMessageHash(txHashData);
      } else {
        txHash = await this.getTransactionHash(transaction);
      }
      signature = await this.signHash(txHash);
    }
    const signedSafeTransaction = await this.copyTransaction(transaction);
    signedSafeTransaction.addSignature(signature);
    return signedSafeTransaction;
  }
  /**
   * Approves on-chain a hash using the current signer account.
   *
   * @param hash - The hash to approve
   * @param options - The Safe transaction execution options. Optional
   * @returns The Safe transaction response
   * @throws "Transaction hashes can only be approved by Safe owners"
   * @throws "Cannot specify gas and gasLimit together in transaction options"
   */
  async approveTransactionHash(hash, options) {
    if (!this.#contractManager.safeContract) {
      throw new Error("Safe is not deployed");
    }
    const signerAddress = await this.#safeProvider.getSignerAddress();
    if (!signerAddress) {
      throw new Error("The protocol-kit requires a signer to use this method");
    }
    const addressIsOwner = await this.isOwner(signerAddress);
    if (!addressIsOwner) {
      throw new Error("Transaction hashes can only be approved by Safe owners");
    }
    return this.#contractManager.safeContract.approveHash(hash, {
      from: signerAddress,
      ...options
    });
  }
  /**
   * Returns a list of owners who have approved a specific Safe transaction.
   *
   * @param txHash - The Safe transaction hash
   * @returns The list of owners
   */
  async getOwnersWhoApprovedTx(txHash) {
    if (!this.#contractManager.safeContract) {
      return [];
    }
    const owners = await this.getOwners();
    const ownersWhoApproved = [];
    for (const owner of owners) {
      const [approved] = await this.#contractManager.safeContract.approvedHashes([
        asHex(owner),
        asHash(txHash)
      ]);
      if (approved > 0) {
        ownersWhoApproved.push(owner);
      }
    }
    return ownersWhoApproved;
  }
  /**
   * Returns the Safe transaction to enable the fallback handler.
   *
   * @param address - The new fallback handler address
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "Invalid fallback handler address provided"
   * @throws "Fallback handler provided is already enabled"
   * @throws "Current version of the Safe does not support the fallback handler functionality"
   */
  async createEnableFallbackHandlerTx(fallbackHandlerAddress, options) {
    const safeVersion = await this.getContractVersion();
    if (this.#predictedSafe && !hasSafeFeature("ACCOUNT_ABSTRACTION" /* ACCOUNT_ABSTRACTION */, safeVersion)) {
      throw new Error(
        "Account Abstraction functionality is not available for Safes with version lower than v1.3.0"
      );
    }
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#fallbackHandlerManager.encodeEnableFallbackHandlerData(
        fallbackHandlerAddress
      )
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to disable the fallback handler.
   *
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "There is no fallback handler enabled yet"
   * @throws "Current version of the Safe does not support the fallback handler functionality"
   */
  async createDisableFallbackHandlerTx(options) {
    const safeVersion = await this.getContractVersion();
    if (this.#predictedSafe && !hasSafeFeature("ACCOUNT_ABSTRACTION" /* ACCOUNT_ABSTRACTION */, safeVersion)) {
      throw new Error(
        "Account Abstraction functionality is not available for Safes with version lower than v1.3.0"
      );
    }
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#fallbackHandlerManager.encodeDisableFallbackHandlerData()
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to enable a Safe guard.
   *
   * @param guardAddress - The desired guard address
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "Invalid guard address provided"
   * @throws "Guard provided is already enabled"
   * @throws "Current version of the Safe does not support Safe transaction guards functionality"
   */
  async createEnableGuardTx(guardAddress, options) {
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#guardManager.encodeEnableGuardData(guardAddress)
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to disable a Safe guard.
   *
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "There is no guard enabled yet"
   * @throws "Current version of the Safe does not support Safe transaction guards functionality"
   */
  async createDisableGuardTx(options) {
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#guardManager.encodeDisableGuardData()
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to enable a Safe module.
   *
   * @param moduleAddress - The desired module address
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "Invalid module address provided"
   * @throws "Module provided is already enabled"
   */
  async createEnableModuleTx(moduleAddress, options) {
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#moduleManager.encodeEnableModuleData(moduleAddress)
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to disable a Safe module.
   *
   * @param moduleAddress - The desired module address
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "Invalid module address provided"
   * @throws "Module provided is not enabled already"
   */
  async createDisableModuleTx(moduleAddress, options) {
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#moduleManager.encodeDisableModuleData(moduleAddress)
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to add an owner and optionally change the threshold.
   *
   * @param params - The transaction params
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "Invalid owner address provided"
   * @throws "Address provided is already an owner"
   * @throws "Threshold needs to be greater than 0"
   * @throws "Threshold cannot exceed owner count"
   */
  async createAddOwnerTx(params, options) {
    const isPasskey = isPasskeyParam(params);
    const ownerAddress = isPasskey ? await getPasskeyOwnerAddress_default(this, params.passkey) : params.ownerAddress;
    const { threshold } = params;
    const addOwnerTransaction = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#ownerManager.encodeAddOwnerWithThresholdData(ownerAddress, threshold)
    };
    const transactions = [addOwnerTransaction];
    if (isPasskey && !await this.#safeProvider.isContractDeployed(ownerAddress)) {
      const passkeyDeploymentTransaction = await createPasskeyDeploymentTransaction_default(
        this,
        params.passkey
      );
      transactions.push(passkeyDeploymentTransaction);
    }
    const safeTransaction = await this.createTransaction({
      transactions,
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to remove an owner and optionally change the threshold.
   *
   * @param params - The transaction params
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "Invalid owner address provided"
   * @throws "Address provided is not an owner"
   * @throws "Threshold needs to be greater than 0"
   * @throws "Threshold cannot exceed owner count"
   */
  async createRemoveOwnerTx(params, options) {
    const { threshold } = params;
    const isPasskey = isPasskeyParam(params);
    const ownerAddress = isPasskey ? await getPasskeyOwnerAddress_default(this, params.passkey) : params.ownerAddress;
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#ownerManager.encodeRemoveOwnerData(ownerAddress, threshold)
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to replace an owner of the Safe with a new one.
   *
   * @param params - The transaction params
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "Invalid new owner address provided"
   * @throws "Invalid old owner address provided"
   * @throws "New address provided is already an owner"
   * @throws "Old address provided is not an owner"
   */
  async createSwapOwnerTx(params, options) {
    const oldOwnerAddress = isOldOwnerPasskey(params) ? await getPasskeyOwnerAddress_default(this, params.oldOwnerPasskey) : params.oldOwnerAddress;
    const newOwnerAddress = isNewOwnerPasskey(params) ? await getPasskeyOwnerAddress_default(this, params.newOwnerPasskey) : params.newOwnerAddress;
    const swapOwnerTransaction = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#ownerManager.encodeSwapOwnerData(oldOwnerAddress, newOwnerAddress)
    };
    const transactions = [swapOwnerTransaction];
    if (isNewOwnerPasskey(params) && !await this.#safeProvider.isContractDeployed(newOwnerAddress)) {
      const passkeyDeploymentTransaction = await createPasskeyDeploymentTransaction_default(
        this,
        params.newOwnerPasskey
      );
      transactions.push(passkeyDeploymentTransaction);
    }
    const safeTransaction = await this.createTransaction({
      transactions,
      options
    });
    return safeTransaction;
  }
  /**
   * Returns the Safe transaction to change the threshold.
   *
   * @param threshold - The new threshold
   * @param options - The transaction optional properties
   * @returns The Safe transaction ready to be signed
   * @throws "Threshold needs to be greater than 0"
   * @throws "Threshold cannot exceed owner count"
   */
  async createChangeThresholdTx(threshold, options) {
    const safeTransactionData = {
      to: await this.getAddress(),
      value: "0",
      data: await this.#ownerManager.encodeChangeThresholdData(threshold)
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    return safeTransaction;
  }
  /**
   * Converts a transaction from type SafeMultisigTransactionResponse to type SafeTransaction
   *
   * @param serviceTransactionResponse - The transaction to convert
   * @returns The converted transaction with type SafeTransaction
   */
  async toSafeTransactionType(serviceTransactionResponse) {
    const safeTransactionData = {
      to: serviceTransactionResponse.to,
      value: serviceTransactionResponse.value,
      data: serviceTransactionResponse.data || "0x",
      operation: serviceTransactionResponse.operation
    };
    const options = {
      safeTxGas: serviceTransactionResponse.safeTxGas.toString(),
      baseGas: serviceTransactionResponse.baseGas.toString(),
      gasPrice: serviceTransactionResponse.gasPrice,
      gasToken: serviceTransactionResponse.gasToken,
      refundReceiver: serviceTransactionResponse.refundReceiver,
      nonce: serviceTransactionResponse.nonce
    };
    const safeTransaction = await this.createTransaction({
      transactions: [safeTransactionData],
      options
    });
    serviceTransactionResponse.confirmations?.map(
      (confirmation) => {
        const signature = new EthSafeSignature(confirmation.owner, confirmation.signature);
        safeTransaction.addSignature(signature);
      }
    );
    return safeTransaction;
  }
  /**
   * Checks if a Safe transaction can be executed successfully with no errors.
   *
   * @param safeTransaction - The Safe transaction to check
   * @param options - The Safe transaction execution options. Optional
   * @returns TRUE if the Safe transaction can be executed successfully with no errors
   */
  async isValidTransaction(safeTransaction, options) {
    if (!this.#contractManager.safeContract) {
      throw new Error("Safe is not deployed");
    }
    const transaction = isSafeMultisigTransactionResponse(safeTransaction) ? await this.toSafeTransactionType(safeTransaction) : safeTransaction;
    const signedSafeTransaction = await this.copyTransaction(transaction);
    const txHash = await this.getTransactionHash(signedSafeTransaction);
    const ownersWhoApprovedTx = await this.getOwnersWhoApprovedTx(txHash);
    for (const owner of ownersWhoApprovedTx) {
      signedSafeTransaction.addSignature(generatePreValidatedSignature(owner));
    }
    const signerAddress = await this.#safeProvider.getSignerAddress();
    if (!signerAddress) {
      throw new Error("The protocol-kit requires a signer to use this method");
    }
    const addressIsOwner = await this.isOwner(signerAddress);
    if (addressIsOwner) {
      signedSafeTransaction.addSignature(generatePreValidatedSignature(signerAddress));
    }
    const isTxValid = await this.#contractManager.safeContract.isValidTransaction(
      signedSafeTransaction,
      {
        from: signerAddress,
        ...options
      }
    );
    return isTxValid;
  }
  /**
   * Executes a Safe transaction.
   *
   * @param safeTransaction - The Safe transaction to execute
   * @param options - The Safe transaction execution options. Optional
   * @returns The Safe transaction response
   * @throws "No signer provided"
   * @throws "There are X signatures missing"
   * @throws "Cannot specify gas and gasLimit together in transaction options"
   */
  async executeTransaction(safeTransaction, options) {
    if (!this.#contractManager.safeContract) {
      throw new Error("Safe is not deployed");
    }
    const transaction = isSafeMultisigTransactionResponse(safeTransaction) ? await this.toSafeTransactionType(safeTransaction) : safeTransaction;
    const signedSafeTransaction = await this.#addPreValidatedSignature(transaction);
    await this.#isReadyToExecute(signedSafeTransaction);
    const value = BigInt(signedSafeTransaction.data.value);
    if (value !== 0n) {
      const balance = await this.getBalance();
      if (value > balance) {
        throw new Error("Not enough Ether funds");
      }
    }
    const signerAddress = await this.#safeProvider.getSignerAddress();
    if (this.#onchainIdentifier) {
      const encodedTransaction = await this.getEncodedTransaction(signedSafeTransaction);
      const transaction2 = {
        to: await this.getAddress(),
        value: 0n,
        data: encodedTransaction + this.#onchainIdentifier
      };
      const signer = await this.#safeProvider.getExternalSigner();
      if (!signer) {
        throw new Error("A signer must be set");
      }
      const hash = await signer.sendTransaction({
        ...transaction2,
        account: signer.account,
        ...options
      });
      const provider = this.#safeProvider.getExternalProvider();
      return toTxResult(provider, hash, options);
    }
    const txResponse = await this.#contractManager.safeContract.execTransaction(
      signedSafeTransaction,
      {
        from: signerAddress,
        ...options
      }
    );
    return txResponse;
  }
  /**
   * Adds a PreValidatedSignature to the transaction if the threshold is not reached.
   *
   * @async
   * @param {SafeTransaction} transaction - The transaction to add a signature to.
   * @returns {Promise<SafeTransaction>} A promise that resolves to the signed transaction.
   */
  async #addPreValidatedSignature(transaction) {
    const signedSafeTransaction = await this.copyTransaction(transaction);
    const txHash = await this.getTransactionHash(signedSafeTransaction);
    const ownersWhoApprovedTx = await this.getOwnersWhoApprovedTx(txHash);
    for (const owner of ownersWhoApprovedTx) {
      signedSafeTransaction.addSignature(generatePreValidatedSignature(owner));
    }
    const owners = await this.getOwners();
    const threshold = await this.getThreshold();
    const signerAddress = await this.#safeProvider.getSignerAddress();
    if (threshold > signedSafeTransaction.signatures.size && signerAddress && owners.includes(signerAddress)) {
      signedSafeTransaction.addSignature(generatePreValidatedSignature(signerAddress));
    }
    return signedSafeTransaction;
  }
  /**
   * Checks if the transaction has enough signatures to be executed.
   *
   * @async
   * @param {SafeTransaction} transaction - The Safe transaction to check.
   * @throws Will throw an error if the required number of signatures is not met.
   */
  async #isReadyToExecute(transaction) {
    const threshold = await this.getThreshold();
    if (threshold > transaction.signatures.size) {
      const signaturesMissing = threshold - transaction.signatures.size;
      throw new Error(
        `There ${signaturesMissing > 1 ? "are" : "is"} ${signaturesMissing} signature${signaturesMissing > 1 ? "s" : ""} missing`
      );
    }
  }
  /**
   * Returns the Safe Transaction encoded
   *
   * @async
   * @param {SafeTransaction} safeTransaction - The Safe transaction to be encoded.
   * @returns {Promise<string>} The encoded transaction
   *
   */
  async getEncodedTransaction(safeTransaction) {
    const safeVersion = this.getContractVersion();
    const chainId = await this.getChainId();
    const customContracts = this.#contractManager.contractNetworks?.[chainId.toString()];
    const isL1SafeSingleton = this.#contractManager.isL1SafeSingleton;
    const safeSingletonContract = await getSafeContract({
      safeProvider: this.#safeProvider,
      safeVersion,
      isL1SafeSingleton,
      customContracts
    });
    const encodedTransaction = safeSingletonContract.encode("execTransaction", [
      safeTransaction.data.to,
      safeTransaction.data.value,
      safeTransaction.data.data,
      safeTransaction.data.operation,
      safeTransaction.data.safeTxGas,
      safeTransaction.data.baseGas,
      safeTransaction.data.gasPrice,
      safeTransaction.data.gasToken,
      safeTransaction.data.refundReceiver,
      safeTransaction.encodedSignatures()
    ]);
    return encodedTransaction;
  }
  /**
   * Wraps a Safe transaction into a Safe deployment batch.
   *
   * This function creates a transaction batch of 2 transactions, which includes the
   * deployment of the Safe and the provided Safe transaction.
   *
   * @async
   * @param {SafeTransaction} safeTransaction - The Safe transaction to be wrapped into the deployment batch.
   * @param {TransactionOptions} [transactionOptions] - Optional. Options for the transaction, such as from, gas price, gas limit, etc.
   * @returns {Promise<Transaction>} A promise that resolves to a Transaction object representing the prepared batch of transactions.
   * @throws Will throw an error if the safe is already deployed.
   *
   */
  async wrapSafeTransactionIntoDeploymentBatch(safeTransaction, transactionOptions) {
    const isSafeDeployed = await this.isSafeDeployed();
    if (isSafeDeployed) {
      throw new Error("Safe already deployed");
    }
    const safeDeploymentTransaction = await this.createSafeDeploymentTransaction();
    if (safeDeploymentTransaction.data.endsWith(this.#onchainIdentifier)) {
      safeDeploymentTransaction.data = safeDeploymentTransaction.data.replace(
        this.#onchainIdentifier,
        ""
      );
    }
    const safeDeploymentBatchTransaction = {
      to: safeDeploymentTransaction.to,
      value: safeDeploymentTransaction.value,
      data: safeDeploymentTransaction.data,
      operation: OperationType3.Call
    };
    const safeBatchTransaction = {
      to: await this.getAddress(),
      value: "0",
      data: await this.getEncodedTransaction(safeTransaction),
      operation: OperationType3.Call
    };
    const transactions = [safeDeploymentBatchTransaction, safeBatchTransaction];
    const safeDeploymentBatch = await this.createTransactionBatch(
      transactions,
      transactionOptions,
      !!this.#onchainIdentifier
      // include the on chain identifier
    );
    return safeDeploymentBatch;
  }
  /**
   * Creates a transaction to deploy a Safe Account.
   *
   * @returns {Promise<Transaction>} Returns a promise that resolves to an Ethereum transaction with the fields `to`, `value`, and `data`, which can be used to deploy the Safe Account.
   */
  async createSafeDeploymentTransaction() {
    if (!this.#predictedSafe) {
      throw new Error("Predict Safe should be present to build the Safe deployement transaction");
    }
    const { safeAccountConfig, safeDeploymentConfig = {} } = this.#predictedSafe;
    validateSafeAccountConfig(safeAccountConfig);
    validateSafeDeploymentConfig(safeDeploymentConfig);
    const safeProvider = this.#safeProvider;
    const chainId = await safeProvider.getChainId();
    const safeVersion = safeDeploymentConfig?.safeVersion || DEFAULT_SAFE_VERSION;
    const saltNonce = safeDeploymentConfig?.saltNonce || getChainSpecificDefaultSaltNonce(chainId);
    if (hasSafeFeature("ACCOUNT_ABSTRACTION" /* ACCOUNT_ABSTRACTION */, safeVersion)) {
      const isSafeDeployed = await this.isSafeDeployed();
      if (isSafeDeployed) {
        throw new Error("Safe already deployed");
      }
    }
    const isL1SafeSingleton = this.#contractManager.isL1SafeSingleton;
    const customContracts = this.#contractManager.contractNetworks?.[chainId.toString()];
    const deploymentType = this.#predictedSafe.safeDeploymentConfig?.deploymentType;
    const safeSingletonContract = await getSafeContract({
      safeProvider,
      safeVersion,
      isL1SafeSingleton,
      customContracts,
      deploymentType
    });
    const safeProxyFactoryContract = await getSafeProxyFactoryContract({
      safeProvider,
      safeVersion,
      customContracts,
      deploymentType
    });
    const initializer = await encodeSetupCallData({
      safeProvider,
      safeContract: safeSingletonContract,
      safeAccountConfig,
      customContracts,
      deploymentType
    });
    const safeDeployTransactionData = {
      to: safeProxyFactoryContract.getAddress(),
      value: "0",
      // we use the createProxyWithNonce method to create the Safe in a deterministic address, see: https://github.com/safe-global/safe-contracts/blob/main/contracts/proxies/SafeProxyFactory.sol#L52
      data: safeProxyFactoryContract.encode("createProxyWithNonce", [
        asHex(safeSingletonContract.getAddress()),
        asHex(initializer),
        // call to the setup method to set the threshold & owners of the new Safe
        BigInt(saltNonce)
      ])
    };
    if (this.#onchainIdentifier) {
      safeDeployTransactionData.data += this.#onchainIdentifier;
    }
    return safeDeployTransactionData;
  }
  /**
   * This function creates a batch of the provided Safe transactions using the MultiSend contract.
   * It groups the transactions together into a single transaction which can then be executed atomically.
   *
   * @async
   * @function createTransactionBatch
   * @param {MetaTransactionData[]} transactions - An array of MetaTransactionData objects to be batched together.
   * @param {TransactionOption} [transactionOptions] - Optional TransactionOption object to specify additional options for the transaction batch.
   * @param {boolean} [includeOnchainIdentifier=false] - A flag indicating whether to append the onchain identifier to the data field of the resulting transaction.
   * @returns {Promise<Transaction>} A Promise that resolves with the created transaction batch.
   *
   */
  async createTransactionBatch(transactions, transactionOptions, includeOnchainIdentifier = false) {
    const multiSendCallOnlyContract = this.#contractManager.multiSendCallOnlyContract;
    const batchData = multiSendCallOnlyContract.encode("multiSend", [
      asHex(encodeMultiSendData(transactions))
      // encoded transactions
    ]);
    const transactionBatch = {
      ...transactionOptions,
      // optional transaction options like from, gasLimit, gasPrice...
      to: multiSendCallOnlyContract.getAddress(),
      value: "0",
      data: batchData
    };
    if (includeOnchainIdentifier) {
      transactionBatch.data += this.#onchainIdentifier;
    }
    return transactionBatch;
  }
  /**
   * Get the fallback handler contract
   *
   * @returns The fallback Handler contract
   */
  async #getFallbackHandlerContract() {
    if (!this.#contractManager.safeContract) {
      throw new Error("Safe is not deployed");
    }
    const safeVersion = this.#contractManager.safeContract.safeVersion ?? DEFAULT_SAFE_VERSION;
    const chainId = await this.#safeProvider.getChainId();
    const compatibilityFallbackHandlerContract = await getCompatibilityFallbackHandlerContract({
      safeProvider: this.#safeProvider,
      safeVersion,
      customContracts: this.#contractManager.contractNetworks?.[chainId.toString()]
    });
    return compatibilityFallbackHandlerContract;
  }
  getOnchainIdentifier() {
    return this.#onchainIdentifier;
  }
  static {
    /**
     * This method creates a signer to be used with the init method
     * @param {Credential} credential - The credential to be used to create the signer. Can be generated in the web with navigator.credentials.create
     * @returns {PasskeyArgType} - The signer to be used with the init method
     */
    this.createPasskeySigner = async (credential) => {
      return extractPasskeyData(credential);
    };
  }
};
var Safe_default = Safe;

// src/utils/erc-20/index.ts
import { encodeFunctionData as encodeFunctionData3, parseAbi as parseAbi4 } from "viem";
var ERC20_ABI = [
  "function transfer(address recipient, uint256 amount) returns (bool)",
  "function decimals() view returns (uint8)"
];
async function getERC20Decimals(tokenAddress, safe) {
  const safeProvider = safe.getSafeProvider();
  const data = encodeFunctionData3({
    abi: parseAbi4(ERC20_ABI),
    functionName: "decimals"
  });
  const getTokenDecimalsTransaction = {
    to: tokenAddress,
    from: tokenAddress,
    value: "0",
    data
  };
  const response = await safeProvider.call(getTokenDecimalsTransaction);
  const decimals = Number(response);
  if (Number.isNaN(decimals)) {
    throw new Error("Invalid ERC-20 decimals");
  }
  return decimals;
}
var STANDARD_ERC20_DECIMALS = 18;
async function isGasTokenCompatibleWithHandlePayment(gasToken, safe) {
  const isNativeToken = gasToken === ZERO_ADDRESS;
  if (isNativeToken) {
    return true;
  }
  const gasTokenDecimals = await getERC20Decimals(gasToken, safe);
  const hasTokenStandardERC20Decimals = gasTokenDecimals === STANDARD_ERC20_DECIMALS;
  return hasTokenStandardERC20Decimals;
}
function createERC20TokenTransferTransaction(tokenAddress, toAddress, amount) {
  const data = encodeFunctionData3({
    abi: parseAbi4(ERC20_ABI),
    functionName: "transfer",
    args: [toAddress, amount]
  });
  const transferTransaction = {
    to: tokenAddress,
    value: "0",
    data
  };
  return transferTransaction;
}

// src/index.ts
var src_default = Safe_default;
export {
  contractManager_default as ContractManager,
  CreateCallBaseContract_default as CreateCallBaseContract,
  DEFAULT_SAFE_VERSION,
  SafeMessage_default as EthSafeMessage,
  EthSafeSignature,
  SafeTransaction_default as EthSafeTransaction,
  MultiSendBaseContract_default as MultiSendBaseContract,
  MultiSendCallOnlyBaseContract_default as MultiSendCallOnlyBaseContract,
  PREDETERMINED_SALT_NONCE,
  SafeBaseContract_default as SafeBaseContract,
  SafeProvider_default as SafeProvider,
  SafeProxyFactoryBaseContract_default as SafeProxyFactoryBaseContract,
  SignMessageLibBaseContract_default as SignMessageLibBaseContract,
  buildContractSignature,
  buildSignatureBytes,
  createERC20TokenTransferTransaction,
  createPasskeyClient,
  src_default as default,
  encodeCreateProxyWithNonce,
  encodeMultiSendData,
  encodeSetupCallData,
  estimateSafeDeploymentGas,
  estimateSafeTxGas,
  estimateTxBaseGas,
  estimateTxGas,
  extractPasskeyData,
  generateEIP712Signature,
  generateOnChainIdentifier_default as generateOnChainIdentifier,
  generateSignature,
  generateTypedData,
  getCompatibilityFallbackHandlerContract,
  getCreateCallContract,
  getERC20Decimals,
  getEip712MessageTypes,
  getEip712TxTypes,
  getMultiSendCallOnlyContract,
  getMultiSendContract,
  getPasskeyOwnerAddress_default as getPasskeyOwnerAddress,
  getPredictedSafeAddressInitCode,
  getSafeAddressFromDeploymentTx,
  getSafeContract,
  getSafeProxyFactoryContract,
  getSafeWebAuthnSharedSignerContract,
  getSafeWebAuthnSignerFactoryContract,
  getSignMessageLibContract,
  hashSafeMessage,
  isGasTokenCompatibleWithHandlePayment,
  predictSafeAddress,
  preimageSafeMessageHash,
  preimageSafeTransactionHash,
  standardizeSafeTransactionData,
  validateEip3770Address,
  validateEthereumAddress
};
