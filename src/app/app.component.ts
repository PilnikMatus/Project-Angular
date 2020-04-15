import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  firstname: string;
  constructor(private httpClient: HttpClient) { }

  getPosts() {
    this.httpClient.get('http://127.0.0.1:49497/api/admin/2')
      .subscribe(
        (data: any) => {
        this.firstname = data.firstname;
      });
  }

}
