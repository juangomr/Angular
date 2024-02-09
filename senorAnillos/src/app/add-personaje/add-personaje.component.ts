import { Component, OnInit } from '@angular/core';
import { AnillosService } from '../services/anillos.service';
import { Personaje } from '../model/personaje';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-personaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css',
})
export class AddPersonajeComponent {
  constructor(private obtenerPersonaje: AnillosService) {}

  nuevoPersonaje: Personaje = { id: 0, nombre: '', raza: '' };

  anadirPersonaje(personaje: Personaje) {}
}
