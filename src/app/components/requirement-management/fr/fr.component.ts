import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BrApiService} from '../../../service/br-api.service';
import {FrApiService} from '../../../service/fr-api.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FileService} from '../../../service/file.service';

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.css']
})
export class FrComponent implements OnInit {
  brProjectList: Array<{id: number, brId: any, name: string, brTitle: string, description: string }> = [];
  name: any;
  businessTitle: any;
  description: any;
  project: any;
  editProject: any;
  projectId: any;
  frId: any;
  file: File;
  fileUrl: string;

  constructor(private flash: FlashMessagesService, private fileService: FileService, private br: BrApiService,
              private frApi: FrApiService, private activateRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.editProject = this.activateRoute.snapshot.paramMap.get('editProject');
    this.projectId = this.activateRoute.snapshot.paramMap.get('projectId');
    console.log(this.projectId);
    if (this.editProject) {
      this.getProjectById();
    }
    this.getSequenceNumber();
    this.getAllBrProject();
  }
  getSequenceNumber(): any {
    this.frApi.getSequenceNumber().subscribe((res: any) => {
      console.log(res);
      this.frId = res.frId;
    });
  }
  getAllBrProject(): any {
    this.br.getAllBrProject().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.brProjectList.push( {id: res[i].id, brId: res[i].brId, name: res[i].name, brTitle: res[i].brTitle,
          description: res[i].description});
      }
    });
  }

  createNewProject(): any {
    console.log(this.project);
    this.frApi.createNewProject(this.name, this.project, this.businessTitle, this.description, this.frId, this.fileUrl).subscribe((res: any) => {
      console.log(res);
      this.route.navigate(['dashboard/fr-list']);
    });
  }

  goBack(): any {
    this.route.navigate(['dashboard/fr-list']);
  }
  updateProject(): any {
    this.frApi.updateProject(this.projectId, this.name, this.businessTitle, this.description, this.frId,
      this.fileUrl ).subscribe((res: any) => {
      this.route.navigate(['dashboard/fr-list']);
    });
  }
  getProjectById(): any {
    this.frApi.getProjectById(this.projectId).subscribe((res: any) => {
      console.log(res);
      this.setBrProject(res);
    });
  }
  setBrProject(res: any): any {
    this.frId = res.frId;
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
