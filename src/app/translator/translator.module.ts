import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslatorComponent } from './translator.component';
import { SourceTextComponent } from './source-text/source-text.component';
import { TargetTextComponent } from './target-text/target-text.component';
import { HttpService } from './shared/http.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule,  FormControl, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TranslatorComponent,
        SourceTextComponent,
        TargetTextComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [TranslatorComponent],
    providers: [HttpService]
})

export class TranslatorModule {}
