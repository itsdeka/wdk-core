"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BaseSafeOperation: () => BaseSafeOperation_default,
  DUMMY_AUTHENTICATOR_DATA: () => DUMMY_AUTHENTICATOR_DATA,
  DUMMY_CLIENT_DATA_FIELDS: () => DUMMY_CLIENT_DATA_FIELDS,
  EQ_OR_GT_0_3_0: () => EQ_OR_GT_0_3_0,
  GelatoRelayPack: () => GelatoRelayPack,
  PimlicoFeeEstimator: () => PimlicoFeeEstimator,
  RelayKitBasePack: () => RelayKitBasePack,
  Safe4337Pack: () => Safe4337Pack,
  SafeOperationFactory: () => SafeOperationFactory_default,
  SafeOperationV06: () => SafeOperationV06_default,
  SafeOperationV07: () => SafeOperationV07_default,
  createBundlerClient: () => createBundlerClient,
  createUserOperation: () => createUserOperation,
  encodeMultiSendCallData: () => encodeMultiSendCallData,
  encodeNonce: () => encodeNonce,
  entryPointToSafeModules: () => entryPointToSafeModules,
  getDummySignature: () => getDummySignature,
  getRelayKitVersion: () => getRelayKitVersion,
  getSafeNonceFromEntrypoint: () => getSafeNonceFromEntrypoint,
  getSignatureBytes: () => getSignatureBytes,
  isEntryPointV6: () => isEntryPointV6,
  isEntryPointV7: () => isEntryPointV7,
  sameString: () => sameString,
  userOperationToHexValues: () => userOperationToHexValues
});
module.exports = __toCommonJS(src_exports);

// src/packs/gelato/GelatoRelayPack.ts
var import_relay_sdk = require("@gelatonetwork/relay-sdk");
var import_protocol_kit = require("./protocol-kit.js");

// src/RelayKitBasePack.ts
var RelayKitBasePack = class {
  /**
   * Creates a new RelayKitBasePack instance.
   * The packs implemented using our SDK should extend this class and therefore provide a Safe SDK instance
   * @param {Safe} protocolKit - The Safe SDK instance
   */
  constructor(protocolKit) {
    this.protocolKit = protocolKit;
  }
};

// src/constants.ts
var GELATO_NATIVE_TOKEN_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
var GELATO_FEE_COLLECTOR = "0x3AC05161b76a35c1c28dC99Aa01BEd7B24cEA3bf";
var ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
var GELATO_GAS_EXECUTION_OVERHEAD = 15e4;
var GELATO_TRANSFER_GAS_COST = 15e3;

