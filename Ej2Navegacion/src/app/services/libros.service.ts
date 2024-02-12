import { Injectable } from '@angular/core';
import { libro } from '../model/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  arrayLibros: libro[] = [{
    id: 1,
    titulo: "1984",
    autor: "George Orwell",
    descripcion: "lorem ipsum",
    imagen: "https://cdn.pixabay.com/photo/2017/07/17/00/58/coffee-2511065_1280.jpg",
  }, {
    id: 2,
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    descripcion: "lorem ipsum",
    imagen: "https://cdn.pixabay.com/photo/2017/07/17/00/58/coffee-2511065_1280.jpg",
  }, {
    id: 3,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    descripcion: "lorem ipsum",
    imagen: "https://cdn.pixabay.com/photo/2017/07/17/00/58/coffee-2511065_1280.jpg",
  }, {
    id: 4,
    titulo: "El señor de los anillos",
    autor: "JRR Tolkien",
    descripcion: "lorem ipsum",
    imagen: "https://cdn.pixabay.com/photo/2017/07/17/00/58/coffee-2511065_1280.jpg",
  }]

  getLibro() {
    return this.arrayLibros;
  }

  constructor() { }
}
