import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  tituloCounter: string = 'Contador';
  valor: number = 10;

  sumar() {
    this.valor++;
  }
  restar() {
    this.valor--;
  }
  resetear() {
    this.valor = 10;
  }
}
