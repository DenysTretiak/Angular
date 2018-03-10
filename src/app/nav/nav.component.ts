import { Component, OnInit } from '@angular/core';
import { Link } from './link';
import { links } from './dataLinks';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
   links:Link[];

   ngOnInit(){
    this.links = links

    }

}
