import { Injectable } from '@angular/core';
import {Joke} from './joke';

@Injectable()
export class SimpleService {
  jokes:Joke[];
  // value:string = 'some string';
  getJokes(){
    this.jokes = [
      new Joke('Joke 1 ', 'Joke 1 some punchline' ),
      new Joke ('Joke 2', 'Joke 2 some punchline')
    ];
    return this.jokes;
  }

  value:string;
  constructor() {
 }

}
