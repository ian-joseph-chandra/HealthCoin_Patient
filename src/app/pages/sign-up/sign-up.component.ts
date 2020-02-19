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
  inputCitizenId = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {
    if (this.inputFirstName === '' ||
      this.inputBirthDate === '' ||
      this.inputEmail === '' ||
      this.inputPhoneNumber === '' ||
      this.inputPass === '' ||
      this.inputPassConfirm === '' ||
      this.inputCitizenId === '') {
      console.log('Kolom yang wajib ada yang kosong!');
    } else if (this.inputPass !== this.inputPassConfirm) {
      console.log('Konfirmasi password tidak sesuai!');
    } else {
      console.log('Sign-up berhasil !');
      this.goToLoginPage();
    }
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }
}
