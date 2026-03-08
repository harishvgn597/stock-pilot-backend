import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
import { CreateWarrantyAmcOrderDto } from './dto/create-warranty-amc-order.dto.js';
import { CreateReturnToGodownOrderDto } from './dto/create-return-to-godown-order.dto.js';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // ─── Sale ─────────────────────────────────────────────────────────────────

  @Post('sale')
  createSale(@Body() dto: CreateSaleOrderDto) {
    return this.ordersService.createSale(dto);
  }

  @Get('sale')
  findAllSales() {
    return this.ordersService.findAllSales();
  }

  @Get('sale/:billNumber')
  findSaleByBillNumber(@Param('billNumber') billNumber: string) {
    return this.ordersService.findSaleByBillNumber(billNumber);
  }

  @Get('engineer/:engineerId/sales')
  findSalesByEngineer(@Param('engineerId') engineerId: string) {
    return this.ordersService.findSalesByEngineer(engineerId);
  }

  // ─── Warranty / AMC ───────────────────────────────────────────────────────

  @Post('warranty-amc')
  createWarrantyAmc(@Body() dto: CreateWarrantyAmcOrderDto) {
    return this.ordersService.createWarrantyAmc(dto);
  }

  @Get('warranty-amc')
  findAllWarrantyAmc() {
    return this.ordersService.findAllWarrantyAmc();
  }

  @Get('warranty-amc/:ticketNumber')
  findWarrantyAmcByTicket(@Param('ticketNumber') ticketNumber: string) {
    return this.ordersService.findWarrantyAmcByTicket(ticketNumber);
  }

  @Get('engineer/:engineerId/warranty-amc')
  findWarrantyAmcByEngineer(@Param('engineerId') engineerId: string) {
    return this.ordersService.findWarrantyAmcByEngineer(engineerId);
  }

  // ─── Return to Godown ─────────────────────────────────────────────────────

  @Post('return-to-godown')
  createReturnToGodown(@Body() dto: CreateReturnToGodownOrderDto) {
    return this.ordersService.createReturnToGodown(dto);
  }

  @Get('return-to-godown')
  findAllReturnToGodown() {
    return this.ordersService.findAllReturnToGodown();
  }

  @Get('return-to-godown/:referenceNumber')
  findReturnToGodownByRef(@Param('referenceNumber') referenceNumber: string) {
    return this.ordersService.findReturnToGodownByRef(referenceNumber);
  }

  @Get('engineer/:engineerId/return-to-godown')
  findReturnToGodownByEngineer(@Param('engineerId') engineerId: string) {
    return this.ordersService.findReturnToGodownByEngineer(engineerId);
  }
}
