"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const config_service_1 = require("./config.service");
const fileUpload = require('express-fileupload');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: process.env.DEBUG != undefined ? ['log', 'debug', 'error', 'verbose', 'warn'] :
            ['log', 'error', 'warn'],
    });
    app.use(fileUpload({}));
    app.enableShutdownHooks();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('WhatsApp venom API')
        .setDescription('WhatsApp HTTP API that you can configure in a click!')
        .setExternalDoc("Github WhatsApp API venom", "https://github.com/diazzaid/whatsapp-venom-api")
        .setVersion('1.0')
        .addTag('device', 'Device information')
        .addTag('chatting', 'Chat methods')
        .addApiKey({
        type: 'apiKey',
        description: 'Your secret key',
        name: 'X-VENOM-TOKEN'
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('', app, document);
    const config = app.get(config_service_1.WhatsappConfigService);
    await app.listen(config.port);
    console.log(`WhatsApp HTTP API is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map