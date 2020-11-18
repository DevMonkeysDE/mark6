import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-actions',
    templateUrl: './messenger-actions.component.html',
    styleUrls: ['./messenger-actions.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerActionsComponent {

    private hostClass = 'mark6-messenger-actions';
    @Input() public position = 'right'; // TODO @Alex - Position is not working if i change it in site
    @HostBinding('class') classes = this.hostClass + ' ' + 'position-' + this.position;



    // Maybe solve this smarter
/*    @Input() public position = 'right';
    @HostBinding('style.order') get h() {
        if (this.position === 'left') {
            return 1;
        }
        if (this.position === 'right') {
            return 3;
        }
    }*/

    constructor() {
    }

}
