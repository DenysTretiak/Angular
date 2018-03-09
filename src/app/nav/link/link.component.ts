import { Component, OnInit, Input  } from '@angular/core';
import { Link } from '../link'

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
   @Input() link:Link;
}
