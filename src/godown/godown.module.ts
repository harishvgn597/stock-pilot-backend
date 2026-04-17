import { Module } from '@nestjs/common';
import { GodownController } from './godown.controller.js';
import { GodownService } from './godown.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [GodownController],
  providers: [GodownService],
  exports: [GodownService],  // exported so InvoicesModule can inject it
})
export class GodownModule {}
