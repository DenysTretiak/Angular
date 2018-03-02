import { Component,HostBinding ,HostListener, OnInit, Input, Directive, ElementRef, Renderer } from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input('joke') data: Joke;
  constructor() {

  }

  ngOnInit() {
 
  } 

}

@Directive({
  selector: "[ccCardHover]"
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary')private ishovering: boolean;

  constructor() {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {

    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {

    this.ishovering = false;
  }
  ngOnInit() {
   
    } 
}
