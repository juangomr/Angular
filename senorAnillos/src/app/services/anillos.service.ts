import { Injectable } from '@angular/core';
import { Personaje } from '../model/personaje';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  arrayPersonaje: Personaje[] = [
    {
      id: 1,
      nombre: 'Juan',
      raza: 'humano',
    },
    {
      id: 2,
      nombre: 'Anama',
      raza: 'orco',
    },
    {
      id: 3,
      nombre: 'Mateo',
      raza: 'Elfo',
    },
  ];

  constructor() {}
  getPersonaje() {
    return this.arrayPersonaje;
  }
}
