import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { AmcService } from './amc.service.js';
import { CreateAmcContractDto } from './dto/create-amc-contract.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('amc')
export class AmcController {
  constructor(private readonly amcService: AmcService) {}

  // POST /amc
  @Post()
  create(@Body() dto: CreateAmcContractDto, @Request() req: any) {
    return this.amcService.create(dto, req.user.userId);
  }

  // GET /amc
  @Get()
  findAll(@Request() req: any) {
    return this.amcService.findAll(req.user.userId);
  }

  // GET /amc/icr/:icrNumber
  @Get('icr/:icrNumber')
  findByIcr(@Param('icrNumber') icrNumber: string, @Request() req: any) {
    return this.amcService.findByIcr(icrNumber, req.user.userId);
  }

  // GET /amc/:id
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.amcService.findOne(id, req.user.userId);
  }

  // DELETE /amc/:id
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.amcService.remove(id, req.user.userId);
  }
}
