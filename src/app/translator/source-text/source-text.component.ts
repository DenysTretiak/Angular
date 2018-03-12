import { Component, OnInit, Input } from '@angular/core';
import { options } from '../shared/options';
import { Option } from '../shared/option';
import {HttpService} from '../shared/http.service';

@Component({
  selector: 'app-source-text',
  templateUrl: './source-text.component.html',
  styleUrls: ['./source-text.component.css']
})
export class SourceTextComponent implements OnInit {
  options:Option[];
  constructor (private http:HttpService){

  }
  ngOnInit() {
    this.options = options;
  }
    setInputLang(val:string){
        this.http.setSourceLang(val);
        console.log(val);
    }
    setInputText(text:string){
       this.http.setSourceText(text);
       console.log(text);
    }

}
