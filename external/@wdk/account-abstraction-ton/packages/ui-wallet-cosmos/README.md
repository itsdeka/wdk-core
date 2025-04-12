<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="max-width: 500px" src="https://d3a2dpnnrypp5h.cloudfront.net/bridge-app/lz.png"/>
  </a>
</p>

<h1 align="center">@layerzerolabs/ui-wallet-evm</h1>

<!-- The badges section -->
<p align="center">
  <!-- Shields.io NPM published package version -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-evm"><img alt="NPM Version" src="https://img.shields.io/npm/v/@layerzerolabs/ui-wallet-evm"/></a>
  <!-- Shields.io NPM downloads -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-evm"><img alt="Downloads" src="https://img.shields.io/npm/dm/@layerzerolabs/ui-wallet-evm"/></a>
  <!-- Shields.io vulnerabilities -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-evm"><img alt="Snyk Vulnerabilities for npm package version" src="https://img.shields.io/snyk/vulnerabilities/npm/@layerzerolabs/ui-wallet-evm"/></a>
  <!-- Shields.io license badge -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-evm"><img alt="NPM License" src="https://img.shields.io/npm/l/@layerzerolabs/ui-wallet-evm"/></a>
</p>

## Installation

```bash
yarn add @layerzerolabs/ui-wallet-evm

pnpm add @layerzerolabs/ui-wallet-evm

npm install @layerzerolabs/ui-wallet-evm
```

## Usage

In this package you'll find abstract classes for generic `EvmWallet`'s, generic `InjectedWallet`'s, and implementations of a variety of those `InjectedWallet`'s - MetaMask, CoinbaseWallet, etc. - and `WalletConnect`. These implementations are ready to use as is in your LayerZero dApp, simply import the wallets you'd like to support and assign them to your `walletStore`.

```ts
import {CoinbaseWallet, MetaMaskWallet, WalletConnect} from '@layerzerolabs/ui-wallet-evm';

const wallets = [
  new MetaMaskWallet(),
  new coinbaseWallet(),
  new WalletConnect({
    projectId: '10b5df65476df304efbb9a6b0c42f8b0',
    chains: chains,
    showQrModal: true,
  }),
];

wallets.forEach((wallet) => walletStore.addWallet(wallet));
```

To add your own `EvmWallet`, extend the abstract class and include a `provider`, implementation for `autoConnect`, and the `type`.
