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
exports.WhatsappService = exports.whatsappProvider = void 0;
const venom_bot_1 = require("venom-bot");
const common_1 = require("@nestjs/common");
const path = require("path");
const config_service_1 = require("./config.service");
const request = require("requestretry");
const mime = require("mime-types");
const fs = require("fs");
const del = require("del");
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);
const SECOND = 1000;
exports.whatsappProvider = {
    provide: 'WHATSAPP',
    useFactory: async (config) => (0, venom_bot_1.create)('sessionName', (base64Qr, asciiQR) => {
        console.log(asciiQR);
    }, (statusFind) => {
        console.log(statusFind);
    }, {
        headless: true,
        devtools: false,
        useChrome: false,
        debug: false,
        logQR: true,
        browserArgs: [
            '--log-level=3',
            '--no-default-browser-check',
            '--disable-site-isolation-trials',
            '--no-experiments',
            '--ignore-gpu-blacklist',
            '--ignore-certificate-errors',
            '--ignore-certificate-errors-spki-list',
            '--disable-gpu',
            '--disable-extensions',
            '--disable-default-apps',
            '--enable-features=NetworkService',
            '--disable-setuid-sandbox',
            '--no-sandbox',
            '--disable-webgl',
            '--disable-threaded-animation',
            '--disable-threaded-scrolling',
            '--disable-in-process-stack-traces',
            '--disable-histogram-customizer',
            '--disable-gl-extensions',
            '--disable-composited-antialiasing',
            '--disable-canvas-aa',
            '--disable-3d-apis',
            '--disable-accelerated-2d-canvas',
            '--disable-accelerated-jpeg-decoding',
            '--disable-accelerated-mjpeg-decode',
            '--disable-app-list-dismiss-on-blur',
            '--disable-accelerated-video-decode',
            '--single-process'
        ],
        autoClose: 60000,
        createPathFileToken: true,
        puppeteerOptions: {},
    }),
};
const ONMESSAGE_HOOK = "onMessage";
const HOOKS = [
    ONMESSAGE_HOOK,
    "onStateChange",
    "onAck",
    "onAddedToGroup"
];
const ENV_PREFIX = "WHATSAPP_HOOK_";
let WhatsappService = class WhatsappService {
    constructor(whatsapp, config, log) {
        this.whatsapp = whatsapp;
        this.config = config;
        this.log = log;
        this.RETRY_DELAY = 15;
        this.RETRY_ATTEMPTS = 3;
        this.log.setContext('WhatsappService');
        this.FILES_FOLDER = this.config.files_folder;
        this.clean_downloads();
        this.mimetypes = this.config.mimetypes;
        this.files_lifetime = this.config.files_lifetime * SECOND;
        this.log.log('Configuring webhooks...');
        for (const hook of HOOKS) {
            const env_name = ENV_PREFIX + hook.toUpperCase();
            const url = config.get(env_name);
            if (!url) {
                this.log.log(`Hook '${hook}' is disabled. Set ${env_name} environment variable to url if you want to enabled it.`);
                continue;
            }
            if (hook === ONMESSAGE_HOOK) {
                this.whatsapp[hook](data => this.onMessageHook(data, url));
            }
            else {
                this.whatsapp[hook](data => this.callWebhook(data, url));
            }
            this.log.log(`Hook '${hook}' was enabled to url: ${url}`);
        }
        this.log.log('Webhooks were configured.');
    }
    clean_downloads() {
        if (fs.existsSync(this.FILES_FOLDER)) {
            del([`${this.FILES_FOLDER}/*`], { force: true }).then((paths) => console.log('Deleted files and directories:\n', paths.join('\n')));
        }
        else {
            fs.mkdirSync(this.FILES_FOLDER);
            this.log.log(`Directory '${this.FILES_FOLDER}' created from scratch`);
        }
    }
    callWebhook(data, url) {
        this.log.log(`Sending POST to ${url}...`);
        this.log.debug(`POST DATA: ${JSON.stringify(data)}`);
        request.post(url, {
            json: data,
            maxAttempts: this.RETRY_ATTEMPTS,
            retryDelay: this.RETRY_DELAY * SECOND,
            retryStrategy: request.RetryStrategies.HTTPOrNetworkError
        }, (error, res, body) => {
            if (error) {
                this.log.error(error);
                return;
            }
            this.log.log(`POST request was sent with status code: ${res.statusCode}`);
            this.log.verbose(`Response: ${JSON.stringify(body)}`);
        });
    }
    async onMessageHook(message, url) {
        if (message.isMMS || message.isMedia) {
            this.downloadAndDecryptMedia(message).then((data) => this.callWebhook(data, url));
        }
        else {
            this.callWebhook(message, url);
        }
    }
    async downloadAndDecryptMedia(message) {
        return this.whatsapp.decryptFile(message).then(async (buffer) => {
            if (this.mimetypes !== null && !this.mimetypes.some((type) => message.mimetype.startsWith(type))) {
                this.log.log(`The message ${message.id} has ${message.mimetype} media, skip it.`);
                message.clientUrl = "";
                return message;
            }
            this.log.log(`The message ${message.id} has media, downloading it...`);
            const fileName = `${message.id}.${mime.extension(message.mimetype)}`;
            const filePath = path.resolve(`${this.FILES_FOLDER}/${fileName}`);
            this.log.verbose(`Writing file to ${filePath}...`);
            await writeFileAsync(filePath, buffer);
            this.log.log(`The file from ${message.id} has been saved to ${filePath}`);
            message.clientUrl = this.config.files_url + fileName;
            this.removeFile(filePath);
            return message;
        });
    }
    onApplicationShutdown(signal) {
        this.log.log('Close a browser...');
        return this.whatsapp.close();
    }
    removeFile(file) {
        setTimeout(() => fs.unlink(file, () => {
            this.log.log(`File ${file} was removed`);
        }), this.files_lifetime);
    }
};
WhatsappService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('WHATSAPP')),
    __metadata("design:paramtypes", [venom_bot_1.Whatsapp,
        config_service_1.WhatsappConfigService,
        common_1.Logger])
], WhatsappService);
exports.WhatsappService = WhatsappService;
//# sourceMappingURL=whatsapp.service.js.map