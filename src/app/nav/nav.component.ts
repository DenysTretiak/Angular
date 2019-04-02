import { Component, OnInit } from '@angular/core';
import { links } from './data-links';
import { Link } from '../interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   links:Link[];

   ngOnInit():void {
    this.links = links;
  }
}
