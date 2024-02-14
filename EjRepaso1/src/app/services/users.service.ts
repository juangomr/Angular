import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/model.interfaz';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = "https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }
  getUsuario(num: number) {
    return this.http.get<Usuario>(this.apiUrl + "/" + num);
  }
}
