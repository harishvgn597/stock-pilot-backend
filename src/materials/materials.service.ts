import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaService) {}

  // GET /materials/:materialCode — find material with its prices
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
