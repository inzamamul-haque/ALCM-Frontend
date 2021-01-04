import {Component, OnInit} from '@angular/core';
import {BrApiService} from '../../service/br-api.service';
import {FileService} from '../../service/file.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {NfrApiService} from '../../service/nfr-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-new-nfr',
  templateUrl: './create-new-nfr.component.html',
  styleUrls: ['./create-new-nfr.component.css']
})
export class CreateNewNfrComponent implements OnInit {
  br: string;
  nfrTitle: string;
  nfrId: string;
  brList: Array<object>;
  description: string;
  file: File;
  fileUrl: string;

  constructor(private brService: BrApiService, private fileService: FileService,
              private flashMessagesService: FlashMessagesService, private nfrApiService: NfrApiService,
              private brApi: BrApiService, private route: Router) {
  }

  ngOnInit(): void {
    this.getBrList();
    this.getSequenceNumber();
  }

  createNewNfr(): void {
    this.nfrApiService.createNfr(this.br, this.nfrId, this.description, this.nfrTitle, this.fileUrl).subscribe(res => {
      console.log(res);
    });

  }

  getSequenceNumber(): any {
    this.brApi.getSequenceNumber().subscribe((res: any) => {
      console.log(res);
      this.nfrId = 'NFR-' + res.brId;
    });
  }

  goBack(): void {
    this.route.navigate(['dashboard/nfr']);
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

  getBrList(): void {
    this.brService.getAllBrProject().subscribe(res => {
      this.brList = res;
    });
  }

  showErrorMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-danger', timeout: 2000});

  }
}
