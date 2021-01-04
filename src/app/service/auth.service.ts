import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiUrlService} from './api-url.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private url: ApiUrlService) {
  }

  login(userName: string, password: string): any {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.loginApi;
    const data = {
      userName: userName,
      password: password
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  signUp(name: string, userName: string, email: string, phone: string, password: string): any {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.signUpApi;
    const data = {
      name: name,
      userName: userName,
      email: email,
      phoneNo: phone,
      roles: ['ROLE_ADMIN'],
      password: password
    };

    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

}
