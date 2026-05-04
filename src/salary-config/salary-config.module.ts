import { Module } from '@nestjs/common';
import { SalaryConfigController } from './salary-config.controller.js';
import { SalaryConfigService } from './salary-config.service.js';

@Module({
  controllers: [SalaryConfigController],
  providers: [SalaryConfigService],
})
export class SalaryConfigModule {}
