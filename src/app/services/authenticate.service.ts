import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticateService {

  user: User

  constructor( private http: Http ) { }

  createUsers(email: string, fName: string, lName: string, phoneNum: number, address: string, password: string ) {
    this.user = new User(email, fName, lName, phoneNum, address, password);
    this.http.post('localhost:3000', this.user);
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
