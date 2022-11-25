import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcousreComponent } from './addcousre/addcousre.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcousreComponent,
    ViewcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
