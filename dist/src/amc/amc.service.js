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
let AmcService = class AmcService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, franchiseeId) {
        const existing = await this.prisma.amcContract.findUnique({
            where: { icrNumber: dto.icrNumber },
        });
        if (existing) {
            throw new ConflictException(`ICR number ${dto.icrNumber} already exists`);
        }
        const discount = dto.discount ?? 0;
        const totalPrice = dto.price - discount;
        return this.prisma.amcContract.create({
            data: {
                icrNumber: dto.icrNumber,
                warrantyType: dto.warrantyType,
                price: dto.price,
                discount: dto.discount ?? null,
                totalPrice,
                engineerName: dto.engineerName,
                date: new Date(dto.date),
                franchiseeId,
            },
        });
    }
    async findAll(franchiseeId) {
        return this.prisma.amcContract.findMany({
            where: { franchiseeId },
            orderBy: { date: 'desc' },
        });
    }
    async findOne(id, franchiseeId) {
        const record = await this.prisma.amcContract.findFirst({
            where: { id, franchiseeId },
        });
        if (!record) {
            throw new NotFoundException(`AMC contract with id ${id} not found`);
        }
        return record;
    }
    async findByIcr(icrNumber, franchiseeId) {
        const record = await this.prisma.amcContract.findFirst({
            where: { icrNumber, franchiseeId },
        });
        if (!record) {
            throw new NotFoundException(`AMC contract with ICR number ${icrNumber} not found`);
        }
        return record;
    }
    async remove(id, franchiseeId) {
        const record = await this.prisma.amcContract.findFirst({
            where: { id, franchiseeId },
        });
        if (!record) {
            throw new NotFoundException(`AMC contract with id ${id} not found`);
        }
        return this.prisma.amcContract.delete({ where: { id } });
    }
};
AmcService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AmcService);
export { AmcService };
//# sourceMappingURL=amc.service.js.map