import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {
    sourceLang:string = 'auto';
    targetLang:string = 'en';
    sourceText:string;
    targetText:Observable<string>;
    setSourceLang(val:string){
        this.sourceLang = val;
    }
    setTargetLang(val:string){
        this.targetLang = val;
    }
    setSourceText(text:string){
        this.sourceText = text;
    }

    constructor(private http: Http) {

    }

    getPromise(text:string):Observable<string>{
        this.sourceText = text;
        // console.log(this.sourceText);
        console.log(this.sourceText);
        let link:string  = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${this.sourceLang}&tl=${this.targetLang}&dt=t&q=${this.sourceText}`;
        return this.http.get(link)
            .map(res => {
                 let result:string = '';
                 res.json()[0].forEach((item)=>{
                     result += item[0];
                 });
                 return result;
            });
    }

}





