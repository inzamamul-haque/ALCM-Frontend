import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectApiService} from '../../service/project-api.service';
import {FileService} from '../../service/file.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.css']
})
export class CreateProjectFormComponent implements OnInit {
  projectName: string;
  projectDescription: string;
  editProject: any;
  projectId: any;
  file: File;
  fileUrl: string;

  constructor(private router: Router, private activateRoute: ActivatedRoute,
              private project: ProjectApiService, private fileService: FileService,
              private flashMessagesService: FlashMessagesService) {
  }

  ngOnInit(): void {
    this.editProject = this.activateRoute.snapshot.paramMap.get('editProject');
    this.projectId = this.activateRoute.snapshot.paramMap.get('projectId');
    console.log(this.projectId);
    if (this.editProject) {
      this.getProject();
    }
  }

  getProject(): any {
    this.project.getProjectById(this.projectId).subscribe((res: any) => {
      console.log(res);
      this.setProject(res);
    });
  }

  setProject(res: any): any {
    this.projectName = res.name;
    this.projectDescription = res.description;
  }

  back(): void {
    this.router.navigate(['dashboard/projects']);
  }

  createNewProject(): any {
    this.project.createNewProject(this.projectName, this.projectDescription, this.fileUrl).subscribe((res: any) => {
      this.router.navigate(['dashboard/projects']);
    });
  }

  updateProject(): any {
    this.project.updateProject(this.projectId, this.projectName, this.projectDescription, this.fileUrl).subscribe((res: any) => {
      this.router.navigate(['dashboard/projects']);
    });

  }

  uploadFile(): void {
    return this.fileService.upload(this.file).subscribe(res => {
      this.fileUrl = res.imageUrl;
      console.log(res.imageUrl);
      console.log(this.fileUrl);
    }, err => {
      this.showErrorMessage('File Upload Failed');
    });
  }

  getFileInfo(event: any): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
    this.uploadFile();
  }

  showErrorMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-danger', timeout: 2000});

  }

}
