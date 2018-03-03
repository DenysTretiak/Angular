import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksInputComponent } from './tasks-input/tasks-input.component';
import { TaskComponent } from './task/task.component';
import { TodoListComponent } from './todo-list.component';
import { CheckedDirective } from '../checked.directive';

@NgModule({
  declarations: [
    TasksListComponent,
    TasksInputComponent,
    TaskComponent,
    CheckedDirective,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
