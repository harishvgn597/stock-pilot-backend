import { InvoicesService } from './invoices.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto.js';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    findAll(req: any): Promise<({
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
            spareType: import("../../generated/prisma/enums.js").SpareType | null;
            status: import("../../generated/prisma/enums.js").ItemStatus | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        invoiceNumber: string;
        invoiceDate: Date;
        customerName: string;
        franchiseeId: string;
    })[]>;
    findByNumber(invoiceNumber: string, req: any): Promise<{
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
            spareType: import("../../generated/prisma/enums.js").SpareType | null;
            status: import("../../generated/prisma/enums.js").ItemStatus | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        invoiceNumber: string;
        invoiceDate: Date;
        customerName: string;
        franchiseeId: string;
    }>;
    create(createInvoiceDto: CreateInvoiceDto, req: any): Promise<{
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
            spareType: import("../../generated/prisma/enums.js").SpareType | null;
            status: import("../../generated/prisma/enums.js").ItemStatus | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        invoiceNumber: string;
        invoiceDate: Date;
        customerName: string;
        franchiseeId: string;
    }>;
    updateItem(id: string, updateDto: UpdateInvoiceItemDto): Promise<{
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
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        status: import("../../generated/prisma/enums.js").ItemStatus | null;
    }>;
}
