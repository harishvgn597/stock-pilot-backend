import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
import { CreateWarrantyAmcOrderDto } from './dto/create-warranty-amc-order.dto.js';
import { CreateReturnToGodownOrderDto } from './dto/create-return-to-godown-order.dto.js';

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

  // ─── Warranty / AMC ────────────────────────────────────────────────────────

  // POST /orders/warranty-amc
  async createWarrantyAmc(dto: CreateWarrantyAmcOrderDto) {
    const engineer = await this.prisma.engineer.findUnique({ where: { id: dto.engineerId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);

    const material = await this.prisma.material.findUnique({ where: { materialCode: dto.materialCode } });
    if (!material) throw new NotFoundException(`Material with code ${dto.materialCode} not found`);

    return this.prisma.order.create({
      data: {
        orderType: 'WarrantyAMC',
        engineerId: dto.engineerId,
        warrantyAmcOrder: {
          create: {
            ticketNumber: dto.ticketNumber,
            customerName: dto.customerName,
            date: new Date(dto.date),
            materialCode: dto.materialCode,
            description: dto.description,
            quantity: dto.quantity,
            spareType: dto.spareType ?? null,
          },
        },
      },
      include: {
        engineer: { select: { id: true, name: true, email: true } },
        warrantyAmcOrder: true,
      },
    });
  }

  // GET /orders/warranty-amc
  async findAllWarrantyAmc() {
    return this.prisma.warrantyAmcOrder.findMany({
      include: {
        order: {
          include: {
            engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
          },
        },
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
      orderBy: { date: 'desc' },
    });
  }

  // GET /orders/warranty-amc/:ticketNumber
  async findWarrantyAmcByTicket(ticketNumber: string) {
    const record = await this.prisma.warrantyAmcOrder.findFirst({
      where: { ticketNumber },
      include: {
        order: {
          include: {
            engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
          },
        },
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
    });
    if (!record) throw new NotFoundException(`Warranty/AMC order with ticket ${ticketNumber} not found`);
    return record;
  }

  // GET /orders/engineer/:engineerId/warranty-amc
  async findWarrantyAmcByEngineer(engineerId: string) {
    const engineer = await this.prisma.engineer.findUnique({ where: { id: engineerId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${engineerId} not found`);

    return this.prisma.warrantyAmcOrder.findMany({
      where: { order: { engineerId } },
      include: {
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
      orderBy: { date: 'desc' },
    });
  }

  // ─── Return to Godown ──────────────────────────────────────────────────────

  // POST /orders/return-to-godown
  async createReturnToGodown(dto: CreateReturnToGodownOrderDto) {
    const engineer = await this.prisma.engineer.findUnique({ where: { id: dto.engineerId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);

    const material = await this.prisma.material.findUnique({ where: { materialCode: dto.materialCode } });
    if (!material) throw new NotFoundException(`Material with code ${dto.materialCode} not found`);

    const existing = await this.prisma.returnToGodownOrder.findUnique({ where: { referenceNumber: dto.referenceNumber } });
    if (existing) throw new ConflictException(`Reference number ${dto.referenceNumber} already exists`);

    return this.prisma.order.create({
      data: {
        orderType: 'ReturnToServiceCenter',
        engineerId: dto.engineerId,
        returnToGodownOrder: {
          create: {
            referenceNumber: dto.referenceNumber,
            date: new Date(dto.date),
            materialCode: dto.materialCode,
            description: dto.description,
            quantity: dto.quantity,
          },
        },
      },
      include: {
        engineer: { select: { id: true, name: true, email: true } },
        returnToGodownOrder: true,
      },
    });
  }

  // GET /orders/return-to-godown
  async findAllReturnToGodown() {
    return this.prisma.returnToGodownOrder.findMany({
      include: {
        order: {
          include: {
            engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
          },
        },
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
      orderBy: { date: 'desc' },
    });
  }

  // GET /orders/return-to-godown/:referenceNumber
  async findReturnToGodownByRef(referenceNumber: string) {
    const record = await this.prisma.returnToGodownOrder.findUnique({
      where: { referenceNumber },
      include: {
        order: {
          include: {
            engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
          },
        },
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
    });
    if (!record) throw new NotFoundException(`Return order with reference ${referenceNumber} not found`);
    return record;
  }

  // GET /orders/engineer/:engineerId/return-to-godown
  async findReturnToGodownByEngineer(engineerId: string) {
    const engineer = await this.prisma.engineer.findUnique({ where: { id: engineerId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${engineerId} not found`);

    return this.prisma.returnToGodownOrder.findMany({
      where: { order: { engineerId } },
      include: {
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
      orderBy: { date: 'desc' },
    });
  }
}
