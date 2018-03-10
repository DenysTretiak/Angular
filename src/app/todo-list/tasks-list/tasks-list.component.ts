import { Component, OnInit} from '@angular/core';
import { TodoService } from "../shared/tasks.service";
import { Todo } from '../shared/todo'


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit{
  tasks: Todo[];
  constructor(private todoService:TodoService){

  }
  addTask(text:string){
    this.todoService.addTask(text);
  }
    ngOnInit(){
        this.todoService.getTasks().subscribe(item => this.tasks = item);
  }
}
