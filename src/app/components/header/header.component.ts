import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../../services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  authenticateService: AuthenticateService;

  constructor( authenticateService: AuthenticateService) {
    this.loggedIn = false
    this.authenticateService = authenticateService;
  }

  ngOnInit() {
    this.loggedIn = this.authenticateService.getLoggedInStatus();
  }

  logOut() {
    console.log('logging out')
    this.loggedIn = false;
    this.authenticateService.logOut();
  }

}
