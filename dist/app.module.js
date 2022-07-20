"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const chatting_controller_1 = require("./api/chatting.controller");
const device_controller_1 = require("./api/device.controller");
const whatsapp_service_1 = require("./whatsapp.service");
const screenshot_controller_1 = require("./api/screenshot.controller");
const config_1 = require("@nestjs/config");
const config_service_1 = require("./config.service");
const serve_static_1 = require("@nestjs/serve-static");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_service_1.WhatsappConfigService,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRootAsync({
                imports: [config_service_1.WhatsappConfigService],
                extraProviders: [config_service_1.WhatsappConfigService],
                inject: [config_service_1.WhatsappConfigService],
                useFactory: (config) => {
                    return [{
                            rootPath: config.files_folder,
                            serveRoot: config.files_uri,
                        }];
                },
            }),
        ],
        controllers: [chatting_controller_1.ChattingController, device_controller_1.DeviceController, screenshot_controller_1.ScreenshotController],
        providers: [whatsapp_service_1.whatsappProvider, whatsapp_service_1.WhatsappService, common_1.Logger, config_service_1.WhatsappConfigService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map