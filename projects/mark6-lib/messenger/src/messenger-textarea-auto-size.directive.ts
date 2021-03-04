import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
    selector: 'textarea[Mark6MessengerAutoSize]'
})
export class Mark6MessengerAutoSizeDirective implements AfterViewInit {

    @Input() maxHeight = 200;
    // TODO ALEX - Please add Max count for row Auto grow
    constructor(private elem: ElementRef) {
        elem.nativeElement.style.overflow = 'hidden';
        elem.nativeElement.rows = '1';

    }

    public ngAfterViewInit() {
        this.resize();
    }

    @HostListener('input')
    public resize() {
        const textArea = this.elem.nativeElement as HTMLTextAreaElement;
        // Reset textArea height to auto that correctly calculate the new height
        // Set new height
        if (textArea.scrollHeight < this.maxHeight) {
            textArea.style.height = 'auto';
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    }
}
