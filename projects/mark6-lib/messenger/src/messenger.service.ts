import {Injectable, Optional} from '@angular/core';

// TODO ALEX MOVE ALL INTERFACES TO INTERFACE.TS
export class MessengerServiceConfig implements IMessengerServiceConfig {
    dateFormats: MessengerServiceDateFormats;
}

interface IMessengerServiceConfig {
    dateFormats?: MessengerServiceDateFormats;
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

const defaultDateFormats: MessengerServiceDateFormats = {
    block: {
        days: ['Today', 'Yesterday'],
        format: {day: 'numeric', month: 'long', year: 'numeric'}
    },
    message: {
        format: {hour: '2-digit', minute: '2-digit', hour12: false}
    },
    locale: 'de-DE'
};

@Injectable({providedIn: 'root'})
export class MessengerService {
    private dateFormats: MessengerServiceDateFormats;

    constructor(@Optional() config: MessengerServiceConfig) {
        const dateFormats = config.dateFormats;
        this.dateFormats = {
            message: {...defaultDateFormats.message, ...dateFormats.message},
            block: {...defaultDateFormats.block, ...dateFormats.block},
            locale: dateFormats.locale || defaultDateFormats.locale
        };
        console.log(this.dateFormats);
    }

    public get messageFormat() {
        return new Intl.DateTimeFormat(this.dateFormats.locale, this.dateFormats.message.format);
    }

    public get blockFormat() {
        return new Intl.DateTimeFormat(this.dateFormats.locale, this.dateFormats.block.format);
    }
}
