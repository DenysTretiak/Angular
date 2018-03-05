import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {TodoService} from "../tasks.service";


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit{
  tasks: Object[];

  constructor(private todoService:TodoService){

  }


  addTask(text:string){
    this.todoService.addTask(text);
    // this.tasks.unshift({text:text});

  }
  deleteTask(text:string){
    this.tasks.splice(this.tasks.indexOf(text), 1)
  }
    ngOnInit(){
        this.todoService.getTasks().subscribe(item => this.tasks = item);
  }


}
