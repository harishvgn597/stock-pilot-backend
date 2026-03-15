import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
import { CreateWarrantyAmcOrderDto } from './dto/create-warranty-amc-order.dto.js';
import { CreateReturnToGodownOrderDto } from './dto/create-return-to-godown-order.dto.js';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  // ─── Sale ─────────────────────────────────────────────────────────────────

  async createSale(dto: CreateSaleOrderDto, franchiseeId: string) {
    const engineer = await this.prisma.engineer.findFirst({ where: { id: dto.engineerId, franchiseeId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);

    const material = await this.prisma.material.findUnique({ where: { materialCode: dto.materialCode } });
    if (!material) throw new NotFoundException(`Material with code ${dto.materialCode} not found`);

    const existing = await this.prisma.saleOrder.findUnique({ where: { billNumber: dto.billNumber } });
    if (existing) throw new ConflictException(`Bill number ${dto.billNumber} already exists`);

    return this.prisma.order.create({
      data: {
        orderType: 'Sale',
        engineerId: dto.engineerId,
        franchiseeId,
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
        engineer: { select: { id: true, name: true, email: true } },
        saleOrder: true,
      },
    });
  }

  async findAllSales(franchiseeId: string) {
    return this.prisma.saleOrder.findMany({
      where: { order: { franchiseeId } },
      include: {
        order: {
          include: {
            engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
          },
        },
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
      orderBy: { dateOfSale: 'desc' },
    });
  }

  async findSaleByBillNumber(billNumber: string, franchiseeId: string) {
    const sale = await this.prisma.saleOrder.findFirst({
      where: { billNumber, order: { franchiseeId } },
      include: {
        order: {
          include: {
            engineer: { select: { id: true, name: true, email: true, phoneNumber: true } },
          },
        },
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
    });
    if (!sale) throw new NotFoundException(`Sale order with bill number ${billNumber} not found`);
    return sale;
  }

  async findSalesByEngineer(engineerId: string, franchiseeId: string) {
    const engineer = await this.prisma.engineer.findFirst({ where: { id: engineerId, franchiseeId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${engineerId} not found`);

    return this.prisma.saleOrder.findMany({
      where: { order: { engineerId, franchiseeId } },
      include: {
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
      orderBy: { dateOfSale: 'desc' },
    });
  }

  // ─── Warranty / AMC ────────────────────────────────────────────────────────

  async createWarrantyAmc(dto: CreateWarrantyAmcOrderDto, franchiseeId: string) {
    const engineer = await this.prisma.engineer.findFirst({ where: { id: dto.engineerId, franchiseeId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);

    const material = await this.prisma.material.findUnique({ where: { materialCode: dto.materialCode } });
    if (!material) throw new NotFoundException(`Material with code ${dto.materialCode} not found`);

    return this.prisma.order.create({
      data: {
        orderType: 'WarrantyAMC',
        engineerId: dto.engineerId,
        franchiseeId,
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

  async findAllWarrantyAmc(franchiseeId: string) {
    return this.prisma.warrantyAmcOrder.findMany({
      where: { order: { franchiseeId } },
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

  async findWarrantyAmcByTicket(ticketNumber: string, franchiseeId: string) {
    const record = await this.prisma.warrantyAmcOrder.findFirst({
      where: { ticketNumber, order: { franchiseeId } },
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

  async findWarrantyAmcByEngineer(engineerId: string, franchiseeId: string) {
    const engineer = await this.prisma.engineer.findFirst({ where: { id: engineerId, franchiseeId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${engineerId} not found`);

    return this.prisma.warrantyAmcOrder.findMany({
      where: { order: { engineerId, franchiseeId } },
      include: {
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
      orderBy: { date: 'desc' },
    });
  }

  // ─── Return to Godown ──────────────────────────────────────────────────────

  async createReturnToGodown(dto: CreateReturnToGodownOrderDto, franchiseeId: string) {
    const engineer = await this.prisma.engineer.findFirst({ where: { id: dto.engineerId, franchiseeId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${dto.engineerId} not found`);

    const material = await this.prisma.material.findUnique({ where: { materialCode: dto.materialCode } });
    if (!material) throw new NotFoundException(`Material with code ${dto.materialCode} not found`);

    const existing = await this.prisma.returnToGodownOrder.findUnique({ where: { referenceNumber: dto.referenceNumber } });
    if (existing) throw new ConflictException(`Reference number ${dto.referenceNumber} already exists`);

    return this.prisma.order.create({
      data: {
        orderType: 'ReturnToServiceCenter',
        engineerId: dto.engineerId,
        franchiseeId,
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

  async findAllReturnToGodown(franchiseeId: string) {
    return this.prisma.returnToGodownOrder.findMany({
      where: { order: { franchiseeId } },
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

  async findReturnToGodownByRef(referenceNumber: string, franchiseeId: string) {
    const record = await this.prisma.returnToGodownOrder.findFirst({
      where: { referenceNumber, order: { franchiseeId } },
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

  async findReturnToGodownByEngineer(engineerId: string, franchiseeId: string) {
    const engineer = await this.prisma.engineer.findFirst({ where: { id: engineerId, franchiseeId } });
    if (!engineer) throw new NotFoundException(`Engineer with id ${engineerId} not found`);

    return this.prisma.returnToGodownOrder.findMany({
      where: { order: { engineerId, franchiseeId } },
      include: {
        material: { select: { materialCode: true, description: true, materialGroup: true } },
      },
      orderBy: { date: 'desc' },
    });
  }
}
