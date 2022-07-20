"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const venom_bot_1 = require("venom-bot");
let DeviceController = class DeviceController {
    constructor(whatsapp) {
        this.whatsapp = whatsapp;
    }
    killServiceWorker() {
        return this.whatsapp.killServiceWorker();
    }
    restartService() {
        return this.whatsapp.restartService();
    }
    getHostDevice() {
        return this.whatsapp.getHostDevice();
    }
    getConnectionState() {
        return this.whatsapp.getConnectionState();
    }
    getBatteryLevel() {
        return this.whatsapp.getBatteryLevel();
    }
    isConnected() {
        return this.whatsapp.isConnected();
    }
    getWAVersion() {
        return this.whatsapp.getWAVersion();
    }
};
__decorate([
    (0, common_1.Post)('/killServiceWorker'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "killServiceWorker", null);
__decorate([
    (0, common_1.Post)('/restartService'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "restartService", null);
__decorate([
    (0, common_1.Get)('/getHostDevice'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getHostDevice", null);
__decorate([
    (0, common_1.Get)('/getConnectionState'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getConnectionState", null);
__decorate([
    (0, common_1.Get)('/getBatteryLevel'),
    openapi.ApiResponse({ status: 200, type: Number }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getBatteryLevel", null);
__decorate([
    (0, common_1.Get)('/isConnected'),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "isConnected", null);
__decorate([
    (0, common_1.Get)('/getWAVersion'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getWAVersion", null);
DeviceController = __decorate([
    (0, common_1.Controller)('api'),
    (0, swagger_1.ApiTags)('device'),
    __param(0, (0, common_1.Inject)('WHATSAPP')),
    __metadata("design:paramtypes", [venom_bot_1.Whatsapp])
], DeviceController);
exports.DeviceController = DeviceController;
//# sourceMappingURL=device.controller.js.map