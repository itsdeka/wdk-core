declare const StargateVersion: {
    readonly V1: "v1";
    readonly V2: "v2";
};
type StargateVersion = (typeof StargateVersion)[keyof typeof StargateVersion];

export { StargateVersion };
