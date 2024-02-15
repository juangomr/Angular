import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent {
  @Input()
  seriePadre: string = '';
  @Input()
  correoPadre: string = '';
  @Input()
  nombrePadre: string = '';
  @Input()
  valoracionHijo: string = '';

  @Output()
  selected = new EventEmitter<string>();

  enviarValoracion() {
    this.selected.emit(this.valoracionHijo);
  }
}
