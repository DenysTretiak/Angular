import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavComponent,
        LinkComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [NavComponent]
})
export class NavModule { }








