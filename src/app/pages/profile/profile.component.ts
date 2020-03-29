import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  inputUserId = '1';

  requestSent = false;
  userId: string;
  error = false;
  message: string;
  name: string;

  constructor(public router: RouterService, private api: ApiService) {
  }

  async ngOnInit() {
    await this.getProfile();
  }

  async getProfile() {
    await this.sendProfileData();
  }

  async sendProfileData() {
    // Set status for requestSent.
    this.requestSent = true;

    // Prepare the JSON data to be parsed to API Server
    const profileQueryJSON = {
      user_id: 1,
    };

    // Send the data to the API server & store the response.
    const profileQueryResponse = await this.api.sendPostRequest('profile', profileQueryJSON);

    this.error = profileQueryResponse.error;

    if (this.error) {
      this.message = profileQueryResponse.message;
    } else {
      this.name = profileQueryResponse.data.first_name + ' ' + profileQueryResponse.data.last_name;
      console.log(profileQueryResponse.data)
    }
  }
}
