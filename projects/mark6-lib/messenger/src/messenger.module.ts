import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Modules
import {Mark6ImageModule} from '@devmonkeys/mark6/image';

// Components
import {Mark6MessengerComponent} from "./messenger.component";
import {Mark6MessengerMessagesComponent} from "./messenger-messages.component";
import {Mark6MessengerHeaderComponent} from "./messenger-header.component";
import {Mark6MessengerContentComponent} from "./messenger-content.component";
import {Mark6MessengerFooterComponent} from "./messenger-footer.component";
import {Mark6MessengerEmotePickerComponent} from './messenger-emote-picker.component';

// Pipes
import {MessengerMessageClassPipe} from "./messenger-message-class.pipe";
import {MessengerCalendarDatePipe} from "./messenger-message-calendar-date.pipe";
import {Mark6MessengerTextarea} from "./messenger-textarea.component";


@NgModule({
    imports: [
        CommonModule,
        Mark6ImageModule
    ],
    declarations: [
        Mark6MessengerComponent,
        Mark6MessengerContentComponent,
        Mark6MessengerEmotePickerComponent,
        Mark6MessengerFooterComponent,
        Mark6MessengerHeaderComponent,
        Mark6MessengerMessagesComponent,
        Mark6MessengerTextarea,
        // Pipes
        MessengerMessageClassPipe,
        MessengerCalendarDatePipe
    ],
    exports: [
        Mark6MessengerComponent,
        Mark6MessengerContentComponent,
        Mark6MessengerEmotePickerComponent,
        Mark6MessengerFooterComponent,
        Mark6MessengerHeaderComponent,
        Mark6MessengerMessagesComponent,
        Mark6MessengerTextarea
    ]
})
export class Mark6MessengerModule {
}
