import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';

// CDK
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollingModule as ScrollingModuleExp} from '@angular/cdk-experimental/scrolling';

// Sites
import {SiteUserProfileComponent} from './sites/site-user-profile/site-user-profile.component';
import {SiteMessengerComponent} from './sites/site-messenger/site-messenger.component';
import {SiteImageComponent} from './sites/site-image/site-image.component';

// Mark6
import {Mark6ImageModule} from '@devmonkeys/mark6/image';
import {Mark6MessengerModule} from '@devmonkeys/mark6/messenger';
import {Mark6ContentWrapperModule} from '../../projects/mark6-lib/content-wrapper/src';
import {Mark6EditableImageModule} from '../../projects/mark6-lib/editable-image/src';
import {Mark6DropDownModule} from '../../projects/mark6-lib/drop-down/src';
import {Mark6CropperModule} from '../../projects/mark6-lib/cropper/src';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        // Sites
        SiteUserProfileComponent,
        SiteMessengerComponent,
        SiteImageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        // Material 2
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSliderModule,
        MatSidenavModule,
        // CDK
        ScrollingModule,
        ScrollingModuleExp,
        // Mark6
        Mark6ContentWrapperModule,
        Mark6ImageModule,
        Mark6EditableImageModule,
        Mark6DropDownModule,
        Mark6MessengerModule.forRoot({dateFormats: {block: {days: ['heute', 'gestern']}}}),
        Mark6CropperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
