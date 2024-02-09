import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';


interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule, ArticuloComponent,ListadoPersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string = '';
  apellidos: string = '';
  altaCorrecta: boolean = false;
  nombreCompleto: string = '';
  textoSeleccionado: string = 'No ha seleccionado ningún botón';
  altaUsuario() {
    this.nombreCompleto = `${this.nombre} ${this.apellidos}`;
    this.altaCorrecta = true;
}
personas: Persona[] = [
  { nombre: 'Juan', apellidos: 'Gómez', edad: 25 },
  { nombre: 'Juan', apellidos: 'Gómez', edad: 30 }
];
personaSeleccionada: any;

  mostrarPersonaSeleccionada(persona: any) {
    this.personaSeleccionada = persona;
  }
  actualizarNombre(persona: any, nuevoNombre: string) {
    persona.nombre = nuevoNombre;
  }

  actualizarApellidos(persona: any, nuevosApellidos: string) {
    persona.apellidos = nuevosApellidos;
  }

  actualizarEdad(persona: any, nuevaEdad: number) {
    persona.edad = nuevaEdad;
  }
seleccionarOpcion(opcion: string) {
  switch (opcion) {
    case 'A':
      this.textoSeleccionado = 'Ha pulsado el botón A';
      break;
    case 'B':
      this.textoSeleccionado = 'Ha pulsado el botón B';
      break;
    case 'C':
      this.textoSeleccionado = 'Ha pulsado el botón C';
      break;
    default:
      this.textoSeleccionado = 'No ha seleccionado ningún botón';
  }
}
}

