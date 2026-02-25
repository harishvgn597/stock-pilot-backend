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
let InvoicesService = class InvoicesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.invoice.findMany({
            include: {
                items: {
                    select: {
                        id: true,
                        materialCode: true,
                        description: true,
                        hsn: true,
                        quantity: true,
                        uom: true,
                        unitPrice: true,
                        totalAmount: true,
                        cgst: true,
                        sgst: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findByNumber(invoiceNumber) {
        const invoice = await this.prisma.invoice.findUnique({
            where: { invoiceNumber },
            include: {
                items: {
                    select: {
                        id: true,
                        materialCode: true,
                        description: true,
                        hsn: true,
                        quantity: true,
                        uom: true,
                        unitPrice: true,
                        totalAmount: true,
                        cgst: true,
                        sgst: true,
                    },
                },
            },
        });
        if (!invoice) {
            throw new NotFoundException(`Invoice ${invoiceNumber} not found`);
        }
        return invoice;
    }
    async create(dto) {
        const existing = await this.prisma.invoice.findUnique({
            where: { invoiceNumber: dto.invoiceNumber },
        });
        if (existing) {
            throw new ConflictException(`Invoice ${dto.invoiceNumber} already exists`);
        }
        return this.prisma.invoice.create({
            data: {
                invoiceNumber: dto.invoiceNumber,
                invoiceDate: new Date(dto.invoiceDate),
                customerName: dto.customerName,
                items: {
                    create: dto.items.map((item) => ({
                        materialCode: item.materialCode,
                        description: item.description,
                        hsn: item.hsn ?? null,
                        quantity: item.quantity,
                        uom: item.uom,
                        unitPrice: item.unitPrice,
                        totalAmount: item.totalAmount,
                        cgst: item.cgst,
                        sgst: item.sgst,
                    })),
                },
            },
            include: {
                items: {
                    select: {
                        id: true,
                        materialCode: true,
                        description: true,
                        hsn: true,
                        quantity: true,
                        uom: true,
                        unitPrice: true,
                        totalAmount: true,
                        cgst: true,
                        sgst: true,
                    },
                },
            },
        });
    }
};
InvoicesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], InvoicesService);
export { InvoicesService };
//# sourceMappingURL=invoices.service.js.map