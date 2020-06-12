import { Pipe, PipeTransform } from '@angular/core';
import { UiMessage } from 'src/app/models/message.model';
import * as moment from 'moment';

@Pipe({
    name: 'messengerClass'
})
export class MessengerMessageClassPipe implements PipeTransform {

    transform(message: UiMessage, previousMessage: UiMessage, nextMessage: UiMessage, isFirst: boolean, isLast: boolean, currentDate: Date, previousDate: Date): any {
        const result = {
            'msg': true,
            [message.direction]: true,
            'message': true,
            'first-message-this-day': this.isDifferentDate(currentDate, previousDate),
            'first-from-direction': (previousMessage && (previousMessage.direction !== message.direction)) || isFirst,
            'first-from-user': (previousMessage && (previousMessage.user_id !== message.user_id)) || isFirst,
            'last-from-direction': (nextMessage && (nextMessage.direction !== message.direction)) || isLast,
            'last-from-user': (nextMessage && (nextMessage.user_id !== message.user_id)) || isLast
        };
        return result;
    }

    private isDifferentDate(currentDate: Date, previousDate: Date) {
        if (!!!currentDate || !!!previousDate) return false;
        const c = moment(currentDate).hours(0).minutes(0).seconds(0).milliseconds(0).diff(moment(), 'days');
        const p = moment(previousDate).hours(0).minutes(0).seconds(0).milliseconds(0).diff(moment(), 'days');
        return c !== p;
    }
}
