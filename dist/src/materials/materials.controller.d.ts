import { MaterialsService } from './materials.service.js';
export declare class MaterialsController {
    private readonly materialsService;
    constructor(materialsService: MaterialsService);
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
