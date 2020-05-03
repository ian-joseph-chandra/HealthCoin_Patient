import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {RouterService} from '../router/router.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private cookie: CookieService, private router: RouterService) {
  }

  async checkSession() {
    const userId = await this.cookie.get('user_id');

    if (userId === '') {
      await this.router.goToLoginPage();
    } else {
      return userId;
    }
  }
}
