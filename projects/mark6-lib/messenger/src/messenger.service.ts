import { Injectable, Optional } from '@angular/core';

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
        format: { day: 'numeric', month: 'long', year: 'numeric' }
    },
    message: {
        format: { hour: '2-digit', minute: '2-digit', hour12: false }
    },
    locale: 'de-DE'
};

@Injectable({ providedIn: 'root' })
export class MessengerService {
    private dateFormats: MessengerServiceDateFormats;
    private blockFormatter: Intl.DateTimeFormat;
    private messageFormatter: Intl.DateTimeFormat;

    constructor(@Optional() config: MessengerServiceConfig) {
        const dateFormats = config.dateFormats;

        this.dateFormats = {
            message: { ...defaultDateFormats.message, ...dateFormats.message },
            block: { ...defaultDateFormats.block, ...dateFormats.block },
            locale: dateFormats.locale || defaultDateFormats.locale
        };

        this.blockFormatter = new Intl.DateTimeFormat(this.dateFormats.locale, this.dateFormats.block.format);
        this.messageFormatter = new Intl.DateTimeFormat(this.dateFormats.locale, this.dateFormats.message.format);
    }

    public formatDateForMessage(value: Date) {
        return this.messageFormatter.format(value);
    }
    public formatDateForBlock(value: Date) {
        if (this.dateFormats.block.days && this.dateFormats.block.days.length > 0) {
            const dayDiff = getEvenDaysDiff(value);
            if (dayDiff < this.dateFormats.block.days.length) {
                return this.dateFormats.block.days[dayDiff];
            }
        }
        return this.blockFormatter.format(value);
    }
}

const getEvenDaysDiff = (d: Date) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    d.setHours(0, 0, 0, 0);
    return Math.round((now.getTime() - d.getTime()) / 8.64e7);
};

