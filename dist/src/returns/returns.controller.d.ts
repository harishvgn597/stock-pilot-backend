import { ReturnsService } from './returns.service.js';
import { CreateCustomerReturnDto } from './dto/create-customer-return.dto.js';
export declare class ReturnsController {
    private readonly returnsService;
    constructor(returnsService: ReturnsService);
    create(dto: CreateCustomerReturnDto, req: any): Promise<{
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
    findAll(req: any): Promise<({
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
    findOne(id: string, req: any): Promise<{
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
    remove(id: string, req: any): Promise<{
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
