import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-header',
    templateUrl: './messenger-message-header.component.html',
    styleUrls: ['./messenger-message-header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageHeaderComponent {

    private hostClass = 'mark6-messenger-message-header';
    @HostBinding('class') classes = this.hostClass;

}
