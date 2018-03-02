import { Component, OnInit, ViewChild } from '@angular/core';
import {FormsModule} from '@angular/forms';

class Signup{
   constructor(public firstName:string = '',
              public lastName:string = '',
              public email:string = '',
              public password:string = '',
              public language:string = ''){}
}
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  // email:string;
  @ViewChild('f') form:any;
  @ViewChild('password') password:any;
  model:Signup = new Signup();
  langs:string[] = [
        'English',
        'French',
        'German',
    ];


  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
     // if (this.form.valid) {
     //   console.log("Form Submitted!");
     //   this.form.f();
     console.log(this.password);
     }

}
