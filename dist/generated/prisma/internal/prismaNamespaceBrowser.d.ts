import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Material: "Material";
    readonly MaterialPrice: "MaterialPrice";
    readonly Invoice: "Invoice";
    readonly InvoiceItem: "InvoiceItem";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phoneNumber: "phoneNumber";
    readonly franchiseeName: "franchiseeName";
    readonly gstin: "gstin";
    readonly password: "password";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const MaterialScalarFieldEnum: {
    readonly id: "id";
    readonly materialCode: "materialCode";
    readonly description: "description";
    readonly materialGroup: "materialGroup";
    readonly createdAt: "createdAt";
};
export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum];
export declare const MaterialPriceScalarFieldEnum: {
    readonly id: "id";
    readonly conditionRecord: "conditionRecord";
    readonly conditionType: "conditionType";
    readonly rate: "rate";
    readonly validFrom: "validFrom";
    readonly validTo: "validTo";
    readonly materialId: "materialId";
    readonly createdAt: "createdAt";
};
export type MaterialPriceScalarFieldEnum = (typeof MaterialPriceScalarFieldEnum)[keyof typeof MaterialPriceScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceNumber: "invoiceNumber";
    readonly invoiceDate: "invoiceDate";
    readonly customerName: "customerName";
    readonly createdAt: "createdAt";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const InvoiceItemScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceId: "invoiceId";
    readonly materialCode: "materialCode";
    readonly description: "description";
    readonly hsn: "hsn";
    readonly quantity: "quantity";
    readonly uom: "uom";
    readonly unitPrice: "unitPrice";
    readonly totalAmount: "totalAmount";
    readonly cgst: "cgst";
    readonly sgst: "sgst";
    readonly createdAt: "createdAt";
};
export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
