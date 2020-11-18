import {Component, Input, Output, EventEmitter, ViewEncapsulation, HostBinding} from '@angular/core';
import {MessengerInterface} from "./messenger.interface";

@Component({
    selector: 'mark6-messenger-messages',
    templateUrl: './messenger-messages.component.html',
    styleUrls: ['./messenger-messages.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessagesComponent {

    @Input() public messages: MessengerInterface[] = null;
    @Input() public type: 'single' | 'group';
    @Input() public avatarMe = false;
    @Input() public avatarOthers = false;
    @Output() timeToggled = new EventEmitter<boolean>();

    private hostClass = 'mark6-messenger-messages';
    @HostBinding('class') classes = this.hostClass;

    public showTimestamp = {};

    toggleTimestamp(index) {
        index.showTimestamp = !!!index.showTimestamp ? true : !index.showTimestamp;
        this.timeToggled.emit(index.showTimestamp);
    }

    trackByMessageId(index, message) {
        return message.key;
    }

}
