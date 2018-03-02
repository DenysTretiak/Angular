import { Injectable } from '@angular/core';
import {Http, Jsonp} from '@angular/http';
import {SearchItem} from './search-item'
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results:SearchItem[];
  loading:boolean;

  constructor(private jsonp: Jsonp) {
    this.results = [];
    this.loading = false;
  }

//   search(term: string): Observable<SearchItem[]> {
//     let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
//     return this.jsonp.request(apiURL)
//       .map(res => {
//          return res.json().results.map(item =>{
//           return new SearchItem(
//             item.trackName,
//             item.artistName,
//             item.trackViewUrl,
//             item.artworkUrl30,
//             item.artistId
//           )
//          })
//       })
//   }
// }
   search(term:string){
      let promise = new Promise((resolve, reject) =>{
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
        this.jsonp.request(apiURL)
           .toPromise()
           .then(
             res=>{
               this.results = res.json().results.map(item => {
                 return new SearchItem(
                   item.trackName,
                   item.artistName,
                   item.trackViewUrl,
                   item.artworkUrl30,
                   item.artistId
                );
              });
               resolve();
             },
             msg =>{
               reject(msg);
             }
           )
      });
      return promise;
   }
 }
