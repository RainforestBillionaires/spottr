import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  showLogin: boolean;

  authenticateService: AuthenticateService

  constructor(authenticateService: AuthenticateService) {
    this.authenticateService = authenticateService;
  }

  ngOnInit() {
  }

  login(email: HTMLInputElement, password: HTMLInputElement): void {
    this.authenticateService.signIn(email.value, password.value)
      .subscribe();
  }


  setSignUp() {
    this.showLogin = false;
  }

  setLogIn() {
    this.showLogin = true;
  }
}
