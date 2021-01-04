import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class LoggedUserDetailsConfig {

  constructor() {
  }

  saveLocalStorage(token: string): any {
    localStorage.setItem('token', token);
  }
}
