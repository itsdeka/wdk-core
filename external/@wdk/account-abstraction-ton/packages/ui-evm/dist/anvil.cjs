'use strict';

var chunkBKHBQRLI_cjs = require('./chunk-BKHBQRLI.cjs');
require('./chunk-DXBKMGUM.cjs');
var providers = require('@ethersproject/providers');
var ethers = require('ethers');
var uiCore = require('@layerzerolabs/ui-core');

// src/abi/ERC20.json
var ERC20_default = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
];
var { Interface, solidityKeccak256, getAddress, hexZeroPad, hexlify } = ethers.utils;
var balanceOfIfc = new Interface(["function balanceOf(address) external view returns (uint256)"]);
var getBalanceOfSlot = (type, slot, recipient) => {
  if (type === "vyper" /* VYPER */)
    return solidityKeccak256(
      ["uint256", "uint256"],
      [slot, recipient]
      // slot, key (vyper)
    );
  return solidityKeccak256(
    ["uint256", "uint256"],
    [recipient, slot]
    // key, slot (solidity)
  );
};
var defaultCache = /* @__PURE__ */ new Map();
var setErc20Balance = async ({
  token: erc20,
  recipient,
  amount
}, provider, {
  maxSlot = 256,
  cache = defaultCache,
  log = false,
  // methods
  getStorageAt = "eth_getStorageAt",
  setStorageAt = "anvil_setStorageAt"
  // or hardhat_setStorageAt
} = {}) => {
  const logger = log ? console : void 0;
  const [erc20Address, recipientAddress] = await Promise.all([
    getAddress(erc20),
    getAddress(recipient)
  ]);
  const cacheKey = `${erc20Address}`;
  const hexAmount = hexZeroPad(hexlify(amount), 32);
  let dealSlot = { type: "solidity" /* SOLIDITY */, slot: 0 };
  const balanceOfCall = [
    {
      to: erc20Address,
      data: balanceOfIfc.encodeFunctionData("balanceOf", [recipientAddress])
    }
  ];
  const trySlot = async () => {
    logger?.log(`Trying slot ${dealSlot.slot} with type ${dealSlot.type} for ${erc20Address} ...`);
    const balanceOfSlot = getBalanceOfSlot(dealSlot.type, dealSlot.slot, recipientAddress);
    const storageBefore = await provider.send(getStorageAt, [
      erc20Address,
      balanceOfSlot,
      "latest"
    ]);
    await provider.send(setStorageAt, [erc20Address, balanceOfSlot, hexAmount]);
    const balance = await provider.send("eth_call", balanceOfCall);
    if (balance === hexAmount) {
      return true;
    }
    await provider.send(setStorageAt, [erc20Address, balanceOfSlot, storageBefore]);
    return false;
  };
  const getNextDealSlot = () => {
    const { type, slot } = dealSlot;
    return { type, slot: slot + 1 };
  };
  if (cache.has(cacheKey)) {
    const slotNumber = Number(cache.get(cacheKey));
    if (!isNaN(slotNumber)) {
      dealSlot = { type: "solidity" /* SOLIDITY */, slot: slotNumber };
      const successCacheSolidity = await trySlot();
      if (successCacheSolidity)
        return dealSlot;
      dealSlot = { type: "vyper" /* VYPER */, slot: slotNumber };
      const successCacheVyper = await trySlot();
      if (successCacheVyper)
        return dealSlot;
    } else {
      logger?.log(`Deleting invalid cache value for ${cacheKey}`);
      cache.delete(cacheKey);
    }
  }
  dealSlot = { type: "solidity" /* SOLIDITY */, slot: 0 };
  let success = await trySlot();
  while (!success && dealSlot.slot <= maxSlot) {
    dealSlot = getNextDealSlot();
    success = await trySlot();
  }
  if (!success) {
    logger?.log("Solidity layout failed, checking with Vyper...");
    dealSlot.type = "vyper" /* VYPER */;
    dealSlot.slot = 0;
    success = await trySlot();
    while (!success && dealSlot.slot <= maxSlot) {
      dealSlot = getNextDealSlot();
      success = await trySlot();
    }
  }
  if (success) {
    cache.set(cacheKey, dealSlot.slot);
  }
  if (!success)
    throw Error(`Could not brute-force storage slot for ERC20 at: ${erc20Address}`);
  return dealSlot;
};

