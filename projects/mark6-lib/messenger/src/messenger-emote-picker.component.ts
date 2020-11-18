import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mark6-messenger-emote-picker',
  templateUrl: './messenger-emote-picker.component.html',
  styleUrls: ['./messenger-emote-picker.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerEmotePickerComponent {

    private hostClass = 'mark6-messenger-emote-picker';
    @HostBinding('class') classes = this.hostClass;

    constructor() {
    }

}
