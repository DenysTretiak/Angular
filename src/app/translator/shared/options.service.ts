import { Option } from './option';
import { Injectable } from "@angular/core";
import {FirebaseService} from "../../firebase.service";
import {Observable} from "rxjs/Observable";


@Injectable()
export class OptionService {
     ref = '/options';
     options:Observable<Option[]>;

     constructor(private fb:FirebaseService){
         this.options = fb.getData(this.ref);
     }
    // getData(key:string):Observable<any>{
    //     return this.db.list(key).valueChanges();
    // }

}
