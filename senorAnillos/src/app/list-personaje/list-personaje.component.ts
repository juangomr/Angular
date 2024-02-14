import { Component, OnInit } from '@angular/core';
import { AnillosService } from '../services/anillos.service';
import { Personaje } from '../../model/personaje';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css',
})
export class ListPersonajeComponent implements OnInit {
  personajes: Personaje[] = [];

  constructor(private anillosService: AnillosService) {}

  ngOnInit(): void {
    this.obtener();
  }

  obtener() {
    this.personajes = this.anillosService.getPersonajes();
  }

  eliminar(id: number) {
    this.anillosService.eliminar(id);
    this.obtener();
  }
}
