'use strict';

var uiCore = require('@layerzerolabs/ui-core');

// src/AbstractWallet.ts
var AbstractWallet = class {
  isConnected = false;
  isAvailable = false;
  isConnecting = false;
  isSwitchingChain = false;
  publicKey = void 0;
  address = void 0;
  nativeChainId = void 0;
  get autoConnectStorageKey() {
    return ["wallet", this.chainType, this.type, "autoconnect"].join(":");
  }
  get isAutoConnectEnabled() {
    if (typeof localStorage === "undefined")
      return false;
    return localStorage.getItem(this.autoConnectStorageKey) === "true";
  }
  set isAutoConnectEnabled(enabled) {
    if (typeof localStorage === "undefined")
      return;
    if (enabled) {
      localStorage.setItem(this.autoConnectStorageKey, "true");
    } else {
      localStorage.removeItem(this.autoConnectStorageKey);
    }
  }
  async getChainKey() {
    const nativeChainId = await this.getNativeChainId();
    return uiCore.tryGetNetworkByNativeChainId(this.chainType, nativeChainId)?.chainKey;
  }
};

// src/WalletError.ts
var WalletError = class extends Error {
};
var UserRejectedRequestError = class extends WalletError {
  name = "UserRejectedRequestError";
  shortMessage = "User rejected the request.";
};
var SwitchChainError = class extends WalletError {
  name = "SwitchChainError";
  shortMessage = "Failed to switch chain.";
};
var SyncWalletError = class extends WalletError {
  name = "SyncWalletError";
  shortMessage = "Failed to sync wallet.";
};
async function assertWallet(wallet, expected) {
  const [nativeChainId, address] = await Promise.all([
    wallet.getNativeChainId(),
    wallet.getAddress()
  ]);
  const expectedNetwork = uiCore.getNetwork(expected.chainKey);
  if (nativeChainId !== expectedNetwork.nativeChainId) {
    throw new Error("Invalid wallet chain");
  }
  if (address.toLowerCase() !== expected.address.toLowerCase()) {
    throw new Error("Invalid wallet address");
  }
}

exports.AbstractWallet = AbstractWallet;
exports.SwitchChainError = SwitchChainError;
exports.SyncWalletError = SyncWalletError;
exports.UserRejectedRequestError = UserRejectedRequestError;
exports.WalletError = WalletError;
exports.assertWallet = assertWallet;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map