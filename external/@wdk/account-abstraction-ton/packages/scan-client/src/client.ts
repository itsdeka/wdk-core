import httpClient from 'redaxios';

type HttpClientInstance = ReturnType<typeof httpClient.create>;

export type Stage = 'testnet' | 'mainnet' | 'sandbox';

export type ClientOptions = {};

export enum MessageStatus {
  INFLIGHT = 'INFLIGHT',
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED',
}

export type Message = {
  srcUaAddress: string;
  dstUaAddress: string;
  srcChainId: number;
  dstChainId: number;
  dstTxHash?: string;
  dstTxError?: string;
  srcTxHash?: string;
  srcBlockHash?: string;
  srcBlockNumber?: string;
  srcUaNonce: number;
  status: MessageStatus;
};

const URLS: Record<Stage, string> = {
  testnet: 'https://api-testnet.layerzero-scan.com',
  mainnet: 'https://api-mainnet.layerzero-scan.com',
  sandbox: 'https://api-sandbox.layerzero-scan.com',
};

type GetMessagesBySrcTxHashResponse = {
  messages: Message[];
};

type ScanClientConfig = {
  mainnet?: boolean;
  testnet?: boolean;
  sandbox?: boolean;
};

export class ScanClient {
  protected mainnet = httpClient.create({
    baseURL: URLS.mainnet,
  });
  protected testnet = httpClient.create({
    baseURL: URLS.testnet,
  });
  protected sandbox = httpClient.create({
    baseURL: URLS.sandbox,
  });

  protected clients: HttpClientInstance[] = [];

  constructor(protected config: ScanClientConfig) {
    if (!config.mainnet && !config.testnet && !config.sandbox) {
      throw new Error('At least one stage must be enabled');
    }
    if (this.config.mainnet) this.clients.push(this.mainnet);
    if (this.config.testnet) this.clients.push(this.testnet);
    if (this.config.sandbox) this.clients.push(this.sandbox);
  }

  getMessagesBySrcTxHash = async (srcTxHash: string): Promise<Message[]> => {
    if (!srcTxHash) throw new Error('srcTxHash must be provided');

    const messages = await Promise.all(
      this.clients.map((client) => getMessagesBySrcTxHash(client, srcTxHash)),
    );

    return messages.flatMap((m) => m.messages);
  };

  waitForMessageReceived = async (
    {txHash: srcTxHash}: {txHash: string},
    {signal, poolInterval = 3000}: {signal?: AbortSignal; poolInterval: number},
  ): Promise<DeliveredMessage> => {
    if (!srcTxHash) throw new Error('Invalid transaction: txHash must be provided');

    const abortController = new AbortController();

    const abortSignal = abortController.signal;

    if (signal) {
      signal.addEventListener('abort', () => {
        abortController.abort(signal.reason);
      });
    }

    async function poll(client: HttpClientInstance) {
      while (!abortSignal.aborted) {
        try {
          const {messages} = await getMessagesBySrcTxHash(client, srcTxHash);
          const message = messages[0];
          if (messages.length > 1) {
            throw new Error(`More than one message`, {cause: {messages}});
          } else if (message?.status === MessageStatus.FAILED) {
            throw new Error(`Message failed ${message.dstTxError}`, {cause: {message}});
          } else if (message?.status === MessageStatus.DELIVERED) {
            return message as DeliveredMessage;
          }
        } catch {
          // http error
        }
        await sleep(poolInterval);
      }
      throw new Error('Aborted', {cause: abortSignal.reason});
    }

    return Promise.race(this.clients.map((client) => poll(client))).finally(() => {
      abortController.abort();
    });
  };
}

async function getMessagesBySrcTxHash(httpClient: HttpClientInstance, srcTxHash: string) {
  const {data} = await httpClient.get<GetMessagesBySrcTxHashResponse>(`/tx/${srcTxHash}`);
  return data;
}

type DeliveredMessage = Message & {dstTxHash: string};

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));
