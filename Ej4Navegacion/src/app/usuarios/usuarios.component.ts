import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/model.usuario';
import { UsuariosService } from '../services/usuarios.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  listaUsuario$ = new Observable<Usuario[]>();
  constructor(private obtenerUsuario: UsuariosService) {}
  ngOnInit(): void {
    this.listaUsuario$ = this.obtenerUsuario.getListaUsuarios();
  }
}
