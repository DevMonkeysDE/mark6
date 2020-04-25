import { Component, ViewEncapsulation, ElementRef, ViewChild, Input, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';
import Cropper from 'cropperjs';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

const defaultOptions: Cropper.Options = {
    // All options at https://github.com/fengyuanchen/cropperjs#options
    aspectRatio: 1 / 1,
    movable: false,
    scalable: false,
    zoomable: false,
    viewMode: 1
};

export interface ImageCropperResult {
    imageData: Cropper.ImageData;
    cropBoxData: Cropper.CropBoxData;
    data: Cropper.Data; // this are the data that will be used to perform a server side cropping for thumbnails
    canvas: HTMLCanvasElement; // Canvas element representing the cropped area can be converted to base64 or blob with toDataURL();
}

@Component({
    selector: 'mark6-cropper',
    exportAs: 'mark6Cropper',
    templateUrl: './cropper.component.html',
    styleUrls: ['./cropper.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Mark6CropperComponent implements AfterViewInit, OnDestroy {

    @ViewChild('image') image: ElementRef;

    @Input() imageUrl: any;
    @Input() options: Cropper.Options;

    @Output() cropEnd = new EventEmitter<ImageCropperResult>();
    @Output() ready = new EventEmitter();

    public isLoading = true;
    public cropper: Cropper;
    public imageElement: HTMLImageElement;

    private cropObservable: Subscription;

    ngOnDestroy() {
        // unsubscribe
        this.cropObservable.unsubscribe();
    }

    ngAfterViewInit() {
        // listen to the crop event as observable in order to easy debounce and throttle output event
        this.cropObservable = fromEvent(this.image.nativeElement, 'crop')
            .pipe(
                debounceTime(200),
                distinctUntilChanged(),
                tap(() => this._cropend())
            ).subscribe();

        // event listener when the cropper is ready
        this.image.nativeElement.addEventListener('ready', () => this._ready());

        // Set cropperjs
        setTimeout(() => {
            const options = { ...defaultOptions, ...this.options };
            this.cropper = new Cropper(this.image.nativeElement, options);
        }, 0);
    }

    /**
     * Image load error
     * @param event
     */
    imageLoadError(event: any) {
        // Unset loading state
        this.isLoading = false;
    }

    private _cropend() {
        this.cropEnd.emit({
            imageData: this.cropper.getImageData(),
            cropBoxData: this.cropper.getCropBoxData(),
            data: this.cropper.getData(),
            canvas: this.cropper.getCroppedCanvas()
        });
    }

    private _ready() {
        // Emit ready
        if (this.ready) {
            this.ready.emit(true);
        }
        // Unset loading state
        this.isLoading = false;
    }

}
