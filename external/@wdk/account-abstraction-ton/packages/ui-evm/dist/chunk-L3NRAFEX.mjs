import { BaseProvider } from '@ethersproject/providers';

// src/providers/ProxyBaseProvider.ts
var ProxyBaseProvider = class extends BaseProvider {
  constructor(providerPromise) {
    super("any");
    this.providerPromise = providerPromise;
  }
  async detectNetwork() {
    const provider = await this.providerPromise;
    return provider.detectNetwork();
  }
  async perform(method, params) {
    const provider = await this.providerPromise;
    return provider.perform(method, params);
  }
};

// src/testing.ts
var TestingProxyProvider = class extends ProxyBaseProvider {
  async startFork() {
    const provider = await this.providerPromise;
    return provider.startFork();
  }
  async stopFork() {
    const provider = await this.providerPromise;
    return provider.stopFork();
  }
  async setBalance(address, amount) {
    const provider = await this.providerPromise;
    return provider.setBalance(address, amount);
  }
  async addBalance(address, amount) {
    const provider = await this.providerPromise;
    return provider.addBalance(address, amount);
  }
  async setErc20Balance(token, wallet, value) {
    const provider = await this.providerPromise;
    return provider.setErc20Balance(token, wallet, value);
  }
};

export { TestingProxyProvider };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-L3NRAFEX.mjs.map