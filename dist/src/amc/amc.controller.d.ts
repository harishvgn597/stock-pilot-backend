import { AmcService } from './amc.service.js';
import { CreateAmcContractDto } from './dto/create-amc-contract.dto.js';
export declare class AmcController {
    private readonly amcService;
    constructor(amcService: AmcService);
    create(dto: CreateAmcContractDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: string;
        discount: number | null;
        engineerName: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: string;
        discount: number | null;
        engineerName: string;
    }[]>;
    findByIcr(icrNumber: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: string;
        discount: number | null;
        engineerName: string;
    }>;
    findOne(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: string;
        discount: number | null;
        engineerName: string;
    }>;
    remove(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        franchiseeId: string;
        price: number;
        date: Date;
        totalPrice: number;
        icrNumber: string;
        warrantyType: string;
        discount: number | null;
        engineerName: string;
    }>;
}
