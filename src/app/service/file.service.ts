import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiUrlService} from './api-url.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient, private url: ApiUrlService) {
  }

  upload(file: File): any {
    const formData = new FormData();
    formData.append('file', file);

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'multipart/mixed;boundary=YourBoundaryOfChoiceHere'})
    };
    const url = this.url.uploadFile;


    return this.http.post(url, formData).pipe(map((res: any) => {
      return res;
    }));
  }


}
