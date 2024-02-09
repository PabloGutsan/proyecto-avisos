import { Injectable } from '@angular/core';
import { POSTS } from './result.json'
import {Post} from './result'
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private urlEndPoint:string = 'http://localhost:8080/api/posts';

  private httpHeaders = new HttpHeaders({'content-type' : 'application/json'})

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Post[])
    );
  }

  create(post: Post): Observable<Post>{
    return this.http.post(this.urlEndPoint, post,{headers: this.httpHeaders})
  }

  getPost(id: any): Observable<Post>{
    return this.http.get<Post>(`${this.urlEndPoint}/${id}`)
    
  }

  
}
