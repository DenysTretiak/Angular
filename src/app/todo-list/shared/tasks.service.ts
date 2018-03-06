import { Injectable } from "@angular/core";
import { AngularFireDatabase,  } from 'angularfire2/database';
import { Todo } from './todo';
import { database } from 'firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'
import { Observable } from 'rxjs/Observable';
// import {Todo} from "../../../../../Angular_Application/src/app/todo-list/shared/todo";


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
       this.tasksList.push(new Todo(value, false));
    }

    deleteTask(title:string){
        this.tasksList.remove(title);
    }
    // firebase.database().ref().child('/posts/' + newPostKey)
    //    .update({ title: "New title", body: "This is the new body" });
    updateTask(key:string, data:Object){
        database().ref(this.ref + key).update(data);
    }
    // updateData(key: string, data: Object) {
    //     database().ref(key).update(data);
    // }



}