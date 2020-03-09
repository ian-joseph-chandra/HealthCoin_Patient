import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  emailDatabase = 'asdf@gmail.com';
  passwordDatabase = 'asdf123';

  inputEmail = '';
  inputPass = '';

  showPassword: boolean;
  requestSent = false;
  error = false;
  message: string;

  constructor(private router: Router, private api: ApiService) {
  }

  async ngOnInit() {
    this.showPassword = false;
  }

  login() {
    if (this.inputEmail === this.emailDatabase
      && this.inputPass === this.passwordDatabase) {
      this.goToDashboardPage();
    } else {
      console.log('Login failed!');
    }
  }

  showPasswordToggle(): void {
    this.showPassword = !this.showPassword;
    const passFillType = document.getElementById('password');

    if (this.showPassword) {
      // @ts-ignore
      passFillType.type = 'text';
    } else {
      // @ts-ignore
      passFillType.type = 'password';
    }
  }

  goToDashboardPage() {
    this.router.navigate(['dashboard']);
  }

  goToUserRecovery() {
    this.router.navigate(['user-recovery']);
  }

  goToSignUp() {
    this.router.navigate(['sign-up']);
  }

/**
 * Send the sign-up data to API server and get the response. Set the error status and message according to the response.
 */

async sendLoginData() {
  // Set status for requestSent.
  this.requestSent = true;

  // Send the data to the API server & store the response.
  const loginResponse = await this.api.postUserLogin(
    this.inputEmail, this.inputPass);

  this.error = loginResponse.error;
  this.message = loginResponse.message;

  console.log(loginResponse);
}
}
