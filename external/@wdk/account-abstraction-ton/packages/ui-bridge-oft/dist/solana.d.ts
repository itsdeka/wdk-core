import { ChainKey, Currency, FeeQuote, AdapterParams, CurrencyAmount, Transaction } from '@layerzerolabs/ui-core';
import { O as OftBridgeConfig, a as OftBridgeDeployment } from './OftBridgeConfig-098dc938.js';
import { O as OftBridgeApi, a as OftBridgeFee } from './OftBridgeApi-6b97cc7a.js';
import * as _metaplex_foundation_beet from '@metaplex-foundation/beet';
import * as _layerzerolabs_ui_evm from '@layerzerolabs/ui-evm';
import { SendHelper, OftPDADeriver } from '@layerzerolabs/lz-solana-sdk-v2';
import { GetMessageFeeInput, GetOutputInput, BridgeOutput, GetDurationInput, GetLimitInput, GetExtraGasInput, GetAllowanceInput, GetOptionsInput, BridgeOptions, GetUnclaimedInput, IsRegisteredInput, TransferInput, ClaimInput, RegisterInput, ApproveInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { SolanaSigner } from '@layerzerolabs/ui-solana';
import { Connection, PublicKey, AccountMeta, TransactionInstruction, Commitment, GetAccountInfoConfig, AddressLookupTableAccount, MessageV0, VersionedTransaction } from '@solana/web3.js';

declare class OftBridgeV3__solana implements OftBridgeApi<SolanaSigner> {
    protected readonly connection: Connection;
    readonly config: OftBridgeConfig;
    protected sendHelper: SendHelper;
    protected derivers: Record<ChainKey, OftPDADeriver>;
    protected logger: typeof console | undefined;
    constructor(connection: Connection, config: OftBridgeConfig, { cacheTime, verbose, }?: {
        verbose?: boolean;
        cacheTime?: number;
    });
    protected getConnection(chainKey: ChainKey): Connection;
    protected getTokenProgramId(chainKey: ChainKey): PublicKey;
    protected getOftProgramId(chainKey: ChainKey): PublicKey;
    protected getDeriver(chainKey: ChainKey): OftPDADeriver;
    protected getOftInstance(chainKey: ChainKey): PublicKey;
    protected validateConfig(config: OftBridgeConfig): void;
    supportsClaim(token: Currency): boolean;
    supportsRegister(token: Currency): boolean;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    protected getQuoteAccounts(srcChainKey: ChainKey, srcAddress: string, dstEid: number): Promise<AccountMeta[]>;
    protected getSendAccounts(srcChainKey: ChainKey, srcAddress: string, dstEid: number): Promise<AccountMeta[]>;
    getMessageFee(input: GetMessageFeeInput): Promise<FeeQuote>;
    createOptions({ adapterParams, dstChainKey, }: {
        adapterParams: AdapterParams;
        dstChainKey: ChainKey;
    }): Promise<_layerzerolabs_ui_evm.Options>;
    getOutput(input: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    getDuration(input: GetDurationInput): Promise<number>;
    getLimit(input: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    protected quoteOft(input: {
        srcAddress: string;
        dstAddress: string;
        srcAmount: CurrencyAmount<Currency>;
        dstAmountMin: CurrencyAmount<Currency>;
        adapterParams: AdapterParams;
    }): Promise<{
        oftLimits: {
            minAmountLd: CurrencyAmount<Currency>;
            maxAmountLd: CurrencyAmount<Currency>;
        };
        oftReceipt: {
            amountReceivedLd: CurrencyAmount<Currency>;
            amountSentLd: CurrencyAmount<Currency>;
        };
        oftFeeDetails: {
            description: string;
            feeAmountLd: CurrencyAmount<Currency>;
        }[];
    }>;
    getExtraGas(input: GetExtraGasInput): Promise<number>;
    getAllowance({ token }: GetAllowanceInput): Promise<CurrencyAmount<Currency>>;
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getUnclaimed({ token }: GetUnclaimedInput): Promise<CurrencyAmount<Currency>>;
    isRegistered(input: IsRegisteredInput): Promise<boolean>;
    transfer(input: TransferInput): Promise<Transaction<SolanaSigner>>;
    claim(input: ClaimInput): Promise<Transaction<SolanaSigner>>;
    register(register: RegisterInput): Promise<Transaction<SolanaSigner>>;
    approve(input: ApproveInput): Promise<Transaction<SolanaSigner>>;
    protected getTransactionInstruction(input: Required<TransferInput>): Promise<TransactionInstruction>;
    protected getPeerInfo(connection: Connection, peer: PublicKey): Promise<{
        readonly address: number[];
        readonly rateLimiter: _metaplex_foundation_beet.COption<{
            capacity: _metaplex_foundation_beet.bignum;
            tokens: _metaplex_foundation_beet.bignum;
            refillPerSecond: _metaplex_foundation_beet.bignum;
            lastRefillTime: _metaplex_foundation_beet.bignum;
        }>;
        readonly bump: number;
        serialize(): [Buffer, number];
        pretty(): {
            address: number[];
            rateLimiter: _metaplex_foundation_beet.COption<{
                capacity: _metaplex_foundation_beet.bignum;
                tokens: _metaplex_foundation_beet.bignum;
                refillPerSecond: _metaplex_foundation_beet.bignum;
                lastRefillTime: _metaplex_foundation_beet.bignum;
            }>;
            bump: number;
        };
    }>;
    protected getPeer(srcChainKey: ChainKey, dstEid: number): PublicKey;
    protected getComputeUnitsLimit(connection: Connection, transactionInstruction: TransactionInstruction, input: TransferInput): Promise<number>;
    protected tryGetDeployment(chainKey: ChainKey): OftBridgeDeployment;
    protected getDeployment(chainKey: ChainKey): OftBridgeDeployment;
    protected chainKeyToEndpointId(chainKey: string): number;
}
declare function buildMessageV0(connection: Connection, payerKey: PublicKey, instructions: TransactionInstruction[], commitmentOrConfig?: Commitment | GetAccountInfoConfig, lookupTableAddresses?: AddressLookupTableAccount[]): Promise<MessageV0>;
declare function buildVersionedTransaction(connection: Connection, payerKey: PublicKey, instructions: TransactionInstruction[], commitmentOrConfig?: Commitment | GetAccountInfoConfig, lookupTableAddresses?: AddressLookupTableAccount[]): Promise<VersionedTransaction>;

export { OftBridgeV3__solana, buildMessageV0, buildVersionedTransaction };
