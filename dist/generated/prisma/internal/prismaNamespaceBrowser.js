import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
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
    EngineerStock: 'EngineerStock',
    Order: 'Order',
    SaleOrder: 'SaleOrder',
    WarrantyAmcOrder: 'WarrantyAmcOrder',
    ReturnToGodownOrder: 'ReturnToGodownOrder',
    CustomerReturn: 'CustomerReturn',
    AmcContract: 'AmcContract',
    GodownStock: 'GodownStock'
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
    franchiseeId: 'franchiseeId',
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
    spareType: 'spareType',
    status: 'status',
    createdAt: 'createdAt'
};
export const EngineerScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    specialization: 'specialization',
    franchiseeId: 'franchiseeId',
    createdAt: 'createdAt'
};
export const EngineerStockScalarFieldEnum = {
    id: 'id',
    engineerId: 'engineerId',
    materialCode: 'materialCode',
    quantity: 'quantity',
    createdAt: 'createdAt'
};
export const OrderScalarFieldEnum = {
    id: 'id',
    orderType: 'orderType',
    engineerId: 'engineerId',
    franchiseeId: 'franchiseeId',
    createdAt: 'createdAt'
};
export const SaleOrderScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    billNumber: 'billNumber',
    dateOfSale: 'dateOfSale',
    ticketNumber: 'ticketNumber',
    customerName: 'customerName',
    materialCode: 'materialCode',
    description: 'description',
    quantity: 'quantity',
    spareType: 'spareType',
    price: 'price',
    createdAt: 'createdAt'
};
export const WarrantyAmcOrderScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    ticketNumber: 'ticketNumber',
    customerName: 'customerName',
    date: 'date',
    materialCode: 'materialCode',
    description: 'description',
    quantity: 'quantity',
    spareType: 'spareType',
    createdAt: 'createdAt'
};
export const ReturnToGodownOrderScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    referenceNumber: 'referenceNumber',
    date: 'date',
    materialCode: 'materialCode',
    description: 'description',
    quantity: 'quantity',
    createdAt: 'createdAt'
};
export const CustomerReturnScalarFieldEnum = {
    id: 'id',
    returnDate: 'returnDate',
    franchiseeId: 'franchiseeId',
    materialCode: 'materialCode',
    materialName: 'materialName',
    quantity: 'quantity',
    pricePerUnit: 'pricePerUnit',
    totalPrice: 'totalPrice',
    remarks: 'remarks',
    createdAt: 'createdAt'
};
export const AmcContractScalarFieldEnum = {
    id: 'id',
    icrNumber: 'icrNumber',
    warrantyType: 'warrantyType',
    price: 'price',
    discount: 'discount',
    totalPrice: 'totalPrice',
    engineerName: 'engineerName',
    date: 'date',
    franchiseeId: 'franchiseeId',
    createdAt: 'createdAt'
};
export const GodownStockScalarFieldEnum = {
    id: 'id',
    franchiseeId: 'franchiseeId',
    materialCode: 'materialCode',
    goodQuantity: 'goodQuantity',
    defectiveQuantity: 'defectiveQuantity',
    unitPrice: 'unitPrice',
    invoiceId: 'invoiceId',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
//# sourceMappingURL=prismaNamespaceBrowser.js.map