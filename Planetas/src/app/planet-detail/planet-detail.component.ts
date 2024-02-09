import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetasService } from '../services/planetas.service';
import { AsyncPipe } from '@angular/common';
import { Result } from '../model/planet';
@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css',
})
export class PlanetDetailComponent implements OnInit {
  detallePlaneta$ = new Observable<Result>();
  constructor(private detalle: PlanetasService) {}
  ngOnInit(): void {
    this.detallePlaneta$ = this.detalle.getDetalles();
  }
}
