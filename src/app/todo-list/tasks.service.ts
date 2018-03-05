import { Injectable } from "@angular/core";
import { AngularFireDatabase,  } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'
import { Observable } from 'rxjs/Observable';
import {Todo} from "../../../../Angular_Application/src/app/todo-list/shared/todo";


@Injectable()
export class TodoService{
    tasksList:any;
    tasksObj:any;
    ref:string = 'tasks/'

    constructor(private db:AngularFireDatabase){
        this.tasksObj = db.object(this.ref);
        this.tasksList = db.list(this.ref);
    }

    getTasksList(){
        return this.tasksList.valueChanges();
    }
    getTasksObj(){
        return this.tasksObj.valueChanges();
    }

    addTask(value:string){
       this.tasksList.push({text:value, condition:'notchecked'});
    }

    deleteTask(title:string){
        this.tasksList.remove(title);
        // console.log(title);
    }

}