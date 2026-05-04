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
const select = {
    id: true,
    ratePerSalesCall: true,
    rateCustomerSatisfaction: true,
    slabAccessory: true,
    slabSpare: true,
    slabEssential: true,
    createdAt: true,
    updatedAt: true,
};
let SalaryConfigService = class SalaryConfigService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async upsert(dto, franchiseeId) {
        return this.prisma.franchiseSalaryConfig.upsert({
            where: { franchiseeId },
            create: { franchiseeId, ...dto },
            update: dto,
            select,
        });
    }
    async get(franchiseeId) {
        const config = await this.prisma.franchiseSalaryConfig.findUnique({
            where: { franchiseeId },
            select,
        });
        if (!config) {
            throw new NotFoundException(`No salary config found for this franchise`);
        }
        return config;
    }
    async patch(dto, franchiseeId) {
        const existing = await this.prisma.franchiseSalaryConfig.findUnique({
            where: { franchiseeId },
        });
        if (!existing) {
            throw new NotFoundException(`No salary config found. Use PUT to create one.`);
        }
        return this.prisma.franchiseSalaryConfig.update({
            where: { franchiseeId },
            data: dto,
            select,
        });
    }
};
SalaryConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], SalaryConfigService);
export { SalaryConfigService };
//# sourceMappingURL=salary-config.service.js.map