import * as _ton_ton from '@ton/ton';
import { Address as Address$1, TonClient, OpenedContract } from '@ton/ton';
import { BalanceProvider, Currency, CurrencyAmount, Transaction, Stage } from '@layerzerolabs/ui-core';
import { Contract, Address, Cell, ContractProvider, Sender, SenderArguments, Builder, SendMode, TupleItem, TupleReader, Slice } from '@ton/core';
import { AddressTypeLike as AddressTypeLike$1 } from '@layerzerolabs/lz-ton-sdk-v2';

interface SendRequestOptions {
    value: number | bigint | string;
    bounce?: boolean;
    sendMode?: SendMode;
    queryId?: number | bigint;
    withInit?: boolean;
}
declare abstract class BaseWrapper implements Contract {
    readonly address: Address;
    readonly init?: {
        code: Cell;
        data: Cell;
    } | undefined;
    constructor(address: Address, init?: {
        code: Cell;
        data: Cell;
    } | undefined);
    sendDeploy(provider: ContractProvider, via: Sender, value: bigint | string): Promise<void>;
    sendRequest(provider: ContractProvider, via: Sender, request: SenderArguments): Promise<void>;
    getDeployed(provider: ContractProvider): Promise<boolean>;
    buildSenderArguments(body: Cell, opts: SendRequestOptions): SenderArguments;
    beginMessage(opcode: number | bigint, queryId?: number | bigint): Builder;
}

declare class TonContractWrapper extends BaseWrapper {
    static create(address: Address$1): TonContractWrapper;
    getViewFunction(provider: ContractProvider, method: string, args: TupleItem[]): Promise<TupleReader>;
    getGetAmountAndFee(provider: ContractProvider, totalAmount: bigint): Promise<[bigint, bigint]>;
    getLzSendMd(provider: ContractProvider, oftSendMd: Cell): Promise<Cell>;
    getGetAllCredits(provider: ContractProvider): Promise<[bigint, bigint, bigint, bigint, bigint]>;
    parseSendInfo(provider: ContractProvider, cell: Cell): Promise<[bigint, bigint, bigint, bigint, bigint]>;
    getNewUsdtOFT(provider: ContractProvider, args: {
        owner: bigint;
        controllerAddress: bigint;
        eid: bigint;
        endpointCode: Cell;
        channelCode: Cell;
    }): Promise<Cell>;
    getNewOFTSend(provider: ContractProvider, args: {
        dstEid: bigint;
        to: bigint;
        minAmount: bigint;
        nativeFee: bigint;
        zroFee: bigint;
        extraOptions: Cell;
        composeMessage: Cell;
    }): Promise<Cell>;
    createExtraOptions(provider: ContractProvider, args: {
        lzReceiveGas: bigint;
        lzReceiveValue: bigint;
        nativeDropAddress: bigint;
        nativeDropAmount: bigint;
    }): Promise<Cell>;
}

declare abstract class TonBaseMinter implements Contract {
    readonly address: Address;
    constructor(address: Address);
    abstract getWalletAddress(provider: ContractProvider, owner: Address): Promise<Address>;
}

interface MinterConfig {
    total_supply: bigint;
    admin_address: Address;
    next_admin_address: Address;
    jetton_wallet_code: Cell;
    metadata_url: Cell;
}
declare function minterConfigToCell(config: MinterConfig): Cell;
declare const Opcodes: {
    mint: number;
    burn_notification: number;
    deposit: number;
    withdraw: number;
};
declare class UsdtMinter implements TonBaseMinter {
    readonly address: Address;
    readonly init?: {
        code: Cell;
        data: Cell;
    } | undefined;
    constructor(address: Address, init?: {
        code: Cell;
        data: Cell;
    } | undefined);
    static createFromAddress(address: Address): UsdtMinter;
    static createFromConfig(config: MinterConfig, code: Cell, workchain?: number): UsdtMinter;
    sendDeploy(provider: ContractProvider, via: Sender, value: bigint): Promise<void>;
    sendMint(provider: ContractProvider, via: Sender, opts: {
        value: bigint | string;
        queryID?: number;
        toAddress: Address;
        tonAmount: bigint;
        master_msg: Cell;
    }): Promise<void>;
    getJettonData(provider: ContractProvider): Promise<[bigint, boolean, Address, Cell, Cell]>;
    getWalletAddress(provider: ContractProvider, owner: Address): Promise<Address>;
    getBalance(provider: ContractProvider): Promise<bigint>;
    getNextAdminAddress(provider: ContractProvider): Promise<Address>;
}

