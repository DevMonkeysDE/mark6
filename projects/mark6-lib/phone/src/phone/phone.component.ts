import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6PhoneComponent {

    private hostClass = 'mark6-phone';
    @HostBinding('class') classes = this.hostClass;

}
