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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let WhatsappConfigService = class WhatsappConfigService {
    constructor(configService) {
        this.configService = configService;
        this.files_uri = '/api/files';
        this.schema = "http";
    }
    get files_url() {
        return `${this.schema}://${this.hostname}:${this.port}${this.files_uri}/`;
    }
    get hostname() {
        return this.configService.get('WHATSAPP_API_HOSTNAME', 'localhost');
    }
    get port() {
        return this.configService.get('WHATSAPP_API_PORT', '3000');
    }
    get files_folder() {
        return this.configService.get('WHATSAPP_FILES_FOLDER', '/tmp/whatsapp-files');
    }
    get files_lifetime() {
        return this.configService.get('WHATSAPP_FILES_LIFETIME', 180);
    }
    get mimetypes() {
        const types = this.configService.get('WHATSAPP_FILES_MIMETYPES', "");
        return types ? types.split(',') : null;
    }
    get(name) {
        return this.configService.get(name);
    }
};
WhatsappConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], WhatsappConfigService);
exports.WhatsappConfigService = WhatsappConfigService;
//# sourceMappingURL=config.service.js.map