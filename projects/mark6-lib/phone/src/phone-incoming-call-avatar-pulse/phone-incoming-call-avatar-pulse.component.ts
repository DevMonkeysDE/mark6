import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-phone-incoming-call-avatar-pulse',
    templateUrl: './phone-incoming-call-avatar-pulse.component.html',
    styleUrls: ['./phone-incoming-call-avatar-pulse.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6PhoneIncomingCallAvatarPulseComponent {

    private hostClass = 'mark6-phone-incoming-call-avatar-pulse';
    @HostBinding('class') classes = this.hostClass;

}
