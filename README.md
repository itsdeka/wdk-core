# @wdk/core

A powerful wallet development kit that provides a unified interface for interacting with multiple blockchains, including Ethereum, Arbitrum, Polygon, and TON. The kit supports account abstraction, token transfers, swaps, and bridging operations.

## Installation

```bash
npm install @wdk/core
```

## Usage

### Initialization

```typescript
import { WdkManager } from '@wdk/core';

// Create a new WDK manager instance
const wdk = new WdkManager(
  // Seed phrase (can be a single phrase or different phrases per chain)
  'your seed phrase here',
  // Account abstraction configuration
  {
    ethereum: {
      rpc: 'https://eth-mainnet.g.alchemy.com/v2/your-api-key',
      safe: {
        bundlerUrl: 'https://bundler.example.com',
        paymasterUrl: 'https://paymaster.example.com',
        paymasterAddress: '0x...',
        paymasterToken: {
          address: '0x...'
        }
      }
    },
    ton: {
      tonApiKey: 'your-ton-api-key',
      tonApiEndpoint: 'https://tonapi.io/v2',
      tonCenterApiKey: 'your-ton-center-api-key',
      tonCenterEndpoint: 'https://toncenter.com/api/v2',
      paymasterToken: {
        address: '0x...'
      }
    }
  }
);
```

### Getting an Abstracted Address

```typescript
// Get the abstracted address for an Ethereum account
const address = await wdk.getAbstractedAddress('ethereum', 0);
console.log('Abstracted address:', address);
```

### Transferring Tokens

```typescript
// Transfer USDT on Ethereum
const transfer = await wdk.transfer('ethereum', 0, {
  recipient: '0x...',
  token: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
  amount: 1_000_000 // 1.0 USDT (6 decimals)
});

console.log('Transfer hash:', transfer.hash);
console.log('Gas cost:', transfer.gasCost);
```

### Swapping Tokens

```typescript
// Swap USDT for DAI on Ethereum
const swap = await wdk.swap('ethereum', 0, {
  tokenIn: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
  tokenOut: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
  tokenInAmount: 1_000_000 // 1.0 USDT
});

console.log('Swap hash:', swap.hash);
console.log('Gas cost:', swap.gasCost);
console.log('Tokens received:', swap.tokenOutAmount);
```

### Bridging Tokens

```typescript
// Bridge USDT from Ethereum to Arbitrum
const bridge = await wdk.bridge('ethereum', 0, {
  targetChain: 'arbitrum',
  recipient: '0x...',
  amount: 1_000_000 // 1.0 USDT
});

console.log('Bridge hash:', bridge.hash);
console.log('Gas cost:', bridge.gasCost);
console.log('Bridge cost:', bridge.bridgeCost);
```

### Generating and Validating Seed Phrases

```typescript
// Generate a random seed phrase
const seed = WdkManager.getRandomSeedPhrase();
console.log('Generated seed:', seed);

// Validate a seed phrase
const isValid = WdkManager.isValidSeedPhrase(seed);
console.log('Is valid seed phrase:', isValid);
```

## API Reference

### WdkManager

The main class for interacting with the wallet development kit.

#### Constructor

```typescript
new WdkManager(seed: SeedPhrase | Seeds, accountAbstractionConfig: AccountAbstractionConfig)
```

#### Methods

- `getAbstractedAddress(blockchain: string, accountIndex: number): Promise<string>`
- `transfer(blockchain: string, accountIndex: number, options: TransferOptions): Promise<TransferResult>`
- `quoteTransfer(blockchain: string, accountIndex: number, options: TransferOptions): Promise<Omit<TransferResult, "hash">>`
- `swap(blockchain: string, accountIndex: number, options: SwapOptions): Promise<SwapResult>`
- `quoteSwap(blockchain: string, accountIndex: number, options: SwapOptions): Promise<Omit<SwapResult, "hash">>`
- `bridge(blockchain: string, accountIndex: number, options: BridgeOptions): Promise<BridgeResult>`
- `quoteBridge(blockchain: string, accountIndex: number, options: BridgeOptions): Promise<Omit<BridgeResult, "hash">>`

#### Static Methods

- `getRandomSeedPhrase(): SeedPhrase`
- `isValidSeedPhrase(seed: SeedPhrase): boolean`

## Type Definitions

All type definitions are available in the `types.ts` file. Key types include:

- `SeedPhrase`
- `Seeds`
- `AccountAbstractionConfig`
- `AccountAbstractionConfigEvm`
- `AccountAbstractionConfigTon`
- `TransferOptions`
- `TransferResult`
- `SwapOptions`
- `SwapResult`
- `BridgeOptions`
- `BridgeResult`

## Generate the docs

```
npm run docs
```