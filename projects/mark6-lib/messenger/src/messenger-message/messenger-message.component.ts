import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mark6-messenger-message',
    templateUrl: './messenger-message.component.html',
    styleUrls: ['./messenger-message.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageComponent {

    private hostClass = 'mark6-messenger-message';
    @HostBinding('class') classes = this.hostClass;

    @Input() public text: String;
    @Input() public createdAt: Date;
    @Input() public userName: String;
}
