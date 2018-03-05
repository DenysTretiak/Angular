import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from "../tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent  {
 @Input('task') data:string;
 @Output() taskDeleted = new EventEmitter<string>();
 constructor(private todoService:TodoService){

 }

 deleteTask(text:string){
   this.todoService.deleteTask('task1');
   console.log('delete');
 }

}
