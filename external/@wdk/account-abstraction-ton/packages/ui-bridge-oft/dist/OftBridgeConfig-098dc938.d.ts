import { Token, Coin, ChainKey } from '@layerzerolabs/ui-core';

type OftProxyContract = {
    chainKey: ChainKey;
    address: string;
    approvalRequired?: boolean;
};
type OftContract = {
    chainKey: ChainKey;
    address: string;
    programId?: string;
};
type OftNativeContract = {
    chainKey: ChainKey;
    address: string;
};
type TokenEscrowContract = {
    address: string;
};
type OftBridgeConfig = {
    fee: boolean;
    version: string | number;
    sharedDecimals: number;
    deployments: {
        [chainKey: ChainKey]: OftBridgeDeployment;
    };
};
type OftBridgeDeployment = {
    eid: number;
    token: Token | Coin;
    tokenEscrow?: TokenEscrowContract;
    oft?: OftContract;
    oftProxy?: OftProxyContract;
    oftNative?: OftNativeContract;
    destinationChains?: string[];
    executorLzReceiveOption?: {
        gasLimit: number;
        nativeValue?: number;
    };
};

export { OftBridgeConfig as O, OftBridgeDeployment as a };
