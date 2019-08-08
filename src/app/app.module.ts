import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    FullCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
