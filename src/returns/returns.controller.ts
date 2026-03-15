import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { ReturnsService } from './returns.service.js';
import { CreateCustomerReturnDto } from './dto/create-customer-return.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('returns')
export class ReturnsController {
  constructor(private readonly returnsService: ReturnsService) {}

  // POST /returns
  @Post()
  create(@Body() dto: CreateCustomerReturnDto, @Request() req: any) {
    return this.returnsService.create(dto, req.user.userId);
  }

  // GET /returns
  @Get()
  findAll(@Request() req: any) {
    return this.returnsService.findAll(req.user.userId);
  }

  // GET /returns/:id
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.returnsService.findOne(id, req.user.userId);
  }

  // DELETE /returns/:id
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.returnsService.remove(id, req.user.userId);
  }
}
