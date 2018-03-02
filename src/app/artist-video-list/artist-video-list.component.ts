import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-artist-video-list',
  templateUrl: './artist-video-list.component.html',
  styleUrls: ['./artist-video-list.component.css']
})
export class ArtistVideoListComponent {

private videos: any[];

 constructor(private jsonp: Jsonp,
             private route: ActivatedRoute) {
   this.route.parent.params.subscribe(params => {
     this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=musicVideo&callback=JSONP_CALLBACK`)
         .toPromise()
         .then(res => {
           console.log(res.json());
           this.videos = res.json().results.slice(1);
         });
   });
 }
}
