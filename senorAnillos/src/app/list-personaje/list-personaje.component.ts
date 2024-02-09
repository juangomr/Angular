import { Component, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { AnillosService } from '../services/anillos.service';
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

  constructor(private obtenerPersonaje: AnillosService) {}
  ngOnInit(): void {
    this.personajes = this.obtenerPersonaje.getPersonaje();
  }

  eliminarPersonaje(id: number) {
    this.personajes = this.personajes.filter((p) => p.id !== id);
  }
}
