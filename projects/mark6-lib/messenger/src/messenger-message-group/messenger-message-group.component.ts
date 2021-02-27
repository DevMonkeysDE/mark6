import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mark6-messenger-message-group',
    templateUrl: './messenger-message-group.component.html',
    styleUrls: ['./messenger-message-group.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Mark6MessengerMessageGroupComponent {

    @Input() private set direction(value: 'left' | 'right') {
         this.classes = this.hostClass + ` direction-${value || 'left'}`;
    }

    // TODO Alex - Direction class is not working
    private hostClass = `mark6-messenger-message-group`;
    @HostBinding('class') classes = `mark6-messenger-message-group direction-left`;

}
