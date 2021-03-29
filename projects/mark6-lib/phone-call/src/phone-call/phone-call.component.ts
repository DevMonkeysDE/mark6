import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-phone-call',
    templateUrl: './phone-call.component.html',
    styleUrls: ['./phone-call.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6PhoneCallComponent {

    private hostClass = 'mark6-phone-call';
    @HostBinding('class') classes = this.hostClass;

}
