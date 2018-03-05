import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Todo} from "../../../../Angular_Application/src/app/todo-list/shared/todo";


@Injectable()
export class TodoService{
    tasks:any;
    ref:string = 'tasks/'

    constructor(private db:AngularFireDatabase){
        this.tasks = db.list('/tasks');
    }

    getTasks(){
        return this.tasks.valueChanges();
    }
    // this.firebaseService.createData(this.ref + '/' + title, new Todo(title))
    addTask(value:string){
       // this.tasks.push({text:value, condition:'notchecked'});
        this.db.createData(this.ref + '/' + value, 'some');
    }
    // database().ref(key).set(data)
    deleteTask(title:string){
        this.tasks.remove(title);
        console.log()
    }

}