import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  constructor(private http: HttpClient) { }


  getItem<T>(url: string): Observable<T[]>{
    return this.http.get<T[]>(url);
  }
  getItemById<T>(url: string, id: number): Observable<T>{
    return this.http.get<T>(url + '/' + id);
  }
  postItem<T>(url: string, item: T): Observable<T>{
    return this.http.post<T>(url, item);
  }
  putItem<T>(url: string, item: T): Observable<void>{
    return this.http.put<void>(url, item);
  }
  deleteItem<T>(url: string, id: number): Observable<void>{
    return this.http.delete<void>(url + '/' + id);
  }


}
