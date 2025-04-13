'use strict';

var httpClient = require('redaxios');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var httpClient__default = /*#__PURE__*/_interopDefault(httpClient);

// src/client.ts
var MessageStatus = /* @__PURE__ */ ((MessageStatus2) => {
  MessageStatus2["INFLIGHT"] = "INFLIGHT";
  MessageStatus2["DELIVERED"] = "DELIVERED";
  MessageStatus2["FAILED"] = "FAILED";
  return MessageStatus2;
})(MessageStatus || {});
var URLS = {
  testnet: "https://api-testnet.layerzero-scan.com",
  mainnet: "https://api-mainnet.layerzero-scan.com",
  sandbox: "https://api-sandbox.layerzero-scan.com"
};
var ScanClient = class {
  constructor(config) {
    this.config = config;
    if (!config.mainnet && !config.testnet && !config.sandbox) {
      throw new Error("At least one stage must be enabled");
    }
    if (this.config.mainnet)
      this.clients.push(this.mainnet);
    if (this.config.testnet)
      this.clients.push(this.testnet);
    if (this.config.sandbox)
      this.clients.push(this.sandbox);
  }
  mainnet = httpClient__default.default.create({
    baseURL: URLS.mainnet
  });
  testnet = httpClient__default.default.create({
    baseURL: URLS.testnet
  });
  sandbox = httpClient__default.default.create({
    baseURL: URLS.sandbox
  });
  clients = [];
  getMessagesBySrcTxHash = async (srcTxHash) => {
    if (!srcTxHash)
      throw new Error("srcTxHash must be provided");
    const messages = await Promise.all(
      this.clients.map((client) => getMessagesBySrcTxHash(client, srcTxHash))
    );
    return messages.flatMap((m) => m.messages);
  };
  waitForMessageReceived = async ({ txHash: srcTxHash }, { signal, poolInterval = 3e3 }) => {
    if (!srcTxHash)
      throw new Error("Invalid transaction: txHash must be provided");
    const abortController = new AbortController();
    const abortSignal = abortController.signal;
    if (signal) {
      signal.addEventListener("abort", () => {
        abortController.abort(signal.reason);
      });
    }
    async function poll(client) {
      while (!abortSignal.aborted) {
        try {
          const { messages } = await getMessagesBySrcTxHash(client, srcTxHash);
          const message = messages[0];
          if (messages.length > 1) {
            throw new Error(`More than one message`, { cause: { messages } });
          } else if (message?.status === "FAILED" /* FAILED */) {
            throw new Error(`Message failed ${message.dstTxError}`, { cause: { message } });
          } else if (message?.status === "DELIVERED" /* DELIVERED */) {
            return message;
          }
        } catch {
        }
        await sleep(poolInterval);
      }
      throw new Error("Aborted", { cause: abortSignal.reason });
    }
    return Promise.race(this.clients.map((client) => poll(client))).finally(() => {
      abortController.abort();
    });
  };
};
async function getMessagesBySrcTxHash(httpClient2, srcTxHash) {
  const { data } = await httpClient2.get(`/tx/${srcTxHash}`);
  return data;
}
var sleep = (ms = 1e3) => new Promise((resolve) => setTimeout(resolve, ms));

exports.MessageStatus = MessageStatus;
exports.ScanClient = ScanClient;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=client.cjs.map