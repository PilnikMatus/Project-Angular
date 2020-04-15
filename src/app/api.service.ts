import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  public getAdmins() {
    return this.httpClient.get('http://localhost:4200/admin/2');
  }
}
