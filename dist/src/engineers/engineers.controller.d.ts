import { EngineersService } from './engineers.service.js';
import { CreateEngineerDto } from './dto/create-engineer.dto.js';
import { AssignStockDto } from './dto/assign-stock.dto.js';
export declare class EngineersController {
    private readonly engineersService;
    constructor(engineersService: EngineersService);
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
    }[]>;
    findById(id: string): Promise<{
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
        createdAt: Date;
    }>;
    getStock(id: string): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        quantity: number;
        material: {
            description: string;
            materialGroup: string;
        };
    }[]>;
    create(createEngineerDto: CreateEngineerDto): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
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
}
