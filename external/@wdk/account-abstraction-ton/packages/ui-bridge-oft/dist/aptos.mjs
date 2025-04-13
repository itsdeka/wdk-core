import { getDeployment, tryGetDeployment } from './chunk-DHS2PT7H.mjs';
import './chunk-EJHQDNHP.mjs';
import { buildDefaultAdapterParams, buildAirdropAdapterParams, createTransaction, getMinDstGas, isErrorOfApiError, getMessageFee } from '@layerzerolabs/ui-aptos';
import { castCurrencyAmountUnsafe, isAptosChainKey, MessageFee, removeDust, CurrencyAmount, MaxUint256, isEvmChainKey, assert, hasAddress } from '@layerzerolabs/ui-core';
import { addressToBytes32, AddressOne } from '@layerzerolabs/ui-evm';

function sendCoinPayload(accounts, oftType, dstChainId, dstReceiver, amount, minAmount, nativeFee, zroFee, adapterParams, msgLibParams) {
  const module = `${accounts.layerzero_apps.address}::oft`;
  return {
    function: `${module}::send`,
    type_arguments: [oftType],
    arguments: [
      dstChainId.toString(),
      dstReceiver,
      amount.toString(),
      minAmount.toString(),
      nativeFee.toString(),
      zroFee.toString(),
      adapterParams,
      msgLibParams
    ]
  };
}
function getTypeAddress(oftAddress) {
  const match = oftAddress.match(/0x(?<address>.*)::(?<module>.*)::(?<struct>.*)/i);
  if (!match) {
    throw new Error(`Invalid oft type: ${oftAddress}`);
  }
  const { address } = match.groups;
  return address;
}
function getAccount(accounts, chainKey, app) {
  const address = accounts[chainKey]?.[app]?.address;
  if (address)
    return address;
  throw new Error(`No address for ${app} on ${chainKey}`);
}
function claimCoinPayload(accounts, oftType) {
  const module = `${accounts.layerzero_apps.address}::oft`;
  return {
    function: `${module}::claim`,
    type_arguments: [oftType],
    arguments: []
  };
}
async function getCoinStore(accounts, client, oftType) {
  const module = `${accounts.layerzero_apps.address}::oft`;
  const address = getTypeAddress(oftType);
  return client.getAccountResource(address, `${module}::CoinStore<${oftType}>`);
}
async function getUnclaimed(accounts, client, oftType, owner) {
  const resource = await getCoinStore(accounts, client, oftType);
  const { claimable_amount } = resource.data;
  const claimableAmtLDHandle = claimable_amount.handle;
  try {
    const response = await client.getTableItem(claimableAmtLDHandle, {
      key_type: "address",
      value_type: "u64",
      key: owner
    });
    return BigInt(response);
  } catch (e) {
    if (isErrorOfApiError(e, 404)) {
      return 0n;
    }
    throw e;
  }
}
function getOftAddress(chainKey, config) {
  const deployment = getDeployment(chainKey, config);
  const token = deployment.token;
  assert(hasAddress(token), "Token address is required");
  return token.address;
}

