import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerComponent {

    private hostClass = 'mark6-messenger';
    @HostBinding('class') classes = this.hostClass;

    constructor() {
    }

}
