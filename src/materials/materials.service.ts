import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaService) {}

  // GET /materials/search?q=... — partial search on code or description
  async search(query: string) {
    return this.prisma.material.findMany({
      where: {
        OR: [
          { materialCode: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: {
        prices: {
          select: {
            id: true,
            conditionRecord: true,
            conditionType: true,
            rate: true,
            validFrom: true,
            validTo: true,
          },
        },
      },
      take: 50,
    });
  }

  // GET /materials/:materialCode — find exact material with its prices
  async findByCode(materialCode: string) {
    const material = await this.prisma.material.findUnique({
      where: { materialCode },
      include: {
        prices: {
          select: {
            id: true,
            conditionRecord: true,
            conditionType: true,
            rate: true,
            validFrom: true,
            validTo: true,
          },
        },
      },
    });

    if (!material) {
      throw new NotFoundException(`Material with code ${materialCode} not found`);
    }

    return material;
  }
}
