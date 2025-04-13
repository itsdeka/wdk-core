'use strict';

var uiCore = require('@layerzerolabs/ui-core');
var bigintBuffer = require('bigint-buffer');
var ton = require('@ton/ton');
var lodash = require('lodash');
var core = require('@ton/core');
var lzTonSdkV2 = require('@layerzerolabs/lz-ton-sdk-v2');
var UlnArtifact = require('@layerzerolabs/lz-ton-sdk-v2/artifacts/Uln.compiled.json');
var EndpointArtifact = require('@layerzerolabs/lz-ton-sdk-v2/artifacts/Endpoint.compiled.json');
var UlnConnectionArtifact = require('@layerzerolabs/lz-ton-sdk-v2/artifacts/UlnConnection.compiled.json');
var ChannelArtifact = require('@layerzerolabs/lz-ton-sdk-v2/artifacts/Channel.compiled.json');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var UlnArtifact__default = /*#__PURE__*/_interopDefault(UlnArtifact);
var EndpointArtifact__default = /*#__PURE__*/_interopDefault(EndpointArtifact);
var UlnConnectionArtifact__default = /*#__PURE__*/_interopDefault(UlnConnectionArtifact);
var ChannelArtifact__default = /*#__PURE__*/_interopDefault(ChannelArtifact);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function isHexString(value, length) {
  if (typeof value !== "string" || !value.match(/^(0x)?[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (length && value.length !== 2 + 2 * length) {
    return false;
  }
  return true;
}
function to32ByteBuffer(value, maxIntermediateBufferSize = 66) {
  if (typeof value === "string") {
    if (!isHexString(value)) {
      throw new Error("only hex string is supported");
    }
    let hex = lodash.trimStart(value, "0x");
    if (hex.length % 2 !== 0) {
      hex = "0" + hex;
    }
    value = bigintBuffer.toBigIntBE(Buffer.from(hex, "hex"));
  }
  if (value instanceof Uint8Array) {
    value = bigintBuffer.toBigIntBE(Buffer.from(value));
  }
  const bf = bigintBuffer.toBufferBE(BigInt(value), maxIntermediateBufferSize);
  return bf.subarray(-32);
}
function bigintToAddress(value) {
  const buf = to32ByteBuffer(value);
  return ton.Address.parse(`0:${buf.toString("hex")}`);
}
var parseTonAddress = (address) => {
  if (address instanceof ton.Address) {
    return address;
  }
  if (typeof address === "bigint" || typeof address === "number") {
    return bigintToAddress(BigInt(address));
  }
  if (address.startsWith("0x")) {
    return bigintToAddress(BigInt(address));
  }
  try {
    return ton.Address.parse(address);
  } catch (e) {
    return bigintToAddress(BigInt(`0x${address}`));
  }
};
var tonAddressToHex = (tonAddress) => {
  parseTonAddress("kQAIO31lsBFFFxz8EaOaPcsorplKMZR1VPROiPY-9IOz2rzO").toRawString();
};
var arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};
var buildTonTransferCell = (opts) => {
  const builder = core.beginCell().storeUint(260734629, 32).storeUint(opts.queryId ?? 69, 64).storeCoins(opts.jettonAmount).storeAddress(opts.toAddress).storeAddress(opts.fromAddress).storeUint(0, 1).storeCoins(opts.fwdAmount);
  if ("comment" in opts) {
    const commentPayload = core.beginCell().storeUint(0, 32).storeStringTail(opts.comment).endCell();
    builder.storeBit(1);
    builder.storeRef(commentPayload);
  } else {
    if (opts.forwardPayload instanceof core.Slice) {
      builder.storeBit(0);
      builder.storeSlice(opts.forwardPayload);
    } else if (opts.forwardPayload instanceof core.Cell) {
      builder.storeBit(1);
      builder.storeRef(opts.forwardPayload);
    } else {
      builder.storeBit(0);
    }
  }
  return builder.endCell();
};
var _addressToNotPaddedHex = (address) => {
  return `0x${parseTonAddress(address).hash.toString("hex")}`;
};
var addressToBigInt = (address) => {
  return BigInt(_addressToNotPaddedHex(address));
};
var bigIntToAddress = (address) => {
  return parseTonAddress("0x" + address.toString(16));
};
var emptyCell = () => {
  return core.beginCell().asCell();
};
var asciiStringToBigint = (target) => {
  return BigInt(`0x${Buffer.from(target).toString("hex")}`);
};
var BaseWrapper = class {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: core.SendMode.PAY_GAS_SEPARATELY,
      body: core.beginCell().endCell()
    });
  }
  async sendRequest(provider, via, request) {
    return provider.internal(via, {
      value: request.value,
      sendMode: request.sendMode ?? void 0,
      body: request.body,
      bounce: request.bounce
    });
  }
  async getDeployed(provider) {
    const state = await provider.getState();
    return state.state.type !== "uninit";
  }
  buildSenderArguments(body, opts) {
    return {
      value: BigInt(opts.value),
      to: this.address,
      bounce: opts.bounce ?? true,
      body,
      init: opts.withInit === true ? this.init : void 0,
      sendMode: opts.sendMode ?? core.SendMode.PAY_GAS_SEPARATELY
    };
  }
  beginMessage(opcode, queryId) {
    const randomQueryId = Math.floor(Math.random() * 1e11);
    return core.beginCell().storeUint(opcode, 32).storeUint(queryId ?? randomQueryId, 64);
  }
};

