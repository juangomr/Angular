import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComponenteHijoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EjercicioRepaso';
  nombre: string = 'Juan';
  nota: number = 10;
  verdadero: boolean = false;
  cambiarNombre() {
    this.verdadero = true;
  }
  cambiarNota() {}
}
