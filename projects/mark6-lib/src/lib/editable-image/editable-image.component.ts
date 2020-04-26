import { Component, HostBinding, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'mark6-editable-image',
    exportAs: 'mark6EditableImage',
    templateUrl: './editable-image.component.html',
    styleUrls: ['./editable-image.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6EditableImageComponent implements OnChanges {

    @HostBinding('class') classes = 'mark6-editable-image';

    @HostBinding('class.uploading') isUploading;

    @Input() public editMode = false;
    @Input() public uploadProgress = null;
    @Input() public uploadProgressColor = 'rgba(0, 0, 0, 0.64)';

    ngOnChanges(changes: SimpleChanges) {
        if (changes.uploadProgress) {
            this.isUploading = changes.uploadProgress.currentValue > 0;
        }
    }
}


@Component({
    selector: 'mark6-editable-image-content',
    exportAs: 'mark6EditableImageContent',
    template: '<ng-content></ng-content>',
    styles: ['.mark6-editable-image-content {width: 100%; top: 0; left: 0; z-index: 3; position: absolute;}'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6EditableImageContentComponent {
    @HostBinding('class') classes = 'mark6-editable-image-content';
}


@Component({
    selector: 'mark6-editable-image-content-edit',
    exportAs: 'mark6EditableImageContentEdit',
    template: '<ng-content></ng-content>',
    styles: ['.mark6-editable-image-content-edit {width: 100%; top: 0; left: 0; z-index: 3; position: absolute;}'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6EditableImageContentEditComponent {
    @HostBinding('class') classes = 'mark6-editable-image-content-edit';
}
