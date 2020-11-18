import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component, Input, Output, EventEmitter, ViewEncapsulation, HostBinding} from '@angular/core';
import {MessengerInterface} from "./messenger.interface";

@Component({
    selector: 'mark6-messenger-messages',
    templateUrl: './messenger-messages.component.html',
    styleUrls: ['./messenger-messages.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations:[
        trigger('fade', [
          state('in', style({ opacity: 1 })),
          transition(':enter', [ style({ opacity: 0 }), animate(250) ]),
          transition(':leave', animate(250, style({ opacity: 0 })))
        ])
      ]
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
        this.showTimestamp[index] = !!!this.showTimestamp[index] ? true : !this.showTimestamp[index];
        this.timeToggled.emit(this.showTimestamp[index]);
    }

    trackByMessageId(index, message) {
        return message.key;
    }

}
