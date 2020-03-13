import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(public router: Router) {
  }

  async goToLoginPage() {
    await this.router.navigate(['login']);
  }

  async goToSignUpPage() {
    await this.router.navigate(['sign-up']);
  }

  async goToUserRecoveryPage(){
    await this.router.navigate(['user-recovery']);
  }

  async goToHomePage() {
    await this.router.navigate(['home']);
  }

  async goToRecordListPage() {
    await this.router.navigate(['record-list']);
  }

  async goToProfilePage() {
    await this.router.navigate(['profile']);
  }
}
