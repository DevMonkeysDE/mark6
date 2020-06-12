import {NgModule} from '@angular/core';
import {Mark6CropperModule} from './cropper/cropper.module';
import {Mark6EditableImageModule} from './editable-image/editable-image.module';
import {Mark6ImageModule} from './image/image.module';
import {Mark6MessengerModule} from './messenger/messenger.module';

@NgModule({
    exports: [
        Mark6CropperModule,
        Mark6EditableImageModule,
        Mark6ImageModule,
        Mark6MessengerModule
    ],
    declarations: []
})
export class Mark6Module {
}
