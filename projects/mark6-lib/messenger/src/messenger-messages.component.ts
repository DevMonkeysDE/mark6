import { animate, state, style, transition, trigger } from '@angular/animations';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    HostBinding,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ViewChild,
    OnInit,
    AfterViewInit,
    ElementRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { transform } from './messenger.helper';
import { InternalMessengerInterface, MessengerInterface } from "./messenger.interface";
import { Mark6MessengerService } from './messenger.service';

@Component({
    selector: 'mark6-messenger-messages',
    templateUrl: './messenger-messages.component.html',
    styleUrls: ['./messenger-messages.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fade', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [style({ opacity: 0 }), animate(250)]),
            transition(':leave', animate(250, style({ opacity: 0 })))
        ])
    ]
})
export class Mark6MessengerMessagesComponent implements AfterViewInit {
    @Input() public set messages(values: MessengerInterface[]) {
        console.log(values);
        this._messages = transform(values);
        // this.bottomRef.nativeElement.scrollIntoView();
    }
    @Input() public type: 'single' | 'group';
    @Input() public avatarMe = false;
    @Input() public avatarOthers = false;
    @Output() timeToggled = new EventEmitter<boolean>();
    public _messages: InternalMessengerInterface[] = null;
    private hostClass = 'mark6-messenger-messages';
    @HostBinding('class') classes = this.hostClass;
    @ViewChild('bottom') bottomRef: ElementRef;
    @ViewChild('top') topRef: ElementRef;
    public showTimestamp = {};
    maxHeight: Observable<number>;

    constructor(private messengerService: Mark6MessengerService, private ref: ChangeDetectorRef) {
        this.maxHeight = messengerService.getMaxHeight().pipe(tap((f) => {

        }));
    }
    ngAfterViewInit() {
        const b = this.bottomRef.nativeElement as HTMLElement;
        const t = this.topRef.nativeElement as HTMLElement;
        b.scrollIntoView({behavior:'smooth'});
        setTimeout(() => { t.scrollIntoView({ behavior: 'smooth' }); }, 5000);
    }
    toggleTimestamp(index) {
        this.showTimestamp[index] = !!!this.showTimestamp[index] ? true : !this.showTimestamp[index];
        this.timeToggled.emit(this.showTimestamp[index]);
    }

    trackByMessageId(index, message) {
        return message.key;
    }

}
