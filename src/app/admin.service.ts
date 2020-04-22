import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Admin } from './admin';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }
  adminUrl = environment.serverName + 'admin';

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.adminUrl);
  }
}
