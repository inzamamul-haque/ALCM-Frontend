import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ApiUrlService} from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class NfrApiService {

  constructor(private url: ApiUrlService, private http: HttpClient) {
  }


  createNfr(br: string, nfrId: string, description: string, nfrTitle: string, fileUrl: string): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.createNfrApi;
    const data = {
      'nonFrId': nfrId,
      'brId': br,
      'nonFrTitle': nfrTitle,
      'description': description,
      'fileUrl': fileUrl
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  getAllNfr(): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.getAllNfrApi;
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  deleteNfr(id: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.brApi + id + '/delete';

    return this.http.delete(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  findById(id: string): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.deleteNfrApi + id + '/view';

    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  updateNfr(id: any, br: string, nfrId: string, description: string, nfrTitle: string, fileUrl: string): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.updateNfrApi + id + '/update';
    const data = {
      'nonFrId': nfrId,
      'brId': br,
      'nonFrTitle': nfrTitle,
      'description': description,
      'fileUrl': fileUrl
    };
    return this.http.put(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
}
