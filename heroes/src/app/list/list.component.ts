import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  booleano: boolean = true;
  mensaje: string = '';
  arrayHeroes: string[] = ['Batman', 'Hulk', 'Deadpool', 'Capitán América'];

  borrarHeroe() {
    if (this.arrayHeroes.length > 0) {
      this.mensaje = this.arrayHeroes[this.arrayHeroes.length - 1];
      this.arrayHeroes.pop();
      this.booleano = false;
    }
  }
}
