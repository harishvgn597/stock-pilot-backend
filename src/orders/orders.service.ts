import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  // POST /orders/sale — create a sale order
  async createSale(dto: CreateSaleOrderDto) {
    // Validate engineer exists
    const engineer = await this.prisma.engineer.findUnique({
      where: { id: dto.engineerId },
    });
    if (!engineer) {
      throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);
    }

    // Validate material exists
    const material = await this.prisma.material.findUnique({
      where: { materialCode: dto.materialCode },
    });
    if (!material) {
      throw new NotFoundException(`Material with code ${dto.materialCode} not found`);
    }

    // Validate bill number is unique
    const existing = await this.prisma.saleOrder.findUnique({
      where: { billNumber: dto.billNumber },
    });
    if (existing) {
      throw new ConflictException(`Bill number ${dto.billNumber} already exists`);
    }

    // Create parent Order + SaleOrder in a transaction
    return this.prisma.order.create({
      data: {
        orderType: 'Sale',
        engineerId: dto.engineerId,
        saleOrder: {
          create: {
            billNumber: dto.billNumber,
            dateOfSale: new Date(dto.dateOfSale),
            ticketNumber: dto.ticketNumber ?? null,
            customerName: dto.customerName ?? null,
            materialCode: dto.materialCode,
            description: dto.description,
            quantity: dto.quantity,
            spareType: dto.spareType ?? null,
            price: dto.price,
          },
        },
      },
      include: {
        engineer: {
          select: { id: true, name: true, email: true },
        },
        saleOrder: true,
      },
    });
  }

  // GET /orders/sale — list all sale orders
  async findAllSales() {
    return this.prisma.saleOrder.findMany({
      include: {
        order: {
          include: {
            engineer: {
              select: { id: true, name: true, email: true, phoneNumber: true },
            },
          },
        },
        material: {
          select: { materialCode: true, description: true, materialGroup: true },
        },
      },
      orderBy: { dateOfSale: 'desc' },
    });
  }

  // GET /orders/sale/:billNumber — get a single sale order by bill number
  async findSaleByBillNumber(billNumber: string) {
    const sale = await this.prisma.saleOrder.findUnique({
      where: { billNumber },
      include: {
        order: {
          include: {
            engineer: {
              select: { id: true, name: true, email: true, phoneNumber: true },
            },
          },
        },
        material: {
          select: { materialCode: true, description: true, materialGroup: true },
        },
      },
    });

    if (!sale) {
      throw new NotFoundException(`Sale order with bill number ${billNumber} not found`);
    }

    return sale;
  }

  // GET /orders/engineer/:engineerId/sales — all sales by a specific engineer
  async findSalesByEngineer(engineerId: string) {
    const engineer = await this.prisma.engineer.findUnique({
      where: { id: engineerId },
    });
    if (!engineer) {
      throw new NotFoundException(`Engineer with id ${engineerId} not found`);
    }

    return this.prisma.saleOrder.findMany({
      where: {
        order: { engineerId },
      },
      include: {
        material: {
          select: { materialCode: true, description: true, materialGroup: true },
        },
      },
      orderBy: { dateOfSale: 'desc' },
    });
  }
}
