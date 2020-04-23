import {
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter
} from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
    selector: 'app-image',
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
export class Mark6ImageComponent {

    private _src: string;

    @Input() public srcSet: string;
    @Input() public alt: string;
    @Input() public addClass = '';
    @Input() public backgroundColor = '#404040';
    @Input() public emitSize = false;
    @Input() public preview: string;
    @Input() public failedSrc = 'https://dummyimage.com/512x512/404040/fff.png';
    @Input() public set src(value: string) {
        this._src = value;
        this.state = 'loading';
    }
    public get src() {
        return this._src;
    }
    @Output() public imageDimensions = new EventEmitter();
    @Output() public onFailed = new EventEmitter<void>();
    @Output() public onLoaded = new EventEmitter<void>();

    @ViewChild('imgPreview', { static: false }) previewImg: ElementRef;

    @HostBinding('class') get classes() {
        return this.addClass;
    }

    /* Image loading state */
    public state: 'loading' | 'success' | 'failed' = 'loading';

    constructor(private _cd: ChangeDetectorRef) {
    }

    loadSuccess() {
        this.state = 'success';
        this._cd.detectChanges();
        this.onLoaded.next();
    }

    loadFailed() {
        this.state = 'failed';
        this._cd.detectChanges();
        this.onFailed.next();
    }

    previewLoaded() {
        if (this.emitSize) {
            const { offsetWidth, offsetHeight } = this.previewImg.nativeElement;
            this.imageDimensions.emit({ height: offsetHeight, width: offsetWidth });
        }
    }

}
