import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface Articulo {
  nombre: string;
  precio: number;
  unidades: number;
}
@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  nuevoArticulo: Articulo = {
    nombre: '',
    precio: 0,
    unidades: 0
  };

  articulos: Articulo[] = [];

  agregarArticulo() {
    const nuevoArticulo = { ...this.nuevoArticulo };
    this.articulos.push(nuevoArticulo);
    this.nuevoArticulo = { nombre: '', precio: 0, unidades: 0 };
  }
}
