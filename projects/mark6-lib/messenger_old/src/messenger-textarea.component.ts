import {Component, ElementRef, HostBinding, HostListener, Input, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-messenger-textarea',
    templateUrl: './messenger-textarea.component.html',
    styleUrls: ['./messenger-textarea.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerTextarea {

    private hostClass = 'mark6-messenger-textarea';
    @HostBinding('class') classes = this.hostClass;


    // Make this hostClick working
    @HostListener('click') onClick() {
        // this.focusTextArea();
    }

    focusTextArea() {
        // this.someInput.nativeElement.focus();
    }

}
