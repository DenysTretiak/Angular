import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksInputComponent } from './tasks-input/tasks-input.component';
import { TaskComponent } from './task/task.component';
import { CheckedDirective } from './checked.directive';



@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TasksInputComponent,
    TaskComponent,
    CheckedDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
