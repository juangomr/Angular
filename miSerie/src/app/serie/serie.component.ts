import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/model.serie';
import { Observable } from 'rxjs';
import { SerieService } from '../services/serie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css',
})
export class SerieComponent implements OnInit {
  series?: Observable<Serie>;
  constructor(private obtenerSerie: SerieService) {}
  ngOnInit(): void {
    this.series = this.obtenerSerie.getSeries();
  }
}
