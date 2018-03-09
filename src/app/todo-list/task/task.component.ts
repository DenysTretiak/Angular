import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
 @Input('task') data:string;
 @Output() taskDeleted = new EventEmitter<string>();

 deleteTask(text:string){
   this.taskDeleted.emit(text);
 }

 ngOnInit(){
     console.log(_.compact([0, 1, false, 2, '', 3]));

 }

}
