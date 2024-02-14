import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetaComponent } from './receta/receta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjRepaso6';
}
