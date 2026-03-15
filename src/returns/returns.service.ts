import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCustomerReturnDto } from './dto/create-customer-return.dto.js';

@Injectable()
export class ReturnsService {
  constructor(private readonly prisma: PrismaService) {}

  // POST /returns
  async create(dto: CreateCustomerReturnDto, franchiseeId: string) {
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

  // GET /returns
  async findAll(franchiseeId: string) {
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

  // GET /returns/:id
  async findOne(id: string, franchiseeId: string) {
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

  // DELETE /returns/:id
  async remove(id: string, franchiseeId: string) {
    const record = await this.prisma.customerReturn.findFirst({
      where: { id, franchiseeId },
    });
    if (!record) {
      throw new NotFoundException(`Return record with id ${id} not found`);
    }
    return this.prisma.customerReturn.delete({ where: { id } });
  }
}
