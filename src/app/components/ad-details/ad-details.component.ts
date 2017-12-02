import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../../models/advertisement';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {

  ad: Advertisement = {
    pictures: ["/assets/images/lawnmower.jpg", "/assets/images/lawnmower2.jpg"],
    title: "Lawnmower for rent",
    description: "Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.",
    location: "3620 rue Lorne-Crescent, Montreal Quebec, Canada",
    value: 70,
    userId: "nabil.chowdhury@outlook.com"
  };

  constructor() { }

  ngOnInit() {
  }

}