// src/packs/gelato/GelatoRelayPack.ts
var GelatoRelayPack = class extends RelayKitBasePack {
  #gelatoRelay;
  #apiKey;
  constructor({ apiKey, protocolKit }) {
    super(protocolKit);
    this.#gelatoRelay = new import_relay_sdk.GelatoRelay();
    this.#apiKey = apiKey;
  }
  _getFeeToken(gasToken) {
    return !gasToken || gasToken === ZERO_ADDRESS ? GELATO_NATIVE_TOKEN_ADDRESS : gasToken;
  }
  getFeeCollector() {
    return GELATO_FEE_COLLECTOR;
  }
  async getEstimateFee(propsOrChainId, inputGasLimit, inputGasToken) {
    let chainId;
    let gasLimit;
    let gasToken;
    if (typeof propsOrChainId === "object") {
      ;
      ({ chainId, gasLimit, gasToken } = propsOrChainId);
    } else {
      chainId = propsOrChainId;
      gasLimit = inputGasLimit;
      gasToken = inputGasToken;
    }
    const feeToken = this._getFeeToken(gasToken);
    const estimation = await this.#gelatoRelay.getEstimatedFee(
      chainId,
      feeToken,
      BigInt(gasLimit),
      false
    );
    return estimation.toString();
  }
  async getTaskStatus(taskId) {
    return this.#gelatoRelay.getTaskStatus(taskId);
  }
  /**
   * Creates a payment transaction to Gelato
   *
   * @private
   * @async
   * @function
   * @param {string} gas - The gas amount for the payment.
   * @param {MetaTransactionOptions} options - Options for the meta transaction.
   * @returns {Promise<Transaction>} Promise object representing the created payment transaction.
   *
   */
  async createPaymentToGelato(gas, options) {
    const chainId = await this.protocolKit.getChainId();
    const gelatoAddress = this.getFeeCollector();
    const gasToken = options.gasToken ?? ZERO_ADDRESS;
    const paymentToGelato = await this.getEstimateFee({ chainId, gasLimit: gas, gasToken });
    const transferToGelato = (0, import_protocol_kit.createERC20TokenTransferTransaction)(
      gasToken,
      gelatoAddress,
      paymentToGelato
    );
    return transferToGelato;
  }
  /**
   * @deprecated Use createTransaction instead
   */
  async createRelayedTransaction({
    transactions,
    onlyCalls = false,
    options = {}
  }) {
    return this.createTransaction({ transactions, onlyCalls, options });
  }
  /**
   * Creates a Safe transaction designed to be executed using the Gelato Relayer.
   *
   * @param {GelatoCreateTransactionProps} options - Options for Gelato.
   * @param {MetaTransactionData[]} [options.transactions] - The transactions batch.
   * @param {boolean} [options.onlyCalls=false] - If true, MultiSendCallOnly contract should be used. Remember to not use delegate calls in the batch.
   * @param {MetaTransactionOptions} [options.options={}] - Gas Options for the transaction batch.
   * @returns {Promise<SafeTransaction>} Returns a Promise that resolves with a SafeTransaction object.
   */
  async createTransaction({
    transactions,
    onlyCalls = false,
    options = {}
  }) {
    const { isSponsored = false } = options;
    if (isSponsored) {
      const nonce = await this.protocolKit.getNonce();
      const sponsoredTransaction = await this.protocolKit.createTransaction({
        transactions,
        onlyCalls,
        options: {
          nonce
        }
      });
      return sponsoredTransaction;
    }
    const gasToken = options.gasToken ?? ZERO_ADDRESS;
    const isGasTokenCompatible = await (0, import_protocol_kit.isGasTokenCompatibleWithHandlePayment)(
      gasToken,
      this.protocolKit
    );
    if (!isGasTokenCompatible) {
      return this.createTransactionWithTransfer({ transactions, onlyCalls, options });
    }
    return this.createTransactionWithHandlePayment({ transactions, onlyCalls, options });
  }
  /**
   * Creates a Safe transaction designed to be executed using the Gelato Relayer and
   * uses the handlePayment function defined in the Safe contract to pay the fees
   * to the Gelato relayer.
   *
   * @async
   * @function createTransactionWithHandlePayment
   * @param {GelatoCreateTransactionProps} options - Options for Gelato.
   * @param {MetaTransactionData[]} [options.transactions] - The transactions batch.
   * @param {boolean} [options.onlyCalls=false] - If true, MultiSendCallOnly contract should be used. Remember to not use delegate calls in the batch.
   * @param {MetaTransactionOptions} [options.options={}] - Gas Options for the transaction batch.
   * @returns {Promise<SafeTransaction>} Returns a promise that resolves to the created SafeTransaction.
   * @private
   */
  async createTransactionWithHandlePayment({
    transactions,
    onlyCalls = false,
    options = {}
  }) {
    const { gasLimit } = options;
    const nonce = await this.protocolKit.getNonce();
    const transactionToEstimateGas = await this.protocolKit.createTransaction({
      transactions,
      onlyCalls,
      options: {
        nonce
      }
    });
    const gasPrice = "1";
    const safeTxGas = await (0, import_protocol_kit.estimateSafeTxGas)(this.protocolKit, transactionToEstimateGas);
    const gasToken = options.gasToken ?? ZERO_ADDRESS;
    const refundReceiver = this.getFeeCollector();
    const chainId = await this.protocolKit.getChainId();
    if (gasLimit) {
      const paymentToGelato2 = await this.getEstimateFee({ chainId, gasLimit, gasToken });
      const syncTransaction2 = await this.protocolKit.createTransaction({
        transactions,
        onlyCalls,
        options: {
          baseGas: paymentToGelato2,
          gasPrice,
          safeTxGas,
          gasToken,
          refundReceiver,
          nonce
        }
      });
      return syncTransaction2;
    }
    const baseGas = await (0, import_protocol_kit.estimateTxBaseGas)(this.protocolKit, transactionToEstimateGas);
    const safeDeploymentGasCost = await (0, import_protocol_kit.estimateSafeDeploymentGas)(this.protocolKit);
    const totalGas = Number(baseGas) + // baseGas
    Number(safeTxGas) + // safeTxGas
    Number(safeDeploymentGasCost) + // Safe deploymet gas cost if it is required
    GELATO_GAS_EXECUTION_OVERHEAD;
    const paymentToGelato = await this.getEstimateFee({
      chainId,
      gasLimit: String(totalGas),
      gasToken
    });
    const syncTransaction = await this.protocolKit.createTransaction({
      transactions,
      onlyCalls,
      options: {
        baseGas: paymentToGelato,
        // payment to Gelato
        gasPrice,
        safeTxGas,
        gasToken,
        refundReceiver,
        nonce
      }
    });
    return syncTransaction;
  }
  /**
   * Creates a Safe transaction designed to be executed using the Gelato Relayer and
   * uses a separate ERC20 transfer to pay the fees to the Gelato relayer.
   *
   * @async
   * @function createTransactionWithTransfer
   * @param {GelatoCreateTransactionProps} options - Options for Gelato.
   * @param {MetaTransactionData[]} [options.transactions] - The transactions batch.
   * @param {boolean} [options.onlyCalls=false] - If true, MultiSendCallOnly contract should be used. Remember to not use delegate calls in the batch.
   * @param {MetaTransactionOptions} [options.options={}] - Gas Options for the transaction batch.
   * @returns {Promise<SafeTransaction>} Returns a promise that resolves to the created SafeTransaction.
   * @private
   */
  async createTransactionWithTransfer({
    transactions,
    onlyCalls = false,
    options = {}
  }) {
    const { gasLimit } = options;
    const nonce = await this.protocolKit.getNonce();
    const gasToken = options.gasToken ?? ZERO_ADDRESS;
    if (gasLimit) {
      const transferToGelato2 = await this.createPaymentToGelato(gasLimit, options);
      const syncTransaction2 = await this.protocolKit.createTransaction({
        transactions: [...transactions, transferToGelato2],
        onlyCalls,
        options: {
          nonce,
          gasToken
        }
      });
      return syncTransaction2;
    }
    const transactionToEstimateGas = await this.protocolKit.createTransaction({
      transactions,
      onlyCalls,
      options: {
        nonce
      }
    });
    const safeTxGas = await (0, import_protocol_kit.estimateSafeTxGas)(this.protocolKit, transactionToEstimateGas);
    const baseGas = await (0, import_protocol_kit.estimateTxBaseGas)(this.protocolKit, transactionToEstimateGas);
    const safeDeploymentGasCost = await (0, import_protocol_kit.estimateSafeDeploymentGas)(this.protocolKit);
    const totalGas = Number(baseGas) + // baseGas
    Number(safeTxGas) + // safeTxGas without Gelato payment transfer
    Number(safeDeploymentGasCost) + // Safe deploymet gas cost if it is required
    GELATO_TRANSFER_GAS_COST + // Gelato payment transfer
    GELATO_GAS_EXECUTION_OVERHEAD;
    const transferToGelato = await this.createPaymentToGelato(String(totalGas), options);
    const syncTransaction = await this.protocolKit.createTransaction({
      transactions: [...transactions, transferToGelato],
      onlyCalls,
      options: {
        nonce,
        gasToken
      }
    });
    return syncTransaction;
  }
  async sendSponsorTransaction(target, encodedTransaction, chainId) {
    if (!this.#apiKey) {
      throw new Error("API key not defined");
    }
    const request = {
      chainId,
      target,
      data: encodedTransaction
    };
    const response = await this.#gelatoRelay.sponsoredCall(request, this.#apiKey);
    return response;
  }
  async sendSyncTransaction(target, encodedTransaction, chainId, options) {
    const { gasLimit, gasToken } = options;
    const feeToken = this._getFeeToken(gasToken);
    const request = {
      chainId,
      target,
      data: encodedTransaction,
      feeToken,
      isRelayContext: false
    };
    const relayRequestOptions = {
      gasLimit: gasLimit ? BigInt(gasLimit) : void 0
    };
    const response = await this.#gelatoRelay.callWithSyncFee(request, relayRequestOptions);
    return response;
  }
  async relayTransaction({
    target,
    encodedTransaction,
    chainId,
    options = {}
  }) {
    const response = options.isSponsored ? this.sendSponsorTransaction(target, encodedTransaction, chainId) : this.sendSyncTransaction(target, encodedTransaction, chainId, options);
    return response;
  }
  /**
   * @deprecated Use executeTransaction instead
   */
  async executeRelayTransaction(safeTransaction, options) {
    return this.executeTransaction({ executable: safeTransaction, options });
  }
  /**
   * Sends the Safe transaction to the Gelato Relayer for execution.
   * If the Safe is not deployed, it creates a batch of transactions including the Safe deployment transaction.
   *
   * @param {GelatoExecuteTransactionProps} props - Execution props
   * @param {SafeTransaction} props.executable - The Safe transaction to be executed.
   * @param {MetaTransactionOptions} props.options - Options for the transaction.
   * @returns {Promise<RelayResponse>} Returns a Promise that resolves with a RelayResponse object.
   */
  async executeTransaction({
    executable: safeTransaction,
    options
  }) {
    const isSafeDeployed = await this.protocolKit.isSafeDeployed();
    const chainId = await this.protocolKit.getChainId();
    const safeAddress = await this.protocolKit.getAddress();
    const safeTransactionEncodedData = await this.protocolKit.getEncodedTransaction(safeTransaction);
    const gasToken = options?.gasToken || safeTransaction.data.gasToken;
    if (isSafeDeployed) {
      const relayTransaction2 = {
        target: safeAddress,
        encodedTransaction: safeTransactionEncodedData,
        chainId,
        options: {
          ...options,
          gasToken
        }
      };
      return this.relayTransaction(relayTransaction2);
    }
    const safeDeploymentBatch = await this.protocolKit.wrapSafeTransactionIntoDeploymentBatch(safeTransaction);
    const relayTransaction = {
      target: safeDeploymentBatch.to,
      // multiSend Contract address
      encodedTransaction: safeDeploymentBatch.data,
      chainId,
      options: {
        ...options,
        gasToken
      }
    };
    return this.relayTransaction(relayTransaction);
  }
};

// src/packs/safe-4337/Safe4337Pack.ts
var import_viem8 = require("viem");
var import_satisfies = __toESM(require("semver/functions/satisfies.js"));
var import_protocol_kit5 = __toESM(require("./protocol-kit.js"));
var import_types_kit3 = require("@safe-global/types-kit");
var import_safe_modules_deployments = require("@safe-global/safe-modules-deployments");
var import_viem9 = require("viem");

