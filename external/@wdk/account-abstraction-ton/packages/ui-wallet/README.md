<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="max-width: 500px" src="https://d3a2dpnnrypp5h.cloudfront.net/bridge-app/lz.png"/>
  </a>
</p>

<h1 align="center">@layerzerolabs/ui-wallet</h1>

<!-- The badges section -->
<p align="center">
  <!-- Shields.io NPM published package version -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet"><img alt="NPM Version" src="https://img.shields.io/npm/v/@layerzerolabs/ui-wallet"/></a>
  <!-- Shields.io NPM downloads -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet"><img alt="Downloads" src="https://img.shields.io/npm/dm/@layerzerolabs/ui-wallet"/></a>
  <!-- Shields.io vulnerabilities -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet"><img alt="Snyk Vulnerabilities for npm package version" src="https://img.shields.io/snyk/vulnerabilities/npm/@layerzerolabs/ui-wallet"/></a>
  <!-- Shields.io license badge -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet"><img alt="NPM License" src="https://img.shields.io/npm/l/@layerzerolabs/ui-wallet"/></a>
</p>

## Installation

```bash
yarn add @layerzerolabs/ui-wallet

pnpm add @layerzerolabs/ui-wallet

npm install @layerzerolabs/ui-wallet
```

## Usage

This package's primary exports are the abstract class `AbstractWallet` and helper function `assertWallet`.

### AbstractWallet

The abstract class `AbstractWallet` implements the `Wallet` interface.

```ts
interface Wallet<Signer> {
  isAvailable: boolean;
  isConnected: boolean;
  isConnecting: boolean;
  isSwitchingChain: boolean;
  // eg MetaMask
  type: string;
  address?: string;
  publicKey?: string;
  chainKey?: string | ChainKey;
  readonly chainType: ChainType;
  // native chain id eg: evm chain id
  nativeChainId?: number | string;
  signer?: Signer;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  autoConnect(): Promise<void>;
  switchChain(endpointId: number): Promise<void>;
  switchChain(chainKey: string): Promise<void>;
  getChainKey(): Promise<ChainKey | string | undefined>;
  getNativeChainId(): Promise<number>;
  getAddress(): Promise<string>;
}
```

This interface is used throughout our LayerZero application ecosystem to abstract the wallet specific implementation details from application code. See [@layerzerolabs/ui-wallet-evm](https://github.com/LayerZero-Labs/ui-monorepo/tree/main/packages/ui-wallet-evm), [@layerzerolabs/ui-wallet-aptos](https://github.com/LayerZero-Labs/ui-monorepo/tree/main/packages/ui-wallet-aptos), and [@layerzerolabs/ui-wallet-solana](https://github.com/LayerZero-Labs/ui-monorepo/tree/main/packages/ui-wallet-solana) for already implemented wallet abstractions or for examples on how to add your own.

### assertWallet

This helper function is provided to help verify that a connected wallet has matching configuration at a given time. An example might be checking that the wallet still has the same chain and address just before executing a transaction.

```ts
const wallet = walletStore.evm;

await assertWallet(wallet, {chainKey: 'ethereum', address: input.srcAddress});
// or
await assertWallet(wallet, {chainId: input.srcChainId, address: input.srcAddress});
```
