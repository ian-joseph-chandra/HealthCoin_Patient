import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
   * @param registerJSON register data in JSON format.
   */
  async postUserRegister(registerJSON: any): Promise<any> {

    // Prepare a variable to store the response from API server.
    let registerResponse;

    // Send the data to API server and store the response.
    await this.http.post(this.urlUserRegister, registerJSON).toPromise().then(
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
   * @param loginJSON login data in JSON format.
   */
  async postUserLogin(loginJSON: any): Promise<any> {
    // Prepare the JSON data to be parsed to API Server

    // Prepare a variable to store the response from API server.
    let loginResponse;

    // Send the data to API server and store the response.
    await this.http.post(this.urlUserLogin, loginJSON).toPromise().then(
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
