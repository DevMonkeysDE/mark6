import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-group',
    templateUrl: './messenger-message-group.component.html',
    styleUrls: ['./messenger-message-group.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageGroupComponent {

    private hostClass = 'mark6-messenger-message-group';
    @HostBinding('class') classes = this.hostClass;

    constructor() {
    }

}
