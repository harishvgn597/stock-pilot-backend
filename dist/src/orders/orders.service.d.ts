import { PrismaService } from '../prisma/prisma.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createSale(dto: CreateSaleOrderDto): Promise<{
        engineer: {
            id: string;
            name: string;
            email: string;
        };
        saleOrder: {
            id: string;
            createdAt: Date;
            materialCode: string;
            description: string;
            customerName: string | null;
            quantity: number;
            spareType: import("../../generated/prisma/enums.js").SpareType | null;
            orderId: string;
            billNumber: string;
            dateOfSale: Date;
            ticketNumber: string | null;
            price: number;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        engineerId: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
    }>;
    findAllSales(): Promise<({
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
        order: {
            engineer: {
                id: string;
                name: string;
                email: string;
                phoneNumber: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            engineerId: string;
            orderType: import("../../generated/prisma/enums.js").OrderType;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string;
        customerName: string | null;
        quantity: number;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        orderId: string;
        billNumber: string;
        dateOfSale: Date;
        ticketNumber: string | null;
        price: number;
    })[]>;
    findSaleByBillNumber(billNumber: string): Promise<{
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
        order: {
            engineer: {
                id: string;
                name: string;
                email: string;
                phoneNumber: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            engineerId: string;
            orderType: import("../../generated/prisma/enums.js").OrderType;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string;
        customerName: string | null;
        quantity: number;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        orderId: string;
        billNumber: string;
        dateOfSale: Date;
        ticketNumber: string | null;
        price: number;
    }>;
    findSalesByEngineer(engineerId: string): Promise<({
        material: {
            materialCode: string;
            description: string;
            materialGroup: string;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string;
        customerName: string | null;
        quantity: number;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        orderId: string;
        billNumber: string;
        dateOfSale: Date;
        ticketNumber: string | null;
        price: number;
    })[]>;
}
