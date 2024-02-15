import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../model/model.serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  api = 'https://api.tvmaze.com/shows/5';
  constructor(private http: HttpClient) {}

  getSeries() {
    return this.http.get<Serie>(this.api);
  }
}
