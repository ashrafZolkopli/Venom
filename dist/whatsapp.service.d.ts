import { Whatsapp } from "venom-bot";
import { Logger, OnApplicationShutdown } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { WhatsappConfigService } from "./config.service";
export declare const whatsappProvider: {
    provide: string;
    useFactory: (config: ConfigService) => Promise<Whatsapp>;
};
export declare class WhatsappService implements OnApplicationShutdown {
    private whatsapp;
    private config;
    private log;
    private RETRY_DELAY;
    private RETRY_ATTEMPTS;
    readonly FILES_FOLDER: string;
    readonly mimetypes: string[] | null;
    readonly files_lifetime: number;
    constructor(whatsapp: Whatsapp, config: WhatsappConfigService, log: Logger);
    private clean_downloads;
    private callWebhook;
    private onMessageHook;
    private downloadAndDecryptMedia;
    onApplicationShutdown(signal?: string): any;
    private removeFile;
}
