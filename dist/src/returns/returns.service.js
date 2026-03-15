var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let ReturnsService = class ReturnsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, franchiseeId) {
        const material = await this.prisma.material.findUnique({
            where: { materialCode: dto.materialCode },
        });
        if (!material) {
            throw new NotFoundException(`Material with code ${dto.materialCode} not found`);
        }
        const totalPrice = dto.quantity * dto.pricePerUnit;
        return this.prisma.customerReturn.create({
            data: {
                returnDate: new Date(dto.returnDate),
                franchiseeId,
                materialCode: dto.materialCode,
                materialName: dto.materialName,
                quantity: dto.quantity,
                pricePerUnit: dto.pricePerUnit,
                totalPrice,
                remarks: dto.remarks ?? null,
            },
            include: {
                material: {
                    select: { materialCode: true, description: true, materialGroup: true },
                },
            },
        });
    }
    async findAll(franchiseeId) {
        return this.prisma.customerReturn.findMany({
            where: { franchiseeId },
            include: {
                material: {
                    select: { materialCode: true, description: true, materialGroup: true },
                },
            },
            orderBy: { returnDate: 'desc' },
        });
    }
    async findOne(id, franchiseeId) {
        const record = await this.prisma.customerReturn.findFirst({
            where: { id, franchiseeId },
            include: {
                material: {
                    select: { materialCode: true, description: true, materialGroup: true },
                },
            },
        });
        if (!record) {
            throw new NotFoundException(`Return record with id ${id} not found`);
        }
        return record;
    }
    async remove(id, franchiseeId) {
        const record = await this.prisma.customerReturn.findFirst({
            where: { id, franchiseeId },
        });
        if (!record) {
            throw new NotFoundException(`Return record with id ${id} not found`);
        }
        return this.prisma.customerReturn.delete({ where: { id } });
    }
};
ReturnsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ReturnsService);
export { ReturnsService };
//# sourceMappingURL=returns.service.js.map