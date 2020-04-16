import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Admin} from './admin';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }
  adminUrl = 'https://api.github.com/users/BruhTheMomentum';

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.adminUrl);
  }
}
