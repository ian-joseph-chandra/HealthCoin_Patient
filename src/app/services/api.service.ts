import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // domain used
  private domain = 'http://localhost:3000/';

  // constant url List
  private urlUserRegister: string = this.domain + 'user-register';
  private urlUserLogin: string = this.domain + 'login';

  constructor(private http: HttpClient) {
  }

  /**
   * Send the user registration data to API server.
   * @param firstName User's first name.
   * @param lastName User's last name.
   * @param birthDate User's birth date.
   * @param email User's email.
   * @param pass User's password.
   */
  async postUserRegister(firstName: any, lastName: any, birthDate: any, email: any, pass: any): Promise<any> {
    // Prepare the JSON data to be parsed to API Server
    const jsonUserRegister = {
      first_name: firstName,
      last_name: lastName,
      birth_date: birthDate,
      email,
      pass
    };

    // Prepare a variable to store the response from API server.
    let registerResponse;

    // Send the data to API server and store the response.
    await this.http.post(this.urlUserRegister, jsonUserRegister).toPromise().then(
      (apiResponse) => {
        registerResponse = apiResponse;
      }
    ).catch((e) => {
        console.error('Function error: on postUserRegister => ' + e);
      }
    );

    // Return the response.
    return registerResponse;
  }

/**
 * Send the user registration data to API server.
 * @param email User's email.
 * @param pass User's password.
 */
async postUserLogin (email: any, pass: any): Promise<any> {
  // Prepare the JSON data to be parsed to API Server
  const jsonUserLogin = {
    email,
    pass
  };

// Prepare a variable to store the response from API server.
let loginResponse;

// Send the data to API server and store the response.
await this.http.post(this.urlUserLogin, jsonUserLogin).toPromise().then(
  (apiResponse) => {
    loginResponse = apiResponse;
  }
).catch((e) => {
    console.error('Function error: on postUserLogin => ' + e);
  }
);

// Return the response.
return loginResponse;
}
}
