import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-content',
    templateUrl: './messenger-content.component.html',
    styleUrls: ['./messenger-content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerContentComponent {

    private hostClass = 'mark6-messenger-content';
    @HostBinding('class') classes = this.hostClass;

    constructor() {
    }

}
