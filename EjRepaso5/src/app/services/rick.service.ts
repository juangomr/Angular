import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episodio, Localizacion, Rick } from '../model/model.rick';

@Injectable({
  providedIn: 'root'
})
export class RickService {
  apiUrl = "https://rickandmortyapi.com/api/character/";
  apiEpisodio = "https://rickandmortyapi.com/api/episode";
  apiLocation = "https://rickandmortyapi.com/api/location";
  constructor(private http: HttpClient) { }
  getRick() {
    return this.http.get<Rick>(this.apiUrl);
  }

  getEpisodio() {
    return this.http.get<Episodio>(this.apiEpisodio);
  }

  getLocalizacion(){
    return this.http.get<Localizacion>(this.apiLocation);

  }
}
