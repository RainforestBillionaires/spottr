import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Advertisement } from '../models/advertisement';

@Injectable()
export class AdsService {

  private endpoint = 'http://localhost:3000/api/ads';

  constructor(private http: HttpClient) { }


  getAllAds():Observable<Advertisement[]> {
    // return of(this.currentAds);
    return this.http.get<Advertisement[]>(this.endpoint);
  }

}
