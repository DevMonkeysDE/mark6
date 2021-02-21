import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

// Modules
import {Mark6ImageModule} from '@devmonkeys/mark6/image';

// Components
import {Mark6MessengerComponent} from './messenger.component';
import {Mark6MessengerActionsComponent} from './messenger-actions.component';
import {Mark6MessengerContentComponent} from './messenger-content.component';
import {Mark6MessengerEmotePickerComponent} from './messenger-emote-picker.component';
import {Mark6MessengerFooterComponent} from './messenger-footer.component';
import {Mark6MessengerHeaderComponent} from './messenger-header.component';
import {Mark6MessengerMessageComponent} from './messenger-message.component';
import {Mark6MessengerMessageGroupComponent} from './messenger-message-group.component';
import {Mark6MessengerMessagesComponent} from './messenger-messages.component';
import {Mark6MessengerTextarea} from './messenger-textarea.component';

// Pipes
import {MessengerMessageClassPipe} from './messenger-message-class.pipe';
import {MessengerCalendarDatePipe} from './messenger-message-calendar-date.pipe';
import {MessengerMessageMagicPipe} from './messenger-message-magic.pipe';

// Directives
import {Mark6MessengerAutoSizeDirective} from './messenger-textarea-auto-size.directive';
import {Mark6MessengerEmitItemHeightDirective} from './messenger-emit-item-height.directive';

// Services
import {Mark6MessengerService} from './messenger.service';


// Declare Components here:
const sharedComponents = [
    Mark6MessengerComponent,
    Mark6MessengerActionsComponent,
    Mark6MessengerContentComponent,
    Mark6MessengerEmotePickerComponent,
    Mark6MessengerFooterComponent,
    Mark6MessengerHeaderComponent,
    Mark6MessengerMessageComponent,
    Mark6MessengerMessageGroupComponent,
    Mark6MessengerMessagesComponent,
    Mark6MessengerTextarea,
];

// Declare Pipes here:
const sharedPipes = [
    MessengerMessageClassPipe,
    MessengerCalendarDatePipe,
    MessengerMessageMagicPipe,
];

const sharedDirectives = [
    Mark6MessengerAutoSizeDirective,
    Mark6MessengerEmitItemHeightDirective
];


@NgModule({
    imports: [
        CommonModule,
        Mark6ImageModule,
    ],
    declarations: [
        sharedComponents,
        sharedPipes,
        sharedDirectives
    ],
    exports: [
        sharedComponents,
        sharedDirectives
    ],
    providers: [DatePipe, Mark6MessengerService]
})
export class Mark6MessengerModule {
}
