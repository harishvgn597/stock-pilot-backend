import { PrismaService } from '../prisma/prisma.service.js';
import { CreateGodownStockDto } from './dto/create-godown-stock.dto.js';
import { UpdateGodownStockDto } from './dto/update-godown-stock.dto.js';
export declare class GodownService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createFromInvoice(invoiceId: string, franchiseeId: string, items: Array<{
        materialCode: string;
        description: string;
        hsn?: string | null;
        quantity: number;
        uom: string;
        unitPrice: number;
        totalAmount: number;
        cgst: number;
        sgst: number;
        spareType?: string | null;
        status?: string | null;
    }>): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string | null;
        franchiseeId: string;
        invoiceId: string | null;
        hsn: string | null;
        uom: string | null;
        unitPrice: number | null;
        totalAmount: number | null;
        cgst: number | null;
        sgst: number | null;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        status: import("../../generated/prisma/enums.js").ItemStatus | null;
        goodQuantity: number;
        defectiveQuantity: number;
        notes: string | null;
        updatedAt: Date;
    }[]>;
    createManual(dto: CreateGodownStockDto, franchiseeId: string): Promise<{
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
        invoice: {
            invoiceNumber: string;
            invoiceDate: Date;
            customerName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string | null;
        franchiseeId: string;
        invoiceId: string | null;
        hsn: string | null;
        uom: string | null;
        unitPrice: number | null;
        totalAmount: number | null;
        cgst: number | null;
        sgst: number | null;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        status: import("../../generated/prisma/enums.js").ItemStatus | null;
        goodQuantity: number;
        defectiveQuantity: number;
        notes: string | null;
        updatedAt: Date;
    }>;
    findAll(franchiseeId: string): Promise<({
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
        invoice: {
            invoiceNumber: string;
            invoiceDate: Date;
            customerName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string | null;
        franchiseeId: string;
        invoiceId: string | null;
        hsn: string | null;
        uom: string | null;
        unitPrice: number | null;
        totalAmount: number | null;
        cgst: number | null;
        sgst: number | null;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        status: import("../../generated/prisma/enums.js").ItemStatus | null;
        goodQuantity: number;
        defectiveQuantity: number;
        notes: string | null;
        updatedAt: Date;
    })[]>;
    getSummary(franchiseeId: string): Promise<{
        materialCode: string;
        description: string;
        materialGroup: string;
        goodQuantity: number;
        defectiveQuantity: number;
    }[]>;
    findOne(id: string, franchiseeId: string): Promise<{
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
        invoice: {
            invoiceNumber: string;
            invoiceDate: Date;
            customerName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string | null;
        franchiseeId: string;
        invoiceId: string | null;
        hsn: string | null;
        uom: string | null;
        unitPrice: number | null;
        totalAmount: number | null;
        cgst: number | null;
        sgst: number | null;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        status: import("../../generated/prisma/enums.js").ItemStatus | null;
        goodQuantity: number;
        defectiveQuantity: number;
        notes: string | null;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateGodownStockDto, franchiseeId: string): Promise<{
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
        invoice: {
            invoiceNumber: string;
            invoiceDate: Date;
            customerName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string | null;
        franchiseeId: string;
        invoiceId: string | null;
        hsn: string | null;
        uom: string | null;
        unitPrice: number | null;
        totalAmount: number | null;
        cgst: number | null;
        sgst: number | null;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        status: import("../../generated/prisma/enums.js").ItemStatus | null;
        goodQuantity: number;
        defectiveQuantity: number;
        notes: string | null;
        updatedAt: Date;
    }>;
    remove(id: string, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string | null;
        franchiseeId: string;
        invoiceId: string | null;
        hsn: string | null;
        uom: string | null;
        unitPrice: number | null;
        totalAmount: number | null;
        cgst: number | null;
        sgst: number | null;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        status: import("../../generated/prisma/enums.js").ItemStatus | null;
        goodQuantity: number;
        defectiveQuantity: number;
        notes: string | null;
        updatedAt: Date;
    }>;
}
