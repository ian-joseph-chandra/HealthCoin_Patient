import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: RouterService,
    private cookie: CookieService) {
  }

  async ngOnInit() {
    const userId = await this.cookie.get('user-id');
    console.log(userId);
  }
}
