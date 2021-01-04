import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name: string;
  userName: any;
  email: any;
  phone: any;
  password: string;

  constructor(private authService: AuthService,
              private flashMessagesService: FlashMessagesService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  signUp(): any {
    this.authService.signUp(this.name, this.userName, this.email, this.phone, this.password).subscribe(res => {
      this.router.navigate(['']);
      this.showSuccessMessage('Registration Successful');
    }, err => {
      this.showErrorMessage('Registration Unsuccessful');
    });
  }

  showErrorMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-danger', timeout: 2000});

  }

  showSuccessMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-success', timeout: 2000});

  }
}
