import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Peliculas } from '../model/model.peliculas';
import { PeliculasService } from '../services/peliculas.service';
import { CommonModule } from '@angular/common';
import {  RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})
export class ListaPeliculasComponent implements OnInit {
  listaPelis$?: Observable<Peliculas>;
  constructor(private obtenerPelis: PeliculasService) { }
  ngOnInit(): void {
    this.listaPelis$ = this.obtenerPelis.getListaPeliculas();
  }

}
