import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'messengerClass'
})
export class MessengerMessageClassPipe implements PipeTransform {

    transform(message: any, previousMessage: any, nextMessage: any, isFirst: boolean, isLast: boolean, currentDate: Date, previousDate: Date): any {
        const result = {
            'msg': true,
            [message.direction]: true,
            'message': true,
            'first-message-this-day': MessengerMessageClassPipe.isDifferentDate(currentDate, previousDate),
            'first-from-direction': (previousMessage && (previousMessage.direction !== message.direction)) || isFirst,
            'first-from-user': (previousMessage && (previousMessage.user_id !== message.user_id)) || isFirst,
            'last-from-direction': (nextMessage && (nextMessage.direction !== message.direction)) || isLast,
            'last-from-user': (nextMessage && (nextMessage.user_id !== message.user_id)) || isLast
        };
        return result;
    }

    private static isDifferentDate(currentDate: Date, previousDate: Date) {
        if (!!!currentDate || !!!previousDate) return false;
        const c = `${currentDate.getFullYear}-${currentDate.getMonth}-${currentDate.getDay}`;
        const p = `${previousDate.getFullYear}-${previousDate.getMonth}-${previousDate.getDay}`;
        return c !== p;
    }
}
