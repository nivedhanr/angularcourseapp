import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcousreComponent } from './addcousre/addcousre.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { Viewcourse2Component } from './viewcourse2/viewcourse2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const myRoute:Routes=[
  {
    path:"",
    component:AddcousreComponent
  },
  {
    path:"view",
    component:Viewcourse2Component
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddcousreComponent,
    ViewcourseComponent,
    Viewcourse2Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
