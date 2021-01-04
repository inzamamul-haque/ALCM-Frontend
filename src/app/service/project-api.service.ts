import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiUrlService} from './api-url.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  constructor(private http: HttpClient, private url: ApiUrlService) {
  }

  createNewProject(name: string, description: string, fileDownloadUrl: string): any {
    console.log(name);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.projectApi + 'create';
    const data = {
      name: name,
      description: description,
      fileUrl: fileDownloadUrl
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  updateProject(projectId: any, name: string, description: string, fileDownloadUrl: string): any {
    console.log(name);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.projectApi + 'update';
    const data = {
      projectId: projectId,
      name: name,
      description: description,
      fileUrl: fileDownloadUrl
    };
    console.log(name);
    return this.http.put(url, data, httpOptions).pipe(map((res: any) => {
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

  getProjectById(project: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.projectApi + 'getProjectById';
    const data = {
      projectId: project
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

  deleteProject(project: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.projectApi + 'delete';
    const data = {
      projectId: project
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }

}
