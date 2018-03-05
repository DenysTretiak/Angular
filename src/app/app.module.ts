import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListModule } from './todo-list/todo-list.module'
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';





@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
