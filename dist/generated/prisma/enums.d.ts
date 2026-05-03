export declare const AttendanceStatus: {
    readonly Present: "Present";
    readonly Absent: "Absent";
    readonly HalfDay: "HalfDay";
    readonly Leave: "Leave";
};
export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus];
export declare const SpareType: {
    readonly Spare: "Spare";
    readonly Additive: "Additive";
    readonly Accessory: "Accessory";
};
export type SpareType = (typeof SpareType)[keyof typeof SpareType];
export declare const OrderType: {
    readonly Sale: "Sale";
    readonly ReturnToServiceCenter: "ReturnToServiceCenter";
    readonly WarrantyAMC: "WarrantyAMC";
};
export type OrderType = (typeof OrderType)[keyof typeof OrderType];
