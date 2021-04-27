import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-extended',
    templateUrl: './messenger-message-extended.component.html',
    styleUrls: ['./messenger-message-extended.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageExtendedComponent {

    private hostClass = 'mark6-messenger-message-extended';
    @HostBinding('class') classes = this.hostClass;

}
