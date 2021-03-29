import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-header-date',
    templateUrl: './messenger-message-header-date.component.html',
    styleUrls: ['./messenger-message-header-date.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageHeaderDateComponent {

    private hostClass = 'mark6-messenger-message-header-date';
    @HostBinding('class') classes = this.hostClass;

}
