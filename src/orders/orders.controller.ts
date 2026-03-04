import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // POST /orders/sale
  @Post('sale')
  createSale(@Body() dto: CreateSaleOrderDto) {
    return this.ordersService.createSale(dto);
  }

  // GET /orders/sale
  @Get('sale')
  findAllSales() {
    return this.ordersService.findAllSales();
  }

  // GET /orders/sale/:billNumber
  @Get('sale/:billNumber')
  findSaleByBillNumber(@Param('billNumber') billNumber: string) {
    return this.ordersService.findSaleByBillNumber(billNumber);
  }

  // GET /orders/engineer/:engineerId/sales
  @Get('engineer/:engineerId/sales')
  findSalesByEngineer(@Param('engineerId') engineerId: string) {
    return this.ordersService.findSalesByEngineer(engineerId);
  }
}
