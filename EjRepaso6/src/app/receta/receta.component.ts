import { Component } from '@angular/core';
import { Ingrediente } from '../model/model.ingredientes';
import { Observable } from 'rxjs';
import { IngredientesService } from '../service/ingredientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css'
})
export class RecetaComponent {
  ingrediente?: Observable<Ingrediente>;
  constructor(private obtenerIngrediente: IngredientesService) {
  }

  conectarApi() {
    this.ingrediente = this.obtenerIngrediente.getReceta();
  }

  getIngredientes(receta: any): string[] {
    let ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = receta['strIngredient' + i];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }
  verInstrucciones: boolean = false;
  getInstrucciones() {
    this.verInstrucciones = true;

  }

  otraReceta() {
    this.ingrediente = this.obtenerIngrediente.getReceta();
  }
}
