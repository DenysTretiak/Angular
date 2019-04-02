import { Component, OnInit} from '@angular/core';
import { TodoService } from '../shared/tasks.service';
import { TodoModel } from '../shared/todo.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})

export class TasksListComponent implements OnInit {
  tasks: Observable<TodoModel[]>;

  constructor(private todoService:TodoService) {}

  addTask(text:string):void {
    this.todoService.addTask(text);
  }

  ngOnInit():void {
      this.tasks = this.todoService.getTasks();
  }
}
