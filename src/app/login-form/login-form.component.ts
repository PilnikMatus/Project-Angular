import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup} from '@angular/forms';
import {ServiceModelService} from '../service-model.service';
import {LoginAdmin} from '../loginAdmin';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  newSession: LoginAdmin;


  constructor(private service: ServiceModelService) { }

  sessionsUrl = environment.serverName + 'sessions';

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  loginAdmin(): void{
    this.newSession = this.
    this.service.postItem<LoginAdmin>(this.sessionsUrl, this.newSession);

  }

}
