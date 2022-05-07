import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUser(userName: string): Observable<HttpResponse<any>> {
    return this.http
      .get<any>(Constants.base_url + `/users/${userName}`, {
        observe: 'response',
      })
      .pipe(retry(3));
  }
}
