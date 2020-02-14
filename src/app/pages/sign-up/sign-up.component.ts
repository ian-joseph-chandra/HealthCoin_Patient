import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  inputFirstName = '';
  inputLastName = '';
  inputBirthDate = '';
  inputEmail = '';
  inputPhoneNumber = '';
  inputPass = '';
  inputPassConfirm = '';
  inputUserID = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {
    this.getInputUser();

    if (this.inputFirstName === '' ||
      this.inputBirthDate === '' ||
      this.inputEmail === '' ||
      this.inputPhoneNumber === '' ||
      this.inputPass === '' ||
      this.inputPassConfirm === '' ||
      this.inputUserID === '') {
      console.log('Kolom yang wajib ada yang kosong!');
    } else if (this.inputPass !== this.inputPassConfirm) {
      console.log('Konfirmasi password tidak sesuai!');
    } else {
      console.log('Sign-up berhasil !');
      this.goToLoginPage();
    }
  }

  getInputUser() {
    // @ts-ignore
    this.inputFirstName = document.getElementById('first-name').value;
    // @ts-ignore
    this.inputLastName = document.getElementById('last-name').value;
    // @ts-ignore
    this.inputBirthDate = document.getElementById('birthday').value;
    // @ts-ignore
    this.inputEmail = document.getElementById('email').value;
    // @ts-ignore
    this.inputPhoneNumber = document.getElementById('phone').value;
    // @ts-ignore
    this.inputPass = document.getElementById('pass').value;
    // @ts-ignore
    this.inputPassConfirm = document.getElementById('pass-confirm').value;
    // @ts-ignore
    this.inputUserID = document.getElementById('id-number').value;
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }
}
