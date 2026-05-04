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
import { Controller, Get, Put, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { SalaryConfigService } from './salary-config.service.js';
import { UpsertSalaryConfigDto } from './dto/create-salary-config.dto.js';
import { UpdateSalaryConfigDto } from './dto/update-salary-config.dto.js';
let SalaryConfigController = class SalaryConfigController {
    salaryConfigService;
    constructor(salaryConfigService) {
        this.salaryConfigService = salaryConfigService;
    }
    get(req) {
        return this.salaryConfigService.get(req.user.userId);
    }
    upsert(dto, req) {
        return this.salaryConfigService.upsert(dto, req.user.userId);
    }
    patch(dto, req) {
        return this.salaryConfigService.patch(dto, req.user.userId);
    }
};
__decorate([
    Get(),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SalaryConfigController.prototype, "get", null);
__decorate([
    Put(),
    __param(0, Body()),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpsertSalaryConfigDto, Object]),
    __metadata("design:returntype", void 0)
], SalaryConfigController.prototype, "upsert", null);
__decorate([
    Patch(),
    __param(0, Body()),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateSalaryConfigDto, Object]),
    __metadata("design:returntype", void 0)
], SalaryConfigController.prototype, "patch", null);
SalaryConfigController = __decorate([
    UseGuards(JwtAuthGuard),
    Controller('salary-config'),
    __metadata("design:paramtypes", [SalaryConfigService])
], SalaryConfigController);
export { SalaryConfigController };
//# sourceMappingURL=salary-config.controller.js.map