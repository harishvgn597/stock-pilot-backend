import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateGodownStockDto } from './dto/create-godown-stock.dto.js';
import { UpdateGodownStockDto } from './dto/update-godown-stock.dto.js';

const INCLUDE = {
  material: {
    select: { materialCode: true, description: true, materialGroup: true },
  },
  invoice: {
    select: { invoiceNumber: true, invoiceDate: true, customerName: true },
  },
};

@Injectable()
export class GodownService {
  constructor(private readonly prisma: PrismaService) {}

  // Called internally by InvoicesService after an invoice is created.
  // Creates one GodownStock row per invoice item (good quantity = item quantity).
  async createFromInvoice(
    invoiceId: string,
    franchiseeId: string,
    items: Array<{
      materialCode: string;
      description: string;
      hsn?: string | null;
      quantity: number;
      uom: string;
      unitPrice: number;
      totalAmount: number;
      cgst: number;
      sgst: number;
      spareType?: string | null;
      status?: string | null;
    }>,
  ) {
    const rows = items.map((item) =>
      this.prisma.godownStock.create({
        data: {
          franchiseeId,
          materialCode: item.materialCode,
          description: item.description,
          hsn: item.hsn ?? null,
          uom: item.uom,
          goodQuantity: item.quantity,
          defectiveQuantity: 0,
          unitPrice: item.unitPrice,
          totalAmount: item.totalAmount,
          cgst: item.cgst,
          sgst: item.sgst,
          spareType: (item.spareType as any) ?? null,
          status: (item.status as any) ?? null,
          invoiceId,
        },
      }),
    );
    return Promise.all(rows);
  }

  // POST /godown/manual — add stock without an invoice
  async createManual(dto: CreateGodownStockDto, franchiseeId: string) {
    const material = await this.prisma.material.findUnique({
      where: { materialCode: dto.materialCode },
    });
    if (!material) {
      throw new NotFoundException(`Material with code ${dto.materialCode} not found`);
    }

    return this.prisma.godownStock.create({
      data: {
        franchiseeId,
        materialCode: dto.materialCode,
        description: dto.description ?? null,
        hsn: dto.hsn ?? null,
        uom: dto.uom ?? null,
        goodQuantity: dto.goodQuantity,
        defectiveQuantity: dto.defectiveQuantity ?? 0,
        unitPrice: dto.unitPrice ?? null,
        totalAmount: dto.totalAmount ?? null,
        cgst: dto.cgst ?? null,
        sgst: dto.sgst ?? null,
        spareType: (dto.spareType as any) ?? null,
        status: (dto.status as any) ?? null,
        invoiceId: null,
        notes: dto.notes ?? null,
      },
      include: INCLUDE,
    });
  }

  // GET /godown — all stock entries for this franchisee
  async findAll(franchiseeId: string) {
    return this.prisma.godownStock.findMany({
      where: { franchiseeId },
      include: INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  // GET /godown/summary — total good + defective per material (aggregated view)
  async getSummary(franchiseeId: string) {
    const rows = await this.prisma.godownStock.findMany({
      where: { franchiseeId },
      select: {
        materialCode: true,
        goodQuantity: true,
        defectiveQuantity: true,
        material: {
          select: { description: true, materialGroup: true },
        },
      },
    });

    // Group by materialCode and sum quantities
    const map = new Map<string, { materialCode: string; description: string; materialGroup: string; goodQuantity: number; defectiveQuantity: number }>();
    for (const row of rows) {
      const existing = map.get(row.materialCode);
      if (existing) {
        existing.goodQuantity += row.goodQuantity;
        existing.defectiveQuantity += row.defectiveQuantity;
      } else {
        map.set(row.materialCode, {
          materialCode: row.materialCode,
          description: row.material.description,
          materialGroup: row.material.materialGroup,
          goodQuantity: row.goodQuantity,
          defectiveQuantity: row.defectiveQuantity,
        });
      }
    }
    return Array.from(map.values());
  }

  // GET /godown/:id — single stock entry
  async findOne(id: string, franchiseeId: string) {
    const record = await this.prisma.godownStock.findFirst({
      where: { id, franchiseeId },
      include: INCLUDE,
    });
    if (!record) {
      throw new NotFoundException(`Godown stock entry with id ${id} not found`);
    }
    return record;
  }

  // PATCH /godown/:id — update quantities or notes
  async update(id: string, dto: UpdateGodownStockDto, franchiseeId: string) {
    const record = await this.prisma.godownStock.findFirst({
      where: { id, franchiseeId },
    });
    if (!record) {
      throw new NotFoundException(`Godown stock entry with id ${id} not found`);
    }

    return this.prisma.godownStock.update({
      where: { id },
      data: {
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.hsn !== undefined && { hsn: dto.hsn }),
        ...(dto.uom !== undefined && { uom: dto.uom }),
        ...(dto.goodQuantity !== undefined && { goodQuantity: dto.goodQuantity }),
        ...(dto.defectiveQuantity !== undefined && { defectiveQuantity: dto.defectiveQuantity }),
        ...(dto.unitPrice !== undefined && { unitPrice: dto.unitPrice }),
        ...(dto.totalAmount !== undefined && { totalAmount: dto.totalAmount }),
        ...(dto.cgst !== undefined && { cgst: dto.cgst }),
        ...(dto.sgst !== undefined && { sgst: dto.sgst }),
        ...(dto.spareType !== undefined && { spareType: dto.spareType as any }),
        ...(dto.status !== undefined && { status: dto.status as any }),
        ...(dto.notes !== undefined && { notes: dto.notes }),
      },
      include: INCLUDE,
    });
  }

  // DELETE /godown/:id
  async remove(id: string, franchiseeId: string) {
    const record = await this.prisma.godownStock.findFirst({
      where: { id, franchiseeId },
    });
    if (!record) {
      throw new NotFoundException(`Godown stock entry with id ${id} not found`);
    }
    return this.prisma.godownStock.delete({ where: { id } });
  }
}
