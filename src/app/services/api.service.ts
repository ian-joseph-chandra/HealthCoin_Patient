import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // domain used
  private domain = 'http://localhost:3000/';

  // constant url List
  private urlUserRegister: string = this.domain + 'user-register';

  constructor(private http: HttpClient) {
  }

  async postUserRegister(firstName: any, lastName: any, birthDate: any, email: any, pass: any) {

    const jsonUserRegister: JsonObject = {
      "first_name": firstName,
      "last_name": lastName,
      "birth_date": birthDate,
      "email": email,
      "pass": pass
    };

    let registerMessage = {};
    await this.http.post(this.urlUserRegister, jsonUserRegister).toPromise()
      .then(
        (response) => {
        registerMessage = response;
      }, () => {
          return registerMessage;
        })
      .catch((e) => {
        console.error('Function error: on postUserRegister => ' + e);
      });
  }
}
