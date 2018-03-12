import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {
    sourceLang:string = 'auto';
    targetLang:string = 'en';
    sourceText:string;
    targetText:string;
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
        this.targetText = '';
    }

    getPromise():Observable<any>{
        let link:string  = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${this.sourceLang}&tl=${this.targetLang}&dt=t&q=${this.sourceText}`;
        console.log(link);
        return this.http.get(link)
            .map(res => {
                return res.json()[0][0][0];
            });
    }

}





