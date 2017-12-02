import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  authenticateService: AuthenticateService

  constructor(authenticateService: AuthenticateService) {
    this.authenticateService = authenticateService;
  }

  ngOnInit() {
  }

  login(email: HTMLInputElement, password: HTMLInputElement): void {
    this.authenticateService.signin(email.value, password.value).subscribe();
  }

}
