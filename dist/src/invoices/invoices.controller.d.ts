import { InvoicesService } from './invoices.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    findAll(): Promise<({
        items: {
            id: string;
            materialCode: string;
            description: string;
            hsn: string | null;
            quantity: number;
            uom: string;
            unitPrice: number;
            totalAmount: number;
            cgst: number;
            sgst: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        invoiceNumber: string;
        invoiceDate: Date;
        customerName: string;
    })[]>;
    findByNumber(invoiceNumber: string): Promise<{
        items: {
            id: string;
            materialCode: string;
            description: string;
            hsn: string | null;
            quantity: number;
            uom: string;
            unitPrice: number;
            totalAmount: number;
            cgst: number;
            sgst: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        invoiceNumber: string;
        invoiceDate: Date;
        customerName: string;
    }>;
    create(createInvoiceDto: CreateInvoiceDto): Promise<{
        items: {
            id: string;
            materialCode: string;
            description: string;
            hsn: string | null;
            quantity: number;
            uom: string;
            unitPrice: number;
            totalAmount: number;
            cgst: number;
            sgst: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        invoiceNumber: string;
        invoiceDate: Date;
        customerName: string;
    }>;
}
