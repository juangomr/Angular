import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/model.libros';
import { BooksService } from '../services/books.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {
  array: Libro[] = [];

  constructor(private obtenerLibro: BooksService) { }

  ngOnInit(): void {
    this.array = this.obtenerLibro.getLibros();
  }



}
