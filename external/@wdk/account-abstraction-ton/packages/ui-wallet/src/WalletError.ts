export abstract class WalletError extends Error {
  abstract name: string;
  abstract shortMessage: string;
}

export class UserRejectedRequestError extends WalletError {
  public name = 'UserRejectedRequestError';
  public shortMessage = 'User rejected the request.';
}

export class SwitchChainError extends WalletError {
  public name = 'SwitchChainError';
  public shortMessage = 'Failed to switch chain.';
}

export class SyncWalletError extends WalletError {
  public name = 'SyncWalletError';
  public shortMessage = 'Failed to sync wallet.';
}