// src/wrappers/TonContractWrapper.ts
var TonContractWrapper = class extends BaseWrapper {
  static create(address) {
    return new TonContractWrapper(address);
  }
  async getViewFunction(provider, method, args) {
    const ret = await provider.get(method, args);
    return ret.stack;
  }
  async getGetAmountAndFee(provider, totalAmount) {
    const args = [{ type: "int", value: totalAmount }];
    const stack = await this.getViewFunction(provider, "getAmountAndFee", args);
    return [stack.readBigNumber(), stack.readBigNumber()];
  }
  async getLzSendMd(provider, oftSendMd) {
    const args = [
      { type: "cell", cell: oftSendMd },
      { type: "int", value: 2n }
      // Msg type. 2 is SEND_OFT
    ];
    const stack = await this.getViewFunction(provider, "getLzSendMd", args);
    return stack.readCell();
  }
  async getGetAllCredits(provider) {
    const args = [];
    const stack = await this.getViewFunction(provider, "getAllCredits", args);
    return [
      stack.readBigNumber(),
      stack.readBigNumber(),
      stack.readBigNumber(),
      stack.readBigNumber(),
      stack.readBigNumber()
    ];
  }
  async parseSendInfo(provider, cell) {
    const selfSlice = cell.beginParse();
    const dstEid = selfSlice.loadUintBig(32);
    const to = selfSlice.loadUintBig(256);
    const minAmount = selfSlice.loadCoins();
    const nativeFee = selfSlice.loadCoins();
    const zroFee = selfSlice.loadCoins();
    return [dstEid, to, minAmount, nativeFee, zroFee];
  }
  async getNewUsdtOFT(provider, args) {
    const getResult = await provider.get("UsdtOFT::New", [
      { type: "int", value: args.owner },
      { type: "int", value: args.controllerAddress },
      { type: "int", value: args.eid },
      { type: "cell", cell: args.endpointCode },
      { type: "cell", cell: args.channelCode }
    ]);
    return getResult.stack.readCell();
  }
  async getNewOFTSend(provider, args) {
    const getResult = await provider.get("OFTSend::New", [
      { type: "int", value: args.dstEid },
      { type: "int", value: args.to },
      { type: "int", value: args.minAmount },
      { type: "int", value: args.nativeFee },
      { type: "int", value: args.zroFee },
      { type: "cell", cell: args.extraOptions },
      { type: "cell", cell: args.composeMessage }
    ]);
    return getResult.stack.readCell();
  }
  async createExtraOptions(provider, args) {
    const getResult = await provider.get("md::OptionsV1::New", [
      { type: "int", value: args.lzReceiveGas },
      { type: "int", value: args.lzReceiveValue },
      { type: "int", value: args.nativeDropAddress },
      { type: "int", value: args.nativeDropAmount }
    ]);
    return getResult.stack.readCell();
  }
};
function minterConfigToCell(config) {
  return core.beginCell().storeCoins(config.total_supply).storeAddress(config.admin_address).storeAddress(config.next_admin_address).storeRef(config.jetton_wallet_code).storeRef(config.metadata_url).endCell();
}
var Opcodes = {
  mint: 1680571655,
  burn_notification: 2078119902,
  deposit: 601555397,
  withdraw: 23322933
};
var UsdtMinter = class {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new UsdtMinter(address);
  }
  static createFromConfig(config, code, workchain = 0) {
    const data = minterConfigToCell(config);
    const init = { code, data };
    return new UsdtMinter(core.contractAddress(workchain, init), init);
  }
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: core.SendMode.PAY_GAS_SEPARATELY,
      body: core.beginCell().endCell()
    });
  }
  async sendMint(provider, via, opts) {
    await provider.internal(via, {
      value: opts.value,
      sendMode: core.SendMode.PAY_GAS_SEPARATELY,
      body: core.beginCell().storeUint(Opcodes.mint, 32).storeUint(opts.queryID ?? 0, 64).storeAddress(opts.toAddress).storeCoins(opts.tonAmount).storeRef(opts.master_msg).endCell()
    });
  }
  async getJettonData(provider) {
    const { stack } = await provider.get("get_jetton_data", []);
    return [
      stack.readBigNumber(),
      stack.readBoolean(),
      stack.readAddress(),
      stack.readCell(),
      stack.readCell()
    ];
  }
  async getWalletAddress(provider, owner) {
    const tb = new core.TupleBuilder();
    tb.writeAddress(owner);
    const { stack } = await provider.get("get_wallet_address", tb.build());
    return stack.readAddress();
  }
  async getBalance(provider) {
    const state = await provider.getState();
    return state.balance;
  }
  async getNextAdminAddress(provider) {
    const result = await provider.get("get_next_admin_address", []);
    return result.stack.readAddress();
  }
};
function walletConfigToCell(config) {
  return core.beginCell().storeUint(0, 4).storeCoins(0).storeAddress(config.owner_address).storeAddress(config.jetton_master_address).endCell();
}
var _UsdtWallet = class {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new _UsdtWallet(address);
  }
  static createFromConfig(config, code, workchain = 0) {
    const data = walletConfigToCell(config);
    const init = { code, data };
    return new _UsdtWallet(core.contractAddress(workchain, init), init);
  }
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: core.SendMode.PAY_GAS_SEPARATELY,
      body: core.beginCell().endCell()
    });
  }
  async buildTransfer(provider, opts) {
    const builder = core.beginCell().storeUint(_UsdtWallet.OPCODES.TRANSFER, 32).storeUint(opts.queryId ?? 69, 64).storeCoins(opts.jettonAmount).storeAddress(opts.toAddress).storeAddress(opts.fromAddress).storeUint(0, 1).storeCoins(opts.fwdAmount);
    if ("comment" in opts) {
      const commentPayload = core.beginCell().storeUint(0, 32).storeStringTail(opts.comment).endCell();
      builder.storeBit(1);
      builder.storeRef(commentPayload);
    } else {
      if (opts.forwardPayload instanceof core.Slice) {
        builder.storeBit(0);
        builder.storeSlice(opts.forwardPayload);
      } else if (opts.forwardPayload instanceof core.Cell) {
        builder.storeBit(1);
        builder.storeRef(opts.forwardPayload);
      } else {
        builder.storeBit(0);
      }
    }
    return builder.endCell();
  }
  async sendTransfer(provider, via, opts) {
    const body = await this.buildTransfer(provider, {
      ...opts,
      fromAddress: via.address
    });
    await provider.internal(via, {
      value: opts.value,
      sendMode: core.SendMode.PAY_GAS_SEPARATELY,
      body
    });
  }
  async getData(provider) {
    const { stack } = await provider.get("get_wallet_data", []);
    return {
      balance: stack.readBigNumber(),
      owner_address: stack.readAddress(),
      jetton_master_address: stack.readAddress(),
      wallet_code: stack.readCell()
    };
  }
  async getStatus(provider) {
    const result = await provider.get("get_status", []);
    return result.stack.readNumber();
  }
  async getBalance(provider) {
    const state = await provider.getState();
    return state.balance;
  }
  async getUsdtBalance(provider) {
    try {
      const res = await this.getData(provider);
      return res.balance;
    } catch (e) {
      if (e.message === "Trying to run get method on non-active contract") {
        return 0n;
      } else {
        throw e;
      }
    }
  }
};
var UsdtWallet = _UsdtWallet;
__publicField(UsdtWallet, "OPCODES", {
  TRANSFER: 260734629
});

