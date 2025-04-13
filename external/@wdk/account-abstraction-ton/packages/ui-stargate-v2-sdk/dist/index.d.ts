import { Currency, Token, ChainKey, FeeQuote, Transaction, CurrencyAmount, AdapterParams } from '@layerzerolabs/ui-core';
import z, { z as z$1 } from 'zod';
import { Signer as Signer$1, utils, BigNumberish, BytesLike, BaseContract, CallOverrides, BigNumber, Overrides, ContractTransaction, PopulatedTransaction } from 'ethers';
import { i as TokenMessaging, c as StargateOFT, e as StargatePool, g as StargatePoolNative, M as MessagingFeeStruct, j as SendParamStruct$1, P as PromiseOrValue, T as TypedEvent, a as TypedEventFilter, b as TypedListener, O as OnEvent } from './TokenMessaging-38048f21.js';
import { ProviderFactory, ERC20__api } from '@layerzerolabs/ui-evm';
import redaxios from 'redaxios';
import { BridgeApi, GetOptionsInput, BridgeOptions, TransferInput, GetMessageFeeInput, GetOutputInput, BridgeOutput, GetDurationInput, GetLimitInput, GetExtraGasInput, GetAllowanceInput, GetUnclaimedInput, IsRegisteredInput, ClaimInput, RegisterInput, ApproveInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { Provider, Listener } from '@ethersproject/providers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';

type StargateV2Config = {
    assetId: number;
    sharedDecimals: number;
    deployments: {
        [chainKey: string]: {
            eid: number;
            token: Currency;
            lpToken?: Token;
            stargatePool?: {
                address: string;
            };
            stargatePoolNative?: {
                address: string;
            };
            stargateOft?: {
                address: string;
            };
            feeLib: {
                address: string;
            };
            tokenMessaging: {
                address: string;
            };
        };
    };
};

declare const ETH_TESTNET: StargateV2Config;

declare const USDC_TESTNET: StargateV2Config;

declare const USDT_TESTNET: StargateV2Config;

declare const serializedStargateV2ConfigSchema: z.ZodObject<{
    assetId: z.ZodNumber;
    sharedDecimals: z.ZodNumber;
    deployments: z.ZodRecord<z.ZodString, z.ZodObject<{
        eid: z.ZodNumber;
        token: z.ZodObject<{
            symbol: z.ZodString;
            decimals: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            decimals: number;
            name?: string | undefined;
            address?: string | undefined;
        }, {
            symbol: string;
            decimals: number;
            name?: string | undefined;
            address?: string | undefined;
        }>;
        lpToken: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
            symbol: z.ZodString;
            decimals: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodString>;
        }, {
            address: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            symbol: string;
            decimals: number;
            address: string;
            name?: string | undefined;
        }, {
            symbol: string;
            decimals: number;
            address: string;
            name?: string | undefined;
        }>>;
        stargatePoolNative: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        stargatePool: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        stargateOft: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        feeLib: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
        tokenMessaging: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            name?: string | undefined;
            address?: string | undefined;
        };
        feeLib: {
            address: string;
        };
        tokenMessaging: {
            address: string;
        };
        lpToken?: {
            symbol: string;
            decimals: number;
            address: string;
            name?: string | undefined;
        } | undefined;
        stargatePoolNative?: {
            address: string;
        } | undefined;
        stargatePool?: {
            address: string;
        } | undefined;
        stargateOft?: {
            address: string;
        } | undefined;
    }, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            name?: string | undefined;
            address?: string | undefined;
        };
        feeLib: {
            address: string;
        };
        tokenMessaging: {
            address: string;
        };
        lpToken?: {
            symbol: string;
            decimals: number;
            address: string;
            name?: string | undefined;
        } | undefined;
        stargatePoolNative?: {
            address: string;
        } | undefined;
        stargatePool?: {
            address: string;
        } | undefined;
        stargateOft?: {
            address: string;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    assetId: number;
    sharedDecimals: number;
    deployments: Record<string, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            name?: string | undefined;
            address?: string | undefined;
        };
        feeLib: {
            address: string;
        };
        tokenMessaging: {
            address: string;
        };
        lpToken?: {
            symbol: string;
            decimals: number;
            address: string;
            name?: string | undefined;
        } | undefined;
        stargatePoolNative?: {
            address: string;
        } | undefined;
        stargatePool?: {
            address: string;
        } | undefined;
        stargateOft?: {
            address: string;
        } | undefined;
    }>;
}, {
    assetId: number;
    sharedDecimals: number;
    deployments: Record<string, {
        eid: number;
        token: {
            symbol: string;
            decimals: number;
            name?: string | undefined;
            address?: string | undefined;
        };
        feeLib: {
            address: string;
        };
        tokenMessaging: {
            address: string;
        };
        lpToken?: {
            symbol: string;
            decimals: number;
            address: string;
            name?: string | undefined;
        } | undefined;
        stargatePoolNative?: {
            address: string;
        } | undefined;
        stargatePool?: {
            address: string;
        } | undefined;
        stargateOft?: {
            address: string;
        } | undefined;
    }>;
}>;
type SerializedStargateV2Config = z.input<typeof serializedStargateV2ConfigSchema>;
declare function createConfig(input: z.input<typeof serializedStargateV2ConfigSchema>): StargateV2Config;
declare const serializedStargateV2TokenMessagingSchema: z.ZodObject<{
    api: z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
    deployments: z.ZodRecord<z.ZodString, z.ZodObject<{
        eid: z.ZodNumber;
        tokenMessaging: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    }, {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    deployments: Record<string, {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    }>;
    api: {
        url: string;
    };
}, {
    deployments: Record<string, {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    }>;
    api: {
        url: string;
    };
}>;
declare const stargateV2TokenMessagingSchema: z.ZodObject<{
    api: z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
    deployments: z.ZodRecord<z.ZodString, z.ZodObject<{
        eid: z.ZodNumber;
        tokenMessaging: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    }, {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    deployments: Record<string, {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    }>;
    api: {
        url: string;
    };
}, {
    deployments: Record<string, {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    }>;
    api: {
        url: string;
    };
}>;
type SerializedStargateV2TokenMessagingConfig = z.input<typeof serializedStargateV2TokenMessagingSchema>;
type StargateV2TokenMessagingConfig = z.output<typeof stargateV2TokenMessagingSchema>;
declare const serializedStargateV2StakingSchema: z.ZodObject<{
    deployments: z.ZodRecord<z.ZodString, z.ZodObject<{
        stargateStaking: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
        stargateMultiRewarder: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        stargateStaking: {
            address: string;
        };
        stargateMultiRewarder: {
            address: string;
        };
    }, {
        stargateStaking: {
            address: string;
        };
        stargateMultiRewarder: {
            address: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    deployments: Record<string, {
        stargateStaking: {
            address: string;
        };
        stargateMultiRewarder: {
            address: string;
        };
    }>;
}, {
    deployments: Record<string, {
        stargateStaking: {
            address: string;
        };
        stargateMultiRewarder: {
            address: string;
        };
    }>;
}>;
type SerializedStargateV2StakingSchema = z.input<typeof serializedStargateV2StakingSchema>;
type SerializedStargateV2StakingConfig = z.output<typeof serializedStargateV2StakingSchema>;

declare const TOKEN_MESSAGING_TESTNET: StargateV2TokenMessagingConfig;

declare const STARGATE_V2_STAKING_TESTNET: SerializedStargateV2StakingConfig;

declare const ETH_SANDBOX: StargateV2Config;

declare const USDC_SANDBOX: StargateV2Config;

declare const USDT_SANDBOX: StargateV2Config;

declare const TOKEN_MESSAGING_SANDBOX: StargateV2TokenMessagingConfig;

declare const STARGATE_V2_STAKING_SANDBOX: SerializedStargateV2StakingConfig;

declare const ETH_MAINNET: StargateV2Config;

declare const USDC_MAINNET: StargateV2Config;

declare const USDT_MAINNET: StargateV2Config;

declare const METH_MAINNET: StargateV2Config;

declare const METIS_MAINNET: StargateV2Config;

declare const TOKEN_MESSAGING_MAINNET: StargateV2TokenMessagingConfig;

declare const STARGATE_V2_STAKING_MAINNET: SerializedStargateV2StakingConfig;

declare const passengerSchema: z$1.ZodObject<{
    sender: z$1.ZodString;
    receiver: z$1.ZodString;
    ticketId: z$1.ZodPipeline<z$1.ZodEffects<z$1.ZodString, string | bigint, string>, z$1.ZodBigInt>;
    assetId: z$1.ZodNumber;
    asset: z$1.ZodString;
    amountSD: z$1.ZodPipeline<z$1.ZodEffects<z$1.ZodString, string | bigint, string>, z$1.ZodBigInt>;
    rideStatus: z$1.ZodString;
    txHash: z$1.ZodString;
    blockNumber: z$1.ZodNumber;
    timestamp: z$1.ZodNumber;
    nativeDrop: z$1.ZodBoolean;
    passengerBytes: z$1.ZodString;
}, "strip", z$1.ZodTypeAny, {
    assetId: number;
    sender: string;
    receiver: string;
    amountSD: bigint;
    ticketId: bigint;
    passengerBytes: string;
    nativeDrop: boolean;
    asset: string;
    rideStatus: string;
    txHash: string;
    blockNumber: number;
    timestamp: number;
}, {
    assetId: number;
    sender: string;
    receiver: string;
    amountSD: string;
    ticketId: string;
    passengerBytes: string;
    nativeDrop: boolean;
    asset: string;
    rideStatus: string;
    txHash: string;
    blockNumber: number;
    timestamp: number;
}>;
declare const queueSchema: z$1.ZodObject<z$1.objectUtil.extendShape<{
    srcEid: z$1.ZodNumber;
    dstEid: z$1.ZodNumber;
    srcChainKey: z$1.ZodString;
    dstChainKey: z$1.ZodString;
}, {
    queue: z$1.ZodObject<{
        currentBusParams: z$1.ZodObject<{
            capacity: z$1.ZodNumber;
        }, "strip", z$1.ZodTypeAny, {
            capacity: number;
        }, {
            capacity: number;
        }>;
        passengers: z$1.ZodArray<z$1.ZodObject<{
            sender: z$1.ZodString;
            receiver: z$1.ZodString;
            ticketId: z$1.ZodPipeline<z$1.ZodEffects<z$1.ZodString, string | bigint, string>, z$1.ZodBigInt>;
            assetId: z$1.ZodNumber;
            asset: z$1.ZodString;
            amountSD: z$1.ZodPipeline<z$1.ZodEffects<z$1.ZodString, string | bigint, string>, z$1.ZodBigInt>;
            rideStatus: z$1.ZodString;
            txHash: z$1.ZodString;
            blockNumber: z$1.ZodNumber;
            timestamp: z$1.ZodNumber;
            nativeDrop: z$1.ZodBoolean;
            passengerBytes: z$1.ZodString;
        }, "strip", z$1.ZodTypeAny, {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: bigint;
            ticketId: bigint;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }, {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: string;
            ticketId: string;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }>, "many">;
    }, "strip", z$1.ZodTypeAny, {
        currentBusParams: {
            capacity: number;
        };
        passengers: {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: bigint;
            ticketId: bigint;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }[];
    }, {
        currentBusParams: {
            capacity: number;
        };
        passengers: {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: string;
            ticketId: string;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }[];
    }>;
}>, "strip", z$1.ZodTypeAny, {
    dstEid: number;
    srcEid: number;
    srcChainKey: string;
    dstChainKey: string;
    queue: {
        currentBusParams: {
            capacity: number;
        };
        passengers: {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: bigint;
            ticketId: bigint;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }[];
    };
}, {
    dstEid: number;
    srcEid: number;
    srcChainKey: string;
    dstChainKey: string;
    queue: {
        currentBusParams: {
            capacity: number;
        };
        passengers: {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: string;
            ticketId: string;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }[];
    };
}>;
declare const busQueueSchema: z$1.ZodDiscriminatedUnion<"inQueue", [z$1.ZodObject<z$1.objectUtil.extendShape<z$1.objectUtil.extendShape<{
    srcEid: z$1.ZodNumber;
    dstEid: z$1.ZodNumber;
    srcChainKey: z$1.ZodString;
    dstChainKey: z$1.ZodString;
}, {
    queue: z$1.ZodObject<{
        currentBusParams: z$1.ZodObject<{
            capacity: z$1.ZodNumber;
        }, "strip", z$1.ZodTypeAny, {
            capacity: number;
        }, {
            capacity: number;
        }>;
        passengers: z$1.ZodArray<z$1.ZodObject<{
            sender: z$1.ZodString;
            receiver: z$1.ZodString;
            ticketId: z$1.ZodPipeline<z$1.ZodEffects<z$1.ZodString, string | bigint, string>, z$1.ZodBigInt>;
            assetId: z$1.ZodNumber;
            asset: z$1.ZodString;
            amountSD: z$1.ZodPipeline<z$1.ZodEffects<z$1.ZodString, string | bigint, string>, z$1.ZodBigInt>;
            rideStatus: z$1.ZodString;
            txHash: z$1.ZodString;
            blockNumber: z$1.ZodNumber;
            timestamp: z$1.ZodNumber;
            nativeDrop: z$1.ZodBoolean;
            passengerBytes: z$1.ZodString;
        }, "strip", z$1.ZodTypeAny, {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: bigint;
            ticketId: bigint;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }, {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: string;
            ticketId: string;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }>, "many">;
    }, "strip", z$1.ZodTypeAny, {
        currentBusParams: {
            capacity: number;
        };
        passengers: {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: bigint;
            ticketId: bigint;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }[];
    }, {
        currentBusParams: {
            capacity: number;
        };
        passengers: {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: string;
            ticketId: string;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }[];
    }>;
}>, {
    bus: z$1.ZodOptional<z$1.ZodUndefined>;
    inQueue: z$1.ZodLiteral<true>;
}>, "strip", z$1.ZodTypeAny, {
    dstEid: number;
    srcEid: number;
    srcChainKey: string;
    dstChainKey: string;
    queue: {
        currentBusParams: {
            capacity: number;
        };
        passengers: {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: bigint;
            ticketId: bigint;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }[];
    };
    inQueue: true;
    bus?: undefined;
}, {
    dstEid: number;
    srcEid: number;
    srcChainKey: string;
    dstChainKey: string;
    queue: {
        currentBusParams: {
            capacity: number;
        };
        passengers: {
            assetId: number;
            sender: string;
            receiver: string;
            amountSD: string;
            ticketId: string;
            passengerBytes: string;
            nativeDrop: boolean;
            asset: string;
            rideStatus: string;
            txHash: string;
            blockNumber: number;
            timestamp: number;
        }[];
    };
    inQueue: true;
    bus?: undefined;
}>, z$1.ZodObject<z$1.objectUtil.extendShape<z$1.objectUtil.extendShape<{
    srcEid: z$1.ZodNumber;
    dstEid: z$1.ZodNumber;
    srcChainKey: z$1.ZodString;
    dstChainKey: z$1.ZodString;
}, {
    bus: z$1.ZodObject<{
        busId: z$1.ZodString;
        guid: z$1.ZodString;
        timestamp: z$1.ZodNumber;
        txHash: z$1.ZodString;
    }, "strip", z$1.ZodTypeAny, {
        guid: string;
        txHash: string;
        timestamp: number;
        busId: string;
    }, {
        guid: string;
        txHash: string;
        timestamp: number;
        busId: string;
    }>;
}>, {
    queue: z$1.ZodOptional<z$1.ZodUndefined>;
    inQueue: z$1.ZodLiteral<false>;
}>, "strip", z$1.ZodTypeAny, {
    dstEid: number;
    srcEid: number;
    srcChainKey: string;
    dstChainKey: string;
    bus: {
        guid: string;
        txHash: string;
        timestamp: number;
        busId: string;
    };
    inQueue: false;
    queue?: undefined;
}, {
    dstEid: number;
    srcEid: number;
    srcChainKey: string;
    dstChainKey: string;
    bus: {
        guid: string;
        txHash: string;
        timestamp: number;
        busId: string;
    };
    inQueue: false;
    queue?: undefined;
}>]>;
declare const busDriveSettingsSchema: z$1.ZodObject<{
    maxWaitTime: z$1.ZodEffects<z$1.ZodNumber, {
        seconds: number;
    }, number>;
    passengersToDrive: z$1.ZodNumber;
}, "strip", z$1.ZodTypeAny, {
    maxWaitTime: {
        seconds: number;
    };
    passengersToDrive: number;
}, {
    maxWaitTime: number;
    passengersToDrive: number;
}>;
type GetBusDriveSettingsInput = {
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
};
type GetBusDriveSettingsResult = z$1.infer<typeof busDriveSettingsSchema>;
type GetQueueByPathInput = {
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
};
type GetQueueByPathResult = z$1.infer<typeof queueSchema>;
type GetBusByTxHashInput = {
    txHash: string;
};
type GetBusByTxHashResult = z$1.infer<typeof busQueueSchema>;
type QuoteDriveBusInput = {
    srcChainKey: ChainKey;
    dstEid: number;
    queue: {
        passengers: Pick<Passenger$1, 'ticketId' | 'passengerBytes'>[];
        currentBusParams: {
            capacity: number;
        };
    };
};
type QuoteDriveBusResult = FeeQuote;
type Passenger$1 = z$1.infer<typeof passengerSchema>;
interface DriveBusInput {
    chainKey: ChainKey;
    txHash: string;
    fee: FeeQuote;
}
declare class StargateV2Bus {
    protected config: StargateV2TokenMessagingConfig;
    protected providerFactory: ProviderFactory;
    protected http: ReturnType<typeof redaxios.create>;
    constructor(config: StargateV2TokenMessagingConfig, providerFactory: ProviderFactory);
    supportsPath(path: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
    }): boolean;
    quoteDriveBus(input: QuoteDriveBusInput): Promise<QuoteDriveBusResult>;
    getQueueByPath(path: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
    }): Promise<GetQueueByPathResult>;
    getBusDriveSettings(path: GetBusDriveSettingsInput): Promise<GetBusDriveSettingsResult>;
    getBusByTxHash(input: GetBusByTxHashInput): Promise<GetBusByTxHashResult>;
    chainKeyToEid(chainKey: ChainKey): number;
    protected fixQueue<T extends object>(queue: T, path: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
    }): T & {
        srcChainKey: string;
        dstChainKey: string;
        srcEid: number;
        dstEid: number;
    };
    protected fixChainKey<T extends {
        srcChainKey: string;
        dstChainKey: string;
        srcEid: number;
        dstEid: number;
    }>(data: T): T;
    protected eidToChainKey(eid: number): ChainKey;
    protected getTokenMessagingContract(chainKey: ChainKey): TokenMessaging;
    protected tryGetDeployment(chainKey: ChainKey): {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    };
    protected getDeployment(chainKey: ChainKey): {
        eid: number;
        tokenMessaging: {
            address: string;
        };
    };
    protected getPassengerBytes(passengers: Pick<Passenger$1, 'ticketId' | 'passengerBytes'>[]): string;
    driveBus(input: DriveBusInput): Promise<Transaction<Signer$1>>;
}
declare class StargateV2NoPassengersError extends Error {
    protected readonly data: QuoteDriveBusInput;
    constructor(data: QuoteDriveBusInput);
}
declare class StargateV2BusDrivenError extends Error {
    protected readonly data: GetBusByTxHashResult;
    constructor(data: GetBusByTxHashResult);
}

type Passenger = {
    address: string;
    amount: string;
};
declare class OftCmd {
    sendMode: number;
    passengers: Passenger[];
    constructor(sendMode: number, passengers: Passenger[]);
    toBytes(): string;
}

declare enum SendMode {
    TAXI = 0,
    BUS = 1,
    DRIVE = 2
}

type StargateV2Fee = {
    [key: string]: CurrencyAmount;
};
type StargateV2Deployment = StargateV2Config['deployments'][ChainKey];
type Signer = unknown;
declare class StargateV2Bridge implements BridgeApi<Signer, StargateV2Fee> {
    protected config: StargateV2Config;
    protected getProvider: ProviderFactory;
    protected erc20: ERC20__api;
    protected paths: {
        srcToken: Currency;
        dstToken: Currency;
    }[];
    constructor(config: StargateV2Config, getProvider: ProviderFactory, erc20?: ERC20__api);
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    protected updatePaths(): void;
    protected tryGetDeployment(chainKey: ChainKey): StargateV2Deployment | undefined;
    protected getDeployment(chainKey: ChainKey): StargateV2Deployment;
    protected validateInput(input: TransferInput): void;
    protected chainKeyToEid(chainKey: ChainKey): number;
    protected getBridgeContract(chainKey: ChainKey): StargateOFT | StargatePool | StargatePoolNative;
    protected getTokenMessagingContract(chainKey: ChainKey): TokenMessaging;
    supportsClaim(token: Currency): boolean;
    supportsRegister(token: Currency): boolean;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    protected toSendMode(mode?: string): SendMode;
    getMessageFee(input: GetMessageFeeInput): Promise<FeeQuote>;
    getOutput(input: GetOutputInput): Promise<BridgeOutput<StargateV2Fee>>;
    getDuration(input: GetDurationInput): Promise<number>;
    getLimit(input: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    getExtraGas(input: GetExtraGasInput): Promise<number>;
    getAllowance(input: GetAllowanceInput): Promise<CurrencyAmount<Currency>>;
    getUnclaimed(input: GetUnclaimedInput): Promise<CurrencyAmount<Currency>>;
    isRegistered(input: IsRegisteredInput): Promise<boolean>;
    transfer(input: TransferInput): Promise<Transaction<unknown>>;
    protected buildMessagingFee(input: TransferInput): MessagingFeeStruct;
    protected getBusNativeDropAmount({ srcChainKey, dstChainKey, }: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
    }): Promise<CurrencyAmount>;
    protected serializeOptions(oftCmd: OftCmd, adapterParams: AdapterParams): Uint8Array<ArrayBufferLike>;
    protected buildSendParam(input: BuildSendParamInput, oftCmd: OftCmd): SendParamStruct$1;
    claim(input: ClaimInput): Promise<Transaction<unknown>>;
    register(register: RegisterInput): Promise<Transaction<unknown>>;
    approve(input: ApproveInput): Promise<Transaction<unknown>>;
}
interface BuildSendParamInput {
    srcAmount: CurrencyAmount;
    dstAmountMin: CurrencyAmount;
    dstAddress: string;
    dstChainKey: ChainKey;
    adapterParams: AdapterParams;
}
declare class StargateV2BusDstNativeAmountError extends Error {
    readonly requestedAmount: bigint;
    readonly configuredAmount: bigint;
    constructor(requestedAmount: bigint, configuredAmount: bigint);
}

declare enum MsgType {
    SEND_TOKEN = 0,
    SEND_CREDIT = 1
}

interface SendParamStruct {
    dstEid: number;
    to: string;
    amountLD: bigint;
    minAmountLD: bigint;
    extraOptions: string;
    composeMsg: string;
    oftCmd: string;
}

declare const StargateV2AssetId: {
    readonly 1: "USDC";
    readonly 2: "USDT";
    readonly 13: "ETH";
    readonly 17: "METIS";
    readonly 22: "mETH";
};

interface OFTTokenInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "burn" | "decimals" | "decreaseAllowance" | "increaseAllowance" | "mint" | "name" | "owner" | "renounceOwnership" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
type TransferEventFilter = TypedEventFilter<TransferEvent>;
interface OFTToken extends BaseContract {
    connect(signerOrProvider: Signer$1 | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTTokenInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        mint(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

declare class OFTToken__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): OFTTokenInterface;
    static connect(address: string, signerOrProvider: Signer$1 | Provider): OFTToken;
}

export { DriveBusInput, ETH_MAINNET, ETH_SANDBOX, ETH_TESTNET, GetBusByTxHashInput, GetBusByTxHashResult, GetBusDriveSettingsInput, GetBusDriveSettingsResult, GetQueueByPathInput, GetQueueByPathResult, METH_MAINNET, METIS_MAINNET, MsgType, OFTToken__factory, OftCmd, Passenger, QuoteDriveBusInput, QuoteDriveBusResult, STARGATE_V2_STAKING_MAINNET, STARGATE_V2_STAKING_SANDBOX, STARGATE_V2_STAKING_TESTNET, SendMode, SendParamStruct, SerializedStargateV2Config, SerializedStargateV2StakingConfig, SerializedStargateV2StakingSchema, SerializedStargateV2TokenMessagingConfig, StargateV2AssetId, StargateV2Bridge, StargateV2Bus, StargateV2BusDrivenError, StargateV2BusDstNativeAmountError, StargateV2Config, StargateV2Fee, StargateV2NoPassengersError, StargateV2TokenMessagingConfig, TOKEN_MESSAGING_MAINNET, TOKEN_MESSAGING_SANDBOX, TOKEN_MESSAGING_TESTNET, USDC_MAINNET, USDC_SANDBOX, USDC_TESTNET, USDT_MAINNET, USDT_SANDBOX, USDT_TESTNET, createConfig };
