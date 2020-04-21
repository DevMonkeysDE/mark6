import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Mark6ImageModule} from "@devmonkeys/mark6";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mark6ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
