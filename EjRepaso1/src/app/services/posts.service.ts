import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Post } from '../model/model.interfaz';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
