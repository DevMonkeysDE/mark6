import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

// Material
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

// Sites
import {SiteUserProfileComponent} from "./sites/site-user-profile/site-user-profile.component";
import {SiteMessengerComponent} from './sites/site-messenger/site-messenger.component';

// Mark6
import {Mark6ImageModule} from "../../projects/mark6-lib/src/lib/image/image.module";
import {Mark6EditableImageModule} from "../../projects/mark6-lib/src/lib/editable-image/editable-image.module";
import {Mark6DropDownModule} from "../../projects/mark6-lib/src/lib/drop-down/drop-down.module";
import {Mark6MessengerModule} from "../../projects/mark6-lib/src/lib/messenger/messenger.module";
import {Mark6ContentWrapperModule} from "../../projects/mark6-lib/src/lib/content-wrapper/content-wrapper.module";

@NgModule({
    declarations: [
        AppComponent,
        // Sites
        SiteUserProfileComponent,
        SiteMessengerComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        // Material 2
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        // Mark6
        Mark6ContentWrapperModule,
        Mark6ImageModule,
        Mark6EditableImageModule,
        Mark6DropDownModule,
        Mark6MessengerModule,
        // Mark6CropperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
