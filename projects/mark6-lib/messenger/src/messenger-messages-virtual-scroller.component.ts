import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, Output, EventEmitter, ViewEncapsulation, HostBinding, ViewChild, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Inject, Self } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessengerInterface } from "./messenger.interface";
import { Mark6MessengerService } from './messenger.service';

@Component({
    selector: 'mark6-messenger-messages-virtual-scroller',
    templateUrl: './messenger-messages-virtual-scroller.component.html',
    styleUrls: ['./messenger-messages-virtual-scroller.component.scss'],
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
export class Mark6MessengerMessagesVirtualScrollerComponent implements AfterViewInit {
    @Input() public messages: MessengerInterface[] = null;
    @Input() public type: 'single' | 'group';
    @Input() public avatarMe = false;
    @Input() public avatarOthers = false;
    @Output() timeToggled = new EventEmitter<boolean>();

    private hostClass = 'mark6-messenger-messages';
    @HostBinding('class') classes = this.hostClass;


    public showTimestamp = {};
    maxHeight: Observable<number>;
    constructor(private messengerService: Mark6MessengerService, private ref: ChangeDetectorRef) {
        this.maxHeight = messengerService.getMaxHeight().pipe(tap((f) => {

        }));
    }
    ngAfterViewInit() {
    }
    toggleTimestamp(index) {
        this.showTimestamp[index] = !!!this.showTimestamp[index] ? true : !this.showTimestamp[index];
        this.timeToggled.emit(this.showTimestamp[index]);
    }

    trackByMessageId(index, message) {
        return message.key;
    }

}
