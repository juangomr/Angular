import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gato } from '../model/model.gato';

@Injectable({
  providedIn: 'root'
})
export class GatosService {
  api = "https://catfact.ninja/breeds";
  constructor(private http: HttpClient) { }
  getRaza(){
    return this.http.get<Gato>(this.api);
  }
}
