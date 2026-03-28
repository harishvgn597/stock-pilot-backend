import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAmcContractDto } from './dto/create-amc-contract.dto.js';

@Injectable()
export class AmcService {
  constructor(private readonly prisma: PrismaService) {}

  // POST /amc
  async create(dto: CreateAmcContractDto, franchiseeId: string) {
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

  // GET /amc
  async findAll(franchiseeId: string) {
    return this.prisma.amcContract.findMany({
      where: { franchiseeId },
      orderBy: { date: 'desc' },
    });
  }

  // GET /amc/:id
  async findOne(id: string, franchiseeId: string) {
    const record = await this.prisma.amcContract.findFirst({
      where: { id, franchiseeId },
    });
    if (!record) {
      throw new NotFoundException(`AMC contract with id ${id} not found`);
    }
    return record;
  }

  // GET /amc/icr/:icrNumber
  async findByIcr(icrNumber: string, franchiseeId: string) {
    const record = await this.prisma.amcContract.findFirst({
      where: { icrNumber, franchiseeId },
    });
    if (!record) {
      throw new NotFoundException(`AMC contract with ICR number ${icrNumber} not found`);
    }
    return record;
  }

  // DELETE /amc/:id
  async remove(id: string, franchiseeId: string) {
    const record = await this.prisma.amcContract.findFirst({
      where: { id, franchiseeId },
    });
    if (!record) {
      throw new NotFoundException(`AMC contract with id ${id} not found`);
    }
    return this.prisma.amcContract.delete({ where: { id } });
  }
}
