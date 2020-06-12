import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6MessengerComponent} from "./messenger.component";
import {MessengerMessageClassPipe} from "./messenger-message-class.pipe";
import {MessengerCalendarDatePipe} from "./messenger-message-calendar-date.pipe";
import {Mark6MessengerMessageComponent} from "./messenger-message.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Mark6MessengerComponent,
        Mark6MessengerMessageComponent,
        // Pipes
        MessengerMessageClassPipe,
        MessengerCalendarDatePipe
    ],
    exports: [
        Mark6MessengerComponent,
        Mark6MessengerMessageComponent,
        // Pipes
        MessengerMessageClassPipe,
        MessengerCalendarDatePipe
    ]
})
export class Mark6MessengerModule {
}
