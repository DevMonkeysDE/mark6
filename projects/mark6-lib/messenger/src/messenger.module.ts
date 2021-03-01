import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Modules
import {Mark6ImageModule} from '@devmonkeys/mark6/image';

// Components
import {Mark6MessengerComponent} from './messenger/messenger.component';
import {Mark6MessengerAvatarComponent} from './messenger-avatar/messenger-avatar.component';
import {Mark6MessengerBlockComponent} from './messenger-block/messenger-block.component';
import {Mark6MessengerBlockDateComponent} from './messenger-block-date/messenger-block-date.component';
import {Mark6MessengerContentComponent} from './messenger-content/messenger-content.component';
import {Mark6MessengerMessageComponent} from './messenger-message/messenger-message.component';
import {Mark6MessengerMessageGroupComponent} from './messenger-message-group/messenger-message-group.component';
import {Mark6MessengerHeaderComponent} from './messenger-header/messenger-header.component';
import {Mark6MessengerFooterComponent} from './messenger-footer/messenger-footer.component';
import {Mark6MessengerAutoSizeDirective} from './messenger-textarea-auto-size.directive';
import {Mark6MessengerTextareaComponent} from './messenger-textarea/messenger-textarea.component';
import {Mark6MessengerActionsComponent} from './messenger-actions/messenger-actions.component';

// import { Mark6MessengerMessagesComponent } from "./messenger-messages.component";
// import { Mark6MessengerHeaderComponent } from "./messenger-header.component";
// import { Mark6MessengerContentComponent } from "./messenger-content.component";
// import { Mark6MessengerFooterComponent } from "./messenger-footer.component";
// import { Mark6MessengerEmotePickerComponent } from './messenger-emote-picker.component';

// Pipes
// import { MessengerMessageClassPipe } from "./messenger-message-class.pipe";
// import { MessengerCalendarDatePipe } from "./messenger-message-calendar-date.pipe";
// import { Mark6MessengerTextarea } from "./messenger-textarea.component";

// Directives
// import { Mark6MessengerAutoSizeDirective } from "./messenger-textarea-auto-size.directive";
// import { Mark6MessengerActionsComponent } from "./messenger-actions.component";
// import { MessengerMessageMagicPipe } from './messenger-message-magic.pipe';
// import { Mark6MessengerEmitItemHeightDirective } from './messenger-emit-item-height.directive';
// import { Mark6MessengerService } from './messenger.service';
// import { Mark6MessengerMessageComponent } from './messenger-message.component';


// Declare Components here:
const messengerComponents = [
    Mark6MessengerComponent,
    Mark6MessengerActionsComponent,
    Mark6MessengerAvatarComponent,
    Mark6MessengerBlockComponent,
    Mark6MessengerBlockDateComponent,
    Mark6MessengerContentComponent,
    Mark6MessengerFooterComponent,
    Mark6MessengerHeaderComponent,
    Mark6MessengerMessageComponent,
    Mark6MessengerMessageGroupComponent,
    Mark6MessengerTextareaComponent
];

// Declare Directives here:
const messengerDirectives = [
    Mark6MessengerAutoSizeDirective
];


@NgModule({
    imports: [
        CommonModule,
        Mark6ImageModule,
    ],
    declarations: [
        messengerComponents,
        messengerDirectives
    ],
    exports: [
        messengerComponents,
        messengerDirectives
    ],
    providers: []
})
export class Mark6MessengerModule {
}
