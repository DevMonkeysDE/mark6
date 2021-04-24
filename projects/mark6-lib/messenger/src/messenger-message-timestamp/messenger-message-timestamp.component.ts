import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-timestamp',
    templateUrl: './messenger-message-timestamp.component.html',
    styleUrls: ['./messenger-message-timestamp.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageTimestampComponent {

    private hostClass = 'mark6-messenger-message-timestamp';
    @HostBinding('class') classes = this.hostClass;

}
