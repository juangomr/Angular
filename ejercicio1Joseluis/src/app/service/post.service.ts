import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPost() {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
