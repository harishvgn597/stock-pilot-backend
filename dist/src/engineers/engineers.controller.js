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
import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { EngineersService } from './engineers.service.js';
import { CreateEngineerDto } from './dto/create-engineer.dto.js';
import { AssignStockDto } from './dto/assign-stock.dto.js';
let EngineersController = class EngineersController {
    engineersService;
    constructor(engineersService) {
        this.engineersService = engineersService;
    }
    findAll(req) {
        return this.engineersService.findAll(req.user.userId);
    }
    findById(id, req) {
        return this.engineersService.findById(id, req.user.userId);
    }
    getStock(id, req) {
        return this.engineersService.getStock(id, req.user.userId);
    }
    create(createEngineerDto, req) {
        return this.engineersService.create(createEngineerDto, req.user.userId);
    }
    assignStock(assignStockDto) {
        return this.engineersService.assignStock(assignStockDto);
    }
    removeStock(engineerId, stockId) {
        return this.engineersService.removeStock(engineerId, stockId);
    }
    delete(id) {
        return this.engineersService.delete(id);
    }
};
__decorate([
    Get(),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "findById", null);
__decorate([
    Get(':id/stock'),
    __param(0, Param('id')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "getStock", null);
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEngineerDto, Object]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "create", null);
__decorate([
    Post('assign-stock'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AssignStockDto]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "assignStock", null);
__decorate([
    Delete(':engineerId/stock/:stockId'),
    __param(0, Param('engineerId')),
    __param(1, Param('stockId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "removeStock", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EngineersController.prototype, "delete", null);
EngineersController = __decorate([
    UseGuards(JwtAuthGuard),
    Controller('engineers'),
    __metadata("design:paramtypes", [EngineersService])
], EngineersController);
export { EngineersController };
//# sourceMappingURL=engineers.controller.js.map