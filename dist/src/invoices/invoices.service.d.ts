import { PrismaService } from '../prisma/prisma.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto.js';
export declare class InvoicesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(franchiseeId: string): Promise<({
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
    findByNumber(invoiceNumber: string, franchiseeId: string): Promise<{
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
    create(dto: CreateInvoiceDto, franchiseeId: string): Promise<{
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
    updateItem(id: string, dto: UpdateInvoiceItemDto): Promise<{
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
