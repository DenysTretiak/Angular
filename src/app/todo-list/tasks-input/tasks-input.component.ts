import { Component, ViewChild } from '@angular/core';
import { TodoService} from "../shared/tasks.service";


@Component({
  selector: 'app-tasks-input',
  templateUrl: './tasks-input.component.html',
  styleUrls: ['./tasks-input.component.css']
})
export class TasksInputComponent {
  @ViewChild('f') form: any;
  constructor(private todoService:TodoService){

  }
    onSubmit(text:string){
     if (this.form.valid){
         this.todoService.addTask(text);
         this.form.reset();
     }
  }
}
