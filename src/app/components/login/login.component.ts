import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {LoggedUserDetailsConfig} from '../../config/logged-user-details.config';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private router: Router, private authService: AuthService,
              private loggedUserDetailsConfig: LoggedUserDetailsConfig,
              private flashMessagesService: FlashMessagesService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.userName, this.password).subscribe(res => {
      console.log(res);
      this.loggedUserDetailsConfig.saveLocalStorage(res.token);
      this.router.navigate(['dashboard']);
    }, err => {
      this.showErrorMessage('Something is wrong');
    });

  }

  showErrorMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-danger', timeout: 2000});

  }

  goToSignUp(): void {
    this.router.navigate(['sign-up']);
  }
}
