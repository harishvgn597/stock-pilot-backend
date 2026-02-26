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
let EngineersService = class EngineersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.engineer.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
                specialization: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findById(id) {
        const engineer = await this.prisma.engineer.findUnique({
            where: { id },
            include: {
                assignedGoods: {
                    select: {
                        id: true,
                        materialCode: true,
                        material: {
                            select: {
                                description: true,
                                materialGroup: true,
                            },
                        },
                        quantity: true,
                        createdAt: true,
                    },
                },
            },
        });
        if (!engineer) {
            throw new NotFoundException(`Engineer with id ${id} not found`);
        }
        return engineer;
    }
    async create(dto) {
        const existing = await this.prisma.engineer.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new ConflictException(`Engineer with email ${dto.email} already exists`);
        }
        return this.prisma.engineer.create({
            data: dto,
            select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
                specialization: true,
                createdAt: true,
            },
        });
    }
    async assignStock(dto) {
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
        return this.prisma.engineerStock.create({
            data: {
                engineerId: dto.engineerId,
                materialCode: dto.materialCode,
                quantity: dto.quantity,
            },
            select: {
                id: true,
                engineer: {
                    select: { id: true, name: true },
                },
                materialCode: true,
                material: {
                    select: { description: true, materialGroup: true },
                },
                quantity: true,
                createdAt: true,
            },
        });
    }
    async getStock(engineerId) {
        const engineer = await this.prisma.engineer.findUnique({
            where: { id: engineerId },
        });
        if (!engineer) {
            throw new NotFoundException(`Engineer with id ${engineerId} not found`);
        }
        return this.prisma.engineerStock.findMany({
            where: { engineerId },
            select: {
                id: true,
                materialCode: true,
                material: {
                    select: { description: true, materialGroup: true },
                },
                quantity: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
};
EngineersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EngineersService);
export { EngineersService };
//# sourceMappingURL=engineers.service.js.map