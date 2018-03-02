import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent{
  @Input('func') data:string;

  tasks: Object[] = [
    {
      text:"Learn angular"
    },
    {
      text:"Do some tasks with it"
    }
  ];

  addTask(text:string){
    this.tasks.unshift({text:text});
  }
  deleteTask(text:string){
    this.tasks.splice(this.tasks.indexOf(text), 1)
  }


}
