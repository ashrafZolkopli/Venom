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
exports.ChattingController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const all_dto_1 = require("./all.dto");
const venom_bot_1 = require("venom-bot");
let ChattingController = class ChattingController {
    constructor(whatsapp) {
        this.whatsapp = whatsapp;
    }
    sendContactVcard(message) {
        return this.whatsapp.sendContactVcard(message.number + '@c.us', message.contactsId, message.name);
    }
    sendText(message) {
        return this.whatsapp.sendText(message.number + '@c.us', message.message);
    }
    sendLocation(message) {
        return this.whatsapp.sendLocation(message.number + '@c.us', message.latitude, message.longitude, message.title);
    }
    sendLinkPreview(message) {
        return this.whatsapp.sendLinkPreview(message.number + '@c.us', message.url, message.title);
    }
    sendImage(message) {
        throw new common_1.NotImplementedException();
        return this.whatsapp.sendImage(message.number + '@c.us', message.path, message.filename, message.caption);
    }
    sendFile(message) {
        throw new common_1.NotImplementedException();
        return this.whatsapp.sendFile(message.number + '@c.us', message.path, message.filename, message.caption);
    }
    reply(message) {
        return this.whatsapp.reply(message.number + '@c.us', message.message, message.reply_to);
    }
    sendSeen(chat) {
        return this.whatsapp.sendSeen(chat.number);
    }
    startTyping(chat) {
        this.whatsapp.startTyping(chat.number);
        return true;
    }
    stopTyping(chat) {
        this.whatsapp.stopTyping(chat.number);
        return true;
    }
};
__decorate([
    (0, common_1.Post)('/sendContactVcard'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.MessageContactVcard]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "sendContactVcard", null);
__decorate([
    (0, common_1.Post)('/send-message'),
    (0, swagger_1.ApiOperation)({ summary: 'Send a message message' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.MessageText]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "sendText", null);
__decorate([
    (0, common_1.Post)('/send-location'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.MessageLocation]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "sendLocation", null);
__decorate([
    (0, common_1.Post)('/send-linkPreview'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.MessageLinkPreview]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "sendLinkPreview", null);
__decorate([
    (0, common_1.Post)('/send-image'),
    (0, swagger_1.ApiOperation)({ summary: 'NOT IMPLEMENTED YET' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.MessageImage]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "sendImage", null);
__decorate([
    (0, common_1.Post)('/send-file'),
    (0, swagger_1.ApiOperation)({ summary: 'NOT IMPLEMENTED YET' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.MessageFile]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "sendFile", null);
__decorate([
    (0, common_1.Post)('/reply'),
    (0, swagger_1.ApiOperation)({ summary: 'Reply to a message message' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.MessageReply]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "reply", null);
__decorate([
    (0, common_1.Post)('/send-seen'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.Chat]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "sendSeen", null);
__decorate([
    (0, common_1.Post)('/start-typing'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.Chat]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "startTyping", null);
__decorate([
    (0, common_1.Post)('/stop-typing'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_dto_1.Chat]),
    __metadata("design:returntype", void 0)
], ChattingController.prototype, "stopTyping", null);
ChattingController = __decorate([
    (0, common_1.Controller)('api'),
    (0, swagger_1.ApiTags)('chatting'),
    __param(0, (0, common_1.Inject)('WHATSAPP')),
    __metadata("design:paramtypes", [venom_bot_1.Whatsapp])
], ChattingController);
exports.ChattingController = ChattingController;
//# sourceMappingURL=chatting.controller.js.map