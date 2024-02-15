import { Injectable } from '@angular/core';
import { Personaje } from '../../model/personaje';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  constructor() {}

  personajes: Personaje[] = [
    { id: 0, nombre: 'juan', raza: 'pastor-alemán' },
    { id: 1, nombre: 'fran', raza: 'pastor-alemán' },
    { id: 2, nombre: 'antonio', raza: 'pastor-alemán' },
  ];

  getPersonajes() {
    return this.personajes;
  }
  eliminar(id: number) {
    this.personajes = this.personajes.filter(
      (personaje) => personaje.id !== id
    );
  }

  agregarP(nuevoPersonaje: Personaje) {
    const nuevoId =
      this.personajes.length > 0
        ? this.personajes[this.personajes.length - 1].id + 1
        : 1;
    nuevoPersonaje.id = nuevoId;
    this.personajes.push(nuevoPersonaje);
  }
}
