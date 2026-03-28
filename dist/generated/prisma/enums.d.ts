export declare const SpareType: {
    readonly Spare: "Spare";
    readonly Additive: "Additive";
    readonly Accessory: "Accessory";
};
export type SpareType = (typeof SpareType)[keyof typeof SpareType];
export declare const ItemStatus: {
    readonly Good: "Good";
    readonly Defective: "Defective";
};
export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus];
export declare const OrderType: {
    readonly Sale: "Sale";
    readonly ReturnToServiceCenter: "ReturnToServiceCenter";
    readonly WarrantyAMC: "WarrantyAMC";
};
export type OrderType = (typeof OrderType)[keyof typeof OrderType];
