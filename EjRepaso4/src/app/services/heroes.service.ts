import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../model/model.heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  apiUrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  constructor(private http: HttpClient) { }

  getHeroe() {
    return this.http.get<Heroe>(this.apiUrl);
  }
}
