import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actor, Pelicula, Peliculas } from '../model/model.peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getListaPeliculas() {
    return this.http.get<Peliculas>("assets/peliculas.json");
  }

  getListaDetalles() {
    return this.http.get<Actor>("assets/peliculas.json");
  }
}
