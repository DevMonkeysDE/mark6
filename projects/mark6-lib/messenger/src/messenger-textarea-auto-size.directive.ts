import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
    selector: 'textarea[Mark6MessengerAutoSize]'
})
export class Mark6MessengerAutoSizeDirective implements AfterViewInit {

    // @Input() maxHeight = 200;
    @Input() maxRows = 5;
    constructor(private elem: ElementRef) {
        elem.nativeElement.style.overflow = 'hidden';
        elem.nativeElement.rows = '1';

    }

    public ngAfterViewInit() {
        this.resize();
    }

    @HostListener('input')
    public resize() {
        this._cacheTextareaLineHeight();

        const textArea = this.elem.nativeElement as HTMLTextAreaElement;
        // Reset textArea height to auto that correctly calculate the new height
        // Set new height
        if (textArea.scrollHeight < ((this.maxRows + 1)  * this._cachedLineHeight)) {
            textArea.style.height = 'auto';
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    }

    private _cacheTextareaLineHeight(): void {

        // Use a clone element because we have to override some styles.
        let textareaClone = this.elem.nativeElement.cloneNode(false) as HTMLTextAreaElement;
        textareaClone.rows = 1;

        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';

        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';

        this.elem.nativeElement.parentNode!.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        this.elem.nativeElement.parentNode!.removeChild(textareaClone);
    }
    private _cachedLineHeight: number;
}
