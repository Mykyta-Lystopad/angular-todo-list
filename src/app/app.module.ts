import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoMainblockComponent } from './todo-mainblock/todo-mainblock.component';
import { TodoAddandfilterComponent } from './todo-addandfilter/todo-addandfilter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TodologinComponent} from "./todo-login/todo-login.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TodologinComponent,
    TodoItemComponent,
    TodoMainblockComponent,
    TodoAddandfilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
