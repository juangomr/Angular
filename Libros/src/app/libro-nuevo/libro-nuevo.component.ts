import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { Libro } from '../model/model.libros';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-nuevo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-nuevo.component.html',
  styleUrl: './libro-nuevo.component.css'
})
export class LibroNuevoComponent {

  constructor(private obtenerLibros: BooksService, private route: Router) { }
  idLibro = this.obtenerLibros.getLibros().length + 1;
  arrayLibro: Libro = { id: this.idLibro, titulo: "", autor: "" };

  altaLibro() {
    this.obtenerLibros.addLibro(this.arrayLibro);
    this.route.navigate(['/libros']);
  }
}
