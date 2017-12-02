import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

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

  user: User;
  login: Login;
  loggedin: boolean;

  constructor( private http: Http ) { }

  createUsers(email: string, fName: string, lName: string, phoneNum: number, address: string, password: string ): Observable<any> {
    this.user = new User(email, fName, lName, phoneNum, address, password);
    return this.http.post('localhost:3000/createUser',JSON.stringify({email, fName, lName, phoneNum, address, password}))
      .map(this.extractData);
  }

  signin(email: string, password: string): Observable<any> {
    this.login = new Login(email, password);
    console.log('called signIn');
    return this.http
      .post('localhost:3000/api/signIn', JSON.stringify({email, password}))
      .map(this.extractData);
  }

  private extractData(res: Response) {
    console.log('extract data called');
    let body = res.json();
    return body || {};
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
