import type {BridgeApi} from '@layerzerolabs/ui-bridge-sdk/v1';
import type {CurrencyAmount} from '@layerzerolabs/ui-core';

export type OftBridgeApi<Signer> = BridgeApi<Signer, OftBridgeFee>;
export type OftBridgeFee = {bridgeFee: CurrencyAmount};
