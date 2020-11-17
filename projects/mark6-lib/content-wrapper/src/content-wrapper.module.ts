import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6ContentWrapperComponent} from "./content-wrapper.component";
import {ResolveSpaceClassPipe} from "./resolve-space-class.pipe";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Mark6ContentWrapperComponent,
        ResolveSpaceClassPipe
    ],
    exports: [
        Mark6ContentWrapperComponent
    ]
})
export class Mark6ContentWrapperModule {
}
