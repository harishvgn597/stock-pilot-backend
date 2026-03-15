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
import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { OrdersService } from './orders.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
import { CreateWarrantyAmcOrderDto } from './dto/create-warranty-amc-order.dto.js';
import { CreateReturnToGodownOrderDto } from './dto/create-return-to-godown-order.dto.js';
let OrdersController = class OrdersController {
    ordersService;
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    createSale(dto, req) {
        return this.ordersService.createSale(dto, req.user.userId);
    }
    findAllSales(req) {
        return this.ordersService.findAllSales(req.user.userId);
    }
    findSaleByBillNumber(billNumber, req) {
        return this.ordersService.findSaleByBillNumber(billNumber, req.user.userId);
    }
    findSalesByEngineer(engineerId, req) {
        return this.ordersService.findSalesByEngineer(engineerId, req.user.userId);
    }
    createWarrantyAmc(dto, req) {
        return this.ordersService.createWarrantyAmc(dto, req.user.userId);
    }
    findAllWarrantyAmc(req) {
        return this.ordersService.findAllWarrantyAmc(req.user.userId);
    }
    findWarrantyAmcByTicket(ticketNumber, req) {
        return this.ordersService.findWarrantyAmcByTicket(ticketNumber, req.user.userId);
    }
    findWarrantyAmcByEngineer(engineerId, req) {
        return this.ordersService.findWarrantyAmcByEngineer(engineerId, req.user.userId);
    }
    createReturnToGodown(dto, req) {
        return this.ordersService.createReturnToGodown(dto, req.user.userId);
    }
    findAllReturnToGodown(req) {
        return this.ordersService.findAllReturnToGodown(req.user.userId);
    }
    findReturnToGodownByRef(referenceNumber, req) {
        return this.ordersService.findReturnToGodownByRef(referenceNumber, req.user.userId);
    }
    findReturnToGodownByEngineer(engineerId, req) {
        return this.ordersService.findReturnToGodownByEngineer(engineerId, req.user.userId);
    }
};
__decorate([
    Post('sale'),
    __param(0, Body()),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSaleOrderDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createSale", null);
__decorate([
    Get('sale'),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAllSales", null);
__decorate([
    Get('sale/:billNumber'),
    __param(0, Param('billNumber')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findSaleByBillNumber", null);
__decorate([
    Get('engineer/:engineerId/sales'),
    __param(0, Param('engineerId')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findSalesByEngineer", null);
__decorate([
    Post('warranty-amc'),
    __param(0, Body()),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateWarrantyAmcOrderDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createWarrantyAmc", null);
__decorate([
    Get('warranty-amc'),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAllWarrantyAmc", null);
__decorate([
    Get('warranty-amc/:ticketNumber'),
    __param(0, Param('ticketNumber')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findWarrantyAmcByTicket", null);
__decorate([
    Get('engineer/:engineerId/warranty-amc'),
    __param(0, Param('engineerId')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findWarrantyAmcByEngineer", null);
__decorate([
    Post('return-to-godown'),
    __param(0, Body()),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateReturnToGodownOrderDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createReturnToGodown", null);
__decorate([
    Get('return-to-godown'),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAllReturnToGodown", null);
__decorate([
    Get('return-to-godown/:referenceNumber'),
    __param(0, Param('referenceNumber')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findReturnToGodownByRef", null);
__decorate([
    Get('engineer/:engineerId/return-to-godown'),
    __param(0, Param('engineerId')),
    __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findReturnToGodownByEngineer", null);
OrdersController = __decorate([
    UseGuards(JwtAuthGuard),
    Controller('orders'),
    __metadata("design:paramtypes", [OrdersService])
], OrdersController);
export { OrdersController };
//# sourceMappingURL=orders.controller.js.map