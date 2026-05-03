import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const client = new PrismaClient({ adapter });

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly prisma = client;

  get user() {
    return this.prisma.user;
  }

  get material() {
    return this.prisma.material;
  }

  get materialPrice() {
    return this.prisma.materialPrice;
  }

  get invoice() {
    return this.prisma.invoice;
  }

  get invoiceItem() {
    return this.prisma.invoiceItem;
  }

  get engineer() {
    return this.prisma.engineer;
  }

  get engineerStock() {
    return this.prisma.engineerStock;
  }

  get order() {
    return this.prisma.order;
  }

  get saleOrder() {
    return this.prisma.saleOrder;
  }

  get warrantyAmcOrder() {
    return this.prisma.warrantyAmcOrder;
  }

  get returnToGodownOrder() {
    return this.prisma.returnToGodownOrder;
  }

  get customerReturn() {
    return this.prisma.customerReturn;
  }

  get amcContract() {
    return this.prisma.amcContract;
  }

  get godownStock() {
    return this.prisma.godownStock;
  }

  get attendance() {
    return this.prisma.attendance;
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
