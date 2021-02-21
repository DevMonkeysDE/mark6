import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {MessengerMessageInterface} from './messenger.interface';

@Component({
    selector: 'mark6-messenger-message',
    templateUrl: './messenger-message.component.html',
    styleUrls: ['./messenger-message.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fade', [
            state('in', style({opacity: 1})),
            transition(':enter', [style({opacity: 0}), animate(250)]),
            transition(':leave', animate(250, style({opacity: 0})))
        ])
    ]
})
export class Mark6MessengerMessageComponent {
    @Input() public message: MessengerMessageInterface;
    @Input() public avatarMe = false;
    @Input() public avatarOthers = false;
    @Input() public type: 'single' | 'group';
}
