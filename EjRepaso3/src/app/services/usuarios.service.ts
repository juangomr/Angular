import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/model.usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiUrl = "https://randomuser.me/api/"
  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.get<Usuario>(this.apiUrl);
  }

  getUsuarios() {
    return this.http.get<Usuario>(this.apiUrl + "?results=10");
  }
}
