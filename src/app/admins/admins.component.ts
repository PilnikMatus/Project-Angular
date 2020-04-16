import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmin();
  }
  getAdmin(): void {
    this.adminService.getAdmin()
      .subscribe((response) => console.log(response));
  }
}
