import { Controller, Get, Put, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { SalaryConfigService } from './salary-config.service.js';
import { UpsertSalaryConfigDto } from './dto/create-salary-config.dto.js';
import { UpdateSalaryConfigDto } from './dto/update-salary-config.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('salary-config')
export class SalaryConfigController {
  constructor(private readonly salaryConfigService: SalaryConfigService) {}

  // GET /salary-config
  @Get()
  get(@Request() req: any) {
    return this.salaryConfigService.get(req.user.userId);
  }

  // PUT /salary-config  (upsert — creates on first call)
  @Put()
  upsert(@Body() dto: UpsertSalaryConfigDto, @Request() req: any) {
    return this.salaryConfigService.upsert(dto, req.user.userId);
  }

  // PATCH /salary-config  (partial update)
  @Patch()
  patch(@Body() dto: UpdateSalaryConfigDto, @Request() req: any) {
    return this.salaryConfigService.patch(dto, req.user.userId);
  }
}
