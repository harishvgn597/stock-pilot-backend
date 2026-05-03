import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { MarkAttendanceDto } from './dto/mark-attendance.dto.js';
import { UpdateAttendanceDto } from './dto/update-attendance.dto.js';

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  async mark(dto: MarkAttendanceDto, franchiseeId: string) {
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
      throw new ConflictException(
        `Attendance for engineer ${dto.engineerId} on ${dto.date} already marked`,
      );
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

  // GET /attendance?date=YYYY-MM-DD  (date is optional)
  async findAll(franchiseeId: string, date?: string) {
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

  // GET /attendance/engineer/:engineerId
  async findByEngineer(engineerId: string, franchiseeId: string) {
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

  // PATCH /attendance/:id
  async update(id: string, dto: UpdateAttendanceDto, franchiseeId: string) {
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
}
