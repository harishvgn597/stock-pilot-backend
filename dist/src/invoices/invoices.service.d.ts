import { PrismaService } from '../prisma/prisma.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto.js';
export declare class InvoicesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    create(dto: CreateInvoiceDto): Promise<{
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
    }>;
}
