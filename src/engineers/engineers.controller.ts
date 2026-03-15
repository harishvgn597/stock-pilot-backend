import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { EngineersService } from './engineers.service.js';
import { CreateEngineerDto } from './dto/create-engineer.dto.js';
import { AssignStockDto } from './dto/assign-stock.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('engineers')
export class EngineersController {
  constructor(private readonly engineersService: EngineersService) {}

  // GET /engineers
  @Get()
  findAll(@Request() req: any) {
    return this.engineersService.findAll(req.user.userId);
  }

  // GET /engineers/:id
  @Get(':id')
  findById(@Param('id') id: string, @Request() req: any) {
    return this.engineersService.findById(id, req.user.userId);
  }

  // GET /engineers/:id/stock
  @Get(':id/stock')
  getStock(@Param('id') id: string, @Request() req: any) {
    return this.engineersService.getStock(id, req.user.userId);
  }

  // POST /engineers
  @Post()
  create(@Body() createEngineerDto: CreateEngineerDto, @Request() req: any) {
    return this.engineersService.create(createEngineerDto, req.user.userId);
  }

  // POST /engineers/assign-stock
  @Post('assign-stock')
  assignStock(@Body() assignStockDto: AssignStockDto) {
    return this.engineersService.assignStock(assignStockDto);
  }

  // DELETE /engineers/:engineerId/stock/:stockId
  @Delete(':engineerId/stock/:stockId')
  removeStock(
    @Param('engineerId') engineerId: string,
    @Param('stockId') stockId: string,
  ) {
    return this.engineersService.removeStock(engineerId, stockId);
  }

  // DELETE /engineers/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.engineersService.delete(id);
  }
}
