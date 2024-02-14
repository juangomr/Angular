import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/model.usuario';
import { UsuariosService } from '../services/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {
  usuarios?: Observable<Usuario>;
  constructor(private obtenerUsuarios: UsuariosService) { }
  ngOnInit(): void {
    this.usuarios = this.obtenerUsuarios.getUsuarios();
  }
}
