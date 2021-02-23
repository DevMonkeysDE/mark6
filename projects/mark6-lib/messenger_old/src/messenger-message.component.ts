import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { InternalMessengerInterface } from './messenger.interface';

@Component({
    selector: 'mark6-messenger-message',
    templateUrl: './messenger-message.component.html',
    styleUrls: ['./messenger-message.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Mark6MessengerMessageComponent {
    @Input() public message: string;
}
