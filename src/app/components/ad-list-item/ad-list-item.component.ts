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

  // ad: Advertisement = {
  //   pictures: ["/assets/images/lawnmower.jpg", "/assets/images/lawnmower2.jpg"],
  //   title: "Lawnmower for rent",
  //   description: "Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.",
  //   location: "3620 rue Lorne-Crescent, Montreal Quebec, Canada",
  //   value: 70,
  //   userId: "nabil.chowdhury@outlook.com"
  // };

  constructor() { }

  clickedAd() {
    this.clicked = !this.clicked;
  }

  ngOnInit() {
  }

}
