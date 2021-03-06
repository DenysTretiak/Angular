import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListModule } from './todo-list/todo-list.module'
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { FirebaseService } from './firebase.service';

import { AppComponent } from './app.component';

import { TranslatorModule} from './translator/translator.module';
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      NavModule,
    TranslatorModule,
    HomeModule,
    AppRoutingModule
  ],
  providers:[FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
