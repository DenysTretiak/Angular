import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { CardHoverDirective } from './joke/joke.component';
import { ModelFormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { SimpleService} from './simple-service.service';
import { HttpComponent } from './http/http.component';
import { SearchComponent } from './search/search.component'
import { SearchService } from './search.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component'
import { GuardService } from './guard.service';
import { UserService } from './user.service';
import { ArtistVideoListComponent } from './artist-video-list/artist-video-list.component'

const routes: Routes = [
 { path: '', redirectTo:'home', pathMatch:'full' },
 { path: 'find', redirectTo:'search' },
 { path: 'home', component: HomeComponent },
 { path: 'search', component: SearchComponent },
 {
    path: 'artist/:artistId',
    component: ArtistComponent,
    // canActivate:[GuardService],
    canActivateChild:[GuardService],
    children: [
      {path: '', redirectTo: 'tracks', pathMatch:'full'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent},
      {path: 'videos' , component: ArtistVideoListComponent}
    ]
  },
 { path: '**', component: HomeComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective,
    ModelFormComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    HttpComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    ArtistVideoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    SimpleService,
    SearchService,
    GuardService,
    UserService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
