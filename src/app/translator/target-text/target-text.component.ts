import { Component, OnInit, Input } from '@angular/core';
// import { options } from '../shared/options.service';
import { Option } from '../shared/option';
import { HttpService } from '../shared/http.service';
import { Observable } from "rxjs/Observable";
import { FirebaseService } from "../../firebase.service";

@Component({
  selector: 'app-target-text',
  templateUrl: './target-text.component.html',
  styleUrls: ['./target-text.component.css']
})
export class TargetTextComponent implements OnInit {

    options:Observable<Option[]>;
    ref = '/options';

    constructor(private http:HttpService
                private fb:FirebaseService){

    }

    setInput(val:string){
        this.http.setTargetLang(val);
        this.http.targetText = this.http.getPromise(this.http.sourceText);
    }
    ngOnInit() {
        this.fb.getData(this.ref)
            .subscribe(item => this.options = item.slice(1));
    }
}
