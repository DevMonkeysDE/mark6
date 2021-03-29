import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-header-name',
    templateUrl: './messenger-message-header-name.component.html',
    styleUrls: ['./messenger-message-header-name.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageHeaderNameComponent {

    private hostClass = 'mark6-messenger-message-header-name';
    @HostBinding('class') classes = this.hostClass;

}
