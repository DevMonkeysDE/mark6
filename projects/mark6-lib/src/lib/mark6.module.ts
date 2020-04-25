import {NgModule} from '@angular/core';
import {Mark6CropperModule} from './cropper/cropper.module';
import {Mark6EditableImageModule} from './editable-image/editable-image.module';
import {Mark6ImageModule} from './image/image.module';


@NgModule({
    exports: [
        Mark6CropperModule,
        Mark6EditableImageModule,
        Mark6ImageModule
    ]
})
export class Mark6Module {
}
