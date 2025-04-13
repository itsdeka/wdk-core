import { createOptions } from './chunk-DHS2PT7H.mjs';
import './chunk-EJHQDNHP.mjs';
import { hexlify } from '@ethersproject/bytes';
import { SendHelper, OftPDADeriver, OftTools, OftProgram } from '@layerzerolabs/lz-solana-sdk-v2';
import { validateInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { assert, hasAddress, isSolanaChainKey, isToken, castCurrencyAmountUnsafe, MessageFee, CurrencyAmount, AdapterParams, MaxUint256 } from '@layerzerolabs/ui-core';
import { addressToBytes32 } from '@layerzerolabs/ui-evm';
import { createTransaction, getSimulationComputeUnits } from '@layerzerolabs/ui-solana';
import { TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token';
import { PublicKey, ComputeBudgetProgram, TransactionMessage, VersionedTransaction } from '@solana/web3.js';
import moize from 'moize';

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
      this.quoteOft = moize(this.quoteOft.bind(this), options);
      this.getMessageFee = moize(this.getMessageFee.bind(this), options);
      this.getPeerInfo = moize(this.getPeerInfo.bind(this), options);
      this.getQuoteAccounts = moize(this.getQuoteAccounts.bind(this), options);
      this.getSendAccounts = moize(this.getSendAccounts.bind(this), options);
    }
  }
  sendHelper = new SendHelper();
  derivers = {};
  logger = void 0;
  getConnection(chainKey) {
    return this.connection;
  }
  getTokenProgramId(chainKey) {
    return TOKEN_PROGRAM_ID;
  }
  getOftProgramId(chainKey) {
    const deployment = this.getDeployment(chainKey);
    assert(deployment.oft?.programId, "programId is required");
    return new PublicKey(deployment.oft.programId);
  }
  getDeriver(chainKey) {
    if (!this.derivers[chainKey]) {
      const oftProgramId = this.getOftProgramId(chainKey);
      const deriver = new OftPDADeriver(oftProgramId);
      this.derivers[chainKey] = deriver;
    }
    return this.derivers[chainKey];
  }
  getOftInstance(chainKey) {
    const deriver = this.getDeriver(chainKey);
    const deployment = this.getDeployment(chainKey);
    assert(hasAddress(deployment.token), "Token address is required");
    const tokenMint = new PublicKey(deployment.token.address);
    const tokenEscrow = deployment.tokenEscrow ? new PublicKey(deployment.tokenEscrow.address) : void 0;
    return deriver.oftConfig(tokenEscrow ?? tokenMint)[0];
  }
  validateConfig(config) {
    assert(config.version === 3, "OftBridgeConfig version 3 is required");
  }
  supportsClaim(token) {
    return this.supportsRegister(token);
  }
  supportsRegister(token) {
    const { chainKey } = token;
    if (!isSolanaChainKey(chainKey))
      return false;
    return Boolean(this.tryGetDeployment(token.chainKey)?.token.equals(token));
  }
  supportsTransfer(srcToken, dstToken) {
    return Boolean(
      isSolanaChainKey(srcToken.chainKey) && this.tryGetDeployment(srcToken.chainKey)?.token.equals(srcToken) && this.tryGetDeployment(dstToken.chainKey)?.token.equals(dstToken)
    );
  }
  async getQuoteAccounts(srcChainKey, srcAddress, dstEid) {
    const connection = this.getConnection(srcChainKey);
    const oftInstance = this.getOftInstance(srcChainKey);
    const peer = this.getPeer(srcChainKey, dstEid);
    const payer = new PublicKey(srcAddress);
    const peerInfo = await this.getPeerInfo(connection, peer);
    const remainingAccounts = await this.sendHelper.getQuoteAccounts(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connection,
      payer,
      oftInstance,
      dstEid,
      hexlify(peerInfo.address)
    );
    return remainingAccounts;
  }
  async getSendAccounts(srcChainKey, srcAddress, dstEid) {
    const connection = this.getConnection(srcChainKey);
    const payer = new PublicKey(srcAddress);
    const oftInstance = this.getOftInstance(srcChainKey);
    const peer = this.getPeer(srcChainKey, dstEid);
    const peerInfo = await this.getPeerInfo(connection, peer);
    const remainingAccounts = await this.sendHelper.getSendAccounts(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connection,
      payer,
      oftInstance,
      dstEid,
      hexlify(peerInfo.address)
    );
    return remainingAccounts;
  }
  async getMessageFee(input) {
    this.logger?.log("getMessageFee", input);
    if (!input.srcAddress)
      throw new Error("srcAddress is required");
    if (!isToken(input.srcToken))
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
    const payer = new PublicKey(input.srcAddress);
    const tokenMint = new PublicKey(input.srcToken.address);
    const amountLd = input.srcAmount.toBigInt();
    const minAmountLd = castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken).toBigInt();
    const to = addressToBytes32(input.dstAddress);
    const tokenEscrow = deployment.tokenEscrow ? new PublicKey(deployment.tokenEscrow.address) : void 0;
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
    const quote = await OftTools.quoteWithUln(
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
    return MessageFee.from(srcChainKey, { nativeFee: quote.nativeFee, zroFee: quote.lzTokenFee });
  }
  async createOptions({
    adapterParams,
    dstChainKey
  }) {
    return createOptions({ adapterParams, dstChainKey }, this.config);
  }
  async getOutput(input) {
    assert(input.srcAddress, "srcAddress is required");
    assert(input.dstAddress, "dstAddress is required");
    assert(input.srcAmount, "srcAmount is required");
    assert(input.dstAmountMin, "dstAmountMin is required");
    assert(input.adapterParams, "adapterParams is required");
    const srcToken = input.srcAmount.token;
    const dstToken = input.dstToken;
    const quote = await this.quoteOft({
      srcAddress: input.srcAddress,
      dstAddress: input.dstAddress,
      srcAmount: input.srcAmount,
      dstAmountMin: input.dstAmountMin,
      adapterParams: input.adapterParams
    });
    const dstAmount = castCurrencyAmountUnsafe(quote.oftReceipt.amountReceivedLd, dstToken);
    const bridgeFeeBigInt = quote.oftFeeDetails.reduce(
      (acc, value) => acc + value.feeAmountLd.toBigInt(),
      0n
    );
    const bridgeFee = CurrencyAmount.fromBigInt(srcToken, bridgeFeeBigInt);
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
    assert(input.srcAddress, "srcAddress is required");
    assert(input.dstAddress, "dstAddress is required");
    assert(input.srcAmount, "srcAmount is required");
    assert(input.dstAmountMin, "dstAmountMin is required");
    assert(input.adapterParams, "adapterParams is required");
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
    assert(isToken(deployment.token), "Token address is required");
    const payer = new PublicKey(srcAddress);
    const tokenMint = new PublicKey(deployment.token.address);
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const amountLd = input.srcAmount.toBigInt();
    const minAmountLd = BigInt(0);
    const to = addressToBytes32(dstAddress);
    const tokenEscrow = deployment.tokenEscrow ? new PublicKey(deployment.tokenEscrow.address) : void 0;
    const connection = this.getConnection(srcChainKey);
    const adapterParams = AdapterParams.forV1(0);
    const options = await this.createOptions({ adapterParams, dstChainKey });
    const payInLzToken = false;
    const composeMsg = void 0;
    const tokenProgramId = this.getTokenProgramId(srcChainKey);
    const oftProgramId = this.getOftProgramId(srcChainKey);
    const { oftLimits, oftReceipt, oftFeeDetails } = await OftTools.quoteOft(
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
    const ld = (amount) => CurrencyAmount.fromBigInt(srcToken, BigInt(amount));
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
    return CurrencyAmount.fromRawAmount(token, MaxUint256);
  }
  async getOptions(input) {
    const taxiOption = {
      mode: "taxi"
    };
    return { options: [taxiOption] };
  }
  async getUnclaimed({ token }) {
    return CurrencyAmount.fromRawAmount(token, 0);
  }
  async isRegistered(input) {
    return true;
  }
  async transfer(input) {
    validateInput(input);
    const payer = new PublicKey(input.srcAddress);
    const { srcChainKey } = input;
    const connection = this.getConnection(srcChainKey);
    const transactionInstruction = await this.getTransactionInstruction(input);
    const computeUnitsLimit = await this.getComputeUnitsLimit(
      connection,
      transactionInstruction,
      input
    );
    const computeUnitsBudgetInstruction = ComputeBudgetProgram.setComputeUnitLimit({
      units: computeUnitsLimit
    });
    const versionedTransaction = await buildVersionedTransaction(connection, payer, [
      computeUnitsBudgetInstruction,
      transactionInstruction
    ]);
    return createTransaction(versionedTransaction, { connection });
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
    assert(isToken(deployment.token), "Token address is required");
    const payer = new PublicKey(input.srcAddress);
    const tokenMint = new PublicKey(deployment.token.address);
    const tokenSource = await getAssociatedTokenAddress(tokenMint, payer);
    const srcChainKey = input.srcToken.chainKey;
    const dstChainKey = input.dstToken.chainKey;
    const dstEid = this.chainKeyToEndpointId(dstChainKey);
    const amountLd = input.srcAmount.toBigInt();
    const minAmountLd = castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken).toBigInt();
    const to = addressToBytes32(input.dstAddress);
    const nativeFee = input.fee.nativeFee.toBigInt();
    const lzTokenFee = input.fee.zroFee.toBigInt();
    const tokenEscrow = deployment.tokenEscrow ? new PublicKey(deployment.tokenEscrow.address) : void 0;
    const composeMsg = void 0;
    const { adapterParams } = input;
    const options = await this.createOptions({ adapterParams, dstChainKey });
    const connection = this.getConnection(srcChainKey);
    const peer = this.getPeer(srcChainKey, dstEid);
    const peerInfo = await this.getPeerInfo(connection, peer);
    const remainingAccounts = await this.getSendAccounts(srcChainKey, input.srcAddress, dstEid);
    const tokenProgramId = this.getTokenProgramId(srcChainKey);
    const oftProgramId = this.getOftProgramId(srcChainKey);
    const transactionInstruction = await OftTools.sendWithUln(
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
    return OftProgram.accounts.Peer.fromAccountAddress(connection, peer);
  }
  getPeer(srcChainKey, dstEid) {
    const oftInstance = this.getOftInstance(srcChainKey);
    const deriver = this.getDeriver(srcChainKey);
    const peer = deriver.peer(oftInstance, dstEid);
    return peer[0];
  }
  async getComputeUnitsLimit(connection, transactionInstruction, input) {
    const payer = new PublicKey(input.srcAddress);
    const simulationComputeUnits = await getSimulationComputeUnits(
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
  return new TransactionMessage({
    payerKey,
    recentBlockhash: await connection.getLatestBlockhash(commitmentOrConfig).then((res) => res.blockhash),
    instructions
  }).compileToV0Message(lookupTableAddresses);
}
async function buildVersionedTransaction(connection, payerKey, instructions, commitmentOrConfig, lookupTableAddresses) {
  return new VersionedTransaction(
    await buildMessageV0(
      connection,
      payerKey,
      instructions,
      commitmentOrConfig,
      lookupTableAddresses
    )
  );
}

export { OftBridgeV3__solana, buildMessageV0, buildVersionedTransaction };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=solana.mjs.map