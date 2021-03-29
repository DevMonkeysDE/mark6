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
import {Mark6MessengerReplyComponent} from './messenger-reply/messenger-reply.component';
import {MessengerServiceConfig} from './messenger.interface';
import {Mark6MessengerMessageHeaderComponent} from './messenger-message-header/messenger-message-header.component';
import {Mark6MessengerMessageHeaderNameComponent} from './messenger-message-header-name/messenger-message-header-name.component';
import {Mark6MessengerMessageHeaderDateComponent} from './messenger-message-header-date/messenger-message-header-date.component';
import {Mark6MessengerMessageTextComponent} from './messenger-message-text/messenger-message-text.component';

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
    Mark6MessengerMessageHeaderComponent,
    Mark6MessengerMessageHeaderDateComponent,
    Mark6MessengerMessageHeaderNameComponent,
    Mark6MessengerMessageTextComponent,
    Mark6MessengerReplyComponent,
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

    // constructor(@Optional() @SkipSelf() parentModule?: Mark6MessengerModule) {
    //     if (parentModule) {
    //         throw new Error('GreetingModule is already loaded. Import it in the AppModule only');
    //     }
    // }

    static forRoot(config?: MessengerServiceConfig): ModuleWithProviders<Mark6MessengerModule> {
        return {
            ngModule: Mark6MessengerModule,
            providers: [
                {provide: MessengerServiceConfig, useValue: config}
            ]
        };
    }

}
