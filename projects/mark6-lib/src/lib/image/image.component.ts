import {
    Component,
    HostBinding,
    Input,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
    selector: 'mark6-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
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


    @Input() public srcSet: string;
    @Input() public alt: string;
    @Input() public addClass = '';
    @Input() public backgroundColor = '#404040';
    @Input() public emitSize = false;
    @Input() public preview: string;
    @Input() public failedSrc = 'https://dummyimage.com/512x512/404040/fff.png';
    @Input() public src: string;

    @Output() public imageDimensions = new EventEmitter();
    @Output() public failed = new EventEmitter<void>();
    @Output() public loaded = new EventEmitter<void>();

    @ViewChild('imgPreview', { static: false }) previewImg: ElementRef;

    @HostBinding('class') classes;

    /* Image loading state */
    public state: 'loading' | 'success' | 'failed' = 'loading';

    constructor() {
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.addClass) { this.classes = changes.addClass.currentValue; }
        if (changes.src && changes.src.currentValue) { this.state = 'loading'; }
    }
    loadSuccess() {
        this.state = 'success';
        this.loaded.next();
    }

    loadFailed() {
        this.state = 'failed';
        this.failed.next();
    }

    previewLoaded() {
        if (this.emitSize) {
            const { offsetWidth, offsetHeight } = this.previewImg.nativeElement;
            this.imageDimensions.emit({ height: offsetHeight, width: offsetWidth });
        }
    }

}
