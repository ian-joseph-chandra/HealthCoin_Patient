import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {CookieService} from 'ngx-cookie-service';
import {ApiService} from '../../services/api/api.service';
import {Patient} from '../../classes/patient/patient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId;

  constructor(
    public router: RouterService,
    private cookie: CookieService,
    private api: ApiService) {
  }

  async ngOnInit() {
    // await this.checkSession();
  }

  async checkSession() {
    this.userId = await this.cookie.get('user_id');

    if (this.userId === '') {
      await this.router.goToLoginPage();
    } else {
      const response = await this.api.sendPostRequest('home', {user_id: this.userId});

      console.log(response);
      const {first_name, last_name} = response.data;
      const patient = new Patient(this.userId, first_name, last_name);
      console.log(patient);
    }
  }
}