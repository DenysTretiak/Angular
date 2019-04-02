import { Component, ViewChild } from '@angular/core';
import { TodoService} from '../shared/tasks.service';
import { Form, FormControl } from '@angular/forms';


@Component({
  selector: 'app-tasks-input',
  templateUrl: './tasks-input.component.html',
  styleUrls: ['./tasks-input.component.css']
})
export class TasksInputComponent {
  @ViewChild('taskForm') taskForm:FormControl;

  constructor(private todoService: TodoService) {}

  onSubmit(text: string):void {
    if (this.taskForm.valid) {
        this.todoService.addTask(text);
        this.taskForm.reset();
    }
  }
}
