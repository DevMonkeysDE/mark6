import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-reply',
    templateUrl: './messenger-reply.component.html',
    styleUrls: ['./messenger-reply.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerReplyComponent {

    private hostClass = 'mark6-messenger-reply';
    @HostBinding('class') classes = this.hostClass;

    @Input() public text: String;
    @Input() public userName: String;
    @Input() public color: String;


}
