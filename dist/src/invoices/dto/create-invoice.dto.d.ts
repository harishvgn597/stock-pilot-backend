export declare class CreateInvoiceItemDto {
    materialCode: string;
    description: string;
    hsn?: string;
    quantity: number;
    uom: string;
    unitPrice: number;
    totalAmount: number;
    cgst: number;
    sgst: number;
}
export declare class CreateInvoiceDto {
    invoiceNumber: string;
    invoiceDate: string;
    customerName: string;
    items: CreateInvoiceItemDto[];
}
