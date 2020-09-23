import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {RouterService} from '../../services/router/router.service';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // inputFirstName = '';
  // inputLastName = '';
  // inputBirthDate = '';
  // inputEmail = '';
  // inputPhoneNumber = '';
  // inputPass = '';
  // inputPassConfirm = '';
  // inputNationalId = '';

  inputFirstName = 'Josh';
  inputLastName = 'Frederich';
  inputBirthDate = '';
  inputEmail = 'bungmontana@gmail.com';
  inputPhoneNumber = '87777281147';
  inputPass = '12345678';
  inputPassConfirm = '12345678';
  inputNationalId = '12345678';

  requestSent = false;
  error = false;
  message: string;

  md5 = new Md5();

  constructor(public router: RouterService, private api: ApiService) {
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
        await this.router.goToLoginPage();
      } else {
        console.log(this.message);
      }
    }
  }

  /**
   * Send the register data to API server and get the response. Set the error status and message according to the response.
   */
  async sendRegisterData() {
    // Set status for requestSent.
    this.requestSent = true;

    // Prepare the JSON data to be parsed to API Server
    const registerJSON = {
      first_name: this.inputFirstName,
      last_name: this.inputLastName,
      birth_date: this.inputBirthDate,
      email: this.inputEmail,
      phone_number: this.inputPhoneNumber,
      pass: this.md5.appendStr(this.inputPass).end(),
      national_id: this.inputNationalId
    };

    // Send the data to the API server & store the response.
    const registerResponse = await this.api.sendPostRequest('patient-register', registerJSON);

    console.log(registerResponse);
    this.error = registerResponse.error;
    this.message = registerResponse.message;
  }
}
