import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css',
})
export class ComponenteHijoComponent {
  @Input()
  mensajeHijo: string = '';

  @Output()
  selected = new EventEmitter<string>();

  respuesta: string = '';
  enviarRespuesta() {
    this.selected.emit(this.respuesta);
  }
}
