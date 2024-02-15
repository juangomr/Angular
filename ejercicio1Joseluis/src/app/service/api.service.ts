import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getUsuario(num: number) {
    return this.http.get<Usuario>(this.apiUrl + '/' + num);
  }
}
