import {Component, OnInit} from '@angular/core';
import {BrApiService} from '../../../service/br-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../../../service/file.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-br',
  templateUrl: './br.component.html',
  styleUrls: ['./br.component.css']
})
export class BrComponent implements OnInit {
  name: string;
  businessTitle: string;
  description: string;
  brId: number;
  projectList: Array<{id: number,  name: string}> = [];
  project: any;
  editProject: any;
  projectId: any;
  file: File;
  fileUrl: string;


  constructor(private flash: FlashMessagesService, private brApi: BrApiService, private fileService: FileService, private route: Router,
              private activateRoute: ActivatedRoute) {
  }
  ngOnInit(): any {
    this.editProject = this.activateRoute.snapshot.paramMap.get('editProject');
    this.projectId = this.activateRoute.snapshot.paramMap.get('projectId');
    console.log(this.projectId);
    if (this.editProject) {
      this.getProjectById();
    } else {
    this.getSequenceNumber();
    }
    this.getAllProject();
  }

  getSequenceNumber(): any {
    this.brApi.getSequenceNumber().subscribe((res: any) => {
      console.log(res);
      this.brId = res.brId;
    });
  }
  getAllProject(): any {
    this.brApi.getAllProject().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.projectList.push({id: res[i].id, name: res[i].name});
        this.project = res[0].name;
      }
    });
  }

  createNewProject(): any {
    console.log(this.project);
    this.brApi.createNewProject(this.name, this.project, this.businessTitle, this.description, this.brId, this.fileUrl).subscribe((res: any) => {
      console.log(res);
      this.route.navigate(['dashboard/br-list']);
    });
  }

  goBack(): any {
    this.route.navigate(['dashboard/br-list']);
  }
  updateProject(): any {
    this.brApi.updateProject(this.projectId, this.name, this.businessTitle, this.description, this.brId,
      this.fileUrl ).subscribe((res: any) => {
      this.route.navigate(['dashboard/br-list']);
    });
  }
  getProjectById(): any {
    this.brApi.getBrProjectById(this.projectId).subscribe((res: any) => {
      console.log(res);
      this.setBrProject(res);
    });
  }
  setBrProject(res: any): any {
    this.brId = res.brId;
    this.name = res.name;
    this.description = res.description;
    this.businessTitle = res.brTitle;
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
    this.flash.show(mgs, {cssClass: 'alert-danger', timeout: 2000});

  }

}
