<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="max-width: 500px" src="https://d3a2dpnnrypp5h.cloudfront.net/bridge-app/lz.png"/>
  </a>
</p>

<h1 align="center">@layerzerolabs/ui-wallet-solana</h1>

<!-- The badges section -->
<p align="center">
  <!-- Shields.io NPM published package version -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-solana"><img alt="NPM Version" src="https://img.shields.io/npm/v/@layerzerolabs/ui-wallet-solana"/></a>
  <!-- Shields.io NPM downloads -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-solana"><img alt="Downloads" src="https://img.shields.io/npm/dm/@layerzerolabs/ui-wallet-solana"/></a>
  <!-- Shields.io vulnerabilities -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-solana"><img alt="Snyk Vulnerabilities for npm package version" src="https://img.shields.io/snyk/vulnerabilities/npm/@layerzerolabs/ui-wallet-solana"/></a>
  <!-- Shields.io license badge -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-wallet-solana"><img alt="NPM License" src="https://img.shields.io/npm/l/@layerzerolabs/ui-wallet-solana"/></a>
</p>

## Installation

```bash
yarn add @layerzerolabs/ui-wallet-solana

pnpm add @layerzerolabs/ui-wallet-solana

npm install @layerzerolabs/ui-wallet-solana
```

## Usage

This package exports the `SolanaWallet` class to connect with Solana compatible [wallets adapters](https://github.com/solana-labs/wallet-adapter).

```ts
import {SolanaWallet} from '@layerzerolabs/ui-wallet-solana';
import {
  CoinbaseWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

const wallets = [
  new SolanaWallet('Phantom', new PhantomWalletAdapter()),
  new SolanaWallet('CoinBase', new CoinbaseWalletAdapter() as BaseSignerWalletAdapter),
  new SolanaWallet('Solflare', new SolflareWalletAdapter()),
];

wallets.forEach((wallet) => walletStore.addWallet(wallet));
```
