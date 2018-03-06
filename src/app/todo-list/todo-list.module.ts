import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksInputComponent } from './tasks-input/tasks-input.component';
import { TaskComponent } from './task/task.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService} from "./shared/tasks.service";

@NgModule({
  declarations: [
    TasksListComponent,
    TasksInputComponent,
    TaskComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers:[TodoService],
  exports: [TodoListComponent]
})
export class TodoListModule { }
