import { Controller, Get, Param, Query } from '@nestjs/common';
import { MaterialsService } from './materials.service.js';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  // GET /materials/search?q=DIG
  @Get('search')
  search(@Query('q') query: string) {
    return this.materialsService.search(query || '');
  }

  // GET /materials/:materialCode
  @Get(':materialCode')
  findByCode(@Param('materialCode') materialCode: string) {
    return this.materialsService.findByCode(materialCode);
  }
}