// src/packs/safe-4337/BaseSafeOperation.ts
var import_viem = require("viem");
var import_protocol_kit2 = require("./protocol-kit.js");
var BaseSafeOperation = class {
  constructor(userOperation, options) {
    this.signatures = /* @__PURE__ */ new Map();
    this.userOperation = userOperation;
    this.options = options;
  }
  getSignature(signer) {
    return this.signatures.get(signer.toLowerCase());
  }
  addSignature(signature) {
    this.signatures.set(signature.signer.toLowerCase(), signature);
  }
  encodedSignatures() {
    return (0, import_protocol_kit2.buildSignatureBytes)(Array.from(this.signatures.values()));
  }
  getUserOperation() {
    return {
      ...this.userOperation,
      signature: (0, import_viem.encodePacked)(
        ["uint48", "uint48", "bytes"],
        [
          this.options.validAfter || 0,
          this.options.validUntil || 0,
          this.encodedSignatures()
        ]
      )
    };
  }
  getHash() {
    return (0, import_viem.hashTypedData)({
      domain: {
        chainId: Number(this.options.chainId),
        verifyingContract: this.options.moduleAddress
      },
      types: this.getEIP712Type(),
      primaryType: "SafeOp",
      message: this.getSafeOperation()
    });
  }
};
var BaseSafeOperation_default = BaseSafeOperation;

