import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpsertSalaryConfigDto } from './dto/create-salary-config.dto.js';
import { UpdateSalaryConfigDto } from './dto/update-salary-config.dto.js';

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

@Injectable()
export class SalaryConfigService {
  constructor(private readonly prisma: PrismaService) {}

  async upsert(dto: UpsertSalaryConfigDto, franchiseeId: string) {
    return this.prisma.franchiseSalaryConfig.upsert({
      where: { franchiseeId },
      create: { franchiseeId, ...dto },
      update: dto,
      select,
    });
  }

  async get(franchiseeId: string) {
    const config = await this.prisma.franchiseSalaryConfig.findUnique({
      where: { franchiseeId },
      select,
    });
    if (!config) {
      throw new NotFoundException(`No salary config found for this franchise`);
    }
    return config;
  }

  async patch(dto: UpdateSalaryConfigDto, franchiseeId: string) {
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
}
