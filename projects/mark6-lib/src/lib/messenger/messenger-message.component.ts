import {Component, Input} from '@angular/core';
import {MessengerService} from "./messenger.service";

@Component({
    selector: 'mark6-messenger-message',
    templateUrl: './messenger-message.component.html',
    styleUrls: ['./messenger-message.component.scss']
})
export class Mark6MessengerMessageComponent {

    @Input() public messages = null;
    @Input() public type: 'single' | 'group';
    @Input() public avatarMe = false;
    @Input() public avatarOthers = false;

    constructor(private uiService: MessengerService) {
    }

    showTime(message) {
        message.showTime = !!!message.showTime ? true : !message.showTime;
        this.uiService.handleScrollPosittion();
    }

    trackByMessageId(index, message) {
        return message.key;
    }

}
