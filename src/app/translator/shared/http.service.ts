import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {
    private URL:string = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=';
    private sourceLang:string = 'auto';
    private targetLang:string = 'en';

    sourceText:string;
    targetText:Observable<string>;

    constructor(private http:Http) {}

    setSourceLang(val:string):void {
        this.sourceLang = val;
    }

    setTargetLang(val:string):void {
        this.targetLang = val;
    }

    setSourceText(text:string):void {
        this.sourceText = text;
    }

    getTranslate(orignalText:string):Observable<string> {
        this.sourceText = orignalText;
        const link:string  = `${this.URL}${this.sourceLang}&tl=${this.targetLang}&dt=t&q=${this.sourceText}`;

        return this.http.get(link)
            .map(res => res.json()[0].map(text => text[0]));
    }
}





