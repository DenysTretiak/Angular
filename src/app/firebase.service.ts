import { Injectable } from '@angular/core';
import { AngularFireDatabase,  } from 'angularfire2/database';
import { database } from 'firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
    constructor(private db:AngularFireDatabase) {}

    getData(key:string):Observable<any> {
        return this.db.list(key).valueChanges();
    }

    createData(key:string, data:any):void {
        database().ref(key).set(data);
    }

    removeData(key:string):void {
        database().ref(key).remove();
    }

    updateData(key:string, data:any):void {
        database().ref(key).update(data);
    }
}
