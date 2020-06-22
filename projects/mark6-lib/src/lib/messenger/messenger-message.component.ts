import {Component, Input, Output, EventEmitter} from '@angular/core';

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
    @Output() timeToggled = new EventEmitter<boolean>();


    showTime(message) {
        message.showTime = !!!message.showTime ? true : !message.showTime;
        this.timeToggled.emit(message.showTime);
    }

    trackByMessageId(index, message) {
        return message.key;
    }

}
