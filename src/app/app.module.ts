import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListModule } from './todo-list/todo-list.module'


import { AppComponent } from './app.component';
import { TranslatorModule} from './translator/translator.module';
import { HomeModule } from "./home/home.module";
import { NavModule } from './nav/nav.module';
import { AppRoutingModule } from './appRouting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule,
      NavModule,
    TranslatorModule,
    HomeModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
