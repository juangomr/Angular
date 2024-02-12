import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Observable } from 'rxjs';
import { Usuario } from '../model/model.usuario';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css',
})
export class DetalleUsuarioComponent implements OnInit {
  listaDetallesUsuario$ = new Observable<Usuario>();
  empresa = new Observable<Usuario>();
  constructor(
    private DetallesUsuario: UsuariosService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const usuarioId = this.route.snapshot.params['id'];
    this.listaDetallesUsuario$ =
      this.DetallesUsuario.getDetalleUsuario(usuarioId);
  }
}
