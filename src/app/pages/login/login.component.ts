<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import {Component, OnInit} from '@angular/core';
>>>>>>> dbca634423990aa5610ac950f2ac14d5a0640d4f

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  usernameDatabase = 'lauren';
  emailDatabase = 'lauren@gmail.com';
  passwordDatabase = 'lauren123';

  inputUserOrEmail = '';
  inputPass = '';

  constructor() {
  }
>>>>>>> dbca634423990aa5610ac950f2ac14d5a0640d4f

  ngOnInit() {
  }

<<<<<<< HEAD
=======
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
>>>>>>> dbca634423990aa5610ac950f2ac14d5a0640d4f
}
