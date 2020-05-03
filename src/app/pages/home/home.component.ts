import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {Patient} from '../../classes/patient/patient';
import {SessionService} from '../../services/session/session.service';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId;

  constructor(
    public router: RouterService,
    private api: ApiService,
    private session: SessionService,
    private localStorage: LocalStorageService) {
  }

  async ngOnInit() {
    this.userId = await this.session.checkSession();
    await this.localStorage.set(this.userId);
    await this.getHomeInfo();
  }

  async getHomeInfo() {
    const response = await this.api.sendPostRequest('patient-home', {user_id: this.userId});

    console.log(response);
    const {first_name, last_name} = response.data;
    const patient = new Patient(this.userId, first_name, last_name);
    console.log(patient);
  }
}
