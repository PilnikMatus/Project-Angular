import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Client } from './client';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  constructor(private http: HttpClient) { }
  clientUrl = environment.serverName + 'client';

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl);
  }
  postClient(client: Client): Observable<Client>{
    console.log(client);
    return this.http.post<Client>(this.clientUrl, client);
  }
}
