import { Component, Input } from '@angular/core';
import { TodoService } from '../shared/tasks.service';
import { TodoModel } from '../shared/todo.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent  {
 @Input() task:TodoModel;

 constructor(private todoService:TodoService) {}

 deleteTask(text:string, event:Event):void {
  this.todoService.deleteTask(text);
  event.stopPropagation();

 }

 toggleTask(text:string):void {
  this.task.checked = !this.task.checked;
  this.todoService.updateTask(text, new TodoModel(text, this.task.checked));
 }
}
