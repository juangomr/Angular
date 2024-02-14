import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/model.interfaz';
import { PostsService } from '../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  listaPosts$ = new Observable<Post[]>();
  constructor(private obtenerPost: PostsService) { }
  pintarDatos() {
    this.listaPosts$ = this.obtenerPost.getPosts();

  }
}
