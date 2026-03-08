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
};
OrdersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], OrdersService);
export { OrdersService };
//# sourceMappingURL=orders.service.js.map