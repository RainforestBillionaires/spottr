import { Component, OnInit, Input } from '@angular/core';
import { Advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-ad-list-item',
  templateUrl: './ad-list-item.component.html',
  styleUrls: ['./ad-list-item.component.css']
})
export class AdListItemComponent implements OnInit {
  @Input() ad: Advertisement;
  clicked: Boolean = false;

  constructor() { }

  clickedAd() {
    this.clicked = !this.clicked;
  }

  ngOnInit() {
  }

}
