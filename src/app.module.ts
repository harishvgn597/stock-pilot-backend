import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';
import { MaterialsModule } from './materials/materials.module.js';
import { InvoicesModule } from './invoices/invoices.module.js';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, MaterialsModule, InvoicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
