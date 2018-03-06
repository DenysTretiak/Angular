import { Component } from '@angular/core';
import { TodoService} from "../shared/tasks.service";


@Component({
  selector: 'app-tasks-input',
  templateUrl: './tasks-input.component.html',
  styleUrls: ['./tasks-input.component.css']
})
export class TasksInputComponent {

  constructor(private todoService:TodoService){

  }
  createTask(text:string){
    if (text.length>0){
      this.todoService.addTask(text);
    }
  }
}
