var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let OrdersService = class OrdersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createSale(dto) {
        const engineer = await this.prisma.engineer.findUnique({
            where: { id: dto.engineerId },
        });
        if (!engineer) {
            throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);
        }
        const material = await this.prisma.material.findUnique({
            where: { materialCode: dto.materialCode },
        });
        if (!material) {
            throw new NotFoundException(`Material with code ${dto.materialCode} not found`);
        }
        const existing = await this.prisma.saleOrder.findUnique({
            where: { billNumber: dto.billNumber },
        });
        if (existing) {
            throw new ConflictException(`Bill number ${dto.billNumber} already exists`);
        }
        return this.prisma.order.create({
            data: {
                orderType: 'Sale',
                engineerId: dto.engineerId,
                saleOrder: {
                    create: {
                        billNumber: dto.billNumber,
                        dateOfSale: new Date(dto.dateOfSale),
                        ticketNumber: dto.ticketNumber ?? null,
                        customerName: dto.customerName ?? null,
                        materialCode: dto.materialCode,
                        description: dto.description,
                        quantity: dto.quantity,
                        spareType: dto.spareType ?? null,
                        price: dto.price,
                    },
                },
            },
            include: {
                engineer: {
                    select: { id: true, name: true, email: true },
                },
                saleOrder: true,
            },
        });
    }
    async findAllSales() {
        return this.prisma.saleOrder.findMany({
            include: {
                order: {
                    include: {
                        engineer: {
                            select: { id: true, name: true, email: true, phoneNumber: true },
                        },
                    },
                },
                material: {
                    select: { materialCode: true, description: true, materialGroup: true },
                },
            },
            orderBy: { dateOfSale: 'desc' },
        });
    }
    async findSaleByBillNumber(billNumber) {
        const sale = await this.prisma.saleOrder.findUnique({
            where: { billNumber },
            include: {
                order: {
                    include: {
                        engineer: {
                            select: { id: true, name: true, email: true, phoneNumber: true },
                        },
                    },
                },
                material: {
                    select: { materialCode: true, description: true, materialGroup: true },
                },
            },
        });
        if (!sale) {
            throw new NotFoundException(`Sale order with bill number ${billNumber} not found`);
        }
        return sale;
    }
    async findSalesByEngineer(engineerId) {
        const engineer = await this.prisma.engineer.findUnique({
            where: { id: engineerId },
        });
        if (!engineer) {
            throw new NotFoundException(`Engineer with id ${engineerId} not found`);
        }
        return this.prisma.saleOrder.findMany({
            where: {
                order: { engineerId },
            },
            include: {
                material: {
                    select: { materialCode: true, description: true, materialGroup: true },
                },
            },
            orderBy: { dateOfSale: 'desc' },
        });
    }
    async createWarrantyAmc(dto) {
        const engineer = await this.prisma.engineer.findUnique({ where: { id: dto.engineerId } });
        if (!engineer)
            throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);
        const material = await this.prisma.material.findUnique({ where: { materialCode: dto.materialCode } });
        if (!material)
            throw new NotFoundException(`Material with code ${dto.materialCode} not found`);
        return this.prisma.order.create({
            data: {
                orderType: 'WarrantyAMC',
                engineerId: dto.engineerId,
                warrantyAmcOrder: {
                    create: {
                        ticketNumber: dto.ticketNumber,
                        customerName: dto.customerName,
                        date: new Date(dto.date),
                        materialCode: dto.materialCode,
                        description: dto.description,
                        quantity: dto.quantity,
                        spareType: dto.spareType ?? null,
                    },
                },
            },
            include: {
                engineer: { select: { id: true, name: true, email: true } },
                warrantyAmcOrder: true,
            },
        });
    }
    async findAllWarrantyAmc() {
        return this.prisma.warrantyAmcOrder.findMany({
            include: {
                order: {
                    include: {
                        engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
                    },
                },
                material: { select: { materialCode: true, description: true, materialGroup: true } },
            },
            orderBy: { date: 'desc' },
        });
    }
    async findWarrantyAmcByTicket(ticketNumber) {
        const record = await this.prisma.warrantyAmcOrder.findFirst({
            where: { ticketNumber },
            include: {
                order: {
                    include: {
                        engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
                    },
                },
                material: { select: { materialCode: true, description: true, materialGroup: true } },
            },
        });
        if (!record)
            throw new NotFoundException(`Warranty/AMC order with ticket ${ticketNumber} not found`);
        return record;
    }
    async findWarrantyAmcByEngineer(engineerId) {
        const engineer = await this.prisma.engineer.findUnique({ where: { id: engineerId } });
        if (!engineer)
            throw new NotFoundException(`Engineer with id ${engineerId} not found`);
        return this.prisma.warrantyAmcOrder.findMany({
            where: { order: { engineerId } },
            include: {
                material: { select: { materialCode: true, description: true, materialGroup: true } },
            },
            orderBy: { date: 'desc' },
        });
    }
    async createReturnToGodown(dto) {
        const engineer = await this.prisma.engineer.findUnique({ where: { id: dto.engineerId } });
        if (!engineer)
            throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);
        const material = await this.prisma.material.findUnique({ where: { materialCode: dto.materialCode } });
        if (!material)
            throw new NotFoundException(`Material with code ${dto.materialCode} not found`);
        const existing = await this.prisma.returnToGodownOrder.findUnique({ where: { referenceNumber: dto.referenceNumber } });
        if (existing)
            throw new ConflictException(`Reference number ${dto.referenceNumber} already exists`);
        return this.prisma.order.create({
            data: {
                orderType: 'ReturnToServiceCenter',
                engineerId: dto.engineerId,
                returnToGodownOrder: {
                    create: {
                        referenceNumber: dto.referenceNumber,
                        date: new Date(dto.date),
                        materialCode: dto.materialCode,
                        description: dto.description,
                        quantity: dto.quantity,
                    },
                },
            },
            include: {
                engineer: { select: { id: true, name: true, email: true } },
                returnToGodownOrder: true,
            },
        });
    }
    async findAllReturnToGodown() {
        return this.prisma.returnToGodownOrder.findMany({
            include: {
                order: {
                    include: {
                        engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
                    },
                },
                material: { select: { materialCode: true, description: true, materialGroup: true } },
            },
            orderBy: { date: 'desc' },
        });
    }
    async findReturnToGodownByRef(referenceNumber) {
        const record = await this.prisma.returnToGodownOrder.findUnique({
            where: { referenceNumber },
            include: {
                order: {
                    include: {
                        engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
                    },
                },
                material: { select: { materialCode: true, description: true, materialGroup: true } },
            },
        });
        if (!record)
            throw new NotFoundException(`Return order with reference ${referenceNumber} not found`);
        return record;
    }
    async findReturnToGodownByEngineer(engineerId) {
        const engineer = await this.prisma.engineer.findUnique({ where: { id: engineerId } });
        if (!engineer)
            throw new NotFoundException(`Engineer with id ${engineerId} not found`);
        return this.prisma.returnToGodownOrder.findMany({
            where: { order: { engineerId } },
            include: {
                material: { select: { materialCode: true, description: true, materialGroup: true } },
            },
            orderBy: { date: 'desc' },
        });
    }
};
OrdersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], OrdersService);
export { OrdersService };
//# sourceMappingURL=orders.service.js.map