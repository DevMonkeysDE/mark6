import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {MessengerMessageInterface} from '../messenger.interface';

@Component({
    selector: 'mark6-messenger-message',
    templateUrl: './messenger-message.component.html',
    styleUrls: ['./messenger-message.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageComponent {

    private hostClass = 'mark6-messenger-message';
    @HostBinding('class') classes = this.hostClass;

    @Input() public message: MessengerMessageInterface;
    /* TODO ALEX - Optimize the message. Code stolen from here: https://github.com/angular/components/blob/db6511b40dadd614f0bfb22e74f70b19066f2554/src/material/progress-bar/progress-bar.ts#L133
    @Input()
    get message(): MessengerMessageInterface { return this._message || ({message: 'undefined', created_at: new Date().toISOString()} as MessengerMessageInterface); }
    set message(msg: MessengerMessageInterface) { this._message = msg; }
    private _message: MessengerMessageInterface;
    */

    /*@Input()
    get message(): number { return this._message; }
    set message(v: number) {
        this._message = clamp(coerceNumberProperty(v) || 0);
    }
    private _message: MessengerMessageInterface = { return this._message || {
        message: 'undefined', created_at: new Date().toISOString()};
    }*/

}
