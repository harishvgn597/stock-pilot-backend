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
import { OrdersService } from './orders.service.js';
import { CreateSaleOrderDto } from './dto/create-sale-order.dto.js';
import { CreateWarrantyAmcOrderDto } from './dto/create-warranty-amc-order.dto.js';
import { CreateReturnToGodownOrderDto } from './dto/create-return-to-godown-order.dto.js';
let OrdersController = class OrdersController {
    ordersService;
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    createSale(dto) {
        return this.ordersService.createSale(dto);
    }
    findAllSales() {
        return this.ordersService.findAllSales();
    }
    findSaleByBillNumber(billNumber) {
        return this.ordersService.findSaleByBillNumber(billNumber);
    }
    findSalesByEngineer(engineerId) {
        return this.ordersService.findSalesByEngineer(engineerId);
    }
    createWarrantyAmc(dto) {
        return this.ordersService.createWarrantyAmc(dto);
    }
    findAllWarrantyAmc() {
        return this.ordersService.findAllWarrantyAmc();
    }
    findWarrantyAmcByTicket(ticketNumber) {
        return this.ordersService.findWarrantyAmcByTicket(ticketNumber);
    }
    findWarrantyAmcByEngineer(engineerId) {
        return this.ordersService.findWarrantyAmcByEngineer(engineerId);
    }
    createReturnToGodown(dto) {
        return this.ordersService.createReturnToGodown(dto);
    }
    findAllReturnToGodown() {
        return this.ordersService.findAllReturnToGodown();
    }
    findReturnToGodownByRef(referenceNumber) {
        return this.ordersService.findReturnToGodownByRef(referenceNumber);
    }
    findReturnToGodownByEngineer(engineerId) {
        return this.ordersService.findReturnToGodownByEngineer(engineerId);
    }
};
__decorate([
    Post('sale'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSaleOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createSale", null);
__decorate([
    Get('sale'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAllSales", null);
__decorate([
    Get('sale/:billNumber'),
    __param(0, Param('billNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findSaleByBillNumber", null);
__decorate([
    Get('engineer/:engineerId/sales'),
    __param(0, Param('engineerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findSalesByEngineer", null);
__decorate([
    Post('warranty-amc'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateWarrantyAmcOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createWarrantyAmc", null);
__decorate([
    Get('warranty-amc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAllWarrantyAmc", null);
__decorate([
    Get('warranty-amc/:ticketNumber'),
    __param(0, Param('ticketNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findWarrantyAmcByTicket", null);
__decorate([
    Get('engineer/:engineerId/warranty-amc'),
    __param(0, Param('engineerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findWarrantyAmcByEngineer", null);
__decorate([
    Post('return-to-godown'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateReturnToGodownOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createReturnToGodown", null);
__decorate([
    Get('return-to-godown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAllReturnToGodown", null);
__decorate([
    Get('return-to-godown/:referenceNumber'),
    __param(0, Param('referenceNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findReturnToGodownByRef", null);
__decorate([
    Get('engineer/:engineerId/return-to-godown'),
    __param(0, Param('engineerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findReturnToGodownByEngineer", null);
OrdersController = __decorate([
    Controller('orders'),
    __metadata("design:paramtypes", [OrdersService])
], OrdersController);
export { OrdersController };
//# sourceMappingURL=orders.controller.js.map