// src/wrappers/TonBaseMinter.ts
var TonBaseMinter = class {
  constructor(address) {
    this.address = address;
  }
};

// src/getJettonAddressFromWallet.ts
var getJettonAddressFromWallet = (contract, walletAddress) => {
  return contract.getWalletAddress(walletAddress).then((jettonWalletAddress) => {
    return jettonWalletAddress;
  });
};

// src/providers/BalanceProvider__ton.ts
var BalanceProvider__ton = class {
  constructor(client, minterAddress) {
    this.client = client;
    this.minterAddress = minterAddress;
  }
  async getBalance(token, address) {
    const tonWalletAddress = parseTonAddress(address);
    if (token.symbol === "TON") {
      return uiCore.CurrencyAmount.fromRawAmount(
        uiCore.getNativeCurrency(uiCore.ChainType.TON),
        await this.client.getBalance(parseTonAddress(address))
      );
    }
    return getJettonAddressFromWallet(this.getMinterContract(token), tonWalletAddress).then(
      (jettonWalletAddress) => {
        const provider = this.client.provider(jettonWalletAddress);
        const walletContract = provider.open(UsdtWallet.createFromAddress(jettonWalletAddress));
        return walletContract.getUsdtBalance().then((balance) => {
          return uiCore.CurrencyAmount.fromRawAmount(token, balance);
        });
      }
    );
  }
  getMinterContract = (token) => {
    if (token.symbol === "USDT0" || token.symbol === "USDT") {
      const tonMinterAddress = parseTonAddress(this.minterAddress);
      return this.client.open(UsdtMinter.createFromAddress(tonMinterAddress));
    }
    throw new Error("Unsupported token");
  };
  supports(token) {
    return uiCore.tryGetNetwork(token.chainKey)?.chainType === uiCore.ChainType.TON;
  }
};
var waitForTransaction = async (options, client, checkEqual) => {
  const { refetchInterval = 3e3, refetchLimit, address } = options;
  return new Promise((resolve) => {
    let refetches = 0;
    const walletAddress = address;
    const interval = setInterval(async () => {
      refetches += 1;
      const state = await client.getContractState(walletAddress);
      if (!state || !state.lastTransaction) {
        clearInterval(interval);
        resolve(null);
        return;
      }
      const { lt: lastLt, hash: lastHash } = state.lastTransaction;
      const lastTx = await client.getTransaction(walletAddress, lastLt, lastHash);
      if (lastTx && lastTx.inMessage) {
        if (checkEqual(lastTx)) {
          clearInterval(interval);
          resolve(lastTx);
        }
      }
      if (refetchLimit && refetches >= refetchLimit) {
        clearInterval(interval);
        resolve(null);
      }
    }, refetchInterval);
  });
};
function createTransaction(populatedTransaction, options) {
  const { client } = options;
  async function unwrap() {
    return populatedTransaction;
  }
  async function signAndSubmitTransaction(signer) {
    const responseBoc = await signer.sendTransaction(populatedTransaction);
    const hash = core.Cell.fromBase64(responseBoc).hash().toString("hex");
    const transaction = await waitForTransaction(
      {
        address: signer.getAddress()
      },
      client,
      (lastTx) => {
        if (lastTx.inMessage) {
          const msgCell = core.beginCell().store(ton.storeMessage(lastTx.inMessage)).endCell();
          const inMsgHash = msgCell.hash().toString("hex");
          return inMsgHash === hash;
        }
        return false;
      }
    );
    if (!transaction) {
      throw new Error("Unable to confirm transaction is on chain");
    }
    return {
      txHash: "0x" + transaction.hash().toString("hex"),
      async wait() {
        await waitForTransaction(
          {
            address: signer.getAddress()
          },
          client,
          (lastTx) => {
            if (lastTx.inMessage) {
              const msgCell = core.beginCell().store(ton.storeMessage(lastTx.inMessage)).endCell();
              try {
                const subtopic = lzTonSdkV2.bigintToAsciiString(lzTonSdkV2.clGetUint(msgCell.refs[0], 0, 256));
                return subtopic === "Channel::event::PACKET_SENT";
              } catch (error) {
                return false;
              }
            }
            return false;
          }
        );
        return {
          txHash: "0x" + transaction.hash().toString("hex")
        };
      }
    };
  }
  const tx = {
    signAndSubmitTransaction,
    estimateGas() {
      throw new Error("Not implemented");
    },
    estimateNative() {
      throw new Error("Not implemented");
    },
    unwrap
  };
  return tx;
}
var TON_EID = 30343;
var ulnCode = core.Cell.fromHex(UlnArtifact__default.default.hex);
var endpointCode = core.Cell.fromHex(EndpointArtifact__default.default.hex);
var ulnConnectionCode = core.Cell.fromHex(UlnConnectionArtifact__default.default.hex);
var channelCode = core.Cell.fromHex(ChannelArtifact__default.default.hex);
function computeContractAddress(code, storage) {
  return bigintBuffer.toBigIntBE(core.beginCell().storeUint(6, 5).storeRef(code).storeRef(storage).endCell().hash());
}
var initBaseStorage = (owner) => {
  return lzTonSdkV2.baseBuildClass("BaseStorage", {
    owner,
    authenticated: false,
    initialized: false,
    initialStorage: lzTonSdkV2.emptyCell()
  });
};
var getUlnReceiveConfigDefault = () => {
  return lzTonSdkV2.buildClass("UlnReceiveConfig", {
    minCommitPacketGasNull: true,
    minCommitPacketGas: 0,
    confirmationsNull: true,
    confirmations: 0,
    requiredDVNsNull: true,
    requiredDVNs: lzTonSdkV2.emptyCell(),
    optionalDVNsNull: true,
    optionalDVNs: lzTonSdkV2.emptyCell(),
    optionalDVNThreshold: 0
  });
};
var getUlnSendConfigDefault = () => {
  return lzTonSdkV2.buildClass("UlnSendConfig", {
    workerQuoteGasLimit: 0,
    maxMessageBytes: 0,
    executorNull: true,
    executor: 0n,
    requiredDVNsNull: true,
    requiredDVNs: lzTonSdkV2.emptyCell(),
    optionalDVNsNull: true,
    optionalDVNs: lzTonSdkV2.emptyCell(),
    confirmationsNull: true,
    confirmations: 0
  });
};
function computeTonUlnAddress(owner, dstEid) {
  return computeContractAddress(
    ulnCode,
    lzTonSdkV2.buildClass("Uln", {
      baseStorage: initBaseStorage(owner),
      eid: TON_EID,
      dstEid,
      defaultUlnReceiveConfig: getUlnReceiveConfigDefault(),
      defaultUlnSendConfig: getUlnSendConfigDefault(),
      connectionCode: lzTonSdkV2.emptyCell(),
      workerFeelibInfos: lzTonSdkV2.emptyMap(),
      treasuryFeeBps: 0,
      remainingWorkerSlots: 0,
      remainingAdminWorkerSlots: 0
    })
  );
}
function computeTonEndpointAddress(owner, dstEid) {
  return computeContractAddress(
    endpointCode,
    lzTonSdkV2.buildClass("Endpoint", {
      baseStorage: initBaseStorage(owner),
      eid: TON_EID,
      dstEid,
      msglibs: lzTonSdkV2.emptyMap(),
      numMsglibs: 0,
      channelCode: lzTonSdkV2.emptyCell(),
      channelStorageInit: lzTonSdkV2.nullObject(),
      defaultSendLibInfo: lzTonSdkV2.nullObject(),
      defaultReceiveLibInfo: lzTonSdkV2.nullObject(),
      defaultTimeoutReceiveLibInfo: lzTonSdkV2.nullObject(),
      defaultSendMsglibManager: 0n,
      defaultExpiry: 0
    })
  );
}
function computeTonUlnConnectionAddress(owner, dstEid, dstOApp, ulnManagerAddress, ulnAddress) {
  return computeContractAddress(
    ulnConnectionCode,
    lzTonSdkV2.buildClass("UlnConnection", {
      baseStorage: initBaseStorage(ulnManagerAddress),
      path: {
        srcEid: TON_EID,
        dstEid,
        srcOApp: owner,
        dstOApp
      },
      endpointAddress: 0n,
      channelAddress: 0n,
      ulnAddress,
      UlnSendConfigOApp: getUlnSendConfigDefault(),
      UlnReceiveConfigOApp: getUlnReceiveConfigDefault(),
      hashLookups: lzTonSdkV2.emptyMap(),
      firstUnexecutedNonce: 1,
      commitPOOO: lzTonSdkV2.emptyCell()
    })
  );
}
function computeTonChannelAddress(owner, dstEid, dstOApp, controllerAddress, endpointAddress) {
  return computeContractAddress(
    channelCode,
    lzTonSdkV2.buildClass("Channel", {
      baseStorage: initBaseStorage(controllerAddress),
      path: {
        srcEid: TON_EID,
        dstEid,
        srcOApp: owner,
        dstOApp
      },
      endpointAddress,
      epConfigOApp: {
        isNull: true,
        sendMsglib: 0n,
        sendMsglibConnection: 0n,
        sendMsglibManager: 0n,
        receiveMsglib: 0n,
        receiveMsglibConnection: 0n,
        timeoutReceiveMsglib: 0n,
        timeoutReceiveMsglibConnection: 0n,
        timeoutReceiveMsglibExpiry: 0
      },
      outboundNonce: 0,
      sendRequestQueue: lzTonSdkV2.emptyCell(),
      lastSendRequestId: 0,
      commitPOOO: lzTonSdkV2.emptyPOOO(),
      executePOOO: lzTonSdkV2.emptyPOOO(),
      executionQueue: lzTonSdkV2.emptyCell(),
      zroBalance: 0
    })
  );
}
var STAGE_URLS = {
  [uiCore.Stage.SANDBOX]: "https://testnet.toncenter.com/api/v3",
  [uiCore.Stage.TESTNET]: "https://testnet.toncenter.com/api/v3",
  [uiCore.Stage.MAINNET]: "https://ton-mainnet.core.chainstack.com/8d84e91390521b3e86defd93cb74f934/api/v3"
};
var TransactionTrace = class {
  constructor(txHash, apiKey, stage) {
    this.txHash = txHash;
    this.apiKey = apiKey;
    this.stage = stage;
  }
  loading = false;
  data;
  error;
  async waitForComplete(timeoutInMs) {
    while (!this.isCompleted) {
      await this.update();
    }
  }
  async update() {
    if (this.isCompleted) {
      return;
    }
    this.loading = true;
    const tonAddress = parseTonAddress(this.txHash);
    return fetch(
      `${STAGE_URLS[this.stage]}/events?tx_hash=${lodash.trimStart(tonAddress.toRawString(), "0:")}`
    ).then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        this.data = data.events[0];
      }
    }).catch((error) => {
      console.log({ error });
    }).finally(() => this.loading = false);
  }
  get isCompleted() {
    return !!this.error || this.data?.trace_info.trace_state === "complete";
  }
  get successful() {
    let foundEmitEvent = false;
    Object.values(this.data?.transactions ?? {}).forEach((transaction) => {
      if (transaction.description.compute_ph.skipped && transaction.description.compute_ph.reason === "no_gas") {
        const cell = core.Cell.fromBase64(transaction.in_msg.message_content.body);
        const subtopic = lzTonSdkV2.bigintToAsciiString(lzTonSdkV2.clGetUint(cell.refs[0], 0, 256));
        if (subtopic === "Channel::event::PACKET_SENT") {
          foundEmitEvent = true;
        }
      }
    });
    return foundEmitEvent;
  }
};

