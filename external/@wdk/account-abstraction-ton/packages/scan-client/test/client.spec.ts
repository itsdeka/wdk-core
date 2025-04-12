import {it, expect, describe} from 'vitest';
import {ScanClient} from '../src/client';

describe('ScanClient', () => {
  const client = new ScanClient({mainnet: true, testnet: true});

  it('getMessagesBySrcTxHash', async () => {
    const messages = await client.getMessagesBySrcTxHash(
      '0xb6f9b158528c904a09f5d02eb730052bc618d8deb7510c03b8e60b66c53677b6',
    );
    expect(messages).toBeDefined();
    expect(Array.isArray(messages)).toEqual(true);
  });

  it('waitForMessageReceived#mainnet', async () => {
    const mainnet = await client.waitForMessageReceived(
      {txHash: '0x9a2aa82ad2867a477483e480da69c80aaf40f91cf0beb8c1f2beb63b0417f2ba'},
      {poolInterval: 1000},
    );
    expect(mainnet).toBeDefined();
  });

  it('waitForMessageReceived#testnet', async () => {
    const mainnet = await client.waitForMessageReceived(
      {txHash: '0x027b53287cd5161c02bbec63a3fc7a20c9f7be67529f95c0f66f377f585a5aab'},
      {poolInterval: 1000},
    );
    expect(mainnet).toBeDefined();
  });

  it('waitForMessageReceived#aborts', async () => {
    const abortController = new AbortController();
    const promise = client.waitForMessageReceived(
      {txHash: '0x0000000000000000000000000000000000000000000000000000000000000000'},
      {poolInterval: 100, signal: abortController.signal},
    );
    abortController.abort();
    await expect(promise).rejects.toThrow();
  });
});
