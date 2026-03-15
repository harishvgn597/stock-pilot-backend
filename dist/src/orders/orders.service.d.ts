import { PrismaService } from '../prisma/prisma.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
import { CreateWarrantyAmcOrderDto } from './dto/create-warranty-amc-order.dto.js';
import { CreateReturnToGodownOrderDto } from './dto/create-return-to-godown-order.dto.js';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createSale(dto: CreateSaleOrderDto, franchiseeId: string): Promise<{
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
        franchiseeId: string;
        engineerId: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
    }>;
    findAllSales(franchiseeId: string): Promise<({
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
            franchiseeId: string;
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
    findSaleByBillNumber(billNumber: string, franchiseeId: string): Promise<{
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
            franchiseeId: string;
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
    findSalesByEngineer(engineerId: string, franchiseeId: string): Promise<({
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
    createWarrantyAmc(dto: CreateWarrantyAmcOrderDto, franchiseeId: string): Promise<{
        engineer: {
            id: string;
            name: string;
            email: string;
        };
        warrantyAmcOrder: {
            id: string;
            createdAt: Date;
            materialCode: string;
            description: string;
            customerName: string;
            quantity: number;
            spareType: import("../../generated/prisma/enums.js").SpareType | null;
            orderId: string;
            ticketNumber: string;
            date: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        franchiseeId: string;
        engineerId: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
    }>;
    findAllWarrantyAmc(franchiseeId: string): Promise<({
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
            franchiseeId: string;
            engineerId: string;
            orderType: import("../../generated/prisma/enums.js").OrderType;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string;
        customerName: string;
        quantity: number;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        orderId: string;
        ticketNumber: string;
        date: Date;
    })[]>;
    findWarrantyAmcByTicket(ticketNumber: string, franchiseeId: string): Promise<{
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
            franchiseeId: string;
            engineerId: string;
            orderType: import("../../generated/prisma/enums.js").OrderType;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string;
        customerName: string;
        quantity: number;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        orderId: string;
        ticketNumber: string;
        date: Date;
    }>;
    findWarrantyAmcByEngineer(engineerId: string, franchiseeId: string): Promise<({
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
        customerName: string;
        quantity: number;
        spareType: import("../../generated/prisma/enums.js").SpareType | null;
        orderId: string;
        ticketNumber: string;
        date: Date;
    })[]>;
    createReturnToGodown(dto: CreateReturnToGodownOrderDto, franchiseeId: string): Promise<{
        engineer: {
            id: string;
            name: string;
            email: string;
        };
        returnToGodownOrder: {
            id: string;
            createdAt: Date;
            materialCode: string;
            description: string;
            quantity: number;
            orderId: string;
            date: Date;
            referenceNumber: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        franchiseeId: string;
        engineerId: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
    }>;
    findAllReturnToGodown(franchiseeId: string): Promise<({
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
            franchiseeId: string;
            engineerId: string;
            orderType: import("../../generated/prisma/enums.js").OrderType;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string;
        quantity: number;
        orderId: string;
        date: Date;
        referenceNumber: string;
    })[]>;
    findReturnToGodownByRef(referenceNumber: string, franchiseeId: string): Promise<{
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
            franchiseeId: string;
            engineerId: string;
            orderType: import("../../generated/prisma/enums.js").OrderType;
        };
    } & {
        id: string;
        createdAt: Date;
        materialCode: string;
        description: string;
        quantity: number;
        orderId: string;
        date: Date;
        referenceNumber: string;
    }>;
    findReturnToGodownByEngineer(engineerId: string, franchiseeId: string): Promise<({
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
        quantity: number;
        orderId: string;
        date: Date;
        referenceNumber: string;
    })[]>;
}
