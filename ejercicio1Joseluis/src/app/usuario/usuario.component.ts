import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/model';
import { ApiService } from '../service/api.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  usuario?: Observable<Usuario>;
  num: number = 0;
  constructor(private obtenerUsuario: ApiService) {}
  getJuan() {
    this.usuario = this.obtenerUsuario.getUsuario(this.num);
  }
}
