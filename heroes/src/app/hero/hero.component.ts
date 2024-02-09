import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  tituloHeroe: string = 'Heroes';
  nombre: string = 'Ironman';
  nombreMayusculas: string = this.nombre.toUpperCase();
  edad: number = 0;

  cambiarEdad() {
    this.edad = 18;
  }

  cambiarNombre() {
    this.nombre = 'Spiderman';
  }
}
