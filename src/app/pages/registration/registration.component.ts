import {Component, OnInit} from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class LoginComponent implements OnInit {

  usernameDatabase = 'lauren';
  emailDatabase = 'lauren@gmail.com';
  passwordDatabase = 'lauren123';

  inputUserOrEmail = '';
  inputPass = '';

  // Variable for screen size
  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  getInputUser() {
    // @ts-ignore
    this.inputUserOrEmail = document.getElementById('username').value;
    // @ts-ignore
    this.inputPass = document.getElementById('password').value;

    console.log('username: ' + this.inputUserOrEmail + '\nPassword: ' + this.inputPass);
}

login() {
  this.getInputUser();

  if ((this.inputUserOrEmail === this.usernameDatabase || this.inputUserOrEmail === this.emailDatabase)
    && this.inputPass === this.passwordDatabase) {
    console.log('Login Success!');
  } else {
    console.log('Login failed!');
  }

}
}
