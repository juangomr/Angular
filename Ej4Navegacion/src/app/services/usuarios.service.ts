import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/model.usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getListaUsuarios() {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getDetalleUsuario(idUsuario: number) {
    return this.http.get<Usuario>(this.apiUrl + '/' + idUsuario);
  }
}
