import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from "./home/home.component";
import { TranslatorComponent } from "./translator/translator.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const appRoutes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'translator', component:TranslatorComponent},
    {path:'todolist', component:TodoListComponent}
]



@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}