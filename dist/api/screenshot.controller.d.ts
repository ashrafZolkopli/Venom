import { Whatsapp } from "venom-bot";
import { Response } from 'express';
export declare class ScreenshotController {
    private whatsapp;
    constructor(whatsapp: Whatsapp);
    screenshot(res: Response): Promise<void>;
}
