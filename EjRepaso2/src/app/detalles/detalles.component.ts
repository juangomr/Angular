import { Component, OnInit } from '@angular/core';
import { Actor, Pelicula } from '../model/model.peliculas';
import { Observable } from 'rxjs';
import { PeliculasService } from '../services/peliculas.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {
  detallesActor?: Observable<Actor>;
  constructor(private obtenerActor: PeliculasService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.detallesActor = this.obtenerActor.getListaDetalles();
  }
}
