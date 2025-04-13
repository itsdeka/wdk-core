import * as _layerzerolabs_lz_ton_sdk_v2 from '@layerzerolabs/lz-ton-sdk-v2';
import { FeeQuote, Transaction, CurrencyAmount, Currency, ChainKey } from '@layerzerolabs/ui-core';
import { O as OftBridgeConfig, a as OftBridgeDeployment } from './OftBridgeConfig-098dc938.js';
import { O as OftBridgeApi, a as OftBridgeFee } from './OftBridgeApi-6b97cc7a.js';
import { TonSigner, TonContractWrapper, TonBaseMinter } from '@layerzerolabs/ui-ton';
import { ApproveInput, ClaimInput, GetOutputInput, BridgeOutput, RegisterInput, PartialTransferInput, TransferInput, GetAllowanceInput, GetDurationInput, Seconds, GetExtraGasInput, GetLimitInput, GetMessageFeeInput, GetOptionsInput, BridgeOptions, GetUnclaimedInput, IsRegisteredInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { TonClient, OpenedContract, Cell } from '@ton/ton';
import { Address } from '@ton/core';
import { CacheClass } from 'memory-cache';

interface AddressConfig {
    token: string;
    ulnManager: string;
    controller: string;
    oftProxy: string;
}
interface LoadedUlnConfig {
    confirmations: string;
    confirmationsNull: boolean;
    executor: string;
    executorNull: boolean;
    maxMessageBytes: string;
    optionalDVNs: string[];
    optionalDVNsNull: boolean;
    requiredDVNs: string[];
    requiredDVNsNull: boolean;
    workerQuoteGasLimit: string;
}

declare class OftBridgeV3__ton implements OftBridgeApi<TonSigner> {
    protected readonly client: TonClient;
    readonly config: OftBridgeConfig;
    protected readonly addressConfig: AddressConfig;
    protected readonly ulnConfigs: Record<string, LoadedUlnConfig>;
    contract: OpenedContract<TonContractWrapper>;
    oAppAddress: Address;
    minterContract: OpenedContract<TonBaseMinter>;
    estimatedGasCost: bigint;
    feeCache: CacheClass<string, Promise<FeeQuote>>;
    constructor(client: TonClient, config: OftBridgeConfig, addressConfig: AddressConfig, ulnConfigs: Record<string, LoadedUlnConfig>);
    protected validateConfig(config: OftBridgeConfig): void;
    approve(input: ApproveInput): Promise<Transaction<TonSigner>>;
    claim(input: ClaimInput): Promise<Transaction<TonSigner>>;
    getOutput(input: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    register(register: RegisterInput): Promise<Transaction<TonSigner>>;
    createForwardPayload(input: PartialTransferInput<'dstChainKey' | 'dstAddress'>): Promise<Cell>;
    createTransferBody(input: PartialTransferInput<'srcToken'>): Promise<Cell>;
    transfer(input: Required<TransferInput>): Promise<Transaction<TonSigner>>;
    getGasAsserts(): Promise<bigint>;
    getAllowance(input: GetAllowanceInput): Promise<CurrencyAmount>;
    getDuration(input: GetDurationInput): Promise<Seconds>;
    getExtraGas(input: GetExtraGasInput): Promise<number>;
    getLimit(input: GetLimitInput): Promise<CurrencyAmount>;
    getMessageFee(input: GetMessageFeeInput): Promise<FeeQuote>;
    getLzMessageFee(input: GetMessageFeeInput): Promise<FeeQuote>;
    getUlnConfig(dstDeployment: OftBridgeDeployment): Promise<_layerzerolabs_lz_ton_sdk_v2.DecodedAndRaw<{
        workerQuoteGasLimit: bigint;
        maxMessageBytes: bigint;
        executorNull: boolean;
        requiredDVNs: _layerzerolabs_lz_ton_sdk_v2.EnhancedAddressList;
        executor: _layerzerolabs_lz_ton_sdk_v2.EnhancedAddress;
        requiredDVNsNull: boolean;
        optionalDVNsNull: boolean;
        optionalDVNs: _layerzerolabs_lz_ton_sdk_v2.EnhancedAddressList;
        confirmationsNull: boolean;
        confirmations: bigint;
    }, _layerzerolabs_lz_ton_sdk_v2.EnhancedCell<{
        readonly Controller: {
            readonly "0": {
                readonly fieldName: "Controller::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "Controller::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "Controller::endpointCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "3": {
                readonly fieldName: "Controller::channelCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "4": {
                readonly fieldName: "Controller::zroWallet";
                readonly fieldType: "cl::t::address";
            };
            readonly "5": {
                readonly fieldName: "Controller::tentativeOwner";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "controller";
        };
        readonly BaseStorage: {
            readonly "0": {
                readonly fieldName: "BaseStorage::owner";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "BaseStorage::authenticated";
                readonly fieldType: "cl::t::bool";
            };
            readonly "2": {
                readonly fieldName: "BaseStorage::initialized";
                readonly fieldType: "cl::t::bool";
            };
            readonly "3": {
                readonly fieldName: "BaseStorage::initialStorage";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "baseStore";
        };
        readonly 'md::SetAddress': {
            readonly "0": {
                readonly fieldName: "md::SetAddress::address";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "setAddress";
        };
        readonly 'action::event': {
            readonly "0": {
                readonly fieldName: "action::event::topic";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "1": {
                readonly fieldName: "action::event::body";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "2": {
                readonly fieldName: "action::event::initialStorage";
                readonly fieldType: "cl::t::objRef";
            };
            readonly name: "event";
        };
        readonly 'md::Deploy::NewWithExtraInfo': {
            readonly name: "deploy";
        };
        readonly 'md::InitEndpoint': {
            readonly "0": {
                readonly fieldName: "md::InitEndpoint::channelCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "initEp";
        };
        readonly Endpoint: {
            readonly "0": {
                readonly fieldName: "Endpoint::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "Endpoint::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "Endpoint::dstEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "3": {
                readonly fieldName: "Endpoint::msglibs";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "4": {
                readonly fieldName: "Endpoint::numMsglibs";
                readonly fieldType: "cl::t::uint8";
            };
            readonly "5": {
                readonly fieldName: "Endpoint::channelCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "6": {
                readonly fieldName: "Endpoint::channelStorageInit";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "7": {
                readonly fieldName: "Endpoint::defaultSendMsglibManager";
                readonly fieldType: "cl::t::address";
            };
            readonly "8": {
                readonly fieldName: "Endpoint::defaultSendLibInfo";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "9": {
                readonly fieldName: "Endpoint::defaultReceiveLibInfo";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "10": {
                readonly fieldName: "Endpoint::defaultTimeoutReceiveLibInfo";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "11": {
                readonly fieldName: "Endpoint::defaultExpiry";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "endpoint";
        };
        readonly Counter: {
            readonly "0": {
                readonly fieldName: "Counter::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "Counter::baseOAppStorage";
                readonly fieldType: "BaseOApp";
            };
            readonly "2": {
                readonly fieldName: "Counter::inboundCount";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "3": {
                readonly fieldName: "Counter::outboundCount";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "4": {
                readonly fieldName: "Counter::failNextLzReceive";
                readonly fieldType: "cl::t::bool";
            };
            readonly "5": {
                readonly fieldName: "Counter::id";
                readonly fieldType: "cl::t::uint32";
            };
            readonly name: "counter";
        };
        readonly BaseOApp: {
            readonly "0": {
                readonly fieldName: "BaseOApp::controllerAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "BaseOApp::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "BaseOApp::maxReceivedNonce";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "3": {
                readonly fieldName: "BaseOApp::baseLzReceiveGas";
                readonly fieldType: "cl::t::coins";
            };
            readonly "4": {
                readonly fieldName: "BaseOApp::peers";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "5": {
                readonly fieldName: "BaseOApp::enforcedOptions";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "6": {
                readonly fieldName: "BaseOApp::tentativeOwner";
                readonly fieldType: "cl::t::address";
            };
            readonly "7": {
                readonly fieldName: "BaseOApp::endpointCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "8": {
                readonly fieldName: "BaseOApp::channelCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "9": {
                readonly fieldName: "BaseOApp::endpointInitStorage";
                readonly fieldType: "Endpoint";
            };
            readonly name: "baseOApp";
        };
        readonly 'md::SetPeer': {
            readonly "0": {
                readonly fieldName: "md::SetPeer::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "1": {
                readonly fieldName: "md::SetPeer::peer";
                readonly fieldType: "cl::t::uint256";
            };
            readonly name: "setPeer";
        };
        readonly Channel: {
            readonly "0": {
                readonly fieldName: "Channel::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "Channel::path";
                readonly fieldType: "lz::Path";
            };
            readonly "2": {
                readonly fieldName: "Channel::endpointAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "3": {
                readonly fieldName: "Channel::epConfigOApp";
                readonly fieldType: "lz::EpConfig::NewWithConnection";
            };
            readonly "4": {
                readonly fieldName: "Channel::outboundNonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "5": {
                readonly fieldName: "Channel::sendRequestQueue";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "6": {
                readonly fieldName: "Channel::lastSendRequestId";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "7": {
                readonly fieldName: "Channel::commitPOOO";
                readonly fieldType: "POOO";
            };
            readonly "8": {
                readonly fieldName: "Channel::executePOOO";
                readonly fieldType: "POOO";
            };
            readonly "9": {
                readonly fieldName: "Channel::executionQueue";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "10": {
                readonly fieldName: "Channel::zroBalance";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "channel";
        };
        readonly 'lz::Path': {
            readonly "0": {
                readonly fieldName: "lz::Path::srcEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "1": {
                readonly fieldName: "lz::Path::srcOApp";
                readonly fieldType: "cl::t::address";
            };
            readonly "2": {
                readonly fieldName: "lz::Path::dstEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "3": {
                readonly fieldName: "lz::Path::dstOApp";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "path";
        };
        readonly 'lz::EpConfig::NewWithDefaults': {
            readonly name: "EpConfig";
        };
        readonly POOO: {
            readonly "0": {
                readonly fieldName: "POOO::nextEmpty";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "POOO::bitmap";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "POOO";
        };
        readonly 'md::InitUlnManager': {
            readonly "0": {
                readonly fieldName: "md::InitUlnManager::endpointCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "1": {
                readonly fieldName: "md::InitUlnManager::channelCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "InitUlnMgr";
        };
        readonly UlnManager: {
            readonly "0": {
                readonly fieldName: "UlnManager::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "UlnManager::ulnCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "2": {
                readonly fieldName: "UlnManager::ulnConnectionCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "3": {
                readonly fieldName: "UlnManager::controllerAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "4": {
                readonly fieldName: "UlnManager::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "5": {
                readonly fieldName: "UlnManager::endpointCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "6": {
                readonly fieldName: "UlnManager::channelCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "7": {
                readonly fieldName: "UlnManager::workerFeelibBytecodes";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "8": {
                readonly fieldName: "UlnManager::adminWorkers";
                readonly fieldType: "cl::t::addressList";
            };
            readonly "9": {
                readonly fieldName: "UlnManager::tentativeOwner";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "ulnMgr";
        };
        readonly Dvn: {
            readonly "0": {
                readonly fieldName: "Dvn::workerCoreStorage";
                readonly fieldType: "WorkerCoreStorage";
            };
            readonly "1": {
                readonly fieldName: "Dvn::quorum";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "2": {
                readonly fieldName: "Dvn::verifiers";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "3": {
                readonly fieldName: "Dvn::setQuorumNonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "4": {
                readonly fieldName: "Dvn::setVerifiersNonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "5": {
                readonly fieldName: "Dvn::setAdminsByQuorumNonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "dvn";
        };
        readonly WorkerCoreStorage: {
            readonly "0": {
                readonly fieldName: "WorkerCoreStorage::admins";
                readonly fieldType: "cl::t::addressList";
            };
            readonly "1": {
                readonly fieldName: "WorkerCoreStorage::proxy";
                readonly fieldType: "cl::t::address";
            };
            readonly "2": {
                readonly fieldName: "WorkerCoreStorage::version";
                readonly fieldType: "cl::t::uint256";
            };
            readonly name: "wrkCorStor";
        };
        readonly Proxy: {
            readonly "0": {
                readonly fieldName: "Proxy::workerCoreStorage";
                readonly fieldType: "WorkerCoreStorage";
            };
            readonly "1": {
                readonly fieldName: "Proxy::callbackEnabled";
                readonly fieldType: "cl::t::bool";
            };
            readonly name: "pfProxy";
        };
        readonly Executor: {
            readonly "0": {
                readonly fieldName: "Executor::workerCoreStorage";
                readonly fieldType: "WorkerCoreStorage";
            };
            readonly "1": {
                readonly fieldName: "Executor::nativeDropTotalCap";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "executor";
        };
        readonly PriceFeedCache: {
            readonly "0": {
                readonly fieldName: "PriceFeedCache::workerCoreStorage";
                readonly fieldType: "WorkerCoreStorage";
            };
            readonly "1": {
                readonly fieldName: "PriceFeedCache::priceFeedFeeLibStorage";
                readonly fieldType: "PriceFeedFeelib";
            };
            readonly "2": {
                readonly fieldName: "PriceFeedCache::dstEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly name: "pfCache";
        };
        readonly PriceFeedFeelib: {
            readonly "0": {
                readonly fieldName: "PriceFeedFeelib::priceRatio";
                readonly fieldType: "cl::t::coins";
            };
            readonly "1": {
                readonly fieldName: "PriceFeedFeelib::gasPriceInRemoteUnit";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "2": {
                readonly fieldName: "PriceFeedFeelib::gasPerByte";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "3": {
                readonly fieldName: "PriceFeedFeelib::nativePriceUsd";
                readonly fieldType: "cl::t::coins";
            };
            readonly "4": {
                readonly fieldName: "PriceFeedFeelib::arbitrumExtension";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "5": {
                readonly fieldName: "PriceFeedFeelib::optimismExtension";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "PFFeelib";
        };
        readonly 'md::UlnWorkerFeelibBytecode': {
            readonly "0": {
                readonly fieldName: "md::UlnWorkerFeelibBytecode::bytecode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "Ulnbytecod";
        };
        readonly 'md::InitUln': {
            readonly "0": {
                readonly fieldName: "md::InitUln::connectionCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "1": {
                readonly fieldName: "md::InitUln::treasuryFeeBps";
                readonly fieldType: "cl::t::uint16";
            };
            readonly name: "initUln";
        };
        readonly Uln: {
            readonly "0": {
                readonly fieldName: "Uln::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "Uln::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "Uln::dstEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "3": {
                readonly fieldName: "Uln::defaultUlnReceiveConfig";
                readonly fieldType: "UlnReceiveConfig";
            };
            readonly "4": {
                readonly fieldName: "Uln::defaultUlnSendConfig";
                readonly fieldType: "UlnSendConfig";
            };
            readonly "5": {
                readonly fieldName: "Uln::connectionCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "6": {
                readonly fieldName: "Uln::workerFeelibInfos";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "7": {
                readonly fieldName: "Uln::treasuryFeeBps";
                readonly fieldType: "cl::t::uint16";
            };
            readonly "8": {
                readonly fieldName: "Uln::remainingWorkerSlots";
                readonly fieldType: "cl::t::uint16";
            };
            readonly "9": {
                readonly fieldName: "Uln::remainingAdminWorkerSlots";
                readonly fieldType: "cl::t::uint16";
            };
            readonly name: "uln";
        };
        readonly 'UlnReceiveConfig::NewWithDefaults': {
            readonly name: "UlnRecvCfg";
        };
        readonly 'UlnSendConfig::NewWithDefaults': {
            readonly name: "UlnSendCfg";
        };
        readonly 'md::ExecuteParams': {
            readonly "0": {
                readonly fieldName: "md::ExecuteParams::target";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "md::ExecuteParams::callData";
                readonly fieldType: "UlnWorkerFeelibInfo";
            };
            readonly "2": {
                readonly fieldName: "md::ExecuteParams::expiration";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "3": {
                readonly fieldName: "md::ExecuteParams::opcode";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "4": {
                readonly fieldName: "md::ExecuteParams::forwardingAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "execParams";
        };
        readonly UlnWorkerFeelibInfo: {
            readonly "0": {
                readonly fieldName: "UlnWorkerFeelibInfo::workerAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "UlnWorkerFeelibInfo::workerFeelibBytecode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "2": {
                readonly fieldName: "UlnWorkerFeelibInfo::workerFeelibStorage";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "3": {
                readonly fieldName: "UlnWorkerFeelibInfo::friendWorkerAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "4": {
                readonly fieldName: "UlnWorkerFeelibInfo::dstEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "5": {
                readonly fieldName: "UlnWorkerFeelibInfo::rentBalance";
                readonly fieldType: "cl::t::coins";
            };
            readonly "6": {
                readonly fieldName: "UlnWorkerFeelibInfo::lastRentTimestamp";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "7": {
                readonly fieldName: "UlnWorkerFeelibInfo::isAdmin";
                readonly fieldType: "cl::t::bool";
            };
            readonly name: "UlnWrkInfo";
        };
        readonly DvnFeelib: {
            readonly "0": {
                readonly fieldName: "DvnFeelib::quorum";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "DvnFeelib::remoteGas";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "2": {
                readonly fieldName: "DvnFeelib::multiplierBps";
                readonly fieldType: "cl::t::uint16";
            };
            readonly "3": {
                readonly fieldName: "DvnFeelib::floorMarginUSD";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "UlnDvnFl";
        };
        readonly 'md::MdEid': {
            readonly "0": {
                readonly fieldName: "md::MdEid::md";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "1": {
                readonly fieldName: "md::MdEid::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly name: "MdEid";
        };
        readonly 'md::AddMsglib': {
            readonly "0": {
                readonly fieldName: "md::AddMsglib::msglibManagerAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "md::AddMsglib::dstEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly name: "addMsgLib";
        };
        readonly 'lz::MsglibInfo': {
            readonly "0": {
                readonly fieldName: "lz::MsglibInfo::msglibAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "lz::MsglibInfo::msglibConnectionCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "2": {
                readonly fieldName: "lz::MsglibInfo::msglibConnectionInitStorage";
                readonly fieldType: "UlnConnection";
            };
            readonly name: "MsglibInfo";
        };
        readonly UlnConnection: {
            readonly "0": {
                readonly fieldName: "UlnConnection::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "UlnConnection::path";
                readonly fieldType: "lz::Path";
            };
            readonly "2": {
                readonly fieldName: "UlnConnection::endpointAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "3": {
                readonly fieldName: "UlnConnection::channelAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "4": {
                readonly fieldName: "UlnConnection::firstUnexecutedNonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "5": {
                readonly fieldName: "UlnConnection::ulnAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "6": {
                readonly fieldName: "UlnConnection::UlnSendConfigOApp";
                readonly fieldType: "UlnSendConfig";
            };
            readonly "7": {
                readonly fieldName: "UlnConnection::UlnReceiveConfigOApp";
                readonly fieldType: "UlnReceiveConfig";
            };
            readonly "8": {
                readonly fieldName: "UlnConnection::hashLookups";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "9": {
                readonly fieldName: "UlnConnection::commitPOOO";
                readonly fieldType: "POOO";
            };
            readonly name: "connection";
        };
        readonly 'md::MdAddress': {
            readonly "0": {
                readonly fieldName: "md::MdAddress::md";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "1": {
                readonly fieldName: "md::MdAddress::address";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "MdAddr";
        };
        readonly 'md::InitUlnConnection::NewOnlyConfig': {
            readonly name: "initUlnCon";
        };
        readonly 'md::SetEpConfig': {
            readonly "0": {
                readonly fieldName: "md::SetEpConfig::useDefaults";
                readonly fieldType: "cl::t::bool";
            };
            readonly "1": {
                readonly fieldName: "md::SetEpConfig::sendMsglibManager";
                readonly fieldType: "cl::t::address";
            };
            readonly "2": {
                readonly fieldName: "md::SetEpConfig::receiveMsglibManager";
                readonly fieldType: "cl::t::address";
            };
            readonly "3": {
                readonly fieldName: "md::SetEpConfig::timeoutReceiveMsglibManager";
                readonly fieldType: "cl::t::address";
            };
            readonly "4": {
                readonly fieldName: "md::SetEpConfig::timeoutReceiveMsglibExpiry";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "SetEpCfg";
        };
        readonly 'md::ClaimTon': {
            readonly "0": {
                readonly fieldName: "md::ClaimTon::amount";
                readonly fieldType: "cl::t::coins";
            };
            readonly "1": {
                readonly fieldName: "md::ClaimTon::target";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "claimTon";
        };
        readonly 'md::CounterIncrement': {
            readonly "0": {
                readonly fieldName: "md::CounterIncrement::dstEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "1": {
                readonly fieldName: "md::CounterIncrement::incrementType";
                readonly fieldType: "cl::t::uint8";
            };
            readonly "2": {
                readonly fieldName: "md::CounterIncrement::extraOptions";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "3": {
                readonly fieldName: "md::CounterIncrement::nativeFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "4": {
                readonly fieldName: "md::CounterIncrement::zroFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "countIncr";
        };
        readonly 'md::LzSend': {
            readonly "0": {
                readonly fieldName: "md::LzSend::sendRequestId";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "md::LzSend::sendMsglibManager";
                readonly fieldType: "cl::t::address";
            };
            readonly "2": {
                readonly fieldName: "md::LzSend::sendMsglib";
                readonly fieldType: "cl::t::address";
            };
            readonly "3": {
                readonly fieldName: "md::LzSend::sendMsglibConnection";
                readonly fieldType: "cl::t::address";
            };
            readonly "4": {
                readonly fieldName: "md::LzSend::packet";
                readonly fieldType: "lz::Packet";
            };
            readonly "5": {
                readonly fieldName: "md::LzSend::nativeFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "6": {
                readonly fieldName: "md::LzSend::zroFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "7": {
                readonly fieldName: "md::LzSend::extraOptions";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "8": {
                readonly fieldName: "md::LzSend::enforcedOptions";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "9": {
                readonly fieldName: "md::LzSend::callbackData";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "lzSend";
        };
        readonly 'lz::Packet': {
            readonly "0": {
                readonly fieldName: "lz::Packet::path";
                readonly fieldType: "lz::Path";
            };
            readonly "1": {
                readonly fieldName: "lz::Packet::message";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "2": {
                readonly fieldName: "lz::Packet::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "3": {
                readonly fieldName: "lz::Packet::guid";
                readonly fieldType: "cl::t::uint256";
            };
            readonly name: "Packet";
        };
        readonly 'md::MdObj': {
            readonly "0": {
                readonly fieldName: "md::MdObj::md";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "1": {
                readonly fieldName: "md::MdObj::obj";
                readonly fieldType: "cl::t::objRef";
            };
            readonly name: "MdObj";
        };
        readonly 'lz::SendEpConfig': {
            readonly "0": {
                readonly fieldName: "lz::SendEpConfig::sendMsglibManager";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "lz::SendEpConfig::sendMsglib";
                readonly fieldType: "cl::t::address";
            };
            readonly "2": {
                readonly fieldName: "lz::SendEpConfig::sendMsglibConnection";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "SendEpCfg";
        };
        readonly 'md::UlnSend': {
            readonly "0": {
                readonly fieldName: "md::UlnSend::lzSend";
                readonly fieldType: "md::LzSend";
            };
            readonly "1": {
                readonly fieldName: "md::UlnSend::customUlnSendConfig";
                readonly fieldType: "UlnSendConfig";
            };
            readonly "2": {
                readonly fieldName: "md::UlnSend::connectionInitialStorage";
                readonly fieldType: "UlnConnection";
            };
            readonly "3": {
                readonly fieldName: "md::UlnSend::forwardingAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "UlnSend";
        };
        readonly 'md::MsglibSendCallback': {
            readonly "0": {
                readonly fieldName: "md::MsglibSendCallback::nativeFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "1": {
                readonly fieldName: "md::MsglibSendCallback::zroFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "2": {
                readonly fieldName: "md::MsglibSendCallback::lzSend";
                readonly fieldType: "md::LzSend";
            };
            readonly "3": {
                readonly fieldName: "md::MsglibSendCallback::packetEncoded";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "4": {
                readonly fieldName: "md::MsglibSendCallback::payees";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "5": {
                readonly fieldName: "md::MsglibSendCallback::nonceByteOffset";
                readonly fieldType: "cl::t::uint16";
            };
            readonly "6": {
                readonly fieldName: "md::MsglibSendCallback::nonceBytes";
                readonly fieldType: "cl::t::uint8";
            };
            readonly "7": {
                readonly fieldName: "md::MsglibSendCallback::guidByteOffset";
                readonly fieldType: "cl::t::uint16";
            };
            readonly "8": {
                readonly fieldName: "md::MsglibSendCallback::guidBytes";
                readonly fieldType: "cl::t::uint8";
            };
            readonly "9": {
                readonly fieldName: "md::MsglibSendCallback::msglibSendEvents";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "10": {
                readonly fieldName: "md::MsglibSendCallback::errorCode";
                readonly fieldType: "cl::t::uint8";
            };
            readonly name: "libSndCb";
        };
        readonly UlnEvents: {
            readonly "0": {
                readonly fieldName: "UlnEvents::workerEvents";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "1": {
                readonly fieldName: "UlnEvents::dvnFeesPaidEvent";
                readonly fieldType: "DvnFeesPaidEvent";
            };
            readonly "2": {
                readonly fieldName: "UlnEvents::executorFeePaidEvent";
                readonly fieldType: "ExecutorFeePaidEvent";
            };
            readonly name: "UlnEvents";
        };
        readonly DvnFeesPaidEvent: {
            readonly "0": {
                readonly fieldName: "DvnFeesPaidEvent::requiredDVNs";
                readonly fieldType: "cl::t::addressList";
            };
            readonly "1": {
                readonly fieldName: "DvnFeesPaidEvent::optionalDVNs";
                readonly fieldType: "cl::t::addressList";
            };
            readonly "2": {
                readonly fieldName: "DvnFeesPaidEvent::serializedPayees";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "DvnFeePaid";
        };
        readonly ExecutorFeePaidEvent: {
            readonly "0": {
                readonly fieldName: "ExecutorFeePaidEvent::executorAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "ExecutorFeePaidEvent::feePaid";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "ExcFeePaid";
        };
        readonly 'md::SignedRequest': {
            readonly "0": {
                readonly fieldName: "md::SignedRequest::request";
                readonly fieldType: "md::ExecuteParams";
            };
            readonly "1": {
                readonly fieldName: "md::SignedRequest::signatures";
                readonly fieldType: "cl::t::dict256";
            };
            readonly name: "sgndReq";
        };
        readonly 'md::ExtendedMd': {
            readonly "0": {
                readonly fieldName: "md::ExtendedMd::md";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "1": {
                readonly fieldName: "md::ExtendedMd::obj";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "2": {
                readonly fieldName: "md::ExtendedMd::forwardingAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "extendedMd";
        };
        readonly 'md::UlnVerification': {
            readonly "0": {
                readonly fieldName: "md::UlnVerification::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "md::UlnVerification::attestation";
                readonly fieldType: "lz::Attestation";
            };
            readonly name: "UlnVerify";
        };
        readonly 'lz::Attestation': {
            readonly "0": {
                readonly fieldName: "lz::Attestation::hash";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "1": {
                readonly fieldName: "lz::Attestation::confirmations";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "Attest";
        };
        readonly 'md::ChannelNonceInfo': {
            readonly "0": {
                readonly fieldName: "md::ChannelNonceInfo::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "md::ChannelNonceInfo::firstUnexecutedNonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "cNonceInfo";
        };
        readonly 'md::LzReceivePrepare': {
            readonly "0": {
                readonly fieldName: "md::LzReceivePrepare::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "md::LzReceivePrepare::nanotons";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "lzrecvprep";
        };
        readonly 'md::Nonce': {
            readonly "0": {
                readonly fieldName: "md::Nonce::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "nonce";
        };
        readonly 'md::LzReceiveStatus::NewFull': {
            readonly "0": {
                readonly fieldName: "md::LzReceiveStatus::NewFull::success";
                readonly fieldType: "cl::t::bool";
            };
            readonly "1": {
                readonly fieldName: "md::LzReceiveStatus::NewFull::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "2": {
                readonly fieldName: "md::LzReceiveStatus::NewFull::value";
                readonly fieldType: "cl::t::coins";
            };
            readonly "3": {
                readonly fieldName: "md::LzReceiveStatus::NewFull::extraData";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "4": {
                readonly fieldName: "md::LzReceiveStatus::NewFull::reason";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "5": {
                readonly fieldName: "md::LzReceiveStatus::NewFull::sender";
                readonly fieldType: "cl::t::address";
            };
            readonly "6": {
                readonly fieldName: "md::LzReceiveStatus::NewFull::packet";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "7": {
                readonly fieldName: "md::LzReceiveStatus::NewFull::executionStatus";
                readonly fieldType: "cl::t::uint8";
            };
            readonly name: "LzRecvSts";
        };
        readonly 'md::CoinsAmount': {
            readonly "0": {
                readonly fieldName: "md::CoinsAmount::amount";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "coinsAmt";
        };
        readonly 'md::NativeDrop': {
            readonly "0": {
                readonly fieldName: "md::NativeDrop::payees";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "1": {
                readonly fieldName: "md::NativeDrop::packetId";
                readonly fieldType: "md::PacketId";
            };
            readonly "2": {
                readonly fieldName: "md::NativeDrop::msglib";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "NativeDrop";
        };
        readonly 'md::PacketId': {
            readonly "0": {
                readonly fieldName: "md::PacketId::path";
                readonly fieldType: "lz::Path";
            };
            readonly "1": {
                readonly fieldName: "md::PacketId::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "pktId";
        };
        readonly 'lz::Config': {
            readonly "0": {
                readonly fieldName: "lz::Config::path";
                readonly fieldType: "lz::Path";
            };
            readonly "1": {
                readonly fieldName: "lz::Config::forwardingAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "2": {
                readonly fieldName: "lz::Config::opCode";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "3": {
                readonly fieldName: "lz::Config::config";
                readonly fieldType: "cl::t::objRef";
            };
            readonly name: "Config";
        };
        readonly 'md::TreasuryFeeBps': {
            readonly "0": {
                readonly fieldName: "md::TreasuryFeeBps::treasuryFeeBps";
                readonly fieldType: "cl::t::uint16";
            };
            readonly name: "tfeebps";
        };
        readonly 'lz::EpConfig::NewWithConnection': {
            readonly "0": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::isNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "1": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::sendMsglibManager";
                readonly fieldType: "cl::t::address";
            };
            readonly "2": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::sendMsglib";
                readonly fieldType: "cl::t::address";
            };
            readonly "3": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::sendMsglibConnection";
                readonly fieldType: "cl::t::address";
            };
            readonly "4": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::receiveMsglib";
                readonly fieldType: "cl::t::address";
            };
            readonly "5": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::receiveMsglibConnection";
                readonly fieldType: "cl::t::address";
            };
            readonly "6": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::timeoutReceiveMsglib";
                readonly fieldType: "cl::t::address";
            };
            readonly "7": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::timeoutReceiveMsglibConnection";
                readonly fieldType: "cl::t::address";
            };
            readonly "8": {
                readonly fieldName: "lz::EpConfig::NewWithConnection::timeoutReceiveMsglibExpiry";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "EpConfig";
        };
        readonly 'lz::EpConfig': {
            readonly name: "EpConfig";
        };
        readonly 'lz::ReceiveEpConfig': {
            readonly "0": {
                readonly fieldName: "lz::ReceiveEpConfig::receiveMsglibConnection";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "lz::ReceiveEpConfig::timeoutReceiveMsglibConnection";
                readonly fieldType: "cl::t::address";
            };
            readonly "2": {
                readonly fieldName: "lz::ReceiveEpConfig::expiry";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "RcvEpCfg";
        };
        readonly 'lz::SmlJobAssigned': {
            readonly "0": {
                readonly fieldName: "lz::SmlJobAssigned::executorAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "lz::SmlJobAssigned::fee";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "SmlJobAssg";
        };
        readonly 'md::Bool': {
            readonly "0": {
                readonly fieldName: "md::Bool::bool";
                readonly fieldType: "cl::t::bool";
            };
            readonly name: "Bool";
        };
        readonly 'md::Deploy': {
            readonly "0": {
                readonly fieldName: "md::Deploy::initialDeposit";
                readonly fieldType: "cl::t::coins";
            };
            readonly "1": {
                readonly fieldName: "md::Deploy::dstEid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "md::Deploy::dstOApp";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "3": {
                readonly fieldName: "md::Deploy::extraInfo";
                readonly fieldType: "cl::t::objRef";
            };
            readonly name: "deploy";
        };
        readonly 'md::getMsglibInfoCallback': {
            readonly "0": {
                readonly fieldName: "md::getMsglibInfoCallback::msglibAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "md::getMsglibInfoCallback::connectionCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "getMsgLbCb";
        };
        readonly 'md::InitSmlConnection': {
            readonly "0": {
                readonly fieldName: "md::InitSmlConnection::channelAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "initSmlCon";
        };
        readonly 'md::LzReceiveStatus': {
            readonly "0": {
                readonly fieldName: "md::LzReceiveStatus::success";
                readonly fieldType: "cl::t::bool";
            };
            readonly "1": {
                readonly fieldName: "md::LzReceiveStatus::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "2": {
                readonly fieldName: "md::LzReceiveStatus::value";
                readonly fieldType: "cl::t::coins";
            };
            readonly "3": {
                readonly fieldName: "md::LzReceiveStatus::extraData";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "4": {
                readonly fieldName: "md::LzReceiveStatus::reason";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "5": {
                readonly fieldName: "md::LzReceiveStatus::sender";
                readonly fieldType: "cl::t::address";
            };
            readonly "6": {
                readonly fieldName: "md::LzReceiveStatus::packet";
                readonly fieldType: "lz::Packet";
            };
            readonly "7": {
                readonly fieldName: "md::LzReceiveStatus::executionStatus";
                readonly fieldType: "cl::t::uint8";
            };
            readonly name: "LzRecvSts";
        };
        readonly 'md::MessagingReceipt': {
            readonly "0": {
                readonly fieldName: "md::MessagingReceipt::lzSend";
                readonly fieldType: "md::LzSend";
            };
            readonly "1": {
                readonly fieldName: "md::MessagingReceipt::nativeFeeActual";
                readonly fieldType: "cl::t::coins";
            };
            readonly "2": {
                readonly fieldName: "md::MessagingReceipt::zroFeeActual";
                readonly fieldType: "cl::t::coins";
            };
            readonly "3": {
                readonly fieldName: "md::MessagingReceipt::errorCode";
                readonly fieldType: "cl::t::uint16";
            };
            readonly name: "MsgReceipt";
        };
        readonly 'md::OptionsExtended': {
            readonly "0": {
                readonly fieldName: "md::OptionsExtended::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "1": {
                readonly fieldName: "md::OptionsExtended::msgType";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "md::OptionsExtended::options";
                readonly fieldType: "cl::t::objRef";
            };
            readonly name: "OptionsExt";
        };
        readonly 'md::OptionsV1': {
            readonly "0": {
                readonly fieldName: "md::OptionsV1::lzReceiveGas";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "1": {
                readonly fieldName: "md::OptionsV1::lzReceiveValue";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "2": {
                readonly fieldName: "md::OptionsV1::nativeDropAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "3": {
                readonly fieldName: "md::OptionsV1::nativeDropAmount";
                readonly fieldType: "cl::t::uint256";
            };
            readonly name: "OptionsV1";
        };
        readonly 'md::OptionsV2': {
            readonly "0": {
                readonly fieldName: "md::OptionsV2::lzReceiveGas";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "1": {
                readonly fieldName: "md::OptionsV2::lzReceiveValue";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "2": {
                readonly fieldName: "md::OptionsV2::lzComposeGas";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "3": {
                readonly fieldName: "md::OptionsV2::lzComposeValue";
                readonly fieldType: "cl::t::uint256";
            };
            readonly "4": {
                readonly fieldName: "md::OptionsV2::nativeDropAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "5": {
                readonly fieldName: "md::OptionsV2::nativeDropAmount";
                readonly fieldType: "cl::t::uint256";
            };
            readonly name: "OptionsV2";
        };
        readonly 'md::PacketSent': {
            readonly "0": {
                readonly fieldName: "md::PacketSent::nativeFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "1": {
                readonly fieldName: "md::PacketSent::zroFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "2": {
                readonly fieldName: "md::PacketSent::extraOptions";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "3": {
                readonly fieldName: "md::PacketSent::enforcedOptions";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "4": {
                readonly fieldName: "md::PacketSent::packetEncoded";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "5": {
                readonly fieldName: "md::PacketSent::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "6": {
                readonly fieldName: "md::PacketSent::msglibAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "7": {
                readonly fieldName: "md::PacketSent::msglibSendEvents";
                readonly fieldType: "cl::t::objRef";
            };
            readonly name: "pktSent";
        };
        readonly 'md::SetSmlManagerConfig': {
            readonly "0": {
                readonly fieldName: "md::SetSmlManagerConfig::nativeFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "1": {
                readonly fieldName: "md::SetSmlManagerConfig::zroFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "setSmlCfg";
        };
        readonly SmlConnection: {
            readonly "0": {
                readonly fieldName: "SmlConnection::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "SmlConnection::path";
                readonly fieldType: "lz::Path";
            };
            readonly "2": {
                readonly fieldName: "SmlConnection::channelAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "smlConn";
        };
        readonly SmlManager: {
            readonly "0": {
                readonly fieldName: "SmlManager::baseStorage";
                readonly fieldType: "BaseStorage";
            };
            readonly "1": {
                readonly fieldName: "SmlManager::eid";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "SmlManager::verison";
                readonly fieldType: "cl::t::uint8";
            };
            readonly "3": {
                readonly fieldName: "SmlManager::nativeFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "4": {
                readonly fieldName: "SmlManager::zroFee";
                readonly fieldType: "cl::t::coins";
            };
            readonly "5": {
                readonly fieldName: "SmlManager::packets";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "6": {
                readonly fieldName: "SmlManager::controllerAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "7": {
                readonly fieldName: "SmlManager::endpointCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "8": {
                readonly fieldName: "SmlManager::channelCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly "9": {
                readonly fieldName: "SmlManager::smlConnectionCode";
                readonly fieldType: "cl::t::cellRef";
            };
            readonly name: "smlMgr";
        };
        readonly 'md::InitUlnConnection': {
            readonly "0": {
                readonly fieldName: "md::InitUlnConnection::ulnSendConfigOApp";
                readonly fieldType: "UlnSendConfig";
            };
            readonly "1": {
                readonly fieldName: "md::InitUlnConnection::ulnReceiveConfigOApp";
                readonly fieldType: "UlnReceiveConfig";
            };
            readonly "2": {
                readonly fieldName: "md::InitUlnConnection::endpointAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "3": {
                readonly fieldName: "md::InitUlnConnection::channelAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "initUlnCon";
        };
        readonly 'md::RentRefill': {
            readonly "0": {
                readonly fieldName: "md::RentRefill::address";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "md::RentRefill::amount";
                readonly fieldType: "cl::t::coins";
            };
            readonly name: "RentRefill";
        };
        readonly 'md::SetAdminWorkerAddresses': {
            readonly "0": {
                readonly fieldName: "md::SetAdminWorkerAddresses::adminWorkers";
                readonly fieldType: "cl::t::addressList";
            };
            readonly name: "adminwork";
        };
        readonly UlnReceiveConfig: {
            readonly "0": {
                readonly fieldName: "UlnReceiveConfig::minCommitPacketGasNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "1": {
                readonly fieldName: "UlnReceiveConfig::minCommitPacketGas";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "UlnReceiveConfig::confirmationsNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "3": {
                readonly fieldName: "UlnReceiveConfig::confirmations";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "4": {
                readonly fieldName: "UlnReceiveConfig::requiredDVNsNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "5": {
                readonly fieldName: "UlnReceiveConfig::requiredDVNs";
                readonly fieldType: "cl::t::addressList";
            };
            readonly "6": {
                readonly fieldName: "UlnReceiveConfig::optionalDVNsNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "7": {
                readonly fieldName: "UlnReceiveConfig::optionalDVNs";
                readonly fieldType: "cl::t::addressList";
            };
            readonly "8": {
                readonly fieldName: "UlnReceiveConfig::optionalDVNThreshold";
                readonly fieldType: "cl::t::uint8";
            };
            readonly name: "UlnRecvCfg";
        };
        readonly UlnSendConfig: {
            readonly "0": {
                readonly fieldName: "UlnSendConfig::workerQuoteGasLimit";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "1": {
                readonly fieldName: "UlnSendConfig::maxMessageBytes";
                readonly fieldType: "cl::t::uint32";
            };
            readonly "2": {
                readonly fieldName: "UlnSendConfig::executorNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "3": {
                readonly fieldName: "UlnSendConfig::executor";
                readonly fieldType: "cl::t::address";
            };
            readonly "4": {
                readonly fieldName: "UlnSendConfig::requiredDVNsNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "5": {
                readonly fieldName: "UlnSendConfig::requiredDVNs";
                readonly fieldType: "cl::t::addressList";
            };
            readonly "6": {
                readonly fieldName: "UlnSendConfig::optionalDVNsNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "7": {
                readonly fieldName: "UlnSendConfig::optionalDVNs";
                readonly fieldType: "cl::t::addressList";
            };
            readonly "8": {
                readonly fieldName: "UlnSendConfig::confirmationsNull";
                readonly fieldType: "cl::t::bool";
            };
            readonly "9": {
                readonly fieldName: "UlnSendConfig::confirmations";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "UlnSendCfg";
        };
        readonly 'md::UlnWorkerFeelibEvents': {
            readonly "0": {
                readonly fieldName: "md::UlnWorkerFeelibEvents::workerAddress";
                readonly fieldType: "cl::t::address";
            };
            readonly "1": {
                readonly fieldName: "md::UlnWorkerFeelibEvents::workerEvents";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "2": {
                readonly fieldName: "md::UlnWorkerFeelibEvents::nextWorkerEvents";
                readonly fieldType: "cl::t::objRef";
            };
            readonly name: "UlnWrkEvnt";
        };
        readonly 'md::VerificationStatus': {
            readonly "0": {
                readonly fieldName: "md::VerificationStatus::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "md::VerificationStatus::status";
                readonly fieldType: "cl::t::uint32";
            };
            readonly name: "veristatus";
        };
        readonly ComputeSizeGasTest: {
            readonly "0": {
                readonly fieldName: "ComputeSizeGasTest::baseStorage";
                readonly fieldType: "cl::t::objRef";
            };
            readonly "1": {
                readonly fieldName: "ComputeSizeGasTest::mockDict";
                readonly fieldType: "cl::t::dict256";
            };
            readonly name: "cmptGas";
        };
        readonly ExecutorFeelib: {
            readonly "0": {
                readonly fieldName: "ExecutorFeelib::lzReceiveBaseGas";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "ExecutorFeelib::multiplierBps";
                readonly fieldType: "cl::t::uint16";
            };
            readonly "2": {
                readonly fieldName: "ExecutorFeelib::floorMarginUSD";
                readonly fieldType: "cl::t::coins";
            };
            readonly "3": {
                readonly fieldName: "ExecutorFeelib::nativeCap";
                readonly fieldType: "cl::t::coins";
            };
            readonly "4": {
                readonly fieldName: "ExecutorFeelib::lzComposeBaseGas";
                readonly fieldType: "cl::t::uint64";
            };
            readonly name: "UlnExecutr";
        };
        readonly ArbitrumPriceFeedExtension: {
            readonly "0": {
                readonly fieldName: "ArbitrumPriceFeedExtension::gasPerL2Tx";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "ArbitrumPriceFeedExtension::gasPerL1CallDataByte";
                readonly fieldType: "cl::t::uint32";
            };
            readonly name: "ArbFeeExt";
        };
        readonly 'md::SetDict': {
            readonly "0": {
                readonly fieldName: "md::SetDict::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "md::SetDict::opcode";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "2": {
                readonly fieldName: "md::SetDict::dict";
                readonly fieldType: "cl::t::dict256";
            };
            readonly "3": {
                readonly fieldName: "md::SetDict::target";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "setDct";
        };
        readonly 'md::SetQuorum': {
            readonly "0": {
                readonly fieldName: "md::SetQuorum::nonce";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "1": {
                readonly fieldName: "md::SetQuorum::opcode";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "2": {
                readonly fieldName: "md::SetQuorum::quorum";
                readonly fieldType: "cl::t::uint64";
            };
            readonly "3": {
                readonly fieldName: "md::SetQuorum::target";
                readonly fieldType: "cl::t::address";
            };
            readonly name: "setQuorum";
        };
    }>>>;
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getUnclaimed(input: GetUnclaimedInput): Promise<CurrencyAmount>;
    isRegistered(input: IsRegisteredInput): Promise<boolean>;
    supportsClaim(currency: Currency): boolean;
    supportsRegister(currency: Currency): boolean;
    protected tryGetDeployment(chainKey: ChainKey): OftBridgeDeployment;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
}

declare class OftBridgeApiFactory__ton {
    protected readonly client: TonClient;
    protected readonly addressConfig: AddressConfig;
    protected readonly ulnConfigs: Record<string, LoadedUlnConfig>;
    constructor(client: TonClient, addressConfig: AddressConfig, ulnConfigs: Record<string, LoadedUlnConfig>);
    create(config: OftBridgeConfig): OftBridgeV3__ton;
}

declare function ulnConfigKey(oftName: string, srcChainKey: string, dstChainKey: string): string;

export { AddressConfig, LoadedUlnConfig, OftBridgeApiFactory__ton, OftBridgeV3__ton, ulnConfigKey };
