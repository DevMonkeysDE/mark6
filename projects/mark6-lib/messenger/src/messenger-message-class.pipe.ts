import {Pipe, PipeTransform} from '@angular/core';
import {MessengerInterface} from "./messenger.interface";

interface MessengerMessageClassPipeInterface {
    msg: boolean;
    others: boolean;
    me: boolean;
    message: boolean;
    'first-message-this-day': boolean;
    'first-from-direction': boolean;
    'first-from-user': boolean;
    'last-from-direction': boolean;
    'last-from-user': boolean;
}

@Pipe({
    name: 'messengerClass'
})
export class MessengerMessageClassPipe implements PipeTransform {

    transform(
        message: MessengerInterface,
        previousMessage: MessengerInterface,
        nextMessage: MessengerInterface,
        isFirst: boolean,
        isLast: boolean,
        currentDate: Date,
        previousDate: Date): MessengerMessageClassPipeInterface {
        return {
            me: message.direction === 'me',
            others: message.direction === 'others',
            msg: true,
            message: true,
            'first-message-this-day': MessengerMessageClassPipe.isDifferentDate(currentDate, previousDate),
            'first-from-direction': (previousMessage && (previousMessage.direction !== message.direction)) || isFirst,
            'first-from-user': (previousMessage && (previousMessage.user_id !== message.user_id)) || isFirst,
            'last-from-direction': (nextMessage && (nextMessage.direction !== message.direction)) || isLast,
            'last-from-user': (nextMessage && (nextMessage.user_id !== message.user_id)) || isLast
        };
    }

    private static isDifferentDate(currentDate: Date, previousDate: Date) {
        if (!!!currentDate || !!!previousDate) return false;
        const c = `${currentDate.getFullYear}-${currentDate.getMonth}-${currentDate.getDay}`;
        const p = `${previousDate.getFullYear}-${previousDate.getMonth}-${previousDate.getDay}`;
        return c !== p;
    }
}
