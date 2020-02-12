import {Component, OnInit} from '@angular/core';
import {HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usernameDatabase = 'asdf';
  emailDatabase = 'asdf@gmail.com';
  passwordDatabase = 'asdf123';

  inputUserOrEmail = '';
  inputPass = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  getInputUser() {
    // @ts-ignore
    this.inputUserOrEmail = document.getElementById('username').value;
    // @ts-ignore
    this.inputPass = document.getElementById('password').value;
  }

  login() {
    this.getInputUser();

    if (this.inputUserOrEmail === '' || this.inputPass === '') {
      console.log('Email atau password kosong!');
    } else if ((this.inputUserOrEmail === this.usernameDatabase || this.inputUserOrEmail === this.emailDatabase)
      && this.inputPass === this.passwordDatabase) {
      this.goToDashboardPage();
    } else {
      console.log('Login failed!');
    }
  }

  goToDashboardPage() {
    this.router.navigate(['dashboard']);
  }
}
