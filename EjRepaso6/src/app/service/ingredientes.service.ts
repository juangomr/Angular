import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingrediente } from '../model/model.ingredientes';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {
  api = "https://www.themealdb.com/api/json/v1/1/random.php";
  constructor(private http: HttpClient) { }

  getReceta() {
    return this.http.get<Ingrediente>(this.api);
  }
}
