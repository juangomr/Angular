import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from '../model/model.interfaz';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  numero: number = 0;
  constructor(private ObtenerUsuario: UsersService) { }
  datosUsuario$ = new Observable<Usuario>();
  traerDatos() {
    this.datosUsuario$ = this.ObtenerUsuario.getUsuario(this.numero);
    console.log(this.datosUsuario$);
  }
}
