import {
  BaseWalletAdapter,
  type SendTransactionOptions,
  type SignerWalletAdapter,
  type SupportedTransactionVersions,
  type TransactionOrVersionedTransaction,
  WalletReadyState,
  type WalletName,
} from '@solana/wallet-adapter-base';
import {type Connection, type Keypair, type PublicKey, VersionedTransaction} from '@solana/web3.js';

export class TestWalletAdapter extends BaseWalletAdapter implements SignerWalletAdapter {
  name = 'Test Wallet' as WalletName<'Test Wallet'>;
  url: string = '';
  icon: string = 'https://icons-ckg.pages.dev/stargate-light/wallets/test.svg';
  readyState = WalletReadyState.Installed;
  supportedTransactionVersions?: SupportedTransactionVersions;

  protected _state: 'connected' | 'disconnected' | 'connecting' = 'disconnected';
  protected _keypair: Keypair;

  get publicKey(): PublicKey | null {
    if (this._state === 'connected') {
      return this._keypair.publicKey;
    }
    return null;
  }

  get connecting() {
    return this._state === 'connecting';
  }

  async connect(): Promise<void> {
    this._state = 'connected';
    this.emit('connect', this._keypair.publicKey);
  }

  async disconnect(): Promise<void> {
    this._state = 'disconnected';
    this.emit('disconnect');
  }
  async sendTransaction(
    transaction: TransactionOrVersionedTransaction<this['supportedTransactionVersions']>,
    connection: Connection,
    options?: SendTransactionOptions | undefined,
  ): Promise<string> {
    const singedTransaction = await this.signTransaction(transaction);
    const isVersionedTransaction = singedTransaction instanceof VersionedTransaction;
    if (!isVersionedTransaction) throw new Error('Only VersionedTransaction is supported.');
    const hash = await connection.sendTransaction(singedTransaction);
    return hash;
  }

  constructor(config: {keypair: Keypair}) {
    super();
    this._keypair = config.keypair;
  }
  async signTransaction<
    T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>,
  >(transaction: T): Promise<T> {
    const isVersionedTransaction = transaction instanceof VersionedTransaction;
    if (!isVersionedTransaction) throw new Error('Only VersionedTransaction is supported.');
    await transaction.sign([this._keypair]);
    return transaction;
  }

  signAllTransactions<
    T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>,
  >(transactions: T[]): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
