import { PrismaService } from '../prisma/prisma.service.js';
import { CreateGodownStockDto } from './dto/create-godown-stock.dto.js';
import { UpdateGodownStockDto } from './dto/update-godown-stock.dto.js';
export declare class GodownService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createFromInvoice(invoiceId: string, franchiseeId: string, items: Array<{
        materialCode: string;
        quantity: number;
    }>): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        franchiseeId: string;
        invoiceId: string | null;
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
        franchiseeId: string;
        invoiceId: string | null;
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
        franchiseeId: string;
        invoiceId: string | null;
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
        franchiseeId: string;
        invoiceId: string | null;
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
        franchiseeId: string;
        invoiceId: string | null;
        goodQuantity: number;
        defectiveQuantity: number;
        notes: string | null;
        updatedAt: Date;
    }>;
    remove(id: string, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        franchiseeId: string;
        invoiceId: string | null;
        goodQuantity: number;
        defectiveQuantity: number;
        notes: string | null;
        updatedAt: Date;
    }>;
}
