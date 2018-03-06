import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from "../shared/tasks.service";
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent  {
 @Input('task') data:Todo;
 // @Output() taskDeleted = new EventEmitter<string>();
 tasksObj:any;
 constructor(private todoService:TodoService){
   todoService.getTasksObj()
       .subscribe(item => this.tasksObj = item);
 }

 deleteTask(text:string){
     for (let key in this.tasksObj){
         if (text === this.tasksObj[key].text){
             this.todoService.deleteTask(key);
         }
     }

 }

 toggleTask(text:string){
   this.data.checked = !this.data.checked;
     for (let key in this.tasksObj){
         if (text === this.tasksObj[key].text){
             this.todoService.updateTask(key, new Todo(text, this.data.checked));
         }
     }
 }


}
