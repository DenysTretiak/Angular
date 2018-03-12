import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from "./shared/http.service";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit{

  targetText:string;

  constructor(private http:HttpService){

  }

  getTranslate(){
      this.http.getPromise().subscribe(item => this.targetText = item);
      console.log(this.targetText);
  }

  ngOnInit(){

  }

}
