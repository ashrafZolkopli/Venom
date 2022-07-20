import { Whatsapp } from "venom-bot";
export declare class DeviceController {
    private whatsapp;
    constructor(whatsapp: Whatsapp);
    killServiceWorker(): Promise<boolean>;
    restartService(): Promise<boolean>;
    getHostDevice(): Promise<import("venom-bot").HostDevice>;
    getConnectionState(): Promise<import("venom-bot").SocketState>;
    getBatteryLevel(): Promise<number>;
    isConnected(): Promise<boolean>;
    getWAVersion(): Promise<string>;
}
