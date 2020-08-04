import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodologinComponent} from "./todo-login/todo-login.component";
import {TodoMainblockComponent} from "./todo-mainblock/todo-mainblock.component";

const routes: Routes = [
  {path: '', component: TodologinComponent},
  {path: 'todo-mainblock', component: TodoMainblockComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

