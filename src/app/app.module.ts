import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {BrComponent} from './components/requirement-management/br/br.component';
import {FrComponent} from './components/requirement-management/fr/fr.component';
import {NfrComponent} from './components/requirement-management/nfr/nfr.component';
import {TestScopeComponent} from './components/test-management/test-scope/test-scope.component';
import {TestCaseComponent} from './components/test-management/test-case/test-case.component';
import {TestRunComponent} from './components/test-management/test-run/test-run.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateProjectFormComponent} from './components/create-project-form/create-project-form.component';
import {FormsModule} from '@angular/forms';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {BrListComponent} from './components/requirement-management/br-list/br-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {CreateNewNfrComponent} from './components/create-new-nfr/create-new-nfr.component';
import { FrListComponent } from './components/requirement-management/fr-list/fr-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProjectsComponent,
    BrComponent,
    FrComponent,
    NfrComponent,
    TestScopeComponent,
    TestCaseComponent,
    TestRunComponent,
    CreateProjectFormComponent,
    SignUpComponent,
    BrListComponent,
    CreateNewNfrComponent,
    FrListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
