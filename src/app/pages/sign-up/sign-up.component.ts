import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

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

  constructor(private router: Router, private api: ApiService) {
  }

  ngOnInit() {
  }

  async signUp() {
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
      const registerMessage = await this.api.postUserRegister(
        this.inputFirstName, this.inputLastName, this.inputBirthDate, this.inputEmail, this.inputPass);

      console.log(registerMessage);
      // this.goToLoginPage();
    }
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }
}
