import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslatorComponent } from './translator.component';

@NgModule({
    declarations: [
        TranslatorComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [TranslatorComponent]
})
export class TranslatorModule { }