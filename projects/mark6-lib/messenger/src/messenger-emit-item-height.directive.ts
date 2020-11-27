import { AfterViewChecked, Directive, ElementRef } from '@angular/core';
import { Mark6MessengerService } from './messenger.service';

@Directive({ selector: '[emitItemHeight]' })
export class Mark6MessengerEmitItemHeightDirective implements AfterViewChecked {

    constructor(private el: ElementRef, private messengerService: Mark6MessengerService) { }
    ngAfterViewChecked() {
        this.messengerService.newItemHeight(this.el.nativeElement.offsetHeight);
    }
}