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
import { AmcService } from './amc.service.js';
import { CreateAmcContractDto } from './dto/create-amc-contract.dto.js';
let AmcController = class AmcController {
    amcService;
    constructor(amcService) {
        this.amcService = amcService;
    }
    create(dto, req) {
        return this.amcService.create(dto, req.user.userId);
    }
    findAll(req) {
        return this.amcService.findAll(req.user.userId);
    }
    findByIcr(icrNumber, req) {
        return this.amcService.findByIcr(icrNumber, req.user.userId);
    }
    findOne(id, req) {
        return this.amcService.findOne(id, req.user.userId);
    }
    remove(id, req) {
        return this.amcService.remove(id, req.user.userId);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAmcContractDto, Object]),
    __metadata("design:returntype", void 0)
], AmcController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AmcController.prototype, "findAll", null);
__decorate([
    Get('icr/:icrNumber'),
    __param(0, Param('icrNumber')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AmcController.prototype, "findByIcr", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AmcController.prototype, "findOne", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AmcController.prototype, "remove", null);
AmcController = __decorate([
    UseGuards(JwtAuthGuard),
    Controller('amc'),
    __metadata("design:paramtypes", [AmcService])
], AmcController);
export { AmcController };
//# sourceMappingURL=amc.controller.js.map