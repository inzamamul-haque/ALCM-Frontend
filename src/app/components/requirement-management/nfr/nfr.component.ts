import {Component, OnInit} from '@angular/core';
import {NfrApiService} from '../../../service/nfr-api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {FileService} from '../../../service/file.service';

@Component({
  selector: 'app-nfr',
  templateUrl: './nfr.component.html',
  styleUrls: ['./nfr.component.css']
})
export class NfrComponent implements OnInit {
  nfrList: Array<string>;
  closeResult = '';
  brUpdate: string;
  nfrId: string;
  nfrTitle: string;
  description: string;
  fileUrl: string;
  file: File;

  constructor(private nfrApiService: NfrApiService, private modalService: NgbModal, private router: Router,
              private fileService: FileService) {
  }

  ngOnInit(): void {
    this.getAllNfrs();
  }


  getAllNfrs(): void {
    this.nfrApiService.getAllNfr().subscribe(res => {
      this.nfrList = res;
      console.log(res);
    });
  }

  deleteNfr(id: any): void {
    this.nfrApiService.deleteNfr(id).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }

  open(content, id: string): void {
    this.loadValueInUpdatePanel(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openDelete(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getFileInfo($event: Event): void {

  }

  UpdateNfr(id: any): void {
    this.nfrApiService.updateNfr(id, this.brUpdate, this.nfrId, this.description, this.nfrTitle, this.fileUrl).subscribe((res: any) => {

    });
    this.router.navigate(['dashboard/nfr']);
    window.location.reload();
  }

  loadValueInUpdatePanel(id: string): void {
    this.nfrApiService.findById(id).subscribe((res: any) => {

      this.brUpdate = 'BR name';
      this.nfrId = res.nonFrId;
      this.nfrTitle = res.nonFrTitle;
      this.description = res.description;
    });
  }

  uploadFile(): void {
    return this.fileService.upload(this.file).subscribe(res => {
      this.fileUrl = res.imageUrl;
      console.log(res.imageUrl);
      console.log(this.fileUrl);
    }, err => {

    });
  }

  getFileInfoForNrf(event: any): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
    this.uploadFile();
  }
}
