import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class ModelFormComponent implements OnInit{
    myform:FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;
    langs:string[] = [
      'English',
      'Franch',
      'Ukrainian'
    ]
    createFormControls(){
        this.firstName = new FormControl('', Validators.required);
         this.lastName = new FormControl('', Validators.required);
         this.email = new FormControl('', [
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*")
       ]);
       this.password = new FormControl('', [
         Validators.required,
         Validators.minLength(8)
       ]);
       this.language = new FormControl('', Validators.required);
    }
    createForm(){
      this.myform = new FormGroup({
       name: new FormGroup({
         firstName: this.firstName,
         lastName: this.lastName,
       }),
       email: this.email,
       password: this.password,
       language: this.language
      })
    }
    onSubmit(){
      if (this.myform.valid){
        console.log("Form Submitted");
        this.myform.reset();
      }
    }
   ngOnInit(){
     this.createFormControls();
     this.createForm();
   }

}
