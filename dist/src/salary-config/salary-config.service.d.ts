import { PrismaService } from '../prisma/prisma.service.js';
import { UpsertSalaryConfigDto } from './dto/create-salary-config.dto.js';
import { UpdateSalaryConfigDto } from './dto/update-salary-config.dto.js';
export declare class SalaryConfigService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    upsert(dto: UpsertSalaryConfigDto, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ratePerSalesCall: number;
        rateCustomerSatisfaction: number;
        slabAccessory: number;
        slabSpare: number;
        slabEssential: number;
    }>;
    get(franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ratePerSalesCall: number;
        rateCustomerSatisfaction: number;
        slabAccessory: number;
        slabSpare: number;
        slabEssential: number;
    }>;
    patch(dto: UpdateSalaryConfigDto, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ratePerSalesCall: number;
        rateCustomerSatisfaction: number;
        slabAccessory: number;
        slabSpare: number;
        slabEssential: number;
    }>;
}
