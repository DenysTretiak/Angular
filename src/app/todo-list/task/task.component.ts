
import { Component, Input } from '@angular/core';
import { TodoService } from "../shared/tasks.service";
import { Todo } from '../shared/todo';
import * as _ from 'lodash';

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

 ngOnInit(){
     console.log(_.compact([0, 1, false, 2, '', 3]));

 }

}
