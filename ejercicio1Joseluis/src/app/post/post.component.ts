import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/model';
import { PostService } from '../service/post.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  post?: Observable<Post[]>;
  constructor(private obtenerDatos: PostService) {}
  getDatos() {
    this.post = this.obtenerDatos.getPost();
  }
}
