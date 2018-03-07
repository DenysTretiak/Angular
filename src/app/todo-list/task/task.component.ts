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

 constructor(private todoService:TodoService){
 }

 deleteTask(text:string, e:Event){
     this.todoService.deleteTask(text);
     e.stopPropagation();

 }

 toggleTask(text:string){
   this.data.checked = !this.data.checked;

                 this.todoService.updateTask(text, new Todo(text, this.data.checked));

 }

}
