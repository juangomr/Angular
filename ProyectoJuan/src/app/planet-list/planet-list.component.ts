import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planeta } from '../model/planet';
import { PlanetasService } from '../services/planetas.service';
@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css',
})
export class PlanetListComponent implements OnInit {
  listaPlanetas$ = new Observable<Planeta>();
  constructor(private servicioPlaneta: PlanetasService) {}

  ngOnInit(): void {
    this.listaPlanetas$ = this.servicioPlaneta.getPlaneta();
  }
}
