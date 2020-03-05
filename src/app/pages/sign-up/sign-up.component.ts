import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  inputFirstName = 'Ian';
  inputLastName = 'Joseph';
  inputBirthDate = '1998-04-22';
  inputEmail = 'ianjoseph.project@gmail.com';
  inputPhoneNumber = '12345';
  inputPass = 'ian2204';
  inputPassConfirm = 'ian2204';
  inputCitizenId = '12345';

  requestSent = false;
  error = false;
  message: string;

  constructor(private router: Router, private api: ApiService) {
  }

  ngOnInit() {
  }

  /**
   * Check the password confirmation is correct or not. If it's correct, then process the register data.
   */
  async signUp() {
    if (this.inputPass !== this.inputPassConfirm) {
      this.error = true;
      this.message = 'Konfirmasi password tidak sesuai!';
    } else {
      await this.sendRegisterData();

      // If the request is sent and there isn't any error, then go back to Login page.
      if (this.requestSent && !this.error) {
        this.goToLoginPage();
      }
    }
  }

  /**
   * Send the register data to API server and get the response. Set the error status and message according to the response.
   */
  async sendRegisterData() {
    // Set status for requestSent.
    this.requestSent = true;

    // Send the data to the API server & store the response.
    const registerResponse = await this.api.postUserRegister(
      this.inputFirstName, this.inputLastName, this.inputBirthDate, this.inputEmail, this.inputPass);

    this.error = registerResponse.error;
    this.message = registerResponse.message;
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }
}
