import { SerializedOftBridgeConfig } from './types.js';
export { createOftBridgeConfig, oftBridgeConfigSchema, serializeOftBridgeConfig } from './types.js';
import { O as OftBridgeConfig, a as OftBridgeDeployment } from './OftBridgeConfig-098dc938.js';
import { a as OftBridgeFee } from './OftBridgeApi-6b97cc7a.js';
export { O as OftBridgeApi } from './OftBridgeApi-6b97cc7a.js';
import { ChainKey, AdapterParams, Currency, Transaction, FeeQuote, CurrencyAmount } from '@layerzerolabs/ui-core';
import * as _layerzerolabs_ui_evm from '@layerzerolabs/ui-evm';
import { Options } from '@layerzerolabs/ui-evm';
import { OftBridge__evm as OftBridgeBase } from './evm.js';
export { OftBridgeApiFactory__evm, OftBridgeV0, OftBridgeV1, OftBridgeV2, OftBridgeV2Fee, OftBridgeV3 } from './evm.js';
import { TransferInput, GetMessageFeeInput, GetExtraGasInput, GetOutputInput, BridgeOutput, GetLimitInput, GetOptionsInput, BridgeOptions, GetAllowanceInput, ApproveInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import 'zod';
import 'ethers';
import '@ethersproject/abi';
import '@ethersproject/providers';

type CreateOptionsOverrides = {
    executorLzReceiveOption?: OftBridgeDeployment['executorLzReceiveOption'];
};
declare function createOptions({ dstChainKey, adapterParams }: {
    dstChainKey: ChainKey;
    adapterParams: AdapterParams;
}, config: OftBridgeConfig, { executorLzReceiveOption }?: CreateOptionsOverrides): Options;
declare function tryGetDeployment(chainKey: ChainKey, config: OftBridgeConfig): OftBridgeDeployment | undefined;
declare function getDeployment(chainKey: ChainKey, config: OftBridgeConfig): OftBridgeDeployment;
declare function addressToBytes32ForChain(address: string, chainKey: ChainKey): string;

type OldOftBridgeConfig = {
    fee?: boolean;
    sharedDecimals: number;
    version: number;
    tokens: {
        address: string;
        chainId: number;
        decimals: number;
        symbol: string;
        name: string;
    }[];
    proxy?: {
        chainId: number;
        address: string;
    }[];
    native?: {
        chainId: number;
        address: string;
    }[];
};
declare function convertFromV1(oldOftBridgeConfig: OldOftBridgeConfig, endpointVersion: 1 | 2): SerializedOftBridgeConfig;

interface TronWebProvider {
    contract: (abi?: any[], address?: string) => any;
    transactionBuilder: {
        triggerSmartContract: (contractAddress: string, functionSelector: string, options: {
            feeLimit: number;
            callValue: number;
            owner_address?: string;
            from?: string;
        }, parameters?: any[]) => Promise<{
            transaction: any;
            result: {
                result: boolean;
            };
        }>;
    };
    address: {
        fromHex(hexAddress: string): string;
        toHex(address: string): string;
    };
    trx: {
        sign(transaction: any): Promise<any>;
    };
}
interface TronContract {
    quoteOFT(params: any): {
        call(options: TronCallOptions): Promise<{
            oftReceipt: {
                amountReceivedLD: string;
                amountSentLD: string;
            };
        }>;
    };
    quoteSend(params: any, useZro: boolean): {
        call(options: TronCallOptions): Promise<{
            nativeFee: string;
            lzTokenFee: string;
        }>;
    };
    send(params: any, fee: any, address: string): {
        send(options: TronSendOptions): Promise<any>;
    };
}
interface TronCallOptions {
    _isConstant: boolean;
    callValue: number;
    feeLimit: number;
    from?: string;
    owner_address?: string;
}
interface TronSendOptions {
    callValue: bigint;
    feeLimit: number;
    from: string;
    owner_address: string;
}
type SendParamsInput = Pick<TransferInput, 'adapterParams' | 'dstToken' | 'srcAmount' | 'dstAmountMin' | 'dstAddress'>;

declare class OftBridgeApiFactory__tron {
    protected getTronWeb: (chainKey: ChainKey) => Promise<TronWebProvider>;
    constructor(getTronWeb: (chainKey: ChainKey) => Promise<TronWebProvider>);
    create(config: OftBridgeConfig): OftBridgeBase;
}

declare class OftBridgeV3__tron extends OftBridgeBase {
    protected getTronWeb: (chainKey: ChainKey) => Promise<TronWebProvider>;
    config: OftBridgeConfig;
    constructor(getTronWeb: (chainKey: ChainKey) => Promise<TronWebProvider>, config: OftBridgeConfig);
    protected validateConfig(config: OftBridgeConfig): asserts config is OftBridgeConfig;
    supportsRegister(token: Currency): boolean;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    transfer(input: TransferInput): Promise<Transaction<any>>;
    getMessageFee(input: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas(input: GetExtraGasInput): Promise<number>;
    getOutput(input: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    private buildSendParams;
    createOptions({ adapterParams, dstChainKey, }: {
        adapterParams: AdapterParams;
        dstChainKey: ChainKey;
    }): Promise<_layerzerolabs_ui_evm.Options>;
    getLimit({ srcToken, dstToken }: GetLimitInput): Promise<CurrencyAmount<(Currency | undefined) & Currency>>;
    protected getContract(chainKey: ChainKey): Promise<{
        credits: (dstEid: number) => {
            call: () => Promise<bigint>;
        };
        quoteOFT: (params: any) => {
            call: (options: any) => Promise<{
                oftReceipt: {
                    amountReceivedLD: any;
                    amountSentLD: any;
                };
            }>;
        };
        quoteSend: (params: any, payInLzToken: boolean) => {
            call: (options: any) => Promise<{
                nativeFee: any;
                lzTokenFee: any;
            }>;
        };
        send: (params: any, fee: any, refundAddress: string) => {
            send: (options: any) => Promise<any>;
        };
    }>;
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount>;
    approve({ amount, address }: ApproveInput): Promise<Transaction<any>>;
}

/**
 * Converts an address to Tron format
 * If the address starts with '0x', converts from hex format to Tron format
 * Otherwise returns the address as is
 */
declare function toTronAddress(tronWeb: TronWebProvider, address: string): string;
declare function fromTronAddress(address: string): string;

export { OftBridgeApiFactory__tron, OftBridgeConfig, OftBridgeDeployment, OftBridgeFee, OftBridgeV3__tron, OftBridgeBase as OftBridge__evm, SendParamsInput, SerializedOftBridgeConfig, TronCallOptions, TronContract, TronSendOptions, TronWebProvider, addressToBytes32ForChain, convertFromV1, createOptions, fromTronAddress, getDeployment, toTronAddress, tryGetDeployment };
