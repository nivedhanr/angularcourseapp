import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcousreComponent } from './addcousre/addcousre.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { Viewcourse2Component } from './viewcourse2/viewcourse2.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcousreComponent,
    ViewcourseComponent,
    Viewcourse2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
