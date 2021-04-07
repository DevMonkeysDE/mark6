import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-phone-incoming-call',
    templateUrl: './phone-incoming-call.component.html',
    styleUrls: ['./phone-incoming-call.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6PhoneIncomingCallComponent {

    private hostClass = 'mark6-phone-incoming-call';
    @HostBinding('class') classes = this.hostClass;

}
