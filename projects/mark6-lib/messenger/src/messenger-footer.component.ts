import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-footer',
    templateUrl: './messenger-footer.component.html',
    styleUrls: ['./messenger-footer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerFooterComponent {

    private hostClass = 'mark6-messenger-footer';
    @HostBinding('class') classes = this.hostClass;

    constructor() {
    }

}
