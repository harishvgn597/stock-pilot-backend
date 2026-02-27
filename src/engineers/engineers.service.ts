import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEngineerDto } from './dto/create-engineer.dto.js';
import { AssignStockDto } from './dto/assign-stock.dto.js';

@Injectable()
export class EngineersService {
  constructor(private readonly prisma: PrismaService) {}

  // GET /engineers — list all engineers
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

  // GET /engineers/:id — get engineer with assigned stock
  async findById(id: string) {
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

  // POST /engineers — create a new engineer
  async create(dto: CreateEngineerDto) {
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

  // POST /engineers/assign-stock — assign material to engineer
  async assignStock(dto: AssignStockDto) {
    // Verify engineer exists
    const engineer = await this.prisma.engineer.findUnique({
      where: { id: dto.engineerId },
    });
    if (!engineer) {
      throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);
    }

    // Verify material exists
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

  // GET /engineers/:id/stock — get only stock for an engineer
  async getStock(engineerId: string) {
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

  // DELETE /engineers/:engineerId/stock/:stockId — remove a stock assignment
  async removeStock(engineerId: string, stockId: string) {
    const stock = await this.prisma.engineerStock.findUnique({
      where: { id: stockId },
    });

    if (!stock) {
      throw new NotFoundException(`Stock assignment with id ${stockId} not found`);
    }

    if (stock.engineerId !== engineerId) {
      throw new NotFoundException(
        `Stock assignment ${stockId} does not belong to engineer ${engineerId}`,
      );
    }

    await this.prisma.engineerStock.delete({
      where: { id: stockId },
    });

    return { message: `Stock assignment ${stockId} removed successfully` };
  }

  // DELETE /engineers/:id — delete an engineer and their assigned stock
  async delete(id: string) {
    const engineer = await this.prisma.engineer.findUnique({
      where: { id },
    });

    if (!engineer) {
      throw new NotFoundException(`Engineer with id ${id} not found`);
    }

    // Delete assigned stock first (foreign key constraint)
    await this.prisma.engineerStock.deleteMany({
      where: { engineerId: id },
    });

    await this.prisma.engineer.delete({
      where: { id },
    });

    return { message: `Engineer ${engineer.name} deleted successfully` };
  }
}
