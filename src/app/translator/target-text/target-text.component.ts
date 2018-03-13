import { Component, OnInit, Input } from '@angular/core';
import { options } from '../shared/options';
import { Option } from '../shared/option';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-target-text',
  templateUrl: './target-text.component.html',
  styleUrls: ['./target-text.component.css']
})
export class TargetTextComponent implements OnInit {

    options:Option[];
    constructor(private http:HttpService){

    }

    setInput(val:string){
        this.http.setTargetLang(val);
        this.http.targetText = this.http.getPromise(this.http.sourceText);
    }
    ngOnInit() {
        this.options = options.slice(1);
    }
}
