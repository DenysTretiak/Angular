import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListModule } from './todo-list/todo-list.module'


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
