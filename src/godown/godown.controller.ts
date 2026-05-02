import { Controller, Get, Post, Patch, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { GodownService } from './godown.service.js';
import { CreateGodownStockDto } from './dto/create-godown-stock.dto.js';
import { UpdateGodownStockDto } from './dto/update-godown-stock.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('godown')
export class GodownController {
  constructor(private readonly godownService: GodownService) {}

  // POST /godown/manual — add stock without an invoice
  @Post('manual')
  createManual(@Body() dto: CreateGodownStockDto, @Request() req: any) {
    return this.godownService.createManual(dto, req.user.userId);
  }

  // GET /godown — all individual stock entries
  @Get()
  findAll(@Request() req: any) {
    return this.godownService.findAll(req.user.userId);
  }

  // GET /godown/summary — totals per material (aggregated)
  @Get('summary')
  getSummary(@Request() req: any) {
    return this.godownService.getSummary(req.user.userId);
  }

  // GET /godown/:id — single entry
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.godownService.findOne(id, req.user.userId);
  }

  // PUT /godown/:id — full update of a stock entry
  @Put(':id')
  replace(@Param('id') id: string, @Body() dto: UpdateGodownStockDto, @Request() req: any) {
    return this.godownService.update(id, dto, req.user.userId);
  }

  // PATCH /godown/:id — partial update of a stock entry
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGodownStockDto, @Request() req: any) {
    return this.godownService.update(id, dto, req.user.userId);
  }

  // DELETE /godown/:id
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.godownService.remove(id, req.user.userId);
  }
}
