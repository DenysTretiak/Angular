import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {Joke} from '../joke';
import {JokeComponent} from '../joke/joke.component';
import {SimpleService} from '../simple-service.service'

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],

})
export class JokeListComponent implements OnInit {
   jokes;
   text:string;
  // jokes: Joke[] = [
  //   new Joke('Joke 1 ', 'Joke 1 some punchline' ),
  //   new Joke ('Joke 2', 'Joke 2 some punchline')
  // ];
  constructor( private jokesList:SimpleService) {
    this.jokes = jokesList.getJokes();
    this.text = jokesList.value;
  }


  addJoke(joke){
    this.jokes.unshift(joke);
  }
  ngOnInit() {
    // console.log(2);
  }

}
