import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {BrComponent} from './components/requirement-management/br/br.component';
import {FrComponent} from './components/requirement-management/fr/fr.component';
import {NfrComponent} from './components/requirement-management/nfr/nfr.component';
import {TestCaseComponent} from './components/test-management/test-case/test-case.component';
import {TestRunComponent} from './components/test-management/test-run/test-run.component';
import {TestScopeComponent} from './components/test-management/test-scope/test-scope.component';
import {CreateProjectFormComponent} from './components/create-project-form/create-project-form.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {BrListComponent} from './components/requirement-management/br-list/br-list.component';
import {CreateNewNfrComponent} from './components/create-new-nfr/create-new-nfr.component';
import {FrListComponent} from './components/requirement-management/fr-list/fr-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: 'projects', component: ProjectsComponent},
      {path: 'br', component: BrComponent},
      {path: 'fr', component: FrComponent},
      {path: 'nfr', component: NfrComponent},
      {path: 'test-case', component: TestCaseComponent},
      {path: 'test-run', component: TestRunComponent},
      {path: 'test-scope', component: TestScopeComponent},
      {path: 'create-new-project', component: CreateProjectFormComponent},
      {path: 'br-list', component: BrListComponent},
      {path: 'create-new-nfr', component: CreateNewNfrComponent},
      {path: 'fr-list', component: FrListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
