import {Component, HostListener, OnInit} from '@angular/core';
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

  showPassword: boolean;

  constructor(private router: Router) {
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
}
