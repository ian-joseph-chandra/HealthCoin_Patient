import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usernameDatabase = 'lauren';
  emailDatabase = 'lauren@gmail.com';
  passwordDatabase = 'lauren123';
  confirmDatabase = 'lauren123';

  inputUserOrEmail = '';
  inputPass = '';
  inputConfirm = '';

  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {
  }

  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  getSignUpUser() {
    // @ts-ignore
    this.inputUserOrEmail = document.getElementById('username').value;
    // @ts-ignore
    this.inputPass = document.getElementById('password').value;
    // @ts-ignore
    this.inputConfirm = document.getElementById('password').value;


    console.log('username: ' + this.inputUserOrEmail + '\nPassword: ' + this.inputPass + '\nPassword: ' + this.inputConfirm);
  }

  signup() {
    this.getSignUpUser();

    if ((this.inputPass === this.inputConfirm)) {
      console.log('Sign-Up Success!');
    } else {
      console.log('Please check your confirm password!')
    }
  }
}
