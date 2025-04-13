import { BridgeApi } from '@layerzerolabs/ui-bridge-sdk/v1';
import { CurrencyAmount } from '@layerzerolabs/ui-core';

type OftBridgeApi<Signer> = BridgeApi<Signer, OftBridgeFee>;
type OftBridgeFee = {
    bridgeFee: CurrencyAmount;
};

export { OftBridgeApi as O, OftBridgeFee as a };
