export declare const SpareType: {
    readonly Spare: "Spare";
    readonly Additive: "Additive";
    readonly Accessory: "Accessory";
};
export type SpareType = (typeof SpareType)[keyof typeof SpareType];
