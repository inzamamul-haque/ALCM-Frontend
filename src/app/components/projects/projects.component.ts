import {Component, OnInit} from '@angular/core';
import {ProjectApiService} from '../../service/project-api.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  file: any;
  projectList: Array<{id: number, name: string, description: string, fileUrl: any }> = [];
  constructor(private project: ProjectApiService, private route: Router, private flashMessagesService: FlashMessagesService) {
  }

  ngOnInit(): void {
    console.log('dffgff');
    this.getAllProject();
  }
  getAllProject(): any {
    this.project.getAllProject().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.projectList.push({id: res[i].id, name: res[i].name, description: res[i].description, fileUrl: res[i].fileUrl});
      }
    });
  }

  updateProject(id: any): void {
    this.route.navigate(['dashboard/create-new-project', {editProject: true, projectId: id}]);
  }

  deleteProject(id: any): void {
    this.project.deleteProject(id).subscribe((res: any) => {
     console.log(res);
     window.location.reload();
    });
  }
  showErrorMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-warning', timeout: 2000});

  }
}