exports.BalanceProvider__ton = BalanceProvider__ton;
exports.Opcodes = Opcodes;
exports.TonBaseMinter = TonBaseMinter;
exports.TonContractWrapper = TonContractWrapper;
exports.TransactionTrace = TransactionTrace;
exports.UsdtMinter = UsdtMinter;
exports.UsdtWallet = UsdtWallet;
exports.addressToBigInt = addressToBigInt;
exports.arrayBufferToBase64 = arrayBufferToBase64;
exports.asciiStringToBigint = asciiStringToBigint;
exports.bigIntToAddress = bigIntToAddress;
exports.bigintToAddress = bigintToAddress;
exports.buildTonTransferCell = buildTonTransferCell;
exports.computeContractAddress = computeContractAddress;
exports.computeTonChannelAddress = computeTonChannelAddress;
exports.computeTonEndpointAddress = computeTonEndpointAddress;
exports.computeTonUlnAddress = computeTonUlnAddress;
exports.computeTonUlnConnectionAddress = computeTonUlnConnectionAddress;
exports.createTransaction = createTransaction;
exports.emptyCell = emptyCell;
exports.getJettonAddressFromWallet = getJettonAddressFromWallet;
exports.getUlnReceiveConfigDefault = getUlnReceiveConfigDefault;
exports.getUlnSendConfigDefault = getUlnSendConfigDefault;
exports.initBaseStorage = initBaseStorage;
exports.minterConfigToCell = minterConfigToCell;
exports.parseTonAddress = parseTonAddress;
exports.tonAddressToHex = tonAddressToHex;
exports.walletConfigToCell = walletConfigToCell;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map