import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdsService {

  private endpoint = '/api/ads'

  constructor(private http: HttpClient) { }


}
