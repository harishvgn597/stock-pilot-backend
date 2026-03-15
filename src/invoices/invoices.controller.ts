import { Controller, Get, Post, Patch, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { InvoicesService } from './invoices.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  // GET /invoices
  @Get()
  findAll(@Request() req: any) {
    return this.invoicesService.findAll(req.user.userId);
  }

  // GET /invoices/:invoiceNumber
  @Get(':invoiceNumber')
  findByNumber(@Param('invoiceNumber') invoiceNumber: string, @Request() req: any) {
    return this.invoicesService.findByNumber(invoiceNumber, req.user.userId);
  }

  // POST /invoices
  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto, @Request() req: any) {
    return this.invoicesService.create(createInvoiceDto, req.user.userId);
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
