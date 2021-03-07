import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
    selector: 'mark6-messenger-block-date',
    templateUrl: './messenger-block-date.component.html',
    styleUrls: ['./messenger-block-date.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerBlockDateComponent {

    private hostClass = 'mark6-messenger-block-date';
    @HostBinding('class') classes = this.hostClass;
    public formattedDate;

    @Input()
    public set date(value: Date) {
        this.formattedDate = this.messengerService.formatDateForBlock(value);
    }

    constructor(private messengerService: MessengerService) {
    }

}