// src/packs/safe-4337/constants.ts
var import_viem2 = require("viem");
var DEFAULT_SAFE_VERSION = "1.4.1";
var DEFAULT_SAFE_MODULES_VERSION = "0.3.0";
var EIP712_SAFE_OPERATION_TYPE_V06 = {
  SafeOp: [
    { type: "address", name: "safe" },
    { type: "uint256", name: "nonce" },
    { type: "bytes", name: "initCode" },
    { type: "bytes", name: "callData" },
    { type: "uint256", name: "callGasLimit" },
    { type: "uint256", name: "verificationGasLimit" },
    { type: "uint256", name: "preVerificationGas" },
    { type: "uint256", name: "maxFeePerGas" },
    { type: "uint256", name: "maxPriorityFeePerGas" },
    { type: "bytes", name: "paymasterAndData" },
    { type: "uint48", name: "validAfter" },
    { type: "uint48", name: "validUntil" },
    { type: "address", name: "entryPoint" }
  ]
};
var EIP712_SAFE_OPERATION_TYPE_V07 = {
  SafeOp: [
    { type: "address", name: "safe" },
    { type: "uint256", name: "nonce" },
    { type: "bytes", name: "initCode" },
    { type: "bytes", name: "callData" },
    { type: "uint128", name: "verificationGasLimit" },
    { type: "uint128", name: "callGasLimit" },
    { type: "uint256", name: "preVerificationGas" },
    { type: "uint128", name: "maxPriorityFeePerGas" },
    { type: "uint128", name: "maxFeePerGas" },
    { type: "bytes", name: "paymasterAndData" },
    { type: "uint48", name: "validAfter" },
    { type: "uint48", name: "validUntil" },
    { type: "address", name: "entryPoint" }
  ]
};
var ABI = (0, import_viem2.parseAbi)([
  "function enableModules(address[])",
  "function multiSend(bytes memory transactions) public payable",
  "function executeUserOp(address to, uint256 value, bytes data, uint8 operation)",
  "function approve(address _spender, uint256 _value)",
  "function configure((uint256 x, uint256 y, uint176 verifiers) signer)"
]);
var ENTRYPOINT_ABI = [
  {
    inputs: [
      { name: "sender", type: "address" },
      { name: "key", type: "uint192" }
    ],
    name: "getNonce",
    outputs: [{ name: "nonce", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  }
];
var ENTRYPOINT_ADDRESS_V06 = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
var ENTRYPOINT_ADDRESS_V07 = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";

// src/packs/safe-4337/SafeOperationV06.ts
var SafeOperationV06 = class extends BaseSafeOperation_default {
  constructor(userOperation, options) {
    super(userOperation, options);
  }
  addEstimations(estimations) {
    this.userOperation.maxFeePerGas = BigInt(
      estimations.maxFeePerGas || this.userOperation.maxFeePerGas
    );
    this.userOperation.maxPriorityFeePerGas = BigInt(
      estimations.maxPriorityFeePerGas || this.userOperation.maxPriorityFeePerGas
    );
    this.userOperation.verificationGasLimit = BigInt(
      estimations.verificationGasLimit || this.userOperation.verificationGasLimit
    );
    this.userOperation.preVerificationGas = BigInt(
      estimations.preVerificationGas || this.userOperation.preVerificationGas
    );
    this.userOperation.callGasLimit = BigInt(
      estimations.callGasLimit || this.userOperation.callGasLimit
    );
    this.userOperation.paymasterAndData = estimations.paymasterAndData || this.userOperation.paymasterAndData;
  }
  getSafeOperation() {
    return {
      safe: this.userOperation.sender,
      nonce: this.userOperation.nonce,
      initCode: this.userOperation.initCode,
      callData: this.userOperation.callData,
      callGasLimit: this.userOperation.callGasLimit,
      verificationGasLimit: this.userOperation.verificationGasLimit,
      preVerificationGas: this.userOperation.preVerificationGas,
      maxFeePerGas: this.userOperation.maxFeePerGas,
      maxPriorityFeePerGas: this.userOperation.maxPriorityFeePerGas,
      paymasterAndData: this.userOperation.paymasterAndData,
      validAfter: this.options.validAfter || 0,
      validUntil: this.options.validUntil || 0,
      entryPoint: this.options.entryPoint
    };
  }
  getEIP712Type() {
    return EIP712_SAFE_OPERATION_TYPE_V06;
  }
};
var SafeOperationV06_default = SafeOperationV06;

// src/packs/safe-4337/SafeOperationV07.ts
var import_viem3 = require("viem");
var SafeOperationV07 = class extends BaseSafeOperation_default {
  constructor(userOperation, options) {
    super(userOperation, options);
  }
  addEstimations(estimations) {
    this.userOperation.maxFeePerGas = BigInt(
      estimations.maxFeePerGas || this.userOperation.maxFeePerGas
    );
    this.userOperation.maxPriorityFeePerGas = BigInt(
      estimations.maxPriorityFeePerGas || this.userOperation.maxPriorityFeePerGas
    );
    this.userOperation.verificationGasLimit = BigInt(
      estimations.verificationGasLimit || this.userOperation.verificationGasLimit
    );
    this.userOperation.preVerificationGas = BigInt(
      estimations.preVerificationGas || this.userOperation.preVerificationGas
    );
    this.userOperation.callGasLimit = BigInt(
      estimations.callGasLimit || this.userOperation.callGasLimit
    );
    this.userOperation.paymasterPostOpGasLimit = estimations.paymasterPostOpGasLimit ? BigInt(estimations.paymasterPostOpGasLimit) : this.userOperation.paymasterPostOpGasLimit;
    this.userOperation.paymasterVerificationGasLimit = estimations.paymasterVerificationGasLimit ? BigInt(estimations.paymasterVerificationGasLimit) : this.userOperation.paymasterVerificationGasLimit;
    this.userOperation.paymaster = estimations.paymaster || this.userOperation.paymaster;
    this.userOperation.paymasterData = estimations.paymasterData || this.userOperation.paymasterData;
  }
  getSafeOperation() {
    const initCode = this.userOperation.factory ? (0, import_viem3.concat)([
      this.userOperation.factory,
      this.userOperation.factoryData || "0x"
    ]) : "0x";
    const paymasterAndData = (0, import_viem3.isAddress)(this.userOperation.paymaster || "") ? (0, import_viem3.concat)([
      this.userOperation.paymaster,
      (0, import_viem3.pad)((0, import_viem3.toHex)(this.userOperation.paymasterVerificationGasLimit || 0n), {
        size: 16
      }),
      (0, import_viem3.pad)((0, import_viem3.toHex)(this.userOperation.paymasterPostOpGasLimit || 0n), {
        size: 16
      }),
      this.userOperation.paymasterData || "0x"
    ]) : "0x";
    return {
      safe: this.userOperation.sender,
      nonce: this.userOperation.nonce,
      initCode,
      callData: this.userOperation.callData,
      callGasLimit: this.userOperation.callGasLimit,
      verificationGasLimit: this.userOperation.verificationGasLimit,
      preVerificationGas: this.userOperation.preVerificationGas,
      maxFeePerGas: this.userOperation.maxFeePerGas,
      maxPriorityFeePerGas: this.userOperation.maxPriorityFeePerGas,
      paymasterAndData,
      validAfter: this.options.validAfter || 0,
      validUntil: this.options.validUntil || 0,
      entryPoint: this.options.entryPoint
    };
  }
  getEIP712Type() {
    return EIP712_SAFE_OPERATION_TYPE_V07;
  }
};
var SafeOperationV07_default = SafeOperationV07;

// src/packs/safe-4337/utils/index.ts
var import_viem7 = require("viem");
var import_types_kit2 = require("@safe-global/types-kit");
var import_protocol_kit4 = require("./protocol-kit.js");

// src/packs/safe-4337/utils/entrypoint.ts
var EQ_0_2_0 = "0.2.0";
var EQ_OR_GT_0_3_0 = ">=0.3.0";
function sameString(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
function entryPointToSafeModules(entryPoint) {
  const moduleVersionToEntryPoint = {
    [ENTRYPOINT_ADDRESS_V06]: EQ_0_2_0,
    [ENTRYPOINT_ADDRESS_V07]: EQ_OR_GT_0_3_0
  };
  return moduleVersionToEntryPoint[entryPoint];
}
function isEntryPointV6(address) {
  return sameString(address, ENTRYPOINT_ADDRESS_V06);
}
function isEntryPointV7(address) {
  return sameString(address, ENTRYPOINT_ADDRESS_V07);
}
async function getSafeNonceFromEntrypoint(protocolKit, safeAddress, entryPointAddress) {
  const safeProvider = protocolKit.getSafeProvider();
  const newNonce = await safeProvider.readContract({
    address: entryPointAddress || "0x",
    abi: ENTRYPOINT_ABI,
    functionName: "getNonce",
    args: [safeAddress, 0n]
  });
  return newNonce;
}

// src/packs/safe-4337/utils/signing.ts
var import_viem4 = require("viem");
var import_protocol_kit3 = require("./protocol-kit.js");
var DUMMY_CLIENT_DATA_FIELDS = [
  `"origin":"https://safe.global"`,
  `"padding":"This pads the clientDataJSON so that we can leave room for additional implementation specific fields for a more accurate 'preVerificationGas' estimate."`
].join(",");
var DUMMY_AUTHENTICATOR_DATA = new Uint8Array(37);
DUMMY_AUTHENTICATOR_DATA.fill(254);
DUMMY_AUTHENTICATOR_DATA[32] = 4;
function getDummySignature(signer, threshold) {
  const signatures = [];
  for (let i = 0; i < threshold; i++) {
    const isContractSignature = true;
    const passkeySignature = getSignatureBytes({
      authenticatorData: DUMMY_AUTHENTICATOR_DATA,
      clientDataFields: DUMMY_CLIENT_DATA_FIELDS,
      r: BigInt(`0x${"ec".repeat(32)}`),
      s: BigInt(`0x${"d5a".repeat(21)}f`)
    });
    signatures.push(new import_protocol_kit3.EthSafeSignature(signer, passkeySignature, isContractSignature));
  }
  return (0, import_viem4.encodePacked)(["uint48", "uint48", "bytes"], [0, 0, (0, import_protocol_kit3.buildSignatureBytes)(signatures)]);
}
function getSignatureBytes({
  authenticatorData,
  clientDataFields,
  r,
  s
}) {
  const encodeUint256 = (x) => x.toString(16).padStart(64, "0");
  const byteSize = (data) => 32 * (Math.ceil(data.length / 32) + 1);
  const encodeBytes = (data) => `${encodeUint256(data.length)}${(0, import_viem4.toHex)(data).slice(2)}`.padEnd(byteSize(data) * 2, "0");
  const authenticatorDataOffset = 32 * 4;
  const clientDataFieldsOffset = authenticatorDataOffset + byteSize(authenticatorData);
  return "0x" + encodeUint256(authenticatorDataOffset) + encodeUint256(clientDataFieldsOffset) + encodeUint256(r) + encodeUint256(s) + encodeBytes(authenticatorData) + encodeBytes(new TextEncoder().encode(clientDataFields));
}

// src/packs/safe-4337/utils/userOperations.ts
var import_viem5 = require("viem");
var import_types_kit = require("@safe-global/types-kit");
function encodeExecuteUserOpCallData(transaction) {
  return (0, import_viem5.encodeFunctionData)({
    abi: ABI,
    functionName: "executeUserOp",
    args: [
      transaction.to,
      BigInt(transaction.value),
      transaction.data,
      transaction.operation || import_types_kit.OperationType.Call
    ]
  });
}
async function getCallData(protocolKit, transactions, paymasterOptions, amountToApprove) {
  if (amountToApprove) {
    const approveToPaymasterTransaction = {
      to: paymasterOptions.paymasterTokenAddress,
      data: (0, import_viem5.encodeFunctionData)({
        abi: ABI,
        functionName: "approve",
        args: [paymasterOptions.paymasterAddress, amountToApprove]
      }),
      value: "0",
      operation: import_types_kit.OperationType.Call
      // Call for approve
    };
    transactions.push(approveToPaymasterTransaction);
  }
  const isBatch = transactions.length > 1;
  const multiSendAddress = protocolKit.getMultiSendAddress();
  const callData = isBatch ? encodeExecuteUserOpCallData({
    to: multiSendAddress,
    value: "0",
    data: encodeMultiSendCallData(transactions),
    operation: import_types_kit.OperationType.DelegateCall
  }) : encodeExecuteUserOpCallData(transactions[0]);
  return callData;
}
function unpackInitCode(initCode) {
  const initCodeBytes = (0, import_viem5.hexToBytes)(initCode);
  return initCodeBytes.length > 0 ? {
    factory: (0, import_viem5.getAddress)((0, import_viem5.sliceHex)(initCode, 0, 20)),
    factoryData: (0, import_viem5.sliceHex)(initCode, 20)
  } : {};
}
async function createUserOperation(protocolKit, transactions, {
  amountToApprove,
  entryPoint,
  paymasterOptions,
  customNonce
}) {
  const safeAddress = await protocolKit.getAddress();
  const nonce = customNonce || await getSafeNonceFromEntrypoint(protocolKit, safeAddress, entryPoint);
  const isSafeDeployed = await protocolKit.isSafeDeployed();
  const paymasterAndData = paymasterOptions && "paymasterAddress" in paymasterOptions ? paymasterOptions.paymasterAddress : "0x";
  const callData = await getCallData(
    protocolKit,
    transactions,
    paymasterOptions,
    amountToApprove
  );
  const initCode = isSafeDeployed ? "0x" : await protocolKit.getInitCode();
  if (isEntryPointV6(entryPoint)) {
    return {
      sender: safeAddress,
      nonce: nonce.toString(),
      initCode,
      callData,
      callGasLimit: 1n,
      verificationGasLimit: 1n,
      preVerificationGas: 1n,
      maxFeePerGas: 1n,
      maxPriorityFeePerGas: 1n,
      paymasterAndData,
      signature: "0x"
    };
  }
  return {
    sender: safeAddress,
    nonce: nonce.toString(),
    ...unpackInitCode(initCode),
    callData,
    callGasLimit: 1n,
    verificationGasLimit: 1n,
    preVerificationGas: 1n,
    maxFeePerGas: 1n,
    maxPriorityFeePerGas: 1n,
    paymaster: paymasterAndData,
    paymasterData: "0x",
    paymasterVerificationGasLimit: void 0,
    paymasterPostOpGasLimit: void 0,
    signature: "0x"
  };
}
function userOperationToHexValues(userOperation, entryPointAddress) {
  const userOpV07 = userOperation;
  const userOperationWithHexValues = {
    ...userOperation,
    nonce: (0, import_viem5.toHex)(BigInt(userOperation.nonce)),
    callGasLimit: (0, import_viem5.toHex)(userOperation.callGasLimit),
    verificationGasLimit: (0, import_viem5.toHex)(userOperation.verificationGasLimit),
    preVerificationGas: (0, import_viem5.toHex)(userOperation.preVerificationGas),
    maxFeePerGas: (0, import_viem5.toHex)(userOperation.maxFeePerGas),
    maxPriorityFeePerGas: (0, import_viem5.toHex)(userOperation.maxPriorityFeePerGas),
    ...isEntryPointV7(entryPointAddress) ? {
      paymaster: userOpV07.paymaster !== "0x" ? userOpV07.paymaster : null,
      paymasterData: userOpV07.paymasterData !== "0x" ? userOpV07.paymasterData : null,
      paymasterVerificationGasLimit: userOpV07.paymasterVerificationGasLimit ? (0, import_viem5.toHex)(userOpV07.paymasterVerificationGasLimit) : null,
      paymasterPostOpGasLimit: userOpV07.paymasterPostOpGasLimit ? (0, import_viem5.toHex)(userOpV07.paymasterPostOpGasLimit) : null
    } : {}
  };
  return userOperationWithHexValues;
}

// src/packs/safe-4337/utils/getRelayKitVersion.ts
var getRelayKitVersion = () => "4.0.0";

// src/packs/safe-4337/utils/encodeNonce.ts
var import_viem6 = require("viem");
function encodeNonce(args) {
  const key = BigInt((0, import_viem6.toHex)(args.key, { size: 24 }));
  const sequence = BigInt((0, import_viem6.toHex)(args.sequence, { size: 8 }));
  return (key << BigInt(64)) + sequence;
}

// src/packs/safe-4337/utils/index.ts
function createBundlerClient(bundlerUrl) {
  const provider = (0, import_viem7.createPublicClient)({
    transport: (0, import_viem7.http)(bundlerUrl),
    rpcSchema: (0, import_viem7.rpcSchema)()
  });
  return provider;
}
function encodeMultiSendCallData(transactions) {
  return (0, import_viem7.encodeFunctionData)({
    abi: ABI,
    functionName: "multiSend",
    args: [
      (0, import_protocol_kit4.encodeMultiSendData)(
        transactions.map((tx) => ({ ...tx, operation: tx.operation ?? import_types_kit2.OperationType.Call }))
      )
    ]
  });
}

// src/packs/safe-4337/SafeOperationFactory.ts
var SafeOperationFactory = class {
  /**
   * Creates a new SafeOperation with proper validation
   * @param userOperation - The base user operation
   * @param options - Configuration options
   * @returns Validated SafeOperation instance
   */
  static createSafeOperation(userOperation, options) {
    if (isEntryPointV6(options.entryPoint)) {
      return new SafeOperationV06_default(userOperation, options);
    }
    return new SafeOperationV07_default(userOperation, options);
  }
};
var SafeOperationFactory_default = SafeOperationFactory;

// src/packs/safe-4337/estimators/pimlico/PimlicoFeeEstimator.ts
var PimlicoFeeEstimator = class {
  async preEstimateUserOperationGas({
    bundlerUrl,
    userOperation,
    entryPoint,
    paymasterOptions
  }) {
    const bundlerClient = createBundlerClient(bundlerUrl);
    const feeData = await this.#getUserOperationGasPrices(bundlerClient);
    const chainId = await this.#getChainId(bundlerClient);
    let paymasterStubData = {};
    if (paymasterOptions) {
      const paymasterClient = createBundlerClient(
        paymasterOptions.paymasterUrl
      );
      const context = "paymasterTokenAddress" in paymasterOptions ? {
        token: paymasterOptions.paymasterTokenAddress
      } : void 0;
      paymasterStubData = await paymasterClient.request({
        method: "pm_getPaymasterStubData" /* GET_PAYMASTER_STUB_DATA */,
        params: [userOperationToHexValues(userOperation, entryPoint), entryPoint, chainId, context]
      });
    }
    return {
      ...feeData,
      ...paymasterStubData
    };
  }
  async postEstimateUserOperationGas({
    userOperation,
    entryPoint,
    paymasterOptions
  }) {
    if (!paymasterOptions) return {};
    const paymasterClient = createBundlerClient(
      paymasterOptions.paymasterUrl
    );
    if (paymasterOptions.isSponsored) {
      const params = [
        userOperationToHexValues(userOperation, entryPoint),
        entryPoint
      ];
      if (paymasterOptions.sponsorshipPolicyId) {
        params.push({
          sponsorshipPolicyId: paymasterOptions.sponsorshipPolicyId
        });
      }
      const sponsoredData = await paymasterClient.request({
        method: "pm_sponsorUserOperation" /* SPONSOR_USER_OPERATION */,
        params
      });
      return sponsoredData;
    }
    const chainId = await this.#getChainId(paymasterClient);
    const erc20PaymasterData = await paymasterClient.request({
      method: "pm_getPaymasterData" /* GET_PAYMASTER_DATA */,
      params: [
        userOperationToHexValues(userOperation, entryPoint),
        entryPoint,
        chainId,
        { token: paymasterOptions.paymasterTokenAddress }
      ]
    });
    return erc20PaymasterData;
  }
  async #getUserOperationGasPrices(client) {
    const feeData = await client.request({
      method: "pimlico_getUserOperationGasPrice" /* GET_USER_OPERATION_GAS_PRICE */
    });
    const {
      fast: { maxFeePerGas, maxPriorityFeePerGas }
    } = feeData;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  async #getChainId(client) {
    const chainId = await client.request({ 
      method: "eth_chainId",
      id: 1,
      jsonrpc: "2.0",
      params: []
    });
    return chainId;
  }
};

// src/packs/safe-4337/Safe4337Pack.ts
var MAX_ERC20_AMOUNT_TO_APPROVE = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn;
var EQ_OR_GT_1_4_1 = ">=1.4.1";
var Safe4337Pack = class _Safe4337Pack extends RelayKitBasePack {
  #BUNDLER_URL;
  #ENTRYPOINT_ADDRESS;
  #SAFE_4337_MODULE_ADDRESS = "0x";
  #SAFE_WEBAUTHN_SHARED_SIGNER_ADDRESS = "0x";
  #bundlerClient;
  #chainId;
  #paymasterOptions;
  #onchainIdentifier = "";
  /**
   * Creates an instance of the Safe4337Pack.
   *
   * @param {Safe4337Options} options - The initialization parameters.
   */
  constructor({
    protocolKit,
    bundlerClient,
    bundlerUrl,
    chainId,
    paymasterOptions,
    entryPointAddress,
    safe4337ModuleAddress,
    safeWebAuthnSharedSignerAddress,
    onchainAnalytics
  }) {
    super(protocolKit);
    this.#BUNDLER_URL = bundlerUrl;
    this.#bundlerClient = bundlerClient;
    this.#chainId = chainId;
    this.#paymasterOptions = paymasterOptions;
    this.#ENTRYPOINT_ADDRESS = entryPointAddress;
    this.#SAFE_4337_MODULE_ADDRESS = safe4337ModuleAddress;
    this.#SAFE_WEBAUTHN_SHARED_SIGNER_ADDRESS = safeWebAuthnSharedSignerAddress || "0x";
    if (onchainAnalytics?.project) {
      const { project, platform } = onchainAnalytics;
      this.#onchainIdentifier = (0, import_protocol_kit5.generateOnChainIdentifier)({
        project,
        platform,
        tool: "relay-kit",
        toolVersion: getRelayKitVersion()
      });
    }
  }
  /**
   * Initializes a Safe4337Pack class.
   * This method creates the protocolKit instance based on the input parameters.
   * When the Safe address is provided, it will use the existing Safe.
   * When the Safe address is not provided, it will use the predictedSafe feature with the provided owners and threshold.
   * It will use the correct contract addresses for the fallbackHandler and the module and will add the data to enable the 4337 module.
   *
   * @param {Safe4337InitOptions} initOptions - The initialization parameters.
   * @return {Promise<Safe4337Pack>} The Promise object that will be resolved into an instance of Safe4337Pack.
   */
  static async init(initOptions) {
    const {
      provider,
      signer,
      options,
      bundlerUrl,
      customContracts,
      paymasterOptions,
      onchainAnalytics
    } = initOptions;
    let protocolKit;
    const bundlerClient = createBundlerClient(bundlerUrl);
    const chainId = await bundlerClient.request({ 
      method: "eth_chainId",
      id: 1,
      jsonrpc: "2.0",
      params: []
     });
    let safeModulesSetupAddress = customContracts?.safeModulesSetupAddress;
    const network = parseInt(chainId, 16).toString();
    const safeModulesVersion = initOptions.safeModulesVersion || DEFAULT_SAFE_MODULES_VERSION;
    if (!safeModulesSetupAddress) {
      const safeModuleSetupDeployment = (0, import_safe_modules_deployments.getSafeModuleSetupDeployment)({
        released: true,
        version: safeModulesVersion,
        network
      });
      safeModulesSetupAddress = safeModuleSetupDeployment?.networkAddresses[network];
    }
    let safe4337ModuleAddress = customContracts?.safe4337ModuleAddress;
    if (!safe4337ModuleAddress) {
      const safe4337ModuleDeployment = (0, import_safe_modules_deployments.getSafe4337ModuleDeployment)({
        released: true,
        version: safeModulesVersion,
        network
      });
      safe4337ModuleAddress = safe4337ModuleDeployment?.networkAddresses[network];
    }
    if (!safeModulesSetupAddress || !safe4337ModuleAddress) {
      throw new Error(
        `Safe4337Module and/or SafeModuleSetup not available for chain ${network} and modules version ${safeModulesVersion}`
      );
    }
    let safeWebAuthnSharedSignerAddress = customContracts?.safeWebAuthnSharedSignerAddress;
    if ("safeAddress" in options) {
      protocolKit = await import_protocol_kit5.default.init({
        provider,
        signer,
        safeAddress: options.safeAddress
      });
      const safeVersion = protocolKit.getContractVersion();
      const isSafeVersion4337Compatible = (0, import_satisfies.default)(safeVersion, EQ_OR_GT_1_4_1);
      if (!isSafeVersion4337Compatible) {
        throw new Error(
          `Incompatibility detected: The current Safe Account version (${safeVersion}) is not supported. EIP-4337 requires the Safe to use at least v1.4.1.`
        );
      }
      const safeModules = await protocolKit.getModules();
      const is4337ModulePresent = safeModules.some((module2) => module2 === safe4337ModuleAddress);
      if (!is4337ModulePresent) {
        throw new Error(
          `Incompatibility detected: The EIP-4337 module is not enabled in the provided Safe Account. Enable this module (address: ${safe4337ModuleAddress}) to add compatibility.`
        );
      }
      const safeFallbackhandler = await protocolKit.getFallbackHandler();
      const is4337FallbackhandlerPresent = safeFallbackhandler === safe4337ModuleAddress;
      if (!is4337FallbackhandlerPresent) {
        throw new Error(
          `Incompatibility detected: The EIP-4337 fallbackhandler is not attached to the Safe Account. Attach this fallbackhandler (address: ${safe4337ModuleAddress}) to ensure compatibility.`
        );
      }
    } else {
      if (!options.owners || !options.threshold) {
        throw new Error("Owners and threshold are required to deploy a new Safe");
      }
      const safeVersion = options.safeVersion || DEFAULT_SAFE_VERSION;
      const enable4337ModuleTransaction = {
        to: safeModulesSetupAddress,
        value: "0",
        data: (0, import_viem9.encodeFunctionData)({
          abi: ABI,
          functionName: "enableModules",
          args: [[safe4337ModuleAddress]]
        }),
        operation: import_types_kit3.OperationType.DelegateCall
        // DelegateCall required for enabling the 4337 module
      };
      const setupTransactions = [enable4337ModuleTransaction];
      const isApproveTransactionRequired = !!paymasterOptions && !paymasterOptions.isSponsored && !!paymasterOptions.paymasterTokenAddress;
      if (isApproveTransactionRequired && !paymasterOptions.skipApproveTransaction) {
        const { paymasterAddress, amountToApprove = MAX_ERC20_AMOUNT_TO_APPROVE } = paymasterOptions;
        const approveToPaymasterTransaction = {
          to: paymasterOptions.paymasterTokenAddress,
          data: (0, import_viem9.encodeFunctionData)({
            abi: ABI,
            functionName: "approve",
            args: [paymasterAddress, amountToApprove]
          }),
          value: "0",
          operation: import_types_kit3.OperationType.Call
          // Call for approve
        };
        setupTransactions.push(approveToPaymasterTransaction);
      }
      const safeProvider = await import_protocol_kit5.SafeProvider.init({ provider, signer, safeVersion });
      const isPasskeySigner = await safeProvider.isPasskeySigner();
      if (isPasskeySigner) {
        if (!safeWebAuthnSharedSignerAddress) {
          const safeWebAuthnSharedSignerDeployment = (0, import_safe_modules_deployments.getSafeWebAuthnShareSignerDeployment)({
            released: true,
            version: "0.2.1",
            network
          });
          safeWebAuthnSharedSignerAddress = safeWebAuthnSharedSignerDeployment?.networkAddresses[network];
        }
        if (!safeWebAuthnSharedSignerAddress) {
          throw new Error(`safeWebAuthnSharedSignerAddress not available for chain ${network}`);
        }
        const passkeySigner = await safeProvider.getExternalSigner();
        const checkSummedOwners = options.owners.map((owner) => (0, import_viem8.getAddress)(owner));
        const checkSummedSignerAddress = (0, import_viem8.getAddress)(safeWebAuthnSharedSignerAddress);
        if (!checkSummedOwners.includes(checkSummedSignerAddress)) {
          options.owners.push(checkSummedSignerAddress);
        }
        const sharedSignerTransaction = {
          to: safeWebAuthnSharedSignerAddress,
          value: "0",
          data: passkeySigner.encodeConfigure(),
          operation: import_types_kit3.OperationType.DelegateCall
          // DelegateCall required into the SafeWebAuthnSharedSigner instance in order for it to set its configuration.
        };
        setupTransactions.push(sharedSignerTransaction);
      }
      let deploymentTo;
      let deploymentData;
      const isBatch = setupTransactions.length > 1;
      if (isBatch) {
        const multiSendContract = await (0, import_protocol_kit5.getMultiSendContract)({
          safeProvider,
          safeVersion,
          deploymentType: options.deploymentType || void 0
        });
        const batchData = (0, import_viem9.encodeFunctionData)({
          abi: ABI,
          functionName: "multiSend",
          args: [(0, import_protocol_kit5.encodeMultiSendData)(setupTransactions)]
        });
        deploymentTo = multiSendContract.getAddress();
        deploymentData = batchData;
      } else {
        deploymentTo = enable4337ModuleTransaction.to;
        deploymentData = enable4337ModuleTransaction.data;
      }
      protocolKit = await import_protocol_kit5.default.init({
        provider,
        signer,
        predictedSafe: {
          safeDeploymentConfig: {
            safeVersion,
            saltNonce: options.saltNonce || void 0,
            deploymentType: options.deploymentType || void 0
          },
          safeAccountConfig: {
            owners: options.owners,
            threshold: options.threshold,
            to: deploymentTo,
            data: deploymentData,
            fallbackHandler: safe4337ModuleAddress,
            paymentToken: import_viem9.zeroAddress,
            payment: 0,
            paymentReceiver: import_viem9.zeroAddress
          }
        },
        onchainAnalytics
      });
    }
    let selectedEntryPoint;
    if (customContracts?.entryPointAddress) {
      const requiredSafeModulesVersion = entryPointToSafeModules(customContracts?.entryPointAddress);
      if (!(0, import_satisfies.default)(safeModulesVersion, requiredSafeModulesVersion))
        throw new Error(
          `The selected entrypoint ${customContracts?.entryPointAddress} is not compatible with version ${safeModulesVersion} of Safe modules`
        );
      selectedEntryPoint = customContracts?.entryPointAddress;
    } else {
      const supportedEntryPoints = await bundlerClient.request({
        method: "eth_supportedEntryPoints" /* SUPPORTED_ENTRY_POINTS */
      });
      if (!supportedEntryPoints.length) {
        throw new Error("No entrypoint provided or available through the bundler");
      }
      selectedEntryPoint = supportedEntryPoints.find((entryPoint) => {
        const requiredSafeModulesVersion = entryPointToSafeModules(entryPoint);
        return (0, import_satisfies.default)(safeModulesVersion, requiredSafeModulesVersion);
      });
      if (!selectedEntryPoint) {
        throw new Error(
          `Incompatibility detected: None of the entrypoints provided by the bundler is compatible with the Safe modules version ${safeModulesVersion}`
        );
      }
    }
    return new _Safe4337Pack({
      chainId: BigInt(chainId),
      protocolKit,
      bundlerClient,
      paymasterOptions,
      bundlerUrl,
      entryPointAddress: selectedEntryPoint,
      safe4337ModuleAddress,
      safeWebAuthnSharedSignerAddress,
      onchainAnalytics
    });
  }
  /**
   * Estimates gas for the SafeOperation.
   *
   * @param {EstimateFeeProps} props - The parameters for the gas estimation.
   * @param {BaseSafeOperation} props.safeOperation - The SafeOperation to estimate the gas.
   * @param {IFeeEstimator} props.feeEstimator - The function to estimate the gas.
   * @return {Promise<BaseSafeOperation>} The Promise object that will be resolved into the gas estimation.
   */
  async getEstimateFee({
    safeOperation,
    feeEstimator = new PimlicoFeeEstimator()
  }) {
    const threshold = await this.protocolKit.getThreshold();
    const preEstimationData = await feeEstimator?.preEstimateUserOperationGas?.({
      bundlerUrl: this.#BUNDLER_URL,
      entryPoint: this.#ENTRYPOINT_ADDRESS,
      userOperation: safeOperation.getUserOperation(),
      paymasterOptions: this.#paymasterOptions
    });
    if (preEstimationData) {
      safeOperation.addEstimations(preEstimationData);
    }
    const estimateUserOperationGas = await this.#bundlerClient.request({
      method: "eth_estimateUserOperationGas" /* ESTIMATE_USER_OPERATION_GAS */,
      params: [
        {
          ...userOperationToHexValues(safeOperation.getUserOperation(), this.#ENTRYPOINT_ADDRESS),
          signature: getDummySignature(this.#SAFE_WEBAUTHN_SHARED_SIGNER_ADDRESS, threshold)
        },
        this.#ENTRYPOINT_ADDRESS
      ]
    });
    if (estimateUserOperationGas) {
      safeOperation.addEstimations(estimateUserOperationGas);
    }
    const postEstimationData = await feeEstimator?.postEstimateUserOperationGas?.({
      bundlerUrl: this.#BUNDLER_URL,
      entryPoint: this.#ENTRYPOINT_ADDRESS,
      userOperation: {
        ...safeOperation.getUserOperation(),
        signature: getDummySignature(this.#SAFE_WEBAUTHN_SHARED_SIGNER_ADDRESS, threshold)
      },
      paymasterOptions: this.#paymasterOptions
    });
    if (postEstimationData) {
      safeOperation.addEstimations(postEstimationData);
    }
    return safeOperation;
  }
  /**
   * Creates a relayed transaction based on the provided parameters.
   *
   * @param {MetaTransactionData[]} transactions - The transactions to batch in a SafeOperation.
   * @param options - Optional configuration options for the transaction creation.
   * @return {Promise<BaseSafeOperation>} The Promise object will resolve a SafeOperation.
   */
  async createTransaction({
    transactions,
    options = {}
  }) {
    const { amountToApprove, validUntil, validAfter, feeEstimator, customNonce } = options;
    const userOperation = await createUserOperation(this.protocolKit, transactions, {
      entryPoint: this.#ENTRYPOINT_ADDRESS,
      paymasterOptions: this.#paymasterOptions,
      amountToApprove,
      customNonce
    });
    if (this.#onchainIdentifier) {
      userOperation.callData += this.#onchainIdentifier;
    }
    const safeOperation = SafeOperationFactory_default.createSafeOperation(userOperation, {
      chainId: this.#chainId,
      moduleAddress: this.#SAFE_4337_MODULE_ADDRESS,
      entryPoint: this.#ENTRYPOINT_ADDRESS,
      validUntil,
      validAfter
    });
    return await this.getEstimateFee({
      safeOperation,
      feeEstimator
    });
  }
  /**
   * Converts a SafeOperationResponse to an SafeOperation.
   *
   * @param {SafeOperationResponse} safeOperationResponse - The SafeOperationResponse to convert to SafeOperation
   * @returns {BaseSafeOperation} - The SafeOperation object
   */
  #toSafeOperation(safeOperationResponse) {
    const { validUntil, validAfter, userOperation } = safeOperationResponse;
    const paymaster = userOperation?.paymaster || "0x";
    const paymasterData = userOperation?.paymasterData || "0x";
    const safeOperation = SafeOperationFactory_default.createSafeOperation(
      {
        sender: userOperation?.sender || "0x",
        nonce: userOperation?.nonce || "0",
        initCode: userOperation?.initCode || "",
        callData: userOperation?.callData || "",
        callGasLimit: BigInt(userOperation?.callGasLimit || 0n),
        verificationGasLimit: BigInt(userOperation?.verificationGasLimit || 0),
        preVerificationGas: BigInt(userOperation?.preVerificationGas || 0),
        maxFeePerGas: BigInt(userOperation?.maxFeePerGas || 0),
        maxPriorityFeePerGas: BigInt(userOperation?.maxPriorityFeePerGas || 0),
        paymasterAndData: (0, import_viem9.concat)([paymaster, paymasterData]),
        signature: safeOperationResponse.preparedSignature || "0x"
      },
      {
        chainId: this.#chainId,
        moduleAddress: this.#SAFE_4337_MODULE_ADDRESS,
        entryPoint: userOperation?.entryPoint || this.#ENTRYPOINT_ADDRESS,
        validAfter: this.#timestamp(validAfter),
        validUntil: this.#timestamp(validUntil)
      }
    );
    if (safeOperationResponse.confirmations) {
      safeOperationResponse.confirmations.forEach((confirmation) => {
        safeOperation.addSignature(new import_protocol_kit5.EthSafeSignature(confirmation.owner, confirmation.signature));
      });
    }
    return safeOperation;
  }
  /**
   *
   * @param date An ISO string date
   * @returns The timestamp in seconds to send to the bundler
   */
  #timestamp(date) {
    return date ? new Date(date).getTime() / 1e3 : void 0;
  }
  /**
   * Signs a safe operation.
   *
   * @param {BaseSafeOperation | SafeOperationResponse} safeOperation - The SafeOperation to sign. It can be:
   * - A response from the API (Tx Service)
   * - An instance of SafeOperation
   * @param {SigningMethod} signingMethod - The signing method to use.
   * @return {Promise<BaseSafeOperation>} The Promise object will resolve to the signed SafeOperation.
   */
  async signSafeOperation(safeOperation, signingMethod = import_types_kit3.SigningMethod.ETH_SIGN_TYPED_DATA_V4) {
    let safeOp;
    if (safeOperation instanceof BaseSafeOperation_default) {
      safeOp = safeOperation;
    } else {
      safeOp = this.#toSafeOperation(safeOperation);
    }
    const safeProvider = this.protocolKit.getSafeProvider();
    const signerAddress = await safeProvider.getSignerAddress();
    const isPasskeySigner = await safeProvider.isPasskeySigner();
    if (!signerAddress) {
      throw new Error("There is no signer address available to sign the SafeOperation");
    }
    const isOwner = await this.protocolKit.isOwner(signerAddress);
    const isSafeDeployed = await this.protocolKit.isSafeDeployed();
    if (!isOwner && isSafeDeployed || !isSafeDeployed && !isPasskeySigner && !isOwner) {
      throw new Error("UserOperations can only be signed by Safe owners");
    }
    let safeSignature;
    if (isPasskeySigner) {
      const safeOpHash = safeOp.getHash();
      if (!isSafeDeployed) {
        const passkeySignature = await this.protocolKit.signHash(safeOpHash);
        safeSignature = new import_protocol_kit5.EthSafeSignature(
          this.#SAFE_WEBAUTHN_SHARED_SIGNER_ADDRESS,
          passkeySignature.data,
          true
        );
      } else {
        safeSignature = await this.protocolKit.signHash(safeOpHash);
      }
    } else {
      if ([
        import_types_kit3.SigningMethod.ETH_SIGN_TYPED_DATA_V4,
        import_types_kit3.SigningMethod.ETH_SIGN_TYPED_DATA_V3,
        import_types_kit3.SigningMethod.ETH_SIGN_TYPED_DATA
      ].includes(signingMethod)) {
        const signer = await safeProvider.getExternalSigner();
        if (!signer) {
          throw new Error("No signer found");
        }
        const signerAddress2 = signer.account.address;
        const safeOperation2 = safeOp.getSafeOperation();
        const signature = await signer.signTypedData({
          domain: {
            chainId: Number(this.#chainId),
            verifyingContract: this.#SAFE_4337_MODULE_ADDRESS
          },
          types: safeOp.getEIP712Type(),
          message: {
            ...safeOperation2,
            nonce: BigInt(safeOperation2.nonce),
            validAfter: (0, import_viem8.toHex)(safeOperation2.validAfter),
            validUntil: (0, import_viem8.toHex)(safeOperation2.validUntil),
            maxFeePerGas: (0, import_viem8.toHex)(safeOperation2.maxFeePerGas),
            maxPriorityFeePerGas: (0, import_viem8.toHex)(safeOperation2.maxPriorityFeePerGas)
          },
          primaryType: "SafeOp"
        });
        safeSignature = new import_protocol_kit5.EthSafeSignature(signerAddress2, signature);
      } else {
        const safeOpHash = safeOp.getHash();
        safeSignature = await this.protocolKit.signHash(safeOpHash);
      }
    }
    safeOp.addSignature(safeSignature);
    return safeOp;
  }
  /**
   * Executes the relay transaction.
   *
   * @param {Safe4337ExecutableProps} props - The parameters for the transaction execution.
   * @param {BaseSafeOperation | SafeOperationResponse} props.executable - The SafeOperation to execute. It can be:
   * - A response from the API (Tx Service)
   * - An instance of SafeOperation
   * @return {Promise<string>} The user operation hash.
   */
  async executeTransaction({ executable }) {
    let safeOperation;
    if (executable instanceof BaseSafeOperation_default) {
      safeOperation = executable;
    } else {
      safeOperation = this.#toSafeOperation(executable);
    }
    return this.#bundlerClient.request({
      method: "eth_sendUserOperation" /* SEND_USER_OPERATION */,
      params: [
        userOperationToHexValues(safeOperation.getUserOperation(), this.#ENTRYPOINT_ADDRESS),
        this.#ENTRYPOINT_ADDRESS
      ]
    });
  }
  /**
   * Return a UserOperation based on a hash (userOpHash) returned by eth_sendUserOperation
   *
   * @param {string} userOpHash - The hash of the user operation to fetch. Returned from the #sendUserOperation method
   * @returns {UserOperation} - null in case the UserOperation is not yet included in a block, or a full UserOperation, with the addition of entryPoint, blockNumber, blockHash and transactionHash
   */
  async getUserOperationByHash(userOpHash) {
    return this.#bundlerClient.request({
      method: "eth_getUserOperationByHash" /* GET_USER_OPERATION_BY_HASH */,
      params: [userOpHash]
    });
  }
  /**
   * Return a UserOperation receipt based on a hash (userOpHash) returned by eth_sendUserOperation
   *
   * @param {string} userOpHash - The hash of the user operation to fetch. Returned from the #sendUserOperation method
   * @returns {UserOperationReceipt} - null in case the UserOperation is not yet included in a block, or UserOperationReceipt object
   */
  async getUserOperationReceipt(userOpHash) {
    return this.#bundlerClient.request({
      method: "eth_getUserOperationReceipt" /* GET_USER_OPERATION_RECEIPT */,
      params: [userOpHash]
    });
  }
  /**
   * Returns an array of the entryPoint addresses supported by the client.
   * The first element of the array SHOULD be the entryPoint addressed preferred by the client.
   *
   * @returns {string[]} - The supported entry points.
   */
  async getSupportedEntryPoints() {
    return this.#bundlerClient.request({
      method: "eth_supportedEntryPoints" /* SUPPORTED_ENTRY_POINTS */
    });
  }
  /**
   * Returns EIP-155 Chain ID.
   *
   * @returns {string} - The chain id.
   */
  async getChainId() {
    return this.#bundlerClient.request({ 
      method: "eth_chainId",
      id: 1,
      jsonrpc: "2.0",
      params: []
     });
  }
  getOnchainIdentifier() {
    return this.#onchainIdentifier;
  }
};