// src/anvil.ts
var AnvilProvider = class extends providers.JsonRpcProvider {
  constructor(fork) {
    super(fork.forkUrl);
    this.fork = fork;
  }
  _started = false;
  async startFork() {
    await this.fork.start();
  }
  async stopFork() {
    await this.fork.stop();
  }
  addBalance(address, amount) {
    return this.getBalance(address, "latest").then((balance) => {
      const balanceBi = balance.toBigInt();
      const amountBi = BigInt(amount);
      return this.setBalance(address, balanceBi + amountBi);
    });
  }
  setBalance(address, amount) {
    return this.send("anvil_setBalance", [
      address,
      ethers.utils.hexValue(ethers.BigNumber.from(amount).toHexString())
    ]);
  }
  getErc20Balance(contract, wallet) {
    const erc20 = new ethers.ethers.Contract(contract, ERC20_default, this);
    return erc20.balanceOf(wallet);
  }
  async setErc20Balance(token, wallet, value) {
    await setErc20Balance({ token, recipient: wallet, amount: value }, this);
  }
};
var AnvilFork = class {
  constructor(anvil, anvilSdk) {
    this.anvil = anvil;
  }
  async start() {
    const status = this.anvil.status;
    if (status === "listening")
      return;
    if (status === "starting")
      return;
    await this.anvil.start();
    await uiCore.waitFor(() => isAnvilReady(getAnvilUrl(this.anvil)));
  }
  async stop() {
    await this.anvil.stop();
  }
  get forkUrl() {
    return getAnvilUrl(this.anvil);
  }
};
var AnvilSdk = class {
  constructor(options) {
    this.options = options;
    if (this.options.log)
      this.logger = console;
  }
  logger = void 0;
  getAnvilOptions(chainKey) {
    const config = this.options.chains[chainKey];
    uiCore.assert(config, `No Anvil chain config found for chainKey: ${chainKey}`);
    return config;
  }
  async createFork(input) {
    this.logger?.log(`Creating Anvil fork for chainKey: ${input.chainKey}`);
    const anvilOptions = this.getAnvilOptions(input.chainKey);
    const { default: getPort } = await import('get-port');
    const { createAnvil } = await import('@viem/anvil');
    const port = await (anvilOptions.port ?? getPort());
    const anvil = createAnvil({
      ...anvilOptions,
      port
    });
    return new AnvilFork(anvil);
  }
};
var createAnvilProviderFactory = (anvilSdk) => {
  const providers = /* @__PURE__ */ new Map();
  return (chainKey) => {
    const existingProvider = providers.get(chainKey);
    if (existingProvider)
      return existingProvider;
    const createdProvider = new chunkBKHBQRLI_cjs.TestingProxyProvider(createAnvilProvider(chainKey));
    providers.set(chainKey, createdProvider);
    return createdProvider;
  };
  async function createAnvilProvider(chainKey) {
    const fork = await anvilSdk.createFork({ chainKey });
    const anvilProvider = new AnvilProvider(fork);
    return anvilProvider;
  }
};
function getAnvilUrl(anvil) {
  return `http://${anvil.host}:${anvil.port}`;
}
async function isAnvilReady(anvilUrl) {
  const provider = new providers.JsonRpcProvider(anvilUrl);
  return provider.getBlock("latest").then(() => true);
}

exports.AnvilFork = AnvilFork;
exports.AnvilProvider = AnvilProvider;
exports.AnvilSdk = AnvilSdk;
exports.createAnvilProviderFactory = createAnvilProviderFactory;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=anvil.cjs.map