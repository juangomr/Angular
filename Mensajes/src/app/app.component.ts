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
  title = 'Mensajes';
  titulo: string = 'Mensaje Padre';
  mensajePadre: string = '';
  respuestaHijo: string = '';
  mostrarRespuesta(cadena: string) {
    this.respuestaHijo = cadena;
  }
}
