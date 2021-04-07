import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Directives
import {Mark6TextareaAutosizeDirective} from './textarea-autosize.directive';

// Declare Components here:
const directives = [
    Mark6TextareaAutosizeDirective
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        directives
    ],
    exports: [
        directives
    ],
    providers: []
})
export class Mark6DirectivesModule {
}
