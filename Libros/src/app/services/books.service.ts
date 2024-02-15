import { Injectable } from '@angular/core';
import { Libro } from '../model/model.libros';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  arrayLibros: Libro[] = [{ id: 1, titulo: "cien años de soledad", autor: "Gabriel García Márquez" }, { id: 2, titulo: "cronicas de una muerte anunciada", autor: "Gabriel García Márquez" }, { id: 3, titulo: "harry potter y la piedra filosofal", autor: "JK Rowling" }, { id: 4, titulo: "El señor de los anillos", autor: "JRR Tolkien" },]
  constructor() { }
  getLibros() {
    return this.arrayLibros;
  }

  getLibro(id: number) {
    return this.arrayLibros[id - 1];
  }

  addLibro(array: Libro) {
    
    this.arrayLibros.push(array);

  }
}
