import { Component, Output, EventEmitter, ViewChild } from '@angular/core';



@Component({
  selector: 'app-tasks-input',
  templateUrl: './tasks-input.component.html',
  styleUrls: ['./tasks-input.component.css']
})
export class TasksInputComponent {

  @Output() taskCreated = new EventEmitter<string>();
  createTask(text:string){
    if (text.length>0){
      this.taskCreated.emit(text);
    }

  }

}
