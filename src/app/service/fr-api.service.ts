import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ApiUrlService} from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class FrApiService {

  constructor(private http: HttpClient, private url: ApiUrlService) { }

  getSequenceNumber(): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.frApi + 'getSequenceNumber';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  createNewProject(name: any, project: any, businessTitle: any, description: any, fId: any, file: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.frApi + 'createNewFr';
    const data = {
      name: name,
      projectId: project,
      frTitle: businessTitle,
      description: description,
      frId: fId,
      fileUrl: file
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  updateProject(projectId: any, name: any, businessTitle: any, description: any, fId: any, file: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.frApi + 'update';
    const data = {
      name: name,
      projectId: projectId,
      frTitle: businessTitle,
      description: description,
      frId: fId,
      fileUrl: file
    };
    return this.http.put(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  getProjectById(project: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.frApi + 'getProjectById';
    const data = {
      projectId: project,
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  getAllProject(): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.frApi + 'getAllFr';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  deleteProject(id: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.frApi + 'delete';
    const data = {
      projectId: id
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
}
