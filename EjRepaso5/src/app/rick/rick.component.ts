import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Rick } from '../model/model.rick';
import { RickService } from '../services/rick.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rick',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './rick.component.html',
  styleUrl: './rick.component.css'
})
export class RickComponent {

    personajes?: Observable<Rick>;
  constructor(private obtenerPersonajes: RickService) { }
  mostrarRick() {
    this.personajes = this.obtenerPersonajes.getRick();
  }
}
