import { Component, Input } from '@angular/core';
import { TodoService } from "../shared/tasks.service";
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent  {
 @Input('task') data:Todo;
 isDeleted:boolean;

 constructor(private todoService:TodoService){
 }

 deleteTask(text:string){
     this.todoService.deleteTask(text);
     this.isDeleted = true;
 }

 toggleTask(text:string){
   this.data.checked = !this.data.checked;
             if (!this.isDeleted){
                 this.todoService.updateTask(text, new Todo(text, this.data.checked));
             }
 }

}
