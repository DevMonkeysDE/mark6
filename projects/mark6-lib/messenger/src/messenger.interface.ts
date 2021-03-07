export interface IMessengerServiceConfig {
    dateFormats?: MessengerServiceDateFormats;
}

export class MessengerServiceConfig implements IMessengerServiceConfig {
    dateFormats: MessengerServiceDateFormats;
}

export interface MessengerServiceDateFormats {
    block?: MessengerServiceBlockDateFormat;
    message?: MessengerServiceMessageDateFormat;
    locale?: string;
}

export interface MessengerServiceBlockDateFormat {
    days?: string[];
    format?: Intl.DateTimeFormatOptions;
}

export interface MessengerServiceMessageDateFormat {
    format?: Intl.DateTimeFormatOptions;
}

export interface MessengerMessageBlockInterface {
    date: Date;
    messageGroup: MessengerMessageGroupInterface;
}

export interface MessengerMessageGroupInterface {
    type: string;
    user_id?: any;
    user_name?: string;
    user_avatar?: AvatarInterface;
    messages?: MessengerMessageInterface;
}

export interface AvatarInterface {
    preview?: string;
    src?: string;
    srcset?: string;
    default?: string;
}

export interface MessengerMessageInterface {
    created_at?: Date;
    text: string;
    reply?: MessengerReplyPreviewInterface;
    user_name: string;
}

export interface MessengerReplyPreviewInterface {
    user_name: string;
    text: string;
    color?: string;
}
