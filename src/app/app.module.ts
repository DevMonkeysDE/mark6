import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Mark6ImageModule} from "../../projects/mark6-lib/src/lib/image/image.module";
import {Mark6EditableImageModule} from "../../projects/mark6-lib/src/lib/editable-image/editable-image.module";
import {Mark6DropDownModule} from "../../projects/mark6-lib/src/lib/drop-down/drop-down.module";
import {SiteUserProfileComponent} from "./sites/site-user-profile/site-user-profile.component";


@NgModule({
    declarations: [
        AppComponent,
        // Sites
        SiteUserProfileComponent,
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
        Mark6ImageModule,
        Mark6EditableImageModule,
        Mark6DropDownModule,
        // Mark6MessengerModule,
        // Mark6CropperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
