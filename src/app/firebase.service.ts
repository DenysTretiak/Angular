import { Injectable } from '@angular/core';
import { AngularFireDatabase,  } from 'angularfire2/database';
import { database } from 'firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import {Todo} from "./todo-list/shared/todo";


@Injectable()
export class FirebaseService{

    constructor(private db:AngularFireDatabase){

    }

    getData(key:string):Observable<any>{
        return this.db.list(key).valueChanges();
    }

    createData(key:string, data:any){
        database().ref(key).set(data);
    }

    removeData(key:string){
        database().ref(key).remove()
    }

    updateData(key:string, data:any){
        database().ref(key).update(data)
    }

}