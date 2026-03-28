import { Module } from '@nestjs/common';
import { AmcController } from './amc.controller.js';
import { AmcService } from './amc.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [AmcController],
  providers: [AmcService],
})
export class AmcModule {}
