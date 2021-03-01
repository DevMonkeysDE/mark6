import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-actions',
    templateUrl: './messenger-actions.component.html',
    styleUrls: ['./messenger-actions.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerActionsComponent {

    @Input() private set position(value: 'left' | 'right') {
        this.classes = this.hostClass + ` mark6-messenger-actions-position-${value || 'left'}`;
    }

    private hostClass = `mark6-messenger-actions`;
    @HostBinding('class') classes = `mark6-messenger-actions mark6-messenger-actions-position-left`;

}
