import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnillosService } from '../services/anillos.service';

@Component({
  selector: 'app-add-personaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css',
})
export class AddPersonajeComponent {
  nombre: string = '';
  raza: string = '';
  id: number = 0;
  constructor(private anillosService: AnillosService) {}
  agregar(): void {
    if (this.nombre && this.raza) {
      this.anillosService.agregarP({
        id: this.id,
        nombre: this.nombre,
        raza: this.raza,
      });
      this.nombre = '';
      this.raza = '';
    }
  }
}
