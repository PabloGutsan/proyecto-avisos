import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '../result/result'


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private urlEndPoint:string = 'http://localhost:8080/api/posts';


  constructor(private http: HttpClient) { }

  getPost(id: any): Observable<Post>{
    return this.http.get<Post>(`${this.urlEndPoint}/${id}`)
}
}
