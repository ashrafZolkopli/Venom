export declare class Chat {
    number: string;
}
export declare class MessageContactVcard {
    number: string;
    contactsId: string;
    name: string;
}
export declare class MessageText {
    number: string;
    message: string;
}
export declare class MessageReply {
    number: string;
    message: string;
    reply_to: string;
}
export declare class MessageLocation {
    number: string;
    latitude: string;
    longitude: string;
    title: string;
}
export declare class MessageImage {
    number: string;
    path: string;
    filename: string;
    caption: string;
}
export declare class MessageFile {
    number: string;
    path: string;
    filename: string;
    caption: string;
}
export declare class MessageLinkPreview {
    number: string;
    url: string;
    title: string;
}
