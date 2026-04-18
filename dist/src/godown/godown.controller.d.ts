import { GodownService } from './godown.service.js';
import { CreateGodownStockDto } from './dto/create-godown-stock.dto.js';
import { UpdateGodownStockDto } from './dto/update-godown-stock.dto.js';
export declare class GodownController {
    private readonly godownService;
    constructor(godownService: GodownService);
    createManual(dto: CreateGodownStockDto, req: any): Promise<{
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
    findAll(req: any): Promise<({
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
    getSummary(req: any): Promise<{
        materialCode: string;
        description: string;
        materialGroup: string;
        goodQuantity: number;
        defectiveQuantity: number;
    }[]>;
    findOne(id: string, req: any): Promise<{
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
    update(id: string, dto: UpdateGodownStockDto, req: any): Promise<{
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
    remove(id: string, req: any): Promise<{
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
