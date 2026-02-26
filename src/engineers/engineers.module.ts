import { Module } from '@nestjs/common';
import { EngineersController } from './engineers.controller.js';
import { EngineersService } from './engineers.service.js';

@Module({
  controllers: [EngineersController],
  providers: [EngineersService],
})
export class EngineersModule {}
