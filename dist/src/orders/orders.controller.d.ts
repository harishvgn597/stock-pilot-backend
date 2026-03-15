import { OrdersService } from './orders.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
import { CreateWarrantyAmcOrderDto } from './dto/create-warranty-amc-order.dto.js';
import { CreateReturnToGodownOrderDto } from './dto/create-return-to-godown-order.dto.js';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createSale(dto: CreateSaleOrderDto, req: any): Promise<{
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
    findAllSales(req: any): Promise<({
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
    findSaleByBillNumber(billNumber: string, req: any): Promise<{
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
    findSalesByEngineer(engineerId: string, req: any): Promise<({
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
    createWarrantyAmc(dto: CreateWarrantyAmcOrderDto, req: any): Promise<{
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
    findAllWarrantyAmc(req: any): Promise<({
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
    findWarrantyAmcByTicket(ticketNumber: string, req: any): Promise<{
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
    findWarrantyAmcByEngineer(engineerId: string, req: any): Promise<({
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
    createReturnToGodown(dto: CreateReturnToGodownOrderDto, req: any): Promise<{
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
    findAllReturnToGodown(req: any): Promise<({
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
    findReturnToGodownByRef(referenceNumber: string, req: any): Promise<{
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
    findReturnToGodownByEngineer(engineerId: string, req: any): Promise<({
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
