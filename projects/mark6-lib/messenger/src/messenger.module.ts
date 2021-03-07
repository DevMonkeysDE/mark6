import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
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
import {DateFormatPipe} from './messenger-message/messenger-message-date-format.pipe';
import {Mark6MessengerReplyPreviewComponent} from './messenger-reply-preview/messenger-reply-preview.component';
import {MessengerServiceConfig} from './messenger.interface';

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
    Mark6MessengerReplyPreviewComponent,
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
        messengerDirectives,
        DateFormatPipe
    ],
    exports: [
        messengerComponents,
        messengerDirectives
    ],
    providers: []
})
export class Mark6MessengerModule {

    constructor(@Optional() @SkipSelf() parentModule?: Mark6MessengerModule) {
        if (parentModule) {
            throw new Error('GreetingModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: MessengerServiceConfig): ModuleWithProviders<Mark6MessengerModule> {
        return {
            ngModule: Mark6MessengerModule,
            providers: [
                {provide: MessengerServiceConfig, useValue: config}
            ]
        };
    }

}
