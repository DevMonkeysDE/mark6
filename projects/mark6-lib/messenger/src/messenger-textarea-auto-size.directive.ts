import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
    selector: 'textarea[Mark6MessengerAutoSize]',
    // TODO :host is deprecated. solve it in the modern way
    host: {
        'rows': '1',
        'style': 'overflow: hidden'
    }
})
export class Mark6MessengerAutoSizeDirective implements AfterViewInit {

    // TODO ALEX - Please add Max count for row Auto grow
    constructor(private elem: ElementRef) {
    }

    public ngAfterViewInit() {
        this.resize();
    }

    @HostListener('input')
    public resize() {
        const textArea = this.elem.nativeElement as HTMLTextAreaElement;
        // Reset textArea height to auto that correctly calculate the new height
        textArea.style.height = 'auto';
        // Set new height
        textArea.style.height = `${textArea.scrollHeight}px`;
    }
}
