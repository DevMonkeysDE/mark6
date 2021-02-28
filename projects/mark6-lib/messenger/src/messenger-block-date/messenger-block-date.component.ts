import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-block-date',
    templateUrl: './messenger-block-date.component.html',
    styleUrls: ['./messenger-block-date.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerBlockDateComponent {

    private hostClass = 'mark6-messenger-block-date';
    @HostBinding('class') classes = this.hostClass;

    @Input() public date;
    @Input() public dateOptions = {
        days: ['Today', 'Yesterday', 'Day before yesterday'],
        format: 'dd MMMM YYYY',
        locale: 'en-EN'
    };

}
