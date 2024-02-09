import { Component, Input } from '@angular/core';
import { CaracteristicasArticuloComponent } from '../caracteristicas-articulo/caracteristicas-articulo.component';

@Component({
  selector: 'app-listado-articulos',
  standalone: true,
  imports: [CaracteristicasArticuloComponent],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css',
})
export class ListadoArticulosComponent {
  @Input()
  articuloIndividual: any;
  @Input()
  indice: any;

  arrayCaracteristicas = [];

  agregarCaracteristicas(nuevo: string) {
    /*
    this.arrayCaracteristicas.push(nuevo);
    */
  }
}
