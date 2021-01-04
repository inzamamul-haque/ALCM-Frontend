import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FrApiService} from '../../../service/fr-api.service';

@Component({
  selector: 'app-fr-list',
  templateUrl: './fr-list.component.html',
  styleUrls: ['./fr-list.component.css']
})
export class FrListComponent implements OnInit {
  frProjectList: Array<{description: string, frId: any, frTitle: string, id: any, name: string, fileUrl: any}> = [];
  frProject: Array<any>;

  constructor(private route: Router, private frService: FrApiService) { }

  ngOnInit(): void {
    this.getAllProject();
  }
  getAllProject(): any {
    this.frService.getAllProject().subscribe((res: any) => {
      this.frProject = res;
      console.log(this.frProject);
     /* for (let i = 0; i < res.length; i++) {
      this.frProjectList.push({description: res[i].description, frId: res[i].frId, frTitle: res[i].frTitle,
        id: res[i].id, name: res[i].name, fileUrl: res[i].fileUrl});
      }
      console.log(this.frProject);*/
    });
  }

  editProject(id: any): any {
    this.route.navigate(['dashboard/fr', {projectId: id, editProject: true}]);
  }

  goToFr(): any {
    this.route.navigate(['dashboard/fr']);
  }

  delete(id: any): any {
    this.frService.deleteProject(id).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
