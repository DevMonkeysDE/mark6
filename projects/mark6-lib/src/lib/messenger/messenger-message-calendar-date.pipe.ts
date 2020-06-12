import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/de';

@Pipe({
    name: 'messengerCalendarDate'
})
export class MessengerCalendarDatePipe implements PipeTransform {

    transform(currentDate: Date, previousDate: Date): any {

        if (!!!previousDate) {
            const c = moment(currentDate).hours(0).minutes(0).seconds(0).milliseconds(0).diff(moment(), 'days');
            return this.getFormat(c, currentDate);
        }

        if (previousDate) {
            const c = moment(currentDate).hours(0).minutes(0).seconds(0).milliseconds(0).diff(moment(), 'days');
            const p = moment(previousDate).hours(0).minutes(0).seconds(0).milliseconds(0).diff(moment(), 'days');
            if (c !== p) {
                return this.getFormat(c, currentDate);
            }
        }

        return false;
    }

    private getFormat(c: number, date: Date) {
        if (c === 0) { return 'Heute'; }
        if (c === -1) { return 'Gestern'; }
        if (c === -2) { return 'Vorgestern'; }
        if (c < -2 && c > -6) { return moment(date).hours(0).minutes(0).seconds(0).milliseconds(0).locale('de').format('dddd'); }
        if (c < -5) { return moment(date).hours(0).minutes(0).seconds(0).milliseconds(0).locale('de').format('DD. MMMM YYYY'); }
    }

}
