import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    Mark6DropDownComponent,
    Mark6DropDownContentComponent,
    Mark6DropDownOriginComponent,
    Mark6DropDownTriggerComponent,
    Mark6DropDownCloseTriggerDirective
} from './drop-down.component';
import {Mark6DropDownService} from './drop-down.service';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Mark6DropDownComponent,
        Mark6DropDownTriggerComponent,
        Mark6DropDownOriginComponent,
        Mark6DropDownContentComponent,
        Mark6DropDownCloseTriggerDirective
    ],
    declarations: [
        Mark6DropDownComponent,
        Mark6DropDownTriggerComponent,
        Mark6DropDownOriginComponent,
        Mark6DropDownContentComponent,
        Mark6DropDownCloseTriggerDirective
    ],
    providers: [
        Mark6DropDownService
    ]
})


export class Mark6DropDownModule {
}
