import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6MessengerComponent} from "./messenger.component";
import {MessengerMessageClassPipe} from "./messenger-message-class.pipe";
import {MessengerCalendarDatePipe} from "./messenger-message-calendar-date.pipe";
import {Mark6MessengerMessagesComponent} from "./messenger-messages.component";
import {Mark6MessengerContentComponent} from "./messenger-content.component";
import {Mark6ImageModule} from "../image/image.module";

@NgModule({
    imports: [
        CommonModule,
        Mark6ImageModule
    ],
    declarations: [
        Mark6MessengerComponent,
        Mark6MessengerMessagesComponent,
        Mark6MessengerContentComponent,
        // Pipes
        MessengerMessageClassPipe,
        MessengerCalendarDatePipe
    ],
    exports: [
        Mark6MessengerComponent,
        Mark6MessengerMessagesComponent,
        Mark6MessengerContentComponent,
        // Pipes
        MessengerMessageClassPipe,
        MessengerCalendarDatePipe
    ]
})
export class Mark6MessengerModule {
}
