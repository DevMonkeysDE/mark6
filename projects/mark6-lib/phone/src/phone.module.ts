import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6PhoneComponent} from './phone/phone.component';
import {Mark6PhoneIncomingCallComponent} from './phone-incoming-call/phone-incoming-call.component';
import {Mark6PhoneIncomingCallAvatarPulseComponent} from './phone-incoming-call-avatar-pulse/phone-incoming-call-avatar-pulse.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Mark6PhoneComponent,
        Mark6PhoneIncomingCallComponent,
        Mark6PhoneIncomingCallAvatarPulseComponent
    ],
    exports: [
        Mark6PhoneComponent,
        Mark6PhoneIncomingCallComponent,
        Mark6PhoneIncomingCallAvatarPulseComponent
    ]
})
export class Mark6PhoneModule {
}
