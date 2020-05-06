import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Backup} from './backup';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  constructor(private http: HttpClient) { }

  backupUrl = environment.serverName + 'backup';
  sourceUrl = environment.serverName + 'backup_source';
  targetUrl = environment.serverName + 'backup_target';
  timeUrl = environment.serverName + 'backup_time';

  getBackup(): Observable<Backup[]> {
    return this.http.get<Backup[]>(this.backupUrl);
  }
  getSource(): Observable<Source>
}
