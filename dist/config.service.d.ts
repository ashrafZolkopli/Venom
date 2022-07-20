import { ConfigService } from "@nestjs/config";
export declare class WhatsappConfigService {
    private configService;
    files_uri: string;
    schema: string;
    constructor(configService: ConfigService);
    get files_url(): string;
    get hostname(): string;
    get port(): string;
    get files_folder(): string;
    get files_lifetime(): number;
    get mimetypes(): string[] | null;
    get(name: string): any;
}
