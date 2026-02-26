var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EngineersService } from './engineers.service.js';
import { CreateEngineerDto } from './dto/create-engineer.dto.js';
import { AssignStockDto } from './dto/assign-stock.dto.js';
let EngineersController = class EngineersController {
    engineersService;
    constructor(engineersService) {
        this.engineersService = engineersService;
    }
    findAll() {
        return this.engineersService.findAll();
    }
    findById(id) {
        return this.engineersService.findById(id);
    }
    getStock(id) {
        return this.engineersService.getStock(id);
    }
    create(createEngineerDto) {
        return this.engineersService.create(createEngineerDto);
    }
    assignStock(assignStockDto) {
        return this.engineersService.assignStock(assignStockDto);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "findById", null);
__decorate([
    Get(':id/stock'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "getStock", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEngineerDto]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "create", null);
__decorate([
    Post('assign-stock'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AssignStockDto]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "assignStock", null);
EngineersController = __decorate([
    Controller('engineers'),
    __metadata("design:paramtypes", [EngineersService])
], EngineersController);
export { EngineersController };
//# sourceMappingURL=engineers.controller.js.map