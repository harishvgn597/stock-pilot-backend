import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { OrdersService } from './orders.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
import { CreateWarrantyAmcOrderDto } from './dto/create-warranty-amc-order.dto.js';
import { CreateReturnToGodownOrderDto } from './dto/create-return-to-godown-order.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // ─── Sale ─────────────────────────────────────────────────────────────────

  @Post('sale')
  createSale(@Body() dto: CreateSaleOrderDto, @Request() req: any) {
    return this.ordersService.createSale(dto, req.user.userId);
  }

  @Get('sale')
  findAllSales(@Request() req: any) {
    return this.ordersService.findAllSales(req.user.userId);
  }

  @Get('sale/:billNumber')
  findSaleByBillNumber(@Param('billNumber') billNumber: string, @Request() req: any) {
    return this.ordersService.findSaleByBillNumber(billNumber, req.user.userId);
  }

  @Get('engineer/:engineerId/sales')
  findSalesByEngineer(@Param('engineerId') engineerId: string, @Request() req: any) {
    return this.ordersService.findSalesByEngineer(engineerId, req.user.userId);
  }

  // ─── Warranty / AMC ───────────────────────────────────────────────────────

  @Post('warranty-amc')
  createWarrantyAmc(@Body() dto: CreateWarrantyAmcOrderDto, @Request() req: any) {
    return this.ordersService.createWarrantyAmc(dto, req.user.userId);
  }

  @Get('warranty-amc')
  findAllWarrantyAmc(@Request() req: any) {
    return this.ordersService.findAllWarrantyAmc(req.user.userId);
  }

  @Get('warranty-amc/:ticketNumber')
  findWarrantyAmcByTicket(@Param('ticketNumber') ticketNumber: string, @Request() req: any) {
    return this.ordersService.findWarrantyAmcByTicket(ticketNumber, req.user.userId);
  }

  @Get('engineer/:engineerId/warranty-amc')
  findWarrantyAmcByEngineer(@Param('engineerId') engineerId: string, @Request() req: any) {
    return this.ordersService.findWarrantyAmcByEngineer(engineerId, req.user.userId);
  }

  // ─── Return to Godown ─────────────────────────────────────────────────────

  @Post('return-to-godown')
  createReturnToGodown(@Body() dto: CreateReturnToGodownOrderDto, @Request() req: any) {
    return this.ordersService.createReturnToGodown(dto, req.user.userId);
  }

  @Get('return-to-godown')
  findAllReturnToGodown(@Request() req: any) {
    return this.ordersService.findAllReturnToGodown(req.user.userId);
  }

  @Get('return-to-godown/:referenceNumber')
  findReturnToGodownByRef(@Param('referenceNumber') referenceNumber: string, @Request() req: any) {
    return this.ordersService.findReturnToGodownByRef(referenceNumber, req.user.userId);
  }

  @Get('engineer/:engineerId/return-to-godown')
  findReturnToGodownByEngineer(@Param('engineerId') engineerId: string, @Request() req: any) {
    return this.ordersService.findReturnToGodownByEngineer(engineerId, req.user.userId);
  }
}
