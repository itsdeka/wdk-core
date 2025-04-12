import {isErrorOfApiError} from '@layerzerolabs/ui-aptos';
import {type Currency, CurrencyAmount, hasAddress} from '@layerzerolabs/ui-core';
import {type AptosClient, type BCS, type Types, HexString} from 'aptos';

export function toLD(token: Currency, amountSD: bigint, SD = 6): CurrencyAmount {
  const amount = CurrencyAmount.fromRawAmount(token, amountSD);
  if (token.decimals === SD) return amount;
  return (
    amount
      //
      .multiply(10 ** token.decimals)
      .divide(10 ** SD)
  );
}

type BridgeCoinType = string;

export async function getLimitedAmount(
  client: AptosClient,
  bridgeAddress: string, // bridge
  coin: BridgeCoinType,
): Promise<{limited: boolean; amount: BCS.Uint64}> {
  const resource = await client.getAccountResource(
    bridgeAddress,
    `${bridgeAddress}::limiter::Limiter<${coin}>`,
  );

  const {enabled} = resource.data as {enabled: boolean};

  if (!enabled) {
    return {
      limited: false,
      amount: BigInt(0),
    };
  }

  const data = resource.data as {[key: string]: string};
  const limiter = {
    t0Sec: BigInt(data.t0_sec),
    windowSec: BigInt(data.window_sec),
    sumSD: BigInt(data.sum_sd),
    capSD: BigInt(data.cap_sd),
  };

  const now = await getCurrentTimestamp(client);
  let count = (now - limiter.t0Sec) / limiter.windowSec;

  while (count > 0) {
    limiter.sumSD /= BigInt(2);
    count -= BigInt(1);
  }

  const limitedAmtSD = limiter.capSD - limiter.sumSD;

  const ld2sdRate = await getLd2SdRate(client, bridgeAddress, coin);
  return {
    limited: true,
    amount: convertAmountToLD(limitedAmtSD, ld2sdRate),
  };
}

export function getBridgeCoinType(token: Currency): BridgeCoinType {
  if (hasAddress(token)) return token.address;
  throw new Error(`Unsupported token: ${token.symbol}`, {cause: token});
}

export async function getCoinStore(
  client: AptosClient,
  bridgeAddress: string, // bridge
  coin: BridgeCoinType,
): Promise<Types.MoveResource> {
  return client.getAccountResource(
    bridgeAddress,
    `${bridgeAddress}::coin_bridge::CoinStore<${coin}>`,
  );
}

async function getLd2SdRate(
  client: AptosClient,
  bridgeAddress: string,
  coin: BridgeCoinType,
): Promise<BCS.Uint64> {
  const resource = await getCoinStore(client, bridgeAddress, coin);
  const {ld2sd_rate} = resource.data as {ld2sd_rate: string};
  return BigInt(ld2sd_rate);
}

async function getCurrentTimestamp(client: AptosClient): Promise<BCS.Uint64> {
  const resource = await client.getAccountResource(
    '0x1',
    '0x1::timestamp::CurrentTimeMicroseconds',
  );
  const {microseconds} = resource.data as {microseconds: string};
  return BigInt(microseconds) / BigInt(1000000);
}

export async function getUnclaimed(
  client: AptosClient,
  bridgeAddress: string,
  coin: BridgeCoinType,
  owner: string,
) {
  const resource = await getCoinStore(client, bridgeAddress, coin);
  const {claimable_amt_ld} = resource.data as {claimable_amt_ld: {handle: string}};
  const claimableAmtLDHandle = claimable_amt_ld.handle;

  try {
    const response = await client.getTableItem(claimableAmtLDHandle, {
      key_type: 'address',
      value_type: 'u64',
      key: owner,
    });
    return BigInt(response);
  } catch (e) {
    if (isErrorOfApiError(e, 404)) {
      return BigInt(0);
    }
    throw e;
  }
}

export function claimCoinPayload(
  bridgeAddress: string,
  coin: BridgeCoinType,
  owner: string,
): Types.EntryFunctionPayload {
  return {
    function: `${bridgeAddress}::coin_bridge::claim`,
    type_arguments: [coin],
    arguments: [owner],
  };
}

export async function getRemoteCoin(
  client: AptosClient,
  bridgeAddress: string, // bridge
  coin: BridgeCoinType,
  remoteChainId: BCS.Uint16,
) {
  const resource = await getCoinStore(client, bridgeAddress, coin);
  const {remote_coins} = resource.data as {remote_coins: {handle: string}};
  const remoteCoinHandle = remote_coins.handle;

  const remoteCoin = await client.getTableItem(remoteCoinHandle, {
    key_type: 'u64',
    value_type: `${bridgeAddress}::coin_bridge::RemoteCoin`,
    key: remoteChainId.toString(),
  });

  const address = Uint8Array.from(
    Buffer.from(HexString.ensure(remoteCoin.remote_address).noPrefix(), 'hex'),
  );
  const tvlSD = BigInt(remoteCoin.tvl_sd);
  const {unwrappable} = remoteCoin;
  return {
    address,
    tvlSD,
    unwrappable,
  };
}

// https://github.com/LayerZero-Labs/monorepo/blob/c2f65256dcaa114044371655d2e291e3ca2357e2/packages/layerzero-v1/aptos/sdk/src/modules/apps/bridge.ts#L426
export function convertAmountToLD(
  amountSD: BCS.Uint64 | BCS.Uint32,
  ld2sdRate: BCS.Uint64 | BCS.Uint32,
): BCS.Uint64 {
  return BigInt(amountSD) * BigInt(ld2sdRate);
}

export function sendCoinPayload(
  bridgeAddress: string,
  coin: BridgeCoinType,
  dstChainId: BCS.Uint16,
  dstReceiver: BCS.Bytes,
  amountLD: BCS.Uint64 | BCS.Uint32,
  nativeFee: BCS.Uint64 | BCS.Uint32,
  zroFee: BCS.Uint64 | BCS.Uint32,
  unwrap: boolean,
  adapterParams: BCS.Bytes,
  msgLibParams: BCS.Bytes,
): Types.EntryFunctionPayload {
  return {
    function: `${bridgeAddress}::coin_bridge::send_coin_from`,
    type_arguments: [coin],
    arguments: [
      dstChainId.toString(),
      dstReceiver,
      amountLD.toString(),
      nativeFee.toString(),
      zroFee.toString(),
      unwrap,
      adapterParams,
      msgLibParams,
    ],
  };
}
