import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// Modules
import { Mark6ImageModule } from '@devmonkeys/mark6/image';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule as ScrollingModuleExp } from '@angular/cdk-experimental/scrolling';

// Components
import { Mark6MessengerComponent } from "./messenger.component";
import { Mark6MessengerMessagesComponent } from "./messenger-messages.component";
import { Mark6MessengerHeaderComponent } from "./messenger-header.component";
import { Mark6MessengerContentComponent } from "./messenger-content.component";
import { Mark6MessengerFooterComponent } from "./messenger-footer.component";
import { Mark6MessengerEmotePickerComponent } from './messenger-emote-picker.component';

// Pipes
import { MessengerMessageClassPipe } from "./messenger-message-class.pipe";
import { MessengerCalendarDatePipe } from "./messenger-message-calendar-date.pipe";
import { Mark6MessengerTextarea } from "./messenger-textarea.component";

// Directives
import { Mark6MessengerAutoSizeDirective } from "./messenger-textarea-auto-size.directive";
import { Mark6MessengerActionsComponent } from "./messenger-actions.component";
import { MessengerMessageMagicPipe } from './messenger-message-magic.pipe';
import { Mark6MessengerEmitItemHeightDirective } from './messenger-emit-item-height.directive';
import { Mark6MessengerService } from './messenger.service';
import { Mark6MessengerMessageComponent } from './messenger-message.component';
import { VirtualScrollerModule } from './virtual-scroller';
import { Mark6MessengerMessagesVirtualScrollerComponent } from './messenger-messages-virtual-scroller.component';



@NgModule({
    imports: [
        ScrollingModule,
        ScrollingModuleExp,
        VirtualScrollerModule,
        CommonModule,
        Mark6ImageModule,
    ],
    declarations: [
        Mark6MessengerComponent,
        Mark6MessengerActionsComponent,
        Mark6MessengerContentComponent,
        Mark6MessengerEmotePickerComponent,
        Mark6MessengerFooterComponent,
        Mark6MessengerHeaderComponent,
        Mark6MessengerMessagesComponent,
        Mark6MessengerMessagesVirtualScrollerComponent,
        Mark6MessengerMessageComponent,
        Mark6MessengerTextarea,
        // Pipes
        MessengerMessageClassPipe,
        MessengerCalendarDatePipe,
        MessengerMessageMagicPipe,
        // Directives
        Mark6MessengerAutoSizeDirective,
        Mark6MessengerEmitItemHeightDirective
    ],
    exports: [
        Mark6MessengerComponent,
        Mark6MessengerActionsComponent,
        Mark6MessengerContentComponent,
        Mark6MessengerEmotePickerComponent,
        Mark6MessengerFooterComponent,
        Mark6MessengerHeaderComponent,
        Mark6MessengerMessagesComponent,
        Mark6MessengerMessagesVirtualScrollerComponent,
        Mark6MessengerTextarea,
        // Directives
        Mark6MessengerAutoSizeDirective
    ],
    providers: [DatePipe, Mark6MessengerService]
})
export class Mark6MessengerModule {
}
