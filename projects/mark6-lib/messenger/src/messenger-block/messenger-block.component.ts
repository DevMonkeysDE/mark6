import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-block',
    templateUrl: './messenger-block.component.html',
    styleUrls: ['./messenger-block.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerBlockComponent {

    private hostClass = 'mark6-messenger-block';
    @HostBinding('class') classes = this.hostClass;

}
