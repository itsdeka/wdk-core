import SuperJSON from 'superjson';

type SuperJSONResult = ReturnType<(typeof SuperJSON)['serialize']>;
type TokenJSONValue = {
    symbol: string;
    decimals: number;
    chainKey: string;
    address: string;
    name?: string;
};
type CoinJSONValue = {
    symbol: string;
    decimals: number;
    chainKey: string;
    name?: string;
};
type CurrencyAmountJsonValue = {
    amount: string;
    token: {
        json: SuperJSONResult['json'];
        meta?: SuperJSONResult['meta'];
    };
};
type FractionJsonValue = {
    numerator: string;
    denominator: string;
};
declare function register(transformer: typeof SuperJSON): void;

export { CoinJSONValue, CurrencyAmountJsonValue, FractionJsonValue, SuperJSONResult, TokenJSONValue, register };
