import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-reply-preview',
    templateUrl: './messenger-reply-preview.component.html',
    styleUrls: ['./messenger-reply-preview.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerReplyComponent {

    private hostClass = 'mark6-messenger-reply-preview';
    @HostBinding('class') classes = this.hostClass;

    @Input() public text: String;
    @Input() public userName: String;
    @Input() public color: String;


}
