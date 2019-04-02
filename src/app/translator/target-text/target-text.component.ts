import { Component, OnInit, OnDestroy } from '@angular/core';
// import { options } from '../shared/options.service';
import { Option } from '../../interfaces';
import { HttpService } from '../shared/http.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../firebase.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-target-text',
  templateUrl: './target-text.component.html',
  styleUrls: ['./target-text.component.css']
})
export class TargetTextComponent implements OnInit, OnDestroy {
  options:Observable<Option[]>;
  private REFERENCE_LINK = '/options';
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
      private http:HttpService,
      private fb:FirebaseService
  ) {}

  ngOnInit():void {
      this.fb.getData(this.REFERENCE_LINK)
          .takeUntil(this.destroy$)
          .subscribe(item => this.options = item.slice(1));
  }

  ngOnDestroy():void {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
  }

  setInput(val:string):void {
      this.http.setTargetLang(val);
      this.http.targetText = this.http.getTranslate(this.http.sourceText);
  }
}
