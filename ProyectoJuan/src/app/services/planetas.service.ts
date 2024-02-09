import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planeta, Result } from '../model/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetasService {
  private apiUrl = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) {}

  getPlaneta() {
    return this.http.get<Planeta>(this.apiUrl + '?page=1');
  }

  getDetalles() {
    return this.http.get<Result>(this.apiUrl + '1');
  }
}
