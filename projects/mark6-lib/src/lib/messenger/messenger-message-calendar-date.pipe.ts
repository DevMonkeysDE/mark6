import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'messengerCalendarDate'
})
export class MessengerCalendarDatePipe implements PipeTransform {

    transform(currentDate: Date, previousDate: Date): any {
        return currentDate;

    }



}
