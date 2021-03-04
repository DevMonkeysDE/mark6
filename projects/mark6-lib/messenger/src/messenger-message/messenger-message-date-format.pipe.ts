import { Pipe, PipeTransform } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Pipe({
    name: 'dateFormat'
})

export class DateFormatPipe implements PipeTransform {
    constructor(private messengerService: MessengerService) { }
    transform(value: Date): any {
        return this.messengerService.messageFormat.format(value);
    }
}