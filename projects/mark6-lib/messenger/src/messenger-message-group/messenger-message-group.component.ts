import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-group',
    templateUrl: './messenger-message-group.component.html',
    styleUrls: ['./messenger-message-group.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Mark6MessengerMessageGroupComponent {

    @Input() private direction: 'left' | 'right' = 'left';

    // TODO Alex - Direction class is not working
    private hostClass = `mark6-messenger-message-group direction-${this.direction}`;
    @HostBinding('class') classes = this.hostClass;

}
