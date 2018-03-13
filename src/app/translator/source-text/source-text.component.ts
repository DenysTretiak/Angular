import { Component, OnInit, Input } from '@angular/core';
import { options } from '../shared/options';
import { Option } from '../shared/option';
import { HttpService } from '../shared/http.service';
import { FormControl } from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-source-text',
  templateUrl: './source-text.component.html',
  styleUrls: ['./source-text.component.css']
})
export class SourceTextComponent implements OnInit {
  options:Option[];
  searchField: FormControl;

  constructor (private http:HttpService){

  }

    setInputLang(val:string){
        this.http.setSourceLang(val);
        this.http.targetText = this.http.getPromise(this.http.sourceText);
    }
    setInputText(text:string){
        this.http.setSourceText(text);
    }
    ngOnInit() {
    this.options = options;
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(item => this.http.targetText = this.http.getPromise(item));
  }

}