interface walletConfig {
    owner_address: Address;
    jetton_master_address: Address;
}
declare function walletConfigToCell(config: walletConfig): Cell;
declare class UsdtWallet implements Contract {
    readonly address: Address;
    readonly init?: {
        code: Cell;
        data: Cell;
    } | undefined;
    static readonly OPCODES: {
        TRANSFER: number;
    };
    constructor(address: Address, init?: {
        code: Cell;
        data: Cell;
    } | undefined);
    static createFromAddress(address: Address): UsdtWallet;
    static createFromConfig(config: walletConfig, code: Cell, workchain?: number): UsdtWallet;
    sendDeploy(provider: ContractProvider, via: Sender, value: bigint): Promise<void>;
    buildTransfer(provider: ContractProvider, opts: {
        value: bigint;
        fromAddress?: Address;
        toAddress: Address;
        queryId?: number;
        fwdAmount: bigint;
        jettonAmount: bigint;
    } & ({
        forwardPayload?: Cell | Slice | null;
    } | {
        comment: string;
    })): Promise<Cell>;
    sendTransfer(provider: ContractProvider, via: Sender, opts: {
        value: bigint;
        toAddress: Address;
        queryId?: number;
        fwdAmount: bigint;
        jettonAmount: bigint;
    } & ({
        forwardPayload?: Cell | Slice | null;
    } | {
        comment: string;
    })): Promise<void>;
    getData(provider: ContractProvider): Promise<{
        balance: bigint;
        owner_address: Address;
        jetton_master_address: Address;
        wallet_code: Cell;
    }>;
    getStatus(provider: ContractProvider): Promise<number>;
    getBalance(provider: ContractProvider): Promise<bigint>;
    getUsdtBalance(provider: ContractProvider): Promise<bigint>;
}

declare class BalanceProvider__ton implements BalanceProvider {
    private readonly client;
    private readonly minterAddress;
    constructor(client: TonClient, minterAddress: string);
    getBalance(token: Currency, address: string): Promise<CurrencyAmount>;
    getMinterContract: (token: Currency) => _ton_ton.OpenedContract<UsdtMinter>;
    supports(token: Currency): boolean;
}

declare function bigintToAddress(value: bigint): Address$1;
type AddressTypeLike = Address$1 | string | bigint;
declare const parseTonAddress: (address: AddressTypeLike) => Address$1;
declare const tonAddressToHex: (tonAddress: string) => void;
declare const arrayBufferToBase64: (buffer: Buffer) => string;
declare const buildTonTransferCell: (opts: {
    value: bigint;
    fromAddress?: Address$1;
    toAddress: Address$1;
    queryId?: number;
    fwdAmount: bigint;
    jettonAmount: bigint;
} & ({
    forwardPayload?: Cell | Slice | null;
} | {
    comment: string;
})) => Cell;
declare const addressToBigInt: (address: AddressTypeLike) => bigint;
declare const bigIntToAddress: (address: bigint) => Address$1;
declare const emptyCell: () => Cell;
declare const asciiStringToBigint: (target: string) => bigint;

type TonTransaction = {
    messages: {
        address: Address$1;
        amount: string;
        stateInit?: Cell;
        payload?: Cell;
    }[];
};
type TonSigner = {
    sendTransaction(payload: TonTransaction): Promise<string>;
    signTransaction<Transaction extends TonTransaction>(payload: Transaction): Promise<Transaction>;
    getAddress(): Address$1;
};

