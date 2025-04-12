import {
  type GetAptosClientFunction,
  type Accounts,
  fullAddress,
  createTransaction,
} from '@layerzerolabs/ui-aptos';
import type {
  ClaimApi,
  ClaimInput,
  GetUnclaimedInput,
  GetUnclaimedResult,
} from '@layerzerolabs/ui-bridge-sdk/v2';
import {
  type ChainKey,
  type Currency,
  CurrencyAmount,
  isAptosChainKey,
  type Transaction,
} from '@layerzerolabs/ui-core';
import type {AptosBridgeConfig} from './types/AptosBridgeConfig';
import {claimCoinPayload, getBridgeCoinType, getUnclaimed} from './aptos';
import {getDeployment} from './utils';

type AccountsConfig = Record<ChainKey, Accounts>;

export class AptosClaimV2__aptos implements ClaimApi<unknown> {
  constructor(
    protected config: AptosBridgeConfig,
    protected accounts: AccountsConfig,
    protected getClient: GetAptosClientFunction,
  ) {}

  supports(token: Currency): boolean {
    if (!isAptosChainKey(token.chainKey)) return false;
    for (const other of Object.values(this.config.tokens).flat()) {
      if (token.equals(other)) return true;
    }
    return false;
  }

  async getUnclaimed(input: GetUnclaimedInput): Promise<GetUnclaimedResult> {
    const client = this.getClient(input.token.chainKey);
    const bridgeAddress = getDeployment(input.token.chainKey, this.config).bridge.address;
    const tokenAddress = getBridgeCoinType(input.token);
    const unclaimed = await getUnclaimed(client, bridgeAddress, tokenAddress, input.owner);
    return CurrencyAmount.fromBigInt(input.token, unclaimed);
  }

  async claim(input: ClaimInput): Promise<Transaction<unknown>> {
    const client = this.getClient(input.token.chainKey);
    const bridgeAddress = getDeployment(input.token.chainKey, this.config).bridge.address;
    const tokenAddress = getBridgeCoinType(input.token);
    const ownerAddress = fullAddress(input.owner).hex();
    const entryFunctionPayload = claimCoinPayload(bridgeAddress, tokenAddress, ownerAddress);
    return createTransaction(entryFunctionPayload, {client});
  }
}
