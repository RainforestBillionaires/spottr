import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../../models/advertisement';

@Component({
  selector: 'app-ad-list-view',
  templateUrl: './ad-list-view.component.html',
  styleUrls: ['./ad-list-view.component.css']
})
export class AdListViewComponent implements OnInit {

  currentAds: Array<Advertisement> = [
    {
      pictures: ["/assets/images/lawnmower.jpg", "/assets/images/lawnmower2.jpg"],
      title: "Lawnmower for rent",
      description: "Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.",
      location: "3620 rue Lorne-Crescent, Montreal Quebec, Canada",
      value: 70,
      userId: "nabil.chowdhury@outlook.com"
    },
    {
      pictures: ["/assets/images/lawnmower.jpg", "/assets/images/lawnmower2.jpg"],
      title: "Lawnmower for rent",
      description: "Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.",
      location: "3620 rue Lorne-Crescent, Montreal Quebec, Canada",
      value: 70,
      userId: "nabil.chowdhury@outlook.com"
    },
    {
      pictures: ["/assets/images/lawnmower.jpg", "/assets/images/lawnmower2.jpg"],
      title: "Lawnmower for rent",
      description: "Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.",
      location: "3620 rue Lorne-Crescent, Montreal Quebec, Canada",
      value: 70,
      userId: "nabil.chowdhury@outlook.com"
    },
    {
      pictures: ["/assets/images/lawnmower.jpg", "/assets/images/lawnmower2.jpg"],
      title: "Lawnmower for rent",
      description: "Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.",
      location: "3620 rue Lorne-Crescent, Montreal Quebec, Canada",
      value: 70,
      userId: "nabil.chowdhury@outlook.com"
    },
    {
      pictures: ["/assets/images/lawnmower.jpg", "/assets/images/lawnmower2.jpg"],
      title: "Lawnmower for rent",
      description: "Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.Pristine lawnmower looking to be borrowed. DM me.",
      location: "3620 rue Lorne-Crescent, Montreal Quebec, Canada",
      value: 70,
      userId: "nabil.chowdhury@outlook.com"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
