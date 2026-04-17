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
const INCLUDE = {
    material: {
        select: { materialCode: true, description: true, materialGroup: true },
    },
    invoice: {
        select: { invoiceNumber: true, invoiceDate: true, customerName: true },
    },
};
let GodownService = class GodownService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createFromInvoice(invoiceId, franchiseeId, items) {
        const rows = items.map((item) => this.prisma.godownStock.create({
            data: {
                franchiseeId,
                materialCode: item.materialCode,
                goodQuantity: item.quantity,
                defectiveQuantity: 0,
                invoiceId,
            },
        }));
        return Promise.all(rows);
    }
    async createManual(dto, franchiseeId) {
        const material = await this.prisma.material.findUnique({
            where: { materialCode: dto.materialCode },
        });
        if (!material) {
            throw new NotFoundException(`Material with code ${dto.materialCode} not found`);
        }
        return this.prisma.godownStock.create({
            data: {
                franchiseeId,
                materialCode: dto.materialCode,
                goodQuantity: dto.goodQuantity,
                defectiveQuantity: dto.defectiveQuantity ?? 0,
                invoiceId: null,
                notes: dto.notes ?? null,
            },
            include: INCLUDE,
        });
    }
    async findAll(franchiseeId) {
        return this.prisma.godownStock.findMany({
            where: { franchiseeId },
            include: INCLUDE,
            orderBy: { createdAt: 'desc' },
        });
    }
    async getSummary(franchiseeId) {
        const rows = await this.prisma.godownStock.findMany({
            where: { franchiseeId },
            select: {
                materialCode: true,
                goodQuantity: true,
                defectiveQuantity: true,
                material: {
                    select: { description: true, materialGroup: true },
                },
            },
        });
        const map = new Map();
        for (const row of rows) {
            const existing = map.get(row.materialCode);
            if (existing) {
                existing.goodQuantity += row.goodQuantity;
                existing.defectiveQuantity += row.defectiveQuantity;
            }
            else {
                map.set(row.materialCode, {
                    materialCode: row.materialCode,
                    description: row.material.description,
                    materialGroup: row.material.materialGroup,
                    goodQuantity: row.goodQuantity,
                    defectiveQuantity: row.defectiveQuantity,
                });
            }
        }
        return Array.from(map.values());
    }
    async findOne(id, franchiseeId) {
        const record = await this.prisma.godownStock.findFirst({
            where: { id, franchiseeId },
            include: INCLUDE,
        });
        if (!record) {
            throw new NotFoundException(`Godown stock entry with id ${id} not found`);
        }
        return record;
    }
    async update(id, dto, franchiseeId) {
        const record = await this.prisma.godownStock.findFirst({
            where: { id, franchiseeId },
        });
        if (!record) {
            throw new NotFoundException(`Godown stock entry with id ${id} not found`);
        }
        return this.prisma.godownStock.update({
            where: { id },
            data: {
                ...(dto.goodQuantity !== undefined && { goodQuantity: dto.goodQuantity }),
                ...(dto.defectiveQuantity !== undefined && { defectiveQuantity: dto.defectiveQuantity }),
                ...(dto.notes !== undefined && { notes: dto.notes }),
            },
            include: INCLUDE,
        });
    }
    async remove(id, franchiseeId) {
        const record = await this.prisma.godownStock.findFirst({
            where: { id, franchiseeId },
        });
        if (!record) {
            throw new NotFoundException(`Godown stock entry with id ${id} not found`);
        }
        return this.prisma.godownStock.delete({ where: { id } });
    }
};
GodownService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], GodownService);
export { GodownService };
//# sourceMappingURL=godown.service.js.map