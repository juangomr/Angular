import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Libro } from '../model/model.libros';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit {

  libro: Libro = { id: 0, titulo: "", autor: "" };
  constructor(private obtenerLibroDetalle: BooksService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const libroId = this.router.snapshot.params['id'];
    this.libro = this.obtenerLibroDetalle.getLibro(libroId);
  }

}
