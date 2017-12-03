import { Component, OnInit } from '@angular/core';
import { AuthenticateService} from '../../services/authenticate.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  authenticateService: AuthenticateService;

  constructor(authenticateService: AuthenticateService) {
    this.authenticateService = authenticateService;
  }

  ngOnInit() {
  }

  signUp(fName: any, lName: any, address: any,
         email: any, password: any): void {
    console.log(email)
    console.log(fName)
    console.log(lName)
    console.log(address)
    console.log(password)
    this.authenticateService.createUsers(email, fName, lName,
      address, password).subscribe();
  }

}
