import { Controller, Get, Param } from '@nestjs/common';
import { MaterialsService } from './materials.service.js';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  // GET /materials/:materialCode
  @Get(':materialCode')
  findByCode(@Param('materialCode') materialCode: string) {
    return this.materialsService.findByCode(materialCode);
  }
}
