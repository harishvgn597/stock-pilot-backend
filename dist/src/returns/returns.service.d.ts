import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCustomerReturnDto } from './dto/create-customer-return.dto.js';
export declare class ReturnsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCustomerReturnDto, franchiseeId: string): Promise<{
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        franchiseeId: string;
        quantity: number;
        returnDate: Date;
        materialName: string;
        pricePerUnit: number;
        totalPrice: number;
        remarks: string | null;
    }>;
    findAll(franchiseeId: string): Promise<({
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        franchiseeId: string;
        quantity: number;
        returnDate: Date;
        materialName: string;
        pricePerUnit: number;
        totalPrice: number;
        remarks: string | null;
    })[]>;
    findOne(id: string, franchiseeId: string): Promise<{
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        franchiseeId: string;
        quantity: number;
        returnDate: Date;
        materialName: string;
        pricePerUnit: number;
        totalPrice: number;
        remarks: string | null;
    }>;
    remove(id: string, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        franchiseeId: string;
        quantity: number;
        returnDate: Date;
        materialName: string;
        pricePerUnit: number;
        totalPrice: number;
        remarks: string | null;
    }>;
}
