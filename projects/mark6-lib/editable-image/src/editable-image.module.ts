import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6EditableImageComponent, Mark6EditableImageContentComponent, Mark6EditableImageContentEditComponent} from './editable-image.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        Mark6EditableImageComponent,
        Mark6EditableImageContentComponent,
        Mark6EditableImageContentEditComponent
    ],
    declarations: [
        Mark6EditableImageComponent,
        Mark6EditableImageContentComponent,
        Mark6EditableImageContentEditComponent
    ]
})


export class Mark6EditableImageModule {
}
