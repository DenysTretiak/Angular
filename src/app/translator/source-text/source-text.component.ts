import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { FirebaseService } from '../../firebase.service';
import { Subject} from 'rxjs/Subject';
import { Option } from '../../interfaces';

@Component({
  selector: 'app-source-text',
  templateUrl: './source-text.component.html',
  styleUrls: ['./source-text.component.css']
})
export class SourceTextComponent implements OnInit, OnDestroy {
  options:Observable<Option[]>;
  searchField: FormControl;
  private REFERENCE_LINK = '/options';
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor (
    private http:HttpService,
    private fb:FirebaseService
  ) {}

  ngOnInit() {
    this.options = this.fb.getData(this.REFERENCE_LINK);
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .takeUntil(this.destroy$)
        .subscribe(item => this.http.targetText = this.http.getTranslate(item));

  }

  ngOnDestroy():void {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
  }

  setInputLang(val:string):void {
      this.http.setSourceLang(val);
      this.http.targetText = this.http.getTranslate(this.http.sourceText);
  }

  setInputText(text:string):void {
      this.http.setSourceText(text);
  }

}
