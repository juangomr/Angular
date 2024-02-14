import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GatosService } from '../services/gatos.service';
import { Gato } from '../model/model.gato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breeds.component.html',
  styleUrl: './breeds.component.css'
})
export class BreedsComponent implements OnInit {
  raza?: Observable<Gato>;

  constructor(private obtenerRaza: GatosService) { }

  ngOnInit(): void {
    this.raza = this.obtenerRaza.getRaza();
  }

}
