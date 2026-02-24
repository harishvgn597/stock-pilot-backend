import { PrismaService } from '../prisma/prisma.service.js';
export declare class MaterialsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByCode(materialCode: string): Promise<{
        prices: {
            id: string;
            conditionRecord: string;
            conditionType: string;
            rate: number;
            validFrom: Date;
            validTo: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string;
        materialGroup: string;
    }>;
}
