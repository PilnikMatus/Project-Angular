import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup} from '@angular/forms';
import {ServiceModelService} from '../service-model.service';
import {LoginAdmin} from '../loginAdmin';
import {environment} from '../../environments/environment';
import { Admin} from '../admin';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loginAdmin: LoginAdmin;
  token: string;
  admin: Admin;


  constructor(private service: ServiceModelService) { }

  sessionsUrl = environment.serverName + 'Sessions';

  ngOnInit(): void {
    console.log(this.sessionsUrl);
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  logAdmin(): void {
    this.loginAdmin = this.loginForm.value;
    console.log(this.loginAdmin);
    this.service.postItem<LoginAdmin>(this.sessionsUrl, this.loginAdmin).subscribe(data => {
      this.admin = data as Admin;
      console.log(this.admin);
      this.token = this.admin.token;
      console.log(this.token);
      if (this.token == null) {
      }
      else{
        environment.token = this.token;
        console.log(environment.token);
      }

  });
  }


}
