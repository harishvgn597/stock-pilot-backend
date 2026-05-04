import { SalaryConfigService } from './salary-config.service.js';
import { UpsertSalaryConfigDto } from './dto/create-salary-config.dto.js';
import { UpdateSalaryConfigDto } from './dto/update-salary-config.dto.js';
export declare class SalaryConfigController {
    private readonly salaryConfigService;
    constructor(salaryConfigService: SalaryConfigService);
    get(req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ratePerSalesCall: number;
        rateCustomerSatisfaction: number;
        slabAccessory: number;
        slabSpare: number;
        slabEssential: number;
    }>;
    upsert(dto: UpsertSalaryConfigDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ratePerSalesCall: number;
        rateCustomerSatisfaction: number;
        slabAccessory: number;
        slabSpare: number;
        slabEssential: number;
    }>;
    patch(dto: UpdateSalaryConfigDto, req: any): Promise<{
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
