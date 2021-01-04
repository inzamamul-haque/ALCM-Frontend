import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  public apiUrl = environment.baseUrl;
  public projectApi = this.apiUrl + 'project/';
  public loginApi = this.apiUrl + 'public/login';
  public signUpApi = this.apiUrl + 'public/signUp';
  public brApi = this.apiUrl + 'business.requirement/';
  public frApi = this.apiUrl + 'functional.requirement/';
  public uploadFile = this.apiUrl + 'file/upload';
  public createNfrApi = this.apiUrl + 'Nonfunctional.requirement/createNewNonFr';
  public getAllNfrApi = this.apiUrl + 'Nonfunctional.requirement/getAllNonFr';
  public deleteNfrApi = this.apiUrl + '/Nonfunctional.requirement/';
  public updateNfrApi = this.apiUrl + '/Nonfunctional.requirement/';

  constructor() {
  }
}
