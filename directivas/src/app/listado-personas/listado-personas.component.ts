import { Component , Input,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-personas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listado-personas.component.html',
  styleUrl: './listado-personas.component.css'
})
export class ListadoPersonasComponent {
  @Input() persona: any; 
  @Output() personaSeleccionada = new EventEmitter<any>();
  @Output() nombreCambiado = new EventEmitter<string>();
  @Output() apellidosCambiados = new EventEmitter<string>();
  @Output() edadCambiada = new EventEmitter<number>();
  personas: any = {};
  cambiarNombre(nuevoNombre: string) {
    this.persona.nombre = nuevoNombre;
    this.nombreCambiado.emit(nuevoNombre);
  }

  cambiarApellidos(nuevosApellidos: string) {
    this.persona.apellidos = nuevosApellidos;
    this.apellidosCambiados.emit(nuevosApellidos);
  }

  cambiarEdad(nuevaEdad: number) {
    this.persona.edad = nuevaEdad;
    this.edadCambiada.emit(nuevaEdad);
  }
  seleccionada: boolean = false;
  esMenorDeEdad(): boolean {
    return this.persona.edad < 18;
  }
  seleccionarPersona() {
    this.seleccionada = !this.seleccionada;
    if (this.seleccionada) {
      this.personaSeleccionada.emit(this.persona);
    } else {
    }
  }
}

