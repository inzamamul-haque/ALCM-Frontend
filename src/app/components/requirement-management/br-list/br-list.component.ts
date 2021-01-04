import {Component, OnInit} from '@angular/core';
import {BrApiService} from '../../../service/br-api.service';
import {Router} from '@angular/router';

class ProjectInfo {
  public name: any;
  public description: any;
}

@Component({
  selector: 'app-br-list',
  templateUrl: './br-list.component.html',
  styleUrls: ['./br-list.component.css']
})
export class BrListComponent implements OnInit {
  projectInfo: Array<any>;
  brProjectList: Array<{ id: number, brId: any, name: string,
    brTitle: string, description: string, fileUrl: any, projects: ProjectInfo[] }> = [];

  constructor(private br: BrApiService, private route: Router) {
    this.getAllBrProject();
  }

  ngOnInit(): void {
    // this.getAllBrProject();
  }

  getAllBrProject(): any {
    this.br.getAllBrProject().subscribe((res: any) => {
      console.log(res);
      this.projectInfo = res;
      console.log(this.projectInfo);
      //  for (let i = 0; i < res.length; i++) {
      //    this.projectInfo = res;
      //   this.projectInfo  = Object.assign([], res[i].project);
      //   this.brProjectList.push( {id: res[i].id, brId: res[i].brId, name: res[i].name, brTitle: res[i].brTitle,
      //     description: res[i].description, fileUrl: res[i].fileUrl, projects: this.projectInfo});
      // }
      console.log(this.brProjectList);
    });
  }

  editProject(id: any): any {
    this.route.navigate(['dashboard/br', {editProject: true, projectId: id}]);
  }

  deleteProject(id: any): any {
    this.br.deleteProject(id).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }

  goToBr(): any {
    this.route.navigate(['dashboard/br']);
  }
}
