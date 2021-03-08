import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
    selector: 'textarea[Mark6MessengerAutoSize]'
})
export class Mark6MessengerAutoSizeDirective implements AfterViewInit {

    @Input() maxRows = 6;
    private _cachedLineHeight: number;

    constructor(private elem: ElementRef) {
        elem.nativeElement.rows = '1';
    }

    public ngAfterViewInit() {
        this.resize();
    }

    @HostListener('input')
    public resize() {
        this._cacheTextareaLineHeight();
        const textArea = this.elem.nativeElement as HTMLTextAreaElement;
        if (textArea.scrollHeight < ((this.maxRows + 1)  * this._cachedLineHeight)) {
            textArea.style.height = 'auto';
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    }

    private _cacheTextareaLineHeight(): void {
        let textareaClone = this.elem.nativeElement.cloneNode(false) as HTMLTextAreaElement;
        textareaClone.rows = 1;
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        textareaClone.style.overflow = 'hidden';
        this.elem.nativeElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        this.elem.nativeElement.parentNode.removeChild(textareaClone);
    }

}
