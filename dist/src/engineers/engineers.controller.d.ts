import { EngineersService } from './engineers.service.js';
import { CreateEngineerDto } from './dto/create-engineer.dto.js';
import { AssignStockDto } from './dto/assign-stock.dto.js';
export declare class EngineersController {
    private readonly engineersService;
    constructor(engineersService: EngineersService);
    findAll(req: any): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string | null;
        createdAt: Date;
        specialization: string | null;
    }[]>;
    findById(id: string, req: any): Promise<{
        assignedGoods: {
            id: string;
            createdAt: Date;
            materialCode: string;
            quantity: number;
            material: {
                description: string;
                materialGroup: string;
            };
        }[];
    } & {
        id: string;
        name: string;
        email: string;
        phoneNumber: string | null;
        createdAt: Date;
        franchiseeId: string;
        specialization: string | null;
    }>;
    getStock(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        quantity: number;
        material: {
            description: string;
            materialGroup: string;
        };
    }[]>;
    create(createEngineerDto: CreateEngineerDto, req: any): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string | null;
        createdAt: Date;
        specialization: string | null;
    }>;
    assignStock(assignStockDto: AssignStockDto): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        quantity: number;
        material: {
            description: string;
            materialGroup: string;
        };
        engineer: {
            id: string;
            name: string;
        };
    }>;
    removeStock(engineerId: string, stockId: string): Promise<{
        message: string;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
