import { Injectable } from "@angular/core";
import { AngularFireDatabase,  } from 'angularfire2/database';
import { Todo } from './todo';
import { database } from 'firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class TodoService{

    ref:string = 'tasks/'

    constructor(private db:AngularFireDatabase){
    }

    getTasks(){
        return this.db.list(this.ref).valueChanges();
    }


    addTask(key:string){
        database().ref(this.ref + key).set(new Todo(key));
    }

    deleteTask(key:string){
        database().ref(this.ref + key).remove();
    }

    updateTask(key:string, data:Object){
        database().ref(this.ref + key).update(data);
    }

}