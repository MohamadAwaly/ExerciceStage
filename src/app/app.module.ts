import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContainerComponent} from './container/container.component';
import {UsersListComponent} from './container/users-list/users-list.component';
import {UserDetailsComponent} from './container/user-details/user-details.component';
import {HeaderComponent} from './shared/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UsersListComponent,
    UserDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
