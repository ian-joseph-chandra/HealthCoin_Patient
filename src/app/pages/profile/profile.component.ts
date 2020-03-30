import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  userId: string;

  requestSent = false;
  error = false;
  message: string;
  name: string;
  email: string;
  phoneNumber: string;
  nationalId: string;
  birthDate: string;

  constructor(public router: RouterService, private api: ApiService, private cookie: CookieService) {
  }

  async ngOnInit() {
    await this.getProfile();
  }

  async getProfile() {
    this.userId = await this.cookie.get('user_id');
    await this.sendProfileData();
  }

  async sendProfileData() {
    // Set status for requestSent.
    this.requestSent = true;

    // Prepare the JSON data to be parsed to API Server
    const profileQueryJSON = {
      user_id: this.userId // tadi di sini user_id:1
    };

    // Send the data to the API server & store the response.
    const profileQueryResponse = await this.api.sendPostRequest('profile', profileQueryJSON);

    this.error = profileQueryResponse.error;

    if (this.error) {
      this.message = profileQueryResponse.message;
    } else {
      this.name = profileQueryResponse.data.first_name + ' ' + profileQueryResponse.data.last_name;
      this.email = profileQueryResponse.data.email;
      this.phoneNumber = profileQueryResponse.data.phone_number;
      this.nationalId = profileQueryResponse.data.national_id;
      this.birthDate = profileQueryResponse.data.birth_date;

      console.log(profileQueryResponse.data)
    }
  }
}
