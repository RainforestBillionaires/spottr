import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthenticateService {

  login:any;
  loggedIn: boolean;
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  private req = new RequestOptions({
    headers: this.headers
  });

  constructor( private http: Http ) {
    this.loggedIn = false;
  }

  createUsers(email: string, fName: string, lName: string, address: string, password: string ): Observable<any> {
    console.log(email)
    let phoneNum = 2;
    let body = JSON.stringify( {email, fName, lName, address, phoneNum, password});
    console.log(body)
    return this.http.post('http://localhost:3000/api/createUser',
    JSON.stringify( {email, fName, lName, address, phoneNum, password}), this.req)
      .map(this.handleResponse);
  }

  signIn(email: string, password: string): Observable<any> {
    this.login = new Login(email, password);
    console.log('called signIn');
    return this.http
      .post('http://localhost:3000/api/signIn', { 'email': email, 'password': password}, this.req)
      .map(this.handleResponse);
  }

  private handleResponse(res: Response) {
    console.log('handling response');
    if(res.status === 200) {
      this.loggedIn = true;
      window.location.href = '/#'
      return true;
    } else {
      return false;
    }
  }

  public getLoggedInStatus(): boolean {
    return this.loggedIn;
  }

  logOut() {
    this.loggedIn = false;
  }

}

export class Login {
  email: string;
  password: string;

  constructor (email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class User {
  email: string;
  fName: string;
  lName: string;
  phoneNum: number;
  address: string;
  password: string;

  constructor(  email: string, fName: string, lName: string, phoneNum: number, address: string, password: string) {
    this.email = email;
    this.fName = fName;
    this.lName = lName;
    this.phoneNum = phoneNum;
    this.address = address;
    this.password = password;
  }

}
