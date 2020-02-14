import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  login() {
    this.getInputUser();

    if (this.inputEmail === '' || this.inputPass === '') {
      console.log('Email atau password kosong!');
    } else if ( this.inputEmail === this.emailDatabase
      && this.inputPass === this.passwordDatabase) {
      this.goToDashboardPage();
    } else {
      console.log('Login failed!');
    }
  }

  getInputUser() {
    // @ts-ignore
    this.inputEmail = document.getElementById('username').value;
    // @ts-ignore
    this.inputPass = document.getElementById('password').value;
  }

  goToDashboardPage() {
    this.router.navigate(['dashboard']);
  }
}
