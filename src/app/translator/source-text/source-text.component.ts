import { Component, OnInit, Input } from '@angular/core';
import { OptionService } from '../shared/options.service';
import { Option } from '../shared/option';
import { HttpService } from '../shared/http.service';
import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {FirebaseService} from "../../firebase.service";

@Component({
  selector: 'app-source-text',
  templateUrl: './source-text.component.html',
  styleUrls: ['./source-text.component.css']
})
export class SourceTextComponent implements OnInit {
  options:Observable<Option[]>;
  ref = '/options';
  searchField: FormControl;

  constructor (private http:HttpService,
               private fb:FirebaseService){

  }

    setInputLang(val:string){
        this.http.setSourceLang(val);
        this.http.targetText = this.http.getPromise(this.http.sourceText);
    }
    setInputText(text:string){
        this.http.setSourceText(text);
    }
    ngOnInit() {
    this.options = this.fb.getData(this.ref);
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(item => this.http.targetText = this.http.getPromise(item));
  }

}
