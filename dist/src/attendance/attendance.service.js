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
let AttendanceService = class AttendanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async mark(dto, franchiseeId) {
        const engineer = await this.prisma.engineer.findFirst({
            where: { id: dto.engineerId, franchiseeId },
        });
        if (!engineer) {
            throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);
        }
        const date = new Date(dto.date);
        const existing = await this.prisma.attendance.findUnique({
            where: { engineerId_date: { engineerId: dto.engineerId, date } },
        });
        if (existing) {
            throw new ConflictException(`Attendance for engineer ${dto.engineerId} on ${dto.date} already marked`);
        }
        return this.prisma.attendance.create({
            data: {
                engineerId: dto.engineerId,
                franchiseeId,
                date,
                status: dto.status,
                notes: dto.notes,
            },
            select: {
                id: true,
                date: true,
                status: true,
                notes: true,
                createdAt: true,
                engineer: { select: { id: true, name: true } },
            },
        });
    }
    async findAll(franchiseeId, date) {
        return this.prisma.attendance.findMany({
            where: {
                franchiseeId,
                ...(date ? { date: new Date(date) } : {}),
            },
            select: {
                id: true,
                date: true,
                status: true,
                notes: true,
                createdAt: true,
                engineer: { select: { id: true, name: true } },
            },
            orderBy: [{ date: 'desc' }, { engineer: { name: 'asc' } }],
        });
    }
    async findByEngineer(engineerId, franchiseeId) {
        const engineer = await this.prisma.engineer.findFirst({
            where: { id: engineerId, franchiseeId },
        });
        if (!engineer) {
            throw new NotFoundException(`Engineer with id ${engineerId} not found`);
        }
        return this.prisma.attendance.findMany({
            where: { engineerId, franchiseeId },
            select: {
                id: true,
                date: true,
                status: true,
                notes: true,
                createdAt: true,
            },
            orderBy: { date: 'desc' },
        });
    }
    async update(id, dto, franchiseeId) {
        const record = await this.prisma.attendance.findFirst({
            where: { id, franchiseeId },
        });
        if (!record) {
            throw new NotFoundException(`Attendance record with id ${id} not found`);
        }
        return this.prisma.attendance.update({
            where: { id },
            data: dto,
            select: {
                id: true,
                date: true,
                status: true,
                notes: true,
                createdAt: true,
                engineer: { select: { id: true, name: true } },
            },
        });
    }
};
AttendanceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AttendanceService);
export { AttendanceService };
//# sourceMappingURL=attendance.service.js.map