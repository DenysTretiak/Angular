import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from "../tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent  {
 @Input('task') data:string;
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

}
