import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent  {
 @Input('task') data:any ;

 @Output() taskDeleted = new EventEmitter<string>();
 deleteTask(text:string){
   this.taskDeleted.emit(text);
 }

}
