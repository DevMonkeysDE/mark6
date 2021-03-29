import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-text',
    templateUrl: './messenger-message-text.component.html',
    styleUrls: ['./messenger-message-text.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageTextComponent {

    private hostClass = 'mark6-messenger-message-text';
    @HostBinding('class') classes = this.hostClass;

}
