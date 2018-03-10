import { Injectable } from "@angular/core";
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import {FirebaseService} from "../../firebase.service";



@Injectable()
export class TodoService{

    ref:string = 'tasks/'

    constructor(private firebase:FirebaseService){
    }

    getTasks():Observable<any>{
        return this.firebase.getData(this.ref);
    }


    addTask(key:string){
        this.firebase.createData(this.ref + key, new Todo(key));
    }

    deleteTask(key:string){
        this.firebase.removeData(this.ref + key);
    }

    updateTask(key:string, data:Object){
        this.firebase.updateData(this.ref + key, data);
    }

}