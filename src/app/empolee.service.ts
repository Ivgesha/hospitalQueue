import { IEmployee } from './iemployee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpoleeService {

  _url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
