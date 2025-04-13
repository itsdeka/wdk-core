import * as _layerzerolabs_ui_core from '@layerzerolabs/ui-core';
import z from 'zod';
import { O as OftBridgeConfig } from './OftBridgeConfig-098dc938.js';
export { a as OftBridgeDeployment } from './OftBridgeConfig-098dc938.js';
export { O as OftBridgeApi, a as OftBridgeFee } from './OftBridgeApi-6b97cc7a.js';
import '@layerzerolabs/ui-bridge-sdk/v1';

declare const oftBridgeConfigSchema: z.ZodEffects<z.ZodObject<{
    fee: z.ZodBoolean;
    version: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    sharedDecimals: z.ZodNumber;
    deployments: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        eid: z.ZodNumber;
        token: z.ZodType<_layerzerolabs_ui_core.Currency, z.ZodTypeDef, {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        }>;
        tokenEscrow: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        executorLzReceiveOption: z.ZodOptional<z.ZodObject<{
            gasLimit: z.ZodNumber;
            nativeValue: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            gasLimit: number;
            nativeValue?: number | undefined;
        }, {
            gasLimit: number;
            nativeValue?: number | undefined;
        }>>;
        destinationChains: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, {
        oftProxy: z.ZodObject<{
            address: z.ZodString;
            approvalRequired: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            address: string;
            approvalRequired?: boolean | undefined;
        }, {
            address: string;
            approvalRequired?: boolean | undefined;
        }>;
        oftNative: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
    }>, "strip", z.ZodTypeAny, {
        eid: number;
        token: _layerzerolabs_ui_core.Currency;
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        eid: z.ZodNumber;
        token: z.ZodType<_layerzerolabs_ui_core.Currency, z.ZodTypeDef, {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        }>;
        tokenEscrow: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        executorLzReceiveOption: z.ZodOptional<z.ZodObject<{
            gasLimit: z.ZodNumber;
            nativeValue: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            gasLimit: number;
            nativeValue?: number | undefined;
        }, {
            gasLimit: number;
            nativeValue?: number | undefined;
        }>>;
        destinationChains: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, {
        oftNative: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
    }>, "strip", z.ZodTypeAny, {
        eid: number;
        token: _layerzerolabs_ui_core.Currency;
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        eid: z.ZodNumber;
        token: z.ZodType<_layerzerolabs_ui_core.Currency, z.ZodTypeDef, {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        }>;
        tokenEscrow: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        executorLzReceiveOption: z.ZodOptional<z.ZodObject<{
            gasLimit: z.ZodNumber;
            nativeValue: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            gasLimit: number;
            nativeValue?: number | undefined;
        }, {
            gasLimit: number;
            nativeValue?: number | undefined;
        }>>;
        destinationChains: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, {
        oftProxy: z.ZodObject<{
            address: z.ZodString;
            approvalRequired: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            address: string;
            approvalRequired?: boolean | undefined;
        }, {
            address: string;
            approvalRequired?: boolean | undefined;
        }>;
    }>, "strip", z.ZodTypeAny, {
        eid: number;
        token: _layerzerolabs_ui_core.Currency;
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        eid: z.ZodNumber;
        token: z.ZodType<_layerzerolabs_ui_core.Currency, z.ZodTypeDef, {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        }>;
        tokenEscrow: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        executorLzReceiveOption: z.ZodOptional<z.ZodObject<{
            gasLimit: z.ZodNumber;
            nativeValue: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            gasLimit: number;
            nativeValue?: number | undefined;
        }, {
            gasLimit: number;
            nativeValue?: number | undefined;
        }>>;
        destinationChains: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, {
        token: z.ZodType<_layerzerolabs_ui_core.Token, z.ZodTypeDef, {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        }>;
        oft: z.ZodOptional<z.ZodObject<{
            programId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            programId: string;
        }, {
            programId: string;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        eid: number;
        token: _layerzerolabs_ui_core.Token;
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
        oft?: {
            programId: string;
        } | undefined;
    }, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
        oft?: {
            programId: string;
        } | undefined;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    fee: boolean;
    version: string | number;
    sharedDecimals: number;
    deployments: Record<string, {
        eid: number;
        token: _layerzerolabs_ui_core.Token;
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
        oft?: {
            programId: string;
        } | undefined;
    } | {
        eid: number;
        token: _layerzerolabs_ui_core.Currency;
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    } | {
        eid: number;
        token: _layerzerolabs_ui_core.Currency;
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    } | {
        eid: number;
        token: _layerzerolabs_ui_core.Currency;
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }>;
}, {
    fee: boolean;
    version: string | number;
    sharedDecimals: number;
    deployments: Record<string, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
        oft?: {
            programId: string;
        } | undefined;
    } | {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    } | {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    } | {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }>;
}>, OftBridgeConfig, {
    fee: boolean;
    version: string | number;
    sharedDecimals: number;
    deployments: Record<string, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
        oft?: {
            programId: string;
        } | undefined;
    } | {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    } | {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    } | {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            chainKey: string;
            address: string;
            name?: string | undefined;
        } | {
            symbol: string;
            decimals: number;
            chainKey: string;
            name?: string | undefined;
        };
        oftProxy: {
            address: string;
            approvalRequired?: boolean | undefined;
        };
        oftNative: {
            address: string;
        };
        tokenEscrow?: {
            address: string;
        } | undefined;
        executorLzReceiveOption?: {
            gasLimit: number;
            nativeValue?: number | undefined;
        } | undefined;
        destinationChains?: string[] | undefined;
    }>;
}>;
type SerializedOftBridgeConfig = z.input<typeof oftBridgeConfigSchema>;
declare function createOftBridgeConfig(input: SerializedOftBridgeConfig): OftBridgeConfig;
declare function serializeOftBridgeConfig(input: OftBridgeConfig): SerializedOftBridgeConfig;

export { OftBridgeConfig, SerializedOftBridgeConfig, createOftBridgeConfig, oftBridgeConfigSchema, serializeOftBridgeConfig };
