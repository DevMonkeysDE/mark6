import {NgModule} from '@angular/core';
import {Mark6ImageModule} from "./image/image.module";
import {Mark6CropperModule} from "./cropper/cropper.module";
import {Mark6DropDownModule} from "./drop-down/drop-down.module";
import {Mark6EditableImageModule} from "./editable-image/editable-image.module";


@NgModule({
    exports: [
        Mark6CropperModule,
        Mark6DropDownModule,
        Mark6EditableImageModule,
        Mark6ImageModule
    ]
})
export class Mark6LibModule {
}
