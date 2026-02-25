import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  // GET /invoices
  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  // GET /invoices/:invoiceNumber
  @Get(':invoiceNumber')
  findByNumber(@Param('invoiceNumber') invoiceNumber: string) {
    return this.invoicesService.findByNumber(invoiceNumber);
  }

  // POST /invoices
  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoicesService.create(createInvoiceDto);
  }
}
