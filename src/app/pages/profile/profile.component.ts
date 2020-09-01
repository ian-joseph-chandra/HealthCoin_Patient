import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {SessionService} from '../../services/session/session.service';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';

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
  profileIsSet;

  constructor(
    public router: RouterService,
    private api: ApiService,
    private session: SessionService,
    private localStorage: LocalStorageService) {
  }

  async ngOnInit() {
    // this.userId = await this.session.checkSession();
    this.profileIsSet = await this.localStorage.checkProfileStorage();

    if (!this.profileIsSet) {
      await this.sendProfileData();
    }
  }

  async sendProfileData() {
    // Set status for requestSent.
    this.requestSent = true;

    // Prepare the JSON data to be parsed to API Server
    const profileQueryJSON = {
      user_id: this.userId
    };

    // Send the data to the API server & store the response.
    const profileQueryResponse = await this.api.sendPostRequest('patient-profile', profileQueryJSON);

    this.error = profileQueryResponse.error;

    if (this.error) {
      this.message = profileQueryResponse.message;
    } else {
      this.name = profileQueryResponse.data.first_name + ' ' + profileQueryResponse.data.last_name;
      this.birthDate = profileQueryResponse.data.birth_date;
      this.email = profileQueryResponse.data.email;
      this.phoneNumber = profileQueryResponse.data.phone_number;
      this.nationalId = profileQueryResponse.data.national_id;

      console.log(profileQueryResponse.data);
    }
  }
}
