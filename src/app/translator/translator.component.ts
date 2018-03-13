import { Component} from '@angular/core';
import { HttpService } from './shared/http.service';


@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent{


  constructor(private http:HttpService){

  }

  getTranslate(){
       this.http.targetText = this.http.getPromise(this.http.sourceText);
  }


}
