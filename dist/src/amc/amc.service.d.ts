import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAmcContractDto } from './dto/create-amc-contract.dto.js';
export declare class AmcService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAmcContractDto, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: import("../../generated/prisma/enums.js").WarrantyType;
        discount: number | null;
        engineerName: string;
    }>;
    findAll(franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: import("../../generated/prisma/enums.js").WarrantyType;
        discount: number | null;
        engineerName: string;
    }[]>;
    findOne(id: string, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: import("../../generated/prisma/enums.js").WarrantyType;
        discount: number | null;
        engineerName: string;
    }>;
    findByIcr(icrNumber: string, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: import("../../generated/prisma/enums.js").WarrantyType;
        discount: number | null;
        engineerName: string;
    }>;
    remove(id: string, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: import("../../generated/prisma/enums.js").WarrantyType;
        discount: number | null;
        engineerName: string;
    }>;
}
