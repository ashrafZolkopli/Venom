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
exports.MessageLinkPreview = exports.MessageFile = exports.MessageImage = exports.MessageLocation = exports.MessageReply = exports.MessageText = exports.MessageContactVcard = exports.Chat = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const number = (0, swagger_1.ApiProperty)({
    example: '6281224993382'
});
class Chat {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String } };
    }
}
__decorate([
    number,
    __metadata("design:type", String)
], Chat.prototype, "number", void 0);
exports.Chat = Chat;
class MessageContactVcard {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, contactsId: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
}
__decorate([
    number,
    __metadata("design:type", String)
], MessageContactVcard.prototype, "number", void 0);
exports.MessageContactVcard = MessageContactVcard;
class MessageText {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, message: { required: true, type: () => String } };
    }
}
__decorate([
    number,
    __metadata("design:type", String)
], MessageText.prototype, "number", void 0);
exports.MessageText = MessageText;
class MessageReply {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, message: { required: true, type: () => String }, reply_to: { required: true, type: () => String } };
    }
}
__decorate([
    number,
    __metadata("design:type", String)
], MessageReply.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'message.id',
    }),
    __metadata("design:type", String)
], MessageReply.prototype, "reply_to", void 0);
exports.MessageReply = MessageReply;
class MessageLocation {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, latitude: { required: true, type: () => String }, longitude: { required: true, type: () => String }, title: { required: true, type: () => String } };
    }
}
__decorate([
    number,
    __metadata("design:type", String)
], MessageLocation.prototype, "number", void 0);
exports.MessageLocation = MessageLocation;
class MessageImage {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, path: { required: true, type: () => String }, filename: { required: true, type: () => String }, caption: { required: true, type: () => String } };
    }
}
__decorate([
    number,
    __metadata("design:type", String)
], MessageImage.prototype, "number", void 0);
exports.MessageImage = MessageImage;
class MessageFile {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, path: { required: true, type: () => String }, filename: { required: true, type: () => String }, caption: { required: true, type: () => String } };
    }
}
__decorate([
    number,
    __metadata("design:type", String)
], MessageFile.prototype, "number", void 0);
exports.MessageFile = MessageFile;
class MessageLinkPreview {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, url: { required: true, type: () => String }, title: { required: true, type: () => String } };
    }
}
__decorate([
    number,
    __metadata("design:type", String)
], MessageLinkPreview.prototype, "number", void 0);
exports.MessageLinkPreview = MessageLinkPreview;
//# sourceMappingURL=all.dto.js.map