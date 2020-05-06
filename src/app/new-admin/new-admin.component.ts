import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../admin.service';
import {AdminsComponent} from '../admins/admins.component';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent implements OnInit {
  adminForm: FormGroup;
  constructor(private service: AdminService, private router: Router) { }
  private adminComponent: AdminsComponent;
  title = 'New Admin';

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
      log_repetation_unit: new FormControl(),
      log_repetation_number: new FormControl(),
      log_importance: new FormControl()
    });
  }
  onSubmit(): void {
    this.adminComponent = new AdminsComponent(this.service);
    console.log(this.adminForm.value);
    this.service.postAdmin(this.adminForm.value)
      .subscribe(data => {
        this.adminComponent.arrAdmins.push(data);
        this.router.navigate(['/clients']);
      });
    console.log(this.adminForm.value);
  }

}
