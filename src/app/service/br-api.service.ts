import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ApiUrlService} from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class BrApiService {

  constructor(private url: ApiUrlService, private http: HttpClient) { }
  getSequenceNumber(): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.brApi + 'getSequenceNumber';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  getAllProject(): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.projectApi + 'getAllPmp';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  createNewProject(nam: string, project: any, businessTitle: string, description: string, brId: any, file: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.brApi + 'createNewBusiness';
    const data = {
      name: nam,
      projectId: project,
      brTitle: businessTitle,
      description: description,
      brId: brId,
      fileUrl: file
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  getAllBrProject(): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.brApi + 'getAllBusinessRequirement';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  updateProject(id: any, nam: string, businessTitle: string, description: string, brId: any, file: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.brApi + 'updateProject';
    const data = {
      id: id,
      name: nam,
      brTitle: businessTitle,
      description: description,
      brId: brId,
      fileUrl: file

    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));

  }
  getBrProjectById(project: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.brApi + 'getBrProjectById';
    const data = {
      projectId: project
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  deleteProject(id: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.brApi + 'delete';
    const data = {
      projectId: id
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
}
