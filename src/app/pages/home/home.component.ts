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
  patient: Patient;

  constructor(
    public router: RouterService,
    private cookie: CookieService,
    private api: ApiService,
    private storage: Storage) {
  }

  async ngOnInit() {
    await this.checkSession();

    console.log('Object:\n' + this.patient);
  }

  async checkSession() {
    if (!(await this.cookie.get('user_id'))) {
      await this.router.goToLoginPage();
    } else {
      this.checkStorage();
      this.checkPatientObject();
    }
  }

  async checkStorage() {
    if (!this.storage.getItem('user_id')) {
      this.userId = await this.getDataFromCookie('user_id');
      const response = await this.api.sendPostRequest('home', {user_id: this.userId});
      const {first_name, last_name} = response.data;

      this.storage.setItem('user_id', this.userId);
      this.storage.setItem('first_name', first_name);
      this.storage.setItem('last_name', last_name);
    }
  }

  getDataFromCookie(key: string) {
    return this.cookie.get(key);
  }

  checkPatientObject() {
    if (this.patient.userId === null) {
      this.patient.userId = this.userId;
      this.patient.firstName = this.storage.getItem('first_name');
      this.patient.lastName = this.storage.getItem('last_name');
    }
  }
}
