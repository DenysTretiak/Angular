import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {
    url:string = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=';
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
        let link:string  = `${this.url}${this.sourceLang}&tl=${this.targetLang}&dt=t&q=${this.sourceText}`;
        return this.http.get(link)
            //исправить прикол с комой в двух словах
            .map(res => {
                 return res.json()[0].map((item)=>{
                     return item[0];
                 });
            });
    }

}





