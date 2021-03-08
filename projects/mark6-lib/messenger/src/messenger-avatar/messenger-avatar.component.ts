import {Component, HostBinding,  ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-avatar',
    templateUrl: './messenger-avatar.component.html',
    styleUrls: ['./messenger-avatar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerAvatarComponent {

    private hostClass = 'mark6-messenger-avatar';
    @HostBinding('class') classes = this.hostClass;

}
