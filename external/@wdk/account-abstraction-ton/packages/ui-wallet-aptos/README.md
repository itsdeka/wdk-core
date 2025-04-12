<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="max-width: 500px" src="https://d3a2dpnnrypp5h.cloudfront.net/bridge-app/lz.png"/>
  </a>
</p>

<h1 align="center">@layerzerolabs/ui-wallet-aptos</h1>

<!-- The badges section -->
<p align="center">
  <!-- Shields.io NPM published package version -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-aptos"><img alt="NPM Version" src="https://img.shields.io/npm/v/@layerzerolabs/ui-wallet-aptos"/></a>
  <!-- Shields.io NPM downloads -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-aptos"><img alt="Downloads" src="https://img.shields.io/npm/dm/@layerzerolabs/ui-wallet-aptos"/></a>
  <!-- Shields.io vulnerabilities -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-aptos"><img alt="Snyk Vulnerabilities for npm package version" src="https://img.shields.io/snyk/vulnerabilities/npm/@layerzerolabs/ui-wallet-aptos"/></a>
  <!-- Shields.io license badge -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-aptos"><img alt="NPM License" src="https://img.shields.io/npm/l/@layerzerolabs/ui-wallet-aptos"/></a>
</p>

## Installation

```bash
yarn add @layerzerolabs/ui-wallet-aptos

pnpm add @layerzerolabs/ui-wallet-aptos

npm install @layerzerolabs/ui-wallet-aptos
```

## Usage

This package provides the `AptosWallet` class which takes a `type` and an `adapter` and returns a [`Wallet`](https://github.com/LayerZero-Labs/ui-monorepo/tree/main/packages/ui-wallet) instance for Aptos interactions. We attempt to abstract the official [Aptos Wallet Adapter](https://github.com/aptos-labs/aptos-wallet-adapter) implementation. In our applications we use the officially supported adapter packages.

```ts
import {AptosWallet} from '@layerzerolabs/ui-wallet-aptos';
import {MartianWallet} from '@martianwallet/aptos-wallet-adapter';
import {PontemWallet} from '@pontem/wallet-adapter-plugin';
import {FewchaWallet} from 'fewcha-plugin-wallet-adapter';
import {PetraWallet} from 'petra-plugin-wallet-adapter';

const wallets = [
  new AptosWallet('Petra', new PetraWallet()),
  new AptosWallet('Fewcha', new FewchaWallet()),
  new AptosWallet('Pontem', new PontemWallet()),
  new AptosWallet('Martian', new MartianWallet()),
];

wallets.forEach((wallet) => walletStore.addWallet(wallet));
```
