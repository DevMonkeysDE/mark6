import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-header',
    templateUrl: './messenger-header.component.html',
    styleUrls: ['./messenger-header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Mark6MessengerHeaderComponent {

    private hostClass = 'mark6-messenger-header';
    @HostBinding('class') classes = this.hostClass;

    constructor() {
    }

}
