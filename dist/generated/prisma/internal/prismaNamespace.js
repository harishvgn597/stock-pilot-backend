import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.4.1",
    engine: "55ae170b1ced7fc6ed07a15f110549408c501bb3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Material: 'Material',
    MaterialPrice: 'MaterialPrice',
    Invoice: 'Invoice',
    InvoiceItem: 'InvoiceItem',
    Engineer: 'Engineer',
    EngineerStock: 'EngineerStock'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    franchiseeName: 'franchiseeName',
    gstin: 'gstin',
    password: 'password',
    createdAt: 'createdAt'
};
export const MaterialScalarFieldEnum = {
    id: 'id',
    materialCode: 'materialCode',
    description: 'description',
    materialGroup: 'materialGroup',
    createdAt: 'createdAt'
};
export const MaterialPriceScalarFieldEnum = {
    id: 'id',
    conditionRecord: 'conditionRecord',
    conditionType: 'conditionType',
    rate: 'rate',
    validFrom: 'validFrom',
    validTo: 'validTo',
    materialId: 'materialId',
    createdAt: 'createdAt'
};
export const InvoiceScalarFieldEnum = {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    invoiceDate: 'invoiceDate',
    customerName: 'customerName',
    createdAt: 'createdAt'
};
export const InvoiceItemScalarFieldEnum = {
    id: 'id',
    invoiceId: 'invoiceId',
    materialCode: 'materialCode',
    description: 'description',
    hsn: 'hsn',
    quantity: 'quantity',
    uom: 'uom',
    unitPrice: 'unitPrice',
    totalAmount: 'totalAmount',
    cgst: 'cgst',
    sgst: 'sgst',
    createdAt: 'createdAt'
};
export const EngineerScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    specialization: 'specialization',
    createdAt: 'createdAt'
};
export const EngineerStockScalarFieldEnum = {
    id: 'id',
    engineerId: 'engineerId',
    materialCode: 'materialCode',
    quantity: 'quantity',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map