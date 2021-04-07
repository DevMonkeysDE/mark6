import {BrowserModule, HammerModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Ionic
import { IonicModule } from '@ionic/angular';

// Material
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatMenuModule} from '@angular/material/menu';

// CDK
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollingModule as ScrollingModuleExp} from '@angular/cdk-experimental/scrolling';

// Sites
import {SiteUserProfileComponent} from './sites/site-user-profile/site-user-profile.component';
import {SiteMessengerComponent, MessengerMessageOptionsComponent} from './sites/site-messenger/site-messenger.component';
import {SiteImageComponent} from './sites/site-image/site-image.component';
import {SitePhoneComponent} from './sites/site-phone/site-phone.component';

// Mark6
import {Mark6DirectivesModule} from '@devmonkeys/mark6/directives';
import {Mark6ContentWrapperModule} from '@devmonkeys/mark6/content-wrapper';
import {Mark6CropperModule} from '@devmonkeys/mark6/cropper';
import {Mark6EditableImageModule} from '@devmonkeys/mark6/editable-image';
import {Mark6ImageModule} from '@devmonkeys/mark6/image';
import {Mark6MessengerModule} from '@devmonkeys/mark6/messenger';
import {Mark6PhoneModule} from '@devmonkeys/mark6/phone';


@NgModule({
    declarations: [
        AppComponent,
        // Sites
        SiteUserProfileComponent,
        SiteMessengerComponent,
        SiteImageComponent,
        SitePhoneComponent,
        MessengerMessageOptionsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        // Ionic
        IonicModule.forRoot(),
        // Material 2
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSliderModule,
        MatSidenavModule,
        MatBottomSheetModule,
        MatMenuModule,
        // CDK
        ScrollingModule,
        ScrollingModuleExp,
        // Mark6
        Mark6ContentWrapperModule,
        Mark6ImageModule,
        Mark6EditableImageModule,
        Mark6MessengerModule.forRoot({dateFormats: {block: {days: ['Heute', 'Gestern']}}}),
        Mark6PhoneModule,
        Mark6CropperModule,
        Mark6DirectivesModule,
        // HammerJS
        HammerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
