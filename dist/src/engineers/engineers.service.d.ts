import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEngineerDto } from './dto/create-engineer.dto.js';
import { AssignStockDto } from './dto/assign-stock.dto.js';
export declare class EngineersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string | null;
        createdAt: Date;
        specialization: string | null;
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
        phoneNumber: string | null;
        createdAt: Date;
        specialization: string | null;
    }>;
    create(dto: CreateEngineerDto): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string | null;
        createdAt: Date;
        specialization: string | null;
    }>;
    assignStock(dto: AssignStockDto): Promise<{
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
    getStock(engineerId: string): Promise<{
        id: string;
        createdAt: Date;
        materialCode: string;
        quantity: number;
        material: {
            description: string;
            materialGroup: string;
        };
    }[]>;
}
