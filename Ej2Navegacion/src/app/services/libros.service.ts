import { Injectable } from '@angular/core';
import { libro } from '../model/libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  arrayLibros: libro[] = [
    {
      id: 1,
      titulo: '1984',
      autor: 'George Orwell',
    },
    {
      id: 2,
      titulo: 'Crónica de una muerte anunciada',
      autor: 'Gabriel García Márquez',
    },
    {
      id: 3,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
    },
    {
      id: 4,
      titulo: 'El señor de los anillos',
      autor: 'JRR Tolkien',
    },
  ];

  getLibros() {
    return this.arrayLibros;
  }

  getLibro(id: number): libro {
    return this.arrayLibros[id - 1];
  }

  constructor() {}
}
