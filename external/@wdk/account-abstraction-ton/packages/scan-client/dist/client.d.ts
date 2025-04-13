import * as redaxios from 'redaxios';
import redaxios__default from 'redaxios';

type HttpClientInstance = ReturnType<typeof redaxios__default.create>;
type Stage = 'testnet' | 'mainnet' | 'sandbox';
type ClientOptions = {};
declare enum MessageStatus {
    INFLIGHT = "INFLIGHT",
    DELIVERED = "DELIVERED",
    FAILED = "FAILED"
}
type Message = {
    srcUaAddress: string;
    dstUaAddress: string;
    srcChainId: number;
    dstChainId: number;
    dstTxHash?: string;
    dstTxError?: string;
    srcTxHash?: string;
    srcBlockHash?: string;
    srcBlockNumber?: string;
    srcUaNonce: number;
    status: MessageStatus;
};
type ScanClientConfig = {
    mainnet?: boolean;
    testnet?: boolean;
    sandbox?: boolean;
};
declare class ScanClient {
    protected config: ScanClientConfig;
    protected mainnet: {
        <T>(urlOrConfig: string | redaxios.Options, config?: redaxios.Options | undefined, _method?: any, data?: any, _undefined?: undefined): Promise<redaxios.Response<T>>;
        request: (<T_1 = any>(config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_1>>) | (<T_2 = any>(url: string, config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_2>>);
        get<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        delete<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        head<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        options<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        post<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        put<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        patch<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        all: {
            <T_5>(values: Iterable<T_5 | PromiseLike<T_5>>): Promise<T_5[]>;
            <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
            <T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1>(values: readonly [T1_1 | PromiseLike<T1_1>, T2_1 | PromiseLike<T2_1>, T3_1 | PromiseLike<T3_1>, T4_1 | PromiseLike<T4_1>, T5_1 | PromiseLike<T5_1>, T6_1 | PromiseLike<T6_1>, T7_1 | PromiseLike<T7_1>, T8_1 | PromiseLike<T8_1>, T9_1 | PromiseLike<T9_1>]): Promise<[T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1]>;
            <T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2>(values: readonly [T1_2 | PromiseLike<T1_2>, T2_2 | PromiseLike<T2_2>, T3_2 | PromiseLike<T3_2>, T4_2 | PromiseLike<T4_2>, T5_2 | PromiseLike<T5_2>, T6_2 | PromiseLike<T6_2>, T7_2 | PromiseLike<T7_2>, T8_2 | PromiseLike<T8_2>]): Promise<[T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2]>;
            <T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3>(values: readonly [T1_3 | PromiseLike<T1_3>, T2_3 | PromiseLike<T2_3>, T3_3 | PromiseLike<T3_3>, T4_3 | PromiseLike<T4_3>, T5_3 | PromiseLike<T5_3>, T6_3 | PromiseLike<T6_3>, T7_3 | PromiseLike<T7_3>]): Promise<[T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3]>;
            <T1_4, T2_4, T3_4, T4_4, T5_4, T6_4>(values: readonly [T1_4 | PromiseLike<T1_4>, T2_4 | PromiseLike<T2_4>, T3_4 | PromiseLike<T3_4>, T4_4 | PromiseLike<T4_4>, T5_4 | PromiseLike<T5_4>, T6_4 | PromiseLike<T6_4>]): Promise<[T1_4, T2_4, T3_4, T4_4, T5_4, T6_4]>;
            <T1_5, T2_5, T3_5, T4_5, T5_5>(values: readonly [T1_5 | PromiseLike<T1_5>, T2_5 | PromiseLike<T2_5>, T3_5 | PromiseLike<T3_5>, T4_5 | PromiseLike<T4_5>, T5_5 | PromiseLike<T5_5>]): Promise<[T1_5, T2_5, T3_5, T4_5, T5_5]>;
            <T1_6, T2_6, T3_6, T4_6>(values: readonly [T1_6 | PromiseLike<T1_6>, T2_6 | PromiseLike<T2_6>, T3_6 | PromiseLike<T3_6>, T4_6 | PromiseLike<T4_6>]): Promise<[T1_6, T2_6, T3_6, T4_6]>;
            <T1_7, T2_7, T3_7>(values: readonly [T1_7 | PromiseLike<T1_7>, T2_7 | PromiseLike<T2_7>, T3_7 | PromiseLike<T3_7>]): Promise<[T1_7, T2_7, T3_7]>;
            <T1_8, T2_8>(values: readonly [T1_8 | PromiseLike<T1_8>, T2_8 | PromiseLike<T2_8>]): Promise<[T1_8, T2_8]>;
            <T_6>(values: readonly (T_6 | PromiseLike<T_6>)[]): Promise<T_6[]>;
        };
        spread<Args, R>(fn: (...args: Args[]) => R): (array: Args[]) => R;
        CancelToken: AbortController;
        defaults: redaxios.Options;
        create: (defaults?: redaxios.Options | undefined) => {
            <T>(urlOrConfig: string | redaxios.Options, config?: redaxios.Options | undefined, _method?: any, data?: any, _undefined?: undefined): Promise<redaxios.Response<T>>;
            request: (<T_1 = any>(config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_1>>) | (<T_2 = any>(url: string, config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_2>>);
            get<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            delete<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            head<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            options<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            post<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            put<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            patch<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            all: {
                <T_5>(values: Iterable<T_5 | PromiseLike<T_5>>): Promise<T_5[]>;
                <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
                <T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1>(values: readonly [T1_1 | PromiseLike<T1_1>, T2_1 | PromiseLike<T2_1>, T3_1 | PromiseLike<T3_1>, T4_1 | PromiseLike<T4_1>, T5_1 | PromiseLike<T5_1>, T6_1 | PromiseLike<T6_1>, T7_1 | PromiseLike<T7_1>, T8_1 | PromiseLike<T8_1>, T9_1 | PromiseLike<T9_1>]): Promise<[T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1]>;
                <T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2>(values: readonly [T1_2 | PromiseLike<T1_2>, T2_2 | PromiseLike<T2_2>, T3_2 | PromiseLike<T3_2>, T4_2 | PromiseLike<T4_2>, T5_2 | PromiseLike<T5_2>, T6_2 | PromiseLike<T6_2>, T7_2 | PromiseLike<T7_2>, T8_2 | PromiseLike<T8_2>]): Promise<[T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2]>;
                <T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3>(values: readonly [T1_3 | PromiseLike<T1_3>, T2_3 | PromiseLike<T2_3>, T3_3 | PromiseLike<T3_3>, T4_3 | PromiseLike<T4_3>, T5_3 | PromiseLike<T5_3>, T6_3 | PromiseLike<T6_3>, T7_3 | PromiseLike<T7_3>]): Promise<[T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3]>;
                <T1_4, T2_4, T3_4, T4_4, T5_4, T6_4>(values: readonly [T1_4 | PromiseLike<T1_4>, T2_4 | PromiseLike<T2_4>, T3_4 | PromiseLike<T3_4>, T4_4 | PromiseLike<T4_4>, T5_4 | PromiseLike<T5_4>, T6_4 | PromiseLike<T6_4>]): Promise<[T1_4, T2_4, T3_4, T4_4, T5_4, T6_4]>;
                <T1_5, T2_5, T3_5, T4_5, T5_5>(values: readonly [T1_5 | PromiseLike<T1_5>, T2_5 | PromiseLike<T2_5>, T3_5 | PromiseLike<T3_5>, T4_5 | PromiseLike<T4_5>, T5_5 | PromiseLike<T5_5>]): Promise<[T1_5, T2_5, T3_5, T4_5, T5_5]>;
                <T1_6, T2_6, T3_6, T4_6>(values: readonly [T1_6 | PromiseLike<T1_6>, T2_6 | PromiseLike<T2_6>, T3_6 | PromiseLike<T3_6>, T4_6 | PromiseLike<T4_6>]): Promise<[T1_6, T2_6, T3_6, T4_6]>;
                <T1_7, T2_7, T3_7>(values: readonly [T1_7 | PromiseLike<T1_7>, T2_7 | PromiseLike<T2_7>, T3_7 | PromiseLike<T3_7>]): Promise<[T1_7, T2_7, T3_7]>;
                <T1_8, T2_8>(values: readonly [T1_8 | PromiseLike<T1_8>, T2_8 | PromiseLike<T2_8>]): Promise<[T1_8, T2_8]>;
                <T_6>(values: readonly (T_6 | PromiseLike<T_6>)[]): Promise<T_6[]>;
            };
            spread<Args, R>(fn: (...args: Args[]) => R): (array: Args[]) => R;
            CancelToken: AbortController;
            defaults: redaxios.Options;
            create: /*elided*/ any;
        };
    };
    protected testnet: {
        <T>(urlOrConfig: string | redaxios.Options, config?: redaxios.Options | undefined, _method?: any, data?: any, _undefined?: undefined): Promise<redaxios.Response<T>>;
        request: (<T_1 = any>(config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_1>>) | (<T_2 = any>(url: string, config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_2>>);
        get<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        delete<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        head<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        options<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        post<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        put<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        patch<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        all: {
            <T_5>(values: Iterable<T_5 | PromiseLike<T_5>>): Promise<T_5[]>;
            <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
            <T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1>(values: readonly [T1_1 | PromiseLike<T1_1>, T2_1 | PromiseLike<T2_1>, T3_1 | PromiseLike<T3_1>, T4_1 | PromiseLike<T4_1>, T5_1 | PromiseLike<T5_1>, T6_1 | PromiseLike<T6_1>, T7_1 | PromiseLike<T7_1>, T8_1 | PromiseLike<T8_1>, T9_1 | PromiseLike<T9_1>]): Promise<[T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1]>;
            <T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2>(values: readonly [T1_2 | PromiseLike<T1_2>, T2_2 | PromiseLike<T2_2>, T3_2 | PromiseLike<T3_2>, T4_2 | PromiseLike<T4_2>, T5_2 | PromiseLike<T5_2>, T6_2 | PromiseLike<T6_2>, T7_2 | PromiseLike<T7_2>, T8_2 | PromiseLike<T8_2>]): Promise<[T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2]>;
            <T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3>(values: readonly [T1_3 | PromiseLike<T1_3>, T2_3 | PromiseLike<T2_3>, T3_3 | PromiseLike<T3_3>, T4_3 | PromiseLike<T4_3>, T5_3 | PromiseLike<T5_3>, T6_3 | PromiseLike<T6_3>, T7_3 | PromiseLike<T7_3>]): Promise<[T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3]>;
            <T1_4, T2_4, T3_4, T4_4, T5_4, T6_4>(values: readonly [T1_4 | PromiseLike<T1_4>, T2_4 | PromiseLike<T2_4>, T3_4 | PromiseLike<T3_4>, T4_4 | PromiseLike<T4_4>, T5_4 | PromiseLike<T5_4>, T6_4 | PromiseLike<T6_4>]): Promise<[T1_4, T2_4, T3_4, T4_4, T5_4, T6_4]>;
            <T1_5, T2_5, T3_5, T4_5, T5_5>(values: readonly [T1_5 | PromiseLike<T1_5>, T2_5 | PromiseLike<T2_5>, T3_5 | PromiseLike<T3_5>, T4_5 | PromiseLike<T4_5>, T5_5 | PromiseLike<T5_5>]): Promise<[T1_5, T2_5, T3_5, T4_5, T5_5]>;
            <T1_6, T2_6, T3_6, T4_6>(values: readonly [T1_6 | PromiseLike<T1_6>, T2_6 | PromiseLike<T2_6>, T3_6 | PromiseLike<T3_6>, T4_6 | PromiseLike<T4_6>]): Promise<[T1_6, T2_6, T3_6, T4_6]>;
            <T1_7, T2_7, T3_7>(values: readonly [T1_7 | PromiseLike<T1_7>, T2_7 | PromiseLike<T2_7>, T3_7 | PromiseLike<T3_7>]): Promise<[T1_7, T2_7, T3_7]>;
            <T1_8, T2_8>(values: readonly [T1_8 | PromiseLike<T1_8>, T2_8 | PromiseLike<T2_8>]): Promise<[T1_8, T2_8]>;
            <T_6>(values: readonly (T_6 | PromiseLike<T_6>)[]): Promise<T_6[]>;
        };
        spread<Args, R>(fn: (...args: Args[]) => R): (array: Args[]) => R;
        CancelToken: AbortController;
        defaults: redaxios.Options;
        create: (defaults?: redaxios.Options | undefined) => {
            <T>(urlOrConfig: string | redaxios.Options, config?: redaxios.Options | undefined, _method?: any, data?: any, _undefined?: undefined): Promise<redaxios.Response<T>>;
            request: (<T_1 = any>(config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_1>>) | (<T_2 = any>(url: string, config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_2>>);
            get<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            delete<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            head<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            options<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            post<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            put<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            patch<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            all: {
                <T_5>(values: Iterable<T_5 | PromiseLike<T_5>>): Promise<T_5[]>;
                <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
                <T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1>(values: readonly [T1_1 | PromiseLike<T1_1>, T2_1 | PromiseLike<T2_1>, T3_1 | PromiseLike<T3_1>, T4_1 | PromiseLike<T4_1>, T5_1 | PromiseLike<T5_1>, T6_1 | PromiseLike<T6_1>, T7_1 | PromiseLike<T7_1>, T8_1 | PromiseLike<T8_1>, T9_1 | PromiseLike<T9_1>]): Promise<[T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1]>;
                <T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2>(values: readonly [T1_2 | PromiseLike<T1_2>, T2_2 | PromiseLike<T2_2>, T3_2 | PromiseLike<T3_2>, T4_2 | PromiseLike<T4_2>, T5_2 | PromiseLike<T5_2>, T6_2 | PromiseLike<T6_2>, T7_2 | PromiseLike<T7_2>, T8_2 | PromiseLike<T8_2>]): Promise<[T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2]>;
                <T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3>(values: readonly [T1_3 | PromiseLike<T1_3>, T2_3 | PromiseLike<T2_3>, T3_3 | PromiseLike<T3_3>, T4_3 | PromiseLike<T4_3>, T5_3 | PromiseLike<T5_3>, T6_3 | PromiseLike<T6_3>, T7_3 | PromiseLike<T7_3>]): Promise<[T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3]>;
                <T1_4, T2_4, T3_4, T4_4, T5_4, T6_4>(values: readonly [T1_4 | PromiseLike<T1_4>, T2_4 | PromiseLike<T2_4>, T3_4 | PromiseLike<T3_4>, T4_4 | PromiseLike<T4_4>, T5_4 | PromiseLike<T5_4>, T6_4 | PromiseLike<T6_4>]): Promise<[T1_4, T2_4, T3_4, T4_4, T5_4, T6_4]>;
                <T1_5, T2_5, T3_5, T4_5, T5_5>(values: readonly [T1_5 | PromiseLike<T1_5>, T2_5 | PromiseLike<T2_5>, T3_5 | PromiseLike<T3_5>, T4_5 | PromiseLike<T4_5>, T5_5 | PromiseLike<T5_5>]): Promise<[T1_5, T2_5, T3_5, T4_5, T5_5]>;
                <T1_6, T2_6, T3_6, T4_6>(values: readonly [T1_6 | PromiseLike<T1_6>, T2_6 | PromiseLike<T2_6>, T3_6 | PromiseLike<T3_6>, T4_6 | PromiseLike<T4_6>]): Promise<[T1_6, T2_6, T3_6, T4_6]>;
                <T1_7, T2_7, T3_7>(values: readonly [T1_7 | PromiseLike<T1_7>, T2_7 | PromiseLike<T2_7>, T3_7 | PromiseLike<T3_7>]): Promise<[T1_7, T2_7, T3_7]>;
                <T1_8, T2_8>(values: readonly [T1_8 | PromiseLike<T1_8>, T2_8 | PromiseLike<T2_8>]): Promise<[T1_8, T2_8]>;
                <T_6>(values: readonly (T_6 | PromiseLike<T_6>)[]): Promise<T_6[]>;
            };
            spread<Args, R>(fn: (...args: Args[]) => R): (array: Args[]) => R;
            CancelToken: AbortController;
            defaults: redaxios.Options;
            create: /*elided*/ any;
        };
    };
    protected sandbox: {
        <T>(urlOrConfig: string | redaxios.Options, config?: redaxios.Options | undefined, _method?: any, data?: any, _undefined?: undefined): Promise<redaxios.Response<T>>;
        request: (<T_1 = any>(config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_1>>) | (<T_2 = any>(url: string, config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_2>>);
        get<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        delete<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        head<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        options<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
        post<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        put<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        patch<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
        all: {
            <T_5>(values: Iterable<T_5 | PromiseLike<T_5>>): Promise<T_5[]>;
            <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
            <T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1>(values: readonly [T1_1 | PromiseLike<T1_1>, T2_1 | PromiseLike<T2_1>, T3_1 | PromiseLike<T3_1>, T4_1 | PromiseLike<T4_1>, T5_1 | PromiseLike<T5_1>, T6_1 | PromiseLike<T6_1>, T7_1 | PromiseLike<T7_1>, T8_1 | PromiseLike<T8_1>, T9_1 | PromiseLike<T9_1>]): Promise<[T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1]>;
            <T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2>(values: readonly [T1_2 | PromiseLike<T1_2>, T2_2 | PromiseLike<T2_2>, T3_2 | PromiseLike<T3_2>, T4_2 | PromiseLike<T4_2>, T5_2 | PromiseLike<T5_2>, T6_2 | PromiseLike<T6_2>, T7_2 | PromiseLike<T7_2>, T8_2 | PromiseLike<T8_2>]): Promise<[T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2]>;
            <T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3>(values: readonly [T1_3 | PromiseLike<T1_3>, T2_3 | PromiseLike<T2_3>, T3_3 | PromiseLike<T3_3>, T4_3 | PromiseLike<T4_3>, T5_3 | PromiseLike<T5_3>, T6_3 | PromiseLike<T6_3>, T7_3 | PromiseLike<T7_3>]): Promise<[T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3]>;
            <T1_4, T2_4, T3_4, T4_4, T5_4, T6_4>(values: readonly [T1_4 | PromiseLike<T1_4>, T2_4 | PromiseLike<T2_4>, T3_4 | PromiseLike<T3_4>, T4_4 | PromiseLike<T4_4>, T5_4 | PromiseLike<T5_4>, T6_4 | PromiseLike<T6_4>]): Promise<[T1_4, T2_4, T3_4, T4_4, T5_4, T6_4]>;
            <T1_5, T2_5, T3_5, T4_5, T5_5>(values: readonly [T1_5 | PromiseLike<T1_5>, T2_5 | PromiseLike<T2_5>, T3_5 | PromiseLike<T3_5>, T4_5 | PromiseLike<T4_5>, T5_5 | PromiseLike<T5_5>]): Promise<[T1_5, T2_5, T3_5, T4_5, T5_5]>;
            <T1_6, T2_6, T3_6, T4_6>(values: readonly [T1_6 | PromiseLike<T1_6>, T2_6 | PromiseLike<T2_6>, T3_6 | PromiseLike<T3_6>, T4_6 | PromiseLike<T4_6>]): Promise<[T1_6, T2_6, T3_6, T4_6]>;
            <T1_7, T2_7, T3_7>(values: readonly [T1_7 | PromiseLike<T1_7>, T2_7 | PromiseLike<T2_7>, T3_7 | PromiseLike<T3_7>]): Promise<[T1_7, T2_7, T3_7]>;
            <T1_8, T2_8>(values: readonly [T1_8 | PromiseLike<T1_8>, T2_8 | PromiseLike<T2_8>]): Promise<[T1_8, T2_8]>;
            <T_6>(values: readonly (T_6 | PromiseLike<T_6>)[]): Promise<T_6[]>;
        };
        spread<Args, R>(fn: (...args: Args[]) => R): (array: Args[]) => R;
        CancelToken: AbortController;
        defaults: redaxios.Options;
        create: (defaults?: redaxios.Options | undefined) => {
            <T>(urlOrConfig: string | redaxios.Options, config?: redaxios.Options | undefined, _method?: any, data?: any, _undefined?: undefined): Promise<redaxios.Response<T>>;
            request: (<T_1 = any>(config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_1>>) | (<T_2 = any>(url: string, config?: redaxios.Options | undefined) => Promise<redaxios.Response<T_2>>);
            get<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            delete<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            head<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            options<T_3 = any>(url: string, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_3>>;
            post<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            put<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            patch<T_4 = any>(url: string, body?: any, config?: redaxios.Options | undefined): Promise<redaxios.Response<T_4>>;
            all: {
                <T_5>(values: Iterable<T_5 | PromiseLike<T_5>>): Promise<T_5[]>;
                <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
                <T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1>(values: readonly [T1_1 | PromiseLike<T1_1>, T2_1 | PromiseLike<T2_1>, T3_1 | PromiseLike<T3_1>, T4_1 | PromiseLike<T4_1>, T5_1 | PromiseLike<T5_1>, T6_1 | PromiseLike<T6_1>, T7_1 | PromiseLike<T7_1>, T8_1 | PromiseLike<T8_1>, T9_1 | PromiseLike<T9_1>]): Promise<[T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1]>;
                <T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2>(values: readonly [T1_2 | PromiseLike<T1_2>, T2_2 | PromiseLike<T2_2>, T3_2 | PromiseLike<T3_2>, T4_2 | PromiseLike<T4_2>, T5_2 | PromiseLike<T5_2>, T6_2 | PromiseLike<T6_2>, T7_2 | PromiseLike<T7_2>, T8_2 | PromiseLike<T8_2>]): Promise<[T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2]>;
                <T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3>(values: readonly [T1_3 | PromiseLike<T1_3>, T2_3 | PromiseLike<T2_3>, T3_3 | PromiseLike<T3_3>, T4_3 | PromiseLike<T4_3>, T5_3 | PromiseLike<T5_3>, T6_3 | PromiseLike<T6_3>, T7_3 | PromiseLike<T7_3>]): Promise<[T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3]>;
                <T1_4, T2_4, T3_4, T4_4, T5_4, T6_4>(values: readonly [T1_4 | PromiseLike<T1_4>, T2_4 | PromiseLike<T2_4>, T3_4 | PromiseLike<T3_4>, T4_4 | PromiseLike<T4_4>, T5_4 | PromiseLike<T5_4>, T6_4 | PromiseLike<T6_4>]): Promise<[T1_4, T2_4, T3_4, T4_4, T5_4, T6_4]>;
                <T1_5, T2_5, T3_5, T4_5, T5_5>(values: readonly [T1_5 | PromiseLike<T1_5>, T2_5 | PromiseLike<T2_5>, T3_5 | PromiseLike<T3_5>, T4_5 | PromiseLike<T4_5>, T5_5 | PromiseLike<T5_5>]): Promise<[T1_5, T2_5, T3_5, T4_5, T5_5]>;
                <T1_6, T2_6, T3_6, T4_6>(values: readonly [T1_6 | PromiseLike<T1_6>, T2_6 | PromiseLike<T2_6>, T3_6 | PromiseLike<T3_6>, T4_6 | PromiseLike<T4_6>]): Promise<[T1_6, T2_6, T3_6, T4_6]>;
                <T1_7, T2_7, T3_7>(values: readonly [T1_7 | PromiseLike<T1_7>, T2_7 | PromiseLike<T2_7>, T3_7 | PromiseLike<T3_7>]): Promise<[T1_7, T2_7, T3_7]>;
                <T1_8, T2_8>(values: readonly [T1_8 | PromiseLike<T1_8>, T2_8 | PromiseLike<T2_8>]): Promise<[T1_8, T2_8]>;
                <T_6>(values: readonly (T_6 | PromiseLike<T_6>)[]): Promise<T_6[]>;
            };
            spread<Args, R>(fn: (...args: Args[]) => R): (array: Args[]) => R;
            CancelToken: AbortController;
            defaults: redaxios.Options;
            create: /*elided*/ any;
        };
    };
    protected clients: HttpClientInstance[];
    constructor(config: ScanClientConfig);
    getMessagesBySrcTxHash: (srcTxHash: string) => Promise<Message[]>;
    waitForMessageReceived: ({ txHash: srcTxHash }: {
        txHash: string;
    }, { signal, poolInterval }: {
        signal?: AbortSignal;
        poolInterval: number;
    }) => Promise<DeliveredMessage>;
}
type DeliveredMessage = Message & {
    dstTxHash: string;
};

export { ClientOptions, Message, MessageStatus, ScanClient, Stage };
