import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, NgZone, Pipe, PipeTransform } from '@angular/core';
import { getDiffDaysFromNow } from './messenger.helper';

@Pipe({
    name: 'messengerCalendarDate',
    pure: false
})
export class MessengerCalendarDatePipe implements PipeTransform {

    private timer: number;

    constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone, private datePipe: DatePipe) {
    }

    transform(d: Date) {
        this.removeTimer();
        const now = new Date();
        const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        const timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });

        const diffOfDays = getDiffDaysFromNow(d);
        if (diffOfDays === 0) return 'Todays';
        if (diffOfDays === 1) return 'Yesterday';
        if (diffOfDays === 2) return 'Before yesterday';
        if (diffOfDays > 2 && diffOfDays < 6) return this.datePipe.transform(d, 'EEEE');
        if (diffOfDays > 5) return this.datePipe.transform(d, 'shortDate');



    }

    private removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }

    private getSecondsUntilUpdate(seconds: number) {
        const min = 60;
        const hr = min * 60;
        const day = hr * 24;
        if (seconds < min) { // less than 1 min, update every 2 secs
            return 2;
        } else if (seconds < hr) { // less than an hour, update every 30 secs
            return 30;
        } else if (seconds < day) { // less then a day, update every 5 mins
            return 300;
        } else { // update every hour
            return 3600;
        }
    }

    ngOnDestroy(): void {
        this.removeTimer();
    }

}
