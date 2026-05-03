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
import { Controller, Get, Post, Patch, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { GodownService } from './godown.service.js';
import { CreateGodownStockDto } from './dto/create-godown-stock.dto.js';
import { UpdateGodownStockDto } from './dto/update-godown-stock.dto.js';
let GodownController = class GodownController {
    godownService;
    constructor(godownService) {
        this.godownService = godownService;
    }
    createManual(dto, req) {
        return this.godownService.createManual(dto, req.user.userId);
    }
    findAll(req) {
        return this.godownService.findAll(req.user.userId);
    }
    getSummary(req) {
        return this.godownService.getSummary(req.user.userId);
    }
    findOne(id, req) {
        return this.godownService.findOne(id, req.user.userId);
    }
    replace(id, dto, req) {
        return this.godownService.update(id, dto, req.user.userId);
    }
    update(id, dto, req) {
        return this.godownService.update(id, dto, req.user.userId);
    }
    remove(id, req) {
        return this.godownService.remove(id, req.user.userId);
    }
};
__decorate([
    Post('manual'),
    __param(0, Body()),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateGodownStockDto, Object]),
    __metadata("design:returntype", void 0)
], GodownController.prototype, "createManual", null);
__decorate([
    Get(),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GodownController.prototype, "findAll", null);
__decorate([
    Get('summary'),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GodownController.prototype, "getSummary", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GodownController.prototype, "findOne", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __param(2, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateGodownStockDto, Object]),
    __metadata("design:returntype", void 0)
], GodownController.prototype, "replace", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __param(2, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateGodownStockDto, Object]),
    __metadata("design:returntype", void 0)
], GodownController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GodownController.prototype, "remove", null);
GodownController = __decorate([
    UseGuards(JwtAuthGuard),
    Controller('godown'),
    __metadata("design:paramtypes", [GodownService])
], GodownController);
export { GodownController };
//# sourceMappingURL=godown.controller.js.map