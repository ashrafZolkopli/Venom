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
exports.ScreenshotController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const venom_bot_1 = require("venom-bot");
const stream_1 = require("stream");
let ScreenshotController = class ScreenshotController {
    constructor(whatsapp) {
        this.whatsapp = whatsapp;
    }
    async screenshot(res) {
        const buffer = await this.whatsapp.page.screenshot();
        const stream = new stream_1.Readable();
        stream.push(buffer);
        stream.push(null);
        res.set({
            'Content-Type': 'image/png',
            'Content-Length': buffer.length,
        });
        stream.pipe(res);
    }
};
__decorate([
    (0, common_1.Get)('/screenshot'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScreenshotController.prototype, "screenshot", null);
ScreenshotController = __decorate([
    (0, common_1.Controller)('api'),
    (0, swagger_1.ApiTags)('screenshot'),
    __param(0, (0, common_1.Inject)('WHATSAPP')),
    __metadata("design:paramtypes", [venom_bot_1.Whatsapp])
], ScreenshotController);
exports.ScreenshotController = ScreenshotController;
//# sourceMappingURL=screenshot.controller.js.map