import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Advertisement } from '../models/advertisement';

@Injectable()
export class AdsService {

  private endpoint = 'http://localhost:3000/api/ads';

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
  ];

  constructor(private http: HttpClient) { }

  // getAllAds() {
  //   return this.currentAds;
  // }

  getAllAds():Observable<Advertisement[]> {
    // return of(this.currentAds);
    return this.http.get<Advertisement[]>(this.endpoint);
  }

}
