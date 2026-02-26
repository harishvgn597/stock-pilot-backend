import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { EngineersService } from './engineers.service.js';
import { CreateEngineerDto } from './dto/create-engineer.dto.js';
import { AssignStockDto } from './dto/assign-stock.dto.js';

@Controller('engineers')
export class EngineersController {
  constructor(private readonly engineersService: EngineersService) {}

  // GET /engineers
  @Get()
  findAll() {
    return this.engineersService.findAll();
  }

  // GET /engineers/:id
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.engineersService.findById(id);
  }

  // GET /engineers/:id/stock
  @Get(':id/stock')
  getStock(@Param('id') id: string) {
    return this.engineersService.getStock(id);
  }

  // POST /engineers
  @Post()
  create(@Body() createEngineerDto: CreateEngineerDto) {
    return this.engineersService.create(createEngineerDto);
  }

  // POST /engineers/assign-stock
  @Post('assign-stock')
  assignStock(@Body() assignStockDto: AssignStockDto) {
    return this.engineersService.assignStock(assignStockDto);
  }

  // DELETE /engineers/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.engineersService.delete(id);
  }
}
