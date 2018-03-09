import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { RouterModule } from "@angular/router";
import { LinkComponent } from './link/link.component';

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