// src/aptos/OftBridgeV2__aptos.ts
var SEND_PAYLOAD_LENGTH = 41;
var OftBridgeV2__aptos = class {
  constructor(config, accounts, getClient) {
    this.config = config;
    this.accounts = accounts;
    this.getClient = getClient;
  }
  async getDuration(input) {
    return { estimated: 0 };
  }
  async getOptions(input) {
    return { options: [{ mode: "taxi" }] };
  }
  async transfer(input) {
    const path = getPath(input);
    const client = this.getClient(input.srcChainKey);
    const minDstGas = await this.getMinDstGas(path);
    const messageFee = await this.getMessageFee(path, {
      minDstGas,
      // dstNativeAddress: input.dstAddress,
      dstNativeAddress: getDstAddressForQuote(input.dstChainKey),
      dstNativeAmount: input.dstNativeAmount.toBigInt()
    });
    const minAmountLD = castCurrencyAmountUnsafe(input.dstAmountMin, input.srcToken);
    const adapterParams = input.dstNativeAmount.equalTo(0) ? buildDefaultAdapterParams(minDstGas) : buildAirdropAdapterParams(minDstGas, input.dstNativeAmount.toBigInt(), input.dstAddress);
    const dstEid = getDeployment(input.dstChainKey, this.config).eid;
    const dstAddress = addressToBytes32(input.dstAddress);
    const msgLibParams = new Uint8Array(0);
    const accounts = this.accounts[input.srcChainKey];
    const oftType = getOftAddress(input.srcChainKey, this.config);
    const entryFunctionPayload = sendCoinPayload(
      accounts,
      oftType,
      dstEid,
      dstAddress,
      input.srcAmount.toBigInt(),
      minAmountLD.toBigInt(),
      messageFee.nativeFee.toBigInt(),
      0n,
      adapterParams,
      msgLibParams
    );
    return createTransaction(entryFunctionPayload, { client });
  }
  supportsTransfer(srcToken, dstToken) {
    return Boolean(
      isAptosChainKey(srcToken.chainKey) && tryGetDeployment(srcToken.chainKey, this.config)?.token.equals(srcToken) && tryGetDeployment(dstToken.chainKey, this.config)?.token.equals(dstToken)
    );
  }
  async getGlobalStore(chainKey) {
    const client = this.getClient(chainKey);
    const oftType = getOftAddress(chainKey, this.config);
    const address = getTypeAddress(oftType);
    const module = `${getAccount(this.accounts, chainKey, "layerzero_apps")}::oft`;
    return client.getAccountResource(address, `${module}::GlobalStore<${oftType}>`);
  }
  async getMinDstGas({ srcChainKey, dstChainKey }) {
    const dstEid = getDeployment(dstChainKey, this.config).eid;
    const oftType = getOftAddress(srcChainKey, this.config);
    const minDstGas = await getMinDstGas(
      this.getClient(srcChainKey),
      this.accounts[srcChainKey],
      getTypeAddress(oftType),
      dstEid,
      BigInt(0 /* SEND */)
    );
    return BigInt(minDstGas);
  }
  async getFeeBp({ srcChainKey, dstChainKey }) {
    const client = this.getClient(srcChainKey);
    const dstEid = getDeployment(dstChainKey, this.config).eid;
    const resource = await this.getGlobalStore(srcChainKey);
    const { fee_config } = resource.data;
    try {
      return await client.getTableItem(fee_config.chain_id_to_fee_bp.handle, {
        key_type: `u64`,
        value_type: `u64`,
        key: dstEid.toString()
      });
    } catch (e) {
      if (isErrorOfApiError(e, 404)) {
        return BigInt(fee_config.default_fee_bp);
      }
      throw e;
    }
  }
  async getMessageFee({ srcChainKey, dstChainKey }, {
    dstNativeAmount,
    minDstGas,
    dstNativeAddress
  }) {
    const oftType = getOftAddress(srcChainKey, this.config);
    const uaAddress = getTypeAddress(oftType);
    const dstEid = getDeployment(dstChainKey, this.config).eid;
    const adapterParams = dstNativeAmount === 0n ? buildDefaultAdapterParams(minDstGas) : buildAirdropAdapterParams(minDstGas, dstNativeAmount, dstNativeAddress);
    const nativeFee = await getMessageFee(
      this.getClient(srcChainKey),
      this.accounts[srcChainKey],
      uaAddress,
      dstEid,
      adapterParams,
      SEND_PAYLOAD_LENGTH
    );
    return MessageFee.from(srcChainKey, {
      nativeFee,
      zroFee: 0n
    });
  }
  async getRoute(input) {
    const path = getPath(input);
    const [minDstGas, feeBp] = await Promise.all([
      this.getMinDstGas(path),
      // don't hit the network if fee is disabled
      this.config.fee === false ? 0n : this.getFeeBp(path)
    ]);
    const [endpointFee0, endpointFee1, duration] = await Promise.all([
      this.getMessageFee(path, {
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
        dstNativeAmount: 0n
      }),
      // quoting to warm up cache
      this.getMessageFee(path, {
        minDstGas,
        dstNativeAddress: getDstAddressForQuote(path.dstChainKey),
        dstNativeAmount: input.dstNativeAmount.toBigInt()
      }),
      this.getDuration(input)
    ]);
    const gasCost = endpointFee1.nativeFee.subtract(endpointFee0.nativeFee);
    const srcAmount = removeDust(input.srcAmount, this.config.sharedDecimals);
    const feeAmount = srcAmount.multiply(feeBp).divide(1e4);
    const dstAmountLd = srcAmount.subtract(feeAmount);
    const dstAmount = castCurrencyAmountUnsafe(dstAmountLd, input.dstToken);
    const srcAmountMax = CurrencyAmount.fromBigInt(input.srcToken, MaxUint256);
    const messageFee = endpointFee0;
    const route = {
      mode: "taxi",
      allowance: getMaxAllowance(input.srcToken),
      dstAddress: input.dstAddress,
      dstAmount,
      dstAmountMin: dstAmount,
      dstNativeAmount: input.dstNativeAmount,
      dstToken: input.dstToken,
      duration,
      error: void 0,
      gasCost,
      messageFee,
      option: {
        mode: "taxi"
      },
      srcAddress: input.srcAddress,
      srcAmount,
      srcAmountMax,
      srcToken: input.srcToken
    };
    return route;
  }
};
function getDstAddressForQuote(chainKey) {
  if (isEvmChainKey(chainKey)) {
    return AddressOne;
  }
  throw new Error(`Unsupported chain key: ${chainKey}`);
}
function getPath(input) {
  return {
    srcChainKey: input.srcToken.chainKey,
    dstChainKey: input.dstToken.chainKey
  };
}
function getMaxAllowance(token) {
  return CurrencyAmount.fromRawAmount(token, MaxUint256);
}
var OftClaimV2__aptos = class {
  constructor(config, accounts, getClient) {
    this.config = config;
    this.accounts = accounts;
    this.getClient = getClient;
  }
  supports(token) {
    if (!isAptosChainKey(token.chainKey))
      return false;
    for (const deployment of Object.values(this.config.deployments)) {
      if (deployment.token.equals(token))
        return true;
    }
    return false;
  }
  async claim(input) {
    const client = this.getClient(input.token.chainKey);
    const oftType = getOftAddress(input.token.chainKey, this.config);
    const accounts = this.accounts[input.token.chainKey];
    const entryFunctionPayload = claimCoinPayload(accounts, oftType);
    return createTransaction(entryFunctionPayload, { client });
  }
  async getUnclaimed(input) {
    const accounts = this.accounts[input.token.chainKey];
    const client = this.getClient(input.token.chainKey);
    const oftType = getOftAddress(input.token.chainKey, this.config);
    const unclaimed = await getUnclaimed(accounts, client, oftType, input.owner);
    return CurrencyAmount.fromBigInt(input.token, unclaimed);
  }
};

export { OftBridgeV2__aptos, OftClaimV2__aptos };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=aptos.mjs.map