type CreateTransactionOptions = {
    client: TonClient;
};
declare function createTransaction(populatedTransaction: TonTransaction, options: CreateTransactionOptions): Transaction<TonSigner>;

declare const getJettonAddressFromWallet: (contract: OpenedContract<TonBaseMinter>, walletAddress: Address$1) => Promise<Address$1>;

declare function computeContractAddress(code: Cell, storage: Cell): bigint;
declare const initBaseStorage: (owner: AddressTypeLike$1) => Cell;
declare const getUlnReceiveConfigDefault: () => Cell;
declare const getUlnSendConfigDefault: () => Cell;
/**
 * Gets the UlnAddress from the UlnManager address
 * @param owner UlnManager address
 * @param dstEid
 */
declare function computeTonUlnAddress(owner: bigint, dstEid: bigint): bigint;
declare function computeTonEndpointAddress(owner: bigint, dstEid: bigint): bigint;
/**
 *
 * @param owner src OApp address
 * @param dstEid
 * @param dstOApp
 * @param ulnManagerAddress
 * @param ulnAddress Can be derived via computeTonUlnAddress
 */
declare function computeTonUlnConnectionAddress(owner: bigint, dstEid: bigint, dstOApp: bigint, ulnManagerAddress: bigint, ulnAddress: bigint): bigint;
/**
 *
 * @param owner The source OApp address
 * @param dstEid
 * @param dstOApp
 * @param controllerAddress
 * @param endpointAddress endpoint address. Can be derived via computeTonEndpointAddress
 */
declare function computeTonChannelAddress(owner: bigint, dstEid: bigint, dstOApp: bigint, controllerAddress: bigint, endpointAddress: bigint): bigint;

interface MessageItem {
    hash: string;
    source: string;
    destination: string;
    message_content: {
        hash: string;
        body: string;
    };
}
interface TransactionItem {
    hash: string;
    in_msg: MessageItem;
    out_msgs: MessageItem[];
    description: {
        compute_ph: {
            skipped: boolean;
            reason?: string;
        };
    };
}
interface TraceResponse {
    trace_id: string;
    trace: TraceItem;
    is_incomplete: boolean;
    trace_info: {
        trace_state: string;
        messages: number;
        transactions: number;
        pending_messages: number;
        classification_state: string;
    };
    transactions_order: string[];
    transactions: Record<string, TransactionItem>;
}
interface TraceItem {
    tx_hash: string;
    in_msg_hash: string;
    children: TraceItem[];
}
interface TraceItem {
    trace: TraceItem;
    transactions: Record<string, any>;
}
declare class TransactionTrace {
    readonly txHash: string;
    protected readonly apiKey: string;
    readonly stage: Stage;
    loading: boolean;
    data?: TraceResponse;
    error?: Error;
    constructor(txHash: string, apiKey: string, stage: Stage);
    waitForComplete(timeoutInMs: number): Promise<void>;
    update(): Promise<void>;
    get isCompleted(): boolean;
    get successful(): boolean;
}

export { BalanceProvider__ton, MinterConfig, Opcodes, TonBaseMinter, TonContractWrapper, TonSigner, TonTransaction, TransactionTrace, UsdtMinter, UsdtWallet, addressToBigInt, arrayBufferToBase64, asciiStringToBigint, bigIntToAddress, bigintToAddress, buildTonTransferCell, computeContractAddress, computeTonChannelAddress, computeTonEndpointAddress, computeTonUlnAddress, computeTonUlnConnectionAddress, createTransaction, emptyCell, getJettonAddressFromWallet, getUlnReceiveConfigDefault, getUlnSendConfigDefault, initBaseStorage, minterConfigToCell, parseTonAddress, tonAddressToHex, walletConfig, walletConfigToCell };
