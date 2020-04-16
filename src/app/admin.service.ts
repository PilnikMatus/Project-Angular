import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Admin} from './admin';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }
  adminUrl = 'http://localhost:49497/api/admin/2';

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.adminUrl);
  }
}
