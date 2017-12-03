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
      pictures: ["/assets/images/lawnmower.jpg", "https://slack-imgs.com/?c=1&url=http%3A%2F%2Fi3.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F000%2F481%2F115%2F4cd.gif"],
      title: "Lawnmower for rent",
      description: "Lightly used and in perfect condition, great for mowing your lawns.",
      value: 70,
      userEmail: "nabil.chowdhury@outlook.com"
    },
    {
      pictures: ["/assets/images/lawnmower2.jpg", "/assets/images/lawnmower.jpg"],
      title: "Lawnmower for rent",
      description: "So dank, you'll never want to use a different lawn mower again.",
      value: 120,
      userEmail: "nabil.chowdhury@outlook.com"
    },
    {
      pictures: ["https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs.hswstatic.com%2Fgif%2Fpower-drill-1.jpg"],
      title: "Drill!!",
      description: "So dank, you'll never want to use a different drill again.",
      value: 120,
      userEmail: "nabil.chowdhury@outlook.com"
    },
  ];

  constructor(private http: HttpClient) { }


  getAllAds():Observable<Advertisement[]> {
    return of(this.currentAds);
    // return this.http.get<Advertisement[]>(this.endpoint);
  }

}
