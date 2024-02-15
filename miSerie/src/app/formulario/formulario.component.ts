import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ResumenComponent, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  serieHijo: string = '';
  nombreHijo: string = '';
  correoHijo: string = '';
  botonOk: boolean = false;
  mostrar: boolean = false;
  mensajeError: boolean = false;
  valoracionRecibida: string = '';
  @Output()
  selected = new EventEmitter<any>();

  resumenHijo() {
    if (this.correoHijo != '' && this.correoHijo != null) {
      this.botonOk = true;
      this.selected.emit(this.serieHijo);
      this.selected.emit(this.nombreHijo);
      this.selected.emit(this.correoHijo);
    } else {
      this.mensajeError = true;
    }
  }

  mostrarRespuesta(mensaje: string) {
    this.valoracionRecibida = mensaje;
    this.mostrar = true;
  }
}
