import {
    Component,
    HostBinding,
    Input,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter,
    ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
    selector: 'mark6-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('fadeIn', [
            state('loading', style({ opacity: 0 })),
            transition('* => success', [
                animate('300ms ease-in', style({ opacity: 1 }))
            ])
        ]),
        trigger('fadeOut', [
            state('loading', style({ opacity: 1 })),
            transition('* => success', [
                animate('300ms ease-in', style({ opacity: 0 }))
            ]),
            state('success', style({ opacity: 0 })),
        ])
    ]
})
export class Mark6ImageComponent implements OnChanges {

    private hostClass = 'mark6-image';
    @HostBinding('class') classes = this.hostClass;

    @Input() public backgroundColor = '#404040';
    @HostBinding('style.background') hostBackgroundColor = this.backgroundColor;

    @Input() public backgroundImage: string;
    @Input() public aspectRatio = this.parseRation('1 / 1');
    @Input() public srcSet: string;
    @Input() public alt: string;
    @Input() public addClass: string;
    @Input() public default: string;
    @Input() public emitSize = false;
    @Input() public preview: string;
    @Input() public failedSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0+A8AAYUBQcxKiF0AAAAASUVORK5CYII=';
    @Input() public src: string;

    @Output() public failed = new EventEmitter<void>();
    @Output() public loaded = new EventEmitter<void>();

    @ViewChild('imgPreview', { static: false }) previewImg: ElementRef;

    /* Image loading state */
    public state: 'loading' | 'success' | 'failed' = 'loading';
    public aspectRatioNumber;

    constructor(private ref: ChangeDetectorRef) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.addClass) {
            this.classes = this.hostClass + ' ' + changes.addClass.currentValue;
        }
        if (changes.src && changes.src.currentValue) {
            this.state = 'loading';
        }
        if (changes.default && changes.default.currentValue && (changes.src && !!!changes.src.currentValue)) {
            this.src = changes.default.currentValue;
            this.state = 'loading';
        }
        if (changes.aspectRatio && changes.aspectRatio.currentValue) {
            this.aspectRatioNumber = this.parseRation(changes.aspectRatio.currentValue);
        }
        this.ref.detectChanges();
    }


    loadSuccess() {
        this.state = 'success';
        this.loaded.next();
        this.ref.detectChanges();
    }

    loadFailed() {
        this.state = 'failed';
        this.failed.next();
        this.ref.detectChanges();
    }
    private parseRation(value) {
        let seperator;
        if (value.includes('/')) { seperator = '/'; }
        else if (value.includes(':')) { seperator = ':'; }
        const values = value.split(seperator);
        if (values.length === 2) {
            const w = +values[0];
            const h = +values[1];
            return Math.floor(w / h);
        }
    }
}
