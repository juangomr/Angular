import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/model.usuario';
import { UsuariosService } from '../services/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aleatorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent implements OnInit {
  User?: Observable<Usuario>;
  constructor(private obtenerUsuario: UsuariosService) { }
  ngOnInit(): void {
    this.User = this.obtenerUsuario.getUsuario();
  }
}
