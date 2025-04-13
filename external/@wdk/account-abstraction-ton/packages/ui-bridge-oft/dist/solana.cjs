'use strict';

var chunkCUSC3AWA_cjs = require('./chunk-CUSC3AWA.cjs');
require('./chunk-FI6Q4OWN.cjs');
var bytes = require('@ethersproject/bytes');
var lzSolanaSdkV2 = require('@layerzerolabs/lz-solana-sdk-v2');
var v1 = require('@layerzerolabs/ui-bridge-sdk/v1');
var uiCore = require('@layerzerolabs/ui-core');
var uiEvm = require('@layerzerolabs/ui-evm');
var uiSolana = require('@layerzerolabs/ui-solana');
var splToken = require('@solana/spl-token');
var web3_js = require('@solana/web3.js');
var moize = require('moize');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var moize__default = /*#__PURE__*/_interopDefault(moize);

var OftBridgeV3__solana = class {
  constructor(connection, config, {
    cacheTime = 0,
    verbose = false
  } = {}) {
    this.connection = connection;
    this.config = config;
    this.validateConfig(config);
    if (verbose) {
      this.logger = console;
    }
    if (cacheTime > 0) {
      const options = {
        isDeepEqual: true,
        isPromise: true,
        maxSize: 1e3,
        maxAge: cacheTime
      };
      this.quoteOft = moize__default.default(this.quoteOft.bind(this), options);
      this.getMessageFee = moize__default.default(this.getMessageFee.bind(this), options);
      this.getPeerInfo = moize__default.default(this.getPeerInfo.bind(this), options);
      this.getQuoteAccounts = moize__default.default(this.getQuoteAccounts.bind(this), options);
      this.getSendAccounts = moize__default.default(this.getSendAccounts.bind(this), options);
    }
  }
  sendHelper = new lzSolanaSdkV2.SendHelper();
  derivers = {};
  logger = void 0;
  getConnection(chainKey) {
    return this.connection;
  }
  getTokenProgramId(chainKey) {
    return splToken.TOKEN_PROGRAM_ID;
  }
  getOftProgramId(chainKey) {
    const deployment = this.getDeployment(chainKey);
    uiCore.assert(deployment.oft?.programId, "programId is required");
    return new web3_js.PublicKey(deployment.oft.programId);
  }
  getDeriver(chainKey) {
    if (!this.derivers[chainKey]) {
      const oftProgramId = this.getOftProgramId(chainKey);
      const deriver = new lzSolanaSdkV2.OftPDADeriver(oftProgramId);
      this.derivers[chainKey] = deriver;
    }
    return this.derivers[chainKey];
  }
  getOftInstance(chainKey) {
    const deriver = this.getDeriver(chainKey);
    const deployment = this.getDeployment(chainKey);
    uiCore.assert(uiCore.hasAddress(deployment.token), "Token address is required");
    const tokenMint = new web3_js.PublicKey(deployment.token.address);
    const tokenEscrow = deployment.tokenEscrow ? new web3_js.PublicKey(deployment.tokenEscrow.address) : void 0;
    return deriver.oftConfig(tokenEscrow ?? tokenMint)[0];
  }
  validateConfig(config) {
    uiCore.assert(config.version === 3, "OftBridgeConfig version 3 is required");
  }
  supportsClaim(token) {
    return this.supportsRegister(token);
  }
  supportsRegister(token) {
    const { chainKey } = token;
    if (!uiCore.isSolanaChainKey(chainKey))
      return false;
    return Boolean(this.tryGetDeployment(token.chainKey)?.token.equals(token));
  }
  supportsTransfer(srcToken, dstToken) {
    return Boolean(
      uiCore.isSolanaChainKey(srcToken.chainKey) && this.tryGetDeployment(srcToken.chainKey)?.token.equals(srcToken) && this.tryGetDeployment(dstToken.chainKey)?.token.equals(dstToken)
    );
  }
  async getQuoteAccounts(srcChainKey, srcAddress, dstEid) {
    const connection = this.getConnection(srcChainKey);
    const oftInstance = this.getOftInstance(srcChainKey);
    const peer = this.getPeer(srcChainKey, dstEid);
    const payer = new web3_js.PublicKey(srcAddress);
    const peerInfo = await this.getPeerInfo(connection, peer);
    const remainingAccounts = await this.sendHelper.getQuoteAccounts(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connection,
      payer,
      oftInstance,
      dstEid,
      bytes.hexlify(peerInfo.address)
    );
    return remainingAccounts;
  }
  async getSendAccounts(srcChainKey, srcAddress, dstEid) {
    const connection = this.getConnection(srcChainKey);
    const payer = new web3_js.PublicKey(srcAddress);
    const oftInstance = this.getOftInstance(srcChainKey);
    const peer = this.getPeer(srcChainKey, dstEid);
    const peerInfo = await this.getPeerInfo(connection, peer);
    const remainingAccounts = await this.sendHelper.getSendAccounts(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connection,
      payer,
      oftInstance,
      dstEid,
      bytes.hexlify(peerInfo.address)
    );
    return remainingAccounts;
  }
  async getMessageFee(input) {
    this.logger?.log("getMessageFee", input);
    if (!input.srcAddress)
      throw new Error("srcAddress is required");
    if (!uiCore.isToken(input.srcToken))
      throw new Error("srcToken is required");
    if (!input.srcAmount)
      throw new Error("srcAmount is required");
    if (!input.dstAmountMin)
      throw new Error("dstAmountMin is required");
    if (!input.dstAddress)
      throw new Error("dstAddress is required");
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const deployment = this.getDeployment(srcChainKey);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const payer = new web3_js.PublicKey(input.srcAddress);
    const tokenMint = new web3_js.PublicKey(input.srcToken.address);
    const amountLd = input.srcAmount.toBigInt();
    const minAmountLd = uiCore.castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken).toBigInt();
    const to = uiEvm.addressToBytes32(input.dstAddress);
    const tokenEscrow = deployment.tokenEscrow ? new web3_js.PublicKey(deployment.tokenEscrow.address) : void 0;
    const composeMsg = void 0;
    const { adapterParams } = input;
    const payInLzToken = false;
    const peer = this.getPeer(srcChainKey, dstEid);
    const connection = this.getConnection(srcChainKey);
    const tokenProgramId = this.getTokenProgramId(srcChainKey);
    const oftProgramId = this.getOftProgramId(srcChainKey);
    const [options, peerInfo, remainingAccounts] = await Promise.all([
      this.createOptions({ adapterParams, dstChainKey }),
      this.getPeerInfo(connection, peer),
      this.getQuoteAccounts(srcChainKey, input.srcAddress, dstEid)
    ]);
    const quote = await lzSolanaSdkV2.OftTools.quoteWithUln(
      // Getting error saying that Connection isn't assignable to Connection from the same package
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connection,
      payer,
      tokenMint,
      dstEid,
      amountLd,
      minAmountLd,
      options.toBytes(),
      Array.from(to),
      payInLzToken,
      tokenEscrow,
      composeMsg,
      peerInfo.address,
      remainingAccounts,
      tokenProgramId,
      oftProgramId
    );
    return uiCore.MessageFee.from(srcChainKey, { nativeFee: quote.nativeFee, zroFee: quote.lzTokenFee });
  }
  async createOptions({
    adapterParams,
    dstChainKey
  }) {
    return chunkCUSC3AWA_cjs.createOptions({ adapterParams, dstChainKey }, this.config);
  }
  async getOutput(input) {
    uiCore.assert(input.srcAddress, "srcAddress is required");
    uiCore.assert(input.dstAddress, "dstAddress is required");
    uiCore.assert(input.srcAmount, "srcAmount is required");
    uiCore.assert(input.dstAmountMin, "dstAmountMin is required");
    uiCore.assert(input.adapterParams, "adapterParams is required");
    const srcToken = input.srcAmount.token;
    const dstToken = input.dstToken;
    const quote = await this.quoteOft({
      srcAddress: input.srcAddress,
      dstAddress: input.dstAddress,
      srcAmount: input.srcAmount,
      dstAmountMin: input.dstAmountMin,
      adapterParams: input.adapterParams
    });
    const dstAmount = uiCore.castCurrencyAmountUnsafe(quote.oftReceipt.amountReceivedLd, dstToken);
    const bridgeFeeBigInt = quote.oftFeeDetails.reduce(
      (acc, value) => acc + value.feeAmountLd.toBigInt(),
      0n
    );
    const bridgeFee = uiCore.CurrencyAmount.fromBigInt(srcToken, bridgeFeeBigInt);
    return {
      dstAmount,
      fee: {
        bridgeFee
      }
    };
  }
  getDuration(input) {
    throw new Error("Method not implemented.");
  }
  async getLimit(input) {
    uiCore.assert(input.srcAddress, "srcAddress is required");
    uiCore.assert(input.dstAddress, "dstAddress is required");
    uiCore.assert(input.srcAmount, "srcAmount is required");
    uiCore.assert(input.dstAmountMin, "dstAmountMin is required");
    uiCore.assert(input.adapterParams, "adapterParams is required");
    const quote = await this.quoteOft({
      srcAddress: input.srcAddress,
      dstAddress: input.dstAddress,
      srcAmount: input.srcAmount,
      dstAmountMin: input.dstAmountMin,
      adapterParams: input.adapterParams
    });
    return quote.oftLimits.maxAmountLd;
  }
  async quoteOft(input) {
    this.logger?.log("quoteOft", input);
    const srcToken = input.srcAmount.token;
    const dstToken = input.dstAmountMin.token;
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    const srcAddress = input.srcAddress;
    const dstAddress = input.dstAddress;
    const deployment = this.getDeployment(srcChainKey);
    uiCore.assert(uiCore.isToken(deployment.token), "Token address is required");
    const payer = new web3_js.PublicKey(srcAddress);
    const tokenMint = new web3_js.PublicKey(deployment.token.address);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const amountLd = input.srcAmount.toBigInt();
    const minAmountLd = BigInt(0);
    const to = uiEvm.addressToBytes32(dstAddress);
    const tokenEscrow = deployment.tokenEscrow ? new web3_js.PublicKey(deployment.tokenEscrow.address) : void 0;
    const connection = this.getConnection(srcChainKey);
    const adapterParams = uiCore.AdapterParams.forV1(0);
    const options = await this.createOptions({ adapterParams, dstChainKey });
    const payInLzToken = false;
    const composeMsg = void 0;
    const tokenProgramId = this.getTokenProgramId(srcChainKey);
    const oftProgramId = this.getOftProgramId(srcChainKey);
    const { oftLimits, oftReceipt, oftFeeDetails } = await lzSolanaSdkV2.OftTools.quoteOft(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connection,
      payer,
      tokenMint,
      dstEid,
      amountLd,
      minAmountLd,
      options.toBytes(),
      Array.from(to),
      payInLzToken,
      tokenEscrow,
      composeMsg,
      tokenProgramId,
      oftProgramId
    );
    const ld = (amount) => uiCore.CurrencyAmount.fromBigInt(srcToken, BigInt(amount));
    return {
      oftLimits: {
        minAmountLd: ld(oftLimits.minAmountLd.toString()),
        maxAmountLd: ld(oftLimits.maxAmountLd.toString())
      },
      oftReceipt: {
        amountReceivedLd: ld(oftReceipt.amountReceivedLd.toString()),
        amountSentLd: ld(oftReceipt.amountSentLd.toString())
      },
      oftFeeDetails: oftFeeDetails.map((value) => ({
        description: value.description,
        feeAmountLd: ld(value.feeAmountLd.toString())
      }))
    };
  }
  async getExtraGas(input) {
    return 0;
  }
  async getAllowance({ token }) {
    return uiCore.CurrencyAmount.fromRawAmount(token, uiCore.MaxUint256);
  }
  async getOptions(input) {
    const taxiOption = {
      mode: "taxi"
    };
    return { options: [taxiOption] };
  }
  async getUnclaimed({ token }) {
    return uiCore.CurrencyAmount.fromRawAmount(token, 0);
  }
  async isRegistered(input) {
    return true;
  }
  async transfer(input) {
    v1.validateInput(input);
    const payer = new web3_js.PublicKey(input.srcAddress);
    const { srcChainKey } = input;
    const connection = this.getConnection(srcChainKey);
    const transactionInstruction = await this.getTransactionInstruction(input);
    const computeUnitsLimit = await this.getComputeUnitsLimit(
      connection,
      transactionInstruction,
      input
    );
    const computeUnitsBudgetInstruction = web3_js.ComputeBudgetProgram.setComputeUnitLimit({
      units: computeUnitsLimit
    });
    const versionedTransaction = await buildVersionedTransaction(connection, payer, [
      computeUnitsBudgetInstruction,
      transactionInstruction
    ]);
    return uiSolana.createTransaction(versionedTransaction, { connection });
  }
  claim(input) {
    throw new Error("Method not implemented.");
  }
  register(register) {
    throw new Error("Method not implemented.");
  }
  approve(input) {
    throw new Error("Method not implemented.");
  }
  async getTransactionInstruction(input) {
    const deployment = this.getDeployment(input.srcChainKey);
    uiCore.assert(uiCore.isToken(deployment.token), "Token address is required");
    const payer = new web3_js.PublicKey(input.srcAddress);
    const tokenMint = new web3_js.PublicKey(deployment.token.address);
    const tokenSource = await splToken.getAssociatedTokenAddress(tokenMint, payer);
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const amountLd = input.srcAmount.toBigInt();
    const minAmountLd = uiCore.castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken).toBigInt();
    const to = uiEvm.addressToBytes32(input.dstAddress);
    const nativeFee = input.fee.nativeFee.toBigInt();
    const lzTokenFee = input.fee.zroFee.toBigInt();
    const tokenEscrow = deployment.tokenEscrow ? new web3_js.PublicKey(deployment.tokenEscrow.address) : void 0;
    const composeMsg = void 0;
    const { adapterParams } = input;
    const options = await this.createOptions({ adapterParams, dstChainKey });
    const connection = this.getConnection(srcChainKey);
    const peer = this.getPeer(srcChainKey, dstEid);
    const peerInfo = await this.getPeerInfo(connection, peer);
    const remainingAccounts = await this.getSendAccounts(srcChainKey, input.srcAddress, dstEid);
    const tokenProgramId = this.getTokenProgramId(srcChainKey);
    const oftProgramId = this.getOftProgramId(srcChainKey);
    const transactionInstruction = await lzSolanaSdkV2.OftTools.sendWithUln(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connection,
      payer,
      tokenMint,
      tokenSource,
      dstEid,
      amountLd,
      minAmountLd,
      options.toBytes(),
      Array.from(to),
      nativeFee,
      lzTokenFee,
      tokenEscrow,
      composeMsg,
      peerInfo.address,
      remainingAccounts,
      tokenProgramId,
      oftProgramId
    );
    return transactionInstruction;
  }
  // extracted so it can be cached (reduce RPC calls)
  getPeerInfo(connection, peer) {
    return lzSolanaSdkV2.OftProgram.accounts.Peer.fromAccountAddress(connection, peer);
  }
  getPeer(srcChainKey, dstEid) {
    const oftInstance = this.getOftInstance(srcChainKey);
    const deriver = this.getDeriver(srcChainKey);
    const peer = deriver.peer(oftInstance, dstEid);
    return peer[0];
  }
  async getComputeUnitsLimit(connection, transactionInstruction, input) {
    const payer = new web3_js.PublicKey(input.srcAddress);
    const simulationComputeUnits = await uiSolana.getSimulationComputeUnits(
      connection,
      [transactionInstruction],
      payer,
      []
    );
    const computeUnitsLimit = simulationComputeUnits === null ? 1e3 : simulationComputeUnits < 1e3 ? 1e3 : Math.ceil(simulationComputeUnits * 1.5);
    return computeUnitsLimit;
  }
  tryGetDeployment(chainKey) {
    return this.config.deployments[chainKey];
  }
  getDeployment(chainKey) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment)
      return deployment;
    throw new Error(`Deployment not found for chainKey ${chainKey}`);
  }
  chainKeyToEndpointId(chainKey) {
    const deployment = this.getDeployment(chainKey);
    return deployment.eid;
  }
};
async function buildMessageV0(connection, payerKey, instructions, commitmentOrConfig, lookupTableAddresses) {
  return new web3_js.TransactionMessage({
    payerKey,
    recentBlockhash: await connection.getLatestBlockhash(commitmentOrConfig).then((res) => res.blockhash),
    instructions
  }).compileToV0Message(lookupTableAddresses);
}
async function buildVersionedTransaction(connection, payerKey, instructions, commitmentOrConfig, lookupTableAddresses) {
  return new web3_js.VersionedTransaction(
    await buildMessageV0(
      connection,
      payerKey,
      instructions,
      commitmentOrConfig,
      lookupTableAddresses
    )
  );
}

exports.OftBridgeV3__solana = OftBridgeV3__solana;
exports.buildMessageV0 = buildMessageV0;
exports.buildVersionedTransaction = buildVersionedTransaction;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=solana.cjs.map