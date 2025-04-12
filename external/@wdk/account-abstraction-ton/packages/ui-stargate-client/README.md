<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="max-width: 500px" src="https://d3a2dpnnrypp5h.cloudfront.net/bridge-app/lz.png"/>
  </a>
</p>

<h1 align="center">@layerzerolabs/ui-stargate-client</h1>

<!-- The badges section -->
<p align="center">
  <!-- Shields.io NPM published package version -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-stargate-client"><img alt="NPM Version" src="https://img.shields.io/npm/v/@layerzerolabs/ui-stargate-client"/></a>
  <!-- Shields.io NPM downloads -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-stargate-client"><img alt="Downloads" src="https://img.shields.io/npm/dm/@layerzerolabs/ui-stargate-client"/></a>
  <!-- Shields.io vulnerabilities -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-stargate-client"><img alt="Snyk Vulnerabilities for npm package version" src="https://img.shields.io/snyk/vulnerabilities/npm/@layerzerolabs/ui-stargate-client"/></a>
  <!-- Shields.io license badge -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/ui-stargate-client"><img alt="NPM License" src="https://img.shields.io/npm/l/@layerzerolabs/ui-stargate-client"/></a>
</p>

## Installation

```bash
yarn add @layerzerolabs/ui-stargate-client

pnpm add @layerzerolabs/ui-stargate-client

npm install @layerzerolabs/ui-stargate-client
```

## Usage


```typescript
import redaxios from 'redaxios';
import {
  StargateClient,
  NATIVE_ETH_ADDRESS,
  isSerializedRouteResolved,
  evmTransactionRequestSchema,
} from '@layerzerolabs/ui-stargate-client/v1';
import {sleep} from '@/core/utils/sleep';

const signer: import('ethers').Signer = null!;
const client = new StargateClient({
  http: redaxios.create({
    baseURL: 'https://stargate.finance/',
  }),
});

const {routes} = await client.getRoutes({
  srcToken: NATIVE_ETH_ADDRESS,
  dstToken: NATIVE_ETH_ADDRESS,
  srcChainKey: 'ethereum',
  dstChainKey: 'optimism',
  srcAmount: '1000000000000000000',
  dstAmountMin: '995000000000000000', // 99.5% of srcAmount
  srcAddress: '0x1a44076050125825900e736c501f859c50fE728c',
  dstAddress: '0x1a44076050125825900e736c501f859c50fE728c',
});

const route = routes.find(isSerializedRouteResolved);

if (!route) {
  throw new Error('No route found');
}

// execution
for (const step of route.steps) {
  console.log(step.type);
  const evmTransaction = evmTransactionRequestSchema.parse(step.transaction);
  const response = await signer.sendTransaction(evmTransaction);
  await response.wait();

  // waiting for message received
  if (step.type === 'bridge') {
    while (true) {
      // client already handles BUS and TAXI
      const {message} = await client.getMessage({txHash: response.hash});
      if (message?.dstTxHash) {
        console.log('Bridge step completed');
        break;
      }
      await sleep(10_000);
    }
  }
}
```
