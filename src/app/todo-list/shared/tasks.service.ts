import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model';
import { Observable } from 'rxjs/Observable';
import {FirebaseService} from '../../firebase.service';

@Injectable()
export class TodoService {
    private ref:string = 'tasks/';

    constructor(private firebase:FirebaseService) {}

    getTasks():Observable<any> {
        return this.firebase.getData(this.ref);
    }


    addTask(key:string):void {
        this.firebase.createData(this.ref + key, new TodoModel(key));
    }

    deleteTask(key:string):void {
        this.firebase.removeData(this.ref + key);
    }

    updateTask(key:string, data:Object):void {
        this.firebase.updateData(this.ref + key, data);
    }
}
