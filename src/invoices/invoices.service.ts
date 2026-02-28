import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto.js';

@Injectable()
export class InvoicesService {
  constructor(private readonly prisma: PrismaService) {}

  // GET /invoices — list all invoices with items
  async findAll() {
    return this.prisma.invoice.findMany({
      include: {
        items: {
          select: {
            id: true,
            materialCode: true,
            description: true,
            hsn: true,
            quantity: true,
            uom: true,
            unitPrice: true,
            totalAmount: true,
            cgst: true,
            sgst: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // GET /invoices/:invoiceNumber — get a single invoice by number
  async findByNumber(invoiceNumber: string) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { invoiceNumber },
      include: {
        items: {
          select: {
            id: true,
            materialCode: true,
            description: true,
            hsn: true,
            quantity: true,
            uom: true,
            unitPrice: true,
            totalAmount: true,
            cgst: true,
            sgst: true,
          },
        },
      },
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice ${invoiceNumber} not found`);
    }

    return invoice;
  }

  // POST /invoices — create invoice with line items
  async create(dto: CreateInvoiceDto) {
    const existing = await this.prisma.invoice.findUnique({
      where: { invoiceNumber: dto.invoiceNumber },
    });

    if (existing) {
      throw new ConflictException(`Invoice ${dto.invoiceNumber} already exists`);
    }

    return this.prisma.invoice.create({
      data: {
        invoiceNumber: dto.invoiceNumber,
        invoiceDate: new Date(dto.invoiceDate),
        customerName: dto.customerName,
        items: {
          create: dto.items.map((item) => ({
            materialCode: item.materialCode,
            description: item.description,
            hsn: item.hsn ?? null,
            quantity: item.quantity,
            uom: item.uom,
            unitPrice: item.unitPrice,
            totalAmount: item.totalAmount,
            cgst: item.cgst,
            sgst: item.sgst,
          })),
        },
      },
      include: {
        items: {
          select: {
            id: true,
            materialCode: true,
            description: true,
            hsn: true,
            quantity: true,
            uom: true,
            unitPrice: true,
            totalAmount: true,
            cgst: true,
            sgst: true,
          },
        },
      },
    });
  }

  // PATCH /invoices/items/:id — update an invoice item
  async updateItem(id: string, dto: UpdateInvoiceItemDto) {
    const item = await this.prisma.invoiceItem.findUnique({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException(`Invoice item with id ${id} not found`);
    }

    return this.prisma.invoiceItem.update({
      where: { id },
      data: {
        ...(dto.quantity !== undefined && { quantity: dto.quantity }),
        ...(dto.unitPrice !== undefined && { unitPrice: dto.unitPrice }),
        ...(dto.totalAmount !== undefined && { totalAmount: dto.totalAmount }),
        ...(dto.cgst !== undefined && { cgst: dto.cgst }),
        ...(dto.sgst !== undefined && { sgst: dto.sgst }),
      },
      select: {
        id: true,
        materialCode: true,
        description: true,
        hsn: true,
        quantity: true,
        uom: true,
        unitPrice: true,
        totalAmount: true,
        cgst: true,
        sgst: true,
      },
    });
  }
}
