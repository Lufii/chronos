import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  public getPosts(): Observable<any>
  {
    const url = 'http://localhost:72/posts';
    return this.http.get<any>(url);
  }

  public addPost(content): Observable<any>
  {
    const url = 'http://localhost:72/post/add';
    return this.http.post<any>(url, content);
  }

  constructor(private http: HttpClient) { }
}
