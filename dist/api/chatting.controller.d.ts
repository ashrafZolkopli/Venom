import { Chat, MessageContactVcard, MessageFile, MessageImage, MessageLinkPreview, MessageLocation, MessageReply, MessageText } from "./all.dto";
import { Whatsapp } from "venom-bot";
export declare class ChattingController {
    private whatsapp;
    constructor(whatsapp: Whatsapp);
    sendContactVcard(message: MessageContactVcard): Promise<unknown>;
    sendText(message: MessageText): Promise<Object>;
    sendLocation(message: MessageLocation): Promise<unknown>;
    sendLinkPreview(message: MessageLinkPreview): Promise<object>;
    sendImage(message: MessageImage): Promise<import("venom-bot").SendFileResult>;
    sendFile(message: MessageFile): Promise<unknown>;
    reply(message: MessageReply): Promise<object | import("venom-bot").Message>;
    sendSeen(chat: Chat): Promise<void>;
    startTyping(chat: Chat): boolean;
    stopTyping(chat: Chat): boolean;
}
