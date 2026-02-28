import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto.js';

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

  // PATCH /invoices/items/:id
  @Patch('items/:id')
  updateItem(
    @Param('id') id: string,
    @Body() updateDto: UpdateInvoiceItemDto,
  ) {
    return this.invoicesService.updateItem(id, updateDto);
  }
}
