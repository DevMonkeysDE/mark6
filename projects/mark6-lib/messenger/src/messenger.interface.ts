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

