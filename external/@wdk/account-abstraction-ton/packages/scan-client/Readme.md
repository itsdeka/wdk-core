<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="max-width: 500px" src="https://d3a2dpnnrypp5h.cloudfront.net/bridge-app/lz.png"/>
  </a>
</p>

<h1 align="center">@layerzerolabs/scan-client</h1>

<!-- The badges section -->
<p align="center">
  <!-- Shields.io NPM published package version -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/scan-client"><img alt="NPM Version" src="https://img.shields.io/npm/v/@layerzerolabs/scan-client"/></a>
  <!-- Shields.io NPM downloads -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/scan-client"><img alt="Downloads" src="https://img.shields.io/npm/dm/@layerzerolabs/scan-client"/></a>
  <!-- Shields.io vulnerabilities -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/scan-client"><img alt="Snyk Vulnerabilities for npm package version" src="https://img.shields.io/snyk/vulnerabilities/npm/@layerzerolabs/scan-client"/></a>
  <!-- Shields.io license badge -->
  <a href="https://www.npmjs.com/package/@layerzerolabs/scan-client"><img alt="NPM License" src="https://img.shields.io/npm/l/@layerzerolabs/scan-client"/></a>
</p>

## Installation

```bash
yarn add @layerzerolabs/scan-client

pnpm add @layerzerolabs/scan-client

npm install @layerzerolabs/scan-client
```

## Usage

### `createClient`

```typescript
import {createClient} from '@layerzerolabs/scan-client';

// Initialize a client with the desired environment
const client = createClient('testnet');

// Get a list of messages by transaction hash
const {messages} = await client.getMessagesBySrcTxHash(
  '0xc6071e98336996084a18a6c47ab38449e31d7d4b48040f35bbcd4106189e3036',
);

// There also is a convenience method that creates the client
// and calls getMessagesBySrcTxHash
import {getMessagesBySrcTxHash} from '@layerzerolabs/scan-client';

const {messages} = getMessagesBySrcTxHash(
  101,
  '0xc6071e98336996084a18a6c47ab38449e31d7d4b48040f35bbcd4106189e3036',
);

// The items in the messages adhere to the following type spec
type Message = {
  srcUaAddress: string;
  dstUaAddress: string;
  srcChainId: number;
  dstChainId: number;
  dstTxHash?: string;
  dstTxError?: string;
  srcTxHash: string;
  srcBlockHash: string;
  srcBlockNumber: string;
  srcUaNonce: number;
  status: MessageStatus;
};

enum MessageStatus {
  INFLIGHT = 'INFLIGHT',
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED',
  PAYLOAD_STORED = 'PAYLOAD_STORED',
  BLOCKED = 'BLOCKED',
  CONFIRMING = 'CONFIRMING',
}
```

For new transactions the message list may be empty. Polling should be implemented at the application level since it is app specific. Expect the messages list to be empty for recent transactions, before moving to status `INFLIGHT`, and finally status `DELIVERED`.

### `waitForMessageReceived`

We've extracted a common use case for the scan client into the helper `waitForMessageReceived`. Provide the `srcChainId`, `srcTxHash`, and optional `pollInterval` and receive a promise that resolves when the message status is updated to `DELIVERED`.

#### Call signature

```ts
function waitForMessageReceived(
  srcChainId: number,
  srcTxHash: string,
  pollInterval = 3000,
): Promise<DeliveredMessage>;
```

#### Example usage:

```ts
import {waitForMessageReceived} from '@layerzerolabs/scan-client';

...

waitForMessageReceived(srcChainId, receipt.txHash)
  .then((message) => {
    updateTx({
      completed: true,
      confirmation: {
        chainId: message.dstChainId,
        txHash: message.dstTxHash,
      },
    });
  })
  .finally(() => {
    updateBalances();
  });
